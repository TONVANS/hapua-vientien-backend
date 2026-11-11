# ------------------------------------------------------------------------------
# Stage 1: Build NestJS Application & Prisma Client
# ------------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install native dependencies required for compiling native modules (bcrypt, sharp, etc.)
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package manifests and Prisma schema
COPY package*.json ./
COPY prisma.config.ts ./
COPY prisma ./prisma

# Install all dependencies
RUN npm ci || npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy application sources
COPY tsconfig*.json nest-cli.json ./
COPY src ./src

# Build NestJS production bundles
RUN npm run build

# ------------------------------------------------------------------------------
# Stage 2: Production Runtime Image
# ------------------------------------------------------------------------------
FROM node:20-alpine AS runner

WORKDIR /app

# Install runtime utilities:
# - curl: for container healthcheck
# - ffmpeg: for media processing
# - dumb-init: for proper PID 1 signal forwarding
# - libc6-compat: for Prisma musl libc compatibility
RUN apk add --no-cache curl ffmpeg libc6-compat dumb-init

ENV NODE_ENV=production
ENV APP_PORT=3001

# Copy dependencies and build artifacts from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma.config.ts ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist

# Copy entrypoint script and normalize line endings
COPY docker-entrypoint.sh ./
RUN sed -i 's/\r$//' docker-entrypoint.sh && chmod +x docker-entrypoint.sh

# Create uploads storage directories
RUN mkdir -p /app/uploads/temp

EXPOSE 3001

ENTRYPOINT ["/usr/bin/dumb-init", "--", "./docker-entrypoint.sh"]
CMD ["node", "dist/src/main.js"]


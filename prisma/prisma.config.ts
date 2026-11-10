import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

export default {
  earlyAccess: true,
  schema: './schema.prisma',
};

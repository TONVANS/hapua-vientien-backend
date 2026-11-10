const { Client } = require('pg');
const { execSync } = require('child_process');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  console.error('❌ Error: DATABASE_URL is not set in .env');
  process.exit(1);
}

// Parse database URL
const parsedUrl = new URL(dbUrl);
const dbName = parsedUrl.pathname.replace(/^\//, '');
const host = parsedUrl.hostname;
const port = parseInt(parsedUrl.port || '5432', 10);
const user = parsedUrl.username;
const password = parsedUrl.password;

async function initDb() {
  console.log('====================================================');
  console.log('  HAPUA Vientiane - Production DB Initialization    ');
  console.log('====================================================');
  console.log(`Target Host: ${host}:${port}`);
  console.log(`Database:    ${dbName}`);
  console.log(`User:        ${user}`);

  // 1. Connect to default postgres database to check/create target database
  const maintenanceClient = new Client({
    host,
    port,
    user,
    password,
    database: 'postgres',
  });

  try {
    console.log('\n[1/3] Connecting to PostgreSQL maintenance database...');
    await maintenanceClient.connect();
    console.log(' Connected.');

    const checkRes = await maintenanceClient.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName],
    );

    if (checkRes.rowCount === 0) {
      console.log(` Database "${dbName}" does not exist. Creating...`);
      await maintenanceClient.query(`CREATE DATABASE "${dbName}" WITH ENCODING = 'UTF8'`);
      console.log(`✅ Database "${dbName}" created successfully.`);
    } else {
      console.log(`✅ Database "${dbName}" already exists.`);
    }
  } catch (err) {
    console.error('❌ Failed to connect or create database:', err.message);
    process.exit(1);
  } finally {
    await maintenanceClient.end();
  }

  // 2. Run Prisma Migrations
  try {
    console.log('\n[2/3] Running Prisma migrations (npx prisma migrate deploy)...');
    execSync('npx prisma migrate deploy', {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: dbUrl },
    });
    console.log('✅ Prisma migrations deployed successfully.');
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    process.exit(1);
  }

  // 3. Run Prisma Seed
  try {
    console.log('\n[3/3] Checking / running database seed (npx prisma db seed)...');
    execSync('npx prisma db seed', {
      cwd: path.resolve(__dirname, '..'),
      stdio: 'inherit',
      env: { ...process.env, DATABASE_URL: dbUrl },
    });
    console.log('✅ Database seeded successfully.');
  } catch (err) {
    console.warn('⚠️ Seeding returned warning or was skipped:', err.message);
  }

  console.log('\n====================================================');
  console.log('  Production database is fully initialized & ready! ');
  console.log('====================================================\n');
}

initDb();


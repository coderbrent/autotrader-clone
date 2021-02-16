const path = require('path');
const envPath = path.resolve(process.cwd(), 'env.local');

console.log(envPath)
require('dotenv').config({ path: '.env.local'})

const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: 'z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    database: 'o7qvmf7yelzgeopq',
    user: 'lchcf3hkpi23ro2e',
    password: 'olgj388pnmfog3li',
  },
});

async function query(q) {
  try {
    const results = await db.query(q)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
};

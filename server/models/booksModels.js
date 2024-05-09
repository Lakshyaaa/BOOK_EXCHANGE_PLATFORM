const { Pool } = require('pg');
const PG_URI = 'postgres://postgres.ierbfdxdkiwiyusnreqc:Lakshya@123@aws-0-ap-south-1.pooler.supabase.com:5432/postgres';
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

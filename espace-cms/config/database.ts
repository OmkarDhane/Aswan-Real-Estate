postgres: {
  connection: {
    connectionString: env('DATABASE_URL'),
    // Render साठी SSL गरजेचं असतं
    ssl: {
      rejectUnauthorized: false, 
    },
  },
  pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
},
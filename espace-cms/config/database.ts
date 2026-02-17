import path from 'path';

export default ({ env }: { env: any }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Default postgres करा

  const connections = {
    postgres: {
      connection: {
        // आपण वर बदललेलं नवीन नाव इथे वापरायचं
        connectionString: env('DB_URL_V2'), 
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
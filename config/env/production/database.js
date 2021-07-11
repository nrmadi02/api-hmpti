module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "103.55.37.104"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi"),
        username: env("DATABASE_USERNAME", "hmptiuniska"),
        password: env("DATABASE_PASSWORD", "hmp"),
      },
      options: {
        ssl: false,
      },
    },
  },
});

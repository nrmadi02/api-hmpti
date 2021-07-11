module.exports = {
  apps: [
    {
      name: "strapi",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "127.0.0.1", // database endpoint
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi", // DB name
        DATABASE_USERNAME: "hmptiuniska", // your username for psql
        DATABASE_PASSWORD: "hmp", // your password for psql
      },
    },
  ],
};

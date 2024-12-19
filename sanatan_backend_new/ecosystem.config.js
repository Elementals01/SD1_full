module.exports = {
    apps: [
      {
        name: "SanatanBackend",
        script: "./index.js",
        env: {
          PORT: 4000,
          MONGODB_URI: "mongodb+srv://sanatandharmaya:N3LJYI12vZcvmspS@sanatandharmaya.oftidvs.mongodb.net",
          DB_NAME: "sanatandharama",
        },
      },
    ],
  };
  
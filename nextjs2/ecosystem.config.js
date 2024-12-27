module.exports = {
    apps: [
      {
        name: "frontendTwo",
        script: "pnpm", //will run using pnpm
        args: "start", // Use pnpm start to run the Next.js production build
  //      instances: 3, // Specify the number of instances
        exec_mode: "fork", // Ensure cluster mode
        watch: false, // Disable watch for production
        max_memory_restart: "1G", // Restart if memory exceeds 1GB
        env: {
          NODE_ENV: "production", // Set the environment variable
          PORT: 3003 // Next.js handles clustering on the same port
        }
      }
    ]
  };
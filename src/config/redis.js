import { createClient } from 'redis';
const redisClient = createClient(
    {
        url:process.env.REDIS_URL,
        socket: {
            tls: true,
            rejectUnauthorized: false, // only for dev
          },
    }
);
redisClient.connect();
redisClient.on("error", (err) => console.error("Redis error:", err));
export default redisClient;

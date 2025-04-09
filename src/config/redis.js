import { createClient } from 'redis';
const redisClient = createClient(
    {
        url:process.env.REDIS_URL
    }
);
redisClient.connect();
redisClient.on("error", (err) => console.error("Redis error:", err));
export default redisClient;

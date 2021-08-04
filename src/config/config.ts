import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_CLUSTER: process.env.MONGO_CLUSTER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_NAME: process.env.MONGO_NAME,
    PORT: process.env.PORT || 3000
}
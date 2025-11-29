import { MongoClient } from 'mongodb';
const mongoUrl = process.env.MONGODB_URL;
const mongoClient = new MongoClient(mongoUrl);
const dbName = 'MongoLogs';

let db = null;

export const connectMongo = async () => {
    if (db) return db;

    await mongoClient.connect();
    db = mongoClient.db(dbName);

    return db;
};

export const getOrCreateMongoCollection = async (collectionName) => {
    const db = await connectMongo();

    const collections = await db.listCollections({ name: collectionName }).toArray();

    if (!collections) {
        const collection = await db.createCollection(collectionName);
    }

    return db.collection(collectionName);
}

import { MongoClient } from "mongodb";
import process from 'process'


function mongo (db: string) {
    const client = new MongoClient(process.env.DB_HOST!)
    return client.db(db)
}

mongo.collection = (collection : string) =>  {
    return mongo('utyemma').collection(collection)
}

mongo.timestamps = {
    createdAt: new Date(),
    updatedAt: new Date()
}

export default mongo;
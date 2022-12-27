import { MongoClient } from "mongodb";
import process from 'process'


async function mongo (db: string) {
    const client = new MongoClient(process.env.DB_HOST!)
    const mongo = client.connect()
    const connection = await mongo
    return connection.db(db)
}

function collection(collection : string)  {
    return mongo('utyemma').then(db => db.collection(collection))
}

mongo.collection = collection
export default mongo;
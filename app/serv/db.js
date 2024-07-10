import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://enpa:B6PHlR6a3DAzFCe8@enpa.cb7lbqh.mongodb.net/?retryWrites=true&w=majority&appName=enpa"

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


await client.connect();
const db = client.db("xposter")
const colContent = db.collection("messages")

await colContent.insertOne({"msg": "asd"})
await client.close();
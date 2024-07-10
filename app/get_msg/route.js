import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_STRING

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export async function GET() {
    await client.connect();
    const db = client.db("xposter")
    const colContent = db.collection("messages")

    const result = await colContent.find({}).toArray()
    await client.close();

    return Response.json({msg : result})
}
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.DB_STRING

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(request) {
    try {
      const body = await request.json()
      const msg = body.msg;
      console.log(msg)
      await client.connect();
      const db = client.db("xposter")
      const colContent = db.collection("messages")

      await colContent.insertOne({"msg": msg})
      await client.close();

      return Response.json({msg : "ok"})
    } catch (e) {
      console.error(e)
      return
    }
    
}
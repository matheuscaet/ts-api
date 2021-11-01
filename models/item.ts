import { Schema, model, connect, ObjectId } from 'mongoose';

const url = "mongodb://matheuscaet:mongopassword20092021@cluster0-shard-00-00.cfpvj.mongodb.net:27017,cluster0-shard-00-01.cfpvj.mongodb.net:27017,cluster0-shard-00-02.cfpvj.mongodb.net:27017/myFirstDatabase?authSource=admin&replicaSet=atlas-1023j9-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";

// 1. Create an interface representing a document in MongoDB.
interface iItem {
    _id: {type: ObjectId, required: true},
    name: string,
    desc: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<iItem>({
  name: { type: String, required: true },
  desc: { type: String, required: true }
});

// 3. Create a Model.
const ItemModel = model<iItem>('items', schema);

run().catch(err => console.log(err));

async function run(): Promise<void> {
  // 4. Connect to MongoDB
  await connect('mongodb://localhost:27017/test');

  const doc = new ItemModel({
    name: 'Bill',
    desc: 'bill@initech.com'
  });
  await doc.save();

  console.log(doc.name);
}
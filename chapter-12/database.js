// In this chapter we'll learn mongoDB.

const url =
  "mongodb+srv://nitinshukla12004:QnHTjbVGORRrlJVC@nodejslearning.ldcg1.mongodb.net/"; // It is the connection string called URI. It is basically a URL with which we are connected with the remote aws server in which mongoDB deployed our database.

const { MongoClient } = require("mongodb");

const client = new MongoClient(url);

const dbName = "UserData";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");
//   console.log(collection);

  const doc1 = {
    firstname: "John",
    lastname: "Doe",
    city: "London",
    country: "UK"
  };

  const doc2 = {
    firstname: "Shivani",
    lastname: "Pandey",
    city: "kanpur",
    country: "India"
  }

  const insertResult = await collection.insertMany([doc1, doc2]);
  console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  const updateResult = await collection.updateOne({ firstname: "Nitin" }, { $set: { phoneno: "8934534322" } });
  console.log('Updated documents =>', updateResult);

  const deleteResult = await collection.deleteMany({ firstname: "John" });
  console.log('Deleted documents =>', deleteResult);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


// We have performed all the CRUD operations here.

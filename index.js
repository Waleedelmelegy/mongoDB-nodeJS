const { MongoClient } = require("mongodb");
require("dotenv").config();
// Replace the uri string with your connection string.
// const uri =
//   "mongodb+srv://waleedelmelegy:6c9q0IZPQ78oBYtK@carcaffe.tsy51zp.mongodb.net/?retryWrites=true&w=majority&appName=carcaffe";
// console.log(process.env.connection);
const uri = `${process.env.connection}`;
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

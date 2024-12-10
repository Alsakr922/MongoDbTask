//. task :

//-- insertOne  2
//-- insertMany 10   5 of them have the same age 27 y
//--  find   match  27 y
//--  limit first 3    27y
//--  $set name for the first 4
//--  $inc age for the first 4
//--  updateone for 1  inc age 5
//--  updateMany  inc age 10
//  deleteMany  age 41   ==>> deletedCount

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbname = "Task-2-Back";

mongoClient.connect(connectionUrl, (error, data) => {
  if (error) {
    return console.log("Error has occurred");
  }
  console.log("Connected to MongoDB");

  const db = data.db(dbname);
  /////////////////////////////////////////////////////
  //-- insertOne  2

  // db.collection('users').insertOne({
  //     name : 'Mohamed',
  //     age : 21
  // } , (error , data) =>{
  //     if(error){
  //         console.log('Unable to insert data' , error)
  //     }
  //     console.log('Data inserted successfully' , data)
  //
  // })

  // db.collection('users').insertOne({
  //     name : 'Maysaa',
  //     age : 33,
  // } , (error , data) =>{
  //     if(error){
  //         console.log('Unable to insert data' , error)
  //     }
  //     console.log('Data inserted successfully' , data)
  // })
  ////////////////////////////////////////////////////
  //-- insertMany 10   5 of them have the same age 27 y

  // db.collection('users').insertMany([
  //     {
  //         name : 'Ahmed',
  //         age : 27
  //     },
  //     {
  //         name : 'Sameer',
  //         age : 27
  //     },
  //     {
  //         name : 'Yousef',
  //         age : 27
  //     },
  //     {
  //         name : 'Nada',
  //         age : 27
  //     },
  //     {
  //         name : 'Mohamed',
  //         age : 27
  //     },
  //     {
  //         name : 'Osman',
  //         age : 33
  //     },{
  //         name : 'Nada',
  //         age : 41
  //     },{
  //         name : 'Mohamed',
  //         age : 25
  //     },{
  //         name : 'Ibrahim',
  //         age : 38
  //     },
  //     {
  //         name : 'Ali',
  //         age : 33
  //     }

  // ] , (error , data) => {
  //     if(error){
  //         console.log('Unable to insert data' , error)
  //     }
  //     console.log('Data inserted successfully' , data)
  // })
  ////////////////////////////////////////////////////
  //--  find   match  27 y
  //--  limit first 3    27y

  // db.collection('users').find({age : 27}).limit(3).toArray((error, data) => {
  //     if(error){
  //         console.log('Unable to find data' , error)
  //     }
  //     console.log('First Three Users with age 27:', data)
  // })

  ////////////////////////////////////////////////////
  // db.collection('users').updateOne({name : 'Mohamed' }, { $inc : { age : 5 } }, (error, result) => {
  //     if(error){
  //         console.log('Unable to update data' , error)
  //     }
  //     console.log('Update one document:', result)
  // })
  ////////////////////////////////////////////////////
  // db.collection('users').updateMany({age:27})

  ////////////////////////////////////////////////////
  //--  $set name for the first 4
  //--  $inc age for the first 4

  //   db.collection("users")
  //     .updateOne(
  //       { __id: mongodb.ObjectId("675793731c8318756fabe0c1") },
  //       {
  //         $set: {name: "Hamam"},
  //         $inc: { age: 5 },
  //       }
  //     )
  //     .then((result) => console.log("Update one document:", result))
  //     .catch((error) => console.log("Error:", error));

  //   db.collection("users")
  //     .updateOne(
  //       { __id: mongodb.ObjectId("675793731c8318756fabe0c2") },
  //       {
  //         $set: {name: "Samara"},
  //         $inc: { age: 5 },
  //       }
  //     )
  //     .then((result) => console.log("Update one document:", result))
  //     .catch((error) => console.log("Error:", error));

  //   db.collection("users")
  //     .updateOne(
  //       { __id: mongodb.ObjectId("675793731c8318756fabe0c3") },
  //       {
  //         $set: {name: "Jo."},
  //         $inc: { age: 5 },
  //       }
  //     )
  //     .then((result) => console.log("Update one document:", result))
  //     .catch((error) => console.log("Error:", error));

  //   db.collection("users")
  //     .updateOne(
  //       { __id: mongodb.ObjectId("675793731c8318756fabe0c4") },
  //       {
  //         $set: {name: "Nono"},
  //         $inc: { age: 5 },
  //       }
  //     )
  //     .then((result) => console.log("Update one document:", result))
  //     .catch((error) => console.log("Error:", error));

  ////////////////////////////////////////////////////
  //--  updateone for 1  inc age 5

  // db.collection("users")
  //   .updateOne(
  //     { name: "Ibrahim" },
  //     {
  //       $inc: { age: 5 },
  //     }
  //   )
  //   .then((result) => console.log("Update one document:", result))
  //   .catch((error) => console.log("Error:", error));
  ///////////////////////////////////////////////////////////
  //--  updateMany  inc age 10
  // db.collection("users").updateMany({} , {
  //   $inc: { age: 10 },
  // })
  // .then((result) => console.log("Update one document:", result))
  // .catch((error) => console.log("Error:", error));

  ////////////////////////////////////////////////////////////////
  //  deleteMany  age 41   ==>> deletedCount
  //   db.collection("users").deleteMany({ age: 41 })
  //  .then((result) => console.log("Delete many documents:", result))
  //  .catch((error) => console.log("Error:", error));

  ///////////////////////////////////////////////////////////
});

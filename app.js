const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "task-6"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occured')
    }
    // console.log('Done')

    const db = res1.db(dbname)


    // to insert one: 
    // 1- the first document

    db.collection('users').insertOne({
        name:"Islam",
        age : 21
    },(error , data)=>{
        if(error){
            console.log("Unable to insert first document")
        }
        console.log(` first Document id : ${data.insertedId}`)
    })


    // 2- the second document

    db.collection('users').insertOne({
        name:"Sameh",
        age : 29
    })
        .then((data)=>{console.log(` Second Document id : ${data.insertedId}`)})
        .catch((error)=>{console.log(error)})
    

    // insert many 10 doucment 5 of 10 => age 25

    db.collection('users').insertMany(
        [
          {  name : "Ahmed",
            age : 25  } ,
            {  name : "Rasha",
            age : 25  } ,
            {  name : "khaled",
            age : 25  } ,
            {  name : "Sama",
            age : 25  } ,
            {  name : "Mohamed",
            age : 25  } ,
            {  name : "Dina",
            age : 26  } ,
            {  name : "kariem",
            age : 26  } ,
            {  name : "Aya",
            age : 26  } ,
            {  name : "Hassen",
            age : 26  } ,
            {  name : "Yara",
            age : 26  } 
            
        ]
    )
        .then((data)=>{console.log(`insert many: ${data.insertedCount}`)})
        .catch((error)=>{console.log(error)})


    // find match 25

    db.collection("users").find({age:25}).toArray((error , users)=>{
        if(error){return console.log(error)}
        console.log(users)
    })


    // limit 3 document 25 y 
    db.collection("users").find({age:25}).limit(3).toArray((error , users)=>{
        if(error){return console.log('error has occured')}
        console.log(users)
    })


    //$set name for 4 doucment :
    // set name for the fisrt

    db.collection("users").updateOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffba")},
    {
        $set : { name : "Mostafa"}
    })
        // .then((data)=>{console.log(`update one :${data.modifiedCount}`)})
        // .catch((error)=>{console.log(error)}) 


    // set name for the second

    db.collection("users").updateOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffbb")},
    {
        $set : { name : "Hany"}
    })
        // .then((data)=>{console.log(data.modifiedCount)})
        // .catch((error)=>{console.log(error)}) 


    // set name for the third

    db.collection("users").updateOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffbc")},
    {
        $set : { name : "Yasser"}
    })
        // .then((data)=>{console.log(data.modifiedCount)})
        // .catch((error)=>{console.log(error)}) 

        
    // set name for the fourth

    db.collection("users").updateOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffbd")},
    {
        $set : { name : "Alaa"}
    })
    // .then((data)=>{console.log(data.modifiedCount)})
    // .catch((error)=>{console.log(error)}) 



    // updata one for the first document  inc 20

    db.collection("users").updateOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffba")},
    {
        $inc : { age : 20}
    })
        .then((data)=>{console.log(`update one :${data.modifiedCount}`)})
        .catch((error)=>{console.log(error)}) 

    
    // updata many inc age 10

    db.collection("users").updateMany({},{
        $inc : {age : 10}
    })
        .then((data)=>{console.log("update many : " ,data.modifiedCount)})
        .catch((error)=>{console.log(error)}) 



    //delete one

    db.collection ("users").deleteOne({_id:mongodb.ObjectId("64db6bd92326c8133ac5ffba")})

        .then((data1) =>{console.log("delete one : " ,data1.deletedCount)})
        .catch((error)=> console.log(error))

    

    // //delete many

    db.collection ("users").deleteMany({age: 35 })

        .then((data1) =>{console.log("delete many : ", data1.deletedCount)})
        .catch((error)=> console.log(error))




})
use('forum');

// insert one
const doc = {
    title: "What is the best way to learn JavaScript from the ground up?",
    postId: NumberInt(3511),
    comments: 10,
    shared: true,
    tags: [
      "JavaScript",
      "programming"
    ],
    author: {
      name: "Mike Forester",
      nickname: "mikef"
    }
  };
db.posts.insertOne(doc);

// insert many without var

db.posts.insertMany([{
    title: "My thoughts about 12-factor App Methodology",
    postId: NumberInt(2618),
    comments: 0,
    shared: false,
    tags: [],
    author: {
      name: "Emily Watson",
      nickname: "emily23"
    }
  }
    ,
    {
        title: "Who can suggest best computer coding book for beginners?",
        postId: NumberInt(8451),
        comments: 2,
        shared: false,
        tags: [
          "programming",
          "coding"
        ],
        author: {
          name: "Emily Watson",
          nickname: "emily23"
        }
      }
]);

// insert many with var

const docs = [{
    title: "I want to start my own business. What I need to do first?",
    postId: NumberInt(3015),
    comments: 25,
    shared: true,
    tags: [
      "business",
      "money"
    ],
    author: {
      name: "Bob Hutchinson",
      nickname: "bob1995"
    }
  }
  ,
  {
    title: "What is the average salary of the junior frontend developer?",
    postId: NumberInt(1151),
    comments: 0,
    shared: false,
    author: {
      name: "Mike Forester",
      nickname: "mikef"
    }
  }
    
];

db.posts.insertMany(docs);

// show collection

db.posts.totalSize();


show dbs;

// find method

db.getCollection('posts').find({});

db.getCollection('posts').find({postId: 3015});


db.getCollection('posts').find({comments: 2});

db.getCollection('posts').find({"author.name": 'Emily Watson'})


db.getCollection('posts').find({tags: 'programming'})

// query operators

db.getCollection('posts').find({comments: {$gt: 0}})

db.getCollection('posts').find({comments: {$lt: 5}})


db.getCollection('posts').find({
  $and: [
    {comments: {$lt: 5}},
    {comments: {$gt: 0}}
  ]
  });

  db.getCollection('posts').find({
    $or: [
      {shared: true},
      {tags: 'programming'}
    ]

  });

  db.getCollection('posts').find({
    tags: {$in: [
    'programming',
    'coding'
  ]}
  });

  // limits

  db.getCollection('posts').find({}).limit(3)

  db.getCollection('posts').find({}).skip(4)

  db.getCollection('posts').find({}).sort({comments: -1})

  db.getCollection('posts').find({}).sort({comments: 1})

  db.getCollection('posts').find({}).sort({title: 1})

  db.getCollection('posts').
  find({}).
  skip(2).
  sort({shared: 1})

  // update operations

  // set operator
  db.posts.updateOne({postId: 2618},
    {$set: {shared: true}}
    );

  db.getCollection('posts').find({postId: 2618})

  db.getCollection('posts').findOne({tags: []})

  // unset
  
  db.posts.updateMany(
    {tags: []},
    {$unset: {tags: 1}}
    )

    db.getCollection('posts').findOne({tags: []})

    // increment comment by one

    db.posts.updateOne({postId: 2618},
      {$inc: {comments: 1}}
      );


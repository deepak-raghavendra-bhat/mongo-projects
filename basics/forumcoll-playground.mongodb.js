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
])

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


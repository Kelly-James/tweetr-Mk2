"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and` getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.tweets.insertOne(newTweet);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      // console.log('DB in datahelpers: ',
                  // db.collection('tweets').find().toArray(callback));
      // db.collection('tweets').find().toArray();
        // console.log(result);
        // return result;
      db.collection('tweetr').find().toArray(callback);
        // .sort(sortNewestFirst)
    }
  }
};

import React from "react";
import Tweet from "./Tweet";

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          setTweets={setTweets}
          tweet={tweet}
          tweets={tweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};
export default TweetList;

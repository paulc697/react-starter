import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  //State
  const [textInput, setTextInput] = useState();
  const [tweets, setTweets] = useState([]);
  const [name] = useState("Paul");

  return (
    <div>
      <div className="text"></div>
      <h1>Twitter</h1>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;

import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = (props) => {
  //Functions
  const userInputHandler = (e) => {
    props.setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    props.setTweets([
      ...props.tweets,
      { message: props.textInput, id: uuidv4() },
    ]);
    props.setTextInput("");
  };

  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={props.textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
};
export default CreateTweet;

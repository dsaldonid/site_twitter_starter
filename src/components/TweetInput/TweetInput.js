import "./TweetInput.css"
import { useState } from "react"

export default function TweetInput(addTweet) {

  const [status,setStatus] = useState("Empty")
  const handleOnTweetTextChange = () => {
    if (status === "Empty"){
      setStatus("Filled")
    }
  }
  return (
    <div className="tweet-container">
      <div className="tweet-box-top row">
        <span className="tweet-avatar fa-stack">
          <i className="fas fa-circle fa-stack-2x">
            <i className="fas fa-user fa-stack-1x"></i>
          </i>
        </span>

        <textarea name="new-tweet" type="text" placeholder="What's Happening?" onInput = {handleOnTweetTextChange}></textarea>

        <i className="fas fa-image"></i>
      </div>
      <div className=" row tweet-extras">
        <div className="icon-set">
          <i className="fas fa-image"></i>
          <i className="icon-gif">GIF</i>
          <i className="far fa-chart-bar"></i>
          <i className="fas fa-map-marker-alt"></i>
        </div>

        <span className={`tweet-length`}>&nbsp;</span>

        <div className="submit">
          <i className="fas fa-plus-circle"></i>
          <button className="submit-button" onClick={addTweet}>Tweet</button>
        </div>
      </div>
    </div>
  )
}

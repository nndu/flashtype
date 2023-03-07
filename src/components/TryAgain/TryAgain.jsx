import React from "react";
import './TryAgain.css';

const TryAgain = ({
    word,
    character,
    wpm,
    startAgain
}) => {
    return (
        <div className="try-again-cont">
            <h1>Test Results</h1>
            <div className="result-container" >
                <p>
                    <b>character: </b>{character}
                </p>
                <p>
                    <b>word: </b>{word} words
                </p>
                <p>
                    <b>Speed: </b>{wpm} wpm
                </p>
            </div>
            <button onClick={() => startAgain()} className="end-buttons start-again-btn">
                Re-try
            </button>
            <button
                onClick={() => {
                    window.open("https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/nguyenngocdieuuyen/",
                        "facebook-share-dialog",
                        "width=800,height=600");

                }
                }
                className="end-buttons share-btn">
                Share
            </button>
            <button
                onClick={() => {
                    window.open(
                        "https:/twitter.com/intent/tweet?text=https://twitter.com/JennyNguyen278", "twitter"
                        , "width=800, height=600")

                }}
                className="end-buttons tweet-btn ">
                Tweet
            </button>
        </div>
    )
}

export default TryAgain;
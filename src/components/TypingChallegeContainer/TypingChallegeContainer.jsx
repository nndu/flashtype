import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallegeContainer.css";
const TypingChallegeContainer = ({
    selectedParagraph,
    word,
    character,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge-container">
            {/*Detail Section*/}
            <div className="details-container">
                {/*Words type */}
                <ChallengeDetailsCard cardName="Word" cardValue={word} />

                {/*Character type */}

                <ChallengeDetailsCard cardName="Character" cardValue={character} />
                {/*Speed */}

                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            {/*The Real challenge*/}
            <div className="typewriter-container">
                <TypingChallenge
                    onInputChange={onInputChange}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    selectedParagraph={selectedParagraph}
                    testInfo={testInfo}
                />
            </div>
        </div>
    );
}

export default TypingChallegeContainer;
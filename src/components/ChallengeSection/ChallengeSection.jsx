import React from "react";
import "./ChallengeSection.css";
import './../TestContainer/TestContainer.jsx';
import TestContainer from "./../TestContainer/TestContainer.jsx";

const ChallengeSection = ({
    selectedParagraph,
    word,
    character,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now!
            </h1>
            <TestContainer
                word={word}
                character={character}
                wpm={wpm}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                selectedParagraph={selectedParagraph}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />
        </div>

    );
}

export default ChallengeSection;
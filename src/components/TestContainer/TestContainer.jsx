import React from "react";
import './TestContainer.css';
import './../TryAgain/TryAgain.jsx';
import TryAgain from "./../TryAgain/TryAgain.jsx";
import TypingChallegeContainer from "../TypingChallegeContainer/TypingChallegeContainer";

const TestContainer = ({
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
        <div className="test-container">

            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-cont">
                        <TypingChallegeContainer
                            word={word}
                            character={character}
                            wpm={wpm}
                            timeRemaining={timeRemaining}
                            timerStarted={timerStarted}
                            selectedParagraph={selectedParagraph}
                            testInfo={testInfo}
                            onInputChange={onInputChange}

                        />
                    </div>
                ) : (
                    <div className="try-again-container">
                        <TryAgain word={word}
                            character={character}
                            wpm={wpm}
                            startAgain={startAgain} />
                    </div>
                )
            }

        </div>
    );
}

export default TestContainer;
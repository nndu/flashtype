import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraph";

const totalTime = 60;
const ServiceUrl = " http://metaphorpsum.com/paragraphs/1/9";
const DefaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timeRemaining: totalTime,
    word: 0,
    character: 0,
    wpm: 0,
    testInfo: [],

}
class App extends React.Component {
    state = DefaultState;

    fetchNewparagraphFallback = () => {
        const data = SAMPLE_PARAGRAPHS[
            Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
        ];
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map(
            (selectedLetter) => {
                return {
                    testLetter: selectedLetter,
                    status: "notAttempted",
                };
            });
        this.setState({
            ...DefaultState,
            testInfo,
            selectedParagraph: data,
        });
    }

    fetchNewparagraph = () => {
        fetch(ServiceUrl)
            .then((response) => response.text())
            .then((data) => {

                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map(
                    (selectedLetter) => {
                        return {
                            testLetter: selectedLetter,
                            status: "notAttempted",
                        };
                    });
                this.setState({
                    ...DefaultState,
                    testInfo,
                    selectedParagraph: data,
                });

            });
    }
    componentDidMount() {

        this.fetchNewparagraphFallback();
    }
    startTimer = () => {
        this.setState({ timerStarted: true })
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                //change wps
                const timeSpent = totalTime - this.state.timeRemaining;
                const wpm = timeSpent > 0
                    ? (this.state.word / timeSpent) * totalTime
                    : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm)

                });

            } else {
                clearInterval(timer);
            }
        }, 1000);
    }

    startAgain = () => this.fetchNewparagraphFallback();

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) {
            this.startTimer();
        }
        //logic
        const character = inputValue.length;
        const word = inputValue.split(" ").length;
        const index = character - 1;

        //underflow case
        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo
                ],
                character,
                word,
            });
            return;
        }
        //overflow case
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ character, word });
            return;
        }
        //make a copy of testInfo
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        //check for correct typed letter
        const iscorrect = inputValue[index] === testInfo[index].testLetter;

        //update testInfo
        testInfo[index].status = iscorrect ? "correct" : "incorrect";
        //update the state
        this.setState({

            testInfo,
            word,
            character
        })
    };

    render() {
        return (
            <div className="app">
                {/*Nav section*/}
                <Nav />
                <Landing />
                <Footer />
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    word={this.state.word}
                    character={this.state.character}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
            </div>
        );

    };

}

export default App;
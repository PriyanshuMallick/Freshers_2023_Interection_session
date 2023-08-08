import { useState } from "react";
import questions from "../assets/questions";
import IncrementalText from "../components/IncrementalText";
import GameButton from "../components/GameButton";

function GamePage() {
  const [displayText, setDisplayText] = useState(
    "Click the button to start the game"
  );

  const [gif, setGif] = useState("");
  const [showText, setShowText] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  function handleGameBtnClick() {
    if (!gameStarted) {
      setGameStarted(true);
    }

    const randomQuestionIndex = getRandomQuestionIndex();
    const randomGifIndex = getRandomGifIndex(randomQuestionIndex);

    setDisplayText(questions[randomQuestionIndex].q);
    setGif(questions[randomQuestionIndex].gif[randomGifIndex].path);

    //Reload text
    setShowText(false);

    setTimeout(() => {
      setShowText(true);
    }, 100);
  }

  function getRandomQuestionIndex(): number {
    let randomIndex = Math.floor(Math.random() * questions.length);

    while (displayText === questions[randomIndex].q) {
      randomIndex = Math.floor(Math.random() * questions.length);
    }

    return randomIndex;
  }

  function getRandomGifIndex(questionIndex: number): number {
    return Math.floor(Math.random() * questions[questionIndex].gif.length);
  }

  return (
    <div
      className="px-24 h-screen w-screen
      flex items-center justify-evenly flex-col
      bg-slate-500 font-fascinate text-center"
    >
      {!gameStarted && <h1 className="font-porter">Let's Start!!!</h1>}
      <p className={`${gameStarted ? "text-5xl" : "text-3xl"} font-porter`}>
        {showText && (
          <IncrementalText
            text={displayText}
            speed={100}
            blinkingCursor={false}
          />
        )}
      </p>
      <div>
        {gameStarted && showText && (
          <img src={gif} className="h-[28rem] fade-in-2"></img>
        )}
      </div>
      <div className="">
        <GameButton
          text={gameStarted ? "Random" : "Start"}
          onClick={handleGameBtnClick}
        />
      </div>
    </div>
  );
}

export default GamePage;

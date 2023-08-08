import { useState } from "react";
import GameButton from "./components/GameButton";
import HelloFreshers from "./sections/HelloFreshers";
import WelcomeToDeptOfCS from "./sections/WelcomeToDeptOfCS";
import WhereYouWillLearn from "./sections/WhereYouWIllLearn";
import GamePage from "./sections/GamePage";

function App() {
  const [isGameMode, setIsGameMode] = useState(false);

  return (
    <>
      {!isGameMode && (
        <div>
          <HelloFreshers />
          <WelcomeToDeptOfCS />
          <WhereYouWillLearn />
          <div className="h-screen w-screen flex-center">
            <div>
              <GameButton
                text="Start Game"
                onClick={() => setIsGameMode(true)}
              />
            </div>
          </div>
        </div>
      )}

      {isGameMode && (
        <div>
          <GamePage />
        </div>
      )}
    </>
  );
}

export default App;

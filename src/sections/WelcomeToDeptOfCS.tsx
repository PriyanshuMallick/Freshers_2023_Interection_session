import gifs from "../assets/gifs";
import getGif from "../helpers/getGif";

function WelcomeToDeptOfCS() {
  return (
    <section className="flex-center flex-col overflow-clip h-screen w-screen">
      <div className="">
        <img
          className="h-64 w-auto"
          src={getGif(gifs.welcome)}
          alt={gifs.welcome.alt}
        />
      </div>
      <br />
      <h1 className="font-fascinate">To the Department of</h1>
      <br />
      <div className="flex flex-row relative">
        <img
          className="h-64 w-auto"
          src={getGif(gifs.computer)}
          alt={gifs.computer.alt}
        />
        <img
          className="h-64 w-auto"
          src={getGif(gifs.science)}
          alt={gifs.science.alt}
        />
      </div>
    </section>
  );
}

export default WelcomeToDeptOfCS;

import gifs from "../assets/gifs";
import IncrementText from "../components/IncrementalText";

function HelloFreshers() {
  return (
    <section className="flex-center flex-col overflow-clip h-screen w-screen">
      {/* After this is done typing */}
      <h1 className="">
        print("
        <IncrementText text="Hello Freshers!!!" />
        ")
      </h1>
      <br />
      <br />
      <br />
      {/* I want this to fade in from below and push the above text up by some points without scrolling */}
      <div className="flex flex-row relative">
        <img
          className={`w-auto fade-in transition delay-100`}
          src={getGif(gifs.hi_friends_rachel)}
          alt=""
        />
        <img
          className={`w-auto fade-in transition delay-800`}
          src={getGif(gifs.hi_dj_khaled)}
          alt=""
        />
      </div>
    </section>
  );
}

export default HelloFreshers;

import gifs from "../assets/gifs";

function WhereYouWillLearn() {
  return (
    <>
      <section className="flex-center flex-col overflow-clip h-screen w-screen">
        <img
          className="w-full h-auto"
          src={getGif(gifs.binary_captain_marvel)}
          alt=""
        />
      </section>
      <section className="flex-center flex-row overflow-clip h-screen w-screen">
        <img className="w-1/4 h-auto" src={getGif(gifs.code)} alt="" />
        <img className="w-1/4 h-auto" src={getGif(gifs.binary)} alt="" />
        <img
          className="w-1/4 h-auto"
          src={getGif(gifs.breaks_computer_panda)}
          alt=""
        />
      </section>
    </>
  );
}

export default WhereYouWillLearn;

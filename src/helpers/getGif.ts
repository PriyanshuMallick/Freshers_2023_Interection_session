export type gif = {
  path?: string;
  url: string;
  alt?: string;
};

function getGif(gif: gif) {
  try {
    if ("path" in gif) {
      return gif.path;
    }
    return gif.url;
  } catch (error: any) {
    console.log("Error on geting GIF link:", error);
  }
}

export default getGif;

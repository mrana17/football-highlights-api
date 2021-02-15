import "./football.css";
import { createCard } from "./football";
import { footballVideosAPI } from "../../utils/footballAPI";
// import { createElement } from "../../utils/createElement";
// import { getFootballVideo, getFootballVideos } from "../../utils/footballAPI";

export default {
  title: "Components/football.ts",
  parameters: { layout: "centered" },
};

export const Match1 = () =>
  createCard({
    title: "A",
  });

type FootballVideosFromAPIProps = {
  loaded: {
    footballVideos: footballVideosAPI[];
  };
};

export const FootballVideosFromAPI = (
  args,
  { loaded: { footballVideos } }: FootballVideosFromAPIProps
) => {
  const container = createElement("div", {
    className: "container",
    childs: footballVideos.map((character) => createCard(character)),
  });
  return container;
};

// getFootballVideos.loaders = [
//   async () => ({
//     characters: await getFootballVideos(),
//   }),
// ];

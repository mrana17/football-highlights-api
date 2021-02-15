import "./football.css";
import { createCard } from "./football";
import { footballVideosAPI, getFootballVideos } from "../../utils/footballAPI";
import { createElement } from "../../utils/createElement";
// import { getFootballVideo, getFootballVideos } from "../../utils/footballAPI";

export default {
  title: "Components/football.ts",
  parameters: { layout: "centered" },
};

export const Matches = () =>
  createCard({
    title: "West Ham United - Sheffield United",
    side1: {
      name: "West Ham United",
      url: "https://www.scorebat.com/live-stream/west-ham-united/",
    },
    side2: {
      name: "Sheffield United",
      url: "https://www.scorebat.com/live-stream/west-ham-united/",
    },
    competition: {
      name: "ENGLAND: Premier League",
      id: 15,
      url: "https://www.scorebat.com/england-premier-league-live-scores/",
    },
    videos: [
      {
        title: "Highlights",
        embed:
          "<div style='width:100%;height:0px;position:relative;padding-bottom:56.250%;'><iframe src='https://www.scorebat.com/embed/v/602aeef18f5a2/?s=2' frameborder='0' width='100%' height='100%' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;'></iframe></div>",
      },
    ],
    url:
      "https://www.scorebat.com/sheffield-united-vs-west-ham-united-live-stream/",
    thumbnail: "https://www.scorebat.com/og/m/og960725.jpeg",
    date: "2021-02-15T18:00:00+0000",
    embed:
      "<div style='width:100%;height:0px;position:relative;padding-bottom:calc(56.25% + 335px);' class='_scorebatEmbeddedPlayerW_'><iframe src='https://www.scorebat.com/embed/g/960725/?s=2' frameborder='0' width='560' height='650' allowfullscreen allow='autoplay; fullscreen' style='width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;' class='_scorebatEmbeddedPlayer_'></iframe></div>",
  });

export const FootballVideosFromAPI = (args, { loaded: { football } }) => {
  console.log(football);
  return createCard(football);
};

FootballVideosFromAPI.loaders = [
  async () => ({
    football: await getFootballVideos(),
  }),
];

// type FootballVideosFromAPI = {
//   loaded: {
//     footballVideos: footballVideosAPI[];
//   };
// };

// export const FootballVideosFromAPI = (
//   args,
//   { loaded: { footballVideos } }: FootballVideosFromAPIProps
// ) => {
//   const container = createElement("div", {
//     className: "container",
//     childs: footballVideos.map((character) => createCard(character)),
//   });
//   return container;
// };

// getFootballVideos.loaders = [
//   async () => ({
//     characters: await getFootballVideos(),
//   }),
// ];

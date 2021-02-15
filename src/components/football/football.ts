import { footballVideosAPI } from "../../utils/footballAPI";
import { createElement } from "../../utils/createElement";

export function createCard({
  title,
  side1,
  side2,
  competition,
  videos,
  url,
  thumbnail,
  date,
  embed,
}: footballVideosAPI) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__inner",
        childs: [
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("img", {
                className: "card__portrait",
                src: thumbnail,
              }),
              createElement("div", {
                className: "card__info",
                childs: [
                  createElement("h2", {
                    className: "card__name",
                    innerText: title,
                  }),
                  createElement("p", {
                    className: "card__status",
                    innerText: `${
                      status === "Alive" ? "🤖" : "💀"
                    } - ${status}`,
                  }),
                  createElement("p", {
                    className: "card__species",
                    innerText: competition.name,
                  }),
                  createElement("p", {
                    className: "card__origin",
                    innerText: side1.name,
                  }),
                  createElement("p", {
                    className: "card__origin",
                    innerText: side2.name,
                  }),
                  createElement("p", {
                    className: "card__origin",
                    innerText: url,
                  }),
                  createElement("p", {
                    className: "card__origin",
                    innerText: videos[title],
                  }),
                ],
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("p", {
                innerText: date,
              }),
              createElement("p", {
                innerText: embed,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

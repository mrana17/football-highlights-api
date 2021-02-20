export type footballVideosAPI = {
  title: string;
  embed: string;
  url: string;
  thumbnail: string;
  date: string;
  side1: {
    name: string;
    url: string;
  };
  side2: {
    name: string;
    url: string;
  };
  competition: {
    name: string;
    id: number;
    url: string;
  };
  videos: [
    {
      title: string;
      embed: string;
    }
  ];
};

// export async function getFootballVideo() {
//   const response = await fetch(`https://www.scorebat.com/video-api/v1/`);
//   const result = (await response.json()) as footballVideosAPI;
//   return result;
// }

// export async function getFootballVideos() {
//   const response = await fetch(`https://www.scorebat.com/video-api/v1/`);
//   if (!response.ok) {
//     return [];
//   }
//   const result = (await response.json()) as footballVideosAPI[];
//   return result;
// }

export async function getFootballVideos() {
  const response = await fetch(`https://www.scorebat.com/video-api/v1/`, {});
  const result = (await response.json()) as footballVideosAPI;
  const allVideos = result;
  return allVideos;
}

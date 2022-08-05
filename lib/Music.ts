import { SongInformation } from "./Music.types";

export async function GetMusic(): Promise<SongInformation> {
  if (!process.env?.LASTFMAPI) return { listening: false };

  let result = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ghostwolfy&api_key=${process.env.LASTFMAPI}&format=json&limit=1`
  ).then((request) => request.json());

  if (!result?.recenttracks?.track[0]["@attr"]) return { listening: false };

  return {
    listening: true,
    artist: result.recenttracks.track[0].artist["#text"],
    title: result.recenttracks.track[0].name,
    url: `https://open.spotify.com/search/${encodeURIComponent(
      result.recenttracks.track[0].artist["#text"] +
        " " +
        result.recenttracks.track[0].name
    )}`,
  };
}

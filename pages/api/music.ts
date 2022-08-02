import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  listening: boolean;
  artist?: string;
  title?: string;
  url?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!process.env?.LASTFMAPI)
    return res.status(500).json({ listening: false });

  let result = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ghostwolfy&api_key=${process.env.LASTFMAPI}&format=json&limit=1`
  ).then((request) => request.json());

  if (!result?.recenttracks?.track[0]["@attr"])
    return res.status(200).json({ listening: false });

  res.status(200).json({
    listening: true,
    artist: result.recenttracks.track[0].artist["#text"],
    title: result.recenttracks.track[0].name,
    url: `https://open.spotify.com/search/${encodeURIComponent(
      result.recenttracks.track[0].artist["#text"] +
        " " +
        result.recenttracks.track[0].name
    )}`,
  });
}

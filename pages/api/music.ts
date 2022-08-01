import type { NextApiRequest, NextApiResponse } from "next";

// I might need to redo this later on
// :^)

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

  let request = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ghostwolfy&api_key=${process.env.LASTFMAPI}&format=json&limit=1`
    ),
    result = await request.json();

  if (!result?.recenttracks?.track[0]["@attr"])
    return res.status(200).json({ listening: false });

  // especially this part lulw
  res.status(200).json({
    listening: true,
    artist: result.recenttracks.track[0].artist["#text"],
    title: result.recenttracks.track[0].name,
    url: `https://open.spotify.com/search/${result.recenttracks.track[0].artist[
      "#text"
    ]
      .toLowerCase()
      .replace(/ /g, "%20")}%20${result.recenttracks.track[0].name
      .toLowerCase()
      .replace(/ /g, "%20")}`,
  });
}

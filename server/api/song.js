module.exports = defineEventHandler(async () => {
    if (!process.env.LASTFMAPI) return { notListening: true };

    let request = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ghostwolfy&api_key=${process.env.LASTFMAPI}&format=json&limit=1`),
        result = await request.json();

    if (!result.recenttracks.track[0]['@attr']) return { notListening: true };

    const data = {
        artist: result.recenttracks.track[0].artist['#text'],
        title: result.recenttracks.track[0].name,
        url: `https://open.spotify.com/search/${result.recenttracks.track[0].artist['#text'].toLowerCase().replace(/ /g, '%20')}%20${result.recenttracks.track[0].name.toLowerCase().replace(/ /g, '%20')}`
    };

    return data;
});
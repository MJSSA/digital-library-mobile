const playlistClassOne = require("./examples/playlist.json");
const class_one = require("./examples/class_one.json");
const config = require("./config.json");

// const API_KEY = config.API_KEY;
// Class 1 - https://www.youtube.com/playlist?list=PLi7eThhIcNIrb7zEE3L39_Yzq76WrRZol
// const playlist_id = "PLi7eThhIcNIrb7zEE3L39_Yzq76WrRZol";

// Get the playlist information (https://developers.google.com/youtube/v3/docs/playlists)

// Get the items in a playlist (https://developers.google.com/youtube/v3/docs/playlistItems)
function getPlaylistItems() {
  const items = class_one.items.map((item) => ({
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: {
      url: item.snippet.thumbnails.default.url,
      width: item.snippet.thumbnails.default.width,
      height: item.snippet.thumbnails.default.height,
    },
    position: item.snippet.position,
    contentDetails: item.contentDetails,
    resourceId: item.snippet.resourceId,
    published: item.snippet.publishedAt,
  }));

  // Sort contents by the position it appears on the playlist.
  items.sort((a, b) => a.position - b.position);

  return [{ title: "Class 1", data: items }];
}

module.exports = {
  getPlaylistItems,
};

const addSong = async (songData) => {
  const kv = await Deno.openKv();
  await kv.set(["songs", songData.name], songData);
};

const listSongs = async () => {
  const kv = await Deno.openKv();
  const songData = kv.list({ prefix: ["songs"] });
  const songs = [];
  for await (const entry of songData) {
    if (entry != null && entry.value != null) {
      songs.push(entry.value);
    }
  }

  return songs;
};

export { addSong, listSongs };









// const addSong = async (songData) => {
//   const kv = await Deno.openKv();
//   await kv.set(["songs", songData.name], songData);
// };

// const listSongs = async () => {
//   const kv = await Deno.openKv();
//   const songData = await kv.list({ prefix: ["songs"] });
//   return songData.map((entry) => entry.value);
// };

// export { addSong, listSongs };

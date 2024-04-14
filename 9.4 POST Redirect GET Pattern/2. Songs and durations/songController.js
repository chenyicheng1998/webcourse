import { Eta } from "https://deno.land/x/eta@v3.1.0/src/index.ts";
import * as songService from "./songService.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const listSongs = async (c) => {
  const data = {
    songs: await songService.listSongs(),
  };

  return c.html(
    eta.render("index.eta", data),
  );
};

const addSongAndListSongs = async (c) => {
//   const body = await c.req.parseBody();
  const body = await c.req.formData()
  await songService.addSong(body);

  return c.redirect("/songs");
};

export { addSongAndListSongs, listSongs };
























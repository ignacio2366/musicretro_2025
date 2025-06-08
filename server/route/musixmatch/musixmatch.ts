import { Router } from "express";
import * as MusxmatchController from "./musixmatch.handler";

const router = Router();
router.get("/top-artist", MusxmatchController.getTopArtist);
router.get("/latest-album/:artistId", MusxmatchController.LatestAlbums);
router.get("/track-list/:albumId", MusxmatchController.getTrackList);
router.get("/track-lyrics/:trackId", MusxmatchController.getLyrics);

export default router;

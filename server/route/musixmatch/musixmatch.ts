import { Router } from "express";
import * as MusxmatchController from "./musixmatch.handler";

const router = Router();
router.get("/top-artist", MusxmatchController.getTopArtist);
router.get("/latest-album/:artistId", MusxmatchController.LatestAlbums);


export default router;
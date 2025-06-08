import { useEffect, useState } from "react";
import { Track } from "../../../models/tracks.models";
import { MusixServices } from "../../../api/musix.services";
import { LyricsResponse } from "../../../models/lyrics.models";

const LyricsArticle = (props: Track) => {
  const [data, setData] = useState<LyricsResponse>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MusixServices.getLyricsList(
          props.commontrack_id
        );
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <article
      className="article-lyrics"
      style={{ textAlign: "initial", wordBreak: "break-word" }}
    >
      {data?.lyric.lyrics_body}.sad
      <br />
      <i style={{ fontSize: "14px" }}>{data?.lyric.lyrics_copyright}</i>
    </article>
  );
};

export default LyricsArticle;

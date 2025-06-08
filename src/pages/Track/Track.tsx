import { useEffect, useState } from "react";
import { ContainerMain, ContainerWrapper } from "../../components";

import "./Track.style.css";
import { MusixServices } from "../../api/musix.services";
import { TrackListModel } from "../../models/tracks.models";
import { useParams } from "react-router-dom";
import LyricsArticle from "./components/LyricsArticle";

const Tracks = () => {
  const { albumId } = useParams();

  const [data, setData] = useState<TrackListModel>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MusixServices.getTrackList(Number(albumId));
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ContainerWrapper>
        <ContainerMain>
          <h1 className="header-title">Track</h1>
          <section className="tracks-container">
            <div className="section-content">
              {data?.track_list?.map((tracks, index) => (
                <div className="track-card" key={index}>
                  <h5 className="track-title">{tracks.track_name}</h5>
                  <LyricsArticle {...tracks} />
                </div>
              ))}
            </div>
          </section>
        </ContainerMain>
      </ContainerWrapper>
    </>
  );
};

export default Tracks;

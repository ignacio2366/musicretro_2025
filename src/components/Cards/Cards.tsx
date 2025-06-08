import { useCallback, useEffect, useState } from "react";
import { Artist } from "../../models/artists.models";
import "./Cards.style.css";
import { AlbumTypes } from "../../models/album.models";
import { MusixServices } from "../../api/musix.services";
import { useNavigate } from "react-router-dom";
const Card = ({ ...props }: Artist) => {
  const [data, setData] = useState<AlbumTypes>();
  const navigate = useNavigate();
  const onNavigate = useCallback((albumid: number) => {
    navigate(`/track/${albumid}`);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MusixServices.getTopAlbums(props.artist_id);
        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-title-header">
          <h3>
            <b>{props.artist_name}</b>
          </h3>
          <h4>{props.artist_rating} ratings</h4>
        </div>
        <article style={{ width: "100%" }}>
          <section style={{ width: "100%" }}>
            <div className="card-title-content">
              <p>Album</p>
              <p>Released Date:</p>
              <p>Tracks</p>
            </div>
            {data?.albums?.map((items, index) => (
              <div className="card-content" key={index}>
                <p>{items?.album_name}</p>
                <p>{items?.album_release_date}</p>
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => onNavigate(items?.album_id)}
                >
                  CLICK
                </p>
              </div>
            ))}
          </section>
        </article>
      </div>
    </>
  );
};

export default Card;

import { useEffect, useState } from "react";
import { ContainerMain, ContainerWrapper } from "../../components";
import "./Dashboard.style.css";
import { ArtistsTypes } from "../../models/artists.models";
import Card from "../../components/Cards/Cards";
import { MusixServices } from "../../api/musix.services";
const Dashboard = () => {
  const [data, setData] = useState<ArtistsTypes>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MusixServices.getTopMusixArtists();
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
          <h1 className="header-title">Dashboard</h1>
          <section className="section-container ">
            <h5 className="section-title ">
              Top 5 Charting Artist in Philippines
            </h5>
            <div className="section-content">
              {data?.artists?.map((artist, index) => (
                <Card {...artist} key={index} />
              ))}
            </div>
          </section>
        </ContainerMain>
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;

import React from "react";
import { DiseasesList } from "../helpers/DiseasesList";
import SkinItem from "../components/SkinItem";
import "../styles/diseases.css";

function Diseases() {
  return (
    <div className="diseases">
      <h1 className="Title">Choroby skóry</h1>
      <div className="DiseasesList">
        {DiseasesList.map((skinItem, key) => {
          return (
            <SkinItem
              key={key}
              image={skinItem.image}
              name={skinItem.name}
              description={skinItem.description}
              />
          );
        })}
      </div>
    </div>
  );
}

export default Diseases;
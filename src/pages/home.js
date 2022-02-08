import React from "react";
import BackImg from "../assets/euc-int_understanding-skin-aging_00_header.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="header" >
            <h1> Jak działa nasza aplikacja? </h1>
      </div>
        <div className="container" >
            <div className="image">
                <img src={BackImg} alt="girl"/>
            </div>
            <div className="text">
                <p> Stworzyliśmy aplikację do rozpoznawania i klasyfikowania zmian skórnych na złośliwe i łagodne. Aplikacja wykorzystuje sieci neuronowe oraz została napisana w środowisku Matlab. Do nauczenia sieci została użyta baza danych <a href="https://www.kaggle.com/fanconic/skin-cancer-malignant-vs-benign"> “Skin Cancer: Malignant vs. Benign”</a>  z archiwum ISIC. Sieć po procesie uczenia uzyskała skuteczność 92%. Służy do samodzielnej i wstępnej diagnozy martwiącej nas zmiany skórnej w domowych warunkach. Aplikacja nie jest certyfikowana medycznie i w razie wątpliwości wynik należy skonsultować z lekarzem.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
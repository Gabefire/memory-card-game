import React, { useState } from "react";
import "../style/cards.css";
import dragonDagger from "../assets/dragon-dagger.png";
import armadylGodsword from "../assets/armadyl-godsword.png";
import avasAssembler from "../assets/avas-assembler.png";
import bandosChestplate from "../assets/bandos-chestplate.png";
import barrowsGloves from "../assets/barrows-gloves.png";
import dragonScimitar from "../assets/dragon-scimitar.png";

const Card = ({ countScore }) => {
  const [imageArray, setImageArray] = useState([
    { url: dragonDagger, text: "Dragon Dagger" },
    { url: armadylGodsword, text: "Armadyl Godsword" },
    { url: avasAssembler, text: "Ava's Assembler" },
    { url: bandosChestplate, text: "Bandos Chestplate" },
    { url: barrowsGloves, text: "Barrows Gloves" },
    { url: dragonScimitar, text: "Dragon Scimitar" },
    { url: "./assets/berserker-ring.png", text: "Berserker Ring" },
    { url: "./assets/blood-rune.png", text: "Blood Rune" },
    { url: "./assets/coins.png", text: "Coins" },
    { url: "./assets/draconic-visage.png", text: "Draconic Visage" },
    { url: "./assets/abyssal-whip.png", text: "Abyssal Whip" },
    { url: "./assets/dragon-pickaxe.png", text: "Dragon Pickaxe" },
  ]);

  const shuffleImageArray = () => {
    const imageArrayCopy = imageArray;
    const tempArray = [];
    for (let i = imageArray.length - 1; i >= 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * imageArrayCopy.length);
      const [image] = imageArrayCopy.splice(randomIndex, 1);
      tempArray.push(image);
    }
    setImageArray(tempArray);
  };

  const clickCard = (e) => {
    const image = e.target.id.split("-")[1];
    countScore(image);
    shuffleImageArray();
  };

  return (
    <>
      {imageArray.map((image) => {
        return (
          <div className="card" id={`card-${image}`} onClick={clickCard}>
            <img src={image.url} alt={image.text} />
            <div className="text">{image.text}</div>
          </div>
        );
      })}
    </>
  );
};

export default Card;

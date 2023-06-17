import React, { useState } from "react";
import "../style/cards.css";
import dragonDagger from "../assets/dragon-dagger.png";
import armadylGodsword from "../assets/armadyl-godsword.png";
import avasAssembler from "../assets/avas-assembler.png";
import bandosChestplate from "../assets/bandos-chestplate.png";
import barrowsGloves from "../assets/barrows-gloves.png";
import dragonScimitar from "../assets/dragon-scimitar.png";
import berserkerRing from "../assets/berserker-ring.png";
import bloodRune from "../assets/blood-rune.png";
import coins from "../assets/coins.png";
import draconicVisage from "../assets/draconic-visage.png";
import abyssalWhip from "../assets/abyssal-whip.png";
import dragonPickaxe from "../assets/dragon-pickaxe.png";

const Card = ({ countScore }) => {
  const [imageArray, setImageArray] = useState([
    { url: dragonDagger, text: "Dragon Dagger" },
    { url: armadylGodsword, text: "Armadyl Godsword" },
    { url: avasAssembler, text: "Ava's Assembler" },
    { url: bandosChestplate, text: "Bandos Chestplate" },
    { url: barrowsGloves, text: "Barrows Gloves" },
    { url: dragonScimitar, text: "Dragon Scimitar" },
    { url: berserkerRing, text: "Berserker Ring" },
    { url: bloodRune, text: "Blood Rune" },
    { url: coins, text: "Coins" },
    { url: draconicVisage, text: "Draconic Visage" },
    { url: abyssalWhip, text: "Abyssal Whip" },
    { url: dragonPickaxe, text: "Dragon Pickaxe" },
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

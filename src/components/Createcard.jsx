import React from "react";
import Card from "./Card";
function createCard(emojipedia) {
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.description}
    />
  );
}
export default createCard;

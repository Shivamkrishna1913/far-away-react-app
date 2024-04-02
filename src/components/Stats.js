import React from "react";

export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🛩️</em>
      </p>
    );
  }

  const itemSize = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / itemSize) * 100);
  return (
    <footer className="stats">
      {!(percentage === 100) ? (
        <em>
          You have {itemSize} items on your list,and you slready packed{" "}
          {packedItem} ,({percentage}
          {"%"})
        </em>
      ) : (
        <em>You got everything , Ready to go ✈️</em>
      )}
    </footer>
  );
};

import React, { useState, useEffect } from 'react'

export default function ShoppingList() {
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((image) => {
        setImage(image)
        setIsLoading(false);
      });
  }, []);
  
  //console.log(image)
  if (isLoading) return <p>Loading...</p>;
  if (!image) return <p>No profile data is found</p>;


  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      {console.log(image)}
      {image.message.map((dog) => (
        <img src={dog
        } alt="Random Dogs" />
        
      ))}
    </div>
  );
}

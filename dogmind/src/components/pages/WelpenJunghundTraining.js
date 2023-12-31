// WelpenJunghundTraining.js

import React from 'react';
import HeaderImageCircle from '../HeaderImageCircle';
import IntroSub from '../IntroSub';
import trainingData from '../../data'; // Make sure this import is correct
import Welpe2 from '../../assets/images/Welpen/Welpe2.png';
import NavbarSub from '../NavbarSub';
import AngeboteCards from '../AngeboteCards';

function WelpenJunghundTraining() {
  // Check if trainingData is defined and is an array
  if (!Array.isArray(trainingData) || trainingData.length === 0) {
    console.error("Training data is not an array or is empty.");
    return null; // or handle the error accordingly
  }

  const firstTraining = trainingData[0];

  // Chunk the training data if needed
  const chunkedData = [];
  for (let i = 0; i < trainingData.length; i += 6) {
    chunkedData.push(trainingData.slice(i, i + 6));
  }

  if (chunkedData.length > 1 && chunkedData[chunkedData.length - 1].length < 3) {
    const lastItem = chunkedData.pop().pop();
    chunkedData[chunkedData.length - 1].push(lastItem);
  }

  return (
    <div id="welpenJunghundID">
      <NavbarSub />
      <HeaderImageCircle HeaderTitle={firstTraining.title} imageUrl={Welpe2} altText="Welpe" />
      <IntroSub
        trainingData={[firstTraining]} // Pass an array with the first training data item
      />
      {/* Pass the category prop to AngeboteCards */}
      <AngeboteCards trainingData={trainingData} categories={['Welpen', 'Alltag']} />
    </div>
  );
}

export default WelpenJunghundTraining;

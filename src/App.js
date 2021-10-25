import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description: "Photos of grovery stores, food trucks, and other commercial project"
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <main>
        <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
        <main>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </main>
      </main>
    </div>
  );
}

export default App;

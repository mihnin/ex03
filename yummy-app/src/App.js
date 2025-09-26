import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import recipes from './data';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Header />
        <RecipeGrid recipes={recipes} />
      </main>
    </div>
  );
}

export default App;
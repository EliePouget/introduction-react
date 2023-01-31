import React from 'react';
import Card from './components/Card.jsx';
import FoldableCard from './components/FoldableCard.jsx';
import Cards from './components/Cards.jsx';

function App() {
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main">
        <Cards className="cards">
          <Card title="Title 1"> Content 1 </Card>
          <FoldableCard title="Title 2" opened> Content 2</FoldableCard>
          <FoldableCard title="Title 3" opened> Content 3</FoldableCard>
          <FoldableCard title="Title 4"> Content 4</FoldableCard>
        </Cards>
      </main>
      <footer className="app__footer footer">footer</footer>
    </div>
  );
}

export default App;

import React from "react";
import Card from "./components/Card.jsx";

function App() {
    return (
        <div className="app">
            <header className="app__header header">
                <h1 className="header__title">Introduction to React</h1>
            </header>
            <main className="app__main">
                <div class="cards">
                    <Card> Title 1</Card>
                    <Card> Title 2</Card>
                    <Card> Title 3</Card>
                    <Card> Title 4</Card>
                </div>
            </main>
            <footer className="app__footer footer">footer</footer>
        </div>
    );
}

export default App;
import React, { useState } from "react";
import "../style.css";
import data from "../data/data.js";
import Header from "./Header";
import Question from "./Question";

export default function App() {
    // Définir l'état initial pour la valeur de recherche et les données filtrées
    const [searchValue, setSearchValue] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const [score, setScore] = useState(0);

    // Mettre à jour l'état de la valeur de recherche lorsqu'elle change
    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);

        // Filtrer les données en fonction de la nouvelle valeur de recherche
        const newFilteredData = data.filter((item) => (item.question.toLocaleLowerCase().includes(value)) || (item.level === value));
        setFilteredData(newFilteredData);
    };

    const handleScoreChange = () => {
        setScore(score + 1);
    };

    // Créer un tableau de composants Question à partir des données filtrées
    const quizQuestions = filteredData.map((item) => (
        <Question key={item.id} onScoreChange={handleScoreChange} {...item} />
    ));

    return (
        <div className="app--container">
            <Header score={score}/>
            {/* Barre de recherche */}
            <nav className="searchbar--container">
                <input
                    className="searchbar--search"
                    type="text"
                    placeholder="Filter...🥇🥈🥉"
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </nav>
            {/* Liste des questions */}
            <div className="quiz-questions">{quizQuestions}</div>
        </div>
    );
}


import React, { useState } from 'react';

const App = () => {
    return (
        <div>
            <p class="credits">This is an experiment in using AI to make my book's content more accessible. Ask a question and AI'll answer it in real-time:</p>
            <form action="/ask" method="post">
            <textarea name="question" id="question" />

            <div class="buttons">
                <button type="submit" id="ask-button">Ask question</button>
                <button id="lucky-button" style={{background: "#eee", borderColor: "#eee", color: "#444"}}>I'm feeling lucky</button>
            </div>
            </form>
        </div>
    );
};

export default App;

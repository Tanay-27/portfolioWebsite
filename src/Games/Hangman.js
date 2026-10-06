import { useState, useEffect, useCallback } from 'react';
import './gamesStyle.scss';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WORDS = [
    'python', 'django', 'docker', 'kubernetes', 'langgraph', 'vector', 'agent',
    'sandbox', 'pipeline', 'backend', 'compiler', 'terminal', 'redis', 'celery',
    'qdrant', 'payload', 'latency', 'deployment', 'algorithm', 'recursion',
    'inference', 'embedding', 'prompt', 'harness', 'async', 'microservice',
    'debugger', 'pentest', 'encryption', 'middleware',
];
const MAX_WRONG = 6;
const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

function pickWord(previous) {
    const pool = WORDS.filter((w) => w !== previous);
    return pool[Math.floor(Math.random() * pool.length)];
}

// One entry per wrong guess: head, body, arms, legs.
const BODY_PARTS = [
    <circle key="head" cx="150" cy="70" r="20" />,
    <line key="body" x1="150" y1="90" x2="150" y2="150" />,
    <line key="armL" x1="150" y1="105" x2="120" y2="130" />,
    <line key="armR" x1="150" y1="105" x2="180" y2="130" />,
    <line key="legL" x1="150" y1="150" x2="125" y2="190" />,
    <line key="legR" x1="150" y1="150" x2="175" y2="190" />,
];

function Gallows({ wrongCount }) {
    return (
        <svg className="hm-gallows" viewBox="0 0 220 220" role="img"
            aria-label={`${wrongCount} of ${MAX_WRONG} wrong guesses`}>
            <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <line x1="20" y1="205" x2="120" y2="205" />
                <line x1="50" y1="205" x2="50" y2="20" />
                <line x1="50" y1="20" x2="150" y2="20" />
                <line x1="150" y1="20" x2="150" y2="50" />
                {BODY_PARTS.slice(0, wrongCount)}
            </g>
        </svg>
    );
}

export default function Hangman() {
    const [word, setWord] = useState(() => pickWord());
    const [guessed, setGuessed] = useState([]);

    const wrong = guessed.filter((l) => !word.includes(l));
    const won = word.split('').every((l) => guessed.includes(l));
    const lost = wrong.length >= MAX_WRONG;
    const over = won || lost;

    const guess = useCallback((letter) => {
        if (over) return;
        setGuessed((g) => (g.includes(letter) ? g : [...g, letter]));
    }, [over]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const key = e.key.toLowerCase();
            if (/^[a-z]$/.test(key)) guess(key);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [guess]);

    const reset = () => {
        setWord((w) => pickWord(w));
        setGuessed([]);
    };

    let message = `Wrong guesses left: ${MAX_WRONG - wrong.length}`;
    if (won) message = 'You won!';
    if (lost) message = 'You lost. The word was:';

    return (
        <div className="hangman">
            <div className="hm-message" aria-live="polite">{message}</div>
            <Gallows wrongCount={wrong.length} />
            <div className="hm-word" aria-label="word to guess">
                {word.split('').map((letter, i) => {
                    const revealed = guessed.includes(letter);
                    return (
                        <span key={i} className={`hm-letter${!revealed && lost ? ' missed' : ''}`}>
                            {revealed || lost ? letter : ''}
                        </span>
                    );
                })}
            </div>
            <div className="hm-keyboard">
                {LETTERS.map((letter) => {
                    const used = guessed.includes(letter);
                    const state = used ? (word.includes(letter) ? 'hit' : 'miss') : '';
                    return (
                        <button key={letter} className={`hm-key ${state}`}
                            disabled={used || over} onClick={() => guess(letter)}>
                            {letter}
                        </button>
                    );
                })}
            </div>
            <button className="hm-reset" onClick={reset}>
                <FontAwesomeIcon icon={faRepeat} /> New word
            </button>
        </div>
    );
}

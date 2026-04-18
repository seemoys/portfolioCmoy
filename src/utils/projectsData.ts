import foodAppVid from '../assets/foodApp.mp4'
import hangManAppVid from '../assets/hangmanAppVid.mp4'
import cryptoAppVid from '../assets/cryptoAppVid.mp4'
import pokedexAppVid from '../assets/pokeDexVid.mp4'
import foodAppImg from '../assets/foodAppImg.png'
import hangManAppImg from '../assets/hangManAppImg.png'
import cryptoAppImg from '../assets/cryptoAppImg.png'
import pokedexAppImg from '../assets/pokeDexImg.png'

export type Project = {
  title: string
  desc: string
  tech: string[]
  github: string
  live: string
  video?: string
  img: string
}

export const projects: Project[] = [
  {
    title: "Bite's & Burp (Food Ordering App)",
    desc: 'A full-featured Swiggy-inspired food ordering web app with search functionality, dynamic menu pages, cart management (add/remove items & total calculation), shimmer UI, lazy loading and code splitting.',
    tech: ['React', 'Redux Toolkit', 'Tailwind', 'React Router', 'Formik', 'Context API'],
    github: 'https://github.com/seemoys/bitesAndBurpStatic',
    live: 'https://roaring-capybara-58a22c.netlify.app/',
    video: foodAppVid,
    img: foodAppImg,
  },
  {
    title: 'Hangman Game (Full Stack)',
    desc: 'Built a full-stack Hangman game using React, Express, and PostgreSQL with dynamic word fetching, REST API integration, real-time state management, and user engaging UI with confetti animations.',
    tech: ['React (Vite)', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/seemoys/HangMan-App',
    live: 'https://bucolic-pastelito-ba1400.netlify.app/',
    video: hangManAppVid,
    img: hangManAppImg,
  },
  {
    title: 'CryptoTrack App',
    desc: 'A React cryptocurrency tracker that pulls live market data from the CoinGecko API with shimmer UI. Table of 250 coins with logo, name, symbol, price, market cap fetch-based data loading with loading/error states, shimmer skeletons for UX polish.',
    tech: [
      'React 19 +',
      'Vite 7',
      'React Router 7',
      'styled-components',
      'react-data-table-component',
      'Chart.js / react-chartjs-2',
    ],
    github: 'https://github.com/seemoys/Crypto-Coin-Details-WIthChart.Js',
    live: 'https://clever-croquembouche-0a6386.netlify.app/',
    video: cryptoAppVid,
    img: cryptoAppImg,
  },
  {
    title: 'PokeDex',
    desc: 'Paginated list of Pokemon (Prev / Next via PokeAPI next/previous URLs), search by name with a debounced input, details page with image, height, weight, and type badges, responsive grid, and consistent card sizing.',
    tech: [
      'React 18',
      'Vite',
      'React Router',
      'Axios',
      'Tailwind CSS',
      'Custom Hooks',
    ],
    github: 'https://github.com/seemoys/pokeDex',
    live: 'https://wonderful-kataifi-bc9dee.netlify.app/',
    video: pokedexAppVid,
    img: pokedexAppImg,
  },
]

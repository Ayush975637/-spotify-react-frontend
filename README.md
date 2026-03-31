# 🎵 Spotify Clone
 
> A Spotify-inspired music web app built with React.js — search songs, play previews, and explore trending tracks.
 
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-Styled-1572B6?style=flat&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat)
 
---
 
## 🌐 Live Demo
 
👉 **[View Live App](https://your-live-link.com)**
 
---
 
## ✨ Features
 
| Feature | Description |
|---|---|
| 🔍 Search | Search any song by name in real time |
| ▶️ Play / Pause | Click any card to play or pause a track |
| 🔁 Loop | Toggle loop mode for the current song |
| 🔀 Shuffle | Automatically play a random song on end |
| 📈 Trending | Loads trending songs on the homepage by default |
| 💀 Skeleton Loading | Shimmer placeholder cards while songs are fetching |
| ⚠️ Error Handling | Shows a friendly message if the API fails or rate limits |
| 📱 Responsive UI | Works across desktop and mobile screens |
 
---
 
## 🛠️ Tech Stack
 
- **[React.js](https://reactjs.org/)** — UI components and state management
- **[ReactPlayer](https://github.com/CookPete/react-player)** — Audio playback
- **[React Icons](https://react-icons.github.io/react-icons/)** — Icon library
- **[NocodeAPI](https://nocodeapi.com/)** — Spotify API wrapper
- **JavaScript (ES6+)** — Core logic
- **CSS3** — Styling and animations
 
---
 
## 📂 Project Structure
 
```
spotify-clone/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── Main.jsx          # Song grid, player, search results
    │   ├── Navbar.jsx        # Top navigation + search bar
    │   ├── BottomPlayer.jsx  # Fixed audio player bar
    │   ├── SkeletonCard.jsx  # Shimmer loading card
    │   └── LoadingSpinner.jsx
    ├── pages/
    │   └── Home.jsx
    ├── App.jsx
    ├── App.css
    └── index.js
```
 
---
 
## ⚙️ How It Works
 
1. On load, the app fetches **trending songs** from the Spotify API via NocodeAPI
2. Songs without a playable preview are **automatically filtered out**
3. Users can **search** for any track — results update dynamically
4. Clicking a song card **starts playback** in the fixed bottom player
5. The player supports **loop**, **shuffle**, and **play/pause** controls
6. If the API fails (e.g. rate limit), an **error message with a retry button** is shown instead of a broken screen
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js `v16+`
- npm or yarn
 
### 1. Clone the repository
 
```bash
git clone https://github.com/Ayush975637/your-repo.git
cd spotify-clone
```
 
### 2. Install dependencies
 
```bash
npm install
```
 
### 3. Run the development server
 
```bash
npm start
```
 
The app will open at **http://localhost:3000**
 
---
 
## 📈 Known Limitations
 
- No user authentication — uses a public API key
- Spotify previews are limited to **30-second clips**
- API has rate limits — heavy usage may temporarily fail
- No playlist or queue management
 
---
 
## 🎯 Purpose
 
This project was built to practice:
 
- React component architecture and reusability
- `useState` / `useEffect` hooks and state management
- REST API integration and async data fetching
- Error handling and loading state patterns
- Responsive UI design and CSS animations
 
---
 
## 👨‍💻 Author
 
**Ayush Aggrawal**
 
[![GitHub](https://img.shields.io/badge/GitHub-Ayush975637-181717?style=flat&logo=github)](https://github.com/Ayush975637)
 
---
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).

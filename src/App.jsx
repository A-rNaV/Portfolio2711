import styles from "./App.module.css";
import { Navbar } from "./components/Nav/Navbar";
import {Hero} from "./components/hero/hero.jsx";

function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
  </div>)
}

export default App

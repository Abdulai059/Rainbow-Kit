import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "./styles/Home.module.css";

function App() {
  return (
    <div>
      <nav className={styles.navBar}>
        <img
          src="https://logolook.net/wp-content/uploads/2022/05/OpenSea-Logo.png"
          alt=""
        />
        <ConnectButton
          // label="Singnin"
          // accountStatus={"avatar"}
          // showBalance={false}
        />
      </nav>
    </div>
  );
}

export default App;

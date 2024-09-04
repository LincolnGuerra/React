import { createRoot } from "react-dom/client";

const name = "Lico";

function Footer() {
  return (
    <footer>
      <p>
        Power by {name} {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;

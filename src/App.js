import { useState } from "react";
import Room from "./components/Room";

export default function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div>
      <Room state={theme} handleClick={() => setTheme(!theme)} />
    </div>
  );
}

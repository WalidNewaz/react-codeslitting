import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { delayPromise } from "./utils";

/** Components */
const LazyComponent = lazy(() =>
  delayPromise(import("./components/LazyComponent"), 2000)
);
import Loading from "./components/Loading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to the App</h1>
      {/* Wrap the lazy-loaded component with Suspense */}
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;

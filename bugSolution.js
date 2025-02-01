```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [location]);

  return (
    <BrowserRouter>
      <Routes key={key}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
```
import "./App.css";

import { Container } from "@mui/material";

import SearchView from "./pages/search/SearchView";

function App() {
  return (
    <Container className="page-container">
      <h2>Welcome to my search app</h2>
      <SearchView />
    </Container>
  );
}

export default App;

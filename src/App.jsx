import { Container } from "react-bootstrap";
import FormDrinks from "./components/FormDrinks";

function App() {
  return (
    <>
      <header className="py-5">
        <h1>Drinks Finder</h1>
      </header>
      <Container className="mt-5">
        <FormDrinks />
      </Container>
    </>
  );
}

export default App;

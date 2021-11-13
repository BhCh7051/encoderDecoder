import { useState } from "react";
import { Container } from "react-bootstrap";
import Algo1 from "./components/algoComponents/Algo1";
import Algo2 from "./components/algoComponents/Algo2";
import Nav from "./components/Nav";

function App() {
  let [index, changeIndex] = useState(1);

  const changeTab = (index) => {
    console.log(index);
    changeIndex(index);
  };

  const renderBody = () => {
    switch (index) {
      case 1:
        return <Algo1 />;
      case 2:
        return <Algo2 />;
      default:
        return <div>Nothing Selected</div>;
    }
  };

  return (
    <Container>
      <Nav changeTab={changeTab} />

      {renderBody()}
    </Container>
  );
}

export default App;

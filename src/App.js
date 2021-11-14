import { useState } from "react";
import { Container } from "react-bootstrap";
import AffineCipher from "./components/algoComponents/AffineCipher";
import Algo1 from "./components/algoComponents/Algo1";
import Algo2 from "./components/algoComponents/Algo2";
import AtBASHCipher from "./components/algoComponents/AtBASHCipher";
import BitShift from "./components/algoComponents/BitShift";
import CeaserCipher from "./components/algoComponents/CeaserCipher";
import RailfenceCipher from "./components/algoComponents/RailfenceCipher";
import RegressionCipher from "./components/algoComponents/RegressionCipher";
import RotorCipher from "./components/algoComponents/RotorCipher";
import VernamCipher from "./components/algoComponents/VernamCipher";
import VigenereCipher from "./components/algoComponents/VigenereCipher";
import XORCipher from "./components/algoComponents/XORCipher";

import Nav from "./components/Nav";

function App() {
  let [index, changeIndex] = useState(2);

  const changeTab = (index) => {
    console.log(index);
    changeIndex(index);
  };

  const renderBody = () => {
    switch (index) {
      // case 1:
      //   return <AffineCipher />;
      case 2:
        return <AtBASHCipher />;
      // case 3:
      //   return <BitShift />
      // case 4:
      //   return <XORCipher />
      // case 5:
      //   return <VigenereCipher />
      // case 6:
      //   return <CeaserCipher />
      // case 7:
      //   return <RegressionCipher />
      // case 8:
      //   return <VernamCipher />
      // case 9:
      //   return <RailfenceCipher />
      // case 10:
      //   return <RotorCipher />
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

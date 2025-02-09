import {useState} from "react";
import {Container} from "react-bootstrap";

import AffineCipher from "./components/algoComponents/AffineCipher";
import AtBASHCipher from "./components/algoComponents/AtBASHCipher";
import BitShift from "./components/algoComponents/BitShift";
import CeaserCipher from "./components/algoComponents/CeaserCipher";
import RailfenceCipher from "./components/algoComponents/RailfenceCipher";
import RotorCipher from "./components/algoComponents/RotorCipher";
import VernamCipher from "./components/algoComponents/VernamCipher";
import VigenereCipher from "./components/algoComponents/VigenereCipher";
import XORCipher from "./components/algoComponents/XORCipher";
import Header from "./components/Header";

import Nav from "./components/Nav";
import HillClimb from "./components/algoComponents/HillClimb";

import("./scss/theme.scss");

function App() {
    let [index, changeIndex] = useState(1);

    const changeTab = (index) => {
        // console.log(index);
        changeIndex(index);
    };

    const renderBody = () => {
        switch (index) {
            case 1:
                return <AffineCipher/>;

            case 2:
                return <AtBASHCipher/>;

            case 3:
                return <BitShift/>;

            case 4:
                return <CeaserCipher/>;

            case 5:
                return <HillClimb/>

            case 6:
                return <RailfenceCipher/>;

            case 7:
                return <RotorCipher/>;

            case 8:
                return <VernamCipher/>;

            case 9:
                return <VigenereCipher/>;

            case 10:
                return <XORCipher/>;

            default:
                return <div>Nothing Selected</div>;
        }
    };

    return (
        <>
            <div>
                <Header/>
                <Container>
                    <Nav changeTab={changeTab}/>

                    {renderBody()}
                </Container>
            </div>
        </>
    );
}

export default App;

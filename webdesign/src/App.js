import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import CaffeMenu from "./Forms/CafeMenu/CaffeMenu";
import RegistrationForm from "./Forms/RegistationForm/RegistrationForm";
import ColorMarkers from "./Forms/ColorMarkers/ColorMarkers";

function App() {
  return (
    <Fragment>
      <RegistrationForm/>
        <CaffeMenu/>
    </Fragment>
  );
}

export default App;

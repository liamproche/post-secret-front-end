import React, {useState} from "react";
import SecretFormComponent from "./SecretFormComponent/SecretFormComponent";
import SecretsComponent from "./SecretsComponent/SecretsComponent";
import './MainComponent.css'


function MainComponent(){;
    return(
        <main className="MainComponent" id="main-component">
            <SecretFormComponent></SecretFormComponent>
            <SecretsComponent></SecretsComponent>
        </main>
    )  
}


export default MainComponent;
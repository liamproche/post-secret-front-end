import React, {useState, useEffect} from "react";
import SecretFormComponent from "./SecretFormComponent/SecretFormComponent";
import SecretsComponent from "./SecretsComponent/SecretsComponent";
import './MainComponent.css'


function MainComponent(){;
    const [showSecrets, setShowSecrets] = useState(false)
    const[secrets, setSecrets] = useState([])
    
    const getSecrets = async()=>{
        try{
            const secrets = await fetch("http://localhost:3001/secrets")
            const parsedSecrets = await secrets.json()    
                setSecrets(parsedSecrets.data)
                console.log('secrets set')
            }catch(err){
                console.log(err)
                //user message goes here
                //TODO: Figure out user message on API Call fuck-ups
            }
        }
        const createNewSecret = async (newSecret)=>{
            const newSecretResponse = await fetch("http://localhost:3001/secrets",{
                method: "POST",
                body: JSON.stringify(newSecret),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedReponse = await newSecretResponse.json()
            console.log(parsedReponse)
            if(parsedReponse.success){
                console.log('Secret was created')
            //if it wasn't a success
            }else{
                console.log("There was a db error creating the secret")
            }
        }

    const revealSecrets=()=>{
        setShowSecrets(true)
    }
    useEffect(getSecrets, [])
    return(
        <main className="MainComponent" id="main-component">
            {!showSecrets ? <SecretFormComponent secrets={secrets} revealSecrets={revealSecrets} createNewSecret={createNewSecret}></SecretFormComponent> : <SecretsComponent></SecretsComponent>}
        </main>
    )  
}


export default MainComponent;
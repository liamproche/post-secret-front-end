import React, {useState, useEffect} from "react";
import SecretFormComponent from "./SecretFormComponent/SecretFormComponent";
import SecretsComponent from "./SecretsComponent/SecretsComponent";
import './MainComponent.css'


function MainComponent(){;
    const [showSecrets, setShowSecrets] = useState(false)
    const[secrets, setSecrets] = useState([])
    const getSecrets = async()=>{
        try{
            const secrets = await fetch("https://post-a-secret-backend.herokuapp.com/secrets")
            const parsedSecrets = await secrets.json()    
            const allSecrets = parsedSecrets.data
            const chosenSecrets=[]
            function pickFirstSecret(){
                chosenSecrets.push(allSecrets[Math.floor(Math.random() * allSecrets.length)])
            }
            function pickNextSecret(){
                let nextSecret = allSecrets[Math.floor(Math.random() * allSecrets.length)]
                while(chosenSecrets.includes(nextSecret)){
                    pickNextSecret()
                }
                chosenSecrets.push(nextSecret)
            }
            pickFirstSecret();
            pickNextSecret();
            pickNextSecret();
            pickNextSecret();
            pickNextSecret();
            setSecrets(chosenSecrets)
        }catch(err){
                console.log(err)
                //user message goes here
                //TODO: Figure out user message on API Call fuck-ups
            }
        }
        const createNewSecret = async (newSecret)=>{
            const newSecretResponse = await fetch("https://post-a-secret-backend.herokuapp.com/secrets",{
                method: "POST",
                body: JSON.stringify(newSecret),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedReponse = await newSecretResponse.json()
            if(parsedReponse.success){
            //if it wasn't a success
            }else{
                console.log("There was a db error creating the secret")
            }
        }
        const deleteSecret= async (id)=>{
            try{
                const apiResponse = await fetch(`https://post-a-secret-backend.herokuapp.com/secrets/${id}`,{
                    method: "DELETE"
                })
                const parsedReponse = await apiResponse.json()
                if(parsedReponse.success){
                    setSecrets(
                        secrets.filter((secret)=>{
                            //function to determine if animal in array id matches delete animal id
                            return secret._id !== id
                        })
                    )
                }
                else{
                    console.log('deleting was not successful')
                }
            }catch(err){
                console.log(err)
            }

    }
    const editSecret = async (secretToEdit)=>{
        try{    
            const updateSecretResponse = await fetch(`https://post-a-secret-backend.herokuapp.com/secrets/${secretToEdit._id}/`,{
                method: "PUT",
                body: JSON.stringify(secretToEdit),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const parsedResponse = await updateSecretResponse.json()
            if(parsedResponse.success){
                const newSecrets = secrets.map(secret=>secret._id === secretToEdit._id ? secretToEdit: secret)
                setSecrets(newSecrets)
            }else{
                console.log(parsedResponse.data)
            }
        }catch(err){
            console.log(err)
        }
    }
    const revealSecrets=()=>{
        setShowSecrets(true)
    }
    useEffect(getSecrets, [])
    return(
        <main className="MainComponent" id="main-component">
            <h1 className="page-title">Post a Secret</h1>
            {!showSecrets ? <SecretFormComponent secrets={secrets} revealSecrets={revealSecrets} createNewSecret={createNewSecret}></SecretFormComponent> : <SecretsComponent secrets={secrets} deleteSecret={deleteSecret} editSecret={editSecret}></SecretsComponent>}
        </main>
    )  
}


export default MainComponent;
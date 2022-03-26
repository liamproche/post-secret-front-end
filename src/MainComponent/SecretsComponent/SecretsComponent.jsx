import './SecretsComponent.css'
import {useState} from 'react'


function SecretsComponent(){;
    const[secrets, setSecrets] = useState([])
    const getSecrets = async()=>{
        try{
            //DUMMY DATA
            const secrets = {
                "success": true,
                "data": [
                    {
                    "_id": "623e40ac717be5efeefd9c28",
                    "secret": "check2",
                    "rating": 0,
                    "createdAt": "2022-03-25T22:22:36.886Z",
                    "updatedAt": "2022-03-25T22:22:36.886Z",
                    "__v": 0
                    },
                    {
                    "_id": "623e43b5c2131ad109c6ab55",
                    "secret": "I don't know that I want to be in the tech industry.",
                    "rating": 0,
                    "createdAt": "2022-03-25T22:35:33.593Z",
                    "updatedAt": "2022-03-25T22:35:33.593Z",
                    "__v": 0
                    },
                    {
                    "_id": "623f6969fdbaee28798bb0a2",
                    "secret": "I am afraid of the dark",
                    "rating": 0,
                    "createdAt": "2022-03-26T19:28:41.314Z",
                    "updatedAt": "2022-03-26T19:28:41.314Z",
                    "__v": 0
                    }
                ]
                }
                //makes api call to the back-end for results
                // const secrets = await fetch("http://localhost:3001/secrets")
                // const parsedSecrets = await secrets.json()
                
                setSecrets(parsedSecrets.data)
            }catch(err){
                console.log(err)
                //user message goes here
                //TODO: Figure out user message on API Call fuck-ups
            }
        }
    
    return(
        <section className="SecretsComponent" id="secret-component">
            
        </section>
    )  
}


export default SecretsComponent;
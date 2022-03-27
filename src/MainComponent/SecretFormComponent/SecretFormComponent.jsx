import { useState } from 'react'
import './SecretFormComponent.css'


function SecretFormComponent(props){;
    const [newSecret, setNewSecret] = useState({})

    //function to handle change of text in input fields uses e-target so can be assigned to any input field
    const handleInputChange=(e)=>{
        console.log(newSecret)
        //sets new secret variable 
        setNewSecret({
           secret: e.target.value
        })
    }
    
    const submitNewSecret = (e)=>{
            e.preventDefault()
            props.createNewSecret(newSecret)
        }
            //ENDLESS VALIDATION IF CHAINS GO HERE
    
    return(
        <div className="SecretFormComponent" id="secret-form">
            <h1>Please enter a secret:</h1>
            <form className="input-group mb-3" onSubmit={submitNewSecret}>
                <input type="text" className="form-control" placeholder="Enter a secret" aria-label="Secret" aria-describedby="basic-addon2" name="secret" onChange={handleInputChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Submit Secret</button>
                </div>
            </form>
        </div>
    )  
}


export default SecretFormComponent;
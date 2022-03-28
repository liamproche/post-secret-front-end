import { useState } from 'react'
import './SecretControlsComponent.css'

function SecretControlsComponent(props){;
    const [updateSecret, setUpdateSecret] = useState(props.secret)
    const adjustRating=(e)=>{
        console.log(updateSecret)
        setUpdateSecret({
            ...updateSecret,
            rating: (Number(e.target.innerText))
        })
        props.editSecret(updateSecret)
    }
    return(
        <div className="SecretControlsComponent" id="secret-controls">
            <h6>Current Rating: {updateSecret.rating}</h6>
            <h6>Choose New Rating</h6>
            <a onClick={adjustRating}>1</a>
            <a onClick={adjustRating}>2</a>
            <a onClick={adjustRating}>3</a>
            <a onClick={adjustRating}>4</a>
            <a onClick={adjustRating}>5</a>
            <button onClick={()=>props.deleteSecret(props.secret._id)}>Delete</button>
        </div>
    )  
}


export default SecretControlsComponent;
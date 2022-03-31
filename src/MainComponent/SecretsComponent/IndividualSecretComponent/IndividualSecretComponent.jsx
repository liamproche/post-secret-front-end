import { useState } from 'react'
import './SecretControlsComponent/SecretControlComponent'
import './IndividualSecretComponent.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import cn from "classnames";
import SecretControlsComponent from './SecretControlsComponent/SecretControlComponent';


function IndividualSecretComponent(props){
    const [updateSecret, setUpdateSecret] = useState(props.secret)
    const adjustRating=(e)=>{
        e.preventDefault()
        setUpdateSecret({
            ...updateSecret,
            rating: (Number(e.target.innerText))
        })
        props.editSecret(updateSecret)
    }
    return(
        <div className="individual-secret-component" id="individual-secret">
            <div className="flip-card-outer">
                <div className={cn("flip-card-inner", {"hover-trigger": props.secret})}>
                    <div className="card front">
                    {props.secret.url ? 
                        <div className="card-body d-flex justify-content-center align-items-center" id="image-container-div">
                            <img src={props.secret.url}></img>
                        </div>
                        :
                        <div className="card-body d-flex justify-content-center align-items-center">
                            <p id="secret-text" className="card-text fs-1 fw-bold"><span id="enlarge-this">Secret</span></p>
                        </div>
                        }
                    </div>
                    <div id="full-back-container" className="card back">
                        <div id="back-conatiner" className="card-body d-flex justify-content-center align-items-center">
                            <div id="secret-grid-container">
                                <p id="sercret-secret-text" className="card-text fs-1">"{props.secret.secret}"</p>
                            </div>
                            <h6>Current Rating: {updateSecret.rating}</h6>
                                <SecretControlsComponent secret={props.secret} deleteSecret={props.deleteSecret} editSecret={props.editSecret} adjustRating={adjustRating}></SecretControlsComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualSecretComponent;
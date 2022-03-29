import './SecretControlsComponent/SecretControlComponent'
import './IndividualSecretComponent.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import cn from "classnames";
import SecretControlsComponent from './SecretControlsComponent/SecretControlComponent';


function IndividualSecretComponent(props){
    return(
        <div className="IndividualSecretComponent" id="individual-secret">
            {/* <div className="index-single-secret" style={{background: `url(${props.secret.url})`}}>
                <h2>Secret: {props.secret.secret}</h2>
                <p>Rating: {props.secret.rating}</p>
                <SecretControlsComponent secret={props.secret} deleteSecret={props.deleteSecret} editSecret={props.editSecret}></SecretControlsComponent>
            </div> */}
        
            <div className="flip-card-outer">
                <div className={cn("flip-card-inner", {"hover-trigger": props.secret.secret})}>
                    <div className="card front">
                        <div className="card-body d-flex justify-content-center align-items-center">
                            {props.secret.url ? 
                            <img id="secret-image"src={props.secret.url}></img>
                            :
                            <p className="card-text fs-1 fw-bold">Front</p>
                            }
                        </div>
                    </div>
                    <div className="card back">
                        <div className="card-body d-flex justify-content-center align-items-center">
                            <p className="card-text fs-1 fw-bold">Secret goes here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualSecretComponent;
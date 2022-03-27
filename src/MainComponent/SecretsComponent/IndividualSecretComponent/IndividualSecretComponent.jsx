import './SecretControlsComponent/SecretControlComponent'
import './IndividualSecretComponent.css'
import SecretControlsComponent from './SecretControlsComponent/SecretControlComponent';

function IndividualSecretComponent(props){;
    return(
        <div className="IndividualSecretComponent" id="individual-secret">
            <div className="index-single-animal">
                <h2>Secret: {props.secret.secret}</h2>
                <p>Rating: {props.secret.rating}</p>
                <SecretControlsComponent secret={props.secret} deleteSecret={props.deleteSecret}></SecretControlsComponent>
            </div>
        </div>
    )  
}


export default IndividualSecretComponent;
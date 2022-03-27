import './IndividualSecretComponent.css'

function IndividualSecretComponent(props){;
    return(
        <div className="IndividualSecretComponent" id="individual-secret">
            <div className="index-single-animal">
                <h2>Secret: {props.secret.secret}</h2>
                <p>Rating: {props.secret.rating}</p>
                {/* //lifts state by calling delete animal function from parent */}
                {/* <button onClick={()=>{props.deleteAnimal(props.animal._id)}}>Found a home</button> */}
            </div>
        </div>
    )  
}


export default IndividualSecretComponent;
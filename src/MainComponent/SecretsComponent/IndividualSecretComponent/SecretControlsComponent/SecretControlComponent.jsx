import './SecretControlsComponent.css'

function SecretControlsComponent(props){;
    return(
        <div className="SecretControlsComponent" id="secret-controls">
            <a href="#">Adjust Rating</a>
            <button onClick={()=>props.deleteSecret(props.secret._id)}>Delete</button>
        </div>
    )  
}


export default SecretControlsComponent;
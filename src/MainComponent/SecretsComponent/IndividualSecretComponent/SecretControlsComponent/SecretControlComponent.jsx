
import './SecretControlsComponent.css'

function SecretControlsComponent(props){;

    return(
        <div className="SecretControlsComponent" id="secret-controls">
            <div id="rating-container">
                <h6>Choose New Rating</h6>
                <a href='#' onClick={props.adjustRating}>1</a>
                <a href='#' onClick={props.adjustRating}>2</a>
                <a href='#' onClick={props.adjustRating}>3</a>
                <a href='#' onClick={props.adjustRating}>4</a>
                <a href='#' onClick={props.adjustRating}>5</a>
            </div>
            <div id='delete-button-container'>
                <button id="delete-button" onClick={()=>props.deleteSecret(props.secret._id)}>Delete</button>
            </div>
        </div>
    )  
}


export default SecretControlsComponent;
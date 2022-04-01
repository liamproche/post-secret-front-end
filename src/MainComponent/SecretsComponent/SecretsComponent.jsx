import './SecretsComponent.css'
import IndividualSecretComponent from './IndividualSecretComponent/IndividualSecretComponent'


function SecretsComponent(props){
    function reloadSite(){
        window.location.reload()
    }
    return(
        <section className="SecretsComponent" id="secret-component">
            <h2>Secrets created by others:</h2>
            <div id="secrets-container">
            {props.secrets.map((secret)=>{
                return <IndividualSecretComponent key={secret._id} secret={secret} deleteSecret={props.deleteSecret} editSecret={props.editSecret}></IndividualSecretComponent>
            })}
            </div>
            <div id="home-link-container">
                <h2 id="return-home-link" onClick={reloadSite}>Submit a new secret</h2>
            </div>
    
        </section>
    )  
}


export default SecretsComponent;
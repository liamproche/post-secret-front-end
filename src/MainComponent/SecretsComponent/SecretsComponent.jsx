import {useState, useEffect} from 'react'
import './SecretsComponent.css'
import IndividualSecretComponent from './IndividualSecretComponent/IndividualSecretComponent'


function SecretsComponent(props){
    return(
        <section className="SecretsComponent" id="secret-component">
            {props.secrets.map((secret)=>{
                return <IndividualSecretComponent key={secret._id} secret={secret} deleteSecret={props.deleteSecret} editSecret={props.editSecret}></IndividualSecretComponent>
            })}
        </section>
    )  
}


export default SecretsComponent;
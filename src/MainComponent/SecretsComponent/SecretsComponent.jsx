import {useState, useEffect} from 'react'
import './SecretsComponent.css'
import IndividualSecretComponent from './IndividualSecretComponent/IndividualSecretComponent'


function SecretsComponent(props){
    console.log(props.secrets)
    return(
        <section className="SecretsComponent" id="secret-component">
            {props.secrets.map((secret)=>{
                return <IndividualSecretComponent key={secret._id} secret={secret}></IndividualSecretComponent>
            })}
        </section>
    )  
}


export default SecretsComponent;
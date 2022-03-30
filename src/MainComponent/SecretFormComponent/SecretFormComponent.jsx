import { useState } from 'react'


//New Modal imports
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import './SecretFormComponent.css'


function SecretFormComponent(props){;
    const [modalOpen, setModalOpen] = useState(false)
    const showModal=()=>{
        setModalOpen(!modalOpen)
    }
    
    const [newSecret, setNewSecret] = useState({})
    const handleInputChange=(e)=>{
        setNewSecret({
           secret: e.target.value
        })
    }
    const submitNewSecret = (e)=>{
            e.preventDefault();
            props.createNewSecret(newSecret)
            props.revealSecrets()
        }
    //ENDLESS VALIDATION IF CHAINS GO HERE
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("")
    const uploadImage = async ()=>{
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'ym3qlxdj')
        const imgUplaodResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_IMG_CLOUD}/image/upload/`, {
            method: 'POST',
            body: data
        })
        const parsedResponse = await imgUplaodResponse.json()
        setUrl(parsedResponse.url)
        setNewSecret({
            ...newSecret,
            url: parsedResponse.url
        })
    }
    return(
        <div className="SecretFormComponent" id="secret-form-component">
            <h1>Please enter a secret:</h1>
            <form id="secret-form" className="input-group mb-3" onSubmit={submitNewSecret}>
                <input id="secret-input"  type="text" className="form-control" placeholder="What's your secret?" aria-label="Secret" aria-describedby="basic-addon2" name="secret" required={true} minLength={4} onChange={handleInputChange}/>
                <div className="input-group-append">
                    <button id="submit-button" className="btn btn-outline-secondary" type="submit">Submit Secret</button>
                </div>
            </form>
            <button id="add-artwork-button" onClick={showModal}>Add Artwork</button>
            <Modal show={modalOpen}>
                <Modal.Header>Select Artwork</Modal.Header>
                <Modal.Body>
                    <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={()=>{uploadImage(); showModal()}}>Upload Image</button>
                    <button onClick={showModal}>Close</button>
                </Modal.Footer>
            </Modal>


        </div>
    )  
}


export default SecretFormComponent;
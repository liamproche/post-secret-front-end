import { useState } from 'react'
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
            <h1 id="user-instructions">Submit a secret to see secrets created by others:</h1>
            <form id="secret-form" className="input-group mb-3" onSubmit={submitNewSecret}>
                <input id="secret-input"  type="text" className="form-control" placeholder="What's your secret?" aria-label="Secret" aria-describedby="basic-addon2" name="secret" required={true} minLength={4} onChange={handleInputChange}/>
                <div className="input-group-append">
                </div>
            </form>
            <div id="button-container">
                <button id="add-artwork-button" className="button" onClick={showModal}>Add Artwork</button>
                <button id="submit-button" className="button" onClick={submitNewSecret}>Submit Secret</button>
            </div>
            <Modal className="modal" show={modalOpen}>
                <Modal.Header id="modal-header-text">Select Artwork</Modal.Header>
                <Modal.Body>
                    <label className="styled-input">
                        <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])}></input>
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <button id="upload-button" className="button" onClick={()=>{uploadImage(); showModal()}}>Upload Image</button>
                    <button id="close-button" className="button" onClick={showModal}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )  
}


export default SecretFormComponent;
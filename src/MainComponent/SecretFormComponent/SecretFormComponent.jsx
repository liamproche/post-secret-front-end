import { useState } from 'react'
import './SecretFormComponent.css'

function SecretFormComponent(props){;
    const [newSecret, setNewSecret] = useState({})
    //function to handle change of text in input fields uses e-target so can be assigned to any input field
    const handleInputChange=(e)=>{
        //sets new secret variable 
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
        const imgUplaodResponse = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_IMG_CLOUD}/image/upload`, {
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
        <div className="SecretFormComponent" id="secret-form">
            <h1>Please enter a secret:</h1>
            <form className="input-group mb-3" onSubmit={submitNewSecret}>
                <input type="text" className="form-control" placeholder="Enter a secret" aria-label="Secret" aria-describedby="basic-addon2" name="secret" onChange={handleInputChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit">Submit Secret</button>
                </div>
            </form>
            <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])}></input>
            <div>
                <p>Image Name: {image.name}</p>
                <p>File Type: {image.type}</p>
                <p>Size: {image.size}</p>
                <button onClick={uploadImage}>Upload Image</button>
                </div>
                <div>
                    <p>Here is the image:</p>
                    <img src={url}/>
                </div>
        </div>
    )  
}


export default SecretFormComponent;
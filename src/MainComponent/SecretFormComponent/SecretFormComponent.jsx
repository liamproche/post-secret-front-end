import './SecretFormComponent.css'


function SecretFormComponent(){;
    return(
        <>
        <div className="SecretFormComponent" id="secret-form">
            <h1>Please enter a secret:</h1>
            <form class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter a secret" aria-label="Secret" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="submit">Submit Secret</button>
                </div>
            </form>
        </div>
        </>
    )  
}


export default SecretFormComponent;
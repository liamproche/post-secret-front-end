# post-secret-front-end

<h1>Post-a-Secret</h1>

<h2>App Description</h2>
<p>Inspired by Frank Warren's post-secret project, this app asks users to enter a secret they have not divulged to anyone before. Once submitted the app allows users to view 5 random secrets submitted by others. Users have the option to rate the individual secrets that they view (edit route) or delete them permanently from the database.</p>

<p>The original post-secret project asked people to submit their secrets via anonymous postcards. While researching these, I was really struck by the creativity some of the applicants used in designing the artwork for their post-cards. I felt that including an option for the user to upload their own artwork that would be displayed with their secret was a necessary stretch goal and am happy that I was able to incorporate it.</p>

<p>In terms of the layout, I really wanted the individual secrets to have kind of a postcard-like feel so decided to go with cards that would flip when a user hovers over each individual one. I feel adds a sense of theatricallity while still keeping a concise, minimilist aesthetic.</p>

<h2>Technologies Used</h2>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Sass</li>
    <li>JavaScript</li>
    <li>React</li>
    <li>Mongoose/MongoDB</li>
    <li>Bootstrap</li>
    <li>React-bootstrap</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

<h2>User Stories</h2>
<ul>
    <li>When a user first accesses the site they should see:</li>
        <ul>
            <li>Enter a secret message</li>
            <li>Text input field to enter a secret (placeholder "Enter a secret")</li>
            <li>Button to submit secret</li>
        </ul>
    <li>When a user enters a secret and hits the submit button:</li>
    <ul>
        <li>Button, text input field and message disappear</li>
        <li>5 secrets from the database apear each with rating component with:</li>
        <ul>
            <li>Current rating</li>
            <li>Way to change rating</li>
        </ul>
        <li>Delete secret forever button</li>
    </ul>
    <li>When user clicks way to change rating (thinking a tags numbered 1-10), displayed rating appears on the page</li>
    <li>When user clicks delete secret button, secret is deleted from database and disappears from page</li>
    <li>Nav button below the displayed secrets take user back to enter a secret page?</li>
</ul>

<h2>Known Issues</h2>
<ul>
    <li>Requests for image upload causes a warning as being sent via http originally vs https. Requests are automatically upgraded, but triggers a warning in the browser console.</li>
</ul>

<h2>Additional Considerations</h2>
<ul>
    <li>Enhance the display of artwork (maybe artwork as a background with the word "Secret" infront of it?)</li>
    <li>User login- This is something I considered as an option for an aditional stretch goal in which a user could create an account and there would be a show page that lists all of the secrets they have created with an option for them to delete the individual secrets from the database. In the end, I decided against including it as while it would have been good learning experience, I felt that the user-tracking element directly conflicts with the spirit of the app in that the secrets are submitted anomously... If users feel like they are tracked in anyway, they probably wouldn't feel they could be 100% truthful. Also, I decided against letting a user delete their own secret once submitted.</li>
    <li>Deployment as a TOR hidden service- I feel this app could do well deployed as a hidden service as the added anonimity could be a nice feature.</li>
</ul>

<h2>Models</h2>
    <p>Secret{</p>
        <p>body: String (min-length 4 required true )</p>
        <p>rating: Number (required true min 0 default 0)</p>
        <p>image url:</p>
        <p>timestamps: True</p>
    <p>}</P>


<h2>Stretch Goals</h2>
<ul>
    <li><s>Background Art option</s></li>
    <li><s>When submitting a secret user has option to upload background art that will appear on the front of the secret card</s></li>
    <li><s>Create public API (This may be super-easy)</s></li>
</ul>

<h2>Deployment Link:</h2>
<a href="https://post-a-secret-front-end.herokuapp.com/">https://post-a-secret-front-end.herokuapp.com/</a>


<h4>MVP Check</h4>
<ul>
    <li><s>Working fullstack application using the MERN stack</s></li>
    <li><s>Adhere to MVC file structure ()views in React</s></li>
    <li><s>At least one model with full CRUD</s></li>
    <li><s>At least 3 react components defined in their own file structure (outside of #app.js)</s></li>
    <li><s>Be deployed online and accessible to the public via heroku</s></li>
    <li><s>2 git repos (front-end & back-end) *at least one push per day</s></li>
    <li><s>A readme file with</s></li>
    <ul>
        <li><s>Explination of the technologies used</s></li>
        <li><s>Approach taken</s></li>
        <li><s>Unsolved problems</s></li>
        <li><s>User stories</s></li>
        <li><s>Notes to myself</s></li>
    </ul>
</ul>
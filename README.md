# post-secret-front-end
APP DESCRIPTION
Inspired by Frank Warren's post-secret project, this app asks users to enter a secret they have not divulged to anyone before. Once submitted the app allows users to view 5 random secrets submitted by others. Users have the option to rate the individual secrets that they view (edit route) or delete them permanently from the database. 

The original post-secret project asked people to submit their secrets via anonymous postcards. While researching these, I was really struck by the creativity some of the applicants used in designing the artwork for their post-cards. I felt that including an option for the user to upload their own artwork that would be displayed with their secret was a necessary stretch goal and am happy that I was able to incorporate it.

In terms of the layout, I really wanted the individual secrets to have kind of a postcard-like feel so decided to go with cards that would flip when a user hovers over each individual one. I feel adds a sense of theatricallity while still keeping a concise, minimilist aesthetic.

TECHNOLOGIES USED
-HTML
-CSS
-Sass
-JavaScript
-React
-Mongoose/MongoDB
-Bootstrap
-React-bootstrap
-Node.js
-Express.js


KNOWN ISSUES
-Requests for image upload causes a warning as being sent via http originally vs https. Requests are automatically upgraded, but creates a warning in the browser console.


ADDITIONAL CONSIDERATIONS
-Enhance the display of artwork (maybe artwork as a background with the word "Secret" infront of it?)
-User login- This is something I considered as an option for an aditional stretch goal in which a user could create an account and there would be a show page that lists all of the secrets they have created with an option for them to delete the individual secrets from the database. In the end, I decided against including it as while it would have been good learning experience, I felt that the user-tracking element directly conflicts with the spirit of the app in that the secrets are submitted anomously... If users feel like they are tracked in anyway, they probably wouldn't feel they could be 100% truthful. Also, I decided against letting a user delete their own secret once submitted.
-Deployment as a TOR hidden service- I feel this app could do well deployed as a hidden service as the added anonimity could be a nice feature.


USER STORIES
-When a user first accesses the site they should see:
    -enter a secret message, 
    -text input field to enter a secret (placeholder "Enter a secret")
    -button to submit secret
-When a user enters a secret and hits the submit button
    -Button, text input field and message disappear
    -5 secrets from the database apear each with
        -Rating component
            -Current rating
            -Way to change rating
        -Delete secret forever button
-When user clicks way to change rating (thinking a tags numbered 1-10)
    -Displayed rating updates on the page
-When user clicks delete secret button
    -Secret is deleted from database and disappears from page
-Nav button below the displayed secrets take user back to enter a secret page?


MODELS
    Secret{
        body: String (min-length 4 required true )
        rating: Number (required true min 0 default 0)
        image url:
        timestamps: True
    }


MVP CHECK
#-Working fullstack application using the MERN stack
#-Adhere to MVC file structure ()views in React
#-At least one model with full CRUD
#-At least 3 react components defined in their own file structure (outside of #app.js)
#-Be deployed online and accessible to the public via heroku
#-2 git repos (front-end & back-end) *at least one push per day
#-A readme file with
    #-Explination of the technologies used
    #-Approach taken
    #-Unsolved problems
    #-User stories
    #-Notes to myself


STRETCH GOALS
-Background Art option
    -When submitting a secret user has option to upload background art that will appear on the front of the secret card
-Create public API (This may be super-easy)


DEPLOYMENT LINK:
-https://post-a-secret-front-end.herokuapp.com/
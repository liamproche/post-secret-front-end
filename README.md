# post-secret-front-end
COMPONENT LAYOUT
<App.js>
    ternery for secret entered
    <SecretFormComponent>
    or show
    <SecretsComponent>
    -Makes API call and holds secrets in state
        <IndividualSecretComponent>
            -Hold Secrets (5 Created at random)
            <SecretControlsComponent>
                -Current Rating
                -Rerate(anchor links no submit button, submit happens on button click)
                -Delete Secret Option(button or a-link)
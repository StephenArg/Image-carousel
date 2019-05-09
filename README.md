Example Image Carousel
Example component meant to randomly cycle through image urls in array, while pushing those values to image tag | Demo
Clone and run application

    Run react front end

    git clone git@github.com:StephenArg/react_twoislandbridge_practice.git
    npm install

    After installing packages, create a file called .env in the main directory and add this line to it. REACT_APP_API_LOCATION=localhost:3001 After this, run npm start

A chat application that pairs its users randomly and allows for websocket-enabled text chat and video conferencing between the participants.
What's being used:

    React
    Rails
    ActionCable
    OpenTok Video Chat embeds
    PostgreSQL

Stretch Features:

    Create user profiles and more customizability (Full CRUD).
    Add Redux for better state management.
    Present column alongside chat box to display previous matches with the ability to rate them, attempt to reconnect to them, block them, review past text conversations, and more.
    Create a rating system the determines which individuals a user will match with.
    Add a nudity sensing api to auto-ban policy breaking users.
    Improve design, rework name, and add routes.

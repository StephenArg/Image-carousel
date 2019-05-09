Example Image Carousel
Example component meant to randomly cycle through image urls in array, while pushing those values to image tag | Demo
Clone and run application

    Run react front end

    git clone git@github.com:StephenArg/Image-carousel.git
    npm install

    npm start

Example of simple image carousel using React.

I recently completed an interview where we talked about creating a random image carousel component that cycles through the images using a randomizer. Since the exercise was on paper, I felt it best to try to build it afterwards to see it in action. I was able to learn from the interviewer about how setInterval returns a reference value that you can later use while unmounting to stop said interval.

setInterval, which intializes when the component mounts, calls a function which creates a random unused index to pull a url from an array containing multiple url strings. That function then changes the current image url being used in the image tag by updating the state, while also adding that index to an array in the state so that every image must be shown before showing it again.
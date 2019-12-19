# Face Detection Client

This repo renders an outline around the first face found in a given image. After registration, simply
paste an image url into the input field to see the image and facial outline. The app will also keep a
count of the number of images a user has submitted.

When an image is submitted, this app calls my Face Detection API, which has been deployed to Heroku.
Further information on this API can be found [here]: https://github.com/MarkChanner/face-detection-api/blob/master/README.md

## To Run

`npm install`  
`node server.js`

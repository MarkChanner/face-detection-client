# Face Detection Client

This app renders an outline around the first face found in a given image. After registration, simply
paste an image url into the input field to see the image and facial outline:  

![Alt text](./screenshots/face-detection-screenshot.png?raw=true "Title here")

The app will also keep a
count of the number of images a user has submitted.

To retrieve the image and facial outline coordinates, the app calls my Face Detection API, which has been deployed to Heroku.
Further information on this API can be found [here][face-detection-api].

[face-detection-api]: https://github.com/MarkChanner/face-detection-api/blob/master/README.md

## To Run

`npm install`  
`npm start`

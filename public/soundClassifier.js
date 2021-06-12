let soundClassifier;
let colour;

//doesnt need a callback funtion just load the model in preload
function preload() {
  //return the results only if the confidence level is 85%
  let options = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.85,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.20
  };
  //the link to my sound classifier model
  //this model works better with my voice so I dont know how it will perform with other people's
  //go to https://teachablemachine.withgoogle.com/ to make your own model and change this link with yours
  soundClassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eAjA9IqXT/model.json', options);
}

function setup() {
  soundClassifier.classify(gotResults);
}


//error-first callback
function gotResults(error, results) {
  if (error) {
    console.log('something went wrong');
    return;
  }

  //log the result with the highest confidence and the confidence for debugging
  console.log(results[0].label, results[0].confidence);
  colour = results[0].label;

  //change html background colour  
  switch (colour) {
    case 'red':
      document.body.style.backgroundColor = "red";
      break;
    case 'green':
      document.body.style.backgroundColor = "#4CA64C";
      break;
    case 'blue':
      document.body.style.backgroundColor = "#136DEA";
      break;
    case 'white':
      document.body.style.backgroundColor = "#FFFFFF";
      break;
    case 'cyan':
      document.body.style.backgroundColor = "#00FFFF";
      break;
    case 'purple':
      document.body.style.backgroundColor = "purple";
      break;
    case 'yellow':
      document.body.style.backgroundColor = "yellow";
      break;
  }

  //attempt to send data to the local arduino server
  let data = results[0].label;
  //specifying the request details
  const options = {
    method: 'POST',
    headers: {
      //type to be delivered to the server is plain text
      'Content-Type': 'text/plain;charset=UTF-8'
    },
    body: data
  };
  //make a post request 
  fetch('/api', options)
    .catch(error => {
      console.error(error)
    });
}
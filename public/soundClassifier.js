let soundClassifier;
let colour;

function preload() {
  //return the results only if the confidence level is 85%
  let options = {
    includeSpectrogram: true, 
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

function gotResults(error, results) {
  if (error) {
    console.log('something went wrong');
    return;
  }

  //log the result with the highest confidence and the confidence for debugging
  console.log(results[0].label, results[0].confidence);
  colour = results[0].label;

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

  let data = results[0].label;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    },
    body: data
  };
  fetch('/api', options)
    .catch(error => {
      console.error(error)
    });
}

# VoiceControlledArduino
This is a program that controls an RGB LED using the Johnny 5 library and a Teachable Machine neural net for sound classification

<h4>Set Up</h4>

Im using this to control an arduino uno but as far as I know Johnny 5 should run just fine with other boards. For Johnny 5 to work you need to have the standard firmata loaded to your board. You also need to have your board connected via usb serial to your host machine the whole time.
<br>For more info on Johnny 5 visit http://johnny-five.io/

I made a sound classifier neural net using google's teachable machine. It is trained to respond to my voice mainly so I dont know how it will perform with other people's. Thus Im suggesting you go create your own model and as such you can also change the words it recognises (its a ridiculously easy process).
<br>You can do that here https://teachablemachine.withgoogle.com/train/audio

Oh and since I mentioned it my model recognises these words/colours:
<br>Red, Green, Blue, White, Cyan, Purple, Yellow

The sound classifier is implemented using the p5 and ml5 libs which as you see are linked in index.html. Im using CDN links so no need to download anything.

You need to have node installed. Im using the express lib and the johnny-five lib. 
<br>To download these dependencies run
```
sudo npm install
```
Supposing everything is installed correctly, you have followed the above steps and made the right adjustments to the code so it corresponds to your board config
you can just go ahead and run
```
sudo npm start
```
and then open a tab and go to http://localhost:3000/ .
<br>Then you can just try saying a few colours and (fingers crossed) it changes the colour of the led and the html page correctly!!! If you want to see the colours the NN guesses you said and the confidence with which it guessed open dev tools and go to the console.

If you find any bugs please report them, thank u :)



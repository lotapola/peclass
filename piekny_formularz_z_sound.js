let nameInput, lastNameInput, classTypeDropdown, submitButton;
let message = '';
let cursorg;
let cursorWidth = 150;  // Desired width of the cursor
let cursorHeight = 150; // Desired height of the cursor
let customFont;
let fontFace;
let congratsSound, sadSound;
let backgroundImg;
let positionX = 20;
let positionY = 0;


function preload() {
  // Load the cursor image
  cursorg = loadImage('cursorg.png');
  // Load the custom font
  customFont = loadFont('BebasNeue-Regular.ttf');
  // Load the congratulations sound
  congratsSound = loadSound('congrats.mp3'); 
  // Load the sad sound
  sadSound = loadSound('sad.mp3');
  // Load the background image
  backgroundImg = loadImage('benches.jpg');
}

function setup() {
  // Create the canvas
  createCanvas(1920, 1080);
  positionX = width/2-70;
  positionY = height/2-110;

  fontFace = new FontFace('CustomFont', 'url(BebasNeue-Regular.ttf)');
  document.fonts.add(fontFace);

  textFont(customFont);

  // Hide the default cursor
  noCursor();

  // Create heading
  let heading = createElement('h1', 'PE class enrollment');
  heading.position(positionX, positionY+3);
  heading.style('font-family', 'CustomFont');

  // Create name and surname input field with label
  let nameLabel = createElement('h3', 'First name:');
  nameLabel.position(positionX, positionY+50);
  nameLabel.style('font-family', 'CustomFont');
  nameInput = createInput();
  nameInput.position(positionX, positionY+90);

  // Create last name input field with label
  let lastNameLabel = createElement('h3', 'Last name:');
  lastNameLabel.position(positionX, positionY+120);
  lastNameLabel.style('font-family', 'CustomFont');
  lastNameInput = createInput();
  lastNameInput.position(positionX, positionY+160);

  // Create class type dropdown with label
  let classTypeLabel = createElement('h3', 'PE Class Type:');
  classTypeLabel.position(positionX, positionY+180);
  classTypeLabel.style('font-family', 'CustomFont');
  classTypeDropdown = createSelect();
  classTypeDropdown.position(positionX, positionY+220);
  classTypeDropdown.option('Karate Class');
  classTypeDropdown.option('Zoom Class');
  classTypeDropdown.option('Pilates Class');

  // Create submit button
  submitButton = createButton('Submit');
  submitButton.position(positionX, positionY+260);
  submitButton.mousePressed(submitForm);
  submitButton.style('font-family', 'CustomFont');
}

function submitForm() {
  // Get values from input and dropdown
  let name = nameInput.value();

  let lottery = random(1);
  // Simple condition: check if the name input is not empty
  if (lottery > 0.5) {
    message = 'Congratulations!';
    congratsSound.play(); // Play the congratulations sound
  } else {
    message = 'Sorry, try again next semester';
    sadSound.play();
  }

  // Clear the form elements
  nameInput.remove();
  lastNameInput.remove();
  classTypeDropdown.remove();
  submitButton.remove();
  selectAll('h3').forEach(elem => elem.remove());
  selectAll('h1').forEach(elem => elem.remove());
}

function draw() { 
  background(255);
  // Apply a tint to the background image
   tint(255,100); // White tint with 150 alpha value for transparency
  // Set the background image
  image(backgroundImg, 0, 0, width, height);
 

  // Draw the GIF at the mouse position
  image(cursorg, mouseX, mouseY, cursorWidth, cursorHeight);

  // Display the message if it's not empty
  if (message !== '') {
    textSize(32);
    textFont(customFont);
    fill('#000');
    text(message, 20, height / 2);
  }
}

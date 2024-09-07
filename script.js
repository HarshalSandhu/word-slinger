//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
  fruits: [
    'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant',
  'Blueberry', 'Boysenberry', 'Breadfruit', 'Cantaloupe', 'Cherry', 'Clementine',
  'Coconut', 'Cranberry', 'Currant', 'Date', 'Dragonfruit', 'Durian', 'Elderberry',
  'Fig', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Kiwi', 'Kumquat', 'Lemon',
  'Lime', 'Lingonberry', 'Lychee', 'Mango', 'Mulberry', 'Nectarine', 'Olive', 'Orange',
  'Papaya', 'Passion Fruit', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate',
  'Raspberry', 'Redcurrant', 'Starfruit', 'Strawberry', 'Tangerine', 'Watermelon',
  'Acai', 'Acerola', 'Almond', 'Apple Pear', 'Bilberry', 'Black Cherry', 'Black Grape',
  'Black Plum', 'Black Walnut', 'Blue Grape', 'Bosc Pear', 'Butternut Squash', 'Cactus Fruit',
  'Canistel', 'Cashew', 'Cherimoya', 'Clementine', 'Coconut', 'Crabapple', 'Date Palm',
  'Fuyu Persimmon', 'Galia Melon', 'Goji Berry', 'Goldenberry', 'Grapple', 'Guava',
  'Jabuticaba', 'Jambolan', 'Jicama', 'Jujube', 'Kiwifruit', 'Langsat', 'Loquat',
  'Longan', 'Mamey Sapote', 'Mangosteen', 'Medlar', 'Meyer Lemon', 'Nance', 'Nopales',
  'Olallieberry', 'Peach Palm', 'Persimmon', 'Pineberry', 'Pluot', 'Pomegranate', 'Pomelo',
  'Quince', 'Raisin', 'Raspberry', 'Rhubarb', 'Salak', 'Santol', 'Soursop', 'Surinam Cherry',
  'Tamarind', 'Tangerine', 'Tamarillo', 'Tomatillo', 'Ugni Fruit', 'Wampi', 'Yuzu',
  'Ziziphus', 'Atemoya', 'Bacaba', 'Bacupari', 'Burdekin Plum', 'Canistel', 'Cupuacu',
  'Desert Lime', 'Duku', 'Feijoa', 'Finger Lime', 'Grumichama', 'Ilama', 'Jaboticaba',
  'Kaffir Lime', 'Kiwano', 'Kumquat', 'Langsat', 'Litchi', 'Mango', 'Mangosteen',
  'Mimosa Pudica', 'Noni', 'Otaheite Apple', 'Pequi', 'Pouteria', 'Red Banana', 'Soursop',
  'Sugar Apple', 'Tamarind', 'Wampee', 'White Currant', 'Yamamomo'
],
  animals:  [
    'Aardvark', 'Ape', 'Armadillo', 'Baboon', 'Badger', 'Bat', 'Bear', 'Beaver', 'Bison',
    'Booby', 'Buffalo', 'Bull', 'Camel', 'Capybara', 'Caribou', 'Cat', 'Cheetah', 'Chimpanzee',
    'Clam', 'Cobra', 'Cougar', 'Cow', 'Coyote', 'Crab', 'Crocodile', 'Deer', 'Dolphin',
    'Donkey', 'Dragonfly', 'Duck', 'Eagle', 'Elephant', 'Elk', 'Ferret', 'Fish', 'Flamingo',
    'Fox', 'Frog', 'Giraffe', 'Goat', 'Goldfish', 'Goose', 'Gorilla', 'Grizzly Bear', 'Guinea Pig',
    'Hawk', 'Hedgehog', 'Hippo', 'Horse', 'Human', 'Hyena', 'Iguana', 'Impala', 'Jaguar',
    'Kangaroo', 'Koala', 'Komodo Dragon', 'Kookaburra', 'Lemur', 'Leopard', 'Lion', 'Llama',
    'Lynx', 'Mole', 'Monkey', 'Moose', 'Mouse', 'Narwhal', 'Newt', 'Ocelot', 'Octopus',
    'Opossum', 'Otter', 'Owl', 'Panda', 'Parrot', 'Penguin', 'Pig', 'Platypus', 'Pony',
    'Porcupine', 'Possum', 'Pufferfish', 'Quail', 'Rabbit', 'Raccoon', 'Rat', 'Raven', 'Reindeer',
    'Rhinoceros', 'Seal', 'Shark', 'Sheep', 'Shrimp', 'Skunk', 'Sloth', 'Snake', 'Sparrow',
    'Spider', 'Squirrel', 'Starfish', 'Stingray', 'Swan', 'Tiger', 'Toad', 'Tortoise', 'Toucan',
    'Trout', 'Turkey', 'Turtle', 'Vulture', 'Walrus', 'Wasp', 'Weasel', 'Whale', 'Wildebeest',
    'Wolf', 'Wombat', 'Woodpecker', 'Zebra', 'Zebu', 'Zorse', 'Zebu'
  ],
  countries: [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina',
  'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
  'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
  'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon',
  'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo',
  'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
  'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia',
  'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau',
  'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
  'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
  'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
  'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi',
  'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico',
  'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
  'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria',
  'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
  'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia',
  'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
  'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste',
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom',
  'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen',
  'Zambia', 'Zimbabwe'
],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  //For creating letter buttons
  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i);
    //character button click
    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            dashes[index].innerText = char;
            //increment counter
            winCount += 1;
            //if winCount equals word lenfth
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //lose count
        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 6) {
          resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
    });
    letterContainer.append(button);
  }

  displayOptions();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { initialDrawing } = canvasCreator();
  //initialDrawing would draw the frame
  initialDrawing();
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;

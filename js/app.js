// Arrays containing words for different parts of the story
let nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
let verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
let adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let secondNouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
let places = ['on the moon', 'on the chair', 'in my spaghets', 'in my soup', 'on the grass', 'in the shoes'];
// Variable to hold the generated story
let story = '';

// Function to generate a random story
function generateRandomStory() {
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomSecondNoun = secondNouns[Math.floor(Math.random() * secondNouns.length)];
    let randomPlace = places[Math.floor(Math.random() * places.length)];
}
 
// Event listeners for each button to add corresponding words to the story and speak them aloud

document.getElementById('nounBtn').addEventListener('click', () => {
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
	speakNow(randomNoun);
    story += ` ${randomNoun} `;
    document.getElementById('story').textContent = story;
});

document.getElementById('verbBtn').addEventListener('click', () => {
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
	speakNow(randomVerb);
    story += `${randomVerb} `;
    document.getElementById('story').textContent = story;
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
    let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	speakNow(randomAdjective);
    story += `${randomAdjective} `;
    document.getElementById('story').textContent = story;
});

document.getElementById('secondNounBtn').addEventListener('click', () => {
    let randomSecondNoun = secondNouns[Math.floor(Math.random() * secondNouns.length)];
	speakNow(randomSecondNoun);
    story += `${randomSecondNoun} `;
    document.getElementById('story').textContent = story;
});

document.getElementById('placeBtn').addEventListener('click', () => {
    let randomPlace = places[Math.floor(Math.random() * places.length)];
	speakNow(randomPlace);
    story += `${randomPlace}.`;
    document.getElementById('story').textContent = story;
});

// Event listener for the reset button to clear the story
document.getElementById('resetBtn').addEventListener('click', () => {
    story = '';
    document.getElementById('story').textContent = story;
});

// Function to speak the story aloud
let synth = window.speechSynthesis;
let textToSpeak = '';
let speakButton = document.getElementById('speakBtn');

function speakNow(string) {
    let utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

// Event listener for the speak button to speak the story
speakButton.onclick = function() {
    textToSpeak = document.getElementById('story').textContent;
    speakNow(textToSpeak);
}


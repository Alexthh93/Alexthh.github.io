// Create a message generator - 

// made by RoX_KD & BAM 
// ---------------------------------------------------------------------------------

// Objectives - Visualize end result... ## 1 
// 1. Choose a subject (4 subjects to create messages from)
// 2. Create a random messages based on 20 possibillities from 4 categories (In total 80 messages must be created)
// 3. Decide functionallity (arrays, built methods or functions, objects or prewritten possibilities with numeric value based on subject.)


// Objectives - Visualize end result... ## 2
// 1. Choose a subject
// 2. Create random words and store in an array or numeric possibilites
// 3. Create a function/method which through an algorithm, creates a choesive message based on rules of words (verbs, nouns, adjectives, adverbs, prepositions, pronouns,
// interjections and suffixes).  

// ----------------------------------------------------------------------------------------
// RoX_KD SECTION 
// result should be stored in an array. Then we can mutate the array based on a ruleset to create a cohesive sentence. 
// Create a random number (4 - 13) for numbers of words in the senctence. 


// -----------------------------------------------------------------------------------------

// BAM SECTION
// create an array for nouns, verbs, adjectives, connectors...
// if the phrase has multiple nouns, if...else statement to add connectors
// add the words to an array that'll be connected with concat - (join() - built in function) 

// -----------------------------------------------------------------------------------------


/* Game plan ----- and ideas~

 create a list of topics - (Sports, Video-gaming, traveling, finance, animals)

 Create 3 arrays which defines start, middle, end. (5 inputs in each array of each topic)

 introductory list - array

 middle list - array

/ending list - array

function to loop through the arrays and randomly select an entry. 

 store each sentence into a variable and make sure to not replicate the same sentences. 

 after storing the result, create a function that prints X amount of sentences

 create a do...while loop that will go through the words array UNTIL they're different. /*

 /* if end === end
      it goes through the loop again until the results are different
    replicate this n (number) of times. */

// ----------------------------------------------------------------------------------------


// writting sentences which can be mixed in any possible way on three topics - Traveling, Video-gaming and Animals.

// -------------- TRAVELING -----------------------
// Go to... New York... to buy an icecream
// Drive to... Bahamas ... to find your love
// spent all your money in .... Dubai ... and take a picture
// Go to Justin Timberlake concert in ... France ... and make a backflip
// Jump out of a plane in ... Turkey ... while talking with your mom 
// Smoke shisha in ... the eye of a storm ... to meet up with god
// walk your dog in ... Hawaii ... to become world-ruler
// Use snapchat in ... a Monk church .... to witness a birth.


// ------------ VIDEO-GAMING ---------------------
// Suck at ... World of Warcraft ... is not okay! 
// Cheat in ...videogames ... makes you worthless.
// Winning the .... tournaments ... will always reward you with fame!
// Don't be toxic in ... MMOs ... it will get you banned.
// Smashing your controller in...New World...won't do you any good.
// Livestream .... your favorite game .... to become a millionaire
// Play...Super Smash Brothers...for easy wins.
// Beat your friends in... FIFA...for ultimate supremacy!



// --------------- ANIMALS ---------------------------
// Walking your ... dog ... is the best feeling you can achieve
// Swimming with ... dolphins ... will make you feel better
// Riding a ... camel ... is fun and challenging 
// Killing any kind of ... animal ... should have you jailed! 
// Adopting a .... cat .... will demand a lot of responsibillity. 
// Wrestling with a .... lion .... will be your death for sure. 
// Making out with a .... bear .... is bloody disgusting and weird. 
// Playing tricks with your .... kangaroo ... is like playing with your kid. 




// Create arrays for TRAVEL. 
const travelStart = ['Go to', 'Drive to', 'spent all your money in', 'Go to Justin Timberlake concert in', 'Jump out of a plane in', 'Smoke shisha in', 'walk your dog in', 'Use snapchat in']; // array with start senctence
const travelMid = ['New York', 'Bahamas', 'Dubai', 'France' , 'Turkey', 'the eye of a storm', 'Hawaii', 'a Monk church']; // array with mid sentence
const travelEnd = ['to buy an icecream', 'to find your love', 'and take a picture', 'and make a backflip', 'while talking with your mom', 'to meet up with god', 'to become world-ruler', 'to witness a birth']; // array with end sentence


// create arrays for ANIMALS
const animalStart = ['Walking your', 'Swimming with', 'Riding a', 'Killing any kind of', 'Adopting a', 'Wrestling with a', 'Making out with a', 'Playing tricks with your'] // array with start sentence
const animalMid = ['dog', 'dolphins', 'camel', 'animal', 'cat', 'lion', 'bear', 'kangaroo'] // array with mid sentence
const animalEnd = ['is the best feeling you can achieve', 'will make you feel better', 'is fun and challenging', 'should have you jailed!', 'will demand a lot of responsibillity.', 'will be your death for sure.', 'is bloody disgusting and weird.', 'is like playing with your kid.'] // array with end sentence


//create arrays for VIDEO-GAMES

const videoStart = ['Suck at', 'Cheat in', 'Winning the', 'Don\'t be toxic in', 'Smashing your controller in', 'Livestream', 'Play', 'Beat your friends in']; // array with start senctence
const videoMid = ['World of Warcraft', 'videogames', 'tournaments', 'MMOs', 'New World', 'your favorite game', 'Super Smash Brothers', 'FIFA']; // array with mid senctence
const videoEnd = ['it is not okay', 'makes you worthless', 'it will always reward you with fame', 'will get you banned', 'won\'t do you any good', 'to become a millionaire', 'for easy wins', 'for ultimate supremacy']; // array with end senctence



// function which makes a random output based on arrays. 
const generateTravelMessage = (sentenceStart, sentenceMid, sentenceEnd) => {

    let start = sentenceStart[Math.floor(Math.random()*sentenceStart.length)];
    let mid = sentenceMid[Math.floor(Math.random()*sentenceMid.length)];
    let end = sentenceEnd[Math.floor(Math.random()*sentenceEnd.length)];

    return`${start} ${mid} ${end}`
}

console.log(generateTravelMessage(animalStart, animalMid, animalEnd));



const pickATopic = (topic) => {
    if (topic === travel) console.log(generateTravelMessage(travelStart, travelMid, travelEnd)) 
    if (topic === animal) console.log(generateTravelMessage(animalStart, animalMid, animalEnd)) 
    if (topic === videoGames) console.log(generateTravelMessage(videoStart,videoMid,videoEnd)) 
}

console.log(pickATopic(animal))
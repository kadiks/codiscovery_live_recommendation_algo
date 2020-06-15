const sallyRomComProfile = {
    action: 0,
    romcom: 5,
    thriller: 2,
    horror: 3,
    brainy: 1,
    kids: 1,
    fantasy: 3
};

const johnActionProfile = {
    action: 5,
    romcom: 1,
    thriller: 2,
    horror: 0,
    brainy: 0,
    kids: 0,
    fantasy: 2
};


const movie1 = {
    name: 'Fight Club',
    duration: 120,
    types: {
        brainy: 1,
        romcom: .3,
        action: .2
    }
};

const movie2 = {
    name: 'Harry Potter: Prisoner of Azkaban',
    duration: 120,
    types: {
        kids: .8,
        fantasy: .8,
        action: .2
    }
};

const movie3 = {
    name: 'Kill Bill vol.1',
    duration: 120,
    types: {
        action: .7,
        horror: .4
    }
};

const makeRecommendation = (movie, profile) => {
    let score = 0;

    let scoreAction = 0;
    if (movie.types.hasOwnProperty('action') === true) {
        scoreAction = movie.types.action * profile.action;
    }
    // Same as
    // if (movie.types.action) {

    // }
    // Same as
    // if (typeof movie.types.action !== 'undefined') {

    // }
    
    let scoreDocumentary = 0;
    let scoreRomcom = 0;
    if (movie.types.hasOwnProperty('romcom') === true) {
        scoreRomcom = movie.types.romcom * profile.romcom;
    }

    let scoreThriller = 0;
    if (movie.types.hasOwnProperty('thriller') === true) {
        scoreRomcom = movie.types.thriller * profile.thriller;
    }
    let scoreHorror = 0;
    if (movie.types.hasOwnProperty('horror') === true) {
        scoreHorror = movie.types.horror * profile.horror;
    }
    let scoreAnimation = 0;
    let scoreBrainy = 0;
    if (movie.types.hasOwnProperty('brainy') === true) {
        scoreBrainy = movie.types.brainy * profile.brainy;
    }
    let scoreKids = 0;
    if (movie.types.hasOwnProperty('kids') === true) {
        scoreKids = movie.types.kids * profile.kids;
    }
    let scoreFantasy = 0;
    if (movie.types.hasOwnProperty('fantasy') === true) {
        scoreFantasy = movie.types.fantasy * profile.fantasy;
    }

    // Raw score
    score = (scoreAction + scoreRomcom + scoreThriller +
            scoreHorror + scoreBrainy + scoreKids + scoreFantasy) / 7;

    
    // Damaging coefficient 
    if (profile.horror === 0) {
        score = score * .7;
    }

    // Prettify
    score = score * 1.9;

    return parseInt(score * 100);
};


const scoreMovie1ProfileJohn = makeRecommendation(movie1, johnActionProfile);
const scoreMovie1ProfileSally = makeRecommendation(movie1, sallyRomComProfile);



const scoreMovie2ProfileJohn = makeRecommendation(movie2, johnActionProfile);
const scoreMovie2ProfileSally = makeRecommendation(movie2, sallyRomComProfile);


const scoreMovie3ProfileJohn = makeRecommendation(movie3, johnActionProfile);
const scoreMovie3ProfileSally = makeRecommendation(movie3, sallyRomComProfile);

console.log('Fight Club');
console.log('John:', scoreMovie1ProfileJohn);
console.log('Sally:', scoreMovie1ProfileSally);
console.log('---');
console.log('Harry Potter');
console.log('John:', scoreMovie2ProfileJohn);
console.log('Sally:', scoreMovie2ProfileSally);
console.log('---');
console.log('Kill bill vol.1');
console.log('John:', scoreMovie3ProfileJohn);
console.log('Sally:', scoreMovie3ProfileSally);
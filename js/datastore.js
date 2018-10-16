const questionStore = [
    { question: "The original Ghostbusters operated their business out of what building?", answer: "Rundown Firehouse", incorrect1: "Abandoned Factory", incorrect2: "Old Hospital", incorrect3: "Empty McDonalds"},
    { question: "Albus Dumbledore was a member of which Hogwarts house?", answer: "Gryffindor", incorrect1: "Ravenclaw", incorrect2: "Hufflepuff", incorrect3: "Slytherin"},
    { question: "In which of these films did Leonardo DiCaprio's character survive?", answer: "What's Eating Gilbert Grape", incorrect1: "Blood Diamond", incorrect2: "The Departed", incorrect3: "The Quick and the Dead"},
    { question: "What classical work was referenced in O Brother, Where Art Thou??", answer: "The Odyssey", incorrect1: "The Iliad", incorrect2: "The Brothers Karamazov", incorrect3: "The Bible"},
    { question: "What does Daniel Day-Lewis talk about in the final scene of There Will Be Blood?", answer: "Milkshakes", incorrect1: "Bowling", incorrect2: "His airplane", incorrect3: "A beach"},
    { question: "What is underneath Professor Quirrell's turban in Harry Potter and the Sorcerer's Stone?", answer: "Voldemort's face", incorrect1: "A heinous rash", incorrect2: "Tattoos", incorrect3: "Another turban"},
    { question: "What film director has a 100+ skull collection?", answer: "Guillermo del Toro", incorrect1: "Tim Burton", incorrect2: "David Lynch", incorrect3: "Quentin Tarantino"},
    { question: "`Changing Seasons` was the working title given to what blockbuster film?", answer: "Lord of the Rings", incorrect1: "Titanic", incorrect2: "Avatar", incorrect3: "The Da Vinci Code"},
    { question: "As of 2018, who has won the most Academy Awards?", answer: "Walt Disney", incorrect1: "Katharine Hepburn", incorrect2: "Meryl Streep", incorrect3: "Tom Hanks"},
    { question: "What character in The Neverending Story is a young warrior from the Grassy Plains?", answer: "Atreyu", incorrect1: "Artax", incorrect2: "Bastian", incorrect3: "Falcor"}
];

const defaultGif = ["https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif"];

const finalGif = ["https://media.giphy.com/media/7rkXvr6k6KxRS/giphy.gif"];

const userAnswerStore = [];

const wrongReactionGifs = ["https://media.giphy.com/media/9NTfxeLPpgRUI/giphy.gif","https://media.giphy.com/media/fv9EO0McAqqDS/giphy.gif","https://media.giphy.com/media/3og0IRo1EZPNnhbBV6/giphy.gif","https://media.giphy.com/media/YU0j0j92jLdU4/giphy.gif","https://media.giphy.com/media/3oz8xKaVomTm8vI3uw/giphy.gif","https://media.giphy.com/media/13xb3GPki9Kqdi/giphy.gif","https://media.giphy.com/media/f7yH375mnEh2g/giphy.gif"];

const rightReactionGifs = ["https://media.giphy.com/media/m1y5Iver1GNR6/giphy.gif","https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif","https://media.giphy.com/media/RgfGmnVvt8Pfy/giphy.gif","https://media.giphy.com/media/JVdF14CQQH7gs/giphy.gif","https://media.giphy.com/media/em4i0bDs9Hm2Q/giphy.gif","https://media.giphy.com/media/cXRdGDNCsiGX6S0qOM/giphy.gif","https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif","https://media.giphy.com/media/xTiTnzEhdR9y9PNyc8/giphy.gif"];

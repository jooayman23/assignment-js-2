var Quotes = [
    {
        quote : "you miss 100% of the shots you don't take .",
        author : "wayne Gretzky",
    },
    {
        quote : "Resentment is like drinking poison and waiting for your enemies to die .",
        author : "Nelson mandela",
    },
    {
        quote : "The best revenge is massive success .",
        author : "Frank sinatra",
    },
    {
        quote : "It's not what happens to you, but how you react to it that matters .",
        author : "--Epictetus",
    },
    {
        quote : "you is my love ia want tell you some thing for you.",
        author : "I love u",
    },
]

function add() {
    var numQuo = Math.floor(Math.random() * Quotes.length );
console.log(numQuo);

    document.getElementById("quote").innerHTML = Quotes[numQuo].quote
    document.getElementById("author").innerHTML = Quotes[numQuo].author
}

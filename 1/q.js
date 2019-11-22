var quotes = [
    "IS IT JUST ME OR IS IT GETTING CRAZIER OUT THERE?",
    "SOMEONE WHO HIDES BEHIND A MASK.",
    "PEOPLE ARE STARTING TO NOTICE.",
    "I HOPE MY DEATH MAKES MORE CENTS THAN MY LIFE.",
    "I used to think that my life was a tragedy, but now I realize, it's a f**king comedy.",
    "The worst part of having a mental illness is people expect you to behave as if you don't",
    "Smile, because it confuses people. Smile, because it's easier than explaining what is killing you inside.",
    "As you know, madness is like gravity...all it takes is a little push.",
    "If you are good at something, never do it for free.",
    "What doesn't kill you, simply makes you stranger!",
    "Why so serious?"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


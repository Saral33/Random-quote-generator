var quotes=[
    "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell donot deserve me at my best.-Marilyn Monroe" ,
    "Be yourself; everyone else is already taken.- Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.-Albert Einstein",
    "So many books, so little time.-Frank Zappa",
    "A room without books is like a body without a soul.-Marcus Tullius Cicero",
   "If you cannot do great things, do small things in a great way.- Napolean Hill",
    "If opportunity doesn’t knock, build a door.-Milton Berle",
    "Either you run the day, or the day runs you.-Jim Rohn"

]

 function generate(){
    var randomnumber= Math.floor(Math.random()*(quotes.length));
    var quotation= quotes[randomnumber];
var h1= document.createElement("h1");
var result=document.createTextNode(quotation);
h1.setAttribute('id','remove');
h1.appendChild(result);
document.getElementById('flex').appendChild(h1);
}
function remove(){
    document.getElementById('remove').remove();
}

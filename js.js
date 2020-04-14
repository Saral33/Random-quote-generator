var quotes=[
    "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cannot handle me at my worst, then you sure as hell donot deserve me at my best.-Marilyn Monroe" ,
    "Be yourself; everyone else is already taken.- Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.-Albert Einstein",
    "So many books, so little time.-Frank Zappa",
    "A room without books is like a body without a soul.-Marcus Tullius Cicero",
    "Don't drink and drive if you did better call saul. -Saul Goodman",
    "I'm the one who knocks. I am the danger. -Walter White",
    "You are the most smartest person I ever met,yet you don't know he made his mind ten minutes ago. -Hank",
    "you you you you............ killed uncle Hank.- Walter Junior"

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

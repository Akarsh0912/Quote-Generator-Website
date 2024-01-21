const Quote = document.getElementById('quote');
const Author  = document.getElementById('author');
const New_quote = document.getElementById('new_quote');


const api_url  ="https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    Quote.innerHTML=data.content;
    Author.innerHTML=data.author;


}

getQuote(api_url);

// New_quote.addEventListener("click",getQuote);

function Tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + Quote.innerHTML + "----by "+ Author.innerHTML ,
     "Tweet Window" ,
     "width=600" ,"height=300");
}






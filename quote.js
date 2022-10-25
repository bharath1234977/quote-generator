const button=document.getElementById('quotebutton');
const author=document.getElementById('author');
const context=document.getElementById('context');
const quote=document.getElementById('quote');



function getQuote(){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48326c5a4dmsh5ac0b4122c76c95p168eecjsn4fc9c1b6055c',
		'X-RapidAPI-Host': 'free-famous-quotes.p.rapidapi.com'
	}
};

fetch('https://free-famous-quotes.p.rapidapi.com/', options)
	.then(response => response.json())
	.then((response)=>{
        console.log(response);
    author.innerHTML= "Author:"+" "+response.author;
    context.innerHTML="context:"+" "+response.tag;
    quote.innerHTML="quote:"+" "+response.quote;
    })
	.catch(err => console.error(err));

}
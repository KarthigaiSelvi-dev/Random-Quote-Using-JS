const quoteEl = document.querySelector(".quote"); //selects an HTML element with the class "quote" using document.querySelector
const authorEl = document.querySelector(".author"); //selects an HTML element with the class "author" and stores it in the variable author

const API_URL = 'https://api.quotable.io/random';

const getQuote = async () => {  // fetch a quote from an api
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const quote = data.content; //Retrieves the quote content from the fetched JSON data and stores it in the variable quote
    const author = data.author || 'Unknown'; // authour is null or not available returns to unknown

    quoteEl.textContent = quote; //Sets the text content of the HTML by th variable quoteE1
    authorEl.textContent = author;//Sets the text content of the HTML by th variable authorE1
  } catch (error) {
    console.log(error);
    quoteEl.textContent = 'Oops! Something went wrong.'; //Sets the text content of the HTML by quoteEl to show error
    authorEl.textContent = ''; //Clears the text content of the HTML element referenced by authorEl.
  }
}
const newQuoteBtn = document.querySelector(".new-quote-btn")//Selects an HTML element with the class "new-quote-btn" and stores it in the variable newQuoteBtn.


getQuote(); // fetching a quote on page load

newQuoteBtn.addEventListener('click', getQuote); // attaching an event listener to the new quote button When clicked, this button triggers the getQuote function to fetch a new quote.

const tweetButton = document.querySelector('.twitter-share-btn'); //Selects an HTML element with the class "twitter-share-btn" and stores it in the variable tweetButton.


function setTweetButtonHref(quote, author) {
  const tweetText = `"${quote}" - ${author}`;
  const tweetHref = `https://twitter.com/intent/tweet?text=${tweetText}`;
  tweetButton.setAttribute('href', tweetHref);
}

//http://zetcode.com/javascript/jsonurl/
//https://medium.com/@TheJesseLewis/how-to-pull-data-from-json-apis-with-jquery-and-ajax-when-you-re-a-totes-noob-d6b6349cd21f
let quotesData;



function getQuotesJson(){
  $.ajax({
    method:'GET',
    url:"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    dataType:'json',
    success: onSuccess,
    error: onError
  })

  }


function onSuccess(jsonReturn){
  console.log("success")
  quotesData=jsonReturn
  console.log(quotesData.quotes.length)
  let quote = quotesData.quotes[Math.floor(Math.random()*quotesData.quotes.length)]
  
  var newquote=quote.quote;
  var newauthor=quote.author;
  $("#text").html(newquote);
  $("#author").html("-"+newauthor); 
  
  
  $("#tweet-quote").attr("href", "http://www.twitter.com/intent/tweet?text="+newquote+newauthor);


}
function onError(jsonReturn){
  console.log("error")
}
$('#new-quote').on('click',function(){
  getQuotesJson();
});


  function getQuote() {

    let quote = getRandomQuote();
    
    var newquote=x.quote;
  var newauthor=x.author;
  $("#text").html(newquote);
  $("#author").html(newauthor);
  }  
  
$('document').ready(function(){

    getQuotesJson()
    
})




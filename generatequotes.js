(function(){
const quotes=[
{
    quote:
      "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
    author: " Albert Einstein"
  },
  {
    quote:
      "If you look at what you have in life, you\’ll always have more. If you look at what you don\’t have in life, you\’ll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote:
      "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote:
      "You know you\’re in love when you can\’t fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote:
      "Be the change that you wish to see in the world.",
    author: " Mahatma Gandhi"
  },
  {
     quote:
      "I\’ve learned that people will forget what you said people will forget what you did but people will never forget how you made them feel.",
    author: " Maya Angelou" 
}

  ];


const btn=document.getElementById("button");


btn.addEventListener("click",function()
    {
        let random = Math.floor(Math.random() * quotes.length);
        console.log(random);
    
        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
   
    })
   })();
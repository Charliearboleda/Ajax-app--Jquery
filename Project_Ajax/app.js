
const quotes = [`All our dreams can come true, if we have the courage to pursue them. – Walt Disney`, `The secret of getting ahead is getting started. – Mark Twain`, `I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan`, `Everything you can imagine is real.― Pablo Picasso`, `Happiness is not something ready made. It comes from your own actions. ― Dalai Lama XIV`, `Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett`, `I never lose. Either I win or learn. – Nelson Mandela`, `Nothing can dim the light that shines from within. – Maya Angelou`, `There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you. – Derek Jeter`]



$(()=>{


let randomQuotes = quotes[Math.floor(Math.random()* quotes.length)]
console.log(randomQuotes)

$('.button').on('click', ()=>{
let $mainsection = $('#mainbar')
let $newqoute = $('<h4>').text(randomQuotes)
$mainsection.append($newqoute)

})

    $.ajax({
         url: 'https://api.thecatapi.com/v1/images/search'
     }).then(
         (data)=>{


         },
         ()=>{
             console.log('bad request');
         }
     );





})

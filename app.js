
const quotes = [`All our dreams can come true, if we have the courage to pursue them. – Walt Disney`, `The secret of getting ahead is getting started. – Mark Twain`, `I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed. – Michael Jordan`, `Everything you can imagine is real.― Pablo Picasso`, `Happiness is not something ready made. It comes from your own actions. ― Dalai Lama XIV`, `Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett`, `I never lose. Either I win or learn. – Nelson Mandela`, `Nothing can dim the light that shines from within. – Maya Angelou`, `There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you. – Derek Jeter`, "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi", `If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Job`, `“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen`, ``
]



$(()=>{


const $modalbutton = $('#modalbutton')
const $modal = $('#modal')
const $close = $('#close')

const openModal = () =>{
$modal.css('display', 'block')

}

const closemodal = ()=>{
  $modal.css('display', 'none')

}

$modalbutton.on('click', openModal)

$close.on('click', closemodal)



const randomQuotes = () => {
  let quoterandom = quotes[Math.floor(Math.random()* quotes.length)]
  let $mainsection = $('.results')
  let $newqoute = $('<h2>').text(quoterandom)
  $mainsection.prepend($newqoute)
}
$('.button1').on('click', ()=>{
window.open('https://www.samhsa.gov/data/report/2019-national-directory-mental-health-treatment-facilities')

})

$('.linkedin').on('click', ()=>{
  window.open('https://www.linkedin.com/in/charlie-arboleda-216967203/')
})

$('.google').on('click', ()=>{
  window.open('https://www.google.com')
})
$('.github').on('click', ()=>{
  window.open('https://github.com/Charliearboleda/Ajax-app--Jquery')
})


$('.button').on('click', ()=>{
randomQuotes()
randomImageGen()



})
const randomImageGen = () => {
    $.ajax({
         url: 'https://api.thecatapi.com/v1/images/search'
     }).then(
         (data)=>{
           let $newImg = $('<img>').attr('src', data[0].url).addClass('catimage')
            $('.results').prepend($newImg).addClass('picture')

         },
         ()=>{
             console.log('bad request');
         }
     );

}




})

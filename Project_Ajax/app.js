


$(()=>{



  $.ajax({
      url: 'https://api.thecatapi.com/v1/images/search'
  }).then(
      (data)=>{
        console.log(data)
      },
      ()=>{
          console.log('bad request');
      }
  );








})

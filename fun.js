const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function (box){
    box.addEventListener('click',function (e)
       if (e.target.id === 'Gray') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'Green') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'Blue') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'Yellow') {
          body.style.backgroundColor = e.target.id;
       }
    });
});

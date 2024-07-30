const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function (box){
    console.log(box);
    box.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
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
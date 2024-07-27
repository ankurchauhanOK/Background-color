const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function (box){
    console.log(box);
    box.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);
       if (e.target.id === 'color_box1') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'color_box2') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'color_box3') {
          body.style.backgroundColor = e.target.id;
       }
       if (e.target.id === 'color_box4') {
          body.style.backgroundColor = e.target.id;
       }
    });
});
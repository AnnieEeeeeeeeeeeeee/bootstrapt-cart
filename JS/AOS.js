AOS.init();

let btnElement = document.querySelector('.mybtn-blue');

btnElement.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});
btnElement.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
});
  

const ul = document.querySelector('.items');

        ul.firstElementChild.textContent = 'Hello';
        ul.children[1].innerText = 'Brad';
        ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
        
        const btn = document.querySelector('.btn');
        btn.style.background = 'red';
        btn.addEventListener('click',(e)=>{
         e.preventDefault();
          document.querySelector('#my-form').style.background='#ccc '
        });
       
      
        btn.addEventListener('mouseover',(e)=>{
         e.preventDefault();
          document.querySelector('#my-form').style.background='#ccc '
        });
       
        btn.addEventListener('mouseout',(e)=>{
         e.preventDefault();
          document.querySelector('#my-form').style.background='#ccc '
        });
         // Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
  
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

  } else {
    console.log(`${nameInput.value}: ${emailInput.value}`)
  }
} 
          
          

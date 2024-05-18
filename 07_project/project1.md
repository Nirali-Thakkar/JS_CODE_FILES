#DOM project code  

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-kscuog?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,index.html)

# solution code 

#project 1

```javascript
console.log("hello js")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //e is event -function object
    if (e.target.id == 'grey') {
      //e.target is the particlar id ..
      //instead of e.target.id you can write color name
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

#project 2
```javascript
const form = document.querySelector('form'); 
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    result.innerHTML = `please give valid height ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `please give valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML =  `<span>${bmi}</span>`
  }
});
```
#project 3

```javascript
const clock = document.getElementById('clock');
//can aslo use queryselector both give same result
//const clock = document.querySelector('#clock')

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //run after every 1 second

```
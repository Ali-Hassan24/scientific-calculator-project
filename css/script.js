
// var screen = document.querySelector('#screen');
// var btn = document.querySelectorAll('.btn');

// for( item of btn)
// {
//     item.addEventListener('click',(e)=>{
//         btntext=e.traget.innerHTML;
//         screen.value+=btntext;
//     })
// }

let string = " ";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.getElementById('screen').value =string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = " ";
            document.getElementById('screen').value =string;
        }
        else if(e.target.value=='sqrt'){
            var sq= Math.sqrt(string);
            document.getElementById('screen').value =sq;
        }
        else if(e.target.value=='cube'){
            var cart= Math.cbrt(string);
            document.getElementById('screen').value =cart;
        }
        else if(e.target.value=='e'){
            var square = eval(string) * eval(string);
            document.getElementById('screen').value =square;
        }
        else if(e.target.innerHTML=='X!'){
            const number = string;
            if (number < 0) {
                document.getElementById('screen').value="Negative factorial d'not exist!";
                console.log('Error! Factorial for negative number does not exist.');
            }
            
            // if number is 0
            else if (number === 0) {
                document.getElementById('screen').value="1";
                console.log(`The factorial of ${number} is 1.`);
            }
            
            // if number is positive
            else {
                let fact = 1;
                for (i = 1; i <= number; i++) {
                    fact *= i;
                    document.getElementById('screen').value= fact;
                }
                console.log(`The factorial of ${number} is ${fact}.`);
            }
            
        }
        else if(e.target.innerHTML=='x^x'){
            var power= Math.pow(string, string);
            document.getElementById('screen').value =power;
        }
        else if(e.target.innerHTML=='sin'){
            var san = Math.sin(string);
            document.getElementById('screen').value =san;
        }
        else if(e.target.innerHTML=='cos'){
            var can = Math.cos(string);
            document.getElementById('screen').value =can;
        }
        else if(e.target.innerHTML=='tan'){
            var ttan = Math.tan(string);
            document.getElementById('screen').value =ttan;
        }
        else if(e.target.value=='pi'){
            var pw = Math.PI;
            document.getElementById('screen').value =pw;
        }
        else if(e.target.innerHTML=='log'){
            var lag = Math.log(string);
            document.getElementById('screen').value= lag;
        }
       
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.getElementById('screen').value =string;
        }
    });
});

// function deleteChar(input) {
// 	screen.value = screen.value.substring(0, screen.value.length - 1)
// }

// function sin(){
//     var san = Math.sin(string);
//     document.getElementById('screen').value =san;
// }

// function sqrt(){
//     var sq = Math.sqrt(string)
// }
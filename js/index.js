let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText)
        if(buttonText=='x'){
            buttonText= '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }  
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=='DEL'){
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            try{
                 screen.value=eval(screenValue);
            }catch{
                screen.value='Error!';
            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
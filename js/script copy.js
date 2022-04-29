

const button = document.querySelector('.btn');
const toasts=document.querySelector('.toasts');

const messages=['message 1','message 2','message 3','message 4'];


let texts = ['info','success','error'];
button.addEventListener('click',() =>
createNotification()
)

function createNotification(message = null ,text = null) {
    const showDiv=document.createElement('div');
    showDiv.classList.add('toast');
    showDiv.classList.add(text ? text : getRandomType());

    showDiv.innerText=message ? message : getRandomMessage();

    toasts.appendChild(showDiv);
    setTimeout(() => {
            showDiv.remove()
    }, 3000);


    
}




function getRandomMessage () {
    return messages[Math.floor(Math.random()) * messages.length]
    
}


function getRandomType () {
    return texts[Math.floor(Math.random()) * texts.length]
    
}
var menubar = document.getElementById('menubar');
var closebar = document.getElementById('closebar');
var link = document.getElementById('link');


menubar.addEventListener('click', function(){
    menubar.style.display = 'none';
    link.style.display = 'block';
    closebar.style.display = 'block';
})

closebar.addEventListener('click', function(){
    menubar.style.display = 'block';
    link.style.display = 'none';
    closebar.style.display ='none'
})


// CONTACT

var full = document.getElementById('full');
var mail = document.getElementById('mail');
var tel = document.getElementById('tel');
var text = document.getElementById('text');
var form = document.getElementById('form')



form.addEventListener('submit', function(event) {
    
        if(full.value == ''){
            alert('Please enter your full name')
            event.preventDefault()
        }
        else if(mail.value == ''){
            alert('Please enter your email address')
            event.preventDefault()
        }

        else if(tel.value == ''){
            alert('Please enter your phone number')
            event.preventDefault()
        }
        else if(text.value == ''){
            alert('Please enter a message')
            event.preventDefault()
        }
        
    
})
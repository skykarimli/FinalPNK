document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let form = this;

    
    form.querySelector('input').value = ''; 
    document.getElementById('successMessage').style.display = 'flex'; 
    

    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});
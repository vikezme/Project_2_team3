const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
        console.log("we have been given an email and password")
    //   Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        // TODO: change location replace route.
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    } 
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmPassword = document.querySelector('#password-confirm').value.trim();

    if (password === confirmPassword){

        console.log("it matches!")
        if (name && email && password) {
            const response = await fetch('/api/users', {
              method: 'POST',
              body: JSON.stringify({ name, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
        
            if (response.ok) {
                        // TODO: change location replace route.
              document.location.replace('/profile');
            } else {
              alert(response.statusText);
            }
          }
    } else {
        // TODO: make this a different components
        console.alert(" password doesn't match - make it something memorable!")
    }
  
   
  };


document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);

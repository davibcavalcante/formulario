const form = document.querySelector('#form')

form.addEventListener('focusin', (e) => {
   const elementFocus = e.target
   if (elementFocus.classList.contains('form-input')) {
    elementFocus.nextElementSibling.classList.add('active')
   }
})


form.addEventListener('focusout', (e) => {
    const elementFocusOut = e.target
    if (elementFocusOut.value.length === 0 && elementFocusOut.classList.contains('form-input')) {
        elementFocusOut.nextElementSibling.classList.remove('active')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const password = document.querySelector('#senha-input')
    const confirmPassword = document.querySelector('#confirm-senha-input')

    if (password.value === confirmPassword.value) {
        console.log('Request')
    } else {
        console.log('As senhas não coincidem')
    }
})
const $form= document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData($form); // Usamos $form en lugar de this
    const response = await fetch($form.action, {
        method: $form.method, // Usamos $form en lugar de this
        body: form,
        headers: {
            'Accept': 'application/json' // Corregido el 'application:/json' a 'application/json'
        }
    })

    if(response.ok){
        this.reset()
        alert('Gracias por contactarme, me comunicaré a la brevedad.')
    }
}

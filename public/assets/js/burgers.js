document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('Dom loaded');
    }
    console.log(document.getElementsByClassName('changeEaten'))

    document.getElementById('devour').addEventListener('click', (e) => {
        
        if (e.target.matches("button") ){

        const id = e.target.getAttribute('data-id');
        console.log(id)

        fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then(function () {
                console.log("Success")
                window.location.reload()
            })
            .catch((err) => console.log(err))
        }
    })




    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                name: document.getElementById('ca').value.trim(),
                devoured: false
            };
            console.log("Adding Burger form", newBurger)

            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('ca').value = '';

                console.log('Created a new Burger');
                location.reload();
            });
        });
    }
})
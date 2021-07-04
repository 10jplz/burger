document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('Dom loaded');
    }

    const devourBtns = document.querySelectorAll('.devour');

    if(devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {

                const id = e.target.getAttribute('data-id');

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify()
                })
                .then(function () {
                    console.log("Success")
                    window.location.reload()
                })
                .catch((err) => console.log(err))
            })
        })
    }




    const createBurgerBtn = document.getElementById('create-form');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                name: document.getElementById('ca').nodeValue.trim()
            };

            fetch('/api/cats', {
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
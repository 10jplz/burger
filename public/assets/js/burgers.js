document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('Dom loaded');
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
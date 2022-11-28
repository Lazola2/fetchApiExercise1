//row
let wrapper = document.querySelector('.wrapper');

async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
};

fetchData().then(users => {
    users.forEach(user => {
        wrapper.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
    });
})
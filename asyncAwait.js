
const fetch = require('node-fetch');
// moveplayer(100,'left')
//     .then(() => moveplayer(100,'left'))
//     .then(() => moveplayer(400, 'left'))
//     .then(()=> movePLayer(10, 'Right'))
//     .then(() => movePlayer(330, 'left'))



// async function playerStart(){
//     const first = await(moveplayer(100,'left'));
//     const second = await(moveplayer(400, 'left'));
//     const third = await(movePLayer(10, 'Right'));
//     const fourth = await(movePlayer(330, 'left'));
// }

async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

fetchUsers();
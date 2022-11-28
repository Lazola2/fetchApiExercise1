fetch('../data/data.json')
.then( res => {
    return res.json();
})
.then( data => {
    console.table(data.laptops);
})
.catch( e => {
    console.log('Could not find the data requested');
    console.log(`Error: ${e}`);
})
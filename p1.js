const promise = new Promise((resolve, reject) =>{
    if(true){
        resolve('resolved')
    } else{
        reject('rejected')
    }
})


promise
    .then(result => result + "!")
    .then(result2 => result2 + "?")
    .catch(() => console.log('error!'))
    .then(result3 => console.log(result3+'!'));
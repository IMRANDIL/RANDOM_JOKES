const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
const url = 'https://api.chucknorris.io/jokes/random';



// using fetch.......promise async/await.....



btn.addEventListener('click', async () => {

    try {
        const data = await fetch(url);
        const parse = await data.json();
        const response = displayData(parse);
    } catch (error) {
        console.log(error);
    }
})







function displayData({ value: joke }) {
    img.classList.add('shake-img');
    // const {value:joke} = cred;
    content.textContent = joke;
    const random = Math.random() * 1000;
    setTimeout(() => {
        img.classList.remove('shake-img');
    }, random);
}








































































































































// using fetch.......promise.then.....





































// btn.addEventListener('click', () =>{
//     fetch(url)
//     .then((data)=> data.json())
//     .then((response)=>displayData(response))
//     .catch((err)=>console.log(err))
//     })







//     function displayData({value:joke}){
//         img.classList.add('shake-img');
//         // const {value:joke} = cred;
//         content.textContent = joke;
//         const random = Math.random()*1000;
//         setTimeout(() => {
//          img.classList.remove('shake-img');  
//         },random);
//     }








































// using xhr object..........xmlhttpreqeust();


// btn.addEventListener('click', () =>{
// jokeApi(url)
// .then((response)=>displayData(response))
// .catch((err)=>console.log(err))
// })



// function jokeApi(url){
//     return new Promise((resolve, reject) =>{
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.onreadystatechange = function(){
//         if(xhr.readyState !==4)return;
//         if(xhr.status === 200){
//            resolve(xhr.responseText);
//         }
//         else{
//             reject({
//                 status: xhr.status,
//                 txt: xhr.statusText,
//             })

//         }
//         }

//         xhr.send();
//     })

// }



// function displayData(cred){
//     img.classList.add('shake-img');
//     const {value:joke} = JSON.parse(cred);
//     content.textContent = joke;
//     const random = Math.random()*1000;
//     setTimeout(() => {
//      img.classList.remove('shake-img');  
//     },random);
// }
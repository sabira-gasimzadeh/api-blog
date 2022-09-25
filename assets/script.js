const productsDiv = document.getElementsByClassName('blog-content-wrapper')[0]

window.onload=getAllProducts

async function getAllProducts(){
    const unvan='./assets/blogs.json'

    try {
        const komputerinAnlamadigiData = await fetch(unvan)
        const komputerinAnladigiData = await komputerinAnlamadigiData.json()
        for(let i=0; i<komputerinAnladigiData.length; i++) {
            productsDiv.innerHTML += `
            <button> ${komputerinAnladigiData[i].headline}</button>
            <h3> ${komputerinAnladigiData[i].title}</h3>
            <p> ${komputerinAnladigiData[i].body}</p>
            `
        }
    }

    catch(xeta) {
        console.log("Xeta firladildi:" +xeta);
    }
}
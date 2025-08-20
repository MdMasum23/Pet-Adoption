

const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    showCategory(data.categories)
 
}


const showCategory = (categories) => {
    categories.forEach((element) => {
        const categoryContainer = document.getElementById('category-container');
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick="loadPets('${element.category}')" class="btn">${element.category} 
        <img class="w-8" src=${element.category_icon} alt="" />
        </button>
        `
        categoryContainer.appendChild(div)

    })
}
``

const loadPets = async (categoryName) => {
    
    document.getElementById('status').style.display = "none";
    show("spiner")
    document.getElementById("petsContainer").style.display = "block";
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
    const data = await response.json();
    if (data.data) {
        displayPets(data.data);
        makeHide("spiner")
    }
}











const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    showCategory(data.categories)
 
}




loadPets("cat")



loadCategory()







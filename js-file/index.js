//pet button
// 1-  fetch, load and show categories on html
// create loadCategories
const loadCategories = () => {
    //fetch the data
    fetch("  https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};
const loadPets = () => {
    //fetch the data
    fetch("  https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => displayPets(data.pets))
        .catch((error) => console.log(error));
};


const loadCategoryPets = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then((res) => res.json())
        .then((data) => displayPets(data.data))
        .catch((error) => console.log(error));
};

// details button 
const loadDetails = async (petId) => {
    console.log(petId)
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(uri);
    const data = await res.json();
    displayDetails(data.pet);
}
const displayDetails = (pet) => {
    console.log(pet)
    const detailContainer = document.getElementById("modal-content")
    document.getElementById("showModalData").click();
};

const displayPets = (pets) => {
    const petsContainer = document.getElementById("pets")
    petsContainer.innerHTML = "";



    pets.forEach((pet) => {
        console.log(pet)
        const card = document.createElement("div");
        card.classList = "card card-compact   shadow-xl";
        card.innerHTML = `
        <figure class="h-[200px]">
        <img
      src=${pet.image}
      class="h-full w-full object-cover"
      alt="Shoes" />
    </figure>
    <div class="card-body flex gap-2">
        <div>
        <h2 class="font-bold text-xl">${pet.pet_name}</h2>
        <p class= " font-normal text-base text-[#131313B3]"> <i class="fa-brands fa-gripfire"></i>Breed: ${pet.breed}</p> 
        <p class= " font-normal text-base text-[#131313B3]"> <i class="fa-solid fa-calendar-days"></i> Birth:  ${pet.date_of_birth}</p> 
        <p class= " font-normal text-base text-[#131313B3]"> <i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</p> 
        <p class= " font-normal text-base text-[#131313B3]" > <i class="fa-solid fa-dollar-sign"></i>Price: ${pet.price}</p> 
        </div>
        <div class = "border border-t-slate-200"></div>
        <div class="justify-between flex">
        <button id="likeBtn" class="btn btn-sm"><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="btn btn-sm">Adopt</button>
        <button class="btn btn-sm">Details</button>
        </div>
    </div>
    `;
        petsContainer.append(card);
    });

};

// pet button
// create DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);
        //create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button onclick="loadCategoryPets(${item.category_id})" id="btn-${item.category_id}"  class="btn category-btn">
        <img src="${item.category_icon}" alt="${item.category}" class="category-img" />
        ${item.category}
        </button>
        `;

        //add button to category container
        categoryContainer.append(buttonContainer);


    });
};
// selection img section





loadCategories();
loadPets();


// button click ViewMore
document.getElementById('viewMoreBtn').addEventListener('click', function () {

    document.getElementById('main-section').scrollIntoView({
        behavior: 'smooth'
    });
});








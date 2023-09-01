const handleCategory = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const allData = data.data;
    // console.log(allData);

    const tabContainer = document.getElementById('tab-container');
    allData.forEach(category => {
        const a = document.createElement('a');
        
        a.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab btn mx-4  hover:bg-red-400">${category.category}</a>
        `
        tabContainer.appendChild(a);
    })



}





const handleLoadNews = async(id) =>{

  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const data = await response.json();
  const cardItem = data.data;
  const noDataCardContainer = document.getElementById('no-data');
  noDataCardContainer.textContent = "";
  if(cardItem.length === 0)
  {
    const div = document.createElement('div');
    div.innerHTML = `
    <section class="flex justify-center items-center  mt-24">
            <div class="ml-20 md:ml-40">
                <img class="mb-6 ml-0 md:ml-24" src="./Icon.png" alt="">
                <p class="text-2xl font-bold">Oops!! Sorry, There is no content here</p>
            </div>
        </section>
    `;
    noDataCardContainer.appendChild(div);
        
  }

  
  const cardContainer = document.getElementById('card-Container');
  cardContainer.textContent = "";
  const cardContainer1 = document.getElementById('card-Container');
  
   cardItem.forEach(item => {

    const date = item.others.posted_date;
    const h = date / 3600;
    const hInt = parseInt(h);
    const minite = (h - hInt) * 60;
    const minitInt = parseInt(minite);
    const string = `${hInt} hrs ${minitInt} min ago`;
    

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl mt-20">
                    <figure><img class="h-80 w-full" src="${item.thumbnail}" alt="Shoes" />
                    
                    </figure>
                    
                    ${item.others.posted_date? `<div class="flex justify-end mr-4 -mt-16">
                    <button class="btn normal-case bg-black hover:bg-white text-white hover:text-black">${string}</button>
                    </div>` : ''}
                      
                    <div class="card-body flex flex-row gap-4">
                      <div><img  class="w-14 h-14 rounded-full" src="${item.authors[0].profile_picture} alt="">
                      </div>
    
                      <div>
                        <h2 class="font-bold text-1xl mb-5">
                            ${item.title}
                        </h2>
                        <div class="flex justify-center mb-2 gap-4">
                            <p>${item.authors[0].profile_name}</p>
                            <p> ${item.authors[0]?.verified ? '<i class="fa-solid fa-certificate text-blue-800"></i>' : '' }  </p>
                            
                            <p></p>
                            
                            
                        </div>
                        <p>${item.others.views}</p>
    
                      </div>
                    </div>
                  </div>
    `;
    cardContainer.appendChild(div);

   })



}




handleCategory()
handleLoadNews('1000')
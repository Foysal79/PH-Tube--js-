const handleCategory = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    const allData = data.data;
    // console.log(allData);

    const tabContainer = document.getElementById('tab-container');
    allData.forEach(category => {
        const a = document.createElement('a');
        
        a.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab btn mx-4  hover:bg-red-400"> ${category.category}</a>
        `
        tabContainer.appendChild(a);
    })



    ///////////////////////////////////////////////
    
      


}










const handleLoadNews = async(id) =>{

  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
  const data = await response.json();
  
  const cardItem = data.data;
  
  //////////////////////////////////
  

  ////////////////////////////////
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



    console.log(item.others.views.slice(0, -1))

    

    const date = item.others.posted_date;
    const h = date / 3600;
    const hInt = parseInt(h);
    const minite = (h - hInt) * 60;
    const minitInt = parseInt(minite);
    const string = `${hInt} hrs ${minitInt} min ago`;
    

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl mt-20 h-96">
                    <figure><img class="h-80 w-full" src="${item.thumbnail}" alt="Shoes" />
                    
                    </figure>
                    
                    ${item.others.posted_date? `<div class="flex justify-end mr-4 -mt-16">
                    <button class="rounded-lg px-4 py-1  normal-case bg-black hover:bg-black text-white hover:text-white">${string}</button>
                    </div>` : ''}
                      
                    <div class="card-body flex flex-row gap-4 mt-5">
                      <div><img  class="w-14 h-14 rounded-full" src="${item.authors[0].profile_picture} alt="">
                      </div>
    
                      <div >
                        <h2 class="font-bold text-1xl mb-5">
                            ${item.title}
                        </h2>
                        <div class="flex justify-center mb-2 gap-4 ">
                            <p>${item.authors[0].profile_name}</p>
                            <p> ${item.authors[0]?.verified ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_13_960)">
                            <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                            <path d="M12.7094 7.20637L9.14065 10.7751L7.29065 8.92669C6.88909 8.52512 6.23752 8.52512 5.83596 8.92669C5.4344 9.32825 5.4344 9.97981 5.83596 10.3814L8.43127 12.9767C8.8219 13.3673 9.45627 13.3673 9.8469 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.761 6.80481 13.111 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_13_960">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>` : '' }  </p>
                            
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
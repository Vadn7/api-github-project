async function searchUsername(){
    let data;
    let username=document.getElementById("username").value

let url=`https://api.github.com/users/${username}`;

if(username){
console.log(username);

    try{

const response = await fetch(url,{
    headers: {
      'Authorization': 'YOUR PERSONAL TOKEN',
    }

    });
    
      

if (!response.ok){
    throw new Error(`There is an error: ${response.status}`)
}

else{

    data=await response.json();
    console.log(data); 
    displayInfo(data);

}

}


    catch(error){
         console.error("Error fetching data :",error)
         }

}
else{


    let para=document.createElement("p")
    para.style.color="red"
    para.innerText="Error, please retry";
    document.getElementById("output").appendChild(para)
}

}

function displayInfo (data) {

let container = document.createElement("div")    
let title =document.createElement("h1")
title.textContent=data.name;

let para =document.createElement('p');
para.textContent=data.bio;

let para2=document.createElement("p")
let output=document.getElementById("output")

para2.textContent=data.repos_url;
output.innerHTML= ` <img src="${data.avatar_url}" alt="Avatar" width="100">
                    <h1>${data.name}</h1>
                    <p>  ${data.bio} </p>   
                    <p>  Lives in ${data.location} </p>
                    <p> <a href="${data.public_repos}">Here is the link of their public repos</a><p>

                            `

}



const API = "http://localhost:5000";

async function loadProjects() {

const res = await fetch(API + "/projects");

const projects = await res.json();

const projectList = document.getElementById("projectList");

projects.forEach(project=>{

projectList.innerHTML += `

<div class="project-card">

<h3>${project.title}</h3>

<p>${project.description}</p>

<p><b>Technology:</b> ${project.technology}</p>

</div>

`;

});

}

loadProjects();

document
.getElementById("contactForm")
.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

await fetch(API+"/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name,
email,
message

})

});

alert("Message Sent Successfully");

});

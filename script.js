const Users = [
  {
    name: "Aria Mendoza",
    pic: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Creative Director at Studio Lumiere, passionate about visual storytelling"
  },
  {
    name: "Liam Patel",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Full-Stack Developer building scalable web applications"
  },
  {
    name: "Nina Kaur",
    pic: "https://images.unsplash.com/photo-1758183583798-b7038bca9272?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UX/UI Designer who loves minimal and user-centric interfaces"
  },
  {
    name: "Jasper Lee",
    pic: "https://images.unsplash.com/photo-1630243823016-96b0686cfde0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    bio: "Marketing Strategist focused on growth and brand building"
  },
  {
    name: "Elena Silva",
    pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Photographer and digital nomad, capturing life in frames"
  },
  {
    name: "Karan Sharma",
    pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Data Scientist exploring patterns in chaos"
  },
  {
    name: "Maya Reynolds",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Front-end Engineer with love for animations and transitions"
  },
  {
    name: "Felix García",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Content Creator telling untold stories from the margins"
  },
  {
    name: "Sophie Tan",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Product Manager bridging design, tech and business goals"
  },
  {
    name: "Rahul Deshmukh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3",
    bio: "Blockchain Enthusiast working on decentralised solutions"
  },
  {
        name : "Selena Desuja",
        pic : "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0",
        bio : "working in the hcl company as a Managing Director"
    },
]



function showallcards(arr){
    arr.forEach(user => {
        
    
    let card = document.createElement("div")
    card.classList.add("card")

    let img = document.createElement("img")
    img.setAttribute("src", user.pic)
    img.classList.add("img")

    let names = document.createElement("h3")
    names.textContent = user.name
    names.classList.add("h3");

    let bio = document.createElement("p")
    bio.textContent = user.bio
    bio.classList.add("p");

    card.appendChild(img)
    card.appendChild(names)
    card.appendChild(bio)

    document.querySelector("#cards").appendChild(card)
});
};

showallcards(Users);

let inp = document.querySelector("input")

inp.addEventListener("input",function(){
    let new_user = Users.filter((user) => {
        return user.name.startsWith(inp.value)
    })

    document.querySelector("#cards").innerHTML = '';
    showallcards(new_user)
})
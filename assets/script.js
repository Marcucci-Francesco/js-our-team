const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const addNewCards = (member) => {

  const {name, role, email, img} = member

  return `
  <div class="card">
    <img src="assets/${img}" alt="">
    <div class="text bg-black text-white">
      <h3>${name}</h3>
      <p class="text-card">${role}</p>
      <p class="text-primary text-card">${email}</p>
    </div>
  </div>
  `
}


const cicleMembers = (members) => {

  let cardsMember;
  
  for (let member of members){

    cardsMember += addNewCards(member);
  }

  document.querySelector('.contain').innerHTML = cardsMember
}

cicleMembers(teamMembers)

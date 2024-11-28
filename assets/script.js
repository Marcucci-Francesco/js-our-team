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

  const {name, role, email, img} = teamMembers

  return `<div class="col-4 pb-3">
          <div class="row">
            <div class="col-4">
              <img src="${img}" alt="">
            </div>
            <div class="col-8 p-4 bg-black text-white">
              <h2>${name}</h2>
              <p class="text-card">${role}</p>
              <p class="text-primary text-card">${email}</p>
            </div>
          </div>
        </div>`

}


const cicleMembers = (teamMembers) => {

  let cardsMember;

  for (let member of teamMembers){

    cardsMember += cicleMembers(member);
  }

  document.querySelector('.card').innerHTML = cardsMember
}

cicleMembers(addNewCards)
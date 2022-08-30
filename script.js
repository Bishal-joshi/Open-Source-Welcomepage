function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

  
const allselectedbox = document.querySelectorAll('.selectgarna');


// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      allselectedbox.forEach((data,index)=>{  data.classList.add(`animationgaram${index+1}`) })
        return;
    }
    allselectedbox.forEach((data,index)=>{  data.classList.remove(`animationgaram${index+1}`) })

  });
});

observer.observe(document.querySelector('.observation'));
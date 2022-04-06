const cards= document.querySelectorAll(".card");

const observer= new IntersectionObserver(function(enteries){
     enteries.forEach(entry =>{
         entry.target.classList.toggle("show", entry.isIntersecting)
     })
},{
    threshold:1
});



cards.forEach(card => {
    observer.observe(card);
});


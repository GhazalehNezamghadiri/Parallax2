let ticking = false

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects)
    ticking = true
  }
})



document.querySelectorAll(".reveal").forEach(el => {
  el.style.opacity = 0
  el.style.transform = "translateY(60px)"
  el.style.transition = "all 1s ease-out"
});


document.querySelectorAll(".zoom-reveal").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "scale(0.05)"
  el.style.transition = "all 1.5s cubic-bezier(0.25, 1, 0.5, 1)"
})


document.querySelectorAll(".slide-left").forEach(el => {
  el.style.opacity = 0
  el.style.transform = "translateX(-120px)"
  el.style.transition = "all 1s ease-out"
})



document.querySelectorAll(".slide-right").forEach(el => {
  el.style.opacity = 0
  el.style.transform = "translateX(120px)"
  el.style.transition = "all 1s ease-out"
})




function updateScrollEffects() {
  const windowHeight = window.innerHeight

  
  document.querySelectorAll(".reveal").forEach(el => {
    const rect = el.getBoundingClientRect()
    const progress = 1 - rect.top / windowHeight

    if (progress > 0.2) {
      el.style.opacity = 1
      el.style.transform = "translateY(0)"
    } else {
      el.style.opacity = 0
      el.style.transform = "translateY(60px)"
    }
  })


  document.querySelectorAll(".zoom-reveal").forEach(el => {
    const rect = el.getBoundingClientRect()
    const progress = 1 - rect.top / windowHeight

    if (progress > 0.2) {
      el.style.opacity = 1
      el.style.transform = "scale(1)"
    } else {
      el.style.opacity = 0
      el.style.transform = "scale(0.05)"
    }
  })

 
  document.querySelectorAll(".slide-left").forEach(el => {
    const rect = el.getBoundingClientRect()
    const progress = 1 - rect.top / windowHeight

    if (progress > 0.2) {
      el.style.opacity = 1
      el.style.transform = "translateX(0)"
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateX(-120px)"
    }
  })



  document.querySelectorAll(".slide-right").forEach(el => {
    const rect = el.getBoundingClientRect()
    const progress = 1 - rect.top / windowHeight

    if (progress > 0.2) {
      el.style.opacity = 1
      el.style.transform = "translateX(0)"
    } else {
      el.style.opacity = 0
      el.style.transform = "translateX(120px)"
    }
  })


  ticking = false
}
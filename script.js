const swiper = new Swiper('.slider', {
    loop:true,
    grabCursor:true,
    spacebetween: 20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        620:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });

  const containers = document.querySelectorAll(".contain")


  const observor = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
          })
  }, 
  {
    threshold: 0.2,
    rootMargin: "-100px",
  })
  
  containers.forEach(container =>{
    observor.observe(container)
  });

  const swipers = new Swiper('.sliders', {
    loop:true,
    grabCursor:true,
    spacebetween: 5,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.scroll',
      prevEl: '.scroll',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        620:{
            slidesPerView:1
        },
        1024:{
            slidesPerView:1
        }
    }
  });

  const swiperr = new Swiper('.sliderr', {
    loop:true,
    grabCursor:true,
    spacebetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        620:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:4
        }
    }
  });


function changeImage(imageElement, imageLinks) {
    let currentImageIndex = 0;
  
    setInterval(() => {
      imageElement.src = imageLinks[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % imageLinks.length;
    }, 5000); // 5000 milliseconds = 5 seconds
  }
  
  // Example usage:
  const imageElement = document.querySelector(".change-img-every-5-sec");
  const imageLinks = ["./assets/img/hero-bg/1.jpg", "./assets/img/hero-bg/2.jpg", "./assets/img/hero-bg/3.jpg"];
  
  changeImage(imageElement, imageLinks);
  
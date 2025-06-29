 const navToggle = document.getElementById("navToggle");
      const navMenu = document.getElementById("navMenu");

      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        navToggle.innerHTML = navMenu.classList.contains("active")
          ? '<i class="fas fa-times"></i>'
          : '<i class="fas fa-bars"></i>';
      });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
          navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });

 const header = document.getElementById("header");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

 const filterButtons = document.querySelectorAll(".filter-btn");
      const projectCards = document.querySelectorAll(".project-card");

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Update active button
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          // Filter projects
          const filter = button.dataset.filter;
          projectCards.forEach((card) => {
            if (filter === "all" || card.dataset.category === filter) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          });
        });
      });

const modal = document.getElementById("projectModal");
      const modalClose = document.getElementById("modalClose");
      const modalVideo = document.getElementById("modalVideo");
      const modalImage = document.getElementById("modalImage");
      const modalTitle = document.getElementById("modalTitle");
      const modalCategory = document.getElementById("modalCategory");
      const modalDescription = document.getElementById("modalDescription");

 projectCards.forEach((card) => {
        card.addEventListener("click", () => {
          const video = card.querySelector("video");
          const videoSrc = video.querySelector("source").src;
          const title = card.querySelector(".project-title").textContent;
          const category = card.querySelector(".project-category").textContent;

          modalVideo.src = videoSrc;
          modalVideo.style.display = "block";
          modalImage.style.display = "none";

          modalTitle.textContent = title;
          modalCategory.textContent = category;
          modalDescription.textContent = `This ${category.toLowerCase()} project showcases my skills in creating visually compelling content.`;

          modal.classList.add("active");
          document.body.style.overflow = "hidden";

          // Play the video when modal opens
          modalVideo.play();
        });
      });

const galleryItems = document.querySelectorAll(".gallery-item");
      galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
          const imgSrc = item.querySelector("img").src;
          const imgAlt = item.querySelector("img").alt;

          modalImage.src = imgSrc;
          modalImage.alt = imgAlt;
          modalImage.style.display = "block";
          modalVideo.style.display = "none";

          modalTitle.textContent = imgAlt;
          modalCategory.textContent = "Still Frame";
          modalDescription.textContent = `This is a still frame from one of my projects, showcasing the visual style and composition.`;

          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        });
      });

      modalClose.addEventListener("click", () => {
        modal.classList.remove("active");
        modalVideo.pause();
        document.body.style.overflow = "auto";
      });

        modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
          modalVideo.pause();
          document.body.style.overflow = "auto";
        }
      });

      const fadeElements = document.querySelectorAll(".fade-in");

      const fadeInOnScroll = () => {
        fadeElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementTop < windowHeight - 100) {
            element.classList.add("active");
          }
        });
      };

      // Check on load
      fadeInOnScroll();

      // Check on scroll
      window.addEventListener("scroll", fadeInOnScroll);

      // Theme toggle
      const themeToggle = document.getElementById("themeToggle");
      const themeIcon = themeToggle.querySelector("i");

      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        }
      });

 
      const contactForm = document.querySelector(".contact-form");

      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

           const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

          console.log({ name, email, message });

         alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      });

      window.addEventListener("load", () => {
        document.querySelectorAll("video").forEach((video) => {
          video.preload = "auto";
        });
      });

        document.querySelectorAll(".project-card video").forEach((video) => {
        video.addEventListener("click", function (e) {
          e.stopPropagation();
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
      });
   
document.addEventListener("DOMContentLoaded", () => {
    // Typing animation for hero title
    const typingTitle = document.getElementById("typing-title");
    if (!typingTitle) return;

    const phrases = [
        "Data Roots",
        "Secure Data Exchange",
        "Ensuring privacy",
        "Transparency & Control Over Data."
    ];
    let currentPhraseIndex = 0;
    let isDeleting = false;
    let currentText = "";
    
    // Create cursor element
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "|";
    
    // Create text container
    const textContainer = document.createElement("span");
    textContainer.className = "typing-text";
    
    // Add elements to title
    typingTitle.appendChild(textContainer);
    typingTitle.appendChild(cursor);
  
    function typeText() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            currentText = currentPhrase.substring(0, currentText.length - 1);
            if (currentText === "") {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
        } else {
            currentText = currentPhrase.substring(0, currentText.length + 1);
            if (currentText === currentPhrase) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            }
        }

        // Update text while preserving cursor
        textContainer.textContent = currentText;
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
  
    typeText();
  
    // Tab navigation with smooth transitions
    const tabBtns = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab")
  
        // Remove active class from all tabs
        tabBtns.forEach((b) => b.classList.remove("active"))
        tabContents.forEach((c) => {
          c.style.opacity = "0"
          setTimeout(() => {
            c.classList.remove("active")
          }, 300)
        })
  
        // Add active class to selected tab
        btn.classList.add("active")
  
        // Show selected tab content with animation
        setTimeout(() => {
          const selectedTab = document.getElementById(tabId)
          selectedTab.classList.add("active")
          setTimeout(() => {
            selectedTab.style.opacity = "1"
          }, 50)
        }, 300)
      })
    })
  
    // File upload preview
    const fileUpload = document.getElementById("file-upload")
    const uploadText = document.querySelector(".upload-text")
  
    if (fileUpload) {
      fileUpload.addEventListener("change", function () {
        if (this.files.length > 0) {
          const fileName = this.files[0].name
          const fileSize = (this.files[0].size / 1024).toFixed(2) + " KB"
          uploadText.textContent = `${fileName} (${fileSize})`
        } else {
          uploadText.textContent = "Drag & drop or click to upload"
        }
      })
    }
  
    // Button hover effects
    const buttons = document.querySelectorAll("button")
  
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px)"
      })
  
      button.addEventListener("mouseleave", function () {
        this.style.transform = ""
      })
    })
  
    // Get Started button animation
    const getStartedBtn = document.querySelector(".get-started-btn")
    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        // Smooth scroll to tabs section
        const tabsSection = document.querySelector(".tabs-container")
        tabsSection.scrollIntoView({ behavior: "smooth" })
  
        // Highlight the first tab
        setTimeout(() => {
          const firstTab = document.querySelector(".tab-btn")
          if (firstTab) {
            firstTab.classList.add("pulse-animation")
            setTimeout(() => {
              firstTab.classList.remove("pulse-animation")
            }, 1000)
          }
        }, 1000)
      })
    }
  
    // Try Now button animation
    const tryNowBtn = document.querySelector(".try-now-btn")
    if (tryNowBtn) {
      tryNowBtn.addEventListener("click", () => {
        // Smooth scroll to tabs section
        const tabsSection = document.querySelector(".tabs-container")
        tabsSection.scrollIntoView({ behavior: "smooth" })
      })
    }
  
    // Modal animations
    const modal = document.getElementById("modal")
    const closeModal = document.querySelector(".close-modal")
  
    if (closeModal) {
      closeModal.addEventListener("click", () => {
        modal.style.opacity = "0"
        setTimeout(() => {
          modal.classList.add("hidden")
        }, 300)
      })
    }
  
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll(
      ".data-card, .request-card, .section-header, .form-group, .feature-card",
    )
  
    function checkScroll() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
  
        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles
    revealElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Check on load and scroll
    window.addEventListener("load", checkScroll)
    window.addEventListener("scroll", checkScroll)
  
    // Notification auto-hide
    const notification = document.getElementById("notification")
    const closeNotification = document.getElementById("close-notification")
  
    if (closeNotification) {
      closeNotification.addEventListener("click", () => {
        notification.classList.add("hidden")
      })
    }
  
    // Auto-hide notifications after 5 seconds
    function hideNotification() {
      if (notification && !notification.classList.contains("hidden")) {
        notification.classList.add("hidden")
      }
    }
  
    // Set timeout for notifications
    if (notification) {
      setTimeout(hideNotification, 5000)
    }
  
    // Nav item active state
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault()
        navItems.forEach((i) => i.classList.remove("active"))
        this.classList.add("active")
      })
    })
  })
  
  // Animation utility functions
  const animations = {
    // Fade in element
    fadeIn: (element, duration = 300) => {
        element.style.opacity = '0';
        element.style.display = 'block';
        requestAnimationFrame(() => {
            element.style.transition = `opacity ${duration}ms ease-in-out`;
            element.style.opacity = '1';
        });
    },

    // Fade out element
    fadeOut: (element, duration = 300) => {
        element.style.transition = `opacity ${duration}ms ease-in-out`;
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },

    // Slide in element
    slideIn: (element, direction = 'right', duration = 300) => {
        const offset = direction === 'right' ? '100%' : '-100%';
        element.style.transform = `translateX(${offset})`;
        element.style.display = 'block';
        requestAnimationFrame(() => {
            element.style.transition = `transform ${duration}ms ease-in-out`;
            element.style.transform = 'translateX(0)';
        });
    },

    // Slide out element
    slideOut: (element, direction = 'right', duration = 300) => {
        const offset = direction === 'right' ? '100%' : '-100%';
        element.style.transition = `transform ${duration}ms ease-in-out`;
        element.style.transform = `translateX(${offset})`;
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    },

    // Add glow effect
    addGlow: (element, color = '#2bffff') => {
        element.style.boxShadow = `0 0 20px ${color}`;
    },

    // Remove glow effect
    removeGlow: (element) => {
        element.style.boxShadow = 'none';
    },

    // Show loading state
    showLoading: (element) => {
        element.classList.add('loading');
    },

    // Hide loading state
    hideLoading: (element) => {
        element.classList.remove('loading');
    }
};

// Notification system
const notificationSystem = {
    show: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        // Trigger animation
        animations.slideIn(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            animations.slideOut(notification);
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
};

// Tab switching animation
const tabAnimation = {
    switch: (fromTab, toTab) => {
        animations.fadeOut(fromTab);
        setTimeout(() => {
            animations.fadeIn(toTab);
        }, 300);
    }
};

// Form validation animation
const formAnimation = {
    showError: (element) => {
        element.classList.add('error');
        setTimeout(() => {
            element.classList.remove('error');
        }, 3000);
    },

    showSuccess: (element) => {
        element.classList.add('success');
        setTimeout(() => {
            element.classList.remove('success');
        }, 3000);
    }
};

// Export for use in other files
window.animations = animations;
window.notificationSystem = notificationSystem;
window.tabAnimation = tabAnimation;
window.formAnimation = formAnimation;
  
  
// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    function switchTab(tabId) {
        // Remove active class from all tabs and contents
        tabBtns.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => {
            content.style.opacity = "0";
            setTimeout(() => {
                content.classList.remove("active");
            }, 300);
        });

        // Find and activate the corresponding tab button
        const targetTabBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (targetTabBtn) {
            targetTabBtn.classList.add("active");
            
            // Show selected tab content with animation
            setTimeout(() => {
                const selectedTab = document.getElementById(tabId);
                selectedTab.classList.add("active");
                setTimeout(() => {
                    selectedTab.style.opacity = "1";
                }, 50);
            }, 300);

            // Update active state in navigation
            navItems.forEach((item) => {
                item.classList.remove("active");
                if (item.getAttribute("data-tab") === tabId) {
                    item.classList.add("active");
                }
            });
        }
    }

    // Handle navigation clicks
    navItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = item.getAttribute("data-tab");
            switchTab(tabId);
            
            // Scroll to tabs section
            const tabsSection = document.querySelector(".tabs-container");
            tabsSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Handle tab button clicks
    tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Handle URL hash changes
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            switchTab(hash);
        }
    }

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Handle initial hash
}); 
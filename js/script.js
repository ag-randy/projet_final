history.scrollRestoration = "manual";

/////////////////////////////////////////////////////
// NAVBAR — active link
/////////////////////////////////////////////////////
const navbar = document.querySelector(".navbar");
const currentPage = window.location.pathname.split("/").pop() || "index";

document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href").replace(".html", "");
    const page = currentPage.replace(".html", "");
    link.classList.toggle("active", href === page || (page === "" && href === "index"));
});

/////////////////////////////////////////////////////
// BACK TO TOP
/////////////////////////////////////////////////////
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/////////////////////////////////////////////////////
// SCROLL
/////////////////////////////////////////////////////
window.addEventListener("scroll", () => {

    navbar.classList.toggle("scrolled", window.scrollY > 50);

    if (backToTop) {
        backToTop.classList.toggle("show", window.scrollY > 100);
    }

    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });

    // Fermer le menu mobile au scroll
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
    }

});

/////////////////////////////////////////////////////
// HERO ANIMATIONS
/////////////////////////////////////////////////////
function initHeroAnimations() {
    document.querySelectorAll(".hero-animate").forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200);
    });
}

/////////////////////////////////////////////////////
// TYPED TEXT
/////////////////////////////////////////////////////
function initTypedText() {
    const typedText = document.getElementById("typedText");
    if (!typedText) return;

    const text = "au monde entier.";
    let index = 0;

    function type() {
        if (index < text.length) {
            typedText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 70);
        }
    }

    type();
}

/////////////////////////////////////////////////////
// FORMS — validation Bootstrap
/////////////////////////////////////////////////////
function initForms() {
    document.querySelectorAll(".needs-validation").forEach(form => {
        form.addEventListener("submit", (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        });
    });
}

/////////////////////////////////////////////////////
// LOAD
/////////////////////////////////////////////////////
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    initHeroAnimations();
    initTypedText();
    initForms();
});
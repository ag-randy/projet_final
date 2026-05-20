history.scrollRestoration = "manual";

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
// NAVBAR — active link
/////////////////////////////////////////////////////
const navbar = document.querySelector(".navbar");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === currentPage);
});

/////////////////////////////////////////////////////
// SCROLL — navbar + reveal + back to top
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

});

/////////////////////////////////////////////////////
// LOAD — hero animations + typed text
/////////////////////////////////////////////////////
window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    document.querySelectorAll(".hero-animate").forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200);
    });

    const typedText = document.getElementById("typedText");

    if (typedText) {
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

});

/////////////////////////////////////////////////////
// FORMS — validation Bootstrap
/////////////////////////////////////////////////////
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    });
});
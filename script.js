function searchPlaces() {

    const location =
        document
            .getElementById("location")
            .value
            .trim()
            .toLowerCase();

    const category =
        document
            .getElementById("category")
            .value
            .trim()
            .toLowerCase();


    if (location === "" && category === "") {

        alert(
            "Please enter a location or choose a category."
        );

        return;
    }


    const cards =
        document.querySelectorAll(
            "#propertyGrid .place-card"
        );


    cards.forEach(card => {

        const text =
            card.innerText
                .toLowerCase();


        const matchesLocation =
            location === "" ||
            text.includes(location);


        const matchesCategory =
            category === "" ||
            text.includes(
                category.replaceAll("-", " ")
            );


        if (
            matchesLocation &&
            matchesCategory
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });


    document
        .getElementById("explore")
        .scrollIntoView({
            behavior: "smooth"
        });

}function selectCategory(category) {

    document.getElementById("category").value =
        category;

    searchPlaces();

}


function toggleMenu() {

    const nav =
        document.querySelector(".nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "78px";

        nav.style.left = "0";

        nav.style.right = "0";

        nav.style.background = "white";

        nav.style.padding = "25px";

    }

}

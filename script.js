function searchPlaces() {

    const location =
        document.getElementById("location").value;

    const category =
        document.getElementById("category").value;


    if (location === "" && category === "") {

        alert(
            "Please enter a location or choose a category."
        );

        return;
    }


    let message = "Searching ZoRent";

    if (location !== "") {
        message += " in " + location;
    }

    if (category !== "") {
        message += " for " + category;
    }

    alert(message + "...");

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
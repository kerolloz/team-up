(function () {
    let id = 0;
    const segments = $(".segment").toArray();
    const colors = [
        "Red",
        "Orange",
        "Yellow",
        "Olive",
        "Green",
        "Teal",
        "Blue",
        "Violet",
        "Purple",
        "Pink",
        "Brown",
        "Grey",
        "Black"
    ]
    segments.forEach(element => {
        element.classList.add(colors[id].toLowerCase());
        element.id = ++id;
    });

})();
function parse() {
    const name = document.getElementById("add-user").elements[0].value;
    const email = document.getElementById("add-user").elements[1].value;
    const skills = $("form li").not('.js-template').toArray();

    if (skills.length >= 1) {
        let user_skills = skills.map((skill) => skill.innerText.split('\n')[0].trim());

        const data = {
            name: name,
            email: email,
            skills: user_skills
        };
        fetch("https://api-team-up-fci.herokuapp.com/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status == 200) {
                    // go to students page
                    window.location.href = "./students.html";
                } else {
                    // show the error
                    return response.json();
                }
            })
            .then(response => alert(response.message))
            .catch(err => console.log(err));
    } else {
        alert("Please add your skills first");
    }
    event.preventDefault();

}
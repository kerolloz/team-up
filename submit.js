function parse() {
    let name = document.getElementById("add-user").elements[0].value
    let email = document.getElementById("add-user").elements[1].value
    let skills = document.getElementsByTagName("li");
    let user_skills = [];
    if (skills.length > 1) {
        for (let i = 1; i < skills.length; i++)
            user_skills.push(skills[i].innerHTML.split('\n')[1].trim());

        let data = {
            name: name,
            email: email,
            skills: user_skills
        }
        console.log(JSON.stringify(data))
        fetch("http://localhost:5000/users", {
                method: 'POST',
                // mode: 'cors', // no-cors, cors, *same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                // redirect: 'follow', // manual, *follow, error
                // referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.log(err));

    } else {
        alert("Please add your skills first");
    }
    console.log(user_skills);
    event.preventDefault();

}
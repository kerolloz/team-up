function parse() {
    name = document.getElementById("add-user").elements[0].value;
    email = document.getElementById("add-user").elements[1].value;
    skills = document.getElementsByTagName("li");
    user_skills = [];
    if (skills.length > 1) {
        for (i = 1; i < skills.length; i++)
            user_skills.push(skills[i].innerHTML.split('\n')[1].trim());

        data = {
            name: name,
            email: email,
            skills: user_skills
        };
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
            .then(response => {
                if (response.status == 200){
                    // go to students page
                    window.location.href = "./students.html";
                    throw new Error("Not OK");
                }
                else{
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
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
        fetch("https://api-team-up-fci.herokuapp.com/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status == 200){
                    // go to students page
                    window.location.href = "./students.html";
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
// const basic_url = "http://localhost:5000";
const basic_url = "https://api-team-up-fci.herokuapp.com";

function parse() {
    $('#add-user').removeClass('success error');
    // clean the messages, this would happen in case the user registers twice without reloading the page
    const name = document.getElementById("add-user").elements[0].value;
    const email = document.getElementById("add-user").elements[1].value;
    const skills = $("form li").not('.js-template').toArray();

    if (skills.length >= 1) {
        toggleLoading();

        let user_skills = skills.map((skill) => skill.innerText.split('\n')[0].trim());

        const data = {
            name: name,
            email: email,
            skills: user_skills
        };
        fetch(`${basic_url}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.status == 200) {
                    show_success();
                } else {
                    response.json()
                        .then((response) => show_error(response.message))
                        .catch((err) => show_error(err));
                }
            })
            .catch(err => console.log(err));
    } else {
        alert("Please add your skills first");
        // form validation <
    }
    event.preventDefault();

}

function toggleLoading() {
    $('#add-user').toggleClass('loading');
}

function show_success() {
    toggleLoading();
    $('#add-user').addClass('success');
}

function show_error(err) {
    toggleLoading();
    $('#error-message').html(err);
    $('#add-user').addClass('error');
}
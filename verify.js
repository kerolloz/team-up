// const base_url = "http://localhost:5000";
const base_url = "https://api-team-up-fci.herokuapp.com";

function verify() {
    const token = getParam("token");

    if (!token) {
        viewResult("No token was provided", 'yellow');
        return;
    }

    fetch(`${base_url}/verify/${token}`)
        .then(response => processResponse(response))
        .catch(err => alert(err, "Please report this errro!"));
}

function processResponse(result) {
    result
        .json()
        .then((res) => viewResult(res.message, result.ok ? 'green' : 'red'))
        .catch((err) => alert(err));
}

function viewResult(message, color) {
    $('#verification-message')
        .html(message)
        .addClass(color);
}

function getParam(key) {
    const params = document.location.search.substr(1).split('&');
    for (const param of params) {
        var pair = param.split('=');
        if (pair[0] == key) {
            return pair[1];
        }
    }
    return null;
}

verify();
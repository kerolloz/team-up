//  get students by name 
$('#name-form').submit(function (e) {
    e.preventDefault();

    const section_id = 'students-by-name';
    const name = $("input[name=name]").val();

    if (name.length) {
        loading(section_id);

        fetch(`https://api-team-up-fci.herokuapp.com/users?name=${name}`)
            .then(response => response.json())
            .then(students => show_students(students, section_id))
            .catch(err => show_nothing(section_id));
    }else {
        alert("Please enter the name first!");
    }
});

// get students by skills
$('#skills-form').submit(function (e) {
    e.preventDefault();

    const section_id = 'students-by-skills';
    const skills = $("form#skills-form li").not('.js-template').toArray();

    if (skills.length >= 1) {
        loading(section_id);

        let user_skills = skills.map((skill) => skill.innerText.split('\n')[0].trim());

        fetch(`https://api-team-up-fci.herokuapp.com/users?skills=${user_skills.join(',')}`)
            .then(response => response.json())
            .then(students => show_students(students, section_id))
            .catch(err => show_nothing(section_id));
    } else {
        alert("Please add the skills first!");
    }
});

function show_students(students_list, section_id) {
    if (students_list.length === 0)
        return show_nothing();

    let list_in_html = "";
    for (let student of students_list) {
        let skills = ""
        for (let skill of student.skills) {
            skills += `<li class="topic-tag-action f6 p-2 float-left js-tag-input-tag text-blue" style="height: 25px">${skill}</li>`
        }
        list_in_html += `<div class="ui fluid container mb-2 p-2 text-white rounded student" >
        <i class="portrait icon"></i> ${student.name}<br>
        <i class="envelope icon"></i> 
        <a href="mailto: ${student.email}" class="text-white" style="  text-decoration: underline;">${student.email}</a>
        <ul class=" js-tag-input-selected-tags">${skills}</ul></div>`;
    }
    set_search_results_html(list_in_html, section_id);
}

function show_nothing(section_id) {
    set_search_results_html(`
    <div class="ui icon message red">
        <i class="user alternate slash icon"></i>
        <div class="content">
            <div class="header">
                Opss!
            </div>
            <p>Sorry, we found nothing.</p>
        </div>
    </div>`, section_id);
}

function set_search_results_html(html_content, section_id) {
    document.getElementById(section_id).innerHTML = html_content;
}

function loading(section_id) {
    set_search_results_html(`
    <div class="ui icon message yellow">
        <i class="notched circle loading icon"></i>
        <div class="content">
            <div class="header">
                Just one second!
            </div>
            <p>We're fetching the results for you.</p>
        </div>
    </div>`, section_id);
}
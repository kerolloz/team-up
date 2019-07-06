function get_all_students() {
    loading()
    fetch("https://api-team-up-fci.herokuapp.com/users")
        .then(response => response.json())
        .then(students => show_students(students.docs))
        .catch(err => show_nothing());
}

function search() {
    if (document.getElementById("search-form").elements[0].value !== "") {
        if (document.getElementById("search-form").elements[1].checked) // name
            get_students_by_name();
        else // skills
            get_students_by_skills();
    } else {
        get_all_students();
    }
    event.preventDefault();
}

function toggler(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function toggle_style() {
    const skills_input = document.getElementById("skills-input");
    const name_input = document.getElementById("name-input");
    toggler(skills_input);
    toggler(name_input);
}

function get_students_by_name() {
    loading()
    const name = document.getElementById("search-form").elements[0].value;
    console.log(name)
    fetch(`https://api-team-up-fci.herokuapp.com/users?name=${name}`)
        .then(response => response.json())
        .then(students => show_students(students))
        .catch(err => show_nothing());
}

function get_students_by_skills() {

}

function show_students(students_list) {
    if (students_list.length === 0)
        return show_nothing();

    list_in_html = "";
    for (let student of students_list) {
        skills = ""
        for (let skill of student.skills) {
            skills += `<li class="topic-tag-action f6 p-2 float-left js-tag-input-tag text-blue" style="height: 25px">${skill}</li>`
        }
        list_in_html += `<div class="ui fluid container mb-2 p-2 text-white rounded student" >
        Name: ${student.name}<br>
        Email: ${student.email}
        <ul class=" js-tag-input-selected-tags">${skills}</ul></div>`;
    }
    set_search_results_html(list_in_html);
}

function show_nothing() {
    set_search_results_html("<div class='h3 text-red'> Nothing found </div>");
}

function set_search_results_html(html_content) {
    document.getElementById("students-list").innerHTML = html_content;
}

function loading() {
    set_search_results_html(`<div id="students-list" class="col- mt-4">
    <div class="ui blue swinging indeterminate progress">
        <div class="bar">
            <div class="progress">Searching</div>
        </div>
    </div>
</div>`);
}

get_all_students(); // when the page load get all students 
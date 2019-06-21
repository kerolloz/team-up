function get_all_students() {
    loading()
    fetch("http://localhost:5000/users")
        .then(response => response.json())
        .then(students => show_students(students.docs))
        .catch(err => show_nothing());
}

function search() {
    event.preventDefault();
}

function get_students_by_name() {

}

function get_students_by_skills() {

}

function show_students(students_list) {
    console.log(students_list);

    list_in_html = "";
    for (let student of students_list) {
        skills = ""
        for (let skill of student.skills) {
            skills += `<li class="topic-tag-action f6 float-left js-tag-input-tag text-primary" style="height: 30px">${skill} &nbsp;&nbsp</li>`
        }
        list_in_html += `<div class="container m-2 p-2 bg-secondary text-white rounded">
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
    set_search_results_html('<img src="./material-loader.gif">');
}

get_all_students(); // when the page load get all students 
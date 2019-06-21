function remove_placeholder() {
    skills_input = document.getElementById("question-input-101");
    skills_input.placeholder = "";
    skills_input.onfocus = ""; 
    // make the function remove itself 
    // so it doesn't get called again when on focus 
}
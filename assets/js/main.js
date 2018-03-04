let currentSearchTerm = '';

function changeHandler(e) {

    currentSearchTerm = e.target.value;
}

function handleKeyPress(e) {
    if (e && e.key === 'Enter') {
        handleSubmit();
    }
}

function handleSubmit() {
    alert("Currently working on it :(");
}

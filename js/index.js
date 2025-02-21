function toggleTopic(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

window.onload = function() {
    document.getElementById('topic1-content').style.display = 'block';
};
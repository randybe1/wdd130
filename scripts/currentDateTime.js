// Function to format the current date and time
function getCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    return now.toLocaleDateString('en-US', options);
}

// Insert current date and time into the footer
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('footer').innerHTML += ' | ' + getCurrentDateTime();
});

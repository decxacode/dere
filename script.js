window.onload = function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('user-ip-placeholder').textContent = ipAddress;
        })
        .catch(error => console.error('Error:', error));
};

window.onload = function () {
    fetch('https://api.ipify.org?format=json') // Using a different service to get the IPv4 address
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('user-ip-placeholder').textContent = ipAddress;
        })
        .catch(error => console.error('Error:', error));
};

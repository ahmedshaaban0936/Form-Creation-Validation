document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create user list
            const userList = document.createElement('ul');
            userList.classList.add('user-list');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append user list to dataContainer
            dataContainer.appendChild(userList);
        } catch (error) {
            // Display error message
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching data:', error.message);
        }
    }

    // Fetch data when DOM content is loaded
    fetchUserData();
});
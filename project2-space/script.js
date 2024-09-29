document.getElementById('submitBtn').addEventListener('click', function() {
    const userName = document.getElementById('userName').value.trim();
    const timeManagement = document.getElementById('timeManagement').value;
    const organizationInterest = document.getElementById('organizationInterest').value;

    if (!userName) {
        alert('Please enter your name!');
        return;
    }

    // Simple feedback for the user
    alert(`Time Management: ${timeManagement}\nInterested in Organization: ${organizationInterest}`);

    // Update greeting message and show the To-Do section
    document.getElementById('greeting').textContent = `Hello, ${userName}! Here’s your To-Do List:`;
    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('todoSection').style.display = 'block';
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

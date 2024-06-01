// script.js
document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        {
            "title": "Stage 1",
            "description": "Basic information about participants and professional experiences.",
            "subtasks": [
            ]
        },
        {
            "title": "Stage 2",
            "description": "Team experience in practice.",
            "subtasks": [
            ]
        },
		{
            "title": "Stage 3",
            "description": "Individual experience in practice.",
            "subtasks": [
            ]
        },
		{
            "title": "Stage 4",
            "description": "Behavioral and situational questionnaire.",
            "subtasks": [
            ]
        },
		{
            "title": "Stage 5",
            "description": "Contract",
            "subtasks": [
                {"title": "NDA", "description": "Submit the signed NDA agreement digitally."},
                {"title": "Interview", "description": "The interview will be live or remotely."},
                {"title": "Sign the Contract", "description": "Pay attention to the one-week signing deadline."}
            ]
        }
        // Adicione mais etapas conforme necessário
    ];

    const timelineContainer = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;

        const content = `
            <div class="timeline-item-content">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                ${item.subtasks.map(subtask => `
                    <div class="subtask">
                        <h3>${subtask.title}</h3>
                        <p>${subtask.description}</p>
                    </div>
                `).join('')}
            </div>
        `;

        timelineItem.innerHTML = content;
        timelineContainer.appendChild(timelineItem);
    });
	document.querySelector('button').addEventListener('click', function(){
	console.log(localStorage.getItem('keyapagar'))
	localStorage.setItem('keyapagar', '0');
	document.querySelector('#timeline > div:nth-child(5) > div > div:nth-child(3) > p').innerHTML+='<br><b>Enviado!</b>';
})
});


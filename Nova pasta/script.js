// script.js
document.addEventListener('DOMContentLoaded', () => {
    const totalCandidates = document.getElementById('total-candidates');
    const approvalStages = document.getElementById('approval-stages');
    const overallRanking = document.getElementById('overall-ranking');
    const userPlacement = document.getElementById('user-placement');

    const data = {
        candidates: 150,
        stages: [
            { stage: 'Etapa 1', approvals: 100 },
            { stage: 'Etapa 2', approvals: 80 },
            { stage: 'Etapa 3', approvals: 50 }
        ],
        ranking: [
            { name: 'Alice', score: 95 },
            { name: 'Bob', score: 90 },
            { name: 'Charlie', score: 85 },
            { name: 'Você', score: 80 },
            { name: 'David', score: 75 }
        ]
    };

    // Atualiza o número total de candidatos
    totalCandidates.textContent = data.candidates;

    // Atualiza as aprovações por etapa
    data.stages.forEach(stage => {
        const li = document.createElement('li');
        li.textContent = `${stage.stage}: ${stage.approvals} aprovações`;
        approvalStages.appendChild(li);
    });

    // Atualiza a classificação geral
    data.ranking.forEach(rank => {
        const li = document.createElement('li');
        li.textContent = `${rank.name}: ${rank.score} pontos`;
        overallRanking.appendChild(li);
    });

    // Atualiza a colocação do usuário
    const userRank = data.ranking.find(rank => rank.name === 'Você');
    if (userRank) {
        userPlacement.textContent = `${userRank.name}: ${userRank.score} pontos`;
    } else {
        userPlacement.textContent = 'Não classificado';
    }
});

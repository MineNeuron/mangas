// script.js
document.addEventListener('DOMContentLoaded', () => {
    const totalCandidates = document.getElementById('total-candidates');
    const approvalStages = document.getElementById('approval-stages');
    const overallRanking = document.getElementById('overall-ranking');
    const userPlacement = document.getElementById('user-placement');

    const data = {
        candidates: 3,
        stages: [
            { stage: 'Stage 1', approvals: '...' },
            { stage: 'Stage 2', approvals: 75 },
            { stage: 'Stage 3', approvals: 50 },
            { stage: 'Stage 4', approvals: 3 },
            { stage: 'Stage 5', approvals: 3 }
        ],
        ranking: [
            { name: '.......', score: 955 },
            { name: '.......', score: 910 },
            { name: '.......', score: 835 },
            { name: '.......', score: 850 },
            { name: '.......', score: 765 }
        ]
    };

    // Atualiza o número total de candidatos
    totalCandidates.textContent = data.candidates;

    // Atualiza as aprovações por etapa
    data.stages.forEach(stage => {
        const li = document.createElement('li');
        li.textContent = `${stage.stage}: ${stage.approvals}`;
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
        userPlacement.textContent = 'Classificado';
    }
});
window.addEventListener("contextmenu", function(e) { e.preventDefault(); })


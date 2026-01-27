function verificarHorariosDisponiveis(profissionalId, data) {
    fetch('/horarios-disponiveis?profissional=' + profissionalId + '&data=' + data)
        .then(response => response.json())
        .then(horarios => {
            const timeInput = document.getElementById('horario');
            timeInput.innerHTML = '';
            
            if (horarios.length === 0) {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'Nenhum horário disponível';
                timeInput.appendChild(option);
            } else {
                horarios.forEach(horario => {
                    const option = document.createElement('option');
                    option.value = horario;
                    option.textContent = horario;
                    timeInput.appendChild(option);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao buscar horários:', error);
        });
}

document.getElementById('data').addEventListener('change', function() {
    const profissionalId = document.getElementById('profissionalId').value;
    if (profissionalId && this.value) {
        verificarHorariosDisponiveis(profissionalId, this.value);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dataInput = document.getElementById('data');
    const horaInput = document.getElementById('horario');
    
    // Data mínima = hoje
    dataInput.min = new Date().toISOString().split('T')[0];
    
    // Atualiza hora mínima quando a data muda
    dataInput.addEventListener('change', function() {
        const hoje = new Date().toISOString().split('T')[0];
        if (this.value === hoje) {
            const agora = new Date();
            horaInput.min = agora.getHours().toString().padStart(2, '0') + ':' + 
                          agora.getMinutes().toString().padStart(2, '0');
        } else {
            horaInput.min = '00:00';
        }
        
        // Atualiza horários disponíveis se já tiver profissional selecionado
        const profissionalId = document.getElementById('profissionalId').value;
        if (profissionalId) {
            verificarHorariosDisponiveis(profissionalId, this.value);
        }
    });
});
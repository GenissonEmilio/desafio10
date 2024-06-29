document.addEventListener('DOMContentLoaded', () => {
    fetch('dados_populacao.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#tabela tbody');
            tableBody.innerHTML = '';

            data.forEach(item => {
                const row = document.createElement('tr');
                const estadoCell = document.createElement('td');
                const populacaoCell = document.createElement('td');

                estadoCell.textContent = item['Unidade Federativa'];
                populacaoCell.textContent = item['População'];

                row.appendChild(estadoCell);
                row.appendChild(populacaoCell);
                tableBody.appendChild(row);
            });

            document.querySelectorAll('#tabela tbody td:nth-child(2)').forEach(dado => {
                dado.style.textAlign = 'right';
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});

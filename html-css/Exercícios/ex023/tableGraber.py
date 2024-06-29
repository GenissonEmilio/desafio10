import requests
from bs4 import BeautifulSoup
import json

# Define a URL da Wikipedia table
url = "https://pt.m.wikipedia.org/wiki/Lista_de_unidades_federativas_do_Brasil_por_população"

# baixa o conteudo do html
response = requests.get(url)
html_content = response.content

# Passa para html
soup = BeautifulSoup(html_content, 'html.parser')

# Encontra a tabela
table = soup.find('table', class_='wikitable sortable')

# Extrai os dados
dados = []
for row in table.find_all('tr')[1:]: 
    cells = row.find_all('td')
    if len(cells) >= 3:
        estado = cells[1].text.strip()
        populacao = cells[2].text.strip().replace('.', '').replace(',', '.')
        dados.append({'Unidade Federativa': estado, 'População': populacao})

# Salva os dados em um json
with open('dados_populacao.json', 'w', encoding='utf-8') as f:
    json.dump(dados, f, indent=4, ensure_ascii=False)

print('Dados extraídos e salvos com sucesso!')

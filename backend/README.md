# Desafio Dev Django - Backend

Este é o backend do projeto Desafio Dev Django, desenvolvido utilizando o framework Django.

## Requisitos

- Python 3.x
- Django 3.x
- Banco de dados (SQLite, PostgreSQL, etc.)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/desafio-dev-django.git
    ```
2. Navegue até o diretório do backend:
    ```bash
    cd desafio-dev-django/backend
    ```
3. Crie um ambiente virtual:
    ```bash
    python -m venv venv
    ```
4. Ative o ambiente virtual:
    - No Windows:
        ```bash
        venv\Scripts\activate
        ```
    - No Linux/Mac:
        ```bash
        source venv/bin/activate
        ```
5. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes variáveis:
    ```env
    SECRET_KEY=your_secret_key
    DEBUG=True
    ALLOWED_HOSTS=localhost,127.0.0.1
    DATABASE_URL=sqlite:///db.sqlite3
    ```

2. Execute as migrações do banco de dados:
    ```bash
    python manage.py migrate
    ```

## Execução

Para iniciar o servidor de desenvolvimento, execute:
```bash
python manage.py runserver
```

## Testes

Para rodar os testes, execute:
```bash
python manage.py test
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
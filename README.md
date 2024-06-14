# Announce Service

Serviço de gerenciamento de anúncios para Grupo do Discord.

## Configuração do Projeto

### Requisitos

- Node.js (versão 16 ou superior)
- Docker (opcional, para contêinerização)
- MongoDB (local ou hospedado)

### Passos para Configuração

1. **Clone o Repositório**

   ```bash
   git clone <url-do-repositorio>
   cd announce-service
    ```
2. Instale as Dependências

```bash
npm install
```

3. Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```
NODE_ENV=dev
MONGO_CONNECTION_URI=<sua-uri-do-mongo>
PORT=3000
```

4. Compilar o Código TypeScript
```bash
npm run build
```

5. Rodar o Projeto Localmente
```bash
npm start
```

## Usando Docker
Para facilitar o gerenciamento do ambiente, você pode usar Docker.

1. Build da Imagem Docker
```bash
docker build -t announce-service .
```

2. Rodar o Contêiner Docker
```bash
docker run -d -p 3000:3000 --env-file .env --name announce-service announce-service
```

## Usando Swagger UI
Após subir os serviços, você pode acessar a documentação da API gerada automaticamente pelo Swagger UI.

1. Acesse o Swagger UI

Abra seu navegador e acesse:
```
http://localhost:3000/api-docs
```
Aqui você poderá visualizar e testar todos os endpoints disponíveis na API.


# Endpoints Disponíveis
## Anúncios
POST /anuncios: Cria um novo anúncio.
GET /anuncios: Lista todos os anúncios.
GET /anuncios/
: Obtém detalhes de um anúncio específico.
PUT /anuncios/
: Atualiza um anúncio existente.
DELETE /anuncios/
: Deleta um anúncio.


# Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests. Toda contribuição é bem-vinda!

# Licença
Este projeto está licenciado sob a licença MIT. 
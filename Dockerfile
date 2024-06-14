# Etapa 1: Construção do projeto
FROM node:16-alpine AS BUILD

# Instale dependências de sistema necessárias
RUN apk add --no-cache make gcc g++ python3

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código fonte para o diretório de trabalho
COPY . .

# Compile o código TypeScript
RUN npm run build

# Etapa 2: Imagem final
FROM node:16-alpine

# Instale curl e outras dependências necessárias
RUN apk add --no-cache curl

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie apenas os arquivos compilados da etapa de build
COPY --from=BUILD /usr/src/app/dist ./dist
COPY --from=BUILD /usr/src/app/package*.json ./

# Instale apenas as dependências de produção
RUN npm install --only=production

# Copie o script de health check
COPY healthcheck.sh ./
RUN chmod +x healthcheck.sh

# Configurar o health check do Docker
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 CMD ./healthcheck.sh

# Comando para rodar a aplicação
CMD ["node", "dist/server.js"]

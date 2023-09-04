# Usar uma imagem base oficial de Node.js
FROM ghcr.io/blrvio/secured-docker-images/node:latest
# checkov:skip=CKV_DOCKER_7: Estamos testando a tag latest

# Criar um diretório para o usuário não-root
RUN mkdir -p /home/appuser

# Definir o diretório de trabalho no contêiner
WORKDIR /home/appuser/app

# Mudar para o usuário não-root
USER appuser

# Copiar o package.json e package-lock.json primeiro para otimizar a criação da imagem
COPY package*.json ./

# Instalar as dependências
RUN yarn install

# Copiar o código da aplicação para o contêiner
COPY . .

# Definir a variável de ambiente para a porta onde a aplicação será executada
ENV PORT=3000

# Expôr a porta que a aplicação usará
EXPOSE 3000

# Adicionar um HEALTHCHECK
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD curl --fail http://localhost:3000/healthcheck || exit 1

# Comando para rodar a aplicação
CMD ["node", "index.js"]

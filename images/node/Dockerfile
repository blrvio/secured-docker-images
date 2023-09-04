# Use uma imagem base pequena e segura
# checkov:skip=CKV_DOCKER_2: Esta imagem é usada como base para outras imagens
FROM alpine:3

# Meta-informações como mantenedor da imagem
LABEL maintainer = "your-email@example.com"
LABEL org.opencontainers.image.source = "https://github.com/blrvio/secured-docker-images"
# Instalar o Node.js e o NPM
RUN apk add --update nodejs npm

# Crie um grupo e usuário não-root para executar o serviço
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Instale as atualizações de segurança e pacotes necessários.
# O flag --no-cache ajuda a manter a imagem pequena
RUN apk update \
    && apk upgrade \
    && apk add --no-cache \
    curl \
    ca-certificates \
    && npm install -g yarn \
    && update-ca-certificates \
    && rm -rf /var/cache/apk/* /tmp/*

# Mudar para o diretório de trabalho padrão
WORKDIR /app

# Remover permissões desnecessárias de arquivos e diretórios
RUN chmod -R 755 /app

# Mudar para o usuário não-root
USER appuser
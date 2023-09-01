# Use uma imagem base pequena e segura
# checkov:skip=CKV_DOCKER_2: Esta imagem é usada como base para outras imagens
FROM node:14-alpine

# Meta-informações como mantenedor da imagem
LABEL maintainer="your-email@example.com"

# Crie um grupo e usuário não-root para executar o serviço
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Instale as atualizações de segurança e pacotes necessários.
# O flag --no-cache ajuda a manter a imagem pequena
RUN apk update \
    && apk upgrade \
    && apk add --no-cache \
    curl \
    ca-certificates \
    && rm -f /usr/local/bin/yarn \
    && rm -f /usr/local/bin/corepack \
    && rm -f /usr/local/bin/yarnpkg \
    && npm update && npm update -g \
    && update-ca-certificates \
    && rm -rf /var/cache/apk/* /tmp/*

# Mudar para o diretório de trabalho padrão
WORKDIR /app

# Remover permissões desnecessárias de arquivos e diretórios
RUN chmod -R 755 /app

# Mudar para o usuário não-root
USER appuser
# Usar a imagem base do Alpine 3
  # checkov:skip=CKV_DOCKER_2:  Imagem base para outras imagens
FROM alpine:3

# Meta-informações como mantenedor da imagem
LABEL maintainer="your-email@example.com"

# Crie um grupo e usuário não-root para executar o serviço
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Instale Python e outras dependências necessárias
RUN apk add --no-cache python3 py3-pip \
    && apk add --no-cache \
    curl \
    ca-certificates \
    && update-ca-certificates \
    && rm -rf /var/cache/apk/* /tmp/*

# Mudar para o diretório de trabalho padrão
WORKDIR /app

# Remover permissões desnecessárias de arquivos e diretórios
RUN chmod -R 755 /app

# Mudar para o usuário não-root
USER appuser

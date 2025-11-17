# Configuração do Sistema de Email - Aetherion

Este documento descreve como configurar e usar o sistema de email implementado no website Aetherion, incluindo o formulário de contato.

## Configuração das Variáveis de Ambiente

Para configurar o sistema de email, adicione as seguintes variáveis ao arquivo `.env.local` na raiz do projeto:

```
# Configurações de Email (Office 365)
EMAIL_SERVER_HOST=smtp.office365.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=bc@inmotion.today
EMAIL_SERVER_PASSWORD=sua-senha-segura
EMAIL_FROM=bc@inmotion.today
EMAIL_TO=Contact@aetherion.es
EMAIL_CC=bc@inmotion.today
```

### Descrição das Variáveis

- `EMAIL_SERVER_HOST`: Endereço do servidor SMTP (para Office 365: smtp.office365.com)
- `EMAIL_SERVER_PORT`: Porta do servidor SMTP (para Office 365: 587)
- `EMAIL_SERVER_USER`: Email para autenticação SMTP (bc@inmotion.today)
- `EMAIL_SERVER_PASSWORD`: Senha do email para autenticação SMTP
- `EMAIL_FROM`: Email do remetente (bc@inmotion.today)
- `EMAIL_TO`: Email principal do destinatário (Contact@aetherion.es)
- `EMAIL_CC`: Email que receberá cópia das mensagens (bc@inmotion.today)

## Pré-requisitos na Microsoft 365

Para o correto funcionamento do envio de emails via SMTP no Office 365, é necessário:

1. **Habilitar autenticação SMTP básica**:
   - Acesse o Microsoft Exchange Admin Center: https://admin.exchange.microsoft.com/#/settings
   - No painel de navegação, acesse **Configurações** > **Autenticação de email**
   - Certifique-se de que a política não esteja bloqueando a autenticação SMTP básica

2. **Verificar os padrões de segurança**:
   Se encontrar erros relacionados a políticas de segurança, pode ser necessário ajustar as configurações:
   
   - Acesse o portal Microsoft Entra: https://entra.microsoft.com
   - No menu lateral esquerdo, clique em **Identidade** > **Central de Segurança**
   - Na aba **Propriedades**, encontre a seção **Padrões de segurança**
   - Clique em **Gerenciar padrões de segurança**
   - Considere desabilitar os padrões de segurança ou configurar políticas de acesso condicional específicas

## Formulário de Contato

O formulário de contato está implementado no componente `components/sections/ContactSection.tsx`. Quando preenchido e enviado, ele:

1. Envia os dados para o endpoint `/api/contact` via método POST
2. A API processa os dados e envia o email para:
   - **Destinatário principal**: Contact@aetherion.es
   - **Cópia (CC)**: bc@inmotion.today
3. Exibe uma notificação ao usuário informando o status do envio

### Campos do Formulário

- **Nome**: Nome completo do remetente
- **Email**: Endereço de email do remetente
- **Assunto**: Assunto da mensagem
- **Mensagem**: Conteúdo da mensagem

### Formato do Email

O email enviado inclui:
- Cabeçalho com branding Aetherion
- Informações do remetente (nome, email, assunto)
- Mensagem formatada
- Data e hora de envio
- Versões HTML e texto puro

## Solução de Problemas

### Erros Comuns

| Erro | Possível Causa | Solução |
|------|----------------|---------|
| "Authentication unsuccessful, SmtpClientAuthentication is disabled for the Tenant" | Autenticação SMTP desabilitada | Acessar o Portal de Administração do Exchange e habilitar a autenticação SMTP |
| "Authentication unsuccessful, user is locked by your organization's security defaults policy" | Bloqueio por política de segurança | Verificar as configurações de segurança no Microsoft Entra ID |
| "Timeout while connecting to SMTP server" | Problemas de rede ou firewall | Verificar configurações de rede e firewall |
| "Invalid login" | Credenciais incorretas | Verificar as variáveis EMAIL_SERVER_USER e EMAIL_SERVER_PASSWORD |

### Passos para Diagnóstico

Se estiver enfrentando problemas com o envio de emails:

1. Verifique o arquivo `.env.local` (desenvolvimento) ou `.env.production` (produção) para garantir que todas as variáveis estão definidas corretamente
2. Verifique os logs do servidor Next.js para mensagens de erro detalhadas
3. Verifique as configurações de autenticação SMTP no Microsoft 365
4. Certifique-se de que a autenticação SMTP está habilitada para a conta bc@inmotion.today
5. Contate o administrador do Microsoft 365 para verificar políticas de segurança, se necessário

## Desenvolvimento e Manutenção

O sistema de email é composto pelos seguintes componentes:

- `components/sections/ContactSection.tsx`: Componente do formulário de contato
- `app/api/contact/route.ts`: Endpoint de API para processamento e envio do formulário

### Bibliotecas Utilizadas

- `nodemailer`: Biblioteca para envio de emails via SMTP
- `@types/nodemailer`: TypeScript types para nodemailer

## Deploy na Vercel

### Configurando Variáveis de Ambiente

Para fazer deploy na Vercel, é necessário configurar as variáveis de ambiente no painel da Vercel:

1. Acesse o projeto na Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione todas as variáveis do arquivo `.env.production`:
   - `EMAIL_SERVER_HOST`
   - `EMAIL_SERVER_PORT`
   - `EMAIL_SERVER_USER`
   - `EMAIL_SERVER_PASSWORD`
   - `EMAIL_FROM`
   - `EMAIL_TO`
   - `EMAIL_CC`

### Usando Vercel CLI

Alternativamente, você pode usar a Vercel CLI para fazer push das variáveis de ambiente:

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login na Vercel
vercel login

# Fazer deploy do projeto
vercel

# Adicionar variáveis de ambiente via CLI
vercel env add EMAIL_SERVER_HOST
vercel env add EMAIL_SERVER_PORT
vercel env add EMAIL_SERVER_USER
vercel env add EMAIL_SERVER_PASSWORD
vercel env add EMAIL_FROM
vercel env add EMAIL_TO
vercel env add EMAIL_CC
```

**Nota**: Para cada comando `vercel env add`, você será solicitado a inserir o valor e escolher o ambiente (Production, Preview, Development). 
# API de Treinamento de Testes (Node + Express)

API Rest simples para estudo de testes e automação a nível de API, com regras básicas de login e transferência.

## Funcionalidades

- Registro de usuário (`/auth/register`)
- Login de usuário (`/auth/login`)
- Consulta de usuários (`/users`)
- Transferência de valores (`/transfers`)
- Listagem de transferências (`/transfers` - GET)
- Documentação Swagger em `/api-docs`

## Regras de negócio

1. **Login**: `username` e `password` são obrigatórios.
2. **Registro**: não é permitido registrar usuários com `username` duplicado.
3. **Transferências**:
   - Remetente e destinatário devem existir.
   - Saldo do remetente deve ser suficiente.
   - Se o destinatário **não** for favorecido do remetente, o valor deve ser **menor que R$ 5.000,00**.

## Banco de dados

- Em memória, armazenado em `src/models/db.js`.
- Ao reiniciar a aplicação, os dados são resetados.

## Requisitos

- Node.js 18+
- npm ou yarn

## Instalação

```bash
npm install
# ou
yarn

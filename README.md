# Projeto de APIs - Segurança em APIs REST

Este repositório contém duas implementações de uma API com foco em segurança:

- Uma versão **vulnerável**, demonstrando más práticas.
- Uma versão **invulnerável**, demonstrando boas práticas de segurança.

## Branches

🔓 **API Vulnerável**  
Implementação com falhas de segurança propositalmente incluídas.
👉   [caue-api-vulneravel](https://github.com/CaueFer/n2-vulnerabilidades/tree/caue-api-vulneravel)

🛡️ **API Invulnerável**  
Implementação com medidas de segurança aplicadas corretamente.
👉   [walter-api-invulnerável](https://github.com/CaueFer/n2-vulnerabilidades/tree/walter-api-invulnerável)

---

## Objetivo

Este projeto foi criado como parte da disciplina de Segurança da Informação para fins educativos, comparando práticas inseguras e seguras no desenvolvimento de APIs.

---

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/CaueFer/n2-vulnerabilidades.git
   ```

2. Acesse a pasta do frontend e inicie a aplicação:
   ```bash
   cd front
   npm install
   npm run dev
   ```

3. Em outro terminal, acesse a pasta do backend e inicie a API:
   ```bash
   cd back
   npm install
   npm run dev
   ```

---
Relatório – Sumário Executivo
Projeto: Comparação de APIs Segura e Insegura
Disciplina: Segurança da Informação
Objetivo: Demonstrar, de forma prática e educativa, a diferença entre más práticas (API vulnerável) e boas práticas (API segura) no desenvolvimento de APIs.
Repositório: Contém duas branches:

🔓 caue-api-vulneravel

🛡️ walter-api-invulneravel

Contexto:
O projeto visa evidenciar como falhas comuns no desenvolvimento de APIs podem comprometer a segurança de aplicações web. Ao oferecer duas implementações distintas, o estudo permite analisar os impactos de práticas inseguras e os benefícios da aplicação de medidas corretas de segurança.

Resultados Esperados:

Compreensão das principais vulnerabilidades em APIs REST.

Demonstração da importância de aplicar práticas como autenticação segura, validação de dados, proteção contra injeções, entre outras.

Aplicação de conhecimento teórico em um ambiente prático e controlado.

Público-Alvo:
Estudantes e profissionais da área de desenvolvimento e segurança da informação.

Relatório Técnico
1. Introdução
Este repositório contém duas versões de uma API REST desenvolvida com o objetivo de comparar práticas inseguras e seguras. O projeto é utilizado para fins educacionais na disciplina de Segurança da Informação.

2. Estrutura do Repositório

Branch caue-api-vulneravel:
Contém a implementação insegura da API, com falhas propositalmente incluídas.

Branch walter-api-invulneravel:
Contém a versão segura da mesma API, corrigindo as vulnerabilidades identificadas.

3. Tecnologias Utilizadas

Node.js + Express

Banco de Dados: MySQL

Autenticação: JWT

ORM: Sequelize (em ambas versões)

4. Principais Vulnerabilidades Presentes na API Vulnerável

Tipo de Vulnerabilidade	Descrição
Injeção SQL	Falta de uso de parâmetros no acesso ao banco.
Autenticação Fraca	Tokens mal gerenciados e ausência de verificação adequada.
Exposição de Informações Sensíveis	Respostas contendo dados sensíveis como senhas.
Falta de Validação de Entrada	Dados de entrada do usuário não são validados.
CORS Mal Configurado	Permite requisições de origens não confiáveis.

5. Medidas de Segurança Aplicadas na API Invulnerável

Prática de Segurança	Implementação
Validação de Dados	Middleware usando bibliotecas como Joi ou express-validator.
Uso Correto do ORM	Consultas parametrizadas para evitar injeção.
Autenticação JWT Segura	Tokens com tempo de expiração e armazenamento seguro.
Hash de Senhas	Utilização de bcrypt para armazenamento seguro.
Headers de Segurança	Uso do Helmet para proteção básica.
Rate Limiting	Limitação de requisições para evitar ataques de força bruta.

6. Conclusão
A comparação prática entre as versões permitiu a identificação clara de falhas comuns em APIs e como solucioná-las com boas práticas. A versão segura serve como base de referência para futuros projetos que exijam segurança no desenvolvimento de sistemas web.

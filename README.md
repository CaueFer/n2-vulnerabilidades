Prevenção contra as vulnerabilidades apresentadas na primeira versão do código  

SQL Injection 

No backend da aplicação, utilizamos consultas SQL com placeholders (?), que impedem que entradas do usuário sejam interpretadas como parte da instrução SQL.   

```js
 const query1 = await pool.query(                        

    `  
    INSERT INTO usuario (nome, email, senha) 
    VALUES (?, ?, ?) 
    `, 
    [ 
      nome, 
      email, 
      senha 
    ] 
  ); 
```

O uso de ? como placeholders garante que o driver do MySQL trate os valores (nome, email, senha) como dados literais, não como comandos SQL. Assim, mesmo que o usuário tente injetar código malicioso, ele será interpretado apenas como texto, anulando a ameaça de SQL Injection



XSS (Cross-Site Scripting)

A função salvar() foi adaptada para proteger contra XSS com as seguintes medidas

```js
const nomeInput = document.getElementById('wl') as HTMLInputElement;
const resultado = document.getElementById('resultado');

if (nomeInput && resultado) {
  if (!nomeInput.value.trim()) {
    alert("Nome inválido.");
    return;
  }
  
  const nomeLimpo = DOMPurify.sanitize(nomeInput.value);

  resultado.innerText = nomeLimpo;
}
```
Sanitização com DOMPurify:
O conteúdo inserido pelo usuário é limpo, removendo tags perigosas como <script>, atributos onerror, etc

Evita innerHTML:
Em vez de usar innerHTML, que interpreta e executa scripts, usamos innerText, que exibe o texto como conteúdo simples

Validação:
Também foi incluída uma verificação para impedir envio de entradas em branco ou só com espaços



Prevenção contra as vulnerabilidades apresentadas na primeira versão do código  

SQL Injection 

No backend da aplicação, utilizamos consultas SQL com placeholders (?), que impedem que entradas do usuário sejam interpretadas como parte da instrução SQL.   

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


O uso de ? como placeholders garante que o driver do MySQL trate os valores (nome, email, senha) como dados literais, não como comandos SQL. Assim, mesmo que o usuário tente injetar código malicioso, ele será interpretado apenas como texto, anulando a ameaça de SQL Injection. 

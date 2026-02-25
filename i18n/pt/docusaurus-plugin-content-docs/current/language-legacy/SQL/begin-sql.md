---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Begin SQL.Summary-->Begin SQL é uma palavra chave que permite indicar no editor de métodos o inicio de uma sequência de comandos SQL que deve ser interpretada pela fonte de dados atual do processo (o motor SQL integrado de 4D ou toda fonte especificada através o comando [SQL LOGIN](sql-login.md "SQL LOGIN")).<!-- END REF-->  
  
Uma sequência de comandos SQL começa por Begin SQL e deve terminar com a palavra chave [End SQL](end-sql.md "End SQL")  
  
Estas palavras chaves funcionam dessa forma:

* Pode colocar uno ou mais blocos de etiquetas **Begin SQL/End SQL** no mesmo método. Pode gerar métodos totalmente compostos por código SQL ou misturar código 4D e código SQL no mesmo método.
* Pode escrever varias *instruções SQL* na mesma linha ou em diferentes linhas separando as instruções com um ponto-e-vírgula “;”. Por exemplo, pode escrever:

```4d
 Begin SQL
    INSERT INTO SALESREPS (NOME, IDADE) VALUES (‘Henry’,40);
    INSERT INTO SALESREPS (NOME, IDADE) VALUES (‘Bill’,35)
 End SQL
```

ou:

```4d
 Begin SQL
    INSERT INTO SALESREPS (NOME, IDADE) VALUES (‘Henry’,40);INSERT INTO SALESREPS (NOME, IDADE) VALUES (‘Bill’,35)
 End SQL
```

Note que o *Depurador* 4D avaliará o código SQL linha por linha. Em alguns casos, pode ser melhor utilizar mais de uma linha.

## Ver também 

[End SQL](../commands/end-sql)  
[SQL Get current data source](../commands/sql-get-current-data-source)  
[SQL LOGIN](../commands/sql-login)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 948 |
| Thread-seguro | yes |



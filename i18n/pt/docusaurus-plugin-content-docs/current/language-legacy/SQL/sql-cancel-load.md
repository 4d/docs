---
id: sql-cancel-load
title: SQL CANCEL LOAD
slug: /commands/sql-cancel-load
displayed_sidebar: docs
---

<!--REF #_command_.SQL CANCEL LOAD.Syntax-->**SQL CANCEL LOAD**<!-- END REF-->
<!--REF #_command_.SQL CANCEL LOAD.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2004|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SQL CANCEL LOAD.Summary-->O comando SQL CANCEL LOAD finaliza a solicitação *SELECT* atual e inicializa os parâmetros.<!-- END REF-->  
  
Este comando se utiliza para executar varias pedidos *SELECT* dentro da mesma conexão (ou seja o mesmo cursor) iniciada pelo comando [SQL LOGIN](../commands/sql-login). 

## Exemplo 

Neste exemplo, duas petições são executadas na mesma conexão: 

```4d
 var Meublob : Blob
 var MeuTexto : Text
 SQL LOGIN("mysql";"root";"")
 
 SQLStmt:="SELECT blob_field FROM app_testTable"
 SQL EXECUTE(SQLStmt;Myblob)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
 
  //Reinicialização do cursor
 SQL CANCEL LOAD
 
 SQLStmt:="SELECT Nome FROM Empregado"
 SQL EXECUTE(SQLStmt;MyText)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
```

## Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável sistema OK retorna 1\. Do contrário, devolve 0.

## Ver também 

[SQL LOAD RECORD](../commands/sql-load-record)  
[SQL LOGIN](../commands/sql-login)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 824 |
| Thread-seguro | no |
| Modificar variáveis | OK |



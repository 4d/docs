---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
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

<!--REF #_command_.SQL LOGOUT.Summary-->O comando SQL LOGOUT fecha a conexão com uma fonte ODBC aberta no processo atual (se aplicado).<!-- END REF--> Se não há conexão ODBC aberta, o comando não faz nada.

## Variáveis e conjuntos do sistema 

Se o logout é feito corretamente, a variável Sistema OK assume o valor 1; do contrário, assume o valor 0\. Pode interceptar este erro com a ajuda de um método instalado pelo comando [ON ERR CALL](../commands/on-err-call)

## Ver também 

[SQL LOGIN](../commands/sql-login)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 872 |
| Thread-seguro | no |
| Modificar variáveis | OK, error |



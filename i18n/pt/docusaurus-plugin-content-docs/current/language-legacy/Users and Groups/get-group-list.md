---
id: get-group-list
title: GET GROUP LIST
slug: /commands/get-group-list
displayed_sidebar: docs
---

<!--REF #_command_.GET GROUP LIST.Syntax-->**GET GROUP LIST** ( *nomGrupos* : Text array ; *numGrupos* : Integer array )<!-- END REF-->
<!--REF #_command_.GET GROUP LIST.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomGrupos | Text array | &#8592; | Nomes dos grupos como aparecem na janela de editor de senhas |
| numGrupos | Integer array | &#8592; | Números de ID de grupo correspondentes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.GET GROUP LIST.Summary-->GET GROUP LIST preenche os arrays *nomGrupos e numGrupos* com os nomes e os números de referência únicos dos grupos tais como aparecem no editor de senhas.<!-- END REF-->  
  
O array *numGrupos*, sincronizado com o array *nomGrupos*, se preenche com os números de referência únicos dos grupos. 

* Nos bancos de dados projeto, esses números começam em 15001 e são atribuidos dinamicamente ao início e são mantidos durante a sessão.
* Nos bancos de dados binários, esses números são armazenados e pertencem a uma faixa específica, segundo o criador do grupo. Para saber mais consulte o parágrafo *User and group ID ranges*.

## Gestão de erros 

Se não tiver privilégios de acesso para chamar ao comando GET GROUP LIST ou se outro processo já estiver aberto no sistema de senhas, um erro de privilégios de acesso é gerado. Pode interceptar este erro com um método de gestão de erros instalado por [ON ERR CALL](../commands/on-err-call).

## Ver também 

[GET GROUP PROPERTIES](../commands/get-group-properties)  
[GET USER LIST](../commands/get-user-list)  
[Set group properties](../commands/set-group-properties)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 610 |
| Thread-seguro | no |
| Modificar variáveis | error |



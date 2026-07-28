---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *um* : Boolean ; *muitos* : Boolean )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| um | Boolean | &#8592; | Estado de todas as relações Muitos a Um |
| muitos | Boolean | &#8592; | Estado de todas as relações Um a Muitos |
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

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->O comando GET AUTOMATIC RELATIONS lhe permite saber se o estado automático/manual de todas as relações manuais Muitos a Um e Um a Muitos do banco tenham sido modificadas no processo atual.<!-- END REF-->

* *um*: este parâmetro devolve [True](../commands/true) se uma chamada anterior ao comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") torna automáticas todas as relações manuais Muitos a Um, por exemplo SET AUTOMATIC RELATIONS(True;False).
Este parâmetro devolve [False](../commands/false) se o comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") não foi chamado ou se sua execução prévia não modificou as relações manuais Muitos a Um, por exemplo SET AUTOMATIC RELATIONS(False;False). 
* *muitos*: este parâmetro devolve [True](../commands/true) se a chamada prévia ao comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") torna automática todas as relações manuais Um a Muitos, por exemplo SET AUTOMATIC RELATIONS(True;True).
Este parâmetro devolve [False](../commands/false) se o comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS") não foi chamado ou se sua execução prévia não modificou as relações manuais Um a Muitos, por exemplo SET AUTOMATIC RELATIONS(True;False).

## Exemplo 

Consulte o exemplo do comando [GET FIELD RELATION](get-field-relation.md "GET FIELD RELATION").

## Ver também 

[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 899 |
| Thread-seguro | yes |



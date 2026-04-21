---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* : Time ; *offset* : Real {; *ancora* : Integer} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referência de documento |
| offset | Real | &#8594; | Posição de arquivo (expresso em bytes) |
| ancora | Integer | &#8594; | 1 = em relação ao começo do arquivo 2= em relação ao final do arquivo 3= em relação a posição atual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL Release 3|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->Este comando funciona apenas em um documento aberto cujo número de referência é passado em *docRef*.<!-- END REF-->

SET DOCUMENT POSITION define a posição que se passa em *offset* onde ocorrerá a próxima leitura ([RECEIVE PACKET](../commands/receive-packet)) ou escrita ([SEND PACKET](../commands/send-packet)).  

Se omite o parâmetro opcional *ancora*, a posição é relativa ao início do documento. Se especificar o parâmetro *ancora*, passe um dos valores listados anteriormente.  
  
 Dependendo da âncora pode passar valores positivos ou negativos em offset.

## Ver também 

[Get document position](../commands/get-document-position)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 482 |
| Thread-seguro | yes |



---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* : Time ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referência de documento |
| Resultado | Real | &#8592; | Posição do arquivo (expressa em bytes) a partir do início do arquivo |
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

<!--REF #_command_.Get document position.Summary-->Este comando apenas funciona em um documento aberto cujo número de referência se passa no parâmetro *docRef*.<!-- END REF--> 

Get document position devolve a posição, a partir do início do documento, onde ocorrerá a próxima leitura ([RECEIVE PACKET](../commands/receive-packet)) ou escrita ([SEND PACKET](../commands/send-packet)).

## Ver também 

[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 481 |
| Thread-seguro | yes |



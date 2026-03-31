---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* : Time )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docRef | Time | &#8594; | Número de referência de documento |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->CLOSE DOCUMENT fecha o documento especificado por *docRef*.<!-- END REF-->  
  
Fechar um documento é a única forma de garantir que os dados escritos no arquivo sejam guardados. Deve fechar todos os documentos abertos com os comandos [Open document](../commands/open-document), [Create document](../commands/create-document) ou [Append document](../commands/append-document)..

## Exemplo 

O exemplo abaixo permite ao usuário criar um novo documento, escreva a string "Olá" e fecha o documento: 

```4d
 var vhDocRef : Time
 vhDocRef:=Create document("")
 If(OK=1)
    SEND PACKET(vhDocRef;"Hola") // Escreva uma palavra no documento
    CLOSE DOCUMENT(vhDocRef) // Fecha o documento
 End if
```

## Ver também 

[Append document](../commands/append-document)  
[Create document](../commands/create-document)  
[Open document](../commands/open-document)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 267 |
| Thread-seguro | yes |



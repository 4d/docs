---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *documento* ; *etiqueta* {; *atribNomesArray* ; *attribValuesArray*} {; *atribNomesArray2* ; *attribValuesArray2* ; ... ; *atribNomesArrayN* ; *attribValuesArrayN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referência do documento aberto |
| etiqueta | Text | &#8594;  | Nome do elemento a abrir |
| atribNomesArray | Text array | &#8594;  | Array de nomes de atributo |
| attribValuesArray | Text array, Integer array, Date array, Real array, Picture array, Boolean array | &#8594;  | Array of attribute values |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->O comando SAX OPEN XML ELEMENT ARRAYS permite adicionar um novo elemento no documento XML cuja referência se passa em document como também, opcionalmente, atributos e seus valores em forma de arrays.<!-- END REF-->  

Exceto pela compatibilidade com arrays (ver a continuação), este comando es idêntico a [SAX OPEN XML ELEMENT](sax-open-xml-element.md). Por favor consulte a descrição deste comando para maior informação sobre seu funcionamento.  
  
SAX OPEN XML ELEMENT ARRAYS aceita arrays de tipo data, numéricos, booleanos e imagem como parâmetros arrayValoresAtrib. 4D automaticamente realiza todas as conversões necessárias; pode configurar estas conversões utilizando o comando [XML SET OPTIONS](xml-set-options.md).  
  
Opcionalmente, o comando SAX OPEN XML ELEMENT ARRAYS permite passar pares de atributos e de valores de atributos em forma de arrays nos parâmetros *arrayNomsAtrib e arrayValoresAtrib*.  
  
Os arrays devem ter sido criados previamente e funcionar em pares de valor atributo/atributo. Pode passar tantos pares de arrays e elementos em cada par quantos queira.

#### Exemplo 

O método abaixo: 

```4d
 ARRAY STRING(80;aNomsAtrib;2)
 ARRAY STRING(80;aValoresAtrib;2)
 vElement:="Livro"
 aNomsAtrib{1}:="Font"
 aValoresAtrib{1}:="Arial"
 aNomsAtrib{2}:="Style"
 aValoresAtrib{2}:="Bold"
 SAX OPEN XML ELEMENT ARRAYS($DocRef;vElemento;tNomsAtrib;tValoresAtrib)
```

... escreverá no documento: 

```XML
<Book Font="Arial" Style="Bold">
```

#### Ver também 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  
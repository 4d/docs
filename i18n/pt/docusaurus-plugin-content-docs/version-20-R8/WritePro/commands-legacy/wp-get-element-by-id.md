---
id: wp-get-element-by-id
title: WP Get element by ID
slug: /WritePro/commands/wp-get-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.WP Get element by ID.Syntax-->**WP Get element by ID** ( *wpDoc* ; *ID* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get element by ID.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| ID | Text | &#8594;  | Identificador do elemento a recuperar |
| Resultado | Object | &#8592; | elemento 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get element by ID.Summary-->O comando **WP Get element by ID** devolve um objeto que contenha o elemento de *wpDoc* passado no parâmetro *ID*.<!-- END REF--> 

No parâmetro *wpDoc*, passe o documento 4D Write Pro.

Passe o atributo ID do elemento para recuperá-lo no parâmetro *ID*. O elemento pode estar dentro do documento, como uma imagem, um parágrafo, uma tabela, uma fila, etc., ou o documento em si. Se nenhum elemento do documento tiver a ID especificada, se devolve um valor nulo.

**Nota**: o valor do parâmetro ID é sensível às maiúsculas e minúsculas.

#### Exemplo 1 

Para obter a imagem com o ID "img1":

```4d
 var obImage : Object
 obImage:=WP Get element by ID(myDoc;"img1")
```

#### Exemplo 2 

Se quiser encontrar um elemento de tabela e modificá-lo para que tenha uma borda roxa grande:

```4d
 var $element : Object
 $element:=WP Get element by ID(myDoc;"Table1")
 WP SET ATTRIBUTES($element;wk border style;wk solid)
 WP SET ATTRIBUTES($element;wk border width;"4px")
 WP SET ATTRIBUTES($element;wk border color;"purple")
```

#### Exemplo 3 

Se quiser recuperar um elemento e modificar seu ID:

```4d
 $colTable:=WP Create table range([INFO]Sample)
 $elements:=WP Get elements($colTable)
 $elem:=WP Get element by ID([INFO]Sample;"Paris")
 If($elem#Null)
    $elem.ID:="Lyon"
 End if
```

#### Ver também 

[WP Get elements](wp-get-elements.md)  
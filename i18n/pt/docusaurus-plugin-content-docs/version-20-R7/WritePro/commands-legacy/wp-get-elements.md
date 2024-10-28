---
id: wp-get-elements
title: WP Get elements
slug: /WritePro/commands/wp-get-elements
displayed_sidebar: docs
---

<!--REF #_command_.WP Get elements.Syntax-->**WP Get elements** ( *objAlvo* {; *tipoElemento*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get elements.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objAlvo | Object | &#8594;  | Intervalo ou referência de elemento ou documento 4D Write Pro |
| tipoElemento | Integer | &#8594;  | Tipo desejado de elemento a recuperar |
| Resultado | Collection | &#8592; | Coleção que contém os elementos de referência |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get elements.Summary-->O comando **WP Get elements** devolve uma coleção de objetos que contém parágrafos, imagens, tabelas ou referências de filas.<!-- END REF-->

No parâmetro *objIntervalo*, pode passar:

* um intervalo, ou
* uma referência de elemento (tabela / fila / parágrafo / corpo / cabeçalho / rodapé/seção/subseção / caixa de texto), ou
* um documento 4D Write Pro

**Nota:** se passar uma subseção em *objAlvo*, o comando retorna os elementos na seção pai.

Se passar um intervalo digitado ou uma referência, o comando devolverá uma coleção que só contém elementos de tipo correspondente (a menos que especifique um tipo com o parâmetro *tipoElemento*, ver abaixo). Do contrário, o comando devolve uma coleção que contenha todos os elementos disponíveis em *obIntervalo*.

Opcionalmente, pode passar o parâmetro *tipoElemento* para especificar os tipos de elementos a devolver na coleção. Os tipos abaixo estão disponíveis:

| Constante              | Valor | Comentário                                                                 |
| ---------------------- | ----- | -------------------------------------------------------------------------- |
| wk type default        | 0     | Tipo de faixa (valor de wk type)                                           |
| wk type image          | 2     | Imagem ancorada (valor para wk type)                                       |
| wk type image anchored | 200   | Referência de imagem ancorada para objetos de documento                    |
| wk type image inline   | 100   | Referência de imagem Inline (inserida no texto) para objetos de documentos |
| wk type paragraph      | 1     | Range tipo parágrafo (valor para wk type)                                  |
| wk type table          | 4     | Referência de tabela (valor para wk type)                                  |
| wk type table row      | 5     | Referência linha Tabela (valor para wk type)                               |
| wk type text box       | 300   |                                                                            |

**Nota:**

* Se passar o seletor wk type default, o comando devolve uma coleção não filtrada.
* Se passar o seletor wk type paragraph, wk type image ou wk type table, a coleção devolvida conterá só elementos do tipo dado, mesmo se for diferente do tipo especificado no parâmetro *tipoElemento*.
* Se um intervalo passado em *targetObj* conter um elemento que não esteja completamente contido dentro do intervalo, o elemento completo se incluirá nos resultados. Por exemplo, se o intervalo inclui parte de uma tabela (mas não de toda a tabela), se devolve a referência para todo elemento da tabela, entretanto, só são incluídas as referências de célula (parágrafo) dentro do intervalo.
* Se passar wk type text box no parâmetro tipoElemento, targetObj pode conter um documento 4D Write Pro. Um erro é devolvido se passar qualquer coisa que não seja um objeto documento em targetObj neste caso.

##### Como elementos são ordenados 

Os elementos na coleção retornada são ordenados de forma diferente dependendo do conteúdo de *objAlvo*:

* Se passar uma range (faixa de seleção) ou uma referência de elemento em *objAlvo* (parágrafo, tabela, corpo, cabeçalho, rodapé...), os elementos na coleção são ordenados na ordem do fluxo do documento (na mesma ordem em que aparecem no documento)
* Se passar um documento 4D Write Pro em *objAlvo*, como são devolvidos todas as áreas do documento, os elementos na coleção são ordenados por seu ID (exceto as imagens ancoradas quando usar o parâmetro wk type image anchored: nesse caso, são ordenadados pela ordem z). Os elementos online de tipo tipoElemento presentes nas caixas de texto (se houver) são devolvidas ao final da coleção.

Se quiser alternar a cor de fundo para parágrafos na parte de corpo de um documento, precisa passar o elemento de corpo em *objAlvo*, e não o documento, para ter certeza que a ordem de elementos na coleção corresponda à ordem de parágrafo de documento.

#### Exemplo 1 

Se quiser devolver uma coleção de todos os parágrafos em um documento:

```4d
 var $docElements : Collection
 $docElements:=WP Get elements($myDoc;wk type paragraph)
  //devolve uma coleção que contém só elementos de parágrafo
```

#### Exemplo 2 

Se quiser alternar a alinhação e a cor dos parágrafos em um documento: 

```4d
 var $col : Collection
 var $obj : Object
 var $body : Object
 var $i;$n : Integer
 $col:=New collection
 $body:=WP Get body(myDoc)
 $col:=WP Get elements($body;wk type paragraph)
 $i:=0
 $n:=$col.length
 For($i;0;$n-1)
    $obj:=$col[$i]
    WP RESET ATTRIBUTES($obj)
    WP SET ATTRIBUTES($obj;wk font bold;wk false)
    WP SET ATTRIBUTES($obj;wk font italic;wk false)
    If($i%2=0)
       WP SET ATTRIBUTES($obj;wk text align;wk left)
       WP SET ATTRIBUTES($obj;wk font bold;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#804040")
       WP SET ATTRIBUTES($obj;wk margin right;"5cm")
       WP SET ATTRIBUTES($obj;wk margin left;"1cm")
    Else
       WP SET ATTRIBUTES($obj;wk text align;wk right)
       WP SET ATTRIBUTES($obj;wk font italic;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#404020")
       WP SET ATTRIBUTES($obj;wk margin left;"5cm")
       WP SET ATTRIBUTES($obj;wk margin right;"1cm")
    End if
 End for
```

#### Ver também 

[WP Get breaks](wp-get-breaks.md)  
[WP Get element by ID](wp-get-element-by-id.md)  
[WP Table range](wp-table-range.md)  
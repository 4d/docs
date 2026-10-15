---
id: object-get-padding
title: OBJECT Get padding
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get padding.Syntax-->**OBJECT Get padding** ( * ; *object* : Text ) : Object<br/>**OBJECT Get padding** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT Get padding.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, object é um nome de objeto (cadeia)<br/>Se omitido, object é uma variável ou campo |
| object | Text, Variable, Field | &#8594; | Nome de objeto (se * for especificado) ou<br/>variável ou campo (se * for omitido) |
| Resultado | Object | &#8592; | Valores de preenchimento |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>Histórico</summary>

| Versão | Alterações |
| --- | --- |
| 21 R5 | Criado |

</details>

</div>

## Descrição

<!--REF #_command_.OBJECT Get padding.Summary-->O comando **OBJECT Get padding** retorna um objeto contendo os valores de preenchimento atuais do objeto designado pelos parâmetros *object* e *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, isso indica que o parâmetro *object* é um nome de objeto (uma cadeia). Se não passar esse parâmetro, isso indica que *object* é uma variável ou um campo. Nesse caso, passe uma referência de variável ou campo em vez de uma cadeia.

**Nota:** Se aplicar este comando a um conjunto de objetos, apenas os valores de preenchimento do último objeto serão retornados.

O objeto retornado contém as seguintes propriedades:

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| `top` | Integer | Preenchimento entre o conteúdo e a borda superior |
| `bottom` | Integer | Preenchimento entre o conteúdo e a borda inferior |
| `left` | Integer | Preenchimento entre o conteúdo e a borda esquerda |
| `right` | Integer | Preenchimento entre o conteúdo e a borda direita |

Os valores de preenchimento são expressos em pixels.

O preenchimento pode ser recuperado para os seguintes tipos de objetos de formulário:

* [áreas de texto](../../FormObjects/text.md),
* [áreas de entrada](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [colunas de list box](../../FormObjects/listbox-column.md),
* [cabeçalhos](../../FormObjects/properties_Headers.md) e [rodapés de list box](../../FormObjects/properties_Footers.md).

Para list boxes, colunas de list box e seus cabeçalhos e rodapés, os valores `top` e `bottom` retornados são iguais, assim como os valores `left` e `right`.

## Exemplo

```4d 

var $currentPadding:=OBJECT Get padding(*; "My Input")
// $currentPadding = {"left":10,"right":15,"top":20,"bottom":35}

```


## Veja também

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1866 |
| Thread-safe | no |
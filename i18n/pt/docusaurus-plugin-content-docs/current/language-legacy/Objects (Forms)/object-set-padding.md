---
id: object-set-padding
title: OBJECT SET PADDING
slug: /commands/object-set-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PADDING.Syntax-->**OBJECT SET PADDING** ( * ; *object* : Text ; *padding* : Object )<br/>**OBJECT SET PADDING** ( *object* : Variable, Field ; *padding* : Object )<!-- END REF-->

<!--REF #_command_.OBJECT SET PADDING.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Se especificado, object é um nome de objeto (cadeia)<br/>Se omitido, object é uma variável ou campo |
| object | Text, Variable, Field | &#8594; | Nome de objeto (se * for especificado) ou<br/>variável ou campo (se * for omitido) |
| padding | Object | &#8594; | Valores de preenchimento |

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

<!--REF #_command_.OBJECT SET PADDING.Summary-->O comando **OBJECT SET PADDING** define o preenchimento do(s) objeto(s) designado(s) pelos parâmetros *object* e *\**.<!-- END REF-->

Se passar o parâmetro opcional *\**, isso indica que o parâmetro *object* é um nome de objeto (uma cadeia). Se não passar esse parâmetro, isso indica que *object* é uma variável ou um campo. Nesse caso, passe uma referência de variável ou campo em vez de uma cadeia.

Em *padding*, passe um objeto que contenha as seguintes propriedades:

| Propriedade | Tipo | Descrição |
| --- | --- | --- |
| `top` | Integer | Preenchimento entre o conteúdo e a borda superior |
| `bottom` | Integer | Preenchimento entre o conteúdo e a borda inferior |
| `left` | Integer | Preenchimento entre o conteúdo e a borda esquerda |
| `right` | Integer | Preenchimento entre o conteúdo e a borda direita |

Todas as propriedades são opcionais. Se uma propriedade for omitida, seu valor atual permanecerá inalterado.

Os valores de preenchimento são expressos em pixels. Se um valor negativo for atribuído, o preenchimento efetivo será definido como 0.

O preenchimento pode ser aplicado aos seguintes tipos de objetos de formulário:

* [áreas de texto](../../FormObjects/text.md),
* [áreas de entrada](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [colunas de list box](../../FormObjects/listbox-column.md),
* [cabeçalhos](../../FormObjects/properties_Headers.md) e [rodapés de list box](../../FormObjects/properties_Footers.md).

Para list boxes, colunas de list box e seus cabeçalhos e rodapés, o mesmo objeto *padding* é usado, mas apenas os valores `top` e `left` são levados em conta na renderização:

- `top` é aplicado como preenchimento superior e inferior,
- `left` é aplicado como preenchimento esquerdo e direito.

## Exemplo

```4d 
var $padding:={top: 20; left: 10}
OBJECT SET PADDING(*; "List box"; $padding)
```

O valor `top` é aplicado ao preenchimento superior e inferior, enquanto o valor `left` é aplicado ao preenchimento esquerdo e direito.

## Veja também

[OBJECT Get padding](../commands/object-get-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1865 |
| Thread-safe | no |
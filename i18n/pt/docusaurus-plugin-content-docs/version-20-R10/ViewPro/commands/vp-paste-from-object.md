---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Integer} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Parâmetro  | Tipo    |    | Descrição                          |                  |
| ---------- | ------- | -- | ---------------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objeto intervalo de células        |                  |
| dataObject | Object  | -> | Objeto que contém os dados a colar |                  |
| options    | Integer | -> | Especifica o que é colado          | <!-- END REF --> |

## Descrição

O comando `VP PASTE FROM OBJECT` <!-- REF #_method_.PASTE FROM OBJECT.Summary -->cola o conteúdo, o estilo e as fórmulas armazenadas em *dataObject* no objeto *rangeObj*<!-- END REF -->.

In *rangeObj*, pass the cell range object where the values, formatting, and/or formula cells will be pasted. Se *rangeObj* se refere a mais de uma célula, apenas a primeira é usada.

In *dataObject*, pass the object that contains the cell data, formatting, and formulas to be pasted.

Na opção opcional *options*, você pode especificar o que colar no intervalo de células. Valores possíveis:

|Constant|Description|
\|---|---|---|
|`vk clipboard options all`|Pastes all data objects, including values, formatting, and formulas.|
|`vk clipboard options formatting`|Pastes only the formatting.|
|`vk clipboard options formulas`|Pastes only the formulas.|
|`vk clipboard options formulas and formatting`|Pastes formulas and formatting.|
|`vk clipboard options values`|Pastes only values.|
|`vk clipboard options value and formatting`|Pastes values and formatting.|

As opções de colagem definidas nas [opções de workbook](#vp-set-workbook-options) são tomadas em conta.

If *options* refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

## Exemplo

Veja o exemplo de [VP Copy to object](vp-copy-to-object.md)

## Veja também

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
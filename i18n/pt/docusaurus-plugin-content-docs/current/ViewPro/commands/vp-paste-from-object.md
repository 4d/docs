---
id: vp-paste-from-object
title: VP PASTE FROM OBJECT
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R4 | Adicionado |

</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->

**VP PASTE FROM OBJECT** ( _rangeObj_ : Object ; _dataObject_ : Object {; _options_ : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| Parâmetro  | Tipo    |    | Descrição                          |                  |
| ---------- | ------- | -- | ---------------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objeto intervalo de células        |                  |
| dataObject | Object  | -> | Objeto que contém os dados a colar |                  |
| options    | Longint | -> | Especifica o que é colado          | <!-- END REF --> |

#### Descrição

The `VP PASTE FROM OBJECT` command <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pastes the contents, style and formulas stored in _dataObject_ to the _rangeObj_ object<!-- END REF -->.

In _rangeObj_, pass the cell range object where the values, formatting, and/or formula cells will be pasted. If _rangeObj_ refers to more than one cell, only the first one is used.

In _dataObject_, pass the object that contains the cell data, formatting, and formulas to be pasted.

In the optional _options_ parameter, you can specify what to paste in the cell range. Valores possíveis:

|Constant|Description|
\|---|---|---|
|`vk clipboard options all`|Pastes all data objects, including values, formatting, and formulas.|
|`vk clipboard options formatting`|Pastes only the formatting.|
|`vk clipboard options formulas`|Pastes only the formulas.|
|`vk clipboard options formulas and formatting`|Pastes formulas and formatting.|
|`vk clipboard options values`|Pastes only values.|
|`vk clipboard options value and formatting`|Pastes values and formatting.|

The paste options defined in the [workbook options](vp-set-workbook-options.md) are taken into account.

If _options_ refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

#### Exemplo

See example the example from [VP Copy to object](vp-copy-to-object.md)

#### Veja também

[VP Copy to object](vp-copy-to-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

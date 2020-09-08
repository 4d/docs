---
id: propertiesPrint
title: 印刷
---

---
## 印刷時可変

このプロパティは、レコードの中身に応じてサイズが変化しうるオブジェクトの印刷モードを管理します。 これらのオブジェクト固定長フレームまたは可変長フレームでの印刷を設定することができます。 固定長フレームオブジェクトは、フォーム上でオブジェクト作成するように、オブジェクトのサイズの制限内で印刷をします。 可変長フレームオブジェクトはオブジェクトの中身をすべて印刷するために、印刷時に展開します。 可変サイズとして印刷されるオブジェクト幅 (オブジェクトプロパティによって定義) はこのオプションによって影響はされないという点に注意してください。オブジェクトの中身に応じて、高さのみが変化します。

フォーム内において複数の可変長フレームを隣同士に配置することはできません。 非可変長フレームオブジェクトであれば、可変サイズで印刷されるオブジェクトのどちら側でも配置することができます。ただし、可変長フレームオブジェクトが最低でも横のオブジェクトより一行分長く、すべてのオブジェクトが上揃えで配置されていなければなりません。 この条件が遵守されない場合、可変長フレームオブジェクトの水平方向の部分ごとに、ほかのフィールドのコンテンツが繰り返されます。

> `Print object` と `Print form` コマンドはこのプロパティをサポートしません。


The print options are:

- **Variable** option / **Print Variable Frame** checked: 4D enlarges or reduces the form object area in order to print all the subrecords.

- **Fixed (Truncation)** option / **Print Variable Frame** unchecked: 4D only prints the contents that appear in the object area. The form is only printed once and the contents not printed are ignored.

- **Fixed (Multiple Records)** (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records.

> This property can be set by programming using the `OBJECT SET PRINT VARIABLE FRAME` command.


#### JSON 文法

|     名      | データタイプ | とりうる値                                               |
|:----------:|:------:| --------------------------------------------------- |
| printFrame | string | "fixed", "variable", (subform only) "fixedMultiple" |


#### 対象オブジェクト

[Input](input_overview.md) - [Subforms](subform_overview.md) (list subforms only) - [4D Write Pro areas](writeProArea_overview.md)

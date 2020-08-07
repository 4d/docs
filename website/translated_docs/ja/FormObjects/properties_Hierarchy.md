---
id: propertiesHierarchy
title: Hierarchy
---

---
## 階層リストボックス
`Array type list boxes`

このプロパティを使用してリストボックスの階層表示を設定します。 JSON フォームにおいては、[*dataSource* プロパティの値が array であるときに](properties_Object.md#階層リストボックス)、この機能が利用可能になります。

*階層リストボックス* オプションが選択されると、追加オプションである **Variable 1...10** が利用可能になります。これらには階層の各レベルとして使用するデータソース (*dataSource*) 配列を指定します。 入力欄に値が入力されると、新しい入力欄が追加されます。 10個までの変数を指定できます。 これらの変数は先頭列に表示される階層のレベルを設定します。

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)



#### JSON 文法

| 名          | データタイプ       | とりうる値                                            |
| ---------- | ------------ | ------------------------------------------------ |
| datasource | string array | Collection of array names defining the hierarchy |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)

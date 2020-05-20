---
id: onBeforeDataEntry
title: On Before Data Entry
---

| Code | Can be called by                                                                                                  | Definition                                         |
| ---- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 41   | [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | A list box cell is about to change to editing mode |


## 説明

This event is generated just before a cell in the list box is edited (before the entry cursor is displayed). This event allows the developer, for example, to display a different text depending on whether the user is in the display or edit mode.

When the cursor arrives in the cell, the `On Before Data Entry` event is generated in the list box or column method.

- このイベントのコンテキストにおいて、$0 に -1 を設定すると、そのセルは入力不可として扱われます。 **Tab** や **Shift+Tab** が押された後にイベントが生成された場合には、フォーカスはそれぞれ次あるいは前のセルに移動します。
- $0 が -1 でなければ (デフォルトは 0)、列は入力可であり編集モードに移行します。

See also [Managing entry](FormObjects/listbox_overview.md#managing-entry) section.
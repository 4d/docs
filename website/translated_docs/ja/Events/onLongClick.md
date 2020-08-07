---
id: onLongClick
title: On Long Click
---

| Code | Can be called by                      | Definition                                                                           |
| ---- | ------------------------------------- | ------------------------------------------------------------------------------------ |
| 39   | [ボタン](FormObjects/button_overview.md) | A button is clicked and the mouse button remains pushed for a certain length of time |


## 説明

This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences.

This event can be generated for the following button styles:

- [ツールバー](FormObjects/button_overview.md#toolbar)
- [ベベル](FormObjects/button_overview.md#bevel)
- [角の丸いベベル](FormObjects/button_overview.md#rounded-bevel)
- [OS Xグラデーション](FormObjects/button_overview.md#os-x-gradient)
- [OS Xテクスチャー](FormObjects/button_overview.md#os-x-textured)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [ヘルプ](FormObjects/button_overview.md#help)
- [サークル](FormObjects/button_overview.md#circle)
- [カスタム](FormObjects/button_overview.md#custom)

This event is generally used to display pop-up menus in case of long button clicks. The [`On Clicked`](onClicked.md) event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.

### 参照
[`On Alternative Click`](onAlternativeClick.md)
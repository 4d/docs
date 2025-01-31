---
id: onLongClick
title: On Long Click
---

| コード | 呼び出し元                                 | 定義                                |
| --- | ------------------------------------- | --------------------------------- |
| 39  | [ボタン](FormObjects/button_overview.md) | ボタンがクリックされ、特定の時間以上マウスボタンが押され続けている |

## 説明

このイベントはボタンがクリックされ、一定時間以上マウスボタンが押され続けていると生成されます。 理論上、このイベントが生成されるためのクリック保持時間は、システムの環境設定に設定されたダブルクリックの間隔最大時間に等しくなります。

このイベントは、次のボタンスタイルで生成することができます:

- [ツールバー](FormObjects/button_overview.md#ツールバー)
- [ベベル](FormObjects/button_overview.md#ベベル)
- [角の丸いベベル](FormObjects/button_overview.md#角の丸いベベル)
- [OS Xグラデーション](FormObjects/button_overview.md#os-xグラデーション)
- [OS Xテクスチャー](FormObjects/button_overview.md#os-xテクスチャー)
- [Office XP](FormObjects/button_overview.md#office-xp)
- [ヘルプ](FormObjects/button_overview.md#ヘルプ)
- [サークル](FormObjects/button_overview.md#サークル)
- [カスタム](FormObjects/button_overview.md#カスタム)

このイベントは一般的に、ロングクリック時にポップアップメニューを表示するために使用します。 ユーザーがロングクリックが有効になる時間前にマウスボタンを離すと、[`On Clicked`](onClicked.md) イベントが (有効であれば) 生成されます。

### 参照

[`On Alternative Click`](onAlternativeClick.md)

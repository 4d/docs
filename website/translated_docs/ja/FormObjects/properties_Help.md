---
id: propertiesHelp
title: ヘルプ
---

---
## ヘルプTips

このプロパティで、フォーム上のアクティブオブジェクトにヘルプTip を付加することができます。 ランタイムにおいてマウスがオブジェクト上にあるとき、ヘルプメッセージが Tip として表示されます:

![](assets/en/FormObjects/property_helpTip.png)

> - **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv18/4D/18/SET-DATABASE-PARAMETER.301-4505363.ja.html)** コマンドの `Tips delay` および `Tips duration` セレクターを使用することで、Tips の表示遅延や最大表示時間を指定することができます。
> - **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv18/4D/18/SET-DATABASE-PARAMETER.301-4505363.ja.html)** コマンドの `Tips enabled` セレクターを使用することで、アプリケーション全体に対してヘルプTipsを有効化あるいは無効化することができます。

オブジェクトにヘルプメッセージを関連付けるには:

- 4D の [ヘルプTipエディター](https://doc.4d.com/4Dv18/4D/18/Help-tips.200-4575424.ja.html) であらかじめ作成したヘルプTip を指定します。
- または、プロパティリストに直接 Tip を文字列として入力します。 この方法では、XLIFF アーキテクチャーを利用することができます。 XLIFF参照を指定することで、アプリケーションの言語に応じたメッセージを表示させることができます (XLIFF についての詳細は [付録 B: XLIFFアーキテクチャー](https://doc.4d.com/4Dv18/4D/18/Appendix-B-XLIFF-architecture.300-4575737.ja.html) を参照ください)。 また、4D 参照を使用することもできます ([スタティックテキスト中で参照を使用する](https://doc.4d.com/4Dv18/4D/18/Using-references-in-static-text.300-4575714.ja.html) 参照)。
> macOS においては、Pop up window (32) 型のウィンドウはヘルプTips の表示ができません。


#### JSON 文法

|    名    | データタイプ | とりうる値       |
|:-------:|:------:| ----------- |
| tooltip |  text  | ユーザー用のヘルプ情報 |

#### 対象オブジェクト

[ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [コンボボックス](comboBox_overview.md) - [階層リスト](list_overview.md) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [ラジオボタン](radio_overview.md)


#### Other help features

オブジェクトにヘルプTip を関連付ける方法は他にもあります:

- at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. structure level (lowest priority)
2. form editor level
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)


#### 参照

[プレースホルダー](properties_Entry.md#placeholder)

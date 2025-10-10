---
id: propertiesHelp
title: ヘルプ
---

## ヘルプTips

このプロパティで、フォーム上のアクティブオブジェクトにヘルプTip を付加することができます。 ランタイムにおいてマウスがオブジェクト上にあるとき、ヘルプメッセージが Tip として表示されます:

![](../assets/en/FormObjects/property_helpTip.png)

> - **[SET DATABASE PARAMETER](../commands-legacy/set-database-parameter.md)** コマンドの `Tips delay` および `Tips duration` セレクターを使用することで、Tips の表示遅延や最大表示時間を指定することができます。
> - [**SET DATABASE PARAMETER**](../commands-legacy/set-database-parameter.md) コマンドのTips enabled セレクターを使用することで、アプリケーション全体に対してヘルプTipsを有効化あるいは無効化することができます。

これには、次の二つの方法があります:

- 4D の [ヘルプTip](https://doc.4d.com/4Dv20/4D/20.2/Help-tips.200-6750100.ja.html) エディターであらかじめ作成したヘルプTip を指定します。
- または、プロパティリストに直接 Tip を文字列として入力します。 この方法では、XLIFF アーキテクチャーを利用することができます。 XLIFF参照を指定することで、アプリケーションの言語に応じたメッセージを表示させることができます (XLIFF についての詳細は [付録 B: XLIFFアーキテクチャー](https://doc.4d.com/4Dv20/4D/20.2/Appendix-B-XLIFF-architecture.300-6750166.ja.html) を参照ください)。 また、4D 参照を使用することもできます ([スタティックテキスト中で参照を使用する](https://doc.4d.com/4Dv20/4D/20.2/Using-references-in-static-text.300-6750154.ja.html) 参照)。

> macOS においては、Pop up window (32) 型のウィンドウはヘルプTips の表示ができません。

#### JSON 文法

|    名称   | データタイプ | とりうる値       |
| :-----: | :----: | ----------- |
| tooltip |  text  | ユーザー用のヘルプ情報 |

#### 対象オブジェクト

[ボタン](button_overview.md) -
[ボタングリッド](buttonGrid_overview.md) -
[チェックボックス](checkbox_overview.md) -
[ドロップダウンリスト](dropdownList_Overview.md) -
[コンボボックス](comboBox_overview.md) -
[階層リスト](list_overview.md) -
[リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) -
[リストボックスフッター](listbox_overview.md#リストボックスフッター) -
[ピクチャーボタン](pictureButton_overview.md) -
[ピクチャーポップアップメニュー](picturePopupMenu_overview.md) -
[ラジオボタン](radio_overview.md)

#### 追加のヘルプ機能

オブジェクトにヘルプTip を関連付ける方法は他にも 2通りあります:

- データベースストラクチャーレベルにおいて設定することができます (フィールドのみ)。 この場合、当該フィールドが表示されるすべてのフォームにおいて、このヘルプTip が表示されます。 詳細については [フィールドプロパティ](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.ja.html#3367486) のヘルプTip の章を参照してください。
- **[OBJECT SET HELP TIP](../commands-legacy/object-set-help-tip.md)** コマンドを使用することで、カレントプロセスにおいて設定することが可能です。

同じオブジェクトに対して複数の Tip が関連づけられている場合には、次の優先順位に従って表示されます:

1. ストラクチャーレベル (最低優先度)
2. フォームエディターレベル
3. **[OBJECT SET HELP TIP](../commands-legacy/object-set-help-tip.md)** コマンド(最高優先度)

#### コマンド

[`OBJECT Get help tip`](../commands-legacy/object-get-help-tip.md) - [`OBJECT SET HELP TIP`](../commands-legacy/object-set-help-tip.md)

#### 参照

[プレースホルダー](properties_Entry.md#プレースホルダー)

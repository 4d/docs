---
id: formObjectsOverview
title: フォームオブジェクト
---

フォーム上のオブジェクトを編集することで、アプリケーションのフォームを構築しカスタマイズします。 オブジェクトの追加・配置、オブジェクトプロパティの設定、入力規制の追加によるビジネスルールの強化、操作に対して自動実行されるオブジェクトメソッドの追加などをおこなうことができます。

## アクティブオブジェクトとスタティックオブジェクト

4D フォームでは多くのビルトイン **アクティブ** オブジェクトおよび **スタティック** オブジェクトが提供されています:

- **アクティブオブジェクト** はインターフェース機能やデータベースタスクを実行します。 アクティブオブジェクトの種類は、 入力フィールド、コンボボックス、ドロップダウンリスト、ピクチャーボタンなど様々ですが、いずれもデータを表示したり、メモリに一時保存したり、ダイアログボックスを開く・レポートを印刷する・バックグラウンドプロセスを開始するなどの動作を実行したりします。 アクティブオブジェクトの種類は、 アクティブオブジェクトの種類は、 入力フィールド、コンボボックス、ドロップダウンリスト、ピクチャーボタンなど様々ですが、いずれもデータを表示したり、メモリに一時保存したり、ダイアログボックスを開く・レポートを印刷する・バックグラウンドプロセスを開始するなどの動作を実行したりします。
- **スタティックオブジェクト** (線、枠、背景ピクチャー等) は一般的に、フォームのアピアランスやラベル、グラフィックインターフェースを設定するために使用されます。 アクティブオブジェクトと異なり、スタティックオブジェクトには変数や式が割り当てられません。 しかし、スタティックオブジェクトにダイナミックオブジェクトを挿入することは可能です。

## オブジェクトの操作

4D フォームオブジェクトの追加や編集は次の方法でおこなえます:

- **[フォームエディター](FormEditor/formEditor.md):** ツールバーからオブジェクトをフォーム上にドラッグ＆ドロップします。 次に、プロパティリストでオブジェクトのプロパティを指定します。 次に、プロパティリストでオブジェクトのプロパティを指定します。

- **4D ランゲージ**: [`OBJECT DUPLICATE`](../commands/object-duplicate) or [`OBJECT SET FONT STYLE`](../commands/object-set-font-style) などの、`Objects (Forms)` テーマのコマンドを使用することでフォームオブジェクトを作成し、定義することができます。

- **ダイナミックフォーム内の JSON コード:** JSON を使ってプロパティを定義します。 [type](properties_Object.md#type) プロパティでオブジェクトタイプを定義し、提供されている他の [プロパティ](properties_Reference.md) のうち必要なものを設定します。
  次はボタンオブジェクトの例です: [type](properties_Object.md#type) プロパティでオブジェクトタイプを定義し、提供されている他の [プロパティ](properties_Reference.md) のうち必要なものを設定します。
  次はボタンオブジェクトの例です:

```json
	{
		"type": "button", 
		"style": "bevel", 
		"text": "OK", 
		"action": "Cancel", 
		"left": 60, 
		"top": 160, 
		"width": 100, 
		"height": 20
	}
```

### Accessing form objects using their name or their data source in the 4D language

Many commands handling form objects such as commands from [Objects (Forms)](../commands/theme/Objects_Forms.md), [List Box](../commands/theme/List_Box.md), or [Styled Text](../commands/theme/Styled_Text.md) themes share the same generic syntaxes described here:

```4d
COMMAND NAME( * ; *object* : Text { ; *additional parameters* } )
//or
COMMAND NAME( *object* : Variable, Field { ; *additional parameters* })
```

If you specify the \* parameter, you indicate that *object* is the [name of the object](./properties_Object.md#object-name) (a string). If you don't pass the \*, you indicate that *object* is a field or a variable, i.e. its [data source](./properties_Object.md#variable-or-expression).

When using the [object name](./properties_Object.md#object-name), you can rely on the @ character within that name if you want to address several objects of the form in one call. The following table shows examples of object names you can specify to this command.

| Object Names                     | Objects affected by the call                                                   |
| -------------------------------- | ------------------------------------------------------------------------------ |
| mainGroupBox                     | Only the object mainGroupBox.                                  |
| main@               | The objects whose name starts with “main”.                     |
| @GroupBox           | The objects whose name ends with “GroupBox”.                   |
| @グループ@ | The objects whose name contains “Group”.                       |
| main@Btn            | The objects whose name starts with “main” and ends with “Btn”. |
| @                   | All the objects present in the form.                           |

Form object names can contain up 255 bytes, allowing you to define and apply custom naming rules, such as "xxxx_Button" or "xxx_Mac".

:::warning

You can [configure the way the @ character is interpreted](../settings/database.md#text-comparison) when it is included in a character string. This option affects the functioning of the form object commands.

:::


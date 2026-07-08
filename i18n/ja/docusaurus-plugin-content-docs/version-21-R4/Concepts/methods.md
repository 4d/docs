---
id: methods
title: メソッド
---

メソッドとは、1つ以上の動作を実行するコードのことです。 メソッドは、1つ以上のステートメントで構成されます。

ステートメントは 1つの命令を実行し、単純な場合もあれば複雑な場合もあります。 ステートメントは 1つの命令を実行し、単純な場合もあれば複雑な場合もあります。 ステートメントとは通常、メソッドの 1行のことを指します (必要に応じて [`\` 文字を使って行を分割](quick-tour.md#行を分割する) することができます。

メソッドは最大 2GBのテキストまたは、32000行まで記述できます。

## メソッドタイプ

4D ランゲージにおいて、数種類のメソッドが存在します。 その呼び出し方によって、メソッドは区別されます:

| 型                                           | 自動呼び出しのコンテキスト                                                                                                                         | 引数の受け取り                     | 説明                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **プロジェクトメソッド**                              | On demand, when the project method name [is called](../Project/project-method-properties.md)                                          | ◯                           | 任意のアクションを実行するためのコードです。 作成されたプロジェクトメソッドは、そのプロジェクトのランゲージの一部となります。                                                                                                                                                                                                                                                                                                                          |
| **オブジェクト (ウィジェット) メソッド** | メソッドが設定されたフォームオブジェクトに関連したイベント発生時に                                                                                                     | ×                           | フォームオブジェクト (ウィジェットとも呼びます) のプロパティです。                                                                                                                                                                                                                                                                                                                                   |
| **フォームメソッド**                                | メソッドが設定されたフォームに関連したイベント発生時に                                                                                                           | ×                           | フォームのプロパティです。 フォームメソッドを使用してデータとオブジェクトを管理することができます。 ただし、これら目的には、オブジェクトメソッドを使用する方が通常は簡単であり、より効果的です。                                                                                                                                                                                                                                                                                        |
| **トリガー** (別名 *テーブルメソッド*) | テーブルのレコード操作 (追加・削除・修正) の度に                                                                                         | ×                           | テーブルのプロパティです。 トリガーは、データベースのレコードに対して「不正な」操作がおこなわれることを防ぎます。                                                                                                                                                                                                                                                                                                                                |
| **データベースメソッド**                              | 作業セッションのイベント発生時に                                                                                                                      | ○ (既定)   | 4D には 16のデータベースメソッドがあります。                                                                                                                                                                                                                                                                                                                                                                |
| **クラス**                                     | クラスのオブジェクトがインスタンス化されたとき、あるいは他のメソッドや[データベースフィールド](../Develop/field-properties.md#class) 内においてオブジェクトインスタンス上でクラスの関数が実行されたときに自動的に呼び出されます。 | ◯(クラス関数) | オブジェクトのクラスの[constructor](./classes.md#class-constructor), [properties](./classes.md#property) と[関数](./classes.md#function) を宣言および設定するためには、**Class** が使用されます。 [**クラス**](classes.md) 参照。 See [**Classes**](classes.md) and [**Function** class](../API/FunctionClass.md). See [**Classes**](classes.md) and [**Function** class](../API/FunctionClass.md). |

## Language tokens

4D's language includes a unique tokenization system for constants, commands, tables, fields and keywords names that are used in the code. Tokenizing these names means that as you type in the code editor they are stored internally as absolute references (numbers) and then restored as text during execution or display depending on the context. This allows you to guarantee that the code will always be interpreted correctly, even if you rename your tables or fields, or when 4D language commands are renamed over the course of different application versions.

**Note:** This also ensures automatic translation of the code when you have enabled the ["Use regional system settings" preference](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) and open your databases with 4D versions in different languages.

Tokenisation is completely transparent for 4D developers when working in the [4D code editor](../code-editor/write-class-method.md), and you generally won't need to worry about it. However, there are two cases where you might need to take action regarding tokenization: if you want to disable it, and if you want to use tokenization in your formulas.

### Disabling tokenization

When your project is stored on a version control system (VCS) such as GitHub or GitLab, you may want to disable tokenization to make the code more readable on the external platform. To do this, you can deselect the [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) preference to prevent tokens from being stored in your **new projects**.

You can configure your **existing projects** to save code without tokens by inserting the following key in the `<applicationName>.4DProject` file using a text editor:

```json
"tokenizedText": false
```

この設定は、メソッドが保存されるときにのみ考慮されます。 つまり、再保存しない限り、プロジェクト内の既存メソッドはそのまま残されます。

### Using tokens in formulas

A text-based 4D [formula](../commands/theme/Formulas.md) is a text that is interpreted at runtime, and not as it is typed. In fact, this is the case as soon as 4D code is expressed as raw text, more specifically when code is exported and then imported using the [`METHOD GET CODE`](../commands/method-get-code) and [`METHOD SET CODE`](../commands/method-set-code) commands, copied/pasted or [interpreted from 4D HTML tags](../Tags/transformation-tags.md).
To benefit from tokenization mechanisms in these contexts, you just need to use an explicit syntax which consists in preceding object names in the language by their token.

### Token syntax

For tokenizable named elements contained in expressions, 4D offers a special syntax you can use to reference the tokens directly: you just need to add a specific suffix after the element name to indicate its type (command, field, etc.), followed by its reference. The token syntax is detailed in this table:

| 機能          | Example (standard syntax)                        | Suffix                                  | Example (token syntax)                                                               | コメント                                                                                                   |
| ----------- | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 4D Command  | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx is the command number                                                                               |
| 4D Constant | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx is the ID of the constant group and yy is its index (position) within this group |
| Table       | [Employees]     | :xx                     | [Employees:1]                       | xx is the table number                                                                                 |
| フィールド       | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx is the field number                                                                                 |
| 4D Plugin   | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx is the plug-in ID and yy is the index of the command                                                |

**Note:** Uppercase letters (C, P) must be used in the suffixes; otherwise, they will not be interpreted correctly.

When you use this syntax, you guarantee that your formulas will be interpreted correctly even in the case of renaming or when the database is executed in a different language.

This syntax is accepted in all 4D formulas (or 4D expressions) regardless of the calling context:

- 4D formulas executed using the Formula editor or using commands such as [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expressions inserted in [multi-style text areas](../FormObjects/properties_Text.md#supported-tags) (see ST INSERT EXPRESSION),
- expressions calculated in [transformation tags](../Tags/transformation-tags.md),
- expressions inserted in external areas such as [4D Write Pro areas](../WritePro/managing-formulas.md).

#### Where to find the element numbers?

The token syntax requires the addition of the reference numbers of various elements. The location of these references depends on the type of element.

- **4D commands:** Command numbers can be found in the documentation ("Properties" area) as well as on the Commands page of the Explorer.
- **Tables and fields**: Table and field numbers can be obtained using the [`Table`](../commands/table) and [`Field`](../commands/field) commands. They are also displayed in the Inspector palette of the Structure editor.
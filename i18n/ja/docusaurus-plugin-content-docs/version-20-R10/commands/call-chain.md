---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->

<!--REF #_command_.Call chain.Params-->

| 引数  | 型          |                             | 説明                                |
| --- | ---------- | --------------------------- | --------------------------------- |
| 戻り値 | Collection | &#8592; | プロセス内での呼び出しチェーンを記述したオブジェクトのコレクション |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                   |
| ----- | -------------------- |
| 20 R9 | `formula` プロパティをサポート |

</details>

## 説明

<!--REF #_command_.Call chain.Summary-->**Call chain** コマンドは、カレントプロセス内におけるメソッド呼び出しチェーンの各ステップを説明するオブジェクトのコレクションを返します。<!-- END REF--> これはデバッガウィンドウと同じ情報を提供します。 こちらの方が、コンパイルモードを含めてあらゆる4D 環境から実行可能であるという利点があります。

このコマンドを使用すると呼び出されたメソッドまたはフォーミュラ、呼び出したコンポーネント、そして呼び出しが行われた行番号などを特定することが可能なため、デバッグが容易になります。 返されたコレクション内のそれぞれのオブジェクトには以下のプロパティが格納されています:

| **プロパティ** | **型**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                              | **Example**                              |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| database  | Text                          | メソッドを呼び出しているデータベース名(ホストメソッドとコンポーネントメソッドを識別するため)                                                                                                                                                                                                                                                                                                                                                                           | "database":"contactInfo" |
| formula   | Text (あれば) | 呼び出しチェーンのカレントレベルにおけるコードの現在の行のコンテンツ(平文テキスト)。 メソッドで示されているソースファイル内の `line` プロパティによって参照される行のコンテンツに対応します。 ソースコードが利用できない場合、 `formula` プロパティは省略されます(未定義)。                                                                                                                                                                                                                                                     | "var $stack:=Call chain" |
| 行         | Integer                       | メソッド呼び出しの行番号                                                                                                                                                                                                                                                                                                                                                                                                                                 | "line":6                 |
| name      | Text                          | 呼び出されたメソッドの名前                                                                                                                                                                                                                                                                                                                                                                                                                                | "name":"On Load"         |
| type      | Text                          | メソッドのタイプ: <li>"projectMethod"</li><li>"formObjectMethod"</li><li>"formmethod"</li><li>"databaseMethod"</li><li>"triggerMethod"</li><li>"executeOnServer" (*サーバー上で実行属性*つきのプロジェクトメソッドを呼び出した場合)</li><li> "executeFormula" ([PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) あるいは4D Write Pro ドキュメント内のフォーミュラの評価経由でフォーミュラを実行した場合)</li><li>"classFunction"</li><li>"formMethod"</li> | "type":"formMethod"      |

:::note

このコマンドがコンパイルモードで動作するためには、[範囲チェック](../Project/compiler.md#範囲チェック) が無効化されている必要があります。

:::

## 例題

以下のコードは、メソッドの呼び出しチェーンに関する情報を格納したオブジェクトのコレクションを返します:

```4d
var $currentCallChain : Collection
$currentCallChain:=Call chain
```

プロジェクトメソッドが実行されていた場合には、Call chain には(一例として)以下のようなものが格納されています:

```json
[
    {
        "type":"projectMethod",
        "name":"detailForm",
        "line":1,
        "database":"myDatabase"
    }
]
```

フォームオブジェクトメソッドが実行された場合には、Call chain には(一例として)以下のようなものが格納されています:

```json
[
    {
        "type":"formObjectMethod",
        "name":"detailForm.Button",
        "line":1,
        "database":"myDatabase"
    },
    {
        "type":"formMethod",
        "name":"detailForm",
        "line":2,
        "database":"myDatabase"
    },
    {
        "type":"projectMethod",
        "name":"showDetailForm",
        "line":2,
        "database":"myDatabase"
    }
]
```

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1662                        |
| スレッドセーフ | &check; |



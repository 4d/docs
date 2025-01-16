---
id: call-chain
title: Call chain
slug: /commands/call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Call chain.Syntax-->**Call chain** : Collection<!-- END REF-->
<!--REF #_command_.Call chain.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &#8592; | プロセス内のメソッド呼び出しチェーンの詳細を記したオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Call chain.Summary-->**Call chain** コマンドは、カレントプロセス内における、メソッド呼び出しチェーンの各ステップを詳細に説明するオブジェクトのコレクションを返します。<!-- END REF-->デバッガウィンドウと同じ情報を提供します。このコマンドはそれに加え、どの4D環境(コンパイル済みモードを含む)でも実行可能であるという利点を備えています。

このコマンドは、呼び出されたメソッド、それを呼び出したコンポーネント、そして呼び出しが発生した行番号を明らかにすることで、デバッギングを容易にします。返されるコレクションのそれぞれのオブジェクトのには、以下のプロパティが格納されています:

| **プロパティ** | **型** | **詳細**                                                                                                                                                                                                                                                                                                            | **例**                    |
| --------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| database  | テキスト  | メソッドを呼び出しているデータベースの名前(ホストメソッドとコンポーネントメソッドを識別するため)                                                                                                                                                                                                                                                                 | "database":"contactInfo" |
| line      | 倍長整数  | メソッドを呼び出している行番号                                                                                                                                                                                                                                                                                                   | "line":6                 |
| name      | テキスト  | 呼ばれたメソッドの名前                                                                                                                                                                                                                                                                                                       | "name":"On Load"         |
| type      | テキスト  | メソッドの種類: <br/>"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (*サーバー上で実行属性* でプロジェクトメソッドを呼び出している場合) "executeFormula" (フォーミュラを[PROCESS 4D TAGS](process-4d-tags.md) で実行している場合、または4D Write Pro ドキュメント内でフォーミュラを評価する場合</li<"formmethod",<> | "type":"formMethod"      |

**注:** このコマンドがコンパイル済みモードで動作可能になるためには、レンジのチェックを無効化してはいけません。*範囲チェック* を参照してください。

#### 例題 

以下のコードはメソッド呼び出しチェーンに関する情報を格納したオブジェクトのコレクションを返します:

```4d
 var $currentCallChain : Collection
 $currentCallChain:=Call chain
```

プロジェクトメソッドが実行された場合、呼び出しチェーンには例えば以下のような情報が格納されます:

```json
[   {    "type":"projectMethod",    "name":"detailForm",    "line":1,    "database":"myDatabase"   }]
```

フォームオブジェクトメソッドが実行された場合、呼び出しチェーンには例えば以下のような情報が格納されます:

```json
[   {    "type":"formObjectMethod",    "name":"detailForm.Button",    "line":1,    "database":"myDatabase"   },   {    "type":"formMethod",    "name”:"detailForm",    "line":2,    "database":"myDatabase"   },   {    "type":"projectMethod",    "name”:"showDetailForm",    "line":2,    "database":"myDatabase”   }]
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1662 |
| スレッドセーフである | &check; |



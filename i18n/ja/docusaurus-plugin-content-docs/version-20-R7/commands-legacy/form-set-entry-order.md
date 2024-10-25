---
id: form-set-entry-order
title: FORM SET ENTRY ORDER
slug: /commands/form-set-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET ENTRY ORDER.Syntax-->**FORM SET ENTRY ORDER** ( *objectNames* {; *pageNumber*} )<!-- END REF-->
<!--REF #_command_.FORM SET ENTRY ORDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectNames | Text array | &#8594;  | 入力順に並べられたオブジェクト名の配列 |
| pageNumber | Integer | &#8594;  | 入力順を指定するページの番号 (省略時はカレントページ) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM SET ENTRY ORDER.Summary-->**FORM SET ENTRY ORDER** コマンドは カレントプロセスのカレントフォームにおいて、*objectNames* に渡した配列に基づき入力順を動的に指定します。<!-- END REF--> 

*objectNames* には入力順に含めたいフォームオブジェクトの名前を格納した配列を渡します。配列内のオブジェクト名の順序が、対応するフォームオブジェクトの入力順に反映されます。カレントフォームに属するすべての有効なフォームオブジェクトを指定することができます。有効なオブジェクトの条件は次のとおりです:

* **フォーカス可** プロパティが有効(**注:** このコマンドは **タブ有効** オブジェクトプロパティを無視します)
* フォーム上に定義されている (名前が定義されている)
* カレントページ上 (または *pageNumber* ページ上、後述参照) で使用されている。  
**注:** フォームページにはページ 0 および継承されたフォームオブジェクトが含まれることに留意してください。

ランタイムにおいて無効なオブジェクトが検知された場合には、4D はこれを無視して、*objectNames* 配列の次の要素に移ります。有効なオブジェクトのみが含まれたカレントページの実際の入力順は、\* パラメーターを指定した [FORM GET ENTRY ORDER](form-get-entry-order.md) コマンドによって確認することができます。 

任意のパラメーター *pageNumber* を使って、入力順を設定するページを指定することができます。省略した場合には、カレントページが対象となります。

**注:** 

* サブフォームの入力順はサブフォームにて定義されます。これを設定するには **FORM SET ENTRY ORDER** コマンドをサブフォームのコンテキスト内で呼び出す必要があります。
* このコマンドは、ランタイムにおいてフォーム上で最初にフォーカスされるオブジェクトは指定しません。入力順の先頭オブジェクトを指定するには、フォームの On Load イベント内で [GOTO OBJECT](goto-object.md) コマンドを呼び出す必要があります。[OBJECT DUPLICATE](object-duplicate.md) コマンドを使用する場合には、*boundTo* パラメーターに Object First in entry order 定数を渡すことで、複製オブジェクトを先頭に設定することができます。

**データ入力順について**  
データ入力順とは、フォーム上で**Tab** キーや**改行**キーを押したときに、フィールドやサブフォーム、その他のアクティブオブジェクトが選択される順番です。**Shift+Tab**や**Shift+改行**キーを押すことで逆方向に移動することもできます。入力順はデフォルトで定義されているほか、フォームエディターにおいて変更することが可能です。詳細については *デザインリファレンス* マニュアルの *データの入力順を変更する* を参照ください。

#### 例題 

フォーム上に設置されたオブジェクトの入力順を、名称に基づいて指定します:

```4d
 ARRAY TEXT(tabNames;0)
 
 FORM GET OBJECTS(tabNames;Form current page+Form inherited) // フォームオブジェクト名を取得します
 SORT ARRAY(tabNames;>) // オブジェクト名を昇順に並べ替えます
 FORM SET ENTRY ORDER(tabNames) // 並べ替えた順番を入力順として適用します
  //フォーカス可に設定されていないオブジェクトは無視されます
```

#### 参照 

[FORM GET ENTRY ORDER](form-get-entry-order.md)  
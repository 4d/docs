---
id: get-last-error-stack
title: GET LAST ERROR STACK
slug: /commands/get-last-error-stack
displayed_sidebar: docs
---

<!--REF #_command_.GET LAST ERROR STACK.Syntax-->**GET LAST ERROR STACK** ( *codesArray* ; *intCompArray* ; *textArray* )<!-- END REF-->
<!--REF #_command_.GET LAST ERROR STACK.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| codesArray | 倍長整数配列 | &#x1F858; | エラー番号 |
| intCompArray | 文字配列 | &#x1F858; | 内部コンポーネントコード |
| textArray | 文字配列 | &#x1F858; | エラーテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LAST ERROR STACK.Summary-->GET LAST ERROR STACK コマンドは、4Dアプリケーションの現在のエラースタックに関する情報を返します。<!-- END REF-->4Dのステートメントがエラーを起こしている場合、現在のエラースタックには生成された一連のエラーとともにエラーの説明が含まれます。例えば"ディスクがいっぱいです"タイプのエラーはファイルの書き込みエラーの原因となり、さらにレコード保存コマンドのエラーを起こします。この場合スタックには3つのエラーが含まれます。最後に実行された4Dステートメントがエラーを生成していない場合、エラースタックは空です。

この汎用コマンドは、4Dアプリケーションで発生するかもしれないすべてのタイプのエラーを処理するために使用できます。 

**Note:** しかし、ODBCソースで生成されたエラーに関する詳細な情報を取得するためには、[SQL GET LAST ERROR](sql-get-last-error.md "SQL GET LAST ERROR") コマンドを使用する必要があります。

このコマンドは[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドでインストールされたエラー処理メソッドの中で呼び出さなければなりません。

情報は3つの同期された配列に返されます:

* *codesArray*: この配列は生成されたエラーコードのリストを受け取ります。
* *intCompArray*: この配列はそれぞれのエラーに関連する内部コンポーネントのコードが返されます。
* *textArray*: この配列にはそれぞれのエラーのテキストが返されます。

エラーコードとそのテキストのリストは*エラーコード*テーマで提供されます。

#### 参照 

[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  
[SQL GET LAST ERROR](sql-get-last-error.md)  
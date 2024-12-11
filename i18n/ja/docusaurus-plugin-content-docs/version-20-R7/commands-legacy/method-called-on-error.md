---
id: method-called-on-error
title: Method called on error
slug: /commands/method-called-on-error
displayed_sidebar: docs
---

<!--REF #_command_.Method called on error.Syntax-->**Method called on error** {( *scope* )} : Text<!-- END REF-->
<!--REF #_command_.Method called on error.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| scope | Integer | &#8594;  | エラーメソッドのスコープ |
| 戻り値 | Text | &#8592; | エラー時に呼び出されるメソッド名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Method called on error.Summary-->**Method called on error** コマンドはカレントプロセス、または*scope* 引数で指定したスコープにおいて[ON ERR CALL](on-err-call.md) コマンドでインストールされたメソッドの名前を返します。<!-- END REF-->引数には、エラー処理メソッドの名前を取得したい実行コンテキストを渡します。以下の定数のいずれか1つを使用することができます:

| 定数                        | 値 | コメント                                             |
| ------------------------- | - | ------------------------------------------------ |
| ek errors from components | 2 | コンポーネントで発生したエラー                                  |
| ek global                 | 1 | プロジェクトのグローバル実行コンテキストで発生したエラー                     |
| ek local                  | 0 | ローカル実行コンテキストで発生したエラー(*scope* 引数が省略されていた場合のデフォルト) |

*scope* 引数で指定したスコープにおいてエラー処理メソッドが何もインストールされていなかった場合、空の文字列("") が返されます。

#### 例題 

このコマンドはコンポーネントでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます:

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  // ドキュメントを開くことができなければエラーが生成される
 $ref:=Open document("MyDocument")
  // 前のエラー処理メソッドに戻す
 ON ERR CALL($methCurrent)
```

#### 参照 

*Error Handler*  
[ON ERR CALL](on-err-call.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 704 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



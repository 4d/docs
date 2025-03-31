---
id: use-set
title: USE SET
slug: /commands/use-set
displayed_sidebar: docs
---

<!--REF #_command_.USE SET.Syntax-->**USE SET** ( *set* )<!-- END REF-->
<!--REF #_command_.USE SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| set | Text | &#8594;  | 使用するセットの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.USE SET.Summary-->USE SETは、*set*内のレコードをそのセットの属するテーブルのカレントセレクションにします。<!-- END REF-->

セットを作成すると、その時点のカレントレコードはそのセットに“記憶”されています。USE SETはセット上のカレントレコードの位置を復元し、そのレコードを新しいカレントレコードにします。USE SETを実行する前にこのレコードを削除すると、4Dはセットの先頭のレコードをカレントレコードに設定します。[INTERSECTION](intersection.md "INTERSECTION")、[UNION](union.md "UNION")、[DIFFERENCE](difference.md "DIFFERENCE")、[ADD TO SET](add-to-set.md "ADD TO SET")コマンドはカレントレコードを再設定します。カレントレコードの位置を含まないセットを作成した場合にも、USE SETはセットの先頭のレコードをカレントレコードに設定します。

**警告:** セットは、そのセットが作成された時点のセレクションを表現しているという点に注意してください。セットに対応するレコードが更新されると、セットは正確なものでないかもしれません。したがって、ディスクに保存するセットは、頻繁に更新されることのないレコードで構成するべきです。セットを無効にする操作としてはセットのレコードの修正、セットのレコードの削除、セットを決定した条件の変更等があります。

#### 例題 

以下の例は[LOAD SET](load-set.md "LOAD SET")を使用して、所在地が“NY Acme”のセットを復元し、その復元したセットをUSE SETを使用してカレントセレクションにします:

```4d
 LOAD SET([Companies];"NY Acme";"NYAcmeSt") // セットをメモリにロード
 USE SET("NY Acme") // カレントセレクションをNY Acmeに変更
 CLEAR SET("NY Acme") // メモリからセットをクリア
```

#### 参照 

[CLEAR SET](clear-set.md)  
[LOAD SET](load-set.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 118 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||



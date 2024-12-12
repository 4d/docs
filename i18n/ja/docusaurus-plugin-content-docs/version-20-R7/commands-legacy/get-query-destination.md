---
id: get-query-destination
title: GET QUERY DESTINATION
slug: /commands/get-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.GET QUERY DESTINATION.Syntax-->**GET QUERY DESTINATION** ( *destinationType* ; *destinationObject* ; *destinationPtr* )<!-- END REF-->
<!--REF #_command_.GET QUERY DESTINATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| destinationType | Integer | &#8592; | 0 = カレントセレクション、1 = セット、2 = 命名セレクション、3 = 変数 |
| destinationObject | Text | &#8592; | セット名、命名セレクション名、または空の文字列 |
| destinationPtr | Pointer | &#8592; | destinationType=3のとき、ローカル変数へのポインター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET QUERY DESTINATION.Summary-->**GET QUERY DESTINATION**コマンドは実行中のプロセスのクエリ結果の格納先を返します。<!-- END REF-->デフォルトでクエリの結果はカレントセレクションとして反映されます。しかしこの動作は[SET QUERY DESTINATION](set-query-destination.md)コマンドを使用して変更できます。

*destinationType* 引数にはクエリの格納先を示す値が、そして *destinationObject* 引数には格納先の名前が返されます (指定されている場合)。*destinationType* に返される値は*Queries*テーマの定数と比較できます:

| 定数                     | 型    | 値 |
| ---------------------- | ---- | - |
| Into current selection | 倍長整数 | 0 |
| Into named selection   | 倍長整数 | 2 |
| Into set               | 倍長整数 | 1 |
| Into variable          | 倍長整数 | 3 |

*destinationObject* 引数に返される値は *destinationType* により異なります:

| **destinationType 引数** | **destinationObject 引数**                               |
| ---------------------- | ------------------------------------------------------ |
| 0 (カレントセレクション)         | *destinationObject* は空の文字列                             |
| 1 (セット)                | *destinationObject* にはセット名が返される                        |
| 2 (命名セレクション)           | *destinationObject* には命名セレクション名が返される                   |
| 3 (変数)                 | *destinationObject* は空の文字列 (*destinationPtr* 引数を使用します) |

 クエリの格納先がローカル変数の場合 (*destinationType* \= 3)、コマンドはこの変数へのポインターを *destinationPtr* 引数に返します。

#### 例題 

一時的にクエリの格納先を変更し、後で元に戻す:

```4d
 GET QUERY DESTINATION($vType;$vName;$ptr)
  // 現在の設定値を取得
 SET QUERY DESTINATION(Into set;"$temp")
  // 一時的に格納先を変更
 QUERY(...) // 検索実行
 SET QUERY DESTINATION($vType;$vName;$ptr)
  // 元の設定に戻す
```

#### 参照 

[SET QUERY DESTINATION](set-query-destination.md)  
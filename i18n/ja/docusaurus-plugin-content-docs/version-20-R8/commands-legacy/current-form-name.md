---
id: current-form-name
title: Current form name
slug: /commands/current-form-name
displayed_sidebar: docs
---

<!--REF #_command_.Current form name.Syntax-->**Current form name**  : Text<!-- END REF-->
<!--REF #_command_.Current form name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | プロセス中のカレントのプロジェクトフォーム名またはカレントのテーブルフォーム名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current form name.Summary-->**Current form name**コマンドは、プロセスのために定義されたカレントのフォームの名前を返します。<!-- END REF-->カレントフォームはプロジェクトフォームでもテーブルフォームでも可能です。

[FORM LOAD](../commands/form-load.md) コマンドをカレントプロセス中に使用していなければ、デフォルトでのカレントフォームは表示または印刷されているフォームです。[FORM LOAD](../commands/form-load.md) コマンドをカレントプロセス中に呼び出していた場合、カレントフォームはこのコマンドによって設定されたフォームとなり、[FORM UNLOAD](form-unload.md) (または [CLOSE PRINTING JOB](close-printing-job.md))コマンドを呼ぶまでそれが維持されます。

コマンドは、以下のいづれかを返します:

* フォーム名
* カレントフォームが.json ファイルから作成されていた場合にはそのファイル名(拡張子を除く)
* カレントフォームがオブジェクトから作成されていた場合には"name" 属性
* プロセスにおいて定義されたカレントフォームがない場合には、空の文字列

#### 例題 1 

入力フォームにおいて、以下のコードをボタンに実装します。

```4d
 var $FormName : Text
 $win:=Open form window([Members];"Input";Plain form window)
 DIALOG([Members];"Input")
 $FormName:=Current form name
  // $FormName = "Input"
 FORM LOAD([Members];"Drag")
 $FormName:=Current form name
  // $FormName = "Drag"
  //...
```

#### 例題 2 

カレントフォームがプロジェクトフォームであればその名前を取得したいという場合を考えます。

```4d
 $PointerTable:=Current form table
 If(Nil($PointerTable)) // これがプロジェクトフォームであれば
    $FormName:=Current form name
    ... // 処理
 End if
```

#### 参照 

[FORM LOAD](../commands/form-load.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1298 |
| スレッドセーフである | &cross; |



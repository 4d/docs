---
id: application-type
title: Application type
slug: /commands/application-type
displayed_sidebar: docs
---

<!--REF #_command_.Application type.Syntax-->**Application type**  : Integer<!-- END REF-->
<!--REF #_command_.Application type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | アプリケーションタイプを示す数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Application type.Summary-->Application type コマンドは、現在実行している4D 環境のアプリケーションタイプを示す数値を返します。<!-- END REF-->4D は、以下の定義済み定数を提供しています:

| 定数                | 値 | コメント                                                                                                  |
| ----------------- | - | ----------------------------------------------------------------------------------------------------- |
| 4D Desktop        | 3 |                                                                                                       |
| 4D Local mode     | 0 |                                                                                                       |
| 4D Remote mode    | 4 |                                                                                                       |
| 4D Server         | 5 |                                                                                                       |
| 4D Volume desktop | 1 |                                                                                                       |
| tool4d            | 6 | 詳細な情報については、developer.4d.com.上の [tool4D](http://developer.4d.com/docs/next/Admin/cli#tool4d) を参照して下さい。 |

**注:** *4D Desktop* にはいくつかの配付オファーが含まれています。例えば、"4D SQL Desktop"などです。

#### 例題 

*On Server Startupデータベースメソッド*以外のいずれかの箇所で、4D Serverを実行中かチェックする必要がある場合、以下のように記述できます:

```4d
 If(Application type=4D Server)
  //Perform appropriate actions
 End if
```

#### 参照 

[Application version](application-version.md)  
[Version type](version-type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 494 |
| スレッドセーフである | &check; |



---
id: wa-set-preference
title: WA SET PREFERENCE
slug: /commands/wa-set-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PREFERENCE.Syntax-->**WA SET PREFERENCE** ( {* ;} *object* ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.WA SET PREFERENCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定した場合、オブジェクトがオブジェクトの名前 (文字列) 省略した場合、オブジェクトは変数 |
| object | any | &#8594;  | オブジェクトの名前 ( * を指定した場合) または、変数 ( * を省略した場合) |
| selector | Integer | &#8594;  | 修正される環境設定 |
| value | Boolean | &#8594;  | 環境設定の値 (True = 許可,  False = 不許可) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA SET PREFERENCE.Summary-->WA SET PREFERENCE コマンドを使用して、引数 *\** と *object* によって指定されたWebエリアに対して、さまざまな環境設定を行います。<!-- END REF-->

引数*selector*に修正する環境設定を渡し、引数*value*にその環境設定に割り当てられる値を渡します。引数*selector* には、 *Web Area* テーマにある以下の定数の1つを渡します。

| 定数                        | 値   | コメント                                                                                                         |
| ------------------------- | --- | ------------------------------------------------------------------------------------------------------------ |
| WA enable contextual menu | 4   | Webエリア内で標準のコンテキストメニューの表示を許可する。デフォルト値(どのエンジンでも) = False                                                       |
| WA enable URL drop        | 101 | URL またはファイルがWeb エリアにドロップされる場合に、ドロップアイコンを変更し、 *On Window Opening Denied* イベントを呼び出します。デフォルト値(どのエンジンでも) = False |
| WA enable Web inspector   | 100 | Web エリア内でインスペクターの表示を許可する。デフォルト値(どのエンジンでも) = False                                                            |

各環境設定を起動するには*value* 引数に **True** を渡し、無効にするには**False** を渡します。

#### 例題 

'myarea' というWebエリア内でURLドロップを有効化したい場合:

```4d
  // フォームメソッド内
 WA SET PREFERENCE(*;"myarea";WA enable URL drop;True)
```

```4d
  // Webエリアのオブジェクトメソッド内
 If(FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*;"myarea";WA Get last filtered URL(*;"WebArea"))
 End if
```

#### 参照 

[WA GET PREFERENCE](wa-get-preference.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1041 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



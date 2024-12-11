---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( {* ;} *object* ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定されると、オブジェクトがオブジェクト名 (文字列) 省略されると、オブジェクトは変数 |
| object | any | &#8594;  | オブジェクトの名前 (引数 * が指定されると) または、変数 (引数 * が省略されると) |
| selector | Integer | &#8594;  | 取得する環境設定 |
| value | Variable | &#8592; | 環境設定のカレント値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA GET PREFERENCE.Summary-->WA GET PREFERENCE コマンドを使用して、*\** と *object* によって指定されたWebエリアの環境設定の現在値を取得します。<!-- END REF-->

取得したい値を持つ環境設定を引数 *selector* に渡します。この場合、" *Web Area* " テーマにある以下の定数の1つを渡します。

| 定数                        | 値   | コメント                                                                                                         |
| ------------------------- | --- | ------------------------------------------------------------------------------------------------------------ |
| WA enable contextual menu | 4   | Webエリア内で標準のコンテキストメニューの表示を許可する。デフォルト値(どのエンジンでも) = False                                                       |
| WA enable URL drop        | 101 | URL またはファイルがWeb エリアにドロップされる場合に、ドロップアイコンを変更し、 *On Window Opening Denied* イベントを呼び出します。デフォルト値(どのエンジンでも) = False |
| WA enable Web inspector   | 100 | Web エリア内でインスペクターの表示を許可する。デフォルト値(どのエンジンでも) = False                                                            |

引数 *value* には、環境設定の現在値を受け取る変数を渡します。*value* 変数は必ずブール型です。設定がアクティブであれば **True** が、それ以外の場合には **False** が格納されます。

#### 参照 

[WA SET PREFERENCE](wa-set-preference.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1042 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



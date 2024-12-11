---
id: object-set-events
title: OBJECT SET EVENTS
slug: /commands/object-set-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET EVENTS.Syntax-->**OBJECT SET EVENTS** ( {* ;} *object* ; *arrEvents* ; *mode* )<!-- END REF-->
<!--REF #_command_.OBJECT SET EVENTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:object はオブジェクト名(文字列)、省略時:object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名または""( * 指定時)、または変数やフィールド( * 省略時) |
| arrEvents | Integer array | &#8594;  | 設定したいイベントの配列 |
| mode | Integer | &#8594;  | arrEvents 引数で定義されたイベントの起動モード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET EVENTS.Summary-->**OBJECT SET EVENTS**コマンドは、引数 *object* と *\** で指定したフォームまたはオブジェクトのフォームイベントの設定を、カレントのプロセスにおいて変更します。<!-- END REF-->

任意の*\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

フォーム自身のイベントの設定を定義する場合は、任意の *\** 演算子を渡したうえで *object* 引数に空の文字列 "" を渡します。こうすることでカレントフォームを指定します。

****注:** もしテーブルに関連したサブフォームのイベントを変更したい場合にはオブジェクト名を指定する記述法のみ有効です。

*arrEvents* 引数には、変更したい定義済みもしくはカスタムのフォームイベントのリストを倍長整数配列で渡します。（このとき *mode* 引数を使って、指定したイベントを有効にするか無効にするかを指定できます。）定義済みのイベントを指定するには、 *arrEvents* 配列の要素の中に以下の定数を渡します。これらの定数は "*Form Events*" のテーマ内にあります。

| 定数                       | 型    | 値  | コメント                                                                                                                                                                                             |
| ------------------------ | ---- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| On Activate              | 倍長整数 | 11 | フォームウィンドウが最前面のウィンドウになった                                                                                                                                                                          |
| On After Edit            | 倍長整数 | 45 | フォーカスのあるオブジェクトの内容が更新された                                                                                                                                                                          |
| On After Keystroke       | 倍長整数 | 28 | フォーカスのあるオブジェクトに文字が入力されようとしている。[Get edited text](get-edited-text.md)はこの文字を含むオブジェクトのテキストを返す                                                                                                        |
| On After Sort            | 倍長整数 | 30 | (リストボックスのみ) リストボックスの列中で標準のソートが行われた                                                                                                                                                               |
| On Arrow Click           | 倍長整数 | 38 | (3Dボタンのみ)3D ボタンの"三角"エリアがクリックされた                                                                                                                                                                  |
| On Before Data Entry     | 倍長整数 | 41 | (リストボックスのみ) リストボックスセルが編集モードに変更されようとしている                                                                                                                                                          |
| On Before Keystroke      | 倍長整数 | 17 | フォーカスのあるオブジェクトに文字が入力されようとしている。[Get edited text](get-edited-text.md)はこの文字を含まないオブジェクトのテキストを返す                                                                                                      |
| On Begin Drag Over       | 倍長整数 | 46 | オブジェクトがドラッグされている                                                                                                                                                                                 |
| On Begin URL Loading     | 倍長整数 | 47 | (Webエリアのみ) 新しいURLがWeb エリアにロードされた                                                                                                                                                                 |
| On bound variable change | 倍長整数 | 54 | サブフォームにバインドされた変数が更新された                                                                                                                                                                           |
| On Clicked               | 倍長整数 | 4  | オブジェクト上でクリックされた                                                                                                                                                                                  |
| On Close Box             | 倍長整数 | 22 | ウィンドウのクローズボックスがクリックされた                                                                                                                                                                           |
| On Close Detail          | 倍長整数 | 26 | 入力フォームから離れ、出力フォームに移動しようとしている                                                                                                                                                                     |
| On Collapse              | 倍長整数 | 44 | (階層リストまたは階層リストボックスのみ) クリックやキーストロークで階層リストの要素が折りたたまれた                                                                                                                                              |
| On Column Moved          | 倍長整数 | 32 | (リストボックスのみ) リストボックスの列がユーザのドラッグ＆ドロップで移動された                                                                                                                                                        |
| On Column Resize         | 倍長整数 | 33 | (リストボックスと4D View Pro) リストボックスの列幅がユーザーのマウス操作によって変更された                                                                                                                                             |
| On Data Change           | 倍長整数 | 20 | オブジェクトのデータが変更された                                                                                                                                                                                 |
| On Deactivate            | 倍長整数 | 12 | フォームウィンドウが最前面のウィンドウでなくなった                                                                                                                                                                        |
| On Delete Action         | 倍長整数 | 58 | (階層リストとリストボックスのみ) ユーザーが項目の削除を試みた                                                                                                                                                                 |
| On Display Detail        | 倍長整数 | 8  | レコードがリスト中に、あるいは行がリストボックス中に表示されようとしている                                                                                                                                                            |
| On Double Clicked        | 倍長整数 | 13 | オブジェクト上でダブルクリックされた                                                                                                                                                                               |
| On Drag Over             | 倍長整数 | 21 | データがオブジェクト上にドロップされる可能性がある                                                                                                                                                                        |
| On Drop                  | 倍長整数 | 16 | データがオブジェクトにドロップされた                                                                                                                                                                               |
| On End URL Loading       | 倍長整数 | 49 | (Webエリアのみ) URLのすべてのリソースがロードされた                                                                                                                                                                   |
| On Expand                | 倍長整数 | 43 | (階層リストまたは階層リストボックスのみ) クリックやキーストロークで階層リストの要素が展開された                                                                                                                                                |
| On Footer Click          | 倍長整数 | 57 | (リストボックスのみ) リストボックスあるいはリストボックス列でフッターがクリックされた                                                                                                                                                     |
| On Getting Focus         | 倍長整数 | 15 | フォームオブジェクトがフォーカスを得た                                                                                                                                                                              |
| On Header                | 倍長整数 | 5  | フォームのヘッダエリアが印刷あるいは表示されようとしている                                                                                                                                                                    |
| On Header Click          | 倍長整数 | 42 | (リストボックスと4D View Pro) リストボックスの列ヘッダでクリックが行われた                                                                                                                                                     |
| On Load Record           | 倍長整数 | 40 | リスト更新中、更新中にレコードがロードされた (ユーザがレコード行をクリックし、フィールドが編集モードになった)                                                                                                                                         |
| On Long Click            | 倍長整数 | 39 | (3Dボタンのみ) 3D ボタンがクリックされ、特定の時間以上マウスボタンが押され続けている                                                                                                                                                   |
| On Losing Focus          | 倍長整数 | 14 | フォームオブジェクトがフォーカスを失った                                                                                                                                                                             |
| On Mac toolbar button    | 倍長整数 | 55 | Mac OSにおいて、ユーザーがツールバー管理ボタンをクリックした                                                                                                                                                                |
| On Menu Selected         | 倍長整数 | 18 | メニュー項目が選択された                                                                                                                                                                                     |
| On Mouse Enter           | 倍長整数 | 35 | マウスカーソルがオブジェクトの描画エリア内に入った                                                                                                                                                                        |
| On Mouse Leave           | 倍長整数 | 36 | マウスカーソルがオブジェクトの描画エリアから出た                                                                                                                                                                         |
| On Mouse Move            | 倍長整数 | 37 | マウスカーソルがオブジェクトの描画エリア上で (最低1ピクセル) 動いたか、変更キー(Shift, Alt, Shift Lock)が押された<br/>イベントがオブジェクトに対してのみチェックされていた場合は、マウスカーソルがオブジェクトの描画エリア内にあった場合にのみイベントが生成されます。                                     |
| On Open Detail           | 倍長整数 | 25 | 出力フォームまたはリストボックスに関連付けられた詳細フォームが開かれようとしている                                                                                                                                                        |
| On Open External Link    | 倍長整数 | 52 | (Webエリアのみ) 外部URLがブラウザで開かれた                                                                                                                                                                       |
| On Outside Call          | 倍長整数 | 10 | フォームが[POST OUTSIDE CALL](post-outside-call.md)による呼び出しを受けた                                                                                                                                        |
| On Picture Scroll        | 倍長整数 | 59 | マウスやキーボードを使用して、ユーザーがピクチャーフィールドや変数の内容をスクロールした。                                                                                                                                                    |
| On Plug in Area          | 倍長整数 | 19 | 外部オブジェクトのオブジェクトメソッドの実行がリクエストされた                                                                                                                                                                  |
| On Printing Break        | 倍長整数 | 6  | フォームのブレークエリアのひとつが印刷されようとしている                                                                                                                                                                     |
| On Printing Detail       | 倍長整数 | 23 | フォームの詳細エリアが印刷されようとしている                                                                                                                                                                           |
| On Printing Footer       | 倍長整数 | 7  | フォームのフッタエリアが印刷されようとしている                                                                                                                                                                          |
| On Resize                | 倍長整数 | 29 | フォームウィンドウがリサイズされた                                                                                                                                                                                |
| On Row Moved             | 倍長整数 | 34 | (リストボックスのみ) リストボックスの行がユーザのドラッグ＆ドロップで移動された                                                                                                                                                        |
| On Row Resize            | 倍長整数 | 60 | *(4D View Pro のみ)* 行の高さがユーザーのマウスによって変更された                                                                                                                                                        |
| On Selection Change      | 倍長整数 | 31 | リストボックスと4D View Pro: 現在の行や列の選択が変更された リスト中のレコード: リストフォームまたはサブフォームにおいて、カレントレコードあるいはカレントセレクションの行選択が変更された 階層リスト: リスト中の選択がクリックやキーストロークなどで変更された 入力可フィールドや変数: クリックやキー押下により、選択されたテキストやカーソルの位置がエリア内で変更された |
| On Timer                 | 倍長整数 | 27 | [SET TIMER](set-timer.md)コマンドで設定した時間が経過した                                                                                                                                                        |
| On Unload                | 倍長整数 | 24 | フォームを閉じて解放しようとしている                                                                                                                                                                               |
| On URL Filtering         | 倍長整数 | 51 | (Webエリアのみ) Web エリアがURLをブロックした                                                                                                                                                                    |
| On URL Loading Error     | 倍長整数 | 50 | (Webエリアのみ) URLをロード中にエラーが発生した                                                                                                                                                                     |
| On URL Resource Loading  | 倍長整数 | 48 | (Webエリアのみ) 新しいリソースがWeb エリアにロードされた                                                                                                                                                                |
| On Validate              | 倍長整数 | 3  | レコードのデータ入力が受け入れられた                                                                                                                                                                               |
| On VP Range Changed      | 倍長整数 | 61 | 4D Vierw Pro のセルレンジが変更された(例: フォーミュラの計算、値がセルから削除された、など)                                                                                                                                           |
| On Window Opening Denied | 倍長整数 | 53 | (Webエリアのみ) ポップアップウィンドウがブロックされた                                                                                                                                                                   |

このリストでは On Load イベントが含まれていないことに注意して下さい。コマンドを実行した際には既にイベントが発生されてしまっているため、ここでは定義されていません。

*arrEvents* 引数にはカスタムイベントに対応する値を渡すこともできます。この際には、負の値を使用することが推奨されます。( [CALL SUBFORM CONTAINER](call-subform-container.md) コマンドのドキュメントを参照して下さい。)

*mode* 引数には、配列の要素に対する全体的な処理の適用方法を決める値を渡します。 "*Form Objects (Properties)*" テーマ内にある、以下の定数のどれかを渡して指定して下さい。

| 定数                              | 型    | 値 | コメント                                         |
| ------------------------------- | ---- | - | -------------------------------------------- |
| Disable events others unchanged | 倍長整数 | 2 | *arrEvents* に指定された全てのイベントは無効化され、他は何も変更されません。 |
| Enable events disable others    | 倍長整数 | 0 | *arrEvents* に指定された全てのイベントは有効になり、他は全て無効化されます。 |
| Enable events others unchanged  | 倍長整数 | 1 | *arrEvents* に指定された全てのイベントは有効になり、他は何も変更されません。 |

**OBJECT SET EVENTS** コマンドを使用する際、*object* 引数で指定したオブジェクトでサポートされていない型のイベントの設定をしようとした場合、このイベントは無視されます。

オブジェクトが **OBJECT SET EVENTS** コマンドを呼び出した後に複製された場合は、有効/無効の設定も複製先に引き継がれます。

#### 例題 1 

いくつかのリストボックスオブジェクトに対して3つのフォームイベントを有効にし、他を全て無効にする場合:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Enable events disable others)
  // 指定した3つのイベントを有効にし、他は全て無効
```

#### 例題 2 

いくつかのリストボックスオブジェクトに対して3つのフォームイベントを無効にし、他は何も変更をしない場合:

```4d
 ARRAY LONGINT($MyEventsOnLB;3)
 $MyEventsOnLB {1}:=On After Sort
 $MyEventsOnLB {2}:=On Column Moved
 $MyEventsOnLB {3}:=On Column Resize
 OBJECT SET EVENTS(*;"MyLB@";$MyEventsOnLB;Disable events others unchanged)
  // 指定した3つのイベントのみ無効
```

#### 例題 3 

あるオブジェクトのフォームイベントを有効にし、他は何も変更をしない場合:

```4d
 ARRAY LONGINT($MyEventsOnLB;1)
 $MyEventsOnLB {1}:=On Column Moved
 OBJECT SET EVENTS(*;"Col1";$MyEventsOnLB;Enable events others unchanged)
  // 指定したイベントのみ有効
```

#### 例題 4 

フォームのイベントを全て無効にする場合:  

```4d
 ARRAY LONGINT($MyFormEvents;0)
 OBJECT SET EVENTS(*;"";$MyFormEvents;Enable events disable others)
  // 全てのイベントが無効
```

#### 例題 5 

フォームのイベントを一つだけ無効にし、他は何も変更しない場合:

```4d
 ARRAY LONGINT($MyFormEvents;1)
 $MyFormEvents{1}:=On Timer
 OBJECT SET EVENTS(*;"";$MyFormEvents;Disable events others unchanged)
  // 指定した一つのイベントのみ無効
```

#### 参照 

*Form Events*  
[OBJECT GET EVENTS](object-get-events.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1239 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



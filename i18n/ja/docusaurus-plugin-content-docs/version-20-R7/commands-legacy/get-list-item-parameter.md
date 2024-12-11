---
id: get-list-item-parameter
title: GET LIST ITEM PARAMETER
slug: /commands/get-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER.Syntax-->**GET LIST ITEM PARAMETER** ( {* ;} *list* ; itemRef | * ; *selector* ; *value* )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時) または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号 または 0: リストに最後に追加された項目 または *: カレントのリスト項目 |
| selector | Text | &#8594;  | パラメタ定数 |
| value | Text, Boolean, Real | &#8592; | パラメタの現在値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LIST ITEM PARAMETER.Summary-->**GET LIST ITEM PARAMETER** コマンドは、*list* 引数にリスト参照やオブジェクト名で指定したリストの、*itemRef* 項目の、*selector* パラメタに対応する現在値を取得するために使用します。<!-- END REF-->

オプションの第一引数 *\** を渡すと、*list* 引数はフォーム上のリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。リストオブジェクトを一つしか使わない場合や、2番目の *\** を使用しない場合は、両方のシンタックスを使用できます。他方フォーム上に同じ階層リストを参照する複数のオブジェクトがある場合で、2番目の *\** を渡して現在選択されている項目を参照する場合、それぞれのオブジェクトが個別に選択された項目をもつので、オブジェクト名に基づくシンタックスを使用しなければなりません。

**Note:** オブジェクト名に @ 文字を使用することで、名前に対応するオブジェクトが複数検索された場合、**GET LIST ITEM PARAMETER** コマンドは最初に見つけたオブジェクトを処理の対象とします。

*itemRef*に項目参照番号を渡すことができます。対応する項目がない場合、コマンドは何も行いません。0を渡した場合、リストに最後に追加された項目が処理の対象となります。*\** を渡した場合、コマンドは現在選択されている項目を処理の対象とします。複数の項目が選択されている場合、カレントの項目は最後に選択された項目です。項目が選択されていない場合、コマンドは何も行いません。

*selector*には“*Hierarchical Lists*”テーマのAdditional text 定数またはStandard action 定数、あるいは任意のカスタム値を渡すことができます。*selector* と *value* 引数に関する詳細は、[SET LIST ITEM PARAMETER](set-list-item-parameter.md) コマンドの説明を参照してください。

#### 参照 

*Hierarchical Lists*  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 985 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



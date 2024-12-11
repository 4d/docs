---
id: set-list-properties
title: SET LIST PROPERTIES
slug: /commands/set-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST PROPERTIES.Syntax-->**SET LIST PROPERTIES** ( *list* ; *appearance* {; *icon* {; *lineHeight* {; *doubleClick* {; *multiSelections* {; *editable*}}}}} )<!-- END REF-->
<!--REF #_command_.SET LIST PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | リスト参照番号 |
| appearance | Integer | &#8594;  | *** 廃止予定、常に0を指定してください *** |
| icon | Integer | &#8594;  | *** 廃止予定、常に0を指定してください *** |
| lineHeight | Integer | &#8594;  | 最小行高さ (ピクセル単位) |
| doubleClick | Integer | &#8594;  | ダブルクリックでサブリストを展開/折り畳み 0 = Yes, 1= No |
| multiSelections | Integer | &#8594;  | 複数行選択: 0 = No (デフォルト), 1 = Yes |
| editable | Integer | &#8594;  | 0 = ユーザによるリスト編集不可, 1 = ユーザによるリスト編集可 (デフォルト) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET LIST PROPERTIES.Summary-->**SET LIST PROPERTIES** コマンドは、*list*引数に渡された参照番号を持つ階層リストの行の高さとセレクションプロパティを設定します。<!-- END REF-->

**互換性に関する注意:** *appearance* および *icon* 引数は廃止予定となり、これらは常に0を指定しなければなりません。

**注:** リスト内の各項目ごとのアイコンをカスタマイズしたい場合には、[SET LIST ITEM PROPERTIES](set-list-item-properties.md) コマンドを使用してください。

*lineHeight*引数を渡さない場合、階層リストの行の高さはオブジェクトに使用されるフォントおよびフォントサイズによって決定されます。*lineHeight* 引数に階層リストの行の最小の高さを渡すこともできます。使用されるフォントおよびフォントサイズから継承される行の高さより大きな値を渡した場合、階層リストの行の高さは強制的に渡された値になります。デフォルトの高さを指定するためには0を渡してください。

オプションの*doubleClick*引数により、親リスト項目をダブルクリックしてサブリストの展開/折りたたみを行うか、行わないかを定義できます。デフォルトでは親リスト項目をダブルクリックすることにより、子リストが開いたり閉じたりするようになっています。しかし、いくつかのユーザーインタフェイスではこの動作が起こらないようにする必要があります。そのためには、*doubleClick*引数を1に設定します。  
ダブルクリックの動作だけが発生しなくなります。リストのノードをクリックすることによりサブリストの開閉ができます。  
*doubleClick* 引数を省略するか0を渡すと、デフォルトの動作が適用されます。 

オプションの*multiSelections*引数を使用し、リストが複数項目の選択を受け入れるかどうかを指示することができます。  
デフォルトでは以前のバージョンの4Dと同様、階層リストの項目を複数同時に選択することはできません。リストに対してこの機能を利用可能にしたい場合は、*multiSelections*引数に1を渡します。その場合、次の方法で複数選択機能を使用することができます:

* 手動の場合、連続した項目の選択には**Shift**+**クリック**、連続していない項目の選択には**Ctrl+クリック(**Windows)または**Command+クリック**(Mac OS)を使用します。
* プログラムを使用する場合、[SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md) および[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md) コマンドを使用します。  
*multiSelections*引数に0を渡すか省略した場合、デフォルトの動作が適用されます。

オプションの引数*editable*を使用すると、データ入力中にリストがフィールドや変数に関連付けられた選択リストとして表示された際に、ユーザによる編集を可能にするかどうかを指示することができます。リストが編集可である場合、選択リストウインドウに**変更**ボタンが追加され、ユーザはエディタを用いて、値の追加や削除、並び替えを行うことができます。  
*editable*引数に値1を渡すか省略すると、そのリストは編集可能になります。0を渡すと、リストを編集することはできません。

#### 例題 

ダブルクリックによるサブリストの展開/折りたたみを許可しない場合を考えます。フォームメソッドのように以下のように記述することができます:

```4d
 Case of
    :(Form event code=On Load) //v17 以前ではForm event を使用すること
       hlCities:=Load list("Cities") //Citiesという選択リストをhlCitiesフォームオブジェクトに読み込みます
       SET LIST PROPERTIES(hlCities;0;0;0;1) //ダブルクリックでの展開/折りたたみを禁止
 End case
```

#### 参照 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[GET LIST PROPERTIES](get-list-properties.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 387 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



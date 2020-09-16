---
id: tabControl
title: タブコントロール
---

タブコントロールは、ユーザーが複数の仮想画面の中から選択することのできるオブジェクトを作成します。この画面はタブコントロールオブジェクトにより囲まれています。 タブをクリックすることで、各画面にアクセスします。

次の複数ページフォームではタブコントロールオブジェクトが使用されています:

![](assets/en/FormObjects/tabControl1.png)

各画面を移動するには、目的のタブをクリックします。

これらの画面は、マルチページフォームの各ページを表わしたり、またはユーザーがタブがクリックすると変化するオブジェクトを表わすこともできます。 タブコントロールをページ移動ツールとして使用する場合、ユーザーがタブをクリックすると [FORM GOTO PAGE](https://doc.4d.com/4Dv18R3/4D/18-R3/FORM-GOTO-PAGE.301-4900983.ja.html) コマンドまたは`gotoPage` 標準アクションを使用します。

タブコントロールの他の利用法は、サブフォームやリストボックスに表示されるデータを制御することです。 たとえば、名刺帳はタブコントロールを用いて実現することができます。 タブにはひらがなの各文字を表示し、タブコントロールの動作としてはユーザーがクリックした文字と一致するデータをロードします。

各タブにはラベルだけ、またはラベルと小さなアイコンを表示することができます。 アイコンが含まれる場合、そのアイコンは各ラベルの左側に表示されます。 次の図はアイコンを使用するタブコントロールの例です:

![](assets/en/FormObjects/tabControl2.png)

タブコントロールを作成すると、4Dがタブの間隔と配置を管理します。 ラベルは配列形式で定義し、アイコンとラベルは階層リスト形式で定義します。

タブコントロールが十分大きく、ラベルとアイコンが設定されたタブをすべて表示できる場合は、その両方が表示されます。 タブコントロールの大きさが足らず、ラベルとアイコンを両方とも表示できない場合には、4Dはアイコンだけを表示します。 すべてのアイコンが収まりきらない場合、表示される最後のタブの右側にスクロール矢印が置かれます。 このスクロール矢印を使用し、アイコンを左右にスクロールできます。

macOSの場合、タブコントロールを標準位置 (上) だけでなく、下にも配置することができます。


### JSON 例:

```4d
    "myTab": {
        "type": "tab",
        "left": 60, 
        "top": 160,  
        "width": 100,   
        "height": 20,   
        "labelsPlacement": "bottom" // タブコントロールの位置
    }
```



## タブコントロールへのラベルの追加

タブコントロールにラベルを設定するには、いくつかの方法があります:

*   タブコントロールに [選択リスト](properties_DataSource.md#選択リスト-静的リスト) を関連付けることができます。これにはコレクション (静的リスト)、または json リストへの JSON ポインター ("$ref") を使用します。 リストエディターにてリスト項目に関連付けられたアイコンはタブコントロールに表示されます。
*   フォームの各ページの名前を格納するテキスト配列を作成することができます。 このコードはユーザーにフォームを表示する前に実行しなければなりません。 たとえば、このコードをタブコントロールのオブジェクトメソッドに置いて、`On Load` イベントが生じたときにこのメソッドを実行します。

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```
> ページの名前を階層リストに保存し、`Load list` コマンドを使用して値をロードすることも可能です。


## プログラムによるタブの管理

### FORM GOTO PAGE コマンド

タブコントロールのメソッドで [FORM GOTO PAGE](https://doc.4d.com/4Dv18R3/4D/18-R3/FORM-GOTO-PAGE.301-4900983.ja.html) コマンドを使用できます:

```4d
FORM GOTO PAGE(arrPages)
```

`On Clicked` イベントが発生すると、このコマンドが実行されます。 この後 `On Unload` イベントの発生時にこの配列をクリアします。

オブジェクトメソッドの例を次に示します:

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### gotoPage 標準アクション

タブコントロールに `gotoPage` [標準アクション](properties_Action.md#標準アクション) を割り当てることができます。すると、4Dはクリックされたタブコントロールの番号に相当するフォームのページを自動的に表示します。

たとえば、ユーザーが 3番目のタブをクリックすると、4Dはカレントフォームの 3ページ目 (存在する場合) を表示します。


## プロパティ一覧
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list-static-list) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Standard action](properties_Action.md#standard-action) - [Tab Control Direction](properties_Appearance.md#tab-control-direction) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

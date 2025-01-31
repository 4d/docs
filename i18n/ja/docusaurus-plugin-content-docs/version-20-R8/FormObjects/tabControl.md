---
id: tabControl
title: タブコントロール
---

タブコントロールは、ユーザーが複数の仮想画面の中から選択することのできるオブジェクトを作成します。この画面はタブコントロールオブジェクトにより囲まれています。 タブをクリックすることで、各画面にアクセスします。

次の複数ページフォームではタブコントロールオブジェクトが使用されています:

![](../assets/en/FormObjects/tabControl1.png)

各画面を移動するには、目的のタブをクリックします。

これらの画面は、マルチページフォームの各ページを表わしたり、またはユーザーがタブがクリックすると変化するオブジェクトを表わすこともできます。 タブコントロールをページ移動ツールとして使用する場合、ユーザーがタブをクリックすると [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/ja/page247.html) コマンドまたは `gotoPage` 標準アクションを使用します。

タブコントロールの他の利用法は、サブフォームやリストボックスに表示されるデータを制御することです。 たとえば、名刺帳はタブコントロールを用いて実現することができます。 タブにはひらがなの各文字を表示し、タブコントロールの動作としてはユーザーがクリックした文字と一致するデータをロードします。

各タブにはラベルだけ、またはラベルと小さなアイコンを表示することができます。 アイコンが含まれる場合、そのアイコンは各ラベルの左側に表示されます。 次の図はアイコンを使用するタブコントロールの例です:

![](../assets/en/FormObjects/tabControl2.png)

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
		"labelsPlacement": "bottom"	// タブコントロールの位置
	}
```

## タブコントロールへのラベルの追加

タブコントロールにラベルを設定するには、次のものを利用できます:

- オブジェクト
- 選択リスト
- 配列

### オブジェクトの使用

[コレクション](../Concepts/dt_collection.md) をカプセル化した [オブジェクト](../Concepts/dt_object.md) をタブコントロールの [データソース](properties_Object.md#変数あるいは式) として割り当てることができます。 このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | 型          | 説明                                                                          |
| -------------- | ---------- | --------------------------------------------------------------------------- |
| `values`       | Collection | 必須 - スカラー値のコレクション。 文字列の値のみがサポートされています。 無効、空、または未定義の場合、タブコントロールは空になります       |
| `index`        | number     | タブコントロールのカレントページのインデックス (0 と `collection.length-1` の間の値) |
| `currentValue` | Text       | 現在選択されている値                                                                  |

この初期化コードはユーザーにフォームを表示する前に実行しなければなりません。

次の例では、タブコントロールの [式](properties_Object.md#変数あるいは式) として `Form.tabControl` が定義されています。 フォームオブジェクトに [`gotoPage` 標準アクション](#gotopage-標準アクション) を関連付けることができます。

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 // ページ3 から開始します
```

### 選択リストの使用

タブコントロールに [選択リスト](properties_DataSource.md#選択リスト-静的リスト) を関連付けることができます。これにはコレクション (静的リスト)、または jsonリスト ("$ref") への JSONポインターを使用します。 リストエディターにてリスト項目に関連付けられたアイコンはタブコントロールに表示されます。

### テキスト配列の使用

フォームの各ページの名前を格納するテキスト配列を作成することができます。 このコードはユーザーにフォームを表示する前に実行しなければなりません。 たとえば、このコードをタブコントロールのオブジェクトメソッドに置いて、`On Load` イベントが生じたときにこのメソッドを実行します。

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

> ページの名前を階層リストに保存し、[LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/ja/page288.html) コマンドを使用して値をロードすることも可能です。

## Goto page 機能

### FORM GOTO PAGE コマンド

タブコントロールのメソッドで [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/ja/page247.html) コマンドを使用できます:

```4d
FORM GOTO PAGE(arrPages)
```

[`On Clicked`](Events/onClicked.md) イベントが発生すると、このコマンドが実行されます。 この後 [`On Unload`](Events/onUnload.md) イベントの発生時にこの配列をクリアします。

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

[タイプ](properties_Object.md#タイプ) -
[オブジェクト名](properties_Object.md#オブジェクト名) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[式の型](properties_Object.md#式の型式タイプ) -
[値を記憶](properties_Object.md#値を記憶) -
[CSSクラス](properties_Object.md#cssクラス) -
[選択リスト](properties_DataSource.md#選択リスト-静的リスト) -
[左](properties_CoordinatesAndSizing.md#左) -
[上](properties_CoordinatesAndSizing.md#上) -
[右](properties_CoordinatesAndSizing.md#右) -
[下](properties_CoordinatesAndSizing.md#下) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[高さ](properties_CoordinatesAndSizing.md#高さ) -
[横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) -
[縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) -
[表示状態](properties_Display.md#表示状態) -
[タブコントロールの位置](properties_Appearance.md#タブコントロールの位置) -
[フォント](properties_Text.md#フォント) -
[フォントサイズ](properties_Text.md#フォントサイズ) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[下線](properties_Text.md#下線) -
[ヘルプTips](properties_Help.md#ヘルプtips) -
[標準アクション](properties_Action.md#標準アクション)

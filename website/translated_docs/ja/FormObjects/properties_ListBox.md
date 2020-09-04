---
id: propertiesListBox
title: リストボックス
---

---
## 列

リストボックス列のコレクション。

#### JSON 文法

| 名       | データタイプ          | とりうる値                 |
| ------- | --------------- | --------------------- |
| columns | 列オブジェクトのコレクション。 | リストボックス列のプロパティを格納します。 |

列オブジェクトに関してサポートされているプロパティの一覧については [列特有のプロパティ](listbox_overview#列特有のプロパティ) の章を参照してください。

#### 対象オブジェクト

[リストボックス](listbox_overview.md)

---
## 詳細フォーム名
`セレクション型リストボックス`

リストボックスの個々のレコードを編集・表示する際に使用するフォームを指定します。

指定されたフォームは以下のタイミングで表示されます:

*   リストボックスに関連付けられている `addSubrecord` (サブレコード追加)、または `editSubrecord` (サブレコード編集) の標準アクションを使用したとき ([標準アクションの使用](https://doc.4d.com/4Dv18/4D/18/Using-standard-actions.300-4575640.ja.html) を参照してください)。
*   [行をダブルクリック](#行をダブルクリック) プロパティが「レコード編集」か「レコード表示」に設定されている場合に行をダブルクリックしたとき。

#### JSON 文法

| 名          | データタイプ | とりうる値                                                                                                                                                        |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| detailForm | string | <li>テーブルまたはプロジェクトフォームの名前 (文字列)<li>フォームを定義する .json ファイルへの POSIX パス (文字列)<li>フォームを定義するオブジェクト |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## 行をダブルクリック
`セレクション型リストボックス`

ユーザーがリストボックスの行をダブルクリックした際に実行されるアクションを指定します。 選択可能なオプションは以下の通りです:

*   **何もしない** (デフォルト): 行をダブルクリックしても自動アクションは発動しません。
*   **レコード編集**: 行をダブルクリックすると、リストボックスに設定された [詳細フォーム名](#詳細フォーム名) に当該レコードが表示されます レコードは読み書き可能モードで開かれるので、編集が可能です。
*   **レコード表示**: レコード編集と同様の挙動をしますが、レコードは読み取り専用モードで開かれるため、編集はできません。
> 空の行へのダブルクリックは無視されます。

選択されているアクションに関わらず、`On Double Clicked` フォームイベントが生成されます。

「レコード編集」「レコード表示」のアクションに関しては `On Open Detail` フォームイベントも生成されます。 リストボックスに関連付けられた詳細フォームに表示されたレコードが閉じられる際には `On Close Detail` フォームイベントが生成されます (レコードが編集されたかどうかは問いません)。

#### JSON 文法

| 名                      | データタイプ | とりうる値                               |
| ---------------------- | ------ | ----------------------------------- |
| doubleClickInRowAction | string | "editSubrecord", "displaySubrecord" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)




---
## ハイライトセット

`セレクション型リストボックス`

このプロパティを使用して、リストボックス中でハイライトされたレコードを管理するために使用するセット名を指定します (**配列** データソースが指定されている場合には、リストボックスに割り当てた変数と同じ名前のブール配列をこの用途で使用します)。

4D は *ListBoxSetN* (*N* は 0 から始まり、フォーム上のリストボックスオブジェクトの数に従い増分されます) という名前のデフォルトセットを作成しますが、 必要に応じてこの名前を変更できます。 セットはローカル、プロセスおよびインタープロセスセットを使用できます (ネットワークトラフィックを制限するため、*$LBSet* のようなローカルセットの使用を推奨します)。 指定されたセットは 4D が自動で管理します。 ユーザーが 1つ以上の行を選択すると、セットは即座に更新されます。 プログラムを使用して行を選択したい場合、"セット" テーマのコマンドをこのセットに適用できます。
> * リストボックス行のハイライトステータスとテーブルレコードのハイライトステータスは完全に独立しています。
> * "ハイライトセット" プロパティに名前が指定されていない場合、リストボックス中で行を選択することはできません。

#### JSON 文法

| 名            | データタイプ | とりうる値  |
| ------------ | ------ | ------ |
| highlightSet | string | セットの名称 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)



---
## スクロールしない列数/ドラッグしない列数

Locked columns and static columns are two separate and independent functionalities in list boxes:

*   Locked columns always stay displayed to the left of the list box; they do not scroll horizontally.
*   Static columns cannot be moved by drag and drop within the list box.
> You can set static and locked columns by programming, refer to [List Box](https://doc.4d.com/4Dv17R6/4D/17-R6/List-Box.201-4310263.en.html) in the [4D Language Reference](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Language-Reference.100-4310216.en.html) manual.

These properties interact as follows:

*   If you set columns that are only static, they cannot be moved.

*   If you set columns that are locked but not static, you can still change their position freely within the locked area. However, a locked column cannot be moved outside of this locked area.

![](assets/en/FormObjects/property_lockedStaticColumns1.png)

*   If you set all of the columns in the locked area as static, you cannot move these columns within the locked area.

![](assets/en/FormObjects/property_lockedStaticColumns2.png)

*   You can set a combination of locked and static columns according to your needs. For example, if you set three locked columns and one static column, the user can swap the two right-most columns within the locked area (since only the first column is static).

### スクロールしない列数

Number of columns that must stay permanently displayed in the left part of the list box, even when the user scrolls through the columns horizontally.

#### JSON 文法

| 名                 | データタイプ  | とりうる値  |
| ----------------- | ------- | ------ |
| lockedColumnCount | integer | 最小値: 0 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)


### ドラッグしない列数

Number of columns that cannot be moved during execution.

#### JSON 文法

| 名                 | データタイプ  | とりうる値  |
| ----------------- | ------- | ------ |
| staticColumnCount | integer | 最小値: 0 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## 列数

Sets the number of columns of the list box.
> You can add or remove columns dynamically by programming, using commands such as [LISTBOX INSERT COLUMN](https://doc.4d.com/4Dv18/4D/18/LISTBOX-INSERT-COLUMN.301-4505224.en.html) or [LISTBOX DELETE COLUMN](https://doc.4d.com/4Dv18/4D/18/LISTBOX-DELETE-COLUMN.301-4505185.en.html).

#### JSON 文法

| 名           | データタイプ  | とりうる値  |
| ----------- | ------- | ------ |
| columnCount | integer | 最小値: 1 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)




---
## 行コントロール配列

`Array type list box`

A 4D array controlling the display of list box rows.

You can set the "hidden", "disabled" and "selectable" interface properties for each row in an array-based list box using this array. It can also be designated using the `LISTBOX SET ARRAY` command.

The row control array must be of the Longint type and include the same number of rows as the list box. Each element of the *Row Control Array* defines the interface status of its corresponding row in the list box. Three interface properties are available using constants in the "List Box" constant theme:

| Constant                 | 結果 | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk row is disabled       | 2  | The corresponding row is disabled. The text and controls such as check boxes are dimmed or grayed out. Enterable text input areas are no longer enterable. Default value: Enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| lk row is hidden         | 1  | The corresponding row is hidden. Hiding rows only affects the display of the list box. The hidden rows are still present in the arrays and can be managed by programming. The language commands, more particularly `LISTBOX Get number of rows` or `LISTBOX GET CELL POSITION`, do not take the displayed/hidden status of rows into account. For example, in a list box with 10 rows where the first 9 rows are hidden, `LISTBOX Get number of rows` returns 10. From the user’s point of view, the presence of hidden rows in a list box is not visibly discernible. Only visible rows can be selected (for example using the Select All command). Default value: Visible |
| lk row is not selectable | 4  | The corresponding row is not selectable (highlighting is not possible). Enterable text input areas are no longer enterable unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. Controls such as check boxes and lists are still functional however. This setting is ignored if the list box selection mode is "None". Default value: Selectable                                                                                                                                                                                                                                                                                        |

To change the status for a row, you just need to set the appropriate constant(s) to the corresponding array element. For example, if you do not want row #10 to be selectable, you can write:

```4d
 aLControlArr{10}:=lk row is not selectable
```

![](assets/en/FormObjects/listbox_styles5.png)

You can define several interface properties at once:

```4d
 aLControlArr{8}:=lk row is not selectable + lk row is disabled
```

![](assets/en/FormObjects/listbox_styles6.png)

Note that setting properties for an element overrides any other values for this element (if not reset). たとえば:

```4d
 aLControlArr{6}:=lk row is disabled + lk row is not selectable 
 //sets row 6 as disabled AND not selectable
 aLControlArr{6}:=lk row is disabled 
 //sets row 6 as disabled but selectable again
```


#### JSON 文法

| 名                | データタイプ | とりうる値                  |
| ---------------- | ------ | ---------------------- |
| rowControlSource | string | Row control array name |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)



---
## 選択モード

Designates the option for allowing users to select rows:
- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Single-Click Edit](properties_Entry.md#single-click-edit) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Clicking on a row will select it. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).  
  The Up and Down arrow keys select the previous/next row in the list. The other navigation keys scroll the list. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.


#### JSON 文法

| 名             | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | string | "multiple", "single", "none" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)
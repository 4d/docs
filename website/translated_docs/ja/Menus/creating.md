---
id: creating
title: メニューとメニューバーの作成
---

メニューおよびメニューバーを作成するには次の 2つの方法があります:

- 4Dツールボックスウィンドウのメニューエディターを使用する。 この場合、メニューとメニューバーはアプリケーションのストラクチャーに保存されます。
- "メニュー" テーマのランゲージコマンドを使用して動的におこなう。 この場合、メニューとメニューバーは保存されず、メモリ内にのみ存在します。

両方の機能を組み合わせて、メモリ内のメニューを定義するのに、ストラクチャーに作成したメニューをテンプレートとして使うこともできます。


## デフォルトメニューバー

カスタムアプリケーションには、少なくとも 1つのメニューを持つ 1つのメニューバーが必要です。 By default, when you create a new project, 4D automatically creates a default menu bar (Menu Bar #1) so that you can access the Application environment. このデフォルトメニューバーには、標準のメニューとデザインモードに入るためのコマンドが用意されています。

This allows the user to access the Application environment as soon as the project is created. **実行** メニューから **アプリケーションモード** コマンドを選択すると、自動でメニューバー#1 が呼び出されます。

デフォルトメニューバーには 3つメニューがあります:

- **ファイル**: このメニューには **終了** コマンドだけが含まれています。 このコマンドには *quit* 標準アクションが割り当てられていて、選択されるとアプリケーションが終了します。
- **編集**: 編集メニューは標準であり、内容の変更が可能です。 編集メニューのコマンド (コピーやペーストなど) は標準アクションで指定できます。
- **モード**: モードメニューにはデフォルトで、アプリケーションモードを終了するための **デザインモードに戻る** コマンドが含まれます。
> メニュータイトルはハードコードされたテキストではなく、xliff 参照を使用しています。 この点については [タイトルプロパティ](properties.md#タイトル) を参照してください。

このメニューバーを必要に応じて変更したり、新しく追加したりできます。


## メニューの作成

### メニューエディターを使用する

1. 作成する対象 (メニューバーまたはメニュー) を選択し、エリアの下にある追加ボタン ![](assets/en/Menus/PlussNew.png) をクリックします。 または<br /> リストのコンテキストメニューまたはリストの下にあるオプションメニューから **新規メニューバー作成** あるいは **新規メニュー作成** を選択します。 メニューバーを作成した場合は、新しいメニューバーがリスト中に追加され、デフォルトメニュー (ファイルと編集) があらかじめ添付されています。
2. (任意) メニューバー/メニューの名前の上でダブルクリックすると、名前を編集できるモードになり、名前を変更することができます。 または<br /> ウィンドウ右の "タイトル" エリアに名前を入力します。 メニューバー名はユニークでなければなりません。 名前には 31文字までの文字列を指定できます。 メニューのタイトルには文字列リテラルのほかに、参照も使用できます ([タイトルプロパティ](properties.md#タイトル) の説明を参照ください)。

### 4Dランゲージを使用する
`Create menu` コマンドを使って、新規メニューバーまたはメニュー参照 (*MenuRef*) をメモリ上に作成します。

メニューが *MenuRef* 参照を使用して処理される場合、メニューとメニューバーの間に違いはありません。 両方とも項目のリストから構成されます。 それらの利用方法のみが異なります。 メニューバーの各項目は、それ自身が 1つのメニューであり、項目から構成されています。

`Create menu` で空のメニューを作成した場合には、`APPEND MENU ITEM` または `INSERT MENU ITEM` コマンドによって項目を追加していきます。また、同コマンドのソースメニューとして、メニューエディターで定義されたメニューを指定した場合には、そのコピーが新しいメニューとして作成されます。

## 項目の追加
各メニューには、メニューがクリックされたときにドロップダウン表示されるメニュー項目を作成しなければなりません。 項目を追加してメソッドや標準アクションを割り当てたり、他のメニューをサブメニューとして添付したりできます。

### メニューエディターを使用する
メニュー項目を追加するには:

1. ソースメニューリスト中で、項目を追加するメニューを選択します。 メニューが既に項目を持っていれば、それが中央のリストに表示されます。 新しい項目を挿入するには、その上にくる項目を選択します。 ドラッグ＆ドロップ操作で、後から順番を変更することも可能です。
2. メニューエディターのオプションメニュー、またはエディターのコンテキストメニュー (中央のリスト内で右クリック) から **メニューバー/メニュー "メニュー名" に項目を追加** を選択します。 または<br /> 中央のリストの下にある追加ボタン ![](assets/en/Menus/PlussNew.png) をクリックします。 項目が追加され、デフォルト名 "項目 X" が割り当てられます (X は項目の番号)。
3. 項目名の上でダブルクリックすると、名前を編集できるモードになり、名前を変更することができます。 または<br /> ウィンドウ右の "タイトル" エリアに名前を入力します。 名前には 31文字までの文字列を指定できます。 メニューのタイトルには文字列リテラルのほかに、参照も使用できます (後述参照)。


### 4Dランゲージを使用する

既存のメニュー参照にメニュー項目を挿入するには `INSERT MENU ITEM` または `APPEND MENU ITEM` コマンドを使います。


## メニューや項目の削除

### メニューエディターを使用する
メニューエディターを使って、メニューバー、メニュー、メニュー項目をいつでも削除できます。 各メニューやメニューバーは 1つの参照しか持たない点に留意してください。 When a menu is attached to different bars or different menus, any modification or deletion made to the menu is immediately carried out in all other occurrences of this menu. Deleting a menu will only delete a reference. When you delete the last reference of a menu, 4D displays an alert.

To delete a menu bar, menu or menu item:

- Select the item to be deleted and click on the delete ![](assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> It is not possible to delete Menu Bar #1.


### 4Dランゲージを使用する

Use `DELETE MENU ITEM` to remove an item from a menu reference. Use `RELEASE MENU` to unload the menu reference from the memory.


## Attaching menus

Once you have created a menu, you can attach it to one or several other menus (sub-menu) or menu bar(s).

Sub-menus can be used to group together functions organized according to subject within the same menu. Sub-menus and their items can have the same attributes as the menus themselves (actions, methods, shortcuts, icons, and so on). The items of the sub-menu keep their original characteristics and properties and the functioning of the sub-menu is identical to that of a standard menu.

You can create sub-menus of sub-menus to a virtually unlimited depth. Note, however, that for reasons concerning interface ergonomics, it is generally not recommended to go beyond two levels of sub-menus.

At runtime, if an attached menu is modified by programming, every other instance of the menu will reflect these changes.


### メニューエディターを使用する

A menu can be attached to a menu bar or to another menu.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar: ![](assets/en/Menus/attach.png) You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:  
  ![](assets/en/Menus/attach2.png) You can also select a menu item then click on the options button found below the list. The menu being attached thus becomes a sub-menu. The title of the item is kept (the original sub-menu name is ignored), but this title can be modified.

#### Detaching menus

You can detach a menu from a menu bar or a sub-menu from a menu at any time. The detached menu is then no longer available in the menu bar or sub-menu as the case may be, but it is still present in the list of menus.

To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the **Detach the menu(...)** or **Detach the sub-menu(...)**

### 4Dランゲージを使用する

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the *subMenu* parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.  

---
id: creating
title: メニューとメニューバーの作成
---

メニューおよびメニューバーを作成するには次の 2つの方法があります:

- 4Dツールボックスウィンドウのメニューエディターを使用する。 この場合、メニューとメニューバーはアプリケーションのストラクチャーに保存されます。
- "メニュー" テーマのランゲージコマンドを使用して動的におこなう。 この場合、メニューとメニューバーは保存されず、メモリ内にのみ存在します。

両方の機能を組み合わせて、メモリ内のメニューを定義するのに、ストラクチャーに作成したメニューをテンプレートとして使うこともできます。

## デフォルトメニューバー

カスタムアプリケーションには、少なくとも 1つのメニューを持つ 1つのメニューバーが必要です。 新規にプロジェクトを作成すると、4D は自動でデフォルトメニューバー (メニューバー#1) を作成します。 このデフォルトメニューバーには、標準のメニューとデザインモードに入るためのコマンドが用意されています。

このメニューが用意されているため、ユーザーはプロジェクトを起動するとすぐにアプリケーションモードを使用できます。 Menu Bar #1 is called automatically when the **Test Application** command is chosen in the **Run** menu.

デフォルトメニューバーには 3つメニューがあります:

- **File**: only includes the **Quit** command. The _Quit_ standard action is associated with the command, which causes the application to quit.
- **Edit**: standard and completely modifiable. 編集メニューのコマンド (コピーやペーストなど) は標準アクションで指定できます。
- **Mode**: contains, by default, the **Return to Design mode** command, which is used to exit the Application mode.

> Menu items appear _in italics_ because they consist of references and not hard-coded text. Refer to [Title property](properties.md#title).

このメニューバーを必要に応じて変更したり、新しく追加したりできます。

## メニューの作成

### メニューエディターを使用する

1. Select the item you want to create and click the add ![](../assets/en/Menus/PlussNew.png) button below the menu bar area.
   OR
   Choose **Create a new menu bar** or **Create a new menu** from the context menu of the list or the options menu below the list.
   メニューバーを作成した場合は、新しいメニューバーがリスト中に追加され、デフォルトメニュー (ファイルと編集) があらかじめ添付されています。
2. (任意) メニューバー/メニューの名前の上でダブルクリックすると、名前を編集できるモードになり、名前を変更することができます。
   または <br />
   ウィンドウ右の "タイトル" エリアに名前を入力します。
   メニューバー名はユニークでなければなりません。 名前には 31文字までの文字列を指定できます。 You can enter the name as "hard coded" or enter a reference (see [information about the Title property](properties.md#title)).

### 4Dランゲージを使用する

Use the `Create menu` command to create a new menu bar or menu reference (_MenuRef_) in memory.

When menus are handled by means of _MenuRef_ references, there is no difference per se between a menu and a menu bar. 両方とも項目のリストから構成されます。 それらの利用方法のみが異なります。 メニューバーの各項目は、それ自身が 1つのメニューであり、項目から構成されています。

`Create menu` can create empty menus (to fill using `APPEND MENU ITEM` or `INSERT MENU ITEM`) or by menus built upon menus designed in the Menu editor.

## 項目の追加

各メニューには、メニューがクリックされたときにドロップダウン表示されるメニュー項目を作成しなければなりません。 項目を追加してメソッドや標準アクションを割り当てたり、他のメニューをサブメニューとして添付したりできます。

### メニューエディターを使用する

メニュー項目を追加するには:

1. ソースメニューリスト中で、項目を追加するメニューを選択します。
   メニューが既に項目を持っていれば、それが中央のリストに表示されます。 新しい項目を挿入するには、その上にくる項目を選択します。 ドラッグ＆ドロップ操作で、後から順番を変更することも可能です。
2. Choose **Add an item to menu “MenuName”** in the options menu of the editor or from the context menu (right click in the central list).
   OR
   Click on the add ![](../assets/en/Menus/PlussNew.png) button located below the central list.
   項目が追加され、デフォルト名 "項目 X" が割り当てられます (X は項目の番号)。
3. 項目名の上でダブルクリックすると、名前を編集できるモードになり、名前を変更することができます。
   または <br />
   ウィンドウ右の "タイトル" エリアに名前を入力します。 名前には 31文字までの文字列を指定できます。 メニューのタイトルには文字列リテラルのほかに、参照も使用できます (後述参照)。

### 4Dランゲージを使用する

Use `INSERT MENU ITEM` or `APPEND MENU ITEM` to insert or to add menu items in existing menu references.

## メニューや項目の削除

### メニューエディターを使用する

メニューエディターを使って、メニューバー、メニュー、メニュー項目をいつでも削除できます。 各メニューやメニューバーは 1つの参照しか持たない点に留意してください。 あるメニューが、複数のメニューバーやメニューに添付されていた場合、そのメニューに対しておこわれた変更や削除はこのメニューのすべての他のオカレンスに対しても有効となります。 メニューを削除すると、参照だけが削除されます。 特定のメニューへの最後の参照を削除しようとすると、4Dはアラートを表示します。

メニューバー、メニュー、メニューコマンドを削除するには:

- Select the item to be deleted and click on the delete ![](../assets/en/Menus/MinussNew.png) button located beneath the list.
- or, use the appropriate **Delete...**  command from the context menu or the options menu of the editor.

> メニューバー#1 を削除することはできません。

### 4Dランゲージを使用する

Use `DELETE MENU ITEM` to remove an item from a menu reference. Use `RELEASE MENU` to unload the menu reference from the memory.

## メニューの添付

メニューを作成したら、それをメニューバーや別のメニューに (サブメニューとして) 添付できます。

サブメニューは、テーマに基づき機能をグループ化する目的で使用されます。 サブメニューとその項目は、メニューと同じ属性 (アクション、メソッド、ショートカット、アイコン等) を持つことができます。 サブメニューの項目は元の特性やプロパティを保持し、サブメニューの動作は標準のメニューと同じです。

サブメニューのサブメニューを作成することができ、階層化に制限はありません。 しかし、インターフェース標準に沿うには、2レベルを超えるサブメニューは推奨されません。

ランタイムにおいてプログラミングによりメニューを変更した場合、そのメニューが添付されているすべてのインスタンスに変更が反映されます。

### メニューエディターを使用する

各メニューは、メニューバーあるいは別のメニューに添付できます。

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar:
  ![](../assets/en/Menus/attach.png)
  You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:\
  ![](../assets/en/Menus/attach2.png)
  You can also select a menu item then click on the options button found below the list.
  添付されたメニューはサブメニューとなります。 項目のタイトルは保持されますが (元のサブメニュー名は無視されます)、このタイトルを変更することができます。

#### メニューの分離

メニューバーからメニューを、あるいはメニューからサブメニューを分離できます。 分離されたメニューは、メニューバーやメニューから利用できなくなります。しかしメニューリストには残されます。

To detach a menu, right-click with the right button on the menu or sub-menu that you want to detach in the central list, then choose the **Detach the menu(...)** or **Detach the sub-menu(...)**

### 4Dランゲージを使用する

Since there is no difference between menus and menu bars in the 4D language, attaching menus or sub-menus is done in the same manner: use the _subMenu_ parameter of the `APPEND MENU ITEM` command to attach a menu to a menu bar or an menu.

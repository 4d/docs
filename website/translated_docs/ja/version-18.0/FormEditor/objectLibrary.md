---
id: version-18.0-objectLibrary
title: オブジェクトライブラリ
original_id: objectLibrary
---

## 概要

フォームの作成にあたっては、オブジェクトライブラリを利用することができます。 オブジェクトライブラリは、ドラッグ＆ドロップやコピー/ペーストするだけでフォームに追加することができる、あらかじめ設定された各種オブジェクトを提供しています。

4D では 2種類のオブジェクトライブラリを利用できます:

- 標準の設定済みオブジェクトライブラリはすべてのプロジェクトに利用できます 
- カスタムオブジェクトライブラリは、開発者自身がお気に入りのフォームオブジェクトや、あるいはプロジェクトフォームそのものをとっておくためのものです

## 標準のオブジェクトライブラリ

標準のオブジェクトライブラリはフォームエディターからアクセスすることができます: ツールバーの右にある次のボタンをクリックします:  
![](assets/en/FormEditor/library1.png)

すると、ライブラリが別ウィンドウに開きます:

![](assets/en/FormEditor/library2.png)

このウィンドウには次の主な機能があります:

- Tips 付きプレビューエリア: 中央のエリアには各オブジェクトのプレビューが表示されます。 オブジェクトにマウスオーバーすると、オブジェクトに関する情報が Tips として表示されます。
- 表示オブジェクトは **カテゴリ** メニューを使って絞り込むことができます: ![](assets/en/FormEditor/library3.png)
- ライブラリのオブジェクトをフォーム上で使うには: 
    - オブジェクト上で右クリックし、コンテキストメニューから **コピー** を選択してフォーム上で同様に **ペースト** するか、
    - ライブラリからオブジェクトをフォーム上にドラッグ＆ドロップします。 すると、フォームに当該オブジェクトが追加されます。 

設定済みオブジェクトライブラリは変更できません。 デフォルトオブジェクトを編集したり、設定済みオブジェクトやフォームのライブラリを独自に作るには、カスタムオブジェクトライブラリを作成します (後述参照)。

標準のオブジェクトライブラリにて提供されているオブジェクトについては [doc.4d.com](https://doc.4d.com/4Dv18/4D/18/Library-objects.200-4575412.ja.html) で詳しく説明されています。

## カスタムオブジェクトライブラリの作成と使用

4Dでカスタムオブジェクトライブラリを作成し、使用することができます。 カスタムオブジェクトライブラリとは、任意のオブジェクト (ボタン、テキスト、ピクチャー等) を格納する 4D プロジェクトです。これらのオブジェクトは別のフォームやプロジェクトにて再利用することができます。

オブジェクトはプロパティおよびオブジェクトメソッドとともに格納されます。 ライブラリはドラッグ＆ドロップや、コピー/ペースト操作で利用できます。

ライブラリを使用すると、グラフィックファミリーや振る舞いごとにグループ化したフォームオブジェクトを作成できます。

### オブジェクトライブラリの作成

オブジェクトライブラリを作成するには、**ファイル** メニューまたはツールバーから **新規>オブジェクトライブラリー...** を選択します。 標準のファイル保存用のダイアログボックスが表示され、オブジェクトライブラリの名前と保存先を指定できます。

ダイアログボックスを受け入れると、4D はディスク上に新しいオブジェクトライブラリを作成し、ウィンドウに表示します (デフォルトで空です)。

![](assets/en/FormEditor/library4.png)

ライブラリは必要なだけ作成できます。 macOS上で作成されたライブラリーを Windowsで使用すること、あるいはその逆も可能です。

### オブジェクトライブラリーを開く

A given object library can only be opened by one database at a time. However, several different libraries can be opened in the same database.

To open a custom object library, select **Open>Object Library...** command in the 4D **File** menu or tool bar. A standard open file dialog box appears, which allows you to select the object library to open. You can select the following file types:

- **.4dproject**
- **.4dz**

In fact, custom object libraries are regular 4D projects. Only the following parts of a project are exposed when it is opened as library:

- project forms
- first form pages

### Building an object library

Objects are placed in an object library using drag-and-drop or a cut-copy-paste operation. They can come from either a form or another object library (including the [standard library](#using-the-standard-object-library)). No link is kept with the original object: if the original is modified, the copied object is not affected.

> In order to be able to drag and drop objects from forms to object libraries, you must make sure the **Start drag and drop** option in the 4D Preferences is selected.

Basic operations are available in the context menu or the options menu of the window:

![](assets/en/FormEditor/library5.png)

- **Cut** or **Copy** to the pasteboard
- **Paste** an object from the pasteboard
- **Clear** - deletes the object from the library
- **Rename** - a dialog box appears allowing you to rename the item. Note that object names must be unique in a library. 

You can place individual objects (including subforms) or sets of objects in an object library. Each object or set is grouped into a single item:

![](assets/en/FormEditor/library6.png)

An object library can contain up to 32,000 items.

Objects are copied with all their properties, both graphic and functional, including their methods. These properties are kept in full when the item is copied into a form or another library.

#### Dependent objects

Using copy-paste or drag-and-drop with certain library objects also causes their dependent objects to be copied. For example, copying a button will cause the object method that may be attached to be copied as well. These dependent objects cannot be copied or dragged and dropped directly.

The following is a list of dependent objects that will be pasted into the library at the same time as the main object that uses them (when applicable):

- Lists
- Formats/Filters
- Pictures
- Help Tips (linked to a field)
- Object methods
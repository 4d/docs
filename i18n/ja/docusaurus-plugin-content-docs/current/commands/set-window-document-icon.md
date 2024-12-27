---
id: set-window-document-icon
title: SET WINDOW DOCUMENT ICON
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Syntax-->**SET WINDOW DOCUMENT ICON** ( *winRef* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *image* )<br/>**SET WINDOW DOCUMENT ICON** ( *winRef* ; *file* )<br/>**SET WINDOW DOCUMENT ICON** (  *winRef* ; *image* ; *file* )<!-- END REF-->

<!--REF #_command_.SET WINDOW DOCUMENT ICON.Params-->

| 引数     | 型                                                  |   | 説明              |
| ------ | -------------------------------------------------- | - | --------------- |
| winRef | Integer                                            | → | ウィンドウ参照番号       |
| image  | Picture                                            | → | カスタムアイコン        |
| file   | 4D.File, 4D.Folder | → | ファイルパスまたはフォルダパス |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R7 | 追加 |

</details>

#### 説明

`SET WINDOW DOCUMENT ICON` コマンドは、<!--REF #_command_.SET WINDOW DOCUMENT ICON.Summary-->*winRef* ウィンドウ参照の引数に合わせて、*image* または *file* 引数を使用してマルチウィンドウアプリケーションにおいてウィンドウのアイコンを定義することができます<!-- END REF-->。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。 アイコンはウィンドウ自身とウィンドウタスクバーにおいて表示され、ユーザーが異なるウィンドウを識別して切り替えるのを助けます。

Windows でのMDI アプリケーションの場合、*winRef* 引数に`-1` を渡すことでメインウィンドウのアイコンを設定することができます。 この他のコンテキスト(Windows での[SDI アプリケーション](../Menus/sdi.md)またはmacOS) において-1 を使用しても何も起きません。 この他のコンテキスト(Windows での[SDI アプリケーション](../Menus/sdi.md)またはmacOS) において-1 を使用しても何も起きません。 この他のコンテキスト(Windows での[SDI アプリケーション](../Menus/sdi.md)またはmacOS) において-1 を使用しても何も起きません。 この他のコンテキスト(Windows での[SDI アプリケーション](../Menus/sdi.md)またはmacOS) において-1 を使用しても何も起きません。 この他のコンテキスト(Windows での[SDI アプリケーション](../Menus/sdi.md)またはmacOS) において-1 を使用しても何も起きません。

- *file* 引数のみが渡された場合、ウィンドウはファイルタイプに対応したアイコンを使用し、ウィンドウのメニューにはファイルのパスが表示されます。
- *image* 引数のみが渡された場合、4D はパスを表示せず、渡された画像がウィンドウアイコンとして使用されます。
- *file* および *image* 引数の両方が渡された場合、ウィンドウのメニューにはファイルのパスが表示され、渡された画像がウィンドウのアイコンとして使用されます。
- *winRef* のみが渡された場合、あるいは*image* 引数が空の場合、macOS ではアイコンが削除され、Windows ではデフォルトアイコン(アプリケーションアイコン)が表示されます。

#### 例題

この例題では、4つのウィンドウを作成したい場合を考えます:

1. Windows ではアプリケーションアイコンを使用し、macOs ではアイコンなしにする(*image* 引数も *file* 引数も使用しない場合のデフォルトの状態)。
2. "user"アイコンを使用する
3. ウィンドウにドキュメントを割り当てる(これはそのファイルタイプのアイコンを使用します)
4. ドキュメントに割り当てられたアイコンをカスタマイズする

```4d
 var $winRef : Integer
 var $userImage : Picture
 var $file : 4D.File
 
  // 1- "Contact" フォームを開く
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 SET WINDOW DOCUMENT ICON($winRef)
 DIALOG("Contact";*)
 
  // 2- "Contact" を"user" アイコンで開く
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)
 SET WINDOW DOCUMENT ICON($winRef;$userImage)
 DIALOG("Contact";*)
 
  // 3- "Contact" フォームに"user" ドキュメントを割り当てて開く
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$file)
 DIALOG("Contact";*)
 
  // 4- "Contact" フォームに"user" ドキュメントと"user" アイコンを割り当てる
 $winRef:=Open form window("Contact";Plain form window+Form has no menu bar)
 BLOB TO PICTURE(File("/RESOURCES/icon/user.png").getContent();$userImage)
 $file:=File("/RESOURCES/files/user.txt")
 SET WINDOW DOCUMENT ICON($winRef;$userImage;$file)
 DIALOG("Contact";*)

```

#### 参照

[Create entity selection](create-entity-selection.md)

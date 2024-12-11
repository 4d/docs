---
id: application-file
title: Application file
slug: /commands/application-file
displayed_sidebar: docs
---

<!--REF #_command_.Application file.Syntax-->**Application file**  : Text<!-- END REF-->
<!--REF #_command_.Application file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 4D実行形式のファイルまたはアプリケーションのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Application file.Summary-->Application fileコマンドは、 現在使用している4D実行形式のファイルまたはアプリケーションのパス名を返します。<!-- END REF-->

Windows  
例えば、ボリュームE上の\\PROGRAMS\\4Dに配置された4Dを使用している場合、この関数は、E:\\PROGRAMS\\4D\\4D.EXEを返します。

Macintosh  
例えば、Macintosh HDディスク上のProgramsフォルダの中にある4Dを使用している場合、この関数は、Macintosh HD:Programs:4D.appを返します。

#### 例題 

Windows上で、4Dの起動時に、DLLライブラリが4D実行形式のファイルと同じ階層に配置されているかどうかをチェックする必要があるとします。に次のコードを記述します:

```4d
 If(Is Windows&(Application type#4D Server))
    var $appPath : Object
    $appPath:=Path to object(Application file)
    If(Test path name(($appPath.parentFolder)+"XRAYCAPT.DLL")#Is a document)
       ALERT("XRAYCAPT.DLL が見つかりません。X-ray capture 機能は利用できません。")
    End if
 End if
```

#### 参照 

[Data file](data-file.md)  
[Structure file](structure-file.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 491 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



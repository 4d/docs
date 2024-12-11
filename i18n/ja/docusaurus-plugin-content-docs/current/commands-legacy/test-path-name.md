---
id: test-path-name
title: Test path name
slug: /commands/test-path-name
displayed_sidebar: docs
---

<!--REF #_command_.Test path name.Syntax-->**Test path name** ( *pathname* ) : Integer<!-- END REF-->
<!--REF #_command_.Test path name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pathname | Text | &#8594;  | ディレクトリ、フォルダまたはドキュメントへのパス名 |
| 戻り値 | Integer | &#8592; | 1=パス名は既存のドキュメントを表す 0=パス名は既存のディレクトリまたはフォルダを表す <0=無効のパス名、OSファイルマネージャエラーコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Test path name.Summary-->**Test path name**コマンドは、引数*pathname*に渡された名前またはパス名を持つドキュメントまたはフォルダーが、ディスク上に存在するかどうかをチェックします。<!-- END REF-->相対的なパス名または絶対的なパス名のいずれかをカレントシステムのシンタックスで表して渡します。

ドキュメントが見つかれば**Test path name**は1を返します。フォルダーが見つかれば**Test path name**は0を返します。

4Dには、以下のような定義済み定数があります。

| 定数            | 型    | 値 |
| ------------- | ---- | - |
| Is a document | 倍長整数 | 1 |
| Is a folder   | 倍長整数 | 0 |

  
ドキュメントもフォルダも見つからない場合、**Test path name**は負の値を返します。(ファイルが見つからない場合には-43になります) 。

#### 例題 

以下の例では、“Journal” というドキュメントがデータベースのフォルダにあるかどうかをテストし、見つからない場合にはこれを作成します。

```4d
 If(Test path name("Journal")#Is a document)
    $vhDocRef:=Create document("Journal")
    If(OK=1)
       CLOSE DOCUMENT($vhDocRef)
    End if
 End if
```

#### 参照 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Create document](create-document.md)  
[CREATE FOLDER](create-folder.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 476 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



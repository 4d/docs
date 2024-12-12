---
id: convert-path-system-to-posix
title: Convert path system to POSIX
slug: /commands/convert-path-system-to-posix
displayed_sidebar: docs
---

<!--REF #_command_.Convert path system to POSIX.Syntax-->**Convert path system to POSIX** ( *systemPath* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path system to POSIX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| systemPath | Text | &#8594;  | システムシンタックスで表現された、相対または絶対パス名 |
| * | 演算子 | &#8594;  | エンコーディングオプション |
| 戻り値 | Text | &#8592; | POSIX (Unix) シンタックスで表現されたパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Convert path system to POSIX.Summary-->Convert path system to POSIX コマンドはシステムシンタックスで表現されたパス名をPOSIX (Unix) シンタックスで表現されたパス名に変換します。<!-- END REF-->

*systemPath*引数には、システムシンタックスで表現した、ファイルやフォルダのパス名を渡します (Mac OS やWindows)。このパスは絶対パス、あるいはデータベースフォルダ (データベースストラクチャファイルを含むフォルダ) からの相対パスです。コマンド実行時に、パスの要素が実際にディスク上に存在する必要はありません。 コマンドはパス名の妥当性をテストしません。

コマンドはファイルやフォルダのPOSIXシンタックスで表現した完全パス名を返します。*systemPath*に渡されたパスのタイプにかかわらず、コマンドは常に絶対パス名を返します。*systemPath*に相対パス名を渡すと、4Dはデータベースフォルダのパス名を追加して返します。

オプションの *\** 引数を使用してPOSIXのエンコーディングを指定できます。デフォルトで、Convert path system to POSIXはPOSIXパスの特別文字をエンコードしません。*\**引数を渡すと、特別文字は変換されます (例えば"My folder"は"My%20folder"になります)。

#### 例題 1 

OS X での例題

```4d
 $path:=Convert path system to POSIX("machd:file 2.txt")
  //machd は起動ディスク
  //"/file 2.txt" を返す
 $path:=Convert path system to POSIX("disk2:file 2.txt")
  //disk2 は(起動ディスクでない)追加されたディスク
  //"/Volumes/disk2/file 2.txt"を返す
 $path:=Convert path system to POSIX("machd:file 2.txt";*)
  //"/file%202.txt"を返す
 $path:=Convert path system to POSIX(":resources:images") //相対パス
  //"/User/mark/Documents/videodatabase/resources/images" を返す
 $path:=Convert path system to POSIX("resources:images") //絶対パス
  //"/resources/images" を返す
```

#### 例題 2 

Windowsでの例題

```4d
 $path:=Convert path system to POSIX("c:\docs\file 2.txt")
  // "c:/docs/file 2.txt" を返す
 $path:=Convert path system to POSIX("\\srv\tempo\file.txt")
  // "//srv/tempo/file.txt" を返す
```

#### 参照 

[Convert path POSIX to system](convert-path-posix-to-system.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  
[Test path name](test-path-name.md)  
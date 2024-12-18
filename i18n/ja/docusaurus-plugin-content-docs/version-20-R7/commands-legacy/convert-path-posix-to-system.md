---
id: convert-path-posix-to-system
title: Convert path POSIX to system
slug: /commands/convert-path-posix-to-system
displayed_sidebar: docs
---

<!--REF #_command_.Convert path POSIX to system.Syntax-->**Convert path POSIX to system** ( *posixPath* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Convert path POSIX to system.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| posixPath | Text | &#8594;  | POSIXパス名 |
| * | 演算子 | &#8594;  | エンコーディングオプション |
| 戻り値 | Text | &#8592; | システムシンタックスで表現されたパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Convert path POSIX to system.Summary-->Convert path POSIX to system コマンドはPOSIX (Unix) シンタックスで表現されたパス名をシステムシンタックスで表現されたパス名に変換します。<!-- END REF-->

*posixPath*引数にPOSIXシンタックスで表現された、ファイルやフォルダの完全パス名を渡します。 これは ("/"から始まる) 絶対パスでなければなりません。ディスクパスを渡さなければならず、(例えばftp://ftp.mysite.frなどから始まる) ネットワークパスを渡すことはできません。

コマンドは現在のシステムシンタックスで表現された、ファイルやフォルダの完全パス名を返します。

オプションの *\** 引数を使用して*posixPath*引数がエンコードされているかどうかを指定できます。*posixPath*引数がエンコードされている場合、この引数を渡さなければなりません。そうでなければ正しく変換されません。このコマンドはエンコードなしのパス名を返します。

#### 例題 1 

Mac OSでの例題:

```4d
 $path:=Convert path POSIX to system("/Volumes/machd/file 2.txt")
  // "machd:file 2.txt"を返す
 $path:=Convert path POSIX to system("/Volumes/machd/file%202.txt";*)
  // "machd:file 2.txt"を返す
 $path:=Convert path POSIX to system("/file 2.txt")
  // "machd:file 2.txt"を返す (machdは起動ディスク)
```

#### 例題 2 

Windowsでの例題:

```4d
 $path:=Convert path POSIX to system("c:/docs/file 2.txt")
  // "c:\docs\truc 2.txt" を返す
 $path:=Convert path POSIX to system("c:/docs/file%202.txt";*)
  // "c:\docs\truc 2.txt" を返す
```

#### 参照 

[Convert path system to POSIX](convert-path-system-to-posix.md)  
[Object to path](object-to-path.md)  
[Path to object](path-to-object.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1107 |
| スレッドセーフである | &check; |



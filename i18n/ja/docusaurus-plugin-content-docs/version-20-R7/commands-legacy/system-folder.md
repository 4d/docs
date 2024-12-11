---
id: system-folder
title: System folder
slug: /commands/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *type* )} : Text<!-- END REF-->
<!--REF #_command_.System folder.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| type | Integer | &#8594;  | システムフォルダのタイプ |
| 戻り値 | Text | &#8592; | システムフォルダへのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.System folder.Summary-->**System folder**コマンドは、アクティブなWindows またはmacOS システムフォルダにあるシステムフォルダへのパス名、あるいはアクティブなWindows またはmacOS システムフォルダ自体へのパス名を返します。<!-- END REF-->

オプションの引数*type* には、システムフォルダのタイプを示す値を渡します。  
*System Folder* テーマの以下の定義済み定数を使用できます。

| 定数                            | 型    | 値  | コメント                                           |
| ----------------------------- | ---- | -- | ---------------------------------------------- |
| Applications or program files | 倍長整数 | 16 |                                                |
| Desktop                       | 倍長整数 | 15 |                                                |
| Documents folder              | 倍長整数 | 17 | OSユーザーのDocumentsフォルダー                          |
| Favorites Win                 | 倍長整数 | 14 |                                                |
| Fonts                         | 倍長整数 | 1  |                                                |
| Home folder                   | 倍長整数 | 18 | ユーザーのカレントのホームフォルダ(通常は "/Users/<username>/" です) |
| Start menu Win\_all           | 倍長整数 | 8  |                                                |
| Start menu Win\_user          | 倍長整数 | 9  |                                                |
| Startup Win\_all              | 倍長整数 | 4  |                                                |
| Startup Win\_user             | 倍長整数 | 5  |                                                |
| System                        | 倍長整数 | 0  |                                                |
| System Win                    | 倍長整数 | 12 |                                                |
| System32 Win                  | 倍長整数 | 13 |                                                |
| User preferences\_all         | 倍長整数 | 2  |                                                |
| User preferences\_user        | 倍長整数 | 3  |                                                |

**注:**

* **Win** キーワードがつけられた定数はWindows 環境においてのみ使用することができます。 それらがmacOS 環境で使用されると、 **System folder** コマンドは空の文字列を返します。
* いくつかのシステム・フォルダへのパス名はログインユーザ(現在のユーザ) のものを返します。 定数2～9を使用する場合、すべてのユーザで共有されるフォルダへのパス名か、またはカレントユーザーのカスタマイズされたフォルダへのパス名を使用するかを選択することが出来ます。

*type* 引数を省略すると、コマンドはアクティブなシステムフォルダ (定数= System )のパス名を返します。

#### 参照 

[Get 4D folder](get-4d-folder.md)  
[Temporary folder](temporary-folder.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 487 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



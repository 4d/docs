---
id: create-folder
title: CREATE FOLDER
slug: /commands/create-folder
displayed_sidebar: docs
---

<!--REF #_command_.CREATE FOLDER.Syntax-->**CREATE FOLDER** ( *folderPath* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE FOLDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| folderPath | Text | &#8594;  | 作成する新しいフォルダーのパス名 |
| * | 演算子 | &#8594;  | パス中に存在しないフォルダーを作成する |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE FOLDER.Summary-->**CREATE FOLDER**コマンドを使用して、*folderPath*に渡すパス名に応じてフォルダーを作成します。<!-- END REF-->

*folderPath*に名前を渡すと、データベースフォルダー内にフォルダーが作成されます。

*folderPath*には他にもボリュームのルートやデータベースフォルダーから開始したフォルダー階層を渡すことができます。この場合引数はフォルダー区切り文字で区切られていなければなりません。  
*\** 引数を省略した場合、階層と中のフォルダーが存在しなければエラーが生成され、フォルダーは作成されません。  
**CREATE FOLDER**コマンドに *\** 引数を渡すと、必要に応じてフォルダー階層が作成されます。この場合、*folderPath*にドキュメントパス名を渡すこともできます。ドキュメント名は無視され、*folderPath*に指定されたフォルダー階層が再帰的に作成されます。

#### 例題 1 

次の例を使用して、"Archives" フォルダーをデータベースのフォルダー内に作成します。

```4d
 CREATE FOLDER("Archives")
```

#### 例題 2 

次の例を使用して、"Archives" フォルダーをデータベースフォルダーに作成し、"January" および "February" というサブフォルダーを作成します。

```4d
 CREATE FOLDER("Archives")
 CREATE FOLDER("Archives\\January")
 CREATE FOLDER("Archives\\February")
```

#### 例題 3 

次の例を使用して、"Archives" フォルダーをCボリュームのルートレベルに作成します。

```4d
 CREATE FOLDER("C:\\Archives")
```

#### 例題 4 

"C:\\Archives\\2011\\January\\" フォルダー階層を作成:

```4d
 CREATE FOLDER("C:\\Archives\\2011\\January\\";*)
```

#### 例題 5 

既存の"C:\\Archives\\"フォルダーに"\\February\\"サブフォルダーを作成: 

```4d
 CREATE FOLDER("C:\\Archives\\2011\\February\\Doc.txt";*)
  // "Doc.txt"は無視される
```

#### 参照 

[FOLDER LIST](folder-list.md)  
[Test path name](test-path-name.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 475 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||



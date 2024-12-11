---
id: move-document
title: MOVE DOCUMENT
slug: /commands/move-document
displayed_sidebar: docs
---

<!--REF #_command_.MOVE DOCUMENT.Syntax-->**MOVE DOCUMENT** ( *srcPathname* ; *dstPathname* )<!-- END REF-->
<!--REF #_command_.MOVE DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| srcPathname | Text | &#8594;  | 既存ドキュメントへの完全なパス名 |
| dstPathname | Text | &#8594;  | 移動先のパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MOVE DOCUMENT.Summary-->MOVE DOCUMENTコマンドを使用して、ドキュメントを移動、ドキュメント名を変更します。<!-- END REF-->に既存ドキュメントへの完全なパス名、*dstPathname*に新しい名前と位置を指定します。

**警告:** MOVE DOCUMENTを使用して、同じボリュームのディレクトリの間でドキュメントを移動させることができます。2つの異なるボリュームの間でドキュメントを移動させたい場合、[COPY DOCUMENT](copy-document.md "COPY DOCUMENT") を使用して、ドキュメントを移動させます。そして[DELETE DOCUMENT](delete-document.md "DELETE DOCUMENT")を使用してそのドキュメントのオリジナルのコピーを削除します。

#### 例題 1 

次の例を使用して、ドキュメントDocNameの名前を変更します。

```4d
 MOVE DOCUMENT("C:\\FOLDER\\DocName";"C:\\FOLDER\\NewDocName")
```

#### 例題 2 

次の例を使用して、ドキュメントDocNameを移動させ、名前を変更します。

```4d
 MOVE DOCUMENT("C:\\FOLDER1\\DocName";"C:\\FOLDER2\\NewDocName")
```

#### 例題 3 

次の例を使用して、ドキュメントDocNameを移動させます。

```4d
 MOVE DOCUMENT("C:\\FOLDER1\\DocName";"C:\\FOLDER2\\DocName")
```

**Note:** 最後の2つの例では、移動先のフォルダ*"C:\\\\FOLDER2"* が存在していなければなりません。MOVE DOCUMENTコマンド は、ドキュメントを移動させるだけで、フォルダを作成しません。

#### 参照 

[COPY DOCUMENT](copy-document.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 540 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||



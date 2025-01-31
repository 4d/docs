---
id: set-picture-to-pasteboard
title: SET PICTURE TO PASTEBOARD
slug: /commands/set-picture-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Syntax-->**SET PICTURE TO PASTEBOARD** ( *picture* )<!-- END REF-->
<!--REF #_command_.SET PICTURE TO PASTEBOARD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | ペーストボードに置くピクチャ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET PICTURE TO PASTEBOARD.Summary-->SET PICTURE TO PASTEBOARD は、ペーストボードを消去し、*picture*に渡したピクチャのコピーをペーストボードに置きます。<!-- END REF-->

**Note:** コピー/ペースト操作では、ペーストボードはクリップボードと同じです。

ピクチャは (jpeg, tif, png等の) ネイティブフォーマットで転送されます。

ペーストボードにピクチャを置いた後、[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md "GET PICTURE FROM PASTEBOARD") コマンド または例えば [GET PASTEBOARD DATA](get-pasteboard-data.md "GET PASTEBOARD DATA")**("com.4d.private.picture.gif";...)** を使用して、そのピクチャを取り出すことができます。

#### 例題 

以下の例はフローティングウィンドウを使用して、配列*asEmployeeName*を含むフォームを表示します。この配列は\[Employees\]テーブルの従業員名を一覧表示したものです。従業員の名字をクリックするたびに、その従業員の写真をペーストボードにコピーします。この配列用のオブジェクトメソッドを以下に示します:

```4d
 If(asEmployeeName#0)
    QUERY([Employees];[Employees]Last name=asEmployeeName{asEmployeeName})
    If(Picture size([Employees]Photo)>0)
       SET PICTURE TO PASTEBOARD([Employees]Photo) // Copy the employee's photo
    Else
       CLEAR PASTEBOARD // No photo or no record found
    End if
 End if
```

#### システム変数およびセット 

ピクチャのコピーが正しくペーストボードに置かれると、OK変数は1に設定されます。  
ペーストボードにピクチャを置くためのメモリが十分にない場合、OK変数は0に設定されますが、エラーは生成されません。

#### 参照 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 521 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |



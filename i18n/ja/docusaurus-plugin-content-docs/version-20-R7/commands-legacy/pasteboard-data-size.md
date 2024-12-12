---
id: pasteboard-data-size
title: Pasteboard data size
slug: /commands/pasteboard-data-size
displayed_sidebar: docs
---

<!--REF #_command_.Pasteboard data size.Syntax-->**Pasteboard data size** ( *dataType* ) : Integer<!-- END REF-->
<!--REF #_command_.Pasteboard data size.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dataType | Text | &#8594;  | データタイプ |
| 戻り値 | Integer | &#8592; | ペーストボード中のデータサイズ (バイト) またはエラーコード |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Pasteboard data size.Summary-->Pasteboard data size コマンドを使用して、*dataType* に渡したデータがペーストボード内に存在するかどうかを調べることができます。<!-- END REF--> 

**Note:** コピー/ペースト操作では、ペーストボードはクリップボードと同じです。

ペーストボードが空か指定したタイプのデータが含まれない場合、コマンドはエラー-102を返します。ペーストボードに指定したタイプのデータが含まれる場合、コマンドはバイト単位でデータのサイズを返します。

*dataType*にはチェックするデータのタイプを指定します。4D シグネチャ、UTI タイプ (Mac OS), フォーマット名/番号 (Windows), または4文字のタイプ (互換性)を指定できます。これらのタイプについては*ペーストボードの管理*を参照してください。 

指定したタイプのデータがペーストボードに存在することを確認した後は、以下のいずれか1つのコマンドを使用し、そのデータをペーストボードから取り出すことができます:

* ペーストボードにあるデータがテキストタイプの場合には、テキスト値を返す[Get text from pasteboard](get-text-from-pasteboard.md "Get text from pasteboard")か、BLOBにテキストを返す[GET PASTEBOARD DATA](get-pasteboard-data.md "GET PASTEBOARD DATA")を使用してそのデータを取得できます。
* ペーストボードにあるデータがピクチャタイプの場合には、ピクチャをピクチャフィールドまたは変数に返す[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md "GET PICTURE FROM PASTEBOARD")か、ピクチャをBLOBに返す[GET PASTEBOARD DATA](get-pasteboard-data.md "GET PASTEBOARD DATA")を使用してそのデータを取得できます。
* ペーストボードがファイルパス名を含む場合、ファイルパス名を返す[Get file from pasteboard](get-file-from-pasteboard.md "Get file from pasteboard") コマンドを使用します。
* 上記以外の任意のデータタイプに対しては、データをBLOBに返す[GET PASTEBOARD DATA](get-pasteboard-data.md "GET PASTEBOARD DATA")を使用します。

#### 例題 1 

以下のコードは、ペーストボードにピクチャーが存在するかどうかをテストし、存在する場合にはそのピクチャーを4D変数にコピーします:

```4d
 If(Pasteboard data size(Picture data)=1) // ペーストボードにピクチャーがあるか?
  //ペーストボードにピクチャーが含まれる場合、コマンドは常にサイズではなく1を返します。
    GET PICTURE FROM PASTEBOARD($vPicVariable) // もしあれば取り出す
 Else
    ALERT("There is no picture in the pasteboard.")
 End if
```

#### 例題 2 

通常、アプリケーションはテキストタイプまたはピクチャタイプのデータをペーストボードにカットおよびコピーします。これは、ほとんどのアプリケーションでこの2つの標準データタイプが認識されているためです。ただし、アプリケーションは1つのデータを複数の異なるインスタンスのフォーマットでペーストボードに追加することができます。例えば、スプレッドシートの一部をカットまたはコピーするたびに、スプレッドシートアプリケーションはそのデータをSYLKフォーマットやTEXTフォーマットの他に、仮想的なSPSHフォーマットでも追加することができます。SPSHインスタンスにはアプリケーションのデータ構造を使用してフォーマットされたデータが含まれています。SYLK形式には同じデータが含まれていますが、SYLKフォーマットを用いると、他の多くのスプレッドシートプログラムからも認識されます。最後に、TEXTフォーマットには同じデータが含まれますが、SYLKやSPSHフォーマットに含まれる追加のな情報は入っていません。この点で、4Dとその仮想的なスプレッドシートアプリケーション間でのカット/コピー/ペーストルーチンを記述する際に、SPSHフォーマットの内容を知り、SYLKデータの解析準備ができた場合には、以下のようなコードを作成することができます:

```4d
 Case of
  // まずペーストボードに仮想的なスプレッドシートのデータが含まれるかチェック
    :(Pasteboard data size("SPSH")>0)
  // ...
  // 次にペーストボードにSylkデータが含まれるかチェック
    :(Pasteboard data size("SYLK")>0)
  // ...
  // 次にペーストボードにTextデータが含まれるかチェック
    :(Pasteboard data size("TEXT")>0)
  // ...
 End case
```

つまり、オリジナルの情報の大部分を含むデータのインスタンスをペーストボードから取り出そうとしています。

#### 例題 3 

You want to drag some private data from different objects in your form. You can write:

```4d
  //source object
 If(FORM Event=On Begin Drag Over)
    APPEND DATA TO PASTEBOARD("some.private.data";$data)
 End if
```

```4d
  //target object
 If(FORM Event=On Drag Over)
    $0:=Choose(Pasteboard data size("some.private.data")>0;0;-1)
 End if
```

#### 例題 4 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") コマンドの例題参照

#### 参照 

[GET PASTEBOARD DATA](get-pasteboard-data.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  
*Pasteboard*  
---
id: get-pasteboard-data
title: GET PASTEBOARD DATA
slug: /commands/get-pasteboard-data
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA.Syntax-->**GET PASTEBOARD DATA** ( *dataType* ; *data* )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dataType | Text | &#8594;  | ペーストボードから取り出すデータのタイプ |
| data | Blob | &#8592; | ペーストボードから取り出されたデータ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PASTEBOARD DATA.Summary-->GET PASTEBOARD DATA コマンドはペーストボード中*dataType*で指定したタイプのデータを、BLOB フィールドまたは変数 *data* に返します。<!-- END REF--> (例えばペーストボードに4D内でコピーされたテキストが含まれている場合、BLOBの文字コードはUTF-16です) 

**注:** コピー/ペーストのオペレーションのコンテキストにおいては、ペーストボードはクリップボードに対応します。

*dataType*には取り出すデータのタイプを指定します。4D シグネチャ、UTI タイプ (Mac OS), フォーマット名/番号 (Windows), または4文字のタイプ (互換性)を指定できます。これらのタイプについては *ペーストボードの管理* の節を参照してください。 

**注:** このコマンドではファイル型のデータを読み出すことは出来ません。それをするためには[Get file from pasteboard](get-file-from-pasteboard.md) コマンドを使用する必要があります。

#### 例題 

以下の2つのオブジェクトメソッドはそれぞれフォーム上の*asOptions* 配列 (ポップアップメニューあるいはドロップダウンリスト) からデータをコピーあるいは配列へデータをペーストします:

```4d
  // bCopyasOptions オブジェクトメソッド
 If(Size of array(asOptions)>0) // コピーするものがあるか?
    VARIABLE TO BLOB(asOptions;$vxClipData) // 配列要素をBLOBに格納
    CLEAR PASTEBOARD // ペーストボードを空にする
    APPEND DATA TO PASTEBOARD("artx";$vxClipData) // データ型は任意に選択されています
 End if
 
  // bPasteasOptions オブジェクトメソッド
 If(Pasteboard data size("artx")>0) // ペーストボードに"artx" タイプのデータがあるか?
    GET PASTEBOARD DATA("artx";$vxClipData) // ペーストボードからデータを取り出す
    BLOB TO VARIABLE($vxClipData;asOptions) // BLOBデータから配列を作成
    asOptions:=0 // 配列の選択要素をリセット
 End if
```

#### システム変数およびセット 

データが正しく取り出せるとOKシステム変数は1に設定されます。そうでなければ0が設定されエラーが生成されます。

#### 参照 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[GET PICTURE FROM PASTEBOARD](get-picture-from-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 401 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |



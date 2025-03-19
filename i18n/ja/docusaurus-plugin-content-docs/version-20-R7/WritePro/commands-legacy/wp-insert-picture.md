---
id: wp-insert-picture
title: WP INSERT PICTURE
slug: /WritePro/commands/wp-insert-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP INSERT PICTURE.Syntax-->**WP INSERT PICTURE** ( *targetObj* ; *picture* ; *mode* {; *rangeUpdate*} )<!-- END REF-->
<!--REF #_command_.WP INSERT PICTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| picture | Picture | &#8594;  | ピクチャーフィールドまたは変数、あるいはディスク上のピクチャーファイルへのパス |
| mode | Integer | &#8594;  | 挿入モード |
| rangeUpdate | Integer | &#8594;  | レンジ更新モード |

<!-- END REF-->

## 説明 

<!--REF #_command_.WP INSERT PICTURE.Summary-->**WP INSERT PICTURE** コマンドは、指定した挿入モード *mode* に従って、*picture* のピクチャーを *targetObj* で指定したレンジに挿入します。<!-- END REF-->ピクチャーは文字として *targetObj* に挿入されます。

*targetObj* には以下のものを渡します:

* レンジ
* 要素(表 / 行 / 段落 / 本文 / ヘッダー / フッター / インライン画像 / セクション / サブセクション)
* 4D Write Pro ドキュメント

*picture* には次のものを渡すことができます:

* ピクチャーフィールドまたは変数
* ディスク上のピクチャーファイルへのパス (システムシンタックス、文字列)  
文字列を受け渡す場合には、フルパス名またはデータベースのストラクチャーファイルを起点とした相対パス名を指定することができます。データベースのストラクチャーファイルと同じ場所にピクチャーが保存されている場合には、ファイル名だけを渡すこともできます。ファイル名を渡した場合には、ファイル拡張子も指示しなければなりません。

このピクチャのフォーマットは4Dがネイティブにサポートされるものであればいずれの形式でも構いません (*ピクチャ* 参照)。[PICTURE CODEC LIST](../../commands-legacy/picture-codec-list.md) コマンドを使用すると、使用可能なフォーマットのリストを取得できます。ピクチャーファイルに複数のフォーマット (コーデック) が含まれていると、4D Write Pro は表示用にひとつ、そして (異なる場合には) 印刷用にひとつ、"最適な" フォーマットを自動的に選択して保存します。

*mode* パラメーターには、ピクチャーの挿入モードを指定する定数を受け渡します:

| 定数         | 型    | 値 | コメント                 |
| ---------- | ---- | - | -------------------- |
| wk append  | 倍長整数 | 2 | コンテンツをターゲットの終わりに挿入する |
| wk prepend | 倍長整数 | 1 | コンテンツをターゲットの始めに挿入する  |
| wk replace | 倍長整数 | 0 | ターゲットのコンテンツを置き換える    |

*targetObj* 引数がレンジだった場合、任意の *rangeUpdate* 引数を使用して、挿入したピクチャーをレンジに含めるか否かを指定する定数を渡すことができます:

| 定数                    | 型    | 値 | コメント                      |
| --------------------- | ---- | - | ------------------------- |
| wk exclude from range | 倍長整数 | 1 | 更新されたレンジには、以前のコンテンツのみを含める |
| wk include in range   | 倍長整数 | 0 | 更新されたレンジに挿入コンテンツを含める      |

*rangeUpdate* パラメーターを省略した場合には、挿入したピクチャーは返されるレンジに含められます。

*targetObj* 引数がレンジではなかった場合、*rangeUpdate* 引数は無視されます。

## 例題 

この例題では、ユーザーが選択したピクチャーがレンジオブジェクトに挿入できなかった場合に警告します:

```4d
 var $wpRange : Object
 $wpRange:=WP Get selection([EXAMPLES]wpDoc)
 
 var $fail : Boolean
 $fail:=False
 
  // ユーザーに挿入するピクチャーを選択してもらいます
 $imgRef:=Open document("")
  // ユーザーがキャンセルしなかった場合
 If(OK=1)
  // サポートされている形式のピクチャーファイルの場合
    If(Is picture file(document))
  // ユーザーが選択したピクチャーを挿入します
       WP INSERT PICTURE($wpRange;document;wk replace)
    Else
       $fail:=True
    End if
 Else
    $fail:=True
 End if
  // 挿入に失敗した場合には、ユーザーに警告します
 If($fail)
    ALERT("Picture insertion failed")
 End if
```

## 参照 

  
[WP INSERT DOCUMENT](wp-insert-document.md)  
[WP Picture range](wp-picture-range.md)  
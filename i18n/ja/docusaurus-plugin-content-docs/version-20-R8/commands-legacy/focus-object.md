---
id: focus-object
title: Focus object
slug: /commands/focus-object
displayed_sidebar: docs
---

<!--REF #_command_.Focus object.Syntax-->**Focus object**  : Pointer<!-- END REF-->
<!--REF #_command_.Focus object.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Pointer | &#8592; | フォーカスを持つオブジェクトへのポインタ |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.Focus object.Summary-->このコマンドは互換性の目的で保持されています。<!-- END REF-->4D v12からは[OBJECT Get pointer](object-get-pointer.md "OBJECT Get pointer")コマンドの利用が推奨されます。

#### 説明 

Focus object はカレントフォーム中でフォーカスを持つオブジェクトへのポインタを返します。フォーカスを持つオブジェクトがない場合、コマンドはNilを返します。を使用して、どのオブジェクトが現在選択されているかを知る必要なく、フォームエリア上でアクションを実行できます。アクションを実行する前に[Type](type.md "Type")コマンドを使用して、オブジェクトが正しいデータ型かを確認してください。

**Note:** Focus objectがリストボックスで使用された場合、コマンドはコンテキストに応じてリストボックスまたはリストボックスの列へのポインタを返します。詳細は[PRINT LABEL](print-label.md)*リストボックスオブジェクトの管理*を参照してください。

このコマンドはサブフォーム中のフィールドで使用することはできません。

**Note:** このコマンドはデータ入力のコンテキストのみで使用できます。そうでなければエラーが返されます。

#### 例題 

以下の例題はボタンのオブジェクトメソッドです。このオブジェクトメソッドはカレントのオブジェクトのデータを大文字に変更します。オブジェクトのデータ型はテキストまたは文字列でなければなりません (タイプ 0 または 24):

```4d
 $vp :=Focus object //現在のエリアのポインタを取得
 Case of
    :(Nil($vp)) //オブジェクトにフォーカスがない
       ...
    :((Type($vp->)=Is alpha field)|(Type($vp->)=Is text)) //文字列フィールドまたはテキストなら
       $vp->:=Uppercase($vp->) //大文字にする
 End case
```

#### 参照 

[OBJECT Get pointer](object-get-pointer.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 278 |
| スレッドセーフである | &cross; |



---
id: old
title: Old
slug: /commands/old
displayed_sidebar: docs
---

<!--REF #_command_.Old.Syntax-->**Old** ( *aField* ) : any<!-- END REF-->
<!--REF #_command_.Old.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | 元の値を取得するフィールド |
| 戻り値 | any | &#8592; | 元のフィールド値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Old.Summary-->Old コマンドは、プログラムにより値が代入されたり、データ登録で修正される前に*aField*に納められていた値を返します。<!-- END REF-->

テーブルのカレントレコードを移動するたびに、4Dは新しいカレントレコードがメモリーにロードされた時点での複製された“イメージ”をメモリ上に作成し、管理します。レコードを修正する際には、レコードの実際のイメージを使います。複製イメージではありません。カレントレコードを移動すると、このイメージは破棄されます。

Oldはこの複製イメージの値を返します。すなわち、既存のレコードに対しては、ディスク上に保存されているフィールドの値を返すということです。新しく作成されたレコードの場合、Oldはそのフィールドタイプに応じた空の値を返します。例えば、*aField*が文字フィールドの場合、Oldは空の文字列を、数値フィールドならOldは0を返します。

Oldは、*aField*がメソッドまたはデータ入力時にユーザによって修正された場合にも機能します。

Oldは、すべてのフィールドタイプに適用できます。

フィールドの元の値を復元するには、Oldから返された値を割り当てます。

**Note:** 技術的な理由により、ピクチャやBLOBタイプのフィールドの場合、Oldから返される式を直接他のコマンドの引数としては利用できません。他の引数を経由する必要があります。例えば:

```4d
  //Do NOT write (causes a syntax error):
 $size :=BLOB size(Old([theTable]theBlob)) //INCORRECT
  //Write:
 $oldBLOB:=Old([theTable]theBlob)
 $size :=BLOB size($oldBLOB) //CORRECT
```

#### 参照 

[Modified](modified.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 35 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||



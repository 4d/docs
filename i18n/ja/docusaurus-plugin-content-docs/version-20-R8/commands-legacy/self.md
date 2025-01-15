---
id: self
title: Self
slug: /commands/self
displayed_sidebar: docs
---

<!--REF #_command_.Self.Syntax-->**Self**  : Pointer<!-- END REF-->
<!--REF #_command_.Self.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Pointer | &#8592; | メソッドが現在実行されているフォーム オブジェクトへのポインタ そうでない場合コンテキストの外側ではNil (->[]) |

<!-- END REF-->

#### 互換性に関する注意 

<!--REF #_command_.Self.Summary-->このコマンドは互換性の目的で保持されています。<!-- END REF-->4D v12からはOBJECT Get pointerコマンドの利用が推奨されます。

#### 説明 

Self コマンドはオブジェクトメソッドが現在実行されているオブジェクトへのポインタを返します。

Self はオブジェクトメソッド自身内で変数を参照するために使用されます。コマンドはオブジェクトメソッド内で呼ばれるか、オブジェクトメソッドから直接あるいは間接に呼ばれたプロジェクトメソッド内で呼ばれた場合に、有効なポインタを返します。

Self が上記のコンテキスト以外で呼ばれた場合、Nilポインタ (*\->\[\]*) が返されます。

**Tip:** Self は、フォーム上の複数のオブジェクトに同じ処理を実行させる場合に便利です。

**Note:** このコマンドがリストボックスのコンテキストで使用される場合、コマンドはそのコンテキストに応じリストボックスまたはリストボックスの列へのポインタを返します。詳細は*リストボックスオブジェクトの管理*の節を参照してください。

#### 例題 

[RESOLVE POINTER](resolve-pointer.md "RESOLVE POINTER") コマンドの例を参照

#### 参照 

[OBJECT Get pointer](object-get-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  
[This](this.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 308 |
| スレッドセーフである | &cross; |



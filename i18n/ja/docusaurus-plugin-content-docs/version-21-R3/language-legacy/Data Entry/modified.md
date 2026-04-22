---
id: modified
title: Modified
slug: /commands/modified
displayed_sidebar: docs
---

<!--REF #_command_.Modified.Syntax-->**Modified** ( *aField* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594; | テストするフィールド |
| 戻り値 | Boolean | &#8592; | フィールドに新しい値が代入されていればTrue, そうでなければFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Modified.Summary-->**Modified** はデータ入力中、プログラムを使用して*field* に値が代入されていたり、データ入力中に値が編集された場合に、[True](../commands/true)を返します。<!-- END REF-->**Modified** コマンドはフォームメソッド（またはフォームメソッドから呼ばれたサブルーチン）で使用されなければなりません。 

このコマンドは同じ実行サイクル内でのみ意味のある値を返します。特に以前の*\_o\_During* 実行サイクルに対応するフォームイベント(On Clicked、On After Keystroke、等)では、[False](../commands/false)に設定されます。

データ入力時には、（元の値が変更されたかどうかに関わらず）ユーザがフィールドを編集した後別のフィールドへ移動するか、コントロールをクリックすると、フィールドが更新されたとみなされます。tabキーでフィールドを移動しただけでは、**Modified** はTrueにならない点に注意してください。**Modified** がTrueになるためには、フィールドが編集されなければなりません。

メソッドの実行時には、フィールドに値が割り当てられると（異なる値かどうかに関係なく）、フィールドが編集されたものと解釈されます。

**注:** **Modified** は、[PUSH RECORD](../commands/push-record) と[POP RECORD](../commands/pop-record) コマンド実行後は、常に[True](../commands/true)を返します。

いずれの場合でも、フィールドの値が実際に変更されたかどうかを調べるには、[Old](../commands/old) コマンドを使用します。

**注:** **Modified** はあらゆるタイプのフィールドに対して適用できますが、このコマンドを[Old](../commands/old) コマンドと組み合わせて使用する場合には、[Old](../commands/old) コマンドの制約に注意してください。詳細については[Old](../commands/old) コマンドの説明を参照してください。

データ入力時には、フォームメソッドで**Modified** を使用するよりも、オブジェクトメソッドで[Form event code](../commands/form-event-code) を使用して処理を実行する方が簡単です。フィールドが修正される度にOn Data Changeイベントがオブジェクトメソッドに送信されるので、オブジェクトメソッドの利用はフォームメソッドで**Modified** を使用したのと同じ意味を持ちます。

**注:** 処理を正しく実行するため、**Modified** コマンドはフォームメソッドまたは、フォームメソッドから呼び出されるメソッド内でのみ使用します。

## 例題 1 

次の例は、*\[Orders\]Quantity* フィールドや*\[Orders\]Price* フィールドが変更されたかどうかを判定します。どちらかが変更されると、*\[Orders\]Total* フィールドを再計算します。 

```4d
 If((Modified([Orders]Quantity)|(Modified([Orders]Price))
    [Orders]Total :=[Orders]Quantity*[Orders]Price
 End if
```

2番目の行をサブルーチンにして、*\[Orders\]Quantity* フィールドと*\[Orders\]Price* フィールドのオブジェクトメソッドのOn Data Changeフォームイベントでそのサブルーチンを呼び出しても、同じ結果となります。

## 例題 2 

*\[anyTable\]*テーブルのレコードを選択し、次に*\[anyTable\]Important field*フィールドが修正される可能性がある複数のサブルーチンを呼び出しますが、これらのメソッドはレコードの保存を行いません。メインのメソッドの終わりで、Modified コマンドを使用してレコードを保存する必要があるかどうかを調べています: 

```4d
  // レコードがカレントレコードとして選択済みです
  // サブルーチンを使用して処理を行います
 DO SOMETHING
 DO SOMETHING ELSE
 DO NOT FORGET TO DO THAT
  // ...
  // レコードを保存する必要があるか検証します
 If(Modified([anyTable]Important field))
    SAVE RECORD([anyTable])
 End if
```

## 参照 

[Form event code](../commands/form-event-code)  
[Old](../commands/old)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 32 |
| スレッドセーフである | no |




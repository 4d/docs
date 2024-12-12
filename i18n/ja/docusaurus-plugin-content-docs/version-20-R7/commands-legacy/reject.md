---
id: reject
title: REJECT
slug: /commands/reject
displayed_sidebar: docs
---

<!--REF #_command_.REJECT.Syntax-->**REJECT** {( *aField* )}<!-- END REF-->
<!--REF #_command_.REJECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | 入力を拒否するフィールド |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.REJECT.Summary-->**REJECT**には2つの形式があります。<!-- END REF-->第1の形式は、引数がありません。これは、データ入力全体を取り消し、ユーザは強制的にフォーム上にとどまります。第2の形式は、*aField* だけを取り消し、ユーザは強制的にそのフィールド上にとどまります。 

**Note:** このコマンドを使用する前に、組み込みのデータ検証ツールの利用を考慮すべきです。

**REJECT**コマンドの第1の形式では、完全でないレコードをユーザが受け入れないようにします。**REJECT**を使用しなくても同じ効果を得ることができます。フィールドが正しく入力された後、テンキー側の“enter”キーをショートカットとした「動作なし」ボタンのオブジェクトメソッドで[ACCEPT](accept.md "ACCEPT")コマンドと[CANCEL](cancel.md "CANCEL")コマンドを使用してレコードの受け入れや取り消しを行います。**REJECT**コマンドの第1の形式よりも、上記の2番目の手法を利用することをお勧めします。

第1の形式を使用する場合には、**REJECT**コマンドを実行してユーザがレコードを受け入れないようにしますが、通常これはレコードが完全ではなかったり、不正確な入力が行われたために行います。ユーザがレコードを受け入れようとすると、**REJECT**コマンドの実行によりレコードが受け入れられません。そしてこのレコードはフォーム上に表示されたままになります。したがって、ユーザはレコードが受け入れられるか、あるいは取り消されるまでデータの入力を続行しなければなりません。

この形式の**REJECT**コマンドを実行するのに最適な場所は、テンキー側の “enter”キーをショートカットとして割り当てた登録ボタンのオブジェクトメソッドです。この場合のデータのチェックは、レコードが受け入れられた場 合にのみ実行されます。ユーザは“enter”キーを押して、データをチェックしないで済ませることはできません。

**REJECT** コマンドの第2の形式は、引数*field*を渡します。この場合、カーソルはフィールドエリア内にとどまり、ユーザーが正しい値を入力するように強制します。  
このシンタックスでは、**REJECT**コマンドをOn Data Change フォームイベントで呼び出す事が必要になります。このシンタックスの**REJECT**コマンドを、フォームメソッドか入力エリアのオブジェクトメソッドに入力する必要があります。**REJECT** コマンドをテーブルのサブフォームの詳細フォームから使用している場合、コマンドをフォームメソッドか詳細フォームのオブジェクトメソッドに入れて下さい。このコマンドはサブフォームエリアのフィールド内では何の効力も持ちません。

取り消されたフィ－ルドのデータを選択するために、[HIGHLIGHT TEXT](highlight-text.md "HIGHLIGHT TEXT")コマンドを使用することができます。

#### 例題 1 

以下の例題は銀行のトランザクション記録です。これは一番目の形式のREJECTを受け入れボタンで使用する方法を示しています。Enterキーがこのボタンのショートカットとして設定されています。つまりユーザがレコードを受け入れるためにEnterキーを押したとしても、ボタンのオブジェクトメソッドが実行されます。トランザクションが小切手であれば、小切手番号が必須です。小切手番号がなければれレコード保存は拒否されます:  

```4d
 Case of
    :(([Operation]Transaction="Check") & ([Operation]Check Number="")) // If it is a check with no number...
       ALERT("Please fill in the check number.") // Alert the user
       REJECT // Reject the entry
       GOTO OBJECT([Operation]Check Number) // Go to the check number field
 End case
```

#### 例題 2 

以下の例は*\[Employees\]Salary*フィールドのオブジェクトメソッドの一部です。このオブジェクトメソッドは、*\[Employees\]Salary*フィールドを調べて1万ドル以下の場合には取り消しします。「フォーム」エディタでフィールドの最小値を指定しても、同じ処理を実現することができます:

```4d
 Case of
    :(Form event code=On Data Change) //v17 以前ではForm event を使用すること
       If([Employees]Salary<10000)
          ALERT("Salary must be greater than $10,000")
          REJECT([Employees]Salary)
       End if
 End case
```

#### 参照 

[ACCEPT](accept.md)  
[CANCEL](cancel.md)  
[GOTO OBJECT](goto-object.md)  
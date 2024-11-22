---
id: object-set-enterable
title: OBJECT SET ENTERABLE
slug: /commands/object-set-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ENTERABLE.Syntax-->**OBJECT SET ENTERABLE** ( {* ;} *object* ; *enterable* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ENTERABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または テーブルまたはフィールドまたは変数 (* 省略時) |
| enterable | Boolean, Integer | &#8594;  | ブール値 True=入力可, False=入力不可倍長整数: 0=入力不可, 1=入力可能, 2=入力不可かつフォーカス不可 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT SET ENTERABLE.Summary-->**OBJECT SET ENTERABLE** コマンドは、*object* で指定したフォームオブジェクトを入力可または入力不可に設定するとともに、*フォーカス可能* 属性も設定します。<!-- END REF-->

**注:** *フォーカス可能* なフォームオブジェクトはフォーカスを受けることができ、*On Getting focus* / *On Losing focus* フォームイベントをトリガーします。これに加え、フォーカス可能な**入力**および**4D Write Proエリア**オブジェクトは、たとえ入力不可であっても、そのコンテンツを選択してコピーすることができます。

オプションの *\** 引数を指定した場合、*object* はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object* はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。オブジェクト名に関する詳細は *オブジェクトプロパティ* を参照してください。

*enterable* 引数にはブール値または倍長整数値を渡すことができます:

* ブール - *enterable* 引数がTrue の場合、ユーザーはデータを入力したりエリア内にカーソルを移動させることができます。  
*enterable* 引数がFalse の場合、  
   * バイナリーデータベースにおいては、ユーザーはデータを入力することはできず、また*フォーカス可能* 属性はフォームオブジェクトのプロパティで定義されている**フォーカス可**オプションによります。  
   * プロジェクトにおいては、ユーザーはデータを入力することはできませんが、オブジェクトはフォーカス可能です
* 倍長整数 - *enterable* 引数に倍長整数値を渡すことによって、**入力**および**4D Write Proエリア**の *フォーカス可能* プロパティもコントロールできるようになります。以下の定数のいずれか一つを使用することができます:  

| 定数                              | 値 | コメント                                                                                                          |  
| ------------------------------- | - | ------------------------------------------------------------------------------------------------------------- |  
| obk enterable                   | 1 | ユーザーは、フォームオブジェクトに値を入力することができ、オブジェクトはフォーカス可能です。                                                                |  
| obk not enterable               | 0 | ユーザーは、フォームオブジェクトに値を入力することができませんが、**入力オブジェクト**と**4D Write Pro エリア**はフォーカス可能です (他の入力不可オブジェクトは自動的にフォーカス不可となります)。 |  
| obk not enterable not focusable | 2 | ユーザーは、フォームオブジェクトに値を入力することができず、**入力オブジェクト**と**4D Write Proエリア**もフォーカス不可となります。                                  |

また、サブフォームと[MODIFY SELECTION](modify-selection.md)や[DISPLAY SELECTION](display-selection.md)コマンドを用いて表示されたリストフォームに対して、プログラムからリスト更新可モードを有効にするために、**OBJECT SET ENTERABLE**コマンドを使用することもできます:

* サブフォームの場合、*entryArea*引数にサブフォームテーブル名またはサブフォームオブジェクト名を渡すことができます。例: **OBJECT SET ENTERABLE**(\*;"Subform";True) このコマンドはサブフォームに対してはサブフォームのフォームメソッドにおいてのみ動作します。
* リストフォームの場合、*entryArea* 引数にはフォームのテーブル名を渡さなくてはなりません。例: **OBJECT SET ENTERABLE**(\[MyTable\];True)

オブジェクトを入力不可にしても、プログラムから値を変更することはできます。

**注:** リストボックスのセルを入力不可にするためには、On Before Data Entryイベント内の$0に-1の値を渡します。この点については、*入力の管理*を参照して下さい。

#### 例題 1 

以下の例は、船積みの重量に応じて、船積みフィールドを設定します。船積みが1オンス以下の場合は、shipperに米国郵便を設定しこのフィールドを入力不可にします。それ以外の場合には、入力可に設定します。 

```4d
 If([Shipments]Weight<=1)
    [Shipments]Shipper:="US Mail"
    OBJECT SET ENTERABLE([Shipments]Shipper;False)
 Else
    OBJECT SET ENTERABLE([Shipments]Shipper;True)
 End if
```

#### 例題 2 

次の例は、リストのヘッダに配置されたチェックボックスのオブジェクトメソッドであり、リスト更新モードを制御します: 

```4d
 var bEnterable : Boolean
 OBJECT SET ENTERABLE([Table1];bEnterable)
```

#### 参照 

[OBJECT Get enterable](object-get-enterable.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  
---
id: form-event
title: FORM Event
slug: /commands/form-event
displayed_sidebar: docs
---

<!--REF #_command_.FORM Event.Syntax-->**FORM Event** : Object<!-- END REF-->
<!--REF #_command_.FORM Event.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#8592; | イベントオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM Event.Summary-->**FORM Event** は、発生したフォームイベントに関する情報を格納しているオブジェクトを返します。<!-- END REF-->通常、**FORM Event** はフォームまたはオブジェクトメソッド内にて使用します。

**返されるオブジェクト**

返されるオブジェクトは、それぞれ以下のメインのプロパティを格納しています:

| **プロパティ**   | **型** | **詳細**                                                    |
| ----------- | ----- | --------------------------------------------------------- |
| objectName  | テキスト  | イベントをトリガーしているオブジェクト名。フォームによってトリガーされている場合には含まれていません。       |
| code        | 倍長整数  | フォームイベントの数値。[Form event code](form-event-code.md) を参照のこと。 |
| description | テキスト  | フォームイベント名(*例:* "On After Edit")                           |

例えば、ボタンをクリックした場合、オブジェクトには以下のプロパティが格納されます:

```RAW
{"code":4,"description":"On Clicked","objectName":"Button2"}
```

イベントオブジェクトには、イベントが発生したオブジェクトによっては追加のプロパティが含まれていることがあります。これは以下のオブジェクトで生成された*eventObj* オブジェクトが対象です:

* リストボックスまたはカラムオブジェクト。詳細は*developer.4d.com でのリストボックスのドキュメント* を参照してください。
* 4D View Pro エリア。詳細は*On VP Ready フォームイベント* を参照してください。

**注:** カレントのイベントが何もない場合、**FORM Event** はnull オブジェクトを返します。

#### 例題 1 

ボタン上でOn Clicked イベントを管理したい場合を考えます:

```4d
 If(FORM Event.code=On Clicked)
    ...
 End if
```

#### 例題 2 

カラムオブジェクト名に、実際のデータクラスの属性名を以下のように設定した場合:

![](../assets/en/commands/pict4843820.en.png)

On Header Click イベントを使用してカラムをソートすることができます:

```4d
 Form.event:=FORM Event
 Case of
    :(Form event code=On Header Click)
       if(Form.event.columnName="lastname")
          Form.employees:=Form.employees.orderBy(Form.event.columnName+", firstname")
       End if
 End case
```

#### 例題 3 

リストボックスオブジェクトのOn Display Details イベントが発生したときに、*メタ情報式* プロパティに設定したメソッドを実行したい場合を考えます:

![](../assets/en/commands/pict4843812.en.png)

*setColor* メソッドの中身です:

```4d
 var $event;$0;$meta : Object
 $event:=[#current_title_incod]
 $meta:=New object
 
 Case of
    :($event.code=On Display Detail)
       If($event.isRowSelected)
          $meta.fill:="lightblue"
       End if
 End case
 $0:=$meta
```

その結果、行が選択された際のリストボックスは以下のようになります:

![](../assets/en/commands/pict4843808.en.png)

#### 参照 

[Form event code](form-event-code.md)  
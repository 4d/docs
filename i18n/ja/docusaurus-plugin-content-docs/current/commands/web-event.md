---
id: web-event
title: Web Event
displayed_sidebar: docs
---

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| 引数  | 型      |                             | 説明                |
| --- | ------ | :-------------------------: | ----------------- |
| 戻り値 | Object | &#8592; | トリガーされたイベントに関する情報 |

<!-- END REF -->

## 説明

`Web Event` は、<!-- REF #_command_.Web Event.Summary -->Web ページコンポーネントにリンクされた、トリガーされたイベントに関する情報を格納したオブジェクトを返します<!-- END REF -->。

このコマンドは、4D Web サーバーによって管理されるWeb ページのコンテキスト内から呼び出さなければなりません。

**戻り値**

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ     |       | 型      | 説明                                                                                                                                                                                                                                                |
| --------- | ----- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| caller    |       | string | イベントをトリガーしたコンポーネントの[サーバー側参照](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#data-access-category)                                                                                                                       |
| eventType |       | string | イベントの種類:<li>onblur</li><li>onfocus</li><li>onclick</li><li>onauxclick</li><li>onmouseenter</li><li>onmouseleave</li><li>onkeyup</li><li>onkeydown</li><li>onchange</li><li>unload</li><li>onload - `Page` がロードされたときにトリガーされます</li> |
| data      |       | object | 関連するコンポーネントに応じた追加の情報                                                                                                                                                                                                                              |
|           | index | number | <li>タブコンポーネント: タブのインデックス(インデックスは 0 から始まります)</li><li>データテーブルコンポーネント: カラムの番号</li>                                                                                                                                                                   |
|           | row   | number | データテーブルコンポーネント: 行番号                                                                                                                                                                                                               |
|           | name  | string | データテーブルコンポーネント: カラムの qodlyソース名(例: "firstname"、 "address.city")                                                                                                                 |

#### 例題

The objective is to display/hide a help text when the user hovers over the component:

![](../assets/en/commands/web-event1.png)

This is done by attaching `onmouseenter` and `onmouseleave` events to a **Text input** component that displays the information stored in a **Text** component (displaying "This is the help text").

![](../assets/en/commands/web-event2.png)

In this scenario:

- The Text input component has `orderNumber` as Server side reference.
  ![](../assets/en/commands/web-event3.png)
- The Text component has `helpOn_orderNumber` as Server side reference.
  ![](../assets/en/commands/web-event4.png)
- The [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) function `help()` is attached to both the `onmouseenter` and `onmouseleave` events and contains the following code:

```4d
shared singleton Class constructor()
exposed Function help()
	
	var event : Object
	var myForm : 4D.WebForm
	var componentRef : Text
	
	myForm:=web Form
	event:=web Event
	componentRef:=event.caller

	Case of 
		: (event.eventType="onmouseenter")  // event is onmouseenter 
			myForm["helpOn_"+componentRef].show()  // show the help on "orderNumber" by showing  
			// the text component with reference "helpOn_orderNumber" 
		: (event.eventType="onmouseleave")  // event is onmouseleave 
			myForm["helpOn_"+componentRef].hide()  // hide the help on orderNumber
			
	End case 

```

To open the web page with the help on `orderNumber` hidden, you can associate this function to the `onload` event of the web page:

```4d
exposed function hideOnLoad()
	webForm.helpOn_orderNumber.hide()

```

## 参照

[Web Form](web-form.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1734                        |
| スレッドセーフ | &cross; |


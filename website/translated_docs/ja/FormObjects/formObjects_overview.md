---
id: formObjectsOverview
title: 4D フォームオブジェクトについて
---

フォーム上のオブジェクトを編集することで、アプリケーションのフォームを構築しカスタマイズします。 オブジェクトの追加・配置、オブジェクトプロパティの設定、入力規制の追加によるビジネスルールの強化、操作に対して自動実行されるオブジェクトメソッドの追加などをおこなうことができます。

## アクティブオブジェクトとスタティックオブジェクト

4D forms support a large number of built-in **active** and **static** objects:

- **active objects** perform a database task or an interface function. アクティブオブジェクトの種類は、 入力フィールド、コンボボックス、ドロップダウンリスト、ピクチャーボタンなど様々ですが、いずれもデータを表示したり、メモリに一時保存したり、ダイアログボックスを開く・レポートを印刷する・バックグラウンドプロセスを開始するなどの動作を実行したりします。
- **static objects** are generally used for setting the appearance of the form and its labels as well as for the graphic interface. アクティブオブジェクトと異なり、スタティックオブジェクトには変数や式が割り当てられません。 しかし、スタティックオブジェクトにダイナミックオブジェクトを挿入することは可能です。


## オブジェクトの操作

4D フォームオブジェクトの追加や編集は次の方法でおこなえます:

*   **Form editor:** Drag an object from the Form editor toolbar onto the form. Then use the Property List to specify the object's properties.   
  See the [Building Forms](https://doc.4d.com/4Dv17R6/4D/17-R6/Building-forms.200-4354618.en.html) chapter for more information.

* **4D language**: Commands from the [Objects (Forms)](https://doc.4d.com/4Dv17R5/4D/17-R5/Objects-Forms.201-4127128.en.html) theme such as `OBJECT DUPLICATE` or `OBJECT SET FONT STYLE` allow to create and define form objects.

*   **JSON code in dynamic forms:** Define the properties using JSON. [type](properties_Object.md#type) プロパティでオブジェクトタイプを定義し、提供されている他のプロパティのうち必要なものを設定します。  See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for information.  
  Example for a button object:  
  ```
  { "type": "button", "style": "bevel", "text": "OK", "action": "Cancel", "left": 60, "top": 160, "width": 100, "height": 20 }

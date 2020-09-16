---
id: subformOverview
title: サブフォーム
---

## 概要

サブフォームとは、他のフォームに組み込まれるフォームのことです。


### 用語

サブフォームに実装されたコンセプトを明確に説明するために、いくつかの用語についてここで定義します:

*   **サブフォーム**: 他のフォームに組み込まれることを意図したフォーム。
*   **親フォーム**: 1つ以上のサブフォームを含むフォーム。
*   **サブフォームコンテナー**: 親フォームに組み込まれた、サブフォームのインスタンスを表示するオブジェクト。
*   **サブフォームインスタンス**: 親フォームに表示されたサブフォームの実体。 このコンセプトはとても重要です。親フォームには、同じサブフォームのインスタンスを複数表示することができるからです。
*   **リストフォーム**: データをリストとして表示するサブフォームインスタンス。
*   **詳細フォーム**: リストサブフォームをダブルクリックすることでアクセスすることができる、ページタイプの入力フォーム。


## リストサブフォーム

リストサブフォームを使うことで、他のテーブルのデータを入力、表示、および更新することができます。 通常は 1対Nリレーションが設定されたデータベースでリストサブフォームを使用します。 リレートされた 1テーブルのフォーム上のリストサブフォームでは、リレートされた Nテーブルのデータを入力・表示・更新します。 一つのフォーム上に、それぞれ異なるテーブルに属する複数のサブフォームを配置できます。 しかし、フォームの同じページ上には、同じテーブルに属するサブフォームを複数配置することはできません。

たとえば、連絡先管理データベースでは、ある連絡先のすべての電話番号を表示するためにリストサブフォームが使用されるでしょう。 連絡先テーブルの画面に電話番号が表示されますが、情報はリレートテーブルに格納されています。 1対Nリレーションを使用することで、このデータベース設計は連絡先ごとに複数の電話番号を簡単に格納できるようになっています。 自動リレーションにより、リレートされている Nテーブルへのデータ入力がプログラムなしで直接おこなうことができます。

リストサブフォームは通常 Nテーブルに結び付けられますが、それだけでなく他の任意のデータベーステーブルのレコードをサブフォームのインスタンスに表示することもできます。

また、ユーザーがリストサブフォームに直接データを入力するようにもできます。 サブフォームの設定に基づき、ユーザーがサブレコード上でダブルクリックするか、サブレコードを追加/編集するコマンドを使用すると、詳細フォームが表示されます。

> 4Dはサブレコードを管理する基本的なニーズに応える 3つの標準アクション `editSubrecord` (サブレコード編集)、`deleteSubrecord` (サブレコード削除) および `addSubrecord` (サブレコード追加) を提供しています。 フォームに複数のサブフォームインスタンスが含まれる場合、フォーカスを持っているサブフォームにアクションが適用されます。


## ページサブフォーム

ページサブフォームは、カレントサブレコードのデータや、コンテキストに基づく関連する値 (変数やピクチャーなど) を表示できます。 ページサブフォームを使用する利点の一つは、それらが高度な機能を提供したり、親フォームと相互作用したりできることです (ウィジェット)。 ページサブフォームには専用のプロパティやイベントがあり、プログラムから完全に制御することができます。

ページサブフォームは [詳細フォーム](properties_Subform.md#詳細フォーム) プロパティで指定された入力フォームを使用します。 リストサブフォームと異なり、使用されるフォームは親フォームと同じテーブルに所属していてもかまいません。 また、プロジェクトフォームを使用することもできます。 実行時、ページサブフォームは入力フォームと同じ標準の表示特性を持ちます。

> 4Dウィジェットは、ページサブフォームに基づいた定義済みの複合オブジェクトです。 詳細は専用のドキュメント [4D Widgets (ウィジェット)](https://doc.4d.com/4Dv18/4D/18/4D-Widgets.100-4690706.ja.html) を参照してください。

### バインドされた変数の管理

サブフォームにバインドされた [変数](properties_Object.md#変数あるいは式) を使用して 2つのコンテキスト (親フォームとサブフォーム) をリンクし、洗練されたインターフェースを作成することができます。 たとえば、動的な時計を提供するサブフォームを置くとします。このサブフォームが置かれる親フォームには入力可の時間型変数が置かれています:

![](assets/en/FormObjects/subforms1.png)

両オブジェクト (時間変数とサブフォームコンテナー) には *同じ変数名* が割り当てられています。 この場合、親フォームを開いたとき、4Dは自動で両方の値を同期化します。 変数の値が複数の場所で設定されている場合、4Dは最後にロードされた値を使用します。 以下のロード順が適用されます:<br /> 1 - サブフォームのオブジェクトメソッド<br /> 2 - サブフォームのフォームメソッド<br /> 3 - 親フォームのオブジェクトメソッド<br /> 4 - 親フォームのフォームメソッド

親フォームが実行されるとき、開発者は適切なフォームイベントを使用して変数の同期を処理しなければなりません。 2タイプの相互作用 (親フォーム → サブフォーム、サブフォーム → 親フォーム) が可能です。

#### サブフォームの内容の更新
ケース1: 親フォームの変数の値が更新され、この更新をサブフォームに反映させる必要があります。 この例では ParisTime 変数の値がユーザー入力、あるいは動的に (たとえば `Current time` コマンドで) 12:15:00 に変更されました。

この場合には、`On bound variable change` フォームイベントを使用します。 このイベントは、サブフォームプロパティ内で選択されていなければなりません。このイベントはサブフォームのフォームメソッドで生成されます。

![](assets/en/FormObjects/subforms2.png)

`On Bound Variable Change` フォームイベントは以下のときに生成されます:

- 親フォームの変数に値が割り当てられたとき (同じ値が再代入された場合でも) で、
- サブフォームが 0ページまたはカレントフォームページに置かれているとき。

先の例のとおり、直接変数名を使用するのではなく、サブフォームコンテナーへのポインターを返す `OBJECT Get pointer` コマンドの利用が推奨されます。親フォームに同じサブフォームを複数配置することが可能だからです (たとえば、複数のタイムゾーンを表示するために時計を複数表示するウィンドウ)。 この場合ポインターを使用することでのみ、どのサブフォームコンテナーがイベントの生成元かを知ることができます。

#### 親フォームの内容の更新

ケース2: サブフォームの内容が更新され、その更新を親フォームに反映させる必要があります。 この例では、ユーザーが時計の針を手動で動かすことができるようなサブフォームを使ったケースです。

この場合、サブフォームから、親サブフォームコンテナーの変数にオブジェクトの値を割り当てなければなりません。 先の例の通り、`OBJECT Get pointer` コマンドを `Object subform container` セレクターとともに使用し、サブフォームコンテナーのポインターを得る方法が推奨されます。

変数に値を割り当てると、親サブフォームコンテナーのオブジェクトメソッドで `On Data Change` フォームイベントが生成され、メソッドによるアクションを実行できます。 このイベントは、サブフォームコンテナーのプロパティリストで選択されていなければなりません。

![](assets/en/FormObjects/subforms3.png)

> 時計の針を手動で動かすと、サブフォーム中の *clockValue* 変数のオブジェクトメソッドで `On Data Change` フォームイベントが生成されます。

### サブフォームにバインドされたオブジェクトの使用

4Dは自動的にオブジェクト (`C_OBJECT`) をそれぞれのサブフォームとバインドします。 このオブジェクトの中身はサブフォームのコンテキストから読み書き可能なため、ローカルなコンテキストにおいて値を共有することができます。

オブジェクトは自動的に作成することもできますし、明示的に命名しオブジェクトとして型指定された場合には、親コンテナーの変数として使用できます (以下参照)。 いずれの場合にも、オブジェクトは `Form` コマンドによって返され、サブフォームから直接呼び出すことが可能です (ポインターの使用は不要です)。 オブジェクトは常に参照によって渡されるため、ユーザーがサブフォーム内でプロパティ値を変更した場合には、その値は自動的にオブジェクト自身に保存されます。

たとえば、サブフォームにおいて異なる言語での表示を可能にするために、バインドされたオブジェクトにフィールドラベルが保存されている場合を考えます:

![](assets/en/FormObjects/subforms4.png)

*InvoiceAddress* オブジェクトに値を割り当てることで、サブフォームのラベルを変更することができます:

```4d
 C_OBJECT($lang)
 $lang:=New object
 If(<>lang="fr")
    $lang.CompanyName:="Société :"
    $lang.LastName:="Nom :"
 Else
    $lang.CompanyName:="Company:"
    $lang.LastName:="Name:"
 End if
 InvoiceAddress.Label:=$lang
```

![](assets/en/FormObjects/subforms5.png)

### 高度なフォーム間通信プログラム
親フォームとサブフォームインスタンス間の通信では、バインドした変数を通して値を交換する以上のことをおこなう必要がある場合があります。 実際、親フォームでおこなわれたアクションに基づきサブフォーム中の変数を更新したり、その逆の処理をしたい場合があるでしょう。 先の "動的な時計" タイプのサブフォームの例で言えば、各時計ごとにアラーム時刻を複数設定したい場合が考えられます。

このようなニーズにこたえるため、4Dは以下のメカニズムを実装しています:

- `OBJECT Get name` コマンドで "subform" 引数を使用してサブフォームオブジェクトを指定し、`OBJECT Get pointer` コマンドを使用する、
- `CALL SUBFORM CONTAINER` コマンドを使用してサブフォームからコンテナーオブジェクトを呼び出す、
- `EXECUTE METHOD IN SUBFORM` コマンドを使用してサブフォームのコンテキストでメソッドを実行する。


#### Object get pointer と Object get name コマンド
In addition to the `Object subform container` selector, the `OBJECT Get pointer` command accepts a parameter that indicates in which subform to search for the object whose name is specified in the second parameter. This syntax can only be used when the Object named selector is passed.

For example, the following statement:

```4d
 $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")
```

... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. This syntax can be used to access from the parent form any object found in a subform. Also note the `OBJECT Get name` command which can be used to retrieve the name of the object that has the focus.

#### CALL SUBFORM CONTAINER command

The `CALL SUBFORM CONTAINER` command lets a subform instance send an event to the subform container object, which can then process it in the context of the parent form. The event is received in the container object method. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.).

The code of the event is unrestricted (for example, 20000 or -100). You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. In the first case, you can only use events that you have checked in the Property List for subform containers. In the second case, the code must not correspond to any existing form event. It is recommended to use a negative value to be sure that this code will not be used by 4D in future versions.

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### EXECUTE METHOD IN SUBFORM command
The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. This method can also receive parameters.

This mechanism is illustrated in the following diagram:

![](assets/en/FormObjects/subforms6.png)

For more information, refer to the description of the `EXECUTE METHOD IN SUBFORM` command.

#### GOTO OBJECT command
The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.



## プロパティ一覧

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

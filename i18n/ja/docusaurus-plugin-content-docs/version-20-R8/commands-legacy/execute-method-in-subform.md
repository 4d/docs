---
id: execute-method-in-subform
title: EXECUTE METHOD IN SUBFORM
slug: /commands/execute-method-in-subform
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Syntax-->**EXECUTE METHOD IN SUBFORM** ( *subformObject* ; *formula* {; *return* {; *param*} {; *param2* ; ... ; *paramN*}} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| subformObject | Text | &#8594;  | サブフォームオブジェクトの名称 |
| formula | Object, Text | &#8594;  | 実行するプロジェクトメソッドの名前、または Formulaオブジェクト |
| return | *, Variable | &#8594;  | メソッドが値を戻さない場合 * |
| &#8592; | メソッドから返される値 |
| param | Expression | &#8594;  | メソッドに渡す引数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EXECUTE METHOD IN SUBFORM.Summary-->**EXECUTE METHOD IN SUBFORM** コマンドを使用して サブフォームオブジェクト*subformObject* のコンテキストにおいて*formula* 引数で指定したコードを実行できます。<!-- END REF-->

呼ばれたコードは任意の数の引数を*param* に受け取ることができ、また戻り値は*return* に返されます。メソッドが値を戻さない場合は、*return* に *\** を渡します。

*formula* 引数では、*subformObject* のコンテキストで実行される4D コードを指定します。以下のいずれかを渡すことができます:

* **フォーミュラオブジェクト**(*Formula オブジェクト* 参照)。ォーミュラオブジェクトは実行可能な式であればどんな式も格納することができます。これには関数やプロジェクトメソッドなども含まれます。
* プロジェクトメソッド名を格納した**文字列**。

実行コンテキストは呼び出されたメ ソッド内でも保持されます。つまりカレントフォームおよびカレントフォームイベントは指定されたまま引き継がれます。サブフォームがコンポーネント由来の 場合、呼び出されたメソッドまたは関数はコンポーネントに属していなければならず、また"コンポーネントとホストデータベースで共有する"プロパティがチェックされていなければ なりません。

このコマンドは (*subformObject* オブジェクトを格納している) 親フォームのコンテキスト、例えばフォームメソッド等から実行しなくてはなりません。

**注意:** formula メソッドは、*subformObject* がカレントページに見つからないか、インスタンス化されていない場合、実行されません。

#### 例題 1 

親フォーム"Company"中にサブフォーム"ContactDetail"が置かれています。ContactDetailフォームが設定されたサブフォームオブジェクトの名前は"ContactSubform"です。ここでcompanyのフィールド値に基づき、サブフォーム内の特定の要素のアピアランスを変更したいとします (例えば\[Company\]City="New York"のときは"contactname"を赤に、\[Company\]City="San Diego"のときは青にするなど)。このメカニズムはSetToColor メソッドに実装されています。この結果を得るために、SetToColor メソッドをCompany親フォームの"On Load"フォームイベントのプロセスから直接呼び出すことはできません。なぜなら"contactname"オブジェクトはカレントフォームではなく、 "ContactSubform"サブフォームオブジェクト中に表示されているフォームに属しているからです。そのため正しく動作させるために、メソッドはEXECUTE METHOD IN SUBFORM コマンドを使用して実行されなければなりません。

```4d
 Case of
    :(Form event code=On Load)
       Case of
          :([Company]City="New York")
             $Color:=$Red
          :([Company]City="San Diego")
             $Color:=$Blue
          Else
             $Color:=$Black
       End case
       EXECUTE METHOD IN SUBFORM("ContactSubform";Formula(SetToColor);*;$Color)
 End case
```

#### 例題 2 

コンポーネントとして使用される予定のデータベースを開発しています。このデータベースには共有プロジェクトフォーム (例として"Calender"と名付けます) が含まれています。またこのフォームにはダイナミック変数やカレンダを調整するための公開プロジェクトメソッド (SetCalendarDate(varDate)) が含まれています。  
このメソッドがCalenderフォームメソッドで直接使用される場合、開発者は直接このメソッドをフォームの"On Load"イベントで呼び出すことができます: 

```4d
 SetCalendarDate(Current date)
```

しかしホストデータベースのコンテキストで、プロジェクトフォームに2つの"Calendar"サブフォーム"Cal1"および"Cal2"が配置されている状況を想像してください。Cal1の日付を2010/01/01、Cal2の日付を2010/05/05に設定する必要があるとします。このケースでは、コンポーネントメソッドSetCalendarDate を直接呼び出すことはできません。なぜならコンポーネントメソッドはどちらのフォームに処理を適用したらよいかわからないからです。そこで、このメソッドを以下の方法で呼び出す必要があります: 

```4d
 EXECUTE METHOD IN SUBFORM("Cal1";Formula(SetCalendarDate);*;!01/01/20!)
 EXECUTE METHOD IN SUBFORM("Cal2";Formula(SetCalendarDate);*;!05/05/20!)
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1085 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |



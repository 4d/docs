---
id: code-overview
title: メソッドとクラス
---

The 4D code used across your project is written in [methods](../Concepts/methods.md) and [classes](../Concepts/classes.md).

4D IDE には、コードを作成・編集・エクスポート・削除するためのさまざまな機能があります。 You will usually use the 4D [code editor](../code-editor/write-class-method.md) to work with your code.

## メソッドの作成

A method in 4D is stored in a **.4dm** file located in the appropriate folder of the [`/Project/Sources/`](../Project/architecture.md#sources) folder.

You can create [several types of methods](../Concepts/methods.md):

- All types of methods can be created or opened from the **Explorer** window (except Object methods which are managed from the [Form editor](../FormEditor/formEditor.md)).
- Project methods can also be created or opened from the **File** menu or toolbar (**New/Method...** or **Open/Method...**) or using shortcuts in the [Code editor window](../code-editor/write-class-method.md#shortcuts).
- トリガーは、ストラクチャーエディターからも作成したり開いたりできます。
- Form methods can also be created or opened from the [Form editor](../FormEditor/formEditor.md).

## クラスの作成

A user class in 4D is defined by a specific method file (**.4dm**), stored in the [`/Project/Sources/Classes/`](../Project/architecture.md#sources) folder. ファイル名がクラス名になります。

You can create a class file from the **File** menu or toolbar (**New/Class...**) or in the **Methods** page of the **Explorer** window.

For more information, please refer to the [Classes](../Concepts/classes.md) section.

## メソッドやクラスの削除

既存のメソッドやクラスを削除するには:

- on your disk, remove the _.4dm_ file from the "Sources" folder,
- in the 4D Explorer, select the method or class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

> To delete an object method, choose **Clear Object Method** from the [Form editor](../FormEditor/formEditor.md) (**Object** menu or context menu).

## メソッドの書き出しと読み込み

メソッドやクラスのコードは、ファイルの形で書き出しおよび読み込みが可能です。 These commands are found in the **Method** menu of the [Code editor](../code-editor/write-class-method.md).

- When you select the **Export Method...** command, a standard file saving dialog box appears, allowing you to choose the name, location and format of the export file (see below). 印刷と同様に、コードブロックが折りたたまれているかどうかに関わらず、コード全体が書き出されます。
- When you select the **Import Method...** command, a standard file opening dialog box appears, allowing you to designate the file to be imported. 読み込みをおこなうと、メソッド中で現在選択されているテキストが置き換えられます。 読み込んだメソッドで既存メソッドの全体を書き換えるには、読み込み前に既存メソッド内を全選択します。

読み込み/書き出し機能はマルチプラットフォーム対応です。macOS で書き出したメソッドを Windows で読み込むことができ、その逆も可能です。4D は必要に応じて文字の変換をおこないます。

メソッドの読み込みと書き出しには 2つのフォーマットを使用できます:

- 4D method (extension _.c4d_): In this format, methods are exported in encoded form. メソッド中のオブジェクト (コマンドなどの要素) の名称はトークナイズされます。 このフォーマットは、異なる言語 (非英語のコマンド名) を使用する 4Dアプリケーションやプラグイン間でメソッドをやり取りする場合に特に便利です。 その代わり、テキストエディターでメソッドを表示することはできません。
- Text (extension _.txt_): In this format, methods are exported in text-only form. 書き出したファイルは、標準のテキストエディターやソースコントロールツールで開くことができます。

## プロジェクトメソッドプロパティ

プロジェクトメソッドを作成した後、その名称やプロパティを変更することができます。 プロジェクトメソッドのプロパティは主に、実行アクセスやセキュリティ条件 (ユーザー、統合されたサーバーやサービスからのアクセスの可否) に加えて、実行モードに関する設定が含まれます。

他のタイプのメソッドには専用のプロパティがありません。 これらのメソッドのプロパティは、それらが関連付けられているオブジェクトに基づいて決定されます。

To display the **Method Properties** dialog box for a project method, you can either:

- in the [Code Editor](../code-editor/write-class-method.md), select the **Method Properties...** command in the **Method** menu,
- or on the **Methods** page of the Explorer, **right-click** on the project method and select **Method Properties...** in the context menu or options menu.

> A batch setting function allows you to modify a property for all or part of the database project methods in a single operation (see [Batch setting for method attributes](#batch-setting-for-method-attributes)).

### 名称

You can change the name of a project method in the **Name** area of the **Method Properties** window or in the Explorer.

The new name must comply with 4D naming rules (see [Identifiers](../Concepts/identifiers.md)). 同じ名称のメソッドが既に存在する場合、4D はその旨を知らせるメッセージを表示します。 名称変更後、4D メソッドリストをソートします。

:::caution

プロジェクトメソッドの名前を変更すると、そのメソッドを旧名称で呼び出している他のメソッドやフォーミュラなど、アプリケーションの機能が無効になるリスクがあります。 You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv19R5/4D/19-R5/Renaming.300-5851389.en.html). この機能を使用すれば、デザイン環境における当該メソッドの呼び出し箇所がすべて自動的に更新されます (ただし EXECUTE METHOD など、文字列としてメソッド名が参照されている個所を除きます)。

4D Server の場合、名称変更は変更終了後にサーバーに反映されます。 複数のユーザーが同時に名称を変更しようとすると、最後におこなわれた名称変更が適用されます。 メソッドのオーナーを指定すれば特定のユーザー以外はメソッド名を変更できないようにできます。

:::

:::info

データベースメソッドの名称を変更することはできません。 オブジェクトに紐付いたトリガー、フォームメソッド、オブジェクトメソッドも同様です。これらは関連先のオブジェクトにより名称を決定されます。

:::

### 属性

属性を使用して、プロジェクトメソッドがどのコンテキストにおいて利用可能かを指定できます。 エクスプローラーを使用して複数のプロジェクトメソッドに対し、属性を一括して設定することもできます (後述参照)。

#### 非表示

If you do not want users to be able to run a project method using the **Method...** command of the **Run** menu, you can make it Invisible by checking this option. 非表示のメソッドは、メソッド実行ダイアログボックスに表示されません。

プロジェクトメソッドを非表示にしても、データベースプログラマーはそれを使用することができます。 これらは、エクスプローラーやコードエディターのメソッドリストには引き続き表示されます。

#### コンポーネントとホストプロジェクト間で共有

この属性は、コンポーネントのフレームワークで使用されます。 このオプションが選択されていると、アプリケーションがホストデータベースとして実行されている場合、そのメソッドがコンポーネントから実行可能になります。 また、アプリケーションがコンポーネントとして実行されている場合、そのメソッドはホストデータベースから実行可能となります。

For more information about components, refer to the [Developing and installing 4D components](../Extensions/develop-components.md) chapter.

#### サーバー上で実行

この属性は、クライアント/サーバーモードの 4Dアプリケーションでのみ考慮されます。 このオプションが選択されていると、そのプロジェクトメソッドは呼び出し方に関わらず常にサーバー上で実行されます。

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv19R6/4D/19-R6/Execute-on-Server-attribute.300-5941841.en.html).

### 実行モード

このオプションを使用すると、メソッドのプリエンプティブ実行が可能であることを宣言できます。 It is described in the [Preemptive processes section](../Develop/processes.md#preemptive-processes).

### 公開オプション

公開オプション属性は、当該メソッドの呼び出しが明示的に許可された外部サービスを指定します。

#### Webサービス

この属性を使用して、SOAPリクエストでアクセス可能な Webサービスとして当該メソッドを公開することができます。 For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv19R5/4D/19-R5/Publication-and-use-of-Web-Services.200-5851321.en.html) chapter. When this option is checked, the **Published in WSDL** option is enabled.

In the Explorer, project methods that are offered as a Web Service are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440512/pict440512.fr.png).

**Note:** You cannot publish a method as a Web service if its name includes characters that do not comply with XML nomenclature (e.g. containing spaces). この場合、設定は保存できません。

#### WSDL を公開

この属性は "Webサービス" 属性が設定されている場合にのみ利用可能です。 この属性を設定すると、当該メソッドが 4Dアプリケーションの WSDLに 含まれます。 For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv19R5/4D/19-R5/Publishing-a-Web-Service-with-4D.300-5851558.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440526/pict440526.fr.png).

#### 4D タグと URL(4DACTION...)

This option is used to reinforce 4D Web server security: when it is not checked, the project method cannot be executed via an HTTP request containing the special [4DACTION URL](../WebServer/httpRequests.md#4daction) used for calling 4D methods, nor the special [4DSCRIPT, 4DTEXT and 4DHTML tags](../Tags/transformation-tags.md).

In the Explorer, project methods with this attribute are given a specific icon ![](https://doc.4d.com/4Dv19R5/picture/440496/pict440496.fr.png).

セキュリティのため、このオプションはデフォルトで選択されていません。 Web機能から直接呼び出されるメソッドには、このオプションを明示的に選択しなければなりません。

#### SQL

この属性が選択されていると、当該プロジェクトメソッドは 4D の SQLエンジンから実行可能となります。 デフォルトでは選択されておらず、明示的に許可されない限り 4Dメソッドは保護されており、4D SQLエンジンから呼び出すことはできません。

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/Begin-SQL.301-5830074.en.html)/[End SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/End-SQL.301-5830073.en.html)  tags or the [QUERY BY SQL](https://doc.4d.com/4Dv19R5/4D/19-R5/QUERY-BY-SQL.301-5830079.en.html) command.

**注:**

- メソッドに "SQL" 属性が設定されていても、メソッドの実行時にはデータベース設定およびメソッドプロパティに設定されたアクセス権が考慮されます。
- The ODBC **SQLProcedure** function only returns project methods with the "SQL" attribute.

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv19R5/4D/19-R5/4D-SQL-engine-implementation.300-5871873.en.html) in the 4D SQL manual.

#### REST サーバー

_This option is deprecated. Calling code through REST calls is only supported with [ORDA data model class functions](../REST/ClassFunctions.md)._

#### 属性の一括設定

Using the "Attributes for methods" dialog box, you can modify an attribute (Invisible, Offered as a Web Service, etc.) for all or part of the database project methods in a single operation. この機能は、多数のプロジェクトメソッドの属性を一括して変更する場合に便利です。 また、開発の段階で、類似のメソッド群に共通の属性を素早く適用するのに使用することもできます。

メソッド属性の一括設定をおこなうには:

1. On the [Methods Page](https://doc.4d.com/4Dv19R5/4D/19-R5/Methods-Page.300-5851337.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. The **Attributes for methods** dialog appears.

2. "一致するメソッド名" エリアに属性を一括設定するメソッドを指定するための名前条件を入力します。
   入力した文字列を使用してメソッド名が検索されます。

"@" をワイルドカード文字として使用し、メソッドグループを選択できます:

- 前方一致で検索するには、文字列の最後に "@" を加えます。 For example: `web@`
- 含む検索をするには、文字列の中に "@" を加えます。 For example: `web@write`
- 後方一致で検索するには、文字列の先頭に "@" を加えます。 For example: `@write`
- すべてのメソッドを選択するには "@" のみを入力します。

**注:**

- 文字の大小は区別されません。
- You can enter several @ characters in the string, for example `dtro_@web@pro.@`

3. In the "Attribute to Modify" area, choose an attribute from the drop-down list, then click on the **True** or **False** radio button corresponding to the value to be applied.

**Note:** If the "Published in WSDL" attribute is set to True, it will only be applied to project methods already containing the "Offered as a Web Service" attribute.

4. Click on **Apply**. 検索条件に合致するプロジェクトメソッドに対し、属性の変更は即座に反映されます。

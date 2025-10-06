---
id: project-method-properties
title: Project Method Properties
---

プロジェクトメソッドを作成した後、その名称やプロパティを変更することができます。 プロジェクトメソッドのプロパティは主に、実行アクセスやセキュリティ条件 (ユーザー、統合されたサーバーやサービスからのアクセスの可否) に加えて、実行モードに関する設定が含まれます。

他のタイプのメソッドには専用のプロパティがありません。 これらのメソッドのプロパティは、それらが関連付けられているオブジェクトに基づいて決定されます。

プロジェクトメソッドの **メソッドプロパティ** ダイアログボックスを表示するには、次の方法があります:

- [コードエディター](../code-editor/write-class-method.md)において、**メソッド** メニューから **メソッドプロパティ...** を選択します。
- または、エクスプローラーの **メソッド** ページでプロジェクトメソッドを選択し、コンテキストメニューまたはオプションメニューから **メソッドプロパティ...** を選択します。

> 一回の処理で複数のプロジェクトメソッドの属性を設定するために、属性の一括設定を使用できます ([属性の一括設定](#属性の一括設定) 参照)。

## 名称

**メソッドプロパティ** ウィンドウの **名称** エリア、またはエクスプローラーでプロジェクトメソッド名を変更できます。

新しい名称は 4D の命名規則に沿っていなければなりません ([識別子](../Concepts/identifiers.md) 参照)。 同じ名称のメソッドが既に存在する場合、4D はその旨を知らせるメッセージを表示します。 名称変更後、4D メソッドリストをソートします。

:::caution

プロジェクトメソッドの名前を変更すると、そのメソッドを旧名称で呼び出している他のメソッドやフォーミュラなど、アプリケーションの機能が無効になるリスクがあります。 You can rename the method manually but it is strongly recommended to use the renaming function for project methods, described in [Renaming](https://doc.4d.com/4Dv20/4D/20.2/Renaming.300-6750165.en.html). この機能を使用すれば、デザイン環境における当該メソッドの呼び出し箇所がすべて自動的に更新されます (ただし EXECUTE METHOD など、文字列としてメソッド名が参照されている個所を除きます)。

4D Server の場合、名称変更は変更終了後にサーバーに反映されます。 複数のユーザーが同時に名称を変更しようとすると、最後におこなわれた名称変更が適用されます。 メソッドのオーナーを指定すれば特定のユーザー以外はメソッド名を変更できないようにできます。

:::

:::info

データベースメソッドの名称を変更することはできません。 オブジェクトに紐付いたトリガー、フォームメソッド、オブジェクトメソッドも同様です。これらは関連先のオブジェクトにより名称を決定されます。

:::

## 属性

属性を使用して、プロジェクトメソッドがどのコンテキストにおいて利用可能かを指定できます。 エクスプローラーを使用して複数のプロジェクトメソッドに対し、属性を一括して設定することもできます (後述参照)。

### 非表示

ユーザーに対し、**実行** メニューの **メソッド...** から特定のメソッドを実行させたくない場合、このオプションを選択すればそのメソッドを非表示にできます。 非表示のメソッドは、メソッド実行ダイアログボックスに表示されません。

プロジェクトメソッドを非表示にしても、データベースプログラマーはそれを使用することができます。 これらは、エクスプローラーやコードエディターのメソッドリストには引き続き表示されます。

### コンポーネントとホストプロジェクト間で共有

この属性は、コンポーネントのフレームワークで使用されます。 このオプションが選択されていると、アプリケーションがホストデータベースとして実行されている場合、そのメソッドがコンポーネントから実行可能になります。 また、アプリケーションがコンポーネントとして実行されている場合、そのメソッドはホストデータベースから実行可能となります。

コンポーネントについては [4Dコンポーネントの開発とインストール](../Extensions/develop-components.md) を参照ください。

### サーバー上で実行

この属性は、クライアント/サーバーモードの 4Dアプリケーションでのみ考慮されます。 このオプションが選択されていると、そのプロジェクトメソッドは呼び出し方に関わらず常にサーバー上で実行されます。

For more information on this option, refer to [Execute on Server attribute](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

## 実行モード

このオプションを使用すると、メソッドのプリエンプティブ実行が可能であることを宣言できます。 It is described in the [Preemptive processes section](../Develop/preemptive.md).

## 公開オプション

公開オプション属性は、当該メソッドの呼び出しが明示的に許可された外部サービスを指定します。

### Webサービス

この属性を使用して、SOAPリクエストでアクセス可能な Webサービスとして当該メソッドを公開することができます。 For more information, refer to the [Publication and use of Web Services](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html) chapter. このオプションを選択すると、**WSDL を公開** オプションを選択できるようになります。

In the Explorer, project methods that are offered as a Web Service are given a specific icon.

**注:** メソッド名が XML の命名規則に準拠しない文字 (たとえばスペース) を含む場合、そのメソッドは Webサービスとして公開できません。 この場合、設定は保存できません。

### WSDL を公開

この属性は "Webサービス" 属性が設定されている場合にのみ利用可能です。 この属性を設定すると、当該メソッドが 4Dアプリケーションの WSDLに 含まれます。 For more information about this, refer to [Generation of the WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689).

In the Explorer, project methods that are offered as a Web Service and published in WSDL are given a specific icon.

### 4D タグと URL(4DACTION...)

このオプションは、4D Webサーバーのセキュリティを強化するために使用されます。このオプションが選択されていない場合、[4DACTION URL](../WebServer/httpRequests.md#4daction) を使用した HTTPリクエスト、および [4DSCRIPT、4DTEXT、4DHTML タグ](../Tags/transformation-tags.md) から当該メソッドを直接呼び出すことができません。

In the Explorer, project methods with this attribute are given a specific icon.

セキュリティのため、このオプションはデフォルトで選択されていません。 Web機能から直接呼び出されるメソッドには、このオプションを明示的に選択しなければなりません。

### SQL

この属性が選択されていると、当該プロジェクトメソッドは 4D の SQLエンジンから実行可能となります。 デフォルトでは選択されておらず、明示的に許可されない限り 4Dメソッドは保護されており、4D SQLエンジンから呼び出すことはできません。

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](../commands-legacy/begin-sql.md)/[End SQL](../commands-legacy/end-sql.md)  tags or the [QUERY BY SQL](../commands-legacy/query-by-sql.md) command.

**注:**

- メソッドに "SQL" 属性が設定されていても、メソッドの実行時にはデータベース設定およびメソッドプロパティに設定されたアクセス権が考慮されます。
- ODBC の **SQLProcedure** 関数は "SQL" 属性が設定されているプロジェクトメソッド名のみを返します。

For more information, refer to [4D SQL engine implementation](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) in the 4D SQL manual.

### REST サーバー

*このオプションは廃止されます。 RESTコールによるコードの呼び出しは、[ORDAデータモデルクラス関数](../REST/ClassFunctions.md) でのみサポートされます。*

### 属性の一括設定

"メソッド属性" ダイアログボックスを使用して、一回の操作で複数のプロジェクトメソッドに対して属性 (非表示、Webサービスで公開、等)  を設定することができます。 この機能は、多数のプロジェクトメソッドの属性を一括して変更する場合に便利です。 また、開発の段階で、類似のメソッド群に共通の属性を素早く適用するのに使用することもできます。

メソッド属性の一括設定をおこなうには:

1. On the [Methods Page](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) of the 4D Explorer, expand the options menu, then choose the **Batch setting of attributes...** command. "メソッド属性" ダイアログボックスが表示されます:

2. "一致するメソッド名" エリアに属性を一括設定するメソッドを指定するための名前条件を入力します。
   入力した文字列を使用してメソッド名が検索されます。

"@" をワイルドカード文字として使用し、メソッドグループを選択できます:

- 前方一致で検索するには、文字列の最後に "@" を加えます。 例: `web@`
- 含む検索をするには、文字列の中に "@" を加えます。 例: `web@write`
- 後方一致で検索するには、文字列の先頭に "@" を加えます。 例: `web@write`
- すべてのメソッドを選択するには "@" のみを入力します。

**注:**

- 文字の大小は区別されません。
- "@" は文字列内で複数回使用できます (例: `dtro_@web@pro.@`)

3. "更新する属性" エリアでは、ドロップダウンリストから更新対象の属性を選択し、**True** または **False** ラジオボタンを選択します。

**注:** "WSDL で公開する" 属性を True に設定した場合、"Webサービスとして公開" 属性が True に設定されたメソッドにのみ適用されます。

4. **適用** をクリックします。 検索条件に合致するプロジェクトメソッドに対し、属性の変更は即座に反映されます。


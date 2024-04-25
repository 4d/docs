---
id: develop-components
title: コンポーネントの開発
---

A 4D component is a set of 4D functions, methods, and forms representing one or more functionalities that can be [installed and used in 4D applications](Concepts/components.md). たとえば、メールの送受信をおこない、それらを 4D アプリケーションに格納するための機能を持ったコンポーネントを作成できます。

ニーズに合わせて独自の 4Dコンポーネントを開発し、それを非公開とすることができます。 You can also [share your components with the 4D community](https://github.com/topics/4d-component).

## 定義

- **Matrix Project**: 4D project used for developing the component. マトリクスプロジェクトは特別な属性を持たない標準のプロジェクトです。 マトリクスプロジェクトはひとつのコンポーネントを構成します。
- **Host Project**: Application project in which a component is installed and used.
- **Component**: Matrix project that can be compiled or [built](Desktop/building.md#build-component), copied into the [`Components`](Project/architecture.md) folder of the host application and whose contents are used in the host application.

## 基本

4D コンポーネントの作成とインストールは直接 4D を使用しておこないます:

- To install a component, you simply need to copy the component files into the [`Components` folder of the project](Project/architecture.md). エイリアスまたはショートカットも使用できます。
- 言い換えれば、マトリクスプロジェクト自体も1 つ以上のコンポーネントを使用できます。 しかしコンポーネントが "サブコンポーネント" を使用することはできません。
- コンポーネントは次の 4D の要素を呼び出すことができます: クラス、関数、プロジェクトメソッド、プロジェクトフォーム、メニューバー、選択リストなど。 反面、コンポーネントが呼び出せないものは、データベースメソッドとトリガーです。
- コンポーネント内でデータストアや標準のテーブル、データファイルを使用することはできません。 しかし、外部データベースのメカニズムを使用すればテーブルやフィールドを作成し、そこにデータを格納したり読み出したりすることができます。 外部データベースは、メインの 4D データベースとは独立して存在し、SQLコマンドでアクセスします。
- インタープリターモードで動作するホストプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。 コンパイルモードで実行されるホストデータベースでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

## ランゲージコマンドのスコープ

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the [`EXECUTE METHOD`](https://doc.4d.com/4dv20/help/command/en/page1007.html) or [`EXECUTE FORMULA`](https://doc.4d.com/4dv20/help/command/en/page63.html) command that use the context of the method specified by the command. また、ユーザー＆グループテーマの読み出しコマンドはコンポーネントで使用することができますが、読み出されるのはホストプロジェクトのユーザー＆グループ情報であることに注意してください (コンポーネントに固有のユーザー＆グループはありません)。

The [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/en/page642.html) and [`Get database parameter`](https://doc.4d.com/4dv20/help/command/en/page643.html) commands are an exception: their scope is global to the application. これらのコマンドがコンポーネントから呼び出されると、結果はホストプロジェクトに適用されます。

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

The [`COMPONENT LIST`](https://doc.4d.com/4dv20/help/command/en/page1001.html) command can be used to obtain the list of components that are loaded by the host project.

### 使用できないコマンド

(読み取り専用モードで開かれるため) ストラクチャーファイルを更新する以下のコマンドは、コンポーネントで使用することができません。 コンポーネント中で以下のコマンドを実行すると、-10511, "CommandName コマンドをコンポーネントでコールすることはできません" のエラーが生成されます:

- `ON EVENT CALL`
- `Method called on event`
- `SET PICTURE TO LIBRARY`
- `REMOVE PICTURE FROM LIBRARY`
- `SAVE LIST`
- `ARRAY TO LIST`
- `EDIT FORM`
- `CREATE USER FORM`
- `DELETE USER FORM`
- `CHANGE PASSWORD`
- `EDIT ACCESS`
- `Set group properties`
- `Set user properties`
- `DELETE USER`
- `CHANGE LICENSES`
- `BLOB TO USERS`
- `SET PLUGIN ACCESS`

**注:**

- The `Current form table` command returns `Nil` when it is called in the context of a project form. ゆえにこのコマンドをコンポーネントで使用することはできません。
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component project. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## プロジェクトメソッドの共有

マトリクスプロジェクトのすべてのプロジェクトメソッドは 、コンポーネントに含まれます。 つまり、マトリクスプロジェクトをコンポーネント化した後、これらのプロジェクトメソッドは同コンポーネント内で呼び出して実行することができます。

他方、デフォルトでは、これらのプロジェクトメソッドはホストプロジェクトに表示されず、呼び出すこともできません。 In the matrix project, you must explicitly designate the methods that you want to share with the host project by checking the **Shared by components and host project** box in the method properties dialog box:

![](../assets/en/Concepts/shared-methods.png)

設定することで、共有されたプロジェクトメソッドはホストプロジェクトにおいて呼び出せるようになります (しかしホストプロジェクトのコードエディターで編集することはできません)。 These methods are **entry points** of the component.

セキュリティのため、デフォルトでは、コンポーネントはホストプロジェクトのプロジェクトメソッドを実行することはできません。 特定の場合に、ホストプロジェクトのプロジェクトメソッドにコンポーネントがアクセスできるようにする必要があるかもしれません。 To do this, you must explicitly designate which project methods of the host project you want to make accessible to the components (in the method properties, check the **Shared by components and host project** box).

![](../assets/en/Concepts/pict516563.en.png)

Once the project methods of the host projects are available to the components, you can execute a host method from inside a component using the [`EXECUTE FORMULA`](https://doc.4d.com/4dv20/help/command/en/page63.html) or [`EXECUTE METHOD`](https://doc.4d.com/4dv20/help/command/en/page1007.html) command. 例:

```4d
// ホストメソッド
component_method("host_method_name")
```

```4d
// コンポーネントメソッド
#DECLARE ($param : Text)
EXECUTE METHOD($param)
```

> インタープリターコンポーネントがインストールされたインタープリターホストデータベースは、それがインタープリターコンポーネントのメソッドを呼び出さなければ、コンパイル/シンタックスチェックができます。 そうでない場合、コンパイルまたはシンタックスチェックを実行しようとすると警告ダイアログが表示され、操作を実行することはできません。\
> Keep in mind that an interpreted method can call a compiled method, but not the reverse, except via the use of the `EXECUTE METHOD` and `EXECUTE FORMULA` commands.

## クラスや関数の共有

デフォルトでは、ホストプロジェクトの 4Dコードエディターからコンポーネントのクラスと関数を呼び出すことはできません。 コンポーネントのクラスと関数をホストプロジェクトに公開したい場合は、コンポーネント名前空間を宣言する必要があります。 また、コンポーネントのクラスや関数がホストコードエディターでどのように提案されるかをコントロールすることもできます。

### コンポーネント名前空間の宣言

To allow classes and functions of your component to be exposed in the host projects, enter a value in the [**Component namespace in the class store** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings. デフォルトでは、このエリアは空です。つまり、コンポーネントのクラスはコンポーネント外で利用できません。

![](../assets/en/settings/namespace.png)

> A _namespace_ ensures that no conflict emerges when a host project uses different components that have classes or functions with identical names. A component namespace must be compliant with [property naming rules](../Concepts/identifiers.md#object-properties).

When you enter a value, you declare that component classes and functions will be available in the [user class store (**cs**)](../Concepts/classes.md#cs) of the host project's code, through the `cs.<value>` namespace. For example, if you enter "eGeometry" as component namespace, assuming that you have created a `Rectangle` class containing a `getArea()` function, once your project is installed as a component, the developer of the host project can write:

```4d
// ホストプロジェクトにて
var $rect: cs.eGeometry.Rectangle
$rect:=cs.eGeometry.Rectangle.new(10;20)
$area:=$rect.getArea()
```

:::info

The namespace of a [compiled](#protection-of-components-compilation) component will be added between parentheses after the component name in the [Component Methods page](../Concepts/components.md#using-components) of the host projects:

![](../assets/en/settings/namesapece-explorer.png)

:::

競合を避けるためには、優れた識別名の使用が推奨されます。 もし、コンポーネントと同じ名前のユーザークラスがすでにプロジェクトに存在していた場合、そのユーザークラスが考慮され、コンポーネントクラスは無視されます。

コンポーネントの ORDAクラスは、ホストプロジェクトでは使用できません。 たとえば、コンポーネントに Employees というデータクラスがある場合、ホストプロジェクトで "cs.Mycomponent.Employee" クラスを使用することはできません。

### 非表示クラス

アンダースコア ("_") を名前の前に付けることで、コンポーネントのクラスや関数を非表示にすることができます。 When a [component namespace is defined](#declaring-the-component-namespace), hidden classes and functions of the component will not appear as suggestions when using code completion.

ただし、名前がわかっていれば使用することは可能です。 For example, the following syntax is valid even if the `_Rectangle` class is hidden:

```4d
$rect:=cs.eGeometry._Rectangle.new(10;20)
```

> Non-hidden functions inside a hidden class appear as suggestions when you use code completion with a class that [inherits](../Concepts/classes.md#inheritance) from it. For example, if a component has a `Teacher` class that inherits from a `_Person` class, code completion for `Teacher` suggests non-hidden functions from `_Person`.

## コンパイル済みコンポーネントのコード補完

To make your component easier to use for developers, you can check the [**Generate syntax file for code completion when compiled** option in the General page](../settings/general.md#component-namespace-in-the-class-store) of the matrix project Settings.

A syntax file (JSON format) is then automatically created during the compilation phase, filled with the syntax of your component's classes, functions, and [exposed methods](#sharing-of-project-methods), and placed in the `\Resources\en.lproj` folder of the component project. 4D は、このシンタックスファイルをもとに、コード補完や関数シンタックスなどのコードエディター用のヘルプを生成します。

![](../assets/en/settings/syntax-code-completion-2.png)
![](../assets/en/settings/syntax-code-completion-1.png)

If you don't enter a [component namespace](#declaring-the-component-namespace), the resources for the classes and exposed methods are not generated even if the syntax file option is checked.

## 変数の渡し方

ローカル、プロセス、インタープロセス変数は、コンポーネントとホストプロジェクト間で共有されません。 ホストプロジェクトからコンポーネントの変数を編集、またはその逆をおこなう唯一の方法はポインターを使用することです。

配列を使用した例:

```4d
//In the host project:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

//In the component, the AMethod project method contains:
     APPEND TO ARRAY($1->;2)
```

変数を使用した例:

```4d
C_TEXT(myvariable)
component_method1(->myvariable)
```

```4d
C_POINTER($p)
$p:=component_method2(...)
```

ポインターを使用しない場合でも、コンポーネント側からホストデータベースの (変数そのものではなく) 変数の値にアクセスすること自体は可能ですし、その逆も可能です:

```4d
// ホストデータベース内
C_TEXT($input_t)
$input_t:="DoSomething"
component_method($input_t)
// component_method は $1 に "DoSomething" を受け取ります ($input_t 変数を受け取るわけではありません)
```

ホストプロジェクトとコンポーネント間でポインターを使用して通信をおこなうには、以下の点を考慮する必要があります:

- The `Get pointer` command will not return a pointer to a variable of the host project if it is called from a component and vice versa.

- コンパイル済みプロジェクトでは、コンパイルされたコンポーネントしか使用できませんが、インタープリタープロジェクトの場合には、インタープリターおよびコンパイル済みコンポーネントを同時に使用することができます。 この場合、ポインターの利用は以下の原則を守らなければなりません: インタープリターモードでは、コンパイルモードにおいて作成されたポインターを解釈できます。逆にコンパイルモードでは、インタープリターモードにて作成されたポインターを解釈することはできません。
  以下の例でこの原則を説明します: 同じホストプロジェクトにインストールされた 2つのコンポーネント C ( コンパイル済) と I ( インタープリタ) があります:

- If component C defines the `myCvar` variable, component I can access the value of this variable by using the pointer `->myCvar`.

- If component I defines the `myIvar` variable, component C cannot access this variable by using the pointer `->myIvar`. このシンタックスは実行エラーを起こします。

- The comparison of pointers using the `RESOLVE POINTER` command is not recommended with components since the principle of partitioning variables allows the coexistence of variables having the same name but with radically different contents in a component and the host project (or another component). 両コンテキストで、変数のタイプが違うことさえありえます。 If the `myptr1` and `myptr2` pointers each point to a variable, the following comparison will produce an incorrect result:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      // 変数が異なっているにもかかわらず、このテストはtrue を返します
```

このような場合には、ポインターを比較しなければなりません:

```4d
     If(myptr1=myptr2) // このテストはFalse を返します
```

## エラー処理

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running application. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host project is not called, and vice versa.

## ホストプロジェクトのテーブルへのアクセス

コンポーネントでテーブルを使用することはできませんが、ホストプロジェクトとコンポーネントはポインターを使用して通信をおこなうことができます。 たとえば、以下はコンポーネントで実行可能なメソッドです:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```4d
C_POINTER($1) //Pointer on a table in host project
C_POINTER($2) //Pointer on a field in host project
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

> コンポーネントのコンテキストにおいて、テーブルフォームへの参照はすべてホスト側のテーブルフォームへの参照だと 4D はみなします (コンポーネントはテーブルを持つことができないからです)。

## テーブルやフィールドの利用

コンポーネントは、マトリクスプロジェクトのストラクチャーで定義されたテーブルやフィールドを使用することはできません。 しかし外部データベースを作成し、そのテーブルやフィールドを必要に応じ利用することはできます。 外部データベースの作成と管理は SQL を用いておこないます。 外部データベースは、メインの4Dプロジェクトから独立している別の 4Dプロジェクトですが、メインプロジェクトから操作が可能です。 外部データベースの利用は、そのデータベースを一時的にカレントデータベースに指定することです。言い換えれば、4Dが実行する SQL クエリのターゲットデータベースとして外部データベースを指定します。 You create external databases using the SQL `CREATE DATABASE` command.

### 例題

以下のコードはコンポーネントに実装されており、外部データベースに対して3つの基本的なアクションをおこないます:

- 外部データベースを作成します (存在しない場合)
- 外部データベースにデータを追加します
- 外部データベースからデータを読み込みます

外部データベースの作成:

```4d
<>MyDatabase:=Get 4D folder+"\MyDB" // (Windows) stores the data in an authorized directory
 Begin SQL
        CREATE DATABASE IF NOT EXISTS DATAFILE :[<>MyDatabase];
        USE DATABASE DATAFILE :[<>MyDatabase];
        CREATE TABLE IF NOT EXISTS KEEPIT
        (
        ID INT32 PRIMARY KEY,
        kind VARCHAR,
        name VARCHAR,
        code TEXT,
        sort_order INT32
        );

        CREATE UNIQUE INDEX id_index ON KEEPIT (ID);

        USE DATABASE SQL_INTERNAL;

 End SQL
```

外部データベースへのデータ書き込み:

```4d
 $Ptr_1:=$2 // retrieves data from the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6
 Begin SQL

        USE DATABASE DATAFILE :[<>MyDatabase];

        INSERT INTO KEEPIT
        (ID, kind, name, code, sort_order)
        VALUES
        (:[$Ptr_1], :[$Ptr_2], :[$Ptr_3], :[$Ptr_4], :[$Ptr_5]);

        USE DATABASE SQL_INTERNAL;


 End SQL
```

外部データベースからデータを読み込み:

```4d
 $Ptr_1:=$2 // accesses data of the host project through pointers
 $Ptr_2:=$3
 $Ptr_3:=$4
 $Ptr_4:=$5
 $Ptr_5:=$6

 Begin SQL

    USE DATABASE DATAFILE :[<>MyDatabase];

    SELECT ALL ID, kind, name, code, sort_order
    FROM KEEPIT
    INTO :$Ptr_1, :$Ptr_2, :$Ptr_3, :$Ptr_4, :$Ptr_5;

    USE DATABASE SQL_INTERNAL;

 End SQL
```

## フォームの使用

- 特定のテーブルに属さない" プロジェクトフォーム" のみが、コンポーネント内で利用できます。 マトリクスプロジェクトのすべてのプロジェクトフォームをコンポーネントで使用することができます。
- コンポーネントはホストプロジェクトのテーブルフォームを使用できます。 この場合、コンポーネントのコードでフォームを指定するにあたっては、テーブル名ではなく、テーブルへのポインターを使用しなければならないことに注意してください。

> If a component uses the `ADD RECORD` command, the current Input form of the host project will be displayed, in the context of the host project. したがって、その入力フォーム上に変数が含まれている場合、コンポーネントはその変数にアクセスできません。

- You can [publish component forms as subforms](../FormEditor/properties_FormProperties.md#published-as-subform) in the host projects. これは具体的には、グラフィックオブジェクトを提供するコンポーネントを開発できることを意味します。 たとえば、4D社が提供するウィジェットはコンポーネントのサブフォーム利用に基づいています。

> コンポーネントのコンテキストにおいては、参照されるプロジェクトフォームはすべてコンポーネント内に存在している必要があります。 For example, inside a component, referencing a host project form using `DIALOG` or `Open form window` will throw an error.

## リソースの使用

コンポーネントは、自身の Resourcesフォルダーにあるリソースを使用することができます。

これによって自動メカニズムが有効となり、コンポーネントの Resources フォルダー内で見つかった XLIFF ファイルは、 同コンポーネントによってロードされます。

1つ以上のコンポーネントを含むホストプロジェクトでは、ホストプロジェクトと同様にそれぞれのコンポーネントも固有のリソースチェーンを持っています。 リソースは異なるプロジェクト間で分離されます。コンポーネントA のリソースにコンポーネントB やホストプロジェクトからアクセスすることはできません。

## 初期化のコードの実行

コンポーネントは、ホストデータベースを開いたときまたは閉じたときに、自動的に 4Dコードを実行することができます。これによってたとえば、ホストデータベースに関連する設定やユーザーの状態などを読み込み・保存することができます。

Executing initialization or closing code is done by means of the `On Host Database Event` database method.

> For security reasons, you must explicitly authorize the execution of the `On Host Database Event` database method in the host database in order to be able to call it. To do this, you must check the [**Execute "On Host Database Event" method of the components** option](../settings/security.md#options) in the Security page of the Settings.

## コンポーネントの保護: コンパイル

コンポーネントとしてインストールされたマトリクスプロジェクトのコードは、ホストプロジェクトからデフォルトでアクセス可能です。 特に:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストプロジェクトのメソッドから呼び出し可能です。 エクスプローラーのプレビューエリアでそれらの内容を選択してコピーすることが可能です。 また、その内容はデバッガーで見ることもできます。 しかし、それらをコードエディター上で開いたり編集したりすることはできません。
- マトリクスプロジェクトの他のプロジェクトメソッドはエクスプローラーに現れません。しかし、ホストプロジェクトのデバッガーには内容が表示されます。
- The non-hidden classes and functions can be viewed in the debugger [if a namespace is declared](#declaring-the-component-namespace).

To protect the code of a component effectively, simply [compile and build](Desktop/building.md#build-component) the matrix project and provide it in the form of a .4dz file. コンパイルされたマトリクスプロジェクトがコンポーネントとしてインストールされると:

- 共有のプロジェクトメソッド、クラス、および関数は、ホストプロジェクトのメソッドから呼び出し可能です。共有のプロジェクトメソッドは、エクスプローラーのメソッドページにも表示されます。 しかし、その内容はプレビューエリアにもデバッガーにも表示されません。
- マトリクスプロジェクトの他のプロジェクトメソッドは一切表示されません。

## コンポーネントの共有

We encourage you to support the 4D developer community by sharing your components, preferably on the [GitHub platform](https://github.com/topics/4d-component). We recommend that you use the **`4d-component`** topic to be correctly referenced.

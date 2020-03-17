---
id: version-18.0-components
title: コンポーネント
original_id: components
---

4D のコンポーネントとは、他のデータベースにインストール可能な、1つ以上の機能を持つ 4D メソッドやフォームの一式です。 たとえば、メールの送受信をおこない、それらを 4D データベースに格納するための機能を持ったコンポーネントを作成できます。

4D コンポーネントの作成とインストールは直接 4D を使用しておこないます。 4D では、コンポーネントは [プラグイン](Concepts/plug-ins.md) のように扱われ、以下の原則が適用されます: 

- コンポーネントは、標準のアーキテクチャーまたはパッケージ (.4dbase 拡張子) の形をしたストラクチャーファイル ( コンパイルまたは非コンパイル) で構成されます。
- データベースにコンポーネントをインストールするには、データベースのストラクチャーファイルと同階層の "Components" フォルダーにコンポーネントをコピーします。
- コンポーネントは次の 4D の要素を呼び出すことができます: プロジェクトメソッド、プロジェクトフォーム、メニューバー、選択リスト、ライブラリピクチャーなど。 反面、コンポーネントが呼び出せないものは、データベースメソッドとトリガーです。
- コンポーネント内で標準のテーブルやデータファイルを使用することはできません。 しかし、外部データベースのメカニズムを使用すればテーブルやフィールドを作成し、そこにデータを格納したり読み出したりすることができます。 外部データベースは、メインの 4D データベースとは独立して存在し、SQLコマンドでアクセスします。 

## 定義

4D のコンポーネント管理メカニズムでは、以下の用語とコンセプトを使います:

- **マトリクスデータベース**: コンポーネント開発に使用する4D データベース。 マトリクスデータベースは特別な属性を持たない標準のデータベースです。 マトリクスデータベースはひとつのコンポーネントを構成します。 マトリクスデータベースは、コンポーネントを使用するデータベース (ホストデータベース) の Components フォルダーにコピーして使います。コンパイルされていてもいなくてもかまいません。
- **ホストデータベース**: コンポーネントがインストールされ、それを使用するデータベース。
- **コンポーネント**: ホストデータベースによって使用される目的で、同データベースの Components フォルダーにコピーされたマトリクスデータベース (コンパイル済みまたは非コンパイル)。 

データベースは "マトリクス" にも "ホスト" にもなりえます。言い換えれば、マトリクスデータベース自体も1 つ以上のコンポーネントを使用できます。 しかしコンポーネントが "サブコンポーネント" を使用することはできません。

### コンポーネントの保護: コンパイル

コンポーネントとしてインストールされたマトリクスデータベースのプロジェクトメソッドは、ホストデータベースからデフォルトでアクセス可能です。 特に:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストデータベースのメソッドから呼び出し可能です。 エクスプローラーのプレビューエリアでそれらの内容を選択してコピーすることが可能です。 また、その内容はデバッガーで見ることもできます。 しかし、それらをメソッドエディター上で開いたり編集したりすることはできません。
- マトリクスデータベースの他のプロジェクトメソッドはエクスプローラーに現れません。しかし、ホストデータベースのデバッガーには内容が表示されます。 

コンポーネントのプロジェクトメソッドを効果的に保護するには、マトリクスデータベースをコンパイルして、インタプリターコードを含まない .4dc ファイルとして提供します。 コンパイルされたマトリクスデータベースがコンポーネントとしてインストールされると:

- エクスプローラーのメソッドページに存在する共有のプロジェクトメソッドは、ホストデータベースのメソッドから呼び出し可能です。 しかし、その内容はプレビューエリアにもデバッガーにも表示されません。
- マトリクスデータベースの他のプロジェクトメソッドは一切表示されません。 

## プロジェクトメソッドの共有

マトリクスデータベースのすべてのプロジェクトメソッドは 、コンポーネントに含まれます。つまり、マトリクスデータベースをコンポーネント化しても、これらのプロジェクトメソッドは同コンポーネントにて呼び出して実行することができます。

他方、デフォルトでは、これらのプロジェクトメソッドはホストデータベースに表示されず、呼び出すこともできません。 プロジェクトメソッドをホストデータベースと共有するには、 マトリクスデータベース側でそのメソッドをそのように明示的に設定しなければなりません。 設定することで、それらのプロジェクトメソッドはホストデータベースにて呼び出すことができるようになります (しかしホストデータベースのメソッドエディターで編集することはできません)。 これらのメソッドはコンポーネントの **エントリーポイント** となります。

**注:** セキュリティのため、デフォルトでは、コンポーネントはホストデータベースのプロジェクトメソッドを実行することはできません。 特定の場合に、ホストデータベースのプロジェクトメソッドにコンポーネントがアクセスできるようにする必要があるかもしれません。 そうするには、ホストデータベースのプロジェクトメソッド側で、コンポーネントからのアクセスを可能にするよう明示的に指定しなければなりません。

![](assets/en/Concepts/pict516563.en.png)

## 変数の渡し方

ローカル、プロセス、インタープロセス変数は、コンポーネントとホストデータベース間で共有されません。 ホストデータベースからコンポーネントの変数、またはその逆にアクセスする唯一の方法はポインターを使用することです。

配列を使用した例:

```4d
// ホストデータベース側:
     ARRAY INTEGER(MyArray;10)
     AMethod(->MyArray)

// コンポーネント側で AMethod プロジェクトメソッドは以下の通りです:
     APPEND TO ARRAY($1->;2)
```

変数を使用した例:

```4d
 C_TEXT(myvariable)
 component_method1(->myvariable)
 C_POINTER($p)
 $p:=component_method2(...)
```

ホストデータベースとコンポーネント間でポインターを使用して通信をおこなうには、以下の点を考慮する必要があります:

- `Get pointer` をコンポーネント内で使用した場合、このコマンドはホストデータベースの変数へのポインターを返しません。また逆にこのコマンドをホストデータベースで使用した場合も同様です。

- コンパイル済みデータベースでは、コンパイルされたコンポーネントしか使用できませんが、インタープリターデータベースの場合には、インタープリターおよびコンパイル済みコンポーネントを同時に使用することができます。 この場合、ポインターの利用は以下の原則を守らなければなりません: インタープリターモードでは、コンパイルモードにおいて作成されたポインターを解釈できます。逆にコンパイルモードでは、インタープリターモードにて作成されたポインターを解釈することはできません。 以下の例でこの原則を説明します: 同じホストデータベースにインストールされた 2つのコンポーネント C ( コンパイル済) と I ( インタープリタ) があります:
    
 - コンポーネントC が定義する変数 `myCvar` があるとき、コンポーネントI はポインター `->myCvar` を使用して変数の値にアクセスすることができます。
 - コンポーネントI が定義する変数 `myIvar` があるとき、コンポーネントC はポインター `->myIvar` を使用しても変数の値にアクセスすることはできません。 このシンタックスは実行エラーを起こします。 
- `RESOLVE POINTER` を使用したポインターの比較はお勧めできません。 変数の分割の原則により、ホストデータベースとコンポーネント (あるいは他のコンポーネント) で同じ名前の変数が存在することができますが、根本的にそれらは異なる内容を持ちます。 両コンテキストで、変数のタイプが違うことさえありえます。 If the `myptr1` and `myptr2` pointers each point to a variable, the following comparison will produce an incorrect result:

```4d
     RESOLVE POINTER(myptr1;vVarName1;vtablenum1;vfieldnum1)
     RESOLVE POINTER(myptr2;vVarName2;vtablenum2;vfieldnum2)
     If(vVarName1=vVarName2)
      //This test returns True even though the variables are different
```

In this case, it is necessary to use the comparison of pointers:

```4d
     If(myptr1=myptr2) //This test returns False
```

## Access to tables of the host database

Although components cannot use tables, pointers can permit host databases and components to communicate with each other. For example, here is a method that could be called from a component:

```4d
// calling a component method
methCreateRec(->[PEOPLE];->[PEOPLE]Name;"Julie Andrews")
```

Within the component, the code of the `methCreateRec` method:

```4d
C_POINTER($1) //Pointer on a table in host database
C_POINTER($2) //Pointer on a field in host database
C_TEXT($3) // Value to insert

$tablepointer:=$1
$fieldpointer:=$2
CREATE RECORD($tablepointer->)

$fieldpointer->:=$3
SAVE RECORD($tablepointer->)
```

## Scope of language commands

Except for [Unusable commands](#unusable-commands), a component can use any command of the 4D language.

When commands are called from a component, they are executed in the context of the component, except for the `EXECUTE METHOD` command that uses the context of the method specified by the command. Also note that the read commands of the “Users and Groups” theme can be used from a component but will read the users and groups of the host database (a component does not have its own users and groups).

The `SET DATABASE PARAMETER` and `Get database parameter` commands are an exception: their scope is global to the database. When these commands are called from a component, they are applied to the host database.

Furthermore, specific measures have been specified for the `Structure file` and `Get 4D folder` commands when they are used in the framework of components.

The `COMPONENT LIST` command can be used to obtain the list of components that are loaded by the host database.

### Unusable commands

The following commands are not compatible for use within a component because they modify the structure file — which is open in read-only. Their execution in a component will generate the error -10511, “The CommandName command cannot be called from a component”:

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

- The `Current form table` command returns `Nil` when it is called in the context of a project form. Consequently, it cannot be used in a component.
- SQL data definition language commands (`CREATE TABLE`, `DROP TABLE`, etc.) cannot be used on the component database. However, they are supported with external databases (see `CREATE DATABASE` SQL command).

## エラー処理

An [error-handling method](Concepts/error-handling.md) installed by the `ON ERR CALL` command only applies to the running database. In the case of an error generated by a component, the `ON ERR CALL` error-handling method of the host database is not called, and vice versa.

## Use of forms

- Only “project forms” (forms that are not associated with any specific table) can be used in a component. Any project forms present in the matrix database can be used by the component. 
- A component can call table forms of the host database. Note that in this case it is necessary to use pointers rather than table names between brackets [] to specify the forms in the code of the component.

**Note:** If a component uses the `ADD RECORD` command, the current Input form of the host database will be displayed, in the context of the host database. Consequently, if the form includes variables, the component will not have access to it.

- You can publish component forms as subforms in the host databases. This means that you can, more particularly, develop components offering graphic objects. For example, Widgets provided by 4D are based on the use of subforms in components. This is described in Sharing of forms.

## Use of tables and fields

A component cannot use the tables and fields defined in the 4D structure of the matrix database. However, you can create and use external databases, and then use their tables and fields according to your needs. You can create and manage external databases using SQL. An external database is a 4D database that is independent from the main 4D database, but that you can work with from the main 4D database. Using an external database means temporarily designating this database as the current database, in other words, as the target database for the SQL queries executed by 4D. You create external databases using the SQL `CREATE DATABASE` command.

### 例題

The following code is included in a component and performs three basic actions with an external database:

- creates the external database if it does not already exist,
- adds data to the external database,
- reads data from the external database.

Creating the external database:

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

Writing in the external database:

```4d
 $Ptr_1:=$2 // retrieves data from the host database through pointers
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

Reading from an external database:

```4d
 $Ptr_1:=$2 // accesses data of the host database through pointers
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

## Use of resources

Components can use resources. In conformity with the resource management principle, if the component is of the .4dbase architecture (recommended architecture), the Resources folder must be placed inside this folder.

Automatic mechanisms are operational: the XLIFF files found in the Resources folder of a component will be loaded by this component.

In a host database containing one or more components, each component as well as the host databases has its own “resources string.” Resources are partitioned between the different databases: it is not possible to access the resources of component A from component B or the host database.

## On-line help for components

A specific mechanism has been implemented in order to allow developers to add on-line help to their components. The principle is the same as that provided for 4D databases:

- The component help must be provided as a file suffixed .htm, .html or (Windows only) .chm,
- The help file must be put next to the structure file of the component and have the same name as the structure file,
- This file is then automatically loaded into the Help menu of the application with the title “Help for...” followed by the name of the help file.
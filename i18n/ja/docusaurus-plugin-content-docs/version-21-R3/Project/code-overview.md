---
id: code-overview
title: Managing Methods and Classes
---

プロジェクトで使用される 4D コードは、 [メソッド](../Concepts/methods.md) および [クラス](../Concepts/classes.md) に記述されます。

4D IDE には、コードを作成・編集・エクスポート・削除するためのさまざまな機能があります。 通常は、4D付属 の [コードエディター](../code-editor/write-class-method.md) を使用して、コードを管理します。 他にも**VS Code** などのエディターを使用することもでき、VS Code に対しては[4D-Analyzer 拡張機能](https://github.com/4d/4D-Analyzer-VSCode) がご利用いただけます。

## メソッドの作成

4D のメソッドは、[`/Project/Sources/`](../Project/architecture.md#sources) フォルダーの適切なフォルダー内の **.4dm** ファイルに格納されます。

[いくつかの種類のメソッド](../Concepts/methods.md#method-types) を作成することができます:

- すべてのメソッドは、**エクスプローラー** ウィンドウから作成または開くことができます ([フォームエディター](../FormEditor/formEditor.md) から管理されるオブジェクトメソッドを除く)。
- プロジェクトメソッドは、**ファイル** メニューやツールバー (**新規/メソッド...** または **開く/メソッド...**)、[コードエディターウィンドウ](../code-editor/write-class-method.md#ショートカット) のショートカットを使っても作成したり開いたりできます。
- **Triggers** can also be created or opened from the [Structure editor](../Develop-legacy/triggers.md#activating-and-creating-a-trigger).
- フォームメソッドは、[フォームエディター](../FormEditor/formEditor.md) からも作成したり開いたりできます。

## クラスの作成

### User classes

4D においてユーザークラスとは、[`/Project/Sources/Classes/`](../Project/architecture.md#sources) フォルダーに保存された専用のメソッドファイル (**.4dm**) によって定義されます。 ファイル名がクラス名になります。 For example, a class named "Polygon" will be stored in the following file:

```
Project フォルダー Project Sources Classes Polygon.4dm
```

You can create a class file from the **File** menu or toolbar (**New > Class...**) or in the **Methods** page of the **Explorer** window. **Ctrl+Shift+Alt+k** ショートカットも使用できます。

エクスプローラーの **メソッド** ページにおいて、クラスは **クラス** カテゴリに分類されています。

クラスを新規作成するには次の方法があります:

- **クラス** カテゴリを選択し、![](../assets/en/Users/PlussNew.png) ボタンをクリックします。
- エクスプローラーウィンドウの下部にあるアクションメニュー、またはクラスグループのコンテキストメニューから **新規クラス...** を選択します。
  ![](../assets/en/Concepts/newClass.png)
- エクスプローラーのホームページのコンテキストメニューより **新規** > **クラス...** を選択します。

クラスを命名する際には、次のルールに留意してください:

- A [class name](../Concepts/identifiers.md#classes) must be compliant with [property naming rules](../Concepts/identifiers.md#object-properties).
- クラス名の大文字・小文字は区別されます。
- 競合防止のため、データベースのテーブルと同じ名前のクラスを作成するのは推奨されないこと

### ORDA classes

[ORDA data model user classes](../ORDA/ordaClasses.md) are high-level class functions created above the data model.

An ORDA data model class is defined by adding, at the same location as regular class files (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. たとえば、`Utilities` データクラスのエンティティクラスは、`UtilitiesEntity.4dm` ファイルによって定義されます。

各データモデルオブジェクトに関わるクラスは、4D によってあらかじめ自動的にメモリ内に作成されます。

![](../assets/en/ORDA/ORDA_Classes-3.png)

空の ORDA クラスは、デフォルトではエクスプローラーに表示されません。 表示するにはエクスプローラーのオプションメニューより **データクラスを全て表示** を選択します: ![](../assets/en/ORDA/showClass.png)

ORDA ユーザークラスは通常のクラスとは異なるアイコンで表されます。 空のクラスは薄く表示されます:

![](../assets/en/ORDA/classORDA2.png)

ORDA クラスファイルを作成するには、エクスプローラーで任意のクラスをダブルクリックします。 4D creates the class file and add the [`extends`](../Concepts/classes.md#class-extends-classname) code. たとえば、Entity クラスを継承するクラスの場合は:

```
Class extends Entity
```

定義されたクラスはエクスプローラー内で濃く表示されます。

定義された ORDA クラスファイルを 4Dコードエディターで開くには、ORDA クラス名を選択してエクスプローラーのオブションメニュー、またはコンテキストメニューの **編集...** を使用するか、ORDA クラス名をダブルクリックします:

![](../assets/en/ORDA/classORDA4.png)

ローカルデータストア (`ds`) に基づいた ORDA クラスの場合には、4D ストラクチャーウィンドウからも直接クラスコードにアクセスできます:

![](../assets/en/ORDA/classORDA5.png)

### 4D IDE (統合開発環境) におけるサポート

各種 4Dウィンドウ (コードエディター、コンパイラー、デバッガー、ランタイムエクスプローラー) において、クラスコードは "特殊なプロジェクトメソッド" のように扱われます:

- コードエディター:
  - クラスは実行できません
  - クラスメソッドはコードのブロックです
  - オブジェクトメンバーに対する **定義に移動** 操作はクラスの Function 宣言を探します。例: "$o.f()" の場合、"Function f" を見つけます。
  - クラスのメソッド宣言に対する **参照箇所を検索** 操作は、そのメソッドがオブジェクトメンバーとして使われている箇所を探します。例: "Function f" の場合 "$o.f()" を見つけます。
  - variables typed as a user or ORDA class automatically benefit from autocompletion features. Entity クラス変数の例です:

![](../assets/en/ORDA/AutoCompletionEntity.png)

- ランタイムエクスプローラーおよびデバッガーにおいて、クラスメソッドは `<ClassName>` コンストラクターまたは `<ClassName>.<FunctionName>`形式で表示されます。

## メソッドやクラスの削除

既存のメソッドやクラスを削除するには:

- ディスク上で "Sources" フォルダーより *.4dm* ファイルを削除します。
- 4D エクスプローラーでは、メソッドやクラスを選択した状態で ![](../assets/en/Users/MinussNew.png) をクリックするか、コンテキストメニューより **移動 ＞ ゴミ箱** を選択します。

> オブジェクトメソッドを削除するには、[フォームエディター](../FormEditor/formEditor.md) で、**オブジェクト** メニューから **オブジェクトメソッド消去** を選択します。

## Design Object Access commands

You can access the contents and paths of all methods in your applications by programming, thanks to the [**"Design Object Access" command theme**](../commands/theme/Design_Object_Access.md). This source toolkit facilitates the integration into your applications of code control tools and more particularly version control systems (VCS). It also lets you implement advanced systems for [code documentation](../Project/documentation.md), for building a custom explorer or for organizing scheduled backups of the code saved as disk files.

The following principles are implemented:

- Each method and form in a 4D application has its own address in the form of a pathname. For example, the trigger method for table 1 can be found at "[trigger]/table_1". Each object pathname is unique in an application.
- You can access objects in the 4D application using the commands of the **"Design Object Access"** command theme, for example [`METHOD GET NAMES`](../commands/method-get-names) or [`METHOD GET PATHS`](../commands/method-get-paths).
- Most of the commands in this theme work in both [interpreted and compiled](../Concepts/interpreted.md) mode. However, commands that modify properties or access contents executable from methods can only be used in interpreted mode (see the table below).
- You can use all the commands of this theme with 4D in local or remote mode. However, keep in mind that you cannot use certain commands in compiled mode: the purpose of this theme is to create custom development support tools. You must not use these commands to dynamically change the functioning of a database that is running. For example, you cannot use [`METHOD SET ATTRIBUTE`](../commands/method-set-attribute) to change a method attribute according to the status of the current user.
- When a command of this theme is called from a [component](../Project/components.md), by default it accesses the component objects. In this case, to access objects of the host, you just pass a `*` as the last parameter.

### Use in compiled mode

For reasons related to the principle of the compilation process, only certain commands in this theme can be used in compiled mode. The following table indicates the available of the commands in compiled mode:

| コマンド                                                                     | Can be used in compiled mode |
| ------------------------------------------------------------------------ | ---------------------------- |
| [Current method path](../commands/current-method-path)                   | ◯                            |
| [FORM GET NAMES](../commands/form-get-names)                             | ◯                            |
| [METHOD Get attribute](../commands/method-get-attribute)                 | ◯                            |
| [METHOD GET ATTRIBUTES](../commands/method-get-attributes)               | ◯                            |
| [METHOD GET CODE](../commands/method-get-code)                           | ×                            |
| [METHOD GET COMMENTS](../commands/method-get-comments)                   | ◯                            |
| [METHOD GET FOLDERS](../commands/method-get-folders)                     | ◯                            |
| [METHOD GET MODIFICATION DATE](../commands/method-get-modification-date) | ◯                            |
| [METHOD GET NAMES](../commands/method-get-names)                         | ◯                            |
| [METHOD Get path](../commands/method-get-path)                           | ◯                            |
| [METHOD GET PATHS](../commands/method-get-paths)                         | ◯                            |
| [METHOD GET PATHS FORM](../commands/method-get-paths-form)               | ◯                            |
| [METHOD OPEN PATH](../commands/method-open-path)                         | ×                            |
| [METHOD RESOLVE PATH](../commands/method-resolve-path)                   | ◯                            |
| [METHOD SET ACCESS MODE](../commands/method-set-access-mode)             | ◯                            |
| [METHOD SET ATTRIBUTE](../commands/method-set-attribute)                 | ×                            |
| [METHOD SET ATTRIBUTES](../commands/method-set-attributes)               | ×                            |
| [METHOD SET CODE](../commands/method-set-code)                           | ×                            |
| [METHOD SET COMMENTS](../commands/method-set-comments)                   | ×                            |

:::note

The error -9762 "The command cannot be executed in a compiled database." is generated when the command is executed in compiled mode.

:::

### Creation of pathnames

Pathnames generated for 4D objects must be compatible with the file management of the operating system. Characters that are forbidden at the OS level such as ":" are automatically encoded in method names, so that generated files may be integrated automatically in a version control system.

Here are the encoded characters:

| 文字                           | Encoding |
| ---------------------------- | -------- |
| "                            | %22      |
| \*                           | %2A      |
| /                            | %2F      |
| :            | %3A      |
| \< | %3C      |
| \>                          | %3E      |
| ?                            | %3F      |
| \|                           | %7C      |
| \\                         | %5C      |
| %                            | %25      |

#### 例題

`Form?1` is encoded `Form%3F1`  
`Button/1` is encoded `Button%2F1`
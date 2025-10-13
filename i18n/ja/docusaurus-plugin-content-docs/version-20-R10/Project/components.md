---
id: components
title: Dependencies
---

4D のコンポーネントとは、プロジェクトに追加可能な、1つ以上の機能を持つ 4Dコードや 4Dフォームの一式です。 たとえば、[4D SVG](https://github.com/4d/4D-SVG)コンポーネント は、SVGファイルの表示するための高度なコマンドと統合されたレンダリングエンジンを追加します。

独自の 4Dコンポーネントを [開発](../Extensions/develop-components.md) し、[ビルド](../Desktop/building.md) することもできますし、4Dコミュニティによって共有されているパブリックコンポーネントを [GitHubで見つけて](https://github.com/search?q=4d-component\\\\\\&type=Repositories) ダウンロードすることもできます。

4D で開発する際、コンポーネントファイルはコンピューター上または Githubリポジトリ上に、透過的に保存することができます。

## インタープリターとコンパイル済みコンポーネント

コンポーネントは、インタープリターまたは [コンパイル済み](../Desktop/building.md) のものが使えます。

 - インタープリターモードで動作する 4Dプロジェクトは、インタープリターまたはコンパイル済みどちらのコンポーネントも使用できます。
 - コンパイルモードで実行される 4Dプロジェクトでは、インタープリターのコンポーネントを使用できません。 この場合、コンパイル済みコンポーネントのみが利用可能です。

### パッケージフォルダ

コンポーネントのパッケージフォルダ(*MyComponent.4dbase* フォルダ) には以下のものを含めることができます:

- **インタープリタ版コンポーネント**の場合: 標準の[Project フォルダ](../Project/architecture.md)。 [プロジェクトの**Components** フォルダ](architecture.md#コンポーネント)にインストールする場合には、パッケージフォルダ名の末尾を **.4dbase** にする必要があります。
- **コンパイル版コンポーネント**の場合:
  - .4DZ ファイル、*Resources* フォルダ、*Info.plist* ファイルを格納している"Contents" フォルダ(推奨されるアーキテクチャ)
  - *Resources* などの他のフォルダを格納している.4DZ ファイル。

:::note

アプリケーションをmacOS 上で[公証](../Desktop/building.md#公証について) したい場合には、"Contents" フォルダアーキテクチャーが推奨されます。

:::

## Components made by 4D

4D includes a set of components developed in-house. They can also be found in the [4D github repository](https://github.com/4d).

| コンポーネント                                                              | 説明                                                                                                                                                                    | 主な機能                                                                                                                                    |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [4D AiIKit](https://github.com/4d/4D-AIKit)                          | サードパーティのOpenAI API に接続するためのクラス群                                                                                                                                       | `OpenAIChat`, `OpenAIImage`...                                                          |
| [4D Labels](https://github.com/4d/4D-Labels)                         | ラベルテンプレートを作成するための内部コンポーネント                                                                                                                                            |                                                                                                                                         |
| [4D NetKit](https://developer.4d.com/4D-NetKit)                      | サードパーティAPI に接続するためのWeb サービスツール群                                                                                                                                       | `OAuth2Provider` class, `New OAuth2 provider`, `OAuth2ProviderObject.getToken()`                                                        |
| [4D Progress](https://github.com/4d/4D-Progress)                     | 1つ以上の進捗バーを同じウィンドウで開く                                                                                                                                                  | `Progress New`, `Progress SET ON STOP METHOD`, `Progress SET PROGRESS`, ...             |
| [4D SVG](https://github.com/4d/4D-SVG)                               | 一般的な svgグラフィックオブジェクトの作成・操作                                                                                                                                            | `SVGTool_Display_viewer`, 複数の `SVG_` メソッド                                                                                               |
| [4D ViewPro](ViewPro/getting-started.md)                             | フォームに追加できる表計算機能                                                                                                                                                       | [4D View Pro ドキュメンテーション](ViewPro/getting-started.md) 参照。                                                                                |
| [4D Widgets](https://github.com/4d/4D-Widgets)                       | DatePicker, TimePicker, SearchPicker 4Dウィジェットの管理                                                                                                                      | `DatePicker calendar`, `DateEntry area`, `TimeEntry`, `SearchPicker SET HELP TEXT`, ... |
| [4D WritePro Interface](https://github.com/4d/4D-WritePro-Interface) | Manage [4D Write Pro palettes](https://doc.4d.com/4Dv20R9/4D/20-R9/Entry-areas.300-7543821.en.html) and [table wizard](../WritePro/writeprointerface.md#table-wizard) | `WP PictureSettings`, `WP ShowTabPages`, `WP SwitchToolbar`, `WP UpdateWidget`                                                          |

## コンポーネントの読み込み

:::note

このページでは、**4D** と **4D Server** 環境でのコンポーネントの使用方法について説明します。 他の環境では、コンポーネントの管理は異なります:

 - [リモートモードの 4D](../Desktop/clientServer.md) では、サーバーがコンポーネントを読み込み、リモートアプリケーションに送信します。
 - 統合されたアプリケーションでは、コンポーネントは [ビルドする際に組み込まれます](../Desktop/building.md#プラグインコンポーネントページ)。

:::

### 概要

4Dプロジェクトにコンポーネントを読み込むには、以下の方法があります:

 - コンポーネントファイルを[プロジェクトの**Components**フォルダ](architecture.md#components)内にコピーする(インタープリタ版コンポーネントパッケージフォルダはフォルダ名の末尾が".4dbase" になっている必要があります、上記参照)。
 - または、プロジェクトの **dependencies.json** ファイルでコンポーネントを宣言します。これは、[**依存関係インターフェースを使用して依存関係を追加**](#github依存関係の追加) するときに、ローカルファイルに対して自動的におこなわれます。

**dependencies.json** ファイルで宣言されているコンポーネントは、異なる場所に保存できます:

 - 4Dプロジェクトのパッケージフォルダーと同じ階層 (デフォルトの場所です)
 - マシン上の任意の場所 (コンポーネントパスは **environment4d.json** ファイル内で宣言する必要があります)
 - GitHubリポジトリ (コンポーネントパスは、**dependencies.json** ファイルまたは **environment4d.json** ファイル、あるいはその両方で宣言できます)

同じコンポーネントが異なる場所にインストールされている場合、[優先順位](#優先順位) が適用されます。

### dependencies.json と environment4d.json

#### dependencies.json

**dependencies.json** ファイルは、4Dプロジェクトに必要なすべてのコンポーネントを宣言します。 このファイルは、4Dプロジェクトフォルダーの **Sources** フォルダーに置く必要があります。例:

```
	/MyProjectRoot/Project/Sources/dependencies.json
```

このファイルには次の内容を含めることができます:

 - [ローカル保存されている](#ローカルコンポーネント) コンポーネントの名前(デフォルトパス、または **environment4d.json** ファイルで定義されたパス)。
 - [GitHubリポジトリ](#github-に保存されたコンポーネント) に保存されているコンポーネントの名前 (パスはこのファイルまたは **environment4d.json** ファイルで定義できます)。

#### environment4d.json

**environment4d.json** ファイルは必須ではありません。 このファイルは、**dependencies.json** ファイル内で宣言された一部またはすべてのコンポーネントのついて、**カスタムパス** を定義するのに使用します。 このファイルは、プロジェクトパッケージフォルダーまたはその親フォルダーのいずれかに保存することができます (ルートまでの任意のレベル)。

このアーキテクチャーの主な利点は次のとおりです:

 - **environment4d.json** ファイルをプロジェクトの親フォルダーに保存することで、コミットしないように選択できることです。これにより、ローカルでのコンポーネントの管理が可能になります。
 - 複数のプロジェクトで同じ GitHubリポジトリを使用したい場合は、**dependencies.json** ファイルでそれを宣言し、**environment4d.json** ファイルで参照することができます。

### 優先順位

コンポーネントはさまざまな方法でインストールできるため、同じコンポーネントが複数の場所で参照される場合、優先順位が適用されます:

**優先度高**

1. [プロジェクトの **Components** フォルダー](architecture.md#components) に置かれているコンポーネント
2. dependencies.json\*\*ファイルで宣言されたコンポーネント (ローカル環境を構成するために **environment4d.json** で指定されたパスは **dependencies.json** のパスをオーバーライドします)。
3. 内部のユーザー4Dコンポーネント (4D NetKit、4D SVG など)

**優先度低**

```mermaid
flowchart TB
    id1("1<br/>Components from project's Components folder")
	~~~
    id2("2<br/>Components listed in dependencies.json")
	~~~
    id2 -- environment4d.json gives path --> id4("Load component based on path declared in environment4d.json")
    ~~~
    id3("3<br/>User 4D components")
    id2 -- environment4d.json doesn't give path --> id5("Load component next to package folder")
    ~~~
    id3("3<br/>User 4D components")
```

同じコンポーネントの別のインスタンス (A) がより高い優先度レベルにあるためにコンポーネント (B) を読み込めない場合、AとBのコンポーネントにはそれぞれ専用の [ステータス](#依存関係のステータス) が付与されます: 読み込まれなかったコンポーネント (B) には *Overloaded* ステータス、読み込まれたコンポーネント (A) には *Overloading* ステータスが与えられます。

### ローカルコンポーネント

ローカルコンポーネントは [**dependencies.json**ファイル](#dependenciesjson) にて次のように宣言します:

```json
{
    "dependencies": {
        "myComponent1" : {},
        "myComponent2" : {}
    }
}
```

... 上記の "myComponent1" と "myComponent2" は読み込むコンポーネントの名前です。

デフォルトの (つまり、"myComponent1" と "myComponent2" が [**environment4d.json**](#environment4djson) ファイルで宣言されていない) 場合、4D はコンポーネントのパッケージフォルダー (コンポーネントのプロジェクトルートフォルダーのこと) を 4Dプロジェクトのパッケージフォルダーと同じ階層に探します。例:

```
	/MyProjectRoot/
	/MyProjectComponentRoot/
```

このアーキテクチャーにより、プロジェクトと同じレベルにすべてのコンポーネントにコピーし、**dependencies.json** ファイルで参照することができます。

:::note

**dependencies.json** のアーキテクチャーを利用したくない場合は、[プロジェクトの **Components** フォルダー](architecture.md#components) にコンポーネントをコピーすることで、ローカルコンポーネントをインストールすることもできます。

:::

#### コンポーネントパスのカスタマイズ

ローカルコンポーネントの場所をカスタマイズしたい場合は、プロジェクトフォルダーと同じ階層に保存されていない依存関係のパスを、[**environment4d.json**](#environment4djson) ファイルに定義します。

**相対パス** または **絶対パス** を使用できます (下記参照)。

例:

```json
{
	"dependencies": {
		"myComponent1" : "MyComponent1",
		"myComponent2" : "../MyComponent2",
    "myComponent3" : "file:///Users/jean/MyComponent3"
    }
}
```

:::note

**environment4d.json** ファイルで定義されたコンポーネントのパスが、プロジェクトの開始時に見つからない場合、コンポーネントは読み込まれず、*Not found* [ステータス](#依存関係のステータス) が表示されます。

:::

#### 相対パス vs 絶対パス

パスは、POSIXシンタックスで表します ([POSIXシンタックス](../Concepts/paths#posix-シンタックス) 参照)。

相対パスは、[`environment4d.json`](#environment4djson) ファイルを基準とした相対パスです。 絶対パスは、ユーザーのマシンにリンクされています。

コンポーネントアーキテクチャーの柔軟性と移植性のため、ほとんどの場合、相対パスを使用することが **推奨** されます (特に、プロジェクトがソース管理ツールにホストされている場合)。

絶対パスは、1台のマシンと 1人のユーザーに特化したコンポーネントの場合にのみ使用すべきです。

### GitHub に保存されたコンポーネント

GitHubリリースとして利用可能な 4Dコンポーネントを参照して、4Dプロジェクトに自動で読み込んで更新することができます。

:::note

GitHub に保存されているコンポーネントに関しては、[**dependencies.json**](#dependenciesjson) ファイルと [**environment4d.json**](#environment4djson) ファイルの両方で同じ内容をサポートしています。

:::

#### GitHubリポジトリの設定

GitHub に保存された 4Dコンポーネントを直接参照して使用するには、GitHubコンポーネントのリポジトリを設定する必要があります。

 - ZIP形式でコンポーネントファイルを圧縮します。
 - GitHubリポジトリと同じ名前をこのアーカイブに付けます。
 - このリポジトリの [GitHubリリース](https://docs.github.com/ja/repositories/releasing-projects-on-github/managing-releases-in-a-repository) にアーカイブを統合します。

これらのステップは、4Dコードや GitHubアクションを使用することで簡単に自動化できます。

#### パスの宣言

GitHub に保存されているコンポーネントは [**dependencies.json**ファイル](#dependenciesjson) にて次のように宣言します:

```json
{
	"dependencies": {
		"myGitHubComponent1": {
			"github" : "JohnSmith/myGitHubComponent1"
		},
		"myGitHubComponent2": {}
	}
}
```

... 上記の場合、"myGitHubComponent1" は宣言とパス定義の両方がされていますが、"myComponent2" は宣言されているだけです。 **environment4d.json** ファイルは必須ではありません。 このファイルは、**dependencies.json** ファイル内で宣言された一部またはすべてのコンポーネントのついて、**カスタムパス** を定義するのに使用します。 このファイルは、プロジェクトパッケージフォルダーまたはその親フォルダーのいずれかに保存することができます (ルートまでの任意のレベル)。

```json
{
	"dependencies": {
		"myGitHubComponent2": {
			"github" : "JohnSmith/myGitHubComponent2"
		}
	}
}
```

"myGitHubComponent2" は複数のプロジェクトで使用できます。

#### タグとバージョン

GitHubでリリースが作成されると、そこに**タグ**と**バージョン**が関連づけられます。 依存関係マネージャーはこれらの情報を使用してコンポーネントの自動利用可能性を管理します。

:::note

[**4Dのバージョンに追随する**](#defining-a-github-dependency-version-range) 依存関係ルールを選択した場合、[タグには特定の命名規則](#4dバージョンタグの命名規則) を使用する必要があります。

:::

 - **タグ** はリリースを一意に参照するテキストです。 [**dependencies.json** ファイル](#dependenciesjson) および [**environment4d.json**](#environment4djson) ファイルでは、プロジェクトで使用するリリースタグを指定することができます。 たとえば:

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"tag": "beta2"
		}
	}
}
```

 - リリースは **バージョン** によっても識別されます。 使用されるバージョニングシステムは一般的に使用されている [*セマンティックバージョニング*](https://regex101.com/r/Ly7O1x/3/) コンセプトに基づいています。 各バージョン番号は次のように識別されます: `majorNumber.minorNumber.pathNumber`。 タグと同様に、プロジェクトで使用したいコンポーネントのバージョンを指定することができます。例:

```json
{
	"dependencies": {
		"myFirstGitHubComponent": {
			"github": "JohnSmith/myFirstGitHubComponent",
			"version": "2.1.3"
		}
	}
}
```

範囲は、最小値と最大値を示す 2つのセマンティックバージョンと演算子 ('`< | > | >= | <= | =`') で定義します。 `*` はすべてのバージョンのプレースホルダーとして使用できます。 ~ および ^ の接頭辞は、数字で始まるバージョンを定義し、それぞれ次のメジャーバージョンおよびマイナーバージョンまでの範囲を示します。

以下にいくつかの例を示します:

 - "`latest`": GitHubリリースで "latest" バッジを持つバージョン。
 - "`*`": リリースされている最新バージョン。
 - "`1.*`": メジャーバージョン 1 の全バージョン。
 - "`1.2.*`": マイナーバージョン 1.2 のすべてのパッチ。
 - "`>=1.2.3`": 1.2.3 を含む、以降の最新バージョン。
 - "`>1.2.3`": 1.2.3 を含まない、以降の最新バージョン。
 - "`^1.2.3`": バージョン 1.2.3 を含む、以降の最新のバージョン1 (バージョン2未満であること)。
 - "`~1.2.3`": バージョン 1.2.3 を含む、以降の最新のバージョン 1.2 (バージョン1.3未満であること)。
 - "`<=1.2.3`": 1.2.3 までの最新バージョン。
 - "`1.0.0 – 1.2.3`" または ">=1.0.0 <=1.2.3": 1.0.0 から 1.2.3 までのバージョン。
 - "`<1.2.3 ||>=2`": 1.2.3 から 2.0.0 未満までを除いたバージョン。

タグやバージョンを指定しない場合、4D は自動的に "latest" バージョンを取得します。

依存関係マネージャーはコンポーネントの更新がGitHub上で利用可能かどうかを定期的にチェックします。 コンポーネントに対して新しいバージョンが利用可能だった場合、[設定に応じて](#github依存関係バージョン範囲)依存関係一覧の中で更新マークが表示されます。

#### 4Dバージョンタグの命名規則

[**4Dのバージョンに追随する**](#github依存関係バージョン範囲) 依存関係ルールを使用したい場合、GitHub レポジトリ上でのコンポーネントのリリースのタグは、特定の命名規則に従う必要があります。

 - **LTS バージョン**: `x.y.p` パターン。ここでの`x.y` は追随したいメインの4D バージョンを表し、`p` (オプション) はパッチバージョンや他の追加のアップデートなどのために使用することができます。 プロジェクトが4D バージョンの *x.y* のLTS バージョンを追随すると指定した場合、依存関係マネージャーはそれを"x.\* の最新バージョン"(利用可能であれば)、あるいは"x 未満のバージョン"と解釈します。 もしそのようなバージョンが存在しない場合、その旨がユーザーに通知されます。 たとえば、 "20.4" という指定は依存関係マネージャーによって"バージョン 20.\* の最新コンポーネント、または20 未満のバージョン"として解決されます。

 - **R-リリースバージョン**: `xRy.p` パターン。ここでの`x` と `y` は追随したいメインの4D Rリリースを表し、`p` (オプション) はパッチバージョンや他の追加のアップデートなどのために使用することができます。 プロジェクトが4D バージョンの*xRy* バージョンを追随すると指定した場合、依存関係マネージャーはそれを"xR(y+1) 未満の最新バージョン"(利用可能であれば) と解釈します。 もしそのようなバージョンが存在しない場合、その旨がユーザーに通知されます。 たとえば、"20R9" という指定は依存関係マネージャーによって"20R10 未満の最新コンポーネントバージョン"として解決されます。

:::note

コンポーネントデベロッパーは、コンポーネントの[`info.plist`](../Extensions/develop-components.md#infoplist) ファイル内で最小限の4D バージョンを定義することができます。

:::

#### プライベートリポジトリ

プライベートリポジトリにあるコンポーネントを統合したい場合は、アクセストークンを使用して接続するよう 4D に指示する必要があります。

これには、GitHubアカウントで **リポジトリ** へのアクセス権を持つ **classic** トークンを作成します。

:::note

詳細については [GitHubトークンのインターフェース](https://github.com/settings/tokens) を参照ください。

:::

その後依存関係マネージャーに[接続トークンを提供する](#githubアクセストークンを提供する) 必要があります。

#### 依存関係のローカルキャッシュ

参照された GitHubコンポーネントはローカルのキャッシュフォルダーにダウンロードされ、その後環境に読み込まれます。 ローカルキャッシュフォルダーは以下の場所に保存されます:

 - macOs: `$HOME/Library/Caches/<app name>/Dependencies`
 - Windows: `C:\Users\<username>\AppData\Local\<app name>\Dependencies`

... 上記で `<app name>` は "4D"、"4D Server"、または "tool4D" となります。

### Automatic dependency resolution

When you add or update a component (whether [local](#local-components) or [from GitHub](#components-stored-on-github)), 4D automatically resolves and installs all dependencies required by that component. 構成には次の内容が含まれます:

 - **Primary dependencies**: Components you explicitly declare in your `dependencies.json` file
 - **Secondary dependencies**: Components required by primary dependencies or other secondary dependencies, which are automatically resolved and installed

The Dependency manager reads each component's own `dependencies.json` file and recursively installs all required dependencies, respecting version specifications whenever possible. This eliminates the need to manually identify and add nested dependencies one by one.

 - **Conflict resolution**: When multiple dependencies require [different versions](#) of the same component, the Dependency manager automatically attempts to resolve conflicts by finding a version that satisfies all overlapping version ranges. If a primary dependency conflicts with secondary dependencies, the primary dependency takes precedence.

:::note

`dependencies.json` files are ignored in components loaded from the [**Components** folder](architecture.md#components).

:::

### dependency-lock.json

プロジェクトの [`userPreferences` フォルダー](architecture.md#userpreferencesusername) に `dependency-lock.json` ファイルが作成されます。

このファイルは、依存関係・パス・url・読み込みエラー・その他の情報などをログに記録します。 これは、コンポーネントの読み込み管理やトラブルシューティングに役立ちます。

## プロジェクトの依存関係の監視

開かれているプロジェクトでは、**依存関係** パネルで依存関係の追加・削除・更新ができるほか、現在の読み込み状態に関する情報を取得することができます。

依存関係パネルを表示するには:

- 4D では、**デザイン/プロジェクト依存関係** メニューアイテムを選択します (開発環境)。<br/>
  ![dependency-menu](../assets/en/Project/dependency-menu.png)

- 4D Server では、**ウィンドウ/プロジェクト依存関係** メニュー項目を選択します。<br/>
  ![dependency-menu-server](../assets/en/Project/dependency-menu-server.png)

依存関係パネルが表示されます。 依存関係は ABC順にソートされます。

![dependency](../assets/en/Project/dependency.png)

依存関係パネルインターフェースを使用すると(シングルユーザー版4D と4D Serverにおいて)依存関係を管理することができます。

### 依存関係のフィルタリング

デフォルトでは、依存関係マネージャーによって識別されたすべての依存関係は、それらの [ステータス](#依存関係のステータス) に関係なくリストされます。 依存関係パネル上部のタブを選択することで、依存関係のステータスに応じてリストの表示をフィルタリングできます:

![dependency-tabs](../assets/en/Project/dependency-tabs.png)

 - **All**: All dependencies including both primary (declared) and secondary (automatically resolved) dependencies in a flat list view.
 - **Declared**: Primary dependencies that are explicitly declared in the `dependencies.json` file. This tab helps you distinguish between dependencies you've directly added and those that were [automatically resolved](#automatic-dependency-resolution).
 - **アクティブ**: プロジェクトに読み込まれ、使用できる依存関係。 実際にロードされた *Overloading* な依存関係が含まれます。 *Overloaded* である方の依存関係は、その他の競合している依存関係とともに **コンフリクト** パネルに表示されます。
 - **非アクティブ**: プロジェクトに読み込まれておらず、利用できない依存関係。 このステータスには様々な理由が考えられます: ファイルの欠落、バージョンの非互換性など…
 - **Conflicts**: Dependencies that are loaded but that overloads at least one other dependency at a lower [priority level](#priority). *Overloaded* な依存関係も表示されるため、競合の原因を確認し、適切に対処することができます。

### Secondary dependencies

The Dependencies panel displays [**secondary dependencies**](#automatic-dependency-resolution) with the `Component dependency` [origin](#dependency-origin):

![recursive-dependency](../assets/en/Project/recursive.png)

When you hover over a secondary dependency, a tooltip displays the parent dependency that requires it. A secondary dependency cannot be [removed](#removing-a-dependency) directly, you must remove or edit the primary dependency that requires it.

### 依存関係のステータス

デベロッパーの注意を必要とする依存関係は、行の右側の **ステータスラベル** と背景色で示されます。

![dependency-status](../assets/en/Project/dependency-conflict2.png)

使用されるステータスラベルは次のとおりです:

 - **Overloaded**: 依存関係は読み込まれていません。より上位の [優先順位](#優先順位) において、同じ名前の依存関係がすでに読み込まれています。
 - **Overloading**: 依存関係は読み込まれていますが、下位の [優先順位](#優先順位) において読み込まれなかった同じ名前の依存関係が存在します。
 - **Not found**: dependencies.jsonファイルで依存関係が宣言されていますが、見つかりません。
 - **Inactive**: プロジェクトと互換性がないため、依存関係は読み込まれていません (例: 現在のプラットフォーム用にコンポーネントがコンパイルされていない、など)。
 - **Duplicated**: 依存関係は読み込まれていません。同じ名前を持つ別の依存関係が同じ場所に存在し、すでに読み込まれています。
 - **Available after restart**: [インターフェースによって](#プロジェクトの依存関係の監視) 依存関係の参照が追加・更新されました。この依存関係は、アプリケーションの再起動後に読み込まれます。
 - **Unloaded after restart**: [インターフェースによって](#プロジェクトの依存関係の監視) 依存関係の参照が削除されました。この依存関係は、アプリケーションの再起動時にアンロードされます。
 - **Update available \<version\>**: A new version of the GitHub dependency matching your [component version configuration](#defining-a-github-dependency-version-range) has been detected.
 - **Refreshed after restart**: The [component version configuration](#defining-a-github-dependency-version-range) of the GitHub dependency has been modified, it will be adjusted the next startup.
 - **Recent update**: A new version of the GitHub dependency has been loaded at startup.

依存関係の行にマウスオーバーするとツールチップが表示され、ステータスに関する追加の情報を提供します:

![dependency-tips](../assets/en/Project/dependency-tip1.png)

### 依存関係のオリジン

依存関係パネルには、各依存関係のオリジン (由来) にかかわらず、プロジェクトの依存関係すべてがリストされます。 依存関係のオリジンは、名前の下に表示されるタグによって判断することができます:

![dependency-origin](../assets/en/Project/dependency-origin.png)

以下のオリジンがありえます:

| オリジンタグ                  | 説明                                                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Built in 4D             | 4Dアプリケーションの `Components` フォルダーに保存されているビルトインの 4Dコンポーネント                                                                                       |
| Declared in project     | [`dependencies.json`](#dependenciesjson) ファイルで宣言されているコンポーネント                                                                                 |
| Declared in environment | Component declared in the [`dependencies.json`](#dependenciesjson) file and overriden in the [`environment4d.json`](#environment4djson) file |
| Components フォルダー        | [`Components`](architecture.md#components) フォルダー内に置かれているコンポーネント                                                                              |
| Component dependency    | Secondary component ([required by a another component](#automatic-dependency-resolution))                                 |

依存関係の行で **右クリック** し、**ディスク上に表示** を選択すると、依存関係の保管場所が表示されます:

![dependency-show](../assets/en/Project/dependency-show.png)

:::note

依存関係が非アクティブの場合は、ファイルが見つからないためこの項目は表示されません。

:::

コンポーネントアイコンとロケーションロゴが追加情報を提供します:

 - コンポーネントロゴは、それが 4D またはサードパーティーによる提供かを示します。
 - ローカルコンポーネントと GitHubコンポーネントは、小さなアイコンで区別できます。

![dependency-origin](../assets/en/Project/dependency-github.png)

### ローカルな依存関係の追加

ローカルな依存関係を追加するには、パネルのフッターエリアにある **+** ボタンをクリックします。 次のようなダイアログボックスが表示されます:

![dependency-add](../assets/en/Project/dependency-add.png)

**ローカル** タブが選択されていることを確認し、**...** ボタンをクリックします。 標準の "ファイルを開く" ダイアログボックスが表示され、追加するコンポーネントを選択できます。 [**.4DZ**](../Desktop/building.md#コンポーネントをビルド) または [**.4DProject**](architecture.md#applicationname4dproject-ファイル) ファイルを選択できます。

選択した項目が有効であれば、その名前と場所がダイアログボックスに表示されます。

![dependency-selected](../assets/en/Project/local-selected.png)

選択された項目が有効でない場合は、エラーメッセージが表示されます。

プロジェクトに依存関係を追加するには、**追加** をクリックします。

 - プロジェクトパッケージフォルダーの隣 (デフォルトの場所) にあるコンポーネントを選択すると、[**dependencies.json**](#dependenciesjson)ファイル内で宣言されます。
 - プロジェクトのパッケージフォルダーの隣にないコンポーネントを選択した場合、そのコンポーネントは [**dependencies.json**](#dependenciesjson) ファイルで宣言され、そのパスも [**environment4d.json**](#environment4djson) ファイルで宣言されます (注記参照)。 依存関係パネルでは、[相対パスまたは絶対パス](#相対パス-vs-絶対パス) のどちらを保存するか尋ねられます。

:::note

この段階で [**environment4d.json**](#environment4djson) ファイルがまだプロジェクトに定義されていない場合、プロジェクトのパッケージフォルダー内 (デフォルトの場所) に自動的に作成されます。

:::

この依存関係は、[非アクティブな依存関係のリスト](#依存関係のステータス) に **Available after restart** (再起動後に利用可能) というステータスで追加されます。 このコンポーネントはアプリケーションの再起動後にロードされます。

### GitHubの依存関係の追加

[GitHubの依存関係](#github-に保存されたコンポーネント) を追加するには、パネルのフッターエリアにある **+** ボタンをクリックし、**GitHub** タブを選択します。

![dependency-add-git](../assets/en/Project/dependency-add-git.png)

依存関係の GitHubリポジトリのパスを入力します。 **リポジトリURL** または **GitHubアカウント名/リポジトリ名 の文字列** が使えます。例:

![dependency-add-git-2](../assets/en/Project/dependency-add-git-2.png)

接続が確立されると、入力エリアの右側に GitHubアイコン ![dependency-gitlogo](../assets/en/Project/dependency-gitlogo.png) が表示されます。 このアイコンをクリックすると、既定のブラウザーでリポジトリを開くことができます。

:::note

もしコンポーネントが [GitHub のプライベートリポジトリ](#プライベートリポジトリ) に保存されていて、必要なパーソナルアクセストークン (personal access token) がない場合はエラーメッセージが表示され、**パーソナルアクセストークンを追加...** ボタンが表示されます ([GitHubアクセストークンの提供](#githubアクセストークンの提供) 参照)。

:::

Define the [dependency version range](#tags-and-versions) to use for this project. By defaut, "Latest" is selected, which means that the lastest version will be automatically used.

プロジェクトに依存関係を追加するには、**追加** ボタンをクリックします。

The GitHub dependency is declared in the [**dependencies.json**](#dependenciesjson) file and added to the [inactive dependency list](#dependency-status) with the **Available at restart** status. このコンポーネントはアプリケーションの再起動後にロードされます。

#### Defining a GitHub dependency version range

依存関係の [タグとバージョン](#タグとバージョン) オプションを定義することができます:

![dependency-git-tag](../assets/en/Project/dependency-git-tag.png)

 - **自動更新する(latest)**: デフォルトで選択され、最新の(安定)バージョンとしてタグ付けされたリリースをダウンロードできるようにします。
 - **メジャー更新の手前まで**: [セマンティックバージョニングの範囲](#タグとバージョン)を定義して、更新を次のメジャーバージョンの手前までに制限します。
 - **マイナー更新の手前まで**: 上と同様に、更新を次のマイナーバージョンの手前までに制限します。
 - **自動更新しない(タグ指定)**: 利用可能なリストから [特定のタグ](#セマンティックバージョン範囲]) を選択するか、手動で入力します。
 - **4Dのバージョンに追随する**: 実行中の4D バージョンと互換性のある最新のコンポーネントリリースをダウンロードします。 この依存関係ルールは、コンポーネントのリリースタグが適切な[命名規則](#4dバージョンタグの命名規則) に従っていた場合にのみ使用できます。

The current GitHub dependency version is displayed on the right side of the dependency item:

![dependency-origin](../assets/en/Project/dependency-version.png)

#### Modifying the GitHub dependency version range

You can modify the [version setting](#defining-a-github-dependency-version-range) for a listed GitHub dependency: select the dependency to modify and select **Modify the dependency...** from the contextual menu. In the "Modify the dependency" dialog box, edit the Dependency Rule menu and click **Apply**.

Modifying the version range is useful for example if you use the automatic update feature and want to lock a dependency to a specific version number.

### Updating GitHub dependencies

The Dependency manager provides an integrated handling of updates on GitHub. The following features are supported:

 - Automatic and manual checking of available versions
 - Automatic and manual updating of components

Manual operations can be done **per dependency** or **for all dependencies**.

#### 新バージョンをチェック

Dependencies are regularly checked for updates on GitHub. This checking is done transparently in background.

:::note

If you provide an [access token](#providing-your-github-access-token), checks are performed more frequently, as GitHub then allows a higher frequency of requests to repositories.

:::

In addition, you can check for updates at any moment, for a single dependency or for all dependencies:

 - To check for updates of a single dependency, right-click on the dependency and select **Check for updates** in the contextual menu.

![check component](../assets/en/Project/check-component-one.png)

 - To check for updates of all dependencies, click on the **options** menu at the bottom of the Dependency manager window and select **Check for updates**.

![check components](../assets/en/Project/check-component-all.png)

If a new component version matching your [component versioning configuration](#defining-a-github-dependency-version-range) is detected on GitHub, a specific dependency status is displayed:

![dependency-new-version](../assets/en/Project/dependency-available.png)

You can decide to [update the component](#updating-dependencies) or not.

If you do not want to use a component update (for example you want to stay with a specific version), just let the current status (make sure the [**Automatic update**](#automatic-update) feature is not checked).

#### 依存関係の更新

**Updating a dependency** means downloading a new version of the dependency from GitHub and keeping it ready to be loaded the next time the project is started.

You can update dependencies at any moment, for a single dependency or for all dependencies:

 - To update a single dependency, right-click on the dependency and select **Update \<component name\> on next startup** in the contextual menu or in the **options** menu at the bottom of the Dependency manager window:

![check component](../assets/en/Project/update-component-one.png)

 - To update all dependencies at once, click on the **options** menu at the bottom of the Dependency manager window and select **Update all remote dependencies on next startup**:

![check components](../assets/en/Project/update-component-all.png)

In any cases, whatever the current dependency status, an automatic checking is done on GitHub before updating the dependency, to make sure the most recent version is retrieved, [according to your component versioning configuration](#defining-a-github-dependency-version-range).

When you select an update command:

 - a dialog box is displayed and proposes to **restart the project**, so that the updated dependencies are immediately available. It is usually recommended to restart the project to evaluate updated dependencies.
 - if you click Later, the update command is no longer available in the menu, meaning the action has been planned for the next startup.

#### Automatic update

The **Automatic update** option is available in the **options** menu at the bottom of the Dependency manager window.

When this option is checked (default), new GitHub component versions matching your [component versioning configuration](#defining-a-github-dependency-version-range) are automatically updated for the next project startup. This option facilitates the day-to-day management of dependency updates, by eliminating the need to manually select updates.

When this option is unchecked, a new component version matching your [component versioning configuration](#defining-a-github-dependency-version-range) is only indicated as available and will require a [manual updating](#updating-dependencies). Unselect the **Automatic update** option if you want to monitor dependency updates precisely.

### GitHubアクセストークンの提供

Registering your personal access token in the Dependency manager is:

 - mandatory if the component is stored on a [private GitHub repository](#private-repositories),
 - recommended for a more frequent [checking of dependency updates](#updating-github-dependencies).

To provide your GitHub access token, you can either:

 - "依存関係を追加..." ダイアログボックスで、GitHub のプライベートリポジトリパスを入力した後に表示される \*\*パーソナルアクセストークンを追加... \*\* ボタンをクリックします。
 - または、依存関係マネージャーのメニューで、**GitHubパーソナルアクセストークンを追加...** をいつでも選択できます。

![dependency-add-token](../assets/en/Project/dependency-add-token.png)

すると、パーソナルアクセストークンを入力することができます:

![dependency-add-token-2](../assets/en/Project/dependency-add-token-2.png)

パーソナルアクセストークンは 1つしか入力できません。 入力されたトークンは編集することができます。

The provided token is stored in a **github.json** file in the [active 4D folder](../commands-legacy/get-4d-folder.md#active-4d-folder).

### 依存関係の削除

依存関係パネルから依存関係を削除するには、対象の依存関係を選択し、パネルの **-** ボタンをクリックするか、コンテキストメニューから **依存関係の削除...** を選択します。 依存関係は複数選択することができ、その場合、操作は選択したすべての依存関係に適用されます。

:::note

Only primary dependencies declared in the [**dependencies.json**](#dependenciesjson) file can be removed using the Dependencies panel. Secondary dependencies cannot be removed directly - to remove a secondary dependency, you must remove the primary dependency that requires it. 選択した依存関係を削除できない場合、**-** ボタンは無効化され、**依存関係の削除...** メニュー項目は非表示になります。

:::

確認用のダイアログボックスが表示されます。 依存関係が **environment4d.json** ファイルで宣言されている場合、以下のオプションでそれを削除することができます:

![dependency-remove](../assets/en/Project/remove-comp.png)

ダイアログボックスを確定すると、削除された依存関係の [ステータス](#依存関係のステータス) には "Unloaded after restart" (再起動時にアンロード) フラグが自動的に付きます。 このコンポーネントはアプリケーションの再起動時にアンロードされます。

#### Dependency usage warnings

When you attempt to remove a primary dependency that is required by other dependencies in your project, you will be warned that the dependency is still in use. The system will display which other dependencies require it and prompt you to confirm the removal, as removing it may cause those dependent components to stop working properly.


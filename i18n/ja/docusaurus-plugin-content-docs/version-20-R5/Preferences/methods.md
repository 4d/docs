---
id: methods
title: メソッドページ
---

このページでは、コードエディターのインターフェースやデフォルトの表示、および動作に関するオプションを設定します。 ページはテーマとオプションという 2つのタブに分けられています。

## テーマ

このページでは、コードエディターのテーマを選択・作成・設定することができます。 テーマは、コードエディターに表示される項目のフォント、フォントサイズ、カラー、スタイルを定義します。

![](../assets/en/Preferences/themes.png)

### テーマリスト

このリストでは、コードエディターに適用するテーマを選択します。 利用可能なテーマがすべて表示され、カスタムテーマがある場合はそれも表示されます。 4D はデフォルトで 2つのテーマを用意しています:

- **デフォルトのLightテーマ**
- **デフォルトのDarkテーマ**

> デフォルトのテーマは変更や削除ができません。

A **myTheme** theme is automatically added if you already customized Code Editor styles in previous 4D releases.

### カスタムテーマの作成

完全にカスタマイズ可能なテーマを作成することができます。 To create a theme, select an existing theme and click on the **+** at the bottom of the theme list. You can also add customized themes by copying theme files in the `4D Editor Themes` folder (see below).

### カスタムテーマファイル

Each custom theme is stored in a single JSON file named _themeName.json_ The JSON files for custom themes are stored in the `4D Editor Themes` folder located at the same level as the 4D [preferences file](overview.md#storage).

If key values are not defined in a custom theme, they default to the values from the _Default Light Theme_. If a JSON theme file is invalid, the _Default Light Theme_ is loaded and an error is generated.

> 外部エディターでテーマファイルを変更した場合は、変更内容を反映させるために 4Dを再起動する必要があります。

## テーマの定義

テーマを定義するとは、以下のことを意味します:

- コードエディター全体のグローバルフォントとフォントサイズを設定する。
- 4D のランゲージ要素 (フィールド、テーブル、変数、引数、SQL など)、SQL のランゲージ要素 (キーワード、関数など)、そして背景色のそれぞれにスタイルと色を割り当てる。

異なる色やスタイルを組み合わせることは、コードのメンテナンス目的に特に便利です。

### フォントとフォントサイズ

The **font** and **font size** menus allows you to select the font name and size used in the Code Editor entry area for all categories.

### 4D ランゲージと SQL ランゲージ

ランゲージ要素の種類ごとに、異なるフォントスタイルやカラー (フォントカラーや背景色) を設定できます。 カスタマイズする要素は、カテゴリーリストで選択できます。

### その他のスタイル

これらのオプションは、コードエディターとデバッガーインターフェースで使用される様々なカラーを設定します。

![](../assets/en/Preferences/categories.png)

|                      | 説明                                                                                                                                                                                       |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **背景色**              | コードエディターウィンドウの背景色。                                                                                                                                                                       |
| **デバッガ内の実行行の境界線**    | Color of the border surrounding the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options) page.          |
| **カーソル行背景色**         | カーソルのある行の背景色。                                                                                                                                                                            |
| **実行行背景色**           | デバッガーで実行中の行の背景色。                                                                                                                                                                         |
| **検索で見つかった単語のハイライト** | 検索して見つかった単語のハイライト色。                                                                                                                                                                      |
| **カッコのハイライト**        | Highlight color of corresponding parentheses (used when pairs of parentheses are signaled by highlighting, see [Options](#options)).                  |
| **ブロックのハイライト**       | Highlight color for selected logical blocks when the "Highlight logical blocks" option is enabled in the [Options](#options).                                            |
| **同じ変数やフィールドのハイライト** | Highlight color for other occurrences of the same variable or field text when one of the "Highlighting variables and text" option is enabled in the [Options](#options). |
| **デバッガ内の実行行のハイライト**  | Highlight color of the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options).                            |
| **選択範囲の背景色**         | 選択範囲の背景色。                                                                                                                                                                                |
| **サジェストテキスト**        | コードエディターで表示されるオートコンプリートテキストの色。                                                                                                                                                           |

## オプション

このページでは、コードエディターの表示オプションを設定します。

![](../assets/en/Preferences/options.png)

### オプション

#### 4Dプログラミングランゲージ (リージョンシステム設定を使う)

ローカル4Dアプリケーション用の "国際的な" コード設定を有効化/無効化することができます。

- **unchecked** (default): English-US settings and the English programming language are used in 4D methods.
- **checked**: Regional settings are used in 4D methods.

> このオプションを変更した場合、変更を反映するには 4Dアプリケーションを再起動する必要があります。

#### インデント

コードエディターで、4Dコードが使用するインデントの値を設定します。 値はポイントで設定します (デフォルトは 10)。

4D は構造を明確にするために自動でコードをインデントします:

![](../assets/en/Preferences/optionsIndent.png)

アルゴリズムが複雑になり、階層レベル数が増えた場合に、この値を変更すると便利な場合があります。 具体的には、この値を減らすことで水平スクロールを減らすことができます。

#### 行番号を表示

コードエディターで、行番号をデフォルト表示するかどうかを設定します。 コードエディターにて、直接の行番号を表示/非表示設定することもできます。

#### リスト表示

Lets you choose whether or not to show the lists of objects (Commands, Tables and fields, etc.) by default when the Code Editor window is opened. コードエディターで直接このリストを表示/非表示にすることもできます。

#### クリップボード表示

コードエディターに複数のクリップボードを表示するかどうかを選択できます。

![](../assets/en/Preferences/show-clipboards.png)

The corresponding [clipboard shorcuts](https://doc.4d.com/4Dv19R3/4D/19-R3/Writing-a-method.300-5612559.en.html#3977166) are still active when these clipboards are hidden.

#### 論理ブロックを強調

チェックされている場合、展開されたノードの上にマウスを置いたときに論理ブロック(たとえば If/End if など) に含まれているコードがすべてハイライトされます:

![](../assets/en/Preferences/optionsLogicalBlocks.png)

The highlight color can be set in the [Theme](#theme-definition) page.

#### ブロック行を常に表示

垂直のブロック線を常に非表示にできます。 ブロック線はノードを視覚的に繋ぐためのものです。 デフォルトでは、これらは常に表示されています (ただし展開/折りたたみアイコンが非表示の場合は除きます。以下参照)。

![](../assets/en/Preferences/optionsBlockLines.png)

#### 折りたたみ/展開アイコンを隠す

コードを表示する際に、展開/折りたたみアイコンをデフォルトで非表示にすることができます。 このオプションがチェックされているとき、ノードアイコン (とブロック線。前述参照)は、マウスがノードの上に置かれた際にのみ一時的に表示されます:

![](../assets/en/Preferences/optionsHideIcons.png)

#### () と対応する閉じる } ) ] " を自動で挿入

コード入力中に () と、閉じるカッコを自動的に挿入するようにします。 このオプションでは 2つの自動機能を管理します:

- **parentheses pair ()**: Added after a 4D command, keyword or project method inserted from a suggestion or completion list, if the inserted element requires one or more mandatory arguments. たとえば、"C_OB" と入力して Tabキーを押すと、4D は自動的に "C_OBJECT()" と表示し、カーソルを () の内部に設定します。

- **closing }, ), ], or "**: Character added when you type respectively an opening {, (, ], or ". この機能により、カーソル位置に、あるいは選択されたテキストを囲むように、対応するカッコ記号を挿入できるようになります。 たとえば、文字列をハイライトして単一の " を入力すると、選択された文字列全体が "" で囲まれます:

![](../assets/en/Preferences/optionsClosing.png)\
![](../assets/en/Preferences/optionsClosing2.png)

#### 括弧のマッチング

コード中での対応する括弧を強調する方法を設定します。 この強調は、括弧 (大カッコ[]、中カッコ{}、小カッコ()) が選択されたときに表示されます。
次のオプションから選択することができます:

- **None**: No signaling
- **Rectangle** (default): Braces surrounded by a black line\
  ![](../assets/en/Preferences/optionsRectangle.png)
- **Background Color**: Braces highlighted (the color is set in the [Theme](#theme-definition) page).
- **Bold**: Braces displayed in bold.

#### 変数とフィールドを強調

開かれたメソッドウィンドウ内で、同じ変数やフィールド等のオカレンスをすべてハイライトします。

![](../assets/en/Preferences/optionsVariables.png)

- **No**(default): No highlight
- **On cursor**: All occurrences are highlighted when the text is clicked
- **On selection**: All occurrences are highlighted when the text is selected

The highlight color can be set in the [Theme](#theme-definition) page.

#### デバッグ (実行行をハイライト)

通常の黄色の矢印インジケーターに加え、デバッガーで実行中の行をハイライトするかどうかを設定します。

![](../assets/en/Preferences/optionsLine.png)

このオプションの選択を解除すると、黄色の矢印のみが表示されます。

### 提案

このエリアでは、コードエディターの自動補完メカニズムを設定して、作業習慣に合わせることができます。

|             | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ウィンドウを自動で開く | Triggers the automatic display of the suggestion window for:<ul><li>Constants</li><li>Variables (local and interprocess) and object attributes</li><li>Tables</li><li>Prototypes (_i.e._, class functions)</li></ul><p>For example, when the "Variables (local or interprocess) and object attributes" option is checked, a list of suggestions appears when you type the $ character:</p><p>![](../assets/en/Preferences/suggestionsAutoOpen.png)</p> You can disable this functioning for certain elements of the language by deselecting their corresponding option.                                                                                                                                                                                                                                                                                                                                |
| 提案の決定       | Sets the entry context that allows the Code Editor to validate automatically the current suggestion displayed in the autocomplete window.<ul><li>**Tab and delimiters**<br/>When this option is selected, you can validate the current selection with the Tab key or any delimiter that is relevant to the context. たとえば "ALE" と入力して "(" を入力すると、4Dは自動で "ALERT(" とエディターに書き込みます。 Here is the list of delimiters that are taken into account:<br/> ( ; : = < [ {</li><li>**Tab only**<br/>When this option is selected, you can only use the Tab key to insert the current suggestion. This can be used more particularly to facilitate the entry of delimiter characters in element names, such as ${1}.**Note**: You can also double-click in the window or press the Carriage return key to validate a suggestion.</li></ul> |

---
id: stylesheets
title: スタイルシート
---

## 概要

スタイルシートとは、フォームオブジェクトの属性 (テキスト属性など、提供されているほぼすべての属性) の組み合わせをまとめたものです。

アプリケーションのインターフェースを統一するほかにも、スタイルシートの利用には3つの利点があります:

*   開発時間の削減: オブジェクトのさまざまな属性を一括で設定できます。
*   メンテナンスの容易化: スタイルシートは、それが使用されているすべてのオブジェクトの外観を一括で設定します。つまり、スタイルシートのフォントサイズを変更するだけで、その変更は同じスタイルシートを使用するすべてのオブジェクトに適用されます。
*   マルチプラットフォーム開発のコントロール: macOS と Windows 両用のほか、macOS 専用、Windows 専用のスタイルシートを作成することができます。 スタイルシートが設定されていると、4Dは自動で適切なスタイルシートを使用します。

### スタイルシートファイル

4D は次の3種のスタイルシートファイルを受け付けます:

| スタイルシート                 | プラットフォーム                             |
| ----------------------- | ------------------------------------ |
| styleSheets.css         | macOS と Windows 両用のデフォルトグローバルスタイルシート |
| styleSheets_mac.css     | macOS 専用の属性スタイル定義用                   |
| styleSheets_windows.css | Windows 専用の属性スタイル定義用                 |

これらのファイルはプロジェクトの "/SOURCES" フォルダーに格納されます。


### スタイルシートアーキテクチャー

4D フォームに適合するよう調整してあるものの、プロジェクトデータベースのスタイルシートは基本的に CSS2 のシンタックスと文法に沿っています。

スタイルシートのスタイル規則は二つの部分から構成されています:

*   a *Selector* - A selector defines where to apply the style. 4D では "オブジェクトタイプ", "オブジェクト名", "クラス", "すべてのオブジェクト", および "属性値" のセレクターが使えます。

*   a *Declaration* - The declaration defines the actual style to apply. 複数のまとまった宣言文は宣言ブロックを構成します。 CSS 宣言ブロック内の各文はセミコロン ";" で区切り、ブロック全体は中カッコ { } でくくります。



## スタイルシートセレクター


### オブジェクトタイプ

CSS の **要素セレクター**と同様に、スタイルの適用対象をオブジェクトタイプで指定することができます。

まずオブジェクトタイプを指定した後で、中カッコ { } の中に適用するスタイルを宣言します。

> オブジェクトタイプとは、フォームオブジェクトの "[タイプ](FormObjects/properties_Object.md#タイプ)" JSON プロパティを指します。

In the following example, all objects of the *button* type will display text in the Helvetica Neue font, with a size of 20 pixels:

```
button {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```

複数のオブジェクトタイプに同じスタイルを適用するには、それらのオブジェクトタイプをカンマ "," 区切りで併記し、その後の中カッコ { } 内にスタイルを宣言します:

```
text, input {
  text-align: left;
  stroke: grey;
}
```

### オブジェクト名

Corresponding to the CSS **ID selector**, the object name defines a specific object to style since the object's name is unique within the form.

シャープ記号 "#" の後にオブジェクト名を指定し、中カッコ { } の中に適用するスタイルを宣言します。

次の例では、"okButton" というオブジェクト名を持つすべてのオブジェクトについて、表示するフォントを Helvetica Neue に、フォントサイズを 20 ピクセルに指定します:

```
#okButton {
    font-family: Helvetica Neue;
    font-size: 20px;
}
```



### クラス

Corresponding to the CSS **class selector**, the class defines the style for all form objects with the `class` attribute.

ドット記号 "." の後にクラス名を指定し、中カッコ { } の中に適用するスタイルを宣言します。

次の例では、`okButtons` クラスを持つすべてのオブジェクトについて、表示するフォントを Helvetica Neue に、フォントサイズを 20 ピクセルに指定します:

```
.okButtons {
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align: center;
}
```

さらに、特定のオブジェクトタイプに限定してスタイルを適用するには、そのオブジェクトタイプの後にドット "." 区切りでクラス名を指定し、その後の中カッコ { } 内にスタイルを宣言します:

```
text.center {
  text-align: center;
  stroke: red;
}
```

4D フォームの JSON式記述においては、フォームオブジェクトにクラス名を設定するには `class` 属性を使います。 この属性には一つ以上のクラス名を指定することができます。複数の場合はクラス名を半角スペースで区切ります:

```
class: "okButtons important"             
```


### すべてのオブジェクト

Corresponding to the CSS **universal selector**, the "*" character indicates that the following style will be applied to all objects on the form.

アスタリスク "*" の後に、中カッコ { } の中に適用するスタイルを宣言します。

次の例では、すべてのオブジェクトの塗りカラーをグレーにします:

```
* {
  fill: gray;
}
```


### オブジェクト属性

Corresponding to the CSS **attribute selectors**, styles can be applied to all form objects with a specific attribute.

対象とする属性を大カッコ [ ] 内で指定し、中カッコ { } の中に適用するスタイルを宣言します。

#### シンタックスの使い方

| シンタックス                    | 説明                                                                    |
| ------------------------- | --------------------------------------------------------------------- |
| [attribute]               | `attribute` 属性を持つオブジェクトが対象です                                          |
| [attribute="value"]       | `attribute` 属性の値が "value" と合致するオブジェクトが対象です                            |
| [attribute~="value"]      | `attribute` 属性値 (複数の場合は半角スペース区切り) に "value" と合致するものが含まれているオブジェクトが対象です |
| [attribute&#124;="value"] | `attribute` 属性の値が "value" で始まるオブジェクトが対象です                             |

#### 例題

`borderStyle` (境界線スタイル) 属性を持つすべてのオブジェクトの描画色を紫に指定します:

```
[borderStyle]
{
     stroke: purple;
}
```

テキストタイプかつ、タイトルプロパティ (text属性) の値が "Hello" のオブジェクトの文字色を青に指定します:


```
text[text=Hello]
{
     stroke: blue;
}
```

タイトルプロパティ (text属性) の値が "Hello" を含むオブジェクトの描画色を青に指定します:

```
[text~=Hello]
{
     stroke: blue;
}

```

テキストタイプかつ、タイトルプロパティ (text属性) の値が "Hello" で始まるオブジェクトの文字色を黄色に指定します:

```
text[text|=Hello]
{
     stroke: yellow;
}
```


## スタイルシート宣言

多くのフォームオブジェクト属性をスタイルシートによって指定することができますが、次の属性は除外されます:
    - "method"
    - "type"
    - "class"
    - "event"
    - choiceList, excludedList, labels, list, requiredList (リストタイプ)

フォームオブジェクトの属性は、それらの JSON 名を使って CSS 属性のように指定できます (オブジェクトタイプやメソッド、イベント、リストなどの属性を除く)。 For more information, see the **Dynamic Forms** page in the Design Reference.

### 属性マッピング

次の属性については、4D の名称または CSS の名称を使用することができます:

| 4D             | CSS              |
| -------------- | ---------------- |
| borderStyle    | border-style     |
| fill           | background-color |
| fontFamily     | font-family      |
| fontSize       | font-size        |
| fontStyle      | font-style       |
| fontWeight     | font-weight      |
| stroke         | color            |
| textAlign      | text-align       |
| textDecoration | text-decoration  |
| verticalAlign  | vertical-align   |
> 4D-specific values (*e.g.*, "sunken") are not supported when using CSS attribute names.


### 特殊な属性値

- `icon`, `picture`, および `customBackgroundPicture` のように、値として画像のパスを受け付ける属性の場合、次のように書きます:

```
icon: url("/RESOURCES/Images/Buttons/edit.png"); /* 絶対パス */
icon: url("edit.png"); /* フォームファイルを基準とした相対パス */
```

- `fill`, `stroke` , `alternateFill` , `horizontalLineStroke` および `verticalLineStroke` の属性は 3種類のシンタックスを受け付けます:

    - css カラーネーム: `fill: red;`
    - 16進数カラーコード: `fill: #FF0000;`
    - `rgb()` 関数: `fill:rgb(255,0,0)`

- CSS では禁じられている文字を使用している文字列については、その文字列を単一引用符または二重引用符でくくることができます。 たとえば:
    - xliff 参照の場合: `tooltip: ":xliff:CommonMenuFile";`
    - データソースがフィールド式の場合: `dataSource: "[Table_1:1]ID:1";`


## 優先順位

4D プロジェクト内でスタイルが競合する場合には、スタイルシートよりもフォームの定義が優先されます。


### JSON vs スタイルシート

フォームの JSON式記述とスタイルシートの両方において属性が定義されている場合、4D は JSON ファイルの値を採用します。

これをオーバーライドするには、スタイルシートの値の後に `!important` 宣言を追加します。

**例 1:**

| JSON 式記述            | スタイルシート       | 4D の表示     |
| ------------------- | ------------- | ---------- |
| `"text": "Button",` | `text: Edit;` | `"Button"` |


**例 2:**

| JSON 式記述            | スタイルシート                  | 4D の表示   |
| ------------------- | ------------------------ | -------- |
| `"text": "Button",` | `text: Edit !important;` | `"Edit"` |



### 複数スタイルシート

ランタイムにおいて複数のスタイルシートが存在する場合、それらの優先順位は次のように決まります:

1.  4D フォームはまずデフォルトの CSS ファイル `/SOURCES/styleSheets.css` を読み込みます。
2.  次に、カレントプラットフォーム専用の CSS ファイル `/SOURCES/styleSheets_mac.css` または `/SOURCES/styleSheets_windows.css` がロードされます。
3.  その後、JSON フォーム内に CSS ファイルが定義されていれば、それを読み込みます:

    *   両プラットフォーム用のファイル:

    ```
    "css": "<path>"
    ```

    *   または、両プラットフォーム用に複数のファイル:

    ```
    "css": [
         "<path1>",
         "<path2>"
          ],
    ```

    *   または、プラットフォームごとのファイルリスト:

    ```
     "css": [
            {"path": "<path>", "media": "mac"},
            {"path": "<path>", "media": "windows"},
        ],
    ```

> ファイルパスは相対パスと絶対パスが使えます。 *  相対パスの基準は JSON フォームファイルです。 *  セキュリティのため、絶対パスとして使用できるのはファイルシステムパスに限られます。 (*e.g.*, "/RESOURCES", "/DATA")








## スタイルシートの作成と編集

スタイルシートを作成するには、任意のテキストエディターを使い、".css" 拡張子をファイル名に追加し、プロジェクトの "/SOURCES" フォルダーに保存します。

The 4D Tool Box provides a **Style Sheets** page as a shortcut option to create and edit one of three platform-specific named style sheets.

1.  Open the **Style Sheets** page by choosing the **Tool Box > Style Sheet** from the Design menu or click on the **Tool Box** icon in the Form Editor toolbar.

    ![](assets/en/FormEditor/stylesheets.png)

2.  Select the type of style sheet to create and click on the **Create** or **Edit** button: ![](assets/en/FormEditor/createButton.png)

3. 既定のテキストエディターでスタイルシートが開かれます。  

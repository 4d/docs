---
id: templates
title: テンプレートページ
---

4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of [transformation tags](../Tags/transformation-tags.md) such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

これらのページが HTTPサーバーから送信される際、ページは解析され、含まれているタグが実行され、結果のデータに置き換えられます。 このように、ブラウザーが受け取るページは、静的な要素と 4D の処理による値が組み合わさったものです。

たとえば、HTMLページ内にて以下のように記述すると:

```html
<P><!--#4DTEXT vtSiteName--> へようこそ！ </P>
```

The value of the 4D variable _vtSiteName_ will be inserted in the HTML page.

## テンプレート用タグ

以下の 4Dタグを使用することができます:

- 4DTEXT: 4D変数および式をテキストとして挿入します。
- 4DHTML: HTMLコードを挿入します。
- 4DEVAL: 4D式を評価します。
- 4DSCRIPT: 4Dメソッドを実行します。
- 4DINCLUDE: ページを他のページに含めます。
- 4DBASE: 4DINCLUDE タグが使用するデフォルトフォルダーを変更します。
- 4DCODE: 4Dコードを挿入します。
- 4DIF, 4DELSE, 4DELSEIF, 4DENDIF: HTMLコードに条件式を挿入します。
- 4DLOOP, 4DENDLOOP: HTMLコードにループを挿入します。
- 4DEACH, 4DENDEACH: コレクション内、エンティティセレクション内、またはオブジェクトのプロパティをループします。

These tags are described in the [Transformation Tags](../Tags/transformation-tags.md) page.

タグは混在させることが可能です。 たとえば、次のような HTMLコードが認められています:

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (myvar=2)-->

   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->
 
<!--#4DLOOP [TABLE]-->   (loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>
      (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (End for)
</BODY>
</HTML>
```

## タグの解析

最適化のため、".HTML" または ".HTM" を末尾に持つ単純な URL で HTMLページを呼び出した場合、4D Webサーバーは HTMLソースコードの解析をおこないません。

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. URL で呼び出す場合、".htm" と ".html" で終わるページは最適化のため解析されません。 In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. XMLページ (.xml、.xsl) もサポートされており、常に 4D によって解析されます。

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

内部的には、パーサーは UTF-16 文字列で動作しますが、解析するデータは異なる方法でエンコードされている場合があります。 When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). 以下に、HTMLページに含まれるタグを 4D が解析する場合と、おこなわれる変換を示します:

| 動作 / コマンド                                | 送信ページの解析                                                             | $シンタックスのサポート(\*)                                  | タグ解析に使用される文字セット                                                                                                     |
| ---------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| URL で呼び出されたページ                           | ○、ただし拡張子が ".htm" または ".html" のページを除く | ○、ただし拡張子が ".htm" または ".html" のページを除く | ページの "Content-Type" ヘッダーのパラメーターに渡された文字セットに従います。 それが無い場合は、META-HTTP EQUIVタグを探します。 それも無ければ、HTTPサーバーのデフォルト文字セットを使用します。 |
| `WEB SEND FILE`                          | X                                                                    | -                                                                    | ページの "Content-Type" ヘッダーのパラメーターに渡された文字セットに従います。 それが無い場合は、META-HTTP EQUIVタグを探します。 それも無ければ、HTTPサーバーのデフォルト文字セットを使用します。 |
| `WEB SEND TEXT`                          | X                                                                    | *                                                                    | 変換は不要です。                                                                                                            |
| `WEB SEND BLOB`                          | ○ (BLOBが "text/html" 型の場合)                        | -                                                                    | レスポンスの "Content-Type" ヘッダーに指定された文字セットを使います。 それも無ければ、HTTPサーバーのデフォルト文字セットを使用します。                                      |
| Inclusion by the `<!--#4DINCLUDE-->` tag | X                                                                    | X                                                                    | ページの "Content-Type" ヘッダーのパラメーターに渡された文字セットに従います。 それが無い場合は、META-HTTP EQUIVタグを探します。 それも無ければ、HTTPサーバーのデフォルト文字セットを使用します。 |
| `PROCESS 4D TAGS`                        | X                                                                    | X                                                                    | テキストデータは変換しません。 BLOBデータは、互換性のために Mac-Roman 文字セットから自動変換されます。                                                         |

(\*) 4DHTML、4DTEXT、4DEVALタグにおいては、代替の $ベースシンタックスが利用可能です。

## Webから 4Dメソッドへのアクセス

Executing a 4D method with `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, or `4DTEXT` from a web request is subject to the [Available through 4D tags and URLs (4DACTION...)](allowProject.md) attribute value defined in the properties of the method. この属性がチェックされていないメソッドは、Webリクエストから呼び出すことができません。

## 悪意あるコードの侵入を防止

4D変換タグは様々なタイプのデータを引数として受け入れます: テキスト、変数、メソッド、コマンド名、…。 これらのデータが自分で書いたコードから提供される場合、その受け渡しを自分でコントロールできるので、悪意あるコードの侵入のリスクは無いと言っていいでしょう。 しかしながら、 データベースのコード扱うデータは多くの場合、外部ソース (ユーザー入力、読み込み、等) から導入されたものです。

In this case, it is advisable to **not use** tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

In addition, according to the [principle of recursion](../Tags/transformation-tags.md#recursive-processing), malicious code may itself include transformation tags. In this case, it is imperative to use the `4DTEXT` tag. 例として、"Name" という名前の Webフォームフィールドがあり、ユーザーがそこに名前を入力する場合を考えます。 This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. もし "<code>&lt;!--#4DEVAL QUIT 4D--&gt;</code>" というテキストが名前の代わりに入力されたとしたら、このタグを解釈するとアプリケーションは終了してしまいます。 To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. このタグは特殊 HTML文字をエスケープするため、挿入された悪意ある再起的コードが解釈されることはありません。 To refer to the previous example, the "Name" field will contain, in this case, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" which will not be transformed.

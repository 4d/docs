---
id: templates
title: テンプレートページ
---

4D の Webサーバーでは、タグを含む HTMLテンプレートページを使用することができます。つまり、静的な HTMLコードと、4DTEXT、4DIF、4DINCLUDEなどの [変換タグ](Tags/tags.md) によって追加された 4D参照の組み合わせです。 これらのタグは通常、HTMLタイプのコメント (`<!--#4DTagName TagValue-->`) として、HTMLソースコードに挿入されます。

これらのページが HTTPサーバーから送信される際、ページは解析され、含まれているタグが実行され、結果のデータに置き換えられます。 このように、ブラウザーが受け取るページは、静的な要素と 4D の処理による値が組み合わさったものです。

たとえば、HTMLページ内にて以下のように記述すると:

```html
<P><!--#4DTEXT vtSiteName--> へようこそ！</P>
```

4D変数 *vtSiteName* の値が HTMLページに挿入されます。


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

これらのタグについては、[変換タグ](Tags/tags.md) のページで説明しています。

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
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><BR>
      (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (End for)
</BODY>
</HTML>
```


## Tag parsing

For optimization reasons, the parsing of the HTML source code is not carried out by the 4D Web server when HTML pages are called using simple URLs that are suffixed with “.HTML” or “.HTM”.

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. URL で呼び出す場合、".htm" と ".html" で終わるページは最適化のため解析されません。 In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. XML pages (.xml, .xsl) are also supported and always parsed by 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:

| Action / Command                               | Content analysis of the sent pages                    | Support of $ syntax(*)                                | Character set used for parsing tags                                                                                                                                                                         |
| ---------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pages called via URLs                          | X, except for pages with “.htm” or “.html” extensions | X, except for pages with “.htm” or “.html” extensions | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `WEB SEND FILE`                                | ○                                                     | -                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `WEB SEND TEXT`                                | ○                                                     | -                                                     | No conversion necessary                                                                                                                                                                                     |
| `WEB SEND BLOB`                                | X, if BLOB is of the “text/html” type                 | -                                                     | Use of charset set in the "Content-Type" header of the response. Otherwise, use of default character set for the HTTP server                                                                                |
| Inclusion by the `<!--#4DINCLUDE-->` tag | ○                                                     | ○                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `PROCESS 4D TAGS`                              | ○                                                     | ○                                                     | Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility                                                                                                |

(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags.

## Accessing 4D methods via the Web

Executing a 4D method with `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, or `4DTEXT` from a web request is subject to the [Available through 4D tags and URLs (4DACTION...)](allowProject.md) attribute value defined in the properties of the method. If the attribute is not checked for the method, it can not be called from a web request.


## 悪意あるコードの侵入を防止

4D変換タグは様々なタイプのデータを引数として受け入れます: テキスト、変数、メソッド、コマンド名、…。 これらのデータが自分で書いたコードから提供される場合、その受け渡しを自分でコントロールできるので、悪意あるコードの侵入のリスクは無いと言っていいでしょう。 しかしながら、 データベースのコード扱うデータは多くの場合、外部ソース (ユーザー入力、読み込み、等) から導入されたものです。

この場合、`4DEVAL` や `4DSCRIPT` などの変換タグは **使用しない** のが賢明です。なぜならこれらのタグはこういったデータが格納された変数を直接評価するからです。

これに加え、[繰り返しの原則](Tags/tags.md#再起的処理) に従い、悪意あるコード自身が変換タグを含んでいる可能性もあります。 この場合、`4DTEXT` タグを使用しなくてはなりません。 例として、"Name" という名前の Webフォームフィールドがあり、ユーザーがそこに名前を入力する場合を考えます。 この名前は `<!--#4DHTML vName-->` タグを使用してページ内に表示されます。 もし "`<!--#4DEVAL QUIT 4D-->`" というテキストが名前の代わりに入力されたとしたら、このタグを解釈するとアプリケーションは終了してしまいます。 このリスクを避けるには、`4DTEXT` タグを使用することで対応できます。 このタグは特殊 HTML文字をエスケープするため、挿入された悪意ある再起的コードが解釈されることはありません。 前の例でいうと、"Name" フィールドには "`<!--#4DEVAL QUIT 4D-->`" が含まれることになり、これは変換されません。

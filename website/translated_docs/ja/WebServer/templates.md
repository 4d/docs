---
id: templates
title: Template pages
---

4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of [transformation tags](Tags/tags.md) such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing.

For example, if you write in an HTML page:

```html
<P> <!--#4DTEXT vtSiteName-->へようこそ！</P>
```

The value of the 4D variable *vtSiteName* will be inserted in the HTML page.


## Tags for templates

The following 4D tags are available:

- 4DTEXT, to insert 4D variables and expressions as text,
- 4DHTML, to insert HTML code,
- 4DEVAL, to evaluate any 4D expression,
- 4DSCRIPT, to execute a 4D method,
- 4DINCLUDE, to include a page within another one,
- 4DBASE, to modify the default folder used by the 4DINCLUDE tag,
- 4DCODE, to insert 4D code,
- 4DIF, 4DELSE, 4DELSEIF and 4DENDIF, to insert conditions in the HTML code,
- 4DLOOP and 4DENDLOOP, to make loops in the HTML code,
- 4DEACH and 4DENDEACH, to loop in collections, entity selections, or object properties.

These tags are described in the [Transformation Tags](Tags/tags.md) page.

It is possible to mix tags. For example, the following HTML code is allowed:

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

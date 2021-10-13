---
id: templates
title: Template pages
---

Le serveur Web de 4D vous permet d'utiliser des pages de modèles HTML contenant des balises, c'est-à-dire un mélange de code HTML statique et de références 4D ajoutées via des balises de transformation telles que 4DTEXT, 4DIF ou 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing.

For example, if you write in an HTML page:

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
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
- 4DLOOP et 4DENDLOOP, pour faire des boucles dans le code HTML.

Ces balises sont décrites dans la page [Balises de Transformation 4D](https://doc.4d.com/4Dv18R5/4D/18-R5/4D-Transformation-Tags.300-5128433.en.html) sur doc.4d.com.

> Pour des raisons de sécurité, toute méthode projet 4D appelée depuis une balise 4D doit avoir été [autorisée pour les requêtes Web](allowProject.md) : la valeur de l'attribut «Disponible via les balises 4D et les URL (4DACTION...)» doit avoir été cochée dans les propriétés de la méthode. If the attribute is not checked, the web request is rejected.

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

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. In this last case, for reasons of optimization, pages that are suffixed with “.htm” and “.html” are NOT parsed. In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. XML pages (.xml, .xsl) are also supported and always parsed by 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:

| Action / Command                               | Content analysis of the sent pages                    | Support of $ syntax(*)                                | Character set used for parsing tags                                                                                                                                                                         |
| ---------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pages called via URLs                          | X, except for pages with “.htm” or “.html” extensions | X, except for pages with “.htm” or “.html” extensions | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `WEB SEND FILE`                                | X                                                     | -                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `WEB SEND TEXT`                                | X                                                     | -                                                     | No conversion necessary                                                                                                                                                                                     |
| `WEB SEND BLOB`                                | X, if BLOB is of the “text/html” type                 | -                                                     | Use of charset set in the "Content-Type" header of the response. Otherwise, use of default character set for the HTTP server                                                                                |
| Inclusion by the `<!--#4DINCLUDE-->` tag | X                                                     | X                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server |
| `PROCESS 4D TAGS`                              | X                                                     | X                                                     | Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility                                                                                                |

(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags.


### Recursive processing

4D tags are interpreted recursively: 4D always attempts to reinterpret the result of a transformation and, if a new transformation has taken place, an additional interpretation is performed, and so on until the product obtained no longer requires any further transformation. For example, given the following statement:

```html
<!--#4DHTML [Mail]Letter_type-->
```

If the `[Mail]Letter_type` text field itself contains a tag, for example `<!--#4DSCRIPT/m_Gender-->`, this tag will be evaluated recursively after the interpretation of the 4DHTML tag.

This powerful principle meets most needs related to text transformation. A noter cependant que dans certains cas, cela peut également permettre l'insertion de code malveillant. Pour plus d'informations sur ce point, reportez-vous à la section suivante.


## Prevention of malicious code insertion

4D tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your database code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.).

In this case, it is advisable to **not use** tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

De plus, selon le [principe de la récursivité](#recursive-processing), le code malveillant peut lui-même inclure des balises de transformation. In this case, it is imperative to use the `4DTEXT` tag. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. If text of the "\<!--#4DEVAL QUIT 4D-->" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. Pour se référer à l'exemple précédent, le champ "Name" contiendra, dans ce cas, "&lt;!--#4DEVAL QUIT 4D--&gt;" qui ne sera pas transformé.

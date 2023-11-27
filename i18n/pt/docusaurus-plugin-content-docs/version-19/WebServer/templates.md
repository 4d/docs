---
id: templates
title: Páginas de modelo
---

4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of [transformation tags](Tags/tags.md) such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D processing.

Por exemplo, se escrever numa página HTML:

```html
Bem-vindo a <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable *vtSiteName* will be inserted in the HTML page.

## Etiquetas para modelos

Estão disponíveis as seguintes etiquetas 4D:

- 4DTEXT, para inserir variáveis e expressões 4D como texto,
- 4DHTML, para inserir código HTML,
- 4DEVAL, para avaliar qualquer expressão 4D,
- 4DSCRIPT, para executar um método 4D,
- 4DINCLUDE, para incluir uma página dentro de outra,
- 4DBASE, para modificar a pasta predefinida utilizada pela etiqueta 4DINCLUDE,
- 4DCODE, para inserir o código 4D,
- 4DIF, 4DELSE, 4DELSEIF e 4DENDIF, para inserir condições no código HTML,
- 4DLOOP e 4DENDLOOP, para criar loops no código HTML,
- 4DEACH and 4DENDEACH, to loop in collections, entity selections, or object properties.

These tags are described in the [Transformation Tags](Tags/tags.md) page.

É possível combinar etiquetas. Por exemplo, é permitido o seguinte código HTML:

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

## Análise de etiquetas

For optimization reasons, the parsing of the HTML source code is not carried out by the 4D Web server when HTML pages are called using simple URLs that are suffixed with “.HTML” or “.HTM”.

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. In this last case, for reasons of optimization, pages that are suffixed with “.htm” and “.html” are NOT parsed. In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. XML pages (.xml, .xsl) are also supported and always parsed by 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:

| Ação / Comando                                   | Análise de conteúdo das páginas enviadas              | Suporte da sintaxe $(*)                               | Conjunto de caracteres utilizado para a análise de etiquetas                                                                                                                                                                          |
| ------------------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Páginas chamadas através de URLs                 | X, exceto para páginas com extensões ".htm" ou ".html | X, exceto para páginas com extensões ".htm" ou ".html | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND FILE`                                  | X                                                     | -                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `WEB SEND TEXT`                                  | X                                                     | -                                                     | Não é necessária qualquer conversão                                                                                                                                                                                                   |
| `WEB SEND BLOB`                                  | X, se o BLOB for do tipo "text/html                   | -                                                     | Utilização do conjunto de caracteres definido no cabeçalho "Content-Type" da resposta. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP                                                          |
| Inclusão pela etiqueta `<!--#4DINCLUDE-->` | X                                                     | X                                                     | Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Caso contrário, utilização do conjunto de caracteres predefinido para o servidor HTTP |
| `PROCESS 4D TAGS`                                | X                                                     | X                                                     | Dados de texto: sem conversão. BLOB data: automatic conversion from the Mac-Roman character set for compatibility                                                                                                                     |

(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags.

## Aceder aos métodos 4D através da Web

Executing a 4D method with `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, or `4DTEXT` from a web request is subject to the [Available through 4D tags and URLs (4DACTION...)](allowProject.md) attribute value defined in the properties of the method. If the attribute is not checked for the method, it can not be called from a web request.

## Prevenção da inserção de código malicioso

4D tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your database code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.).

In this case, it is advisable to **not use** tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

In addition, according to the [principle of recursion](Tags/tags.md#recursive-processing), malicious code may itself include transformation tags. In this case, it is imperative to use the `4DTEXT` tag. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. Se o texto do "\<!--#4DEVAL QUIT 4D-->" type is inserted instead of the name, interpreting this tag will cause the application to be exited. To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. To refer to the previous example, the "Name" field will contain, in this case, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" which will not be transformed.

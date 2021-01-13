---
id: templates
title: Using template pages
---

4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of transformation tags such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#Tag Contents-->`) into the HTML source code.

When these pages are sent by the HTTP server, they are parsed and the tags they contain are executed and replaced with the resulting data. The pages received by the browsers are thus a combination of static elements and values coming from 4D. 


## Principles

You can use the 4D language to give default values to HTML objects by including `<!--#4DTEXT expression-->` in the "value" field of the HTML object, where *expression* is an expression to evaluate in the context of the current Web process, for example the name of a 4D process variable. This is the name that you surround with the standard HTML notation for comments `<!--#...-->`. 

In fact, the `<!--#4DTEXT expression-->` syntax allows you to insert 4D data anywhere in the HTML page. For example, if you write:

```
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable *vtSiteName* will be inserted in the HTML page.

Here is an example:

```4d
  // The following piece of 4D code assigns "4D4D" to the vs4D process variable 
 vs4D:="4D4D"
  // Then it sends the HTML page "AnyPage.HTM"
WEB SEND FILE("AnyPage.HTM")
```

The source of the HTML page AnyPage.HTM is listed here:

```
<html>
<head>
    <title>AnyPage</title>
<script language="JavaScript"><!--
function Is4DWebServer(){
    return (document.frm.vs4D.value=="4D4D")
}
function HandleButton(){
    if(Is4DWebServer()){
        alert("You are connected to 4D Web Server!")
    } else {
        alert("You are NOT connected to 4D Web Server!")
}
//--></script>
</head>
 
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post" name="frm">
<p><input type="hidden" name="vs4D" value="<!--#4DTEXT vs4D-->"</p>
<p><a href="JavaScript:HandleButton()"><img src="AnyGIF.GIF" border=0 align=bottom></a></p>
<p><input type="submit" name="bOK" value="OK"></p>
</form>
</body>
</html>
```

The `<!--#4DTEXT -->` tag allows the insertion of any 4D expressions in the pages (object property, field value, array elements, etc.). The operation of this tag with this type of data is identical to that with variables. You can also insert HTML code into 4D variables using the `4DHTML` tag. Other tags such as `4DIF` allow you to control the executed code. A description of all the tags that you can use is found in the **4D HTML Tags** section.


## Tag processing

Parsing of the contents of template pages sent by 4D web servr takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. In this last case, for reasons of optimization, pages that are suffixed with “.htm” and “.html” are NOT parsed. In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. XML pages (.xml, .xsl) are also supported and always parsed by 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

Internally, the parser works with UTF-16 strings, but the data to parse may have been encoded differently. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). Below are the cases where 4D parses the tags contained in the HTML pages, as well as any conversions carried out:

|Action / Command|Content analysis of the sent pages|Support of $ syntax(*)|Character set used for parsing tags|
|----|----|----|---|		
|Pages called via URLs|X, except for pages with “.htm” or “.html” extensions|X, except for pages with “.htm” or “.html” extensions|Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server|
|`WEB SEND FILE`|X|-|Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server|
|`WEB SEND TEXT`|X|-|No conversion necessary|
|`WEB SEND BLOB`|X, if BLOB is of the “text/html” type|-|Use of charset set in the "Content-Type" header of the response. Otherwise, use of default character set for the HTTP server|
|Inclusion by the `<!--#4DINCLUDE-->` tag|X|X|Use of charset passed as parameter of the "Content-Type" header of the page. If there is none, search for a META-HTTP EQUIV tag with a charset. Otherwise, use of default character set for the HTTP server|
|`PROCESS 4D TAGS`|X|X|Text data: no conversion. BLOB data: automatic conversion from the Mac-Roman character set for compatibility|

(*) The alternative $-based syntax is available for 4DHTML, 4DTEXT and 4DEVAL tags.



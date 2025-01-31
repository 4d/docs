---
id: web-get-body-part
title: WEB GET BODY PART
slug: /commands/web-get-body-part
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET BODY PART.Syntax-->**WEB GET BODY PART** ( *part* ; *contents* ; *name* ; *mimeType* ; *fileName* )<!-- END REF-->
<!--REF #_command_.WEB GET BODY PART.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| part | Integer | &#8594;  | Part number |
| contents | Blob, Text | &#8592; | Contents of part |
| name | Text | &#8592; | Name of "input" variable |
| mimeType | Text | &#8592; | Mime type of submitted file |
| fileName | Text | &#8592; | Name of submitted file |

<!-- END REF-->

#### Description 

<!--REF #_command_.WEB GET BODY PART.Summary-->The **WEB GET BODY PART** command, when called in the context of a Web process, parses the "body" part of a multi-part request.<!-- END REF-->

In the *part* parameter, pass the number of the part to be parsed. You can get the total number of parts using the [WEB Get body part count](web-get-body-part-count.md) command.

The *contents* parameter receives the contents of the part. When the parts to be retrieved are files, you must pass a BLOB type parameter. In the case of TEXT variables submitted in a Web form, you can pass a Text type parameter. 

The *name* parameter receives the variable name of the HTTP input field.

The *mimeType* and *name* parameters receive the Mime type and the name of the original file, if any. A *name* is only received when the file was submitted as **<input type="file">**.  
*mimeType* and *name* are optional but must be passed together. 

**Note:** In the context of a multi-part request, the first array of the [WEB GET VARIABLES](web-get-variables.md) command returns all parts of the form, in the same order as the **WEB GET BODY PART** command. You can use it in order to get the position of the parts of the form directly. 

#### Example 

In this example, a Web form downloads several pictures using a browser onto the HTTP server and displays them in the page. Here is the Web form:

![](../assets/en/commands/pict864606.en.png)

Here is the code for the <body> part of the page:

```HTML
<body>
        <form enctype="multipart/form-data" action="/4DACTION/GetFile/" method="post">
            Locate the picture files to upload: <br>
            Picture file 1: <input name="file1" type="file"><br>
            Picture file 2: <input name="file2" type="file"><br>
            <input type="submit">                    
        </form>     
        <hr/>
    <!--4DSCRIPT/galleryInit-->
    <!--4Dloop aFileNames-->
        <img src="/photos/<!--4Dvar aFileNames{aFileNames}-->"/>
    <!--4Dendloop-->
</body>
```

Two 4D methods are called by the page:

* galleryInit on loading (4DSCRIPT tag), displays the pictures found in the destination folder.
* GetFile when sending data (4DACTION URL of multi-part form), processes the submission.

Here is the code for galleryInit:

```4d
 var $vDestinationFolder : Text
 ARRAY TEXT(aFileNames;0)
 var $i : Integer
 $vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator //"WebFolder/photos" folder
 DOCUMENT LIST($vDestinationFolder;aFileNames)
```

Here is the code for GetFile:

```4d
 var $vPartName;$vPartMimeType;$vPartFileName;$vDestinationFolder : Text
 var $vPartContentBlob : Blob
 var $i : Integer
 $vDestinationFolder:=Get 4D folder(HTML Root folder)+"photos"+Folder separator
 For($i;1;WEB Get body part count) //for each part
    WEB GET BODY PART($i;$vPartContentBlob;$vPartName;$vPartMimeType;$vPartFileName)
    If($vPartFileName#"")
       BLOB TO DOCUMENT($vDestinationFolder+$vPartFileName;$vPartContentBlob)
    End if
 End for
 WEB SEND HTTP REDIRECT("/") // return to page
```

#### See also 

[WEB Get body part count](web-get-body-part-count.md)  
[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB GET VARIABLES](web-get-variables.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1212 |
| Thread safe | &check; |



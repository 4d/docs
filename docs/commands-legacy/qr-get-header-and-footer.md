---
id: qr-get-header-and-footer
title: QR GET HEADER AND FOOTER
slug: /commands/qr-get-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR GET HEADER AND FOOTER.Syntax-->**QR GET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )<!-- END REF-->
<!--REF #_command_.QR GET HEADER AND FOOTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| selector | Integer | &#8594;  | 1 = Header, 2 = Footer |
| leftTitle | Text | &#8592; | Text displayed on the left side |
| centerTitle | Text | &#8592; | Text displayed in the middle |
| rightTitle | Text | &#8592; | Text displayed on the right side |
| height | Integer | &#8592; | Header or footer height |
| picture | Picture | &#8592; | Picture to display |
| pictAlignment | Integer | &#8592; | Alignment attribute for the picture |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR GET HEADER AND FOOTER.Summary-->The QR GET HEADER AND FOOTER command retrieves the contents and size of the header or footer.<!-- END REF-->

*selector* allows you to select the header or the footer:

* if *selector* equals 1, the header information will be retrieved;
* if *selector* equals 2, the footer information will be retrieved.

*leftTitle*, *centerTitle* and *rightTitle* returns the values for, respectively, the left, center and right header/footer.

*height* returns the height of the header/footer, expressed in the unit selected for the report.

*picture* returns a picture that is displayed in the header or footer.

*pictAlignment* is the alignment attribute for the picture displayed in the header/footer.

* If *pictAlignment* returns 1, the picture is aligned to the left.
* If *pictAlignment* returns 2, the picture is centered.
* If *pictAlignment* returns 3, the picture is aligned to the right.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *selector* value, the error -9852 will be generated.

#### Example 

The following code retrieves the values of the header titles as well as the header size and displays them in alerts:

```4d
 QR GET HEADER AND FOOTER(MyArea;1;$LeftText;$CenterText;$RightText;$height)
 Case of
    :($LeftText #"")
       ALERT("The left title is "+Char(34)+$LeftText+Char(34))
    :($CenterText #"")
       ALERT("The center title is "+Char(34)+$CenterText+Char(34))
    :($RightText #"")
       ALERT("The right title is "+Char(34)+$RightText+Char(34))
    Else
       ALERT("No header title in this report.")
 End case
 ALERT("The height of the header is "+String($height))
```

#### See also 

[QR SET HEADER AND FOOTER](qr-set-header-and-footer.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 775 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||



---
id: qr-set-header-and-footer
title: QR SET HEADER AND FOOTER
slug: /commands/qr-set-header-and-footer
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HEADER AND FOOTER.Syntax-->**QR SET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )<!-- END REF-->
<!--REF #_command_.QR SET HEADER AND FOOTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| selector | Integer | &#8594;  | 1 = Header, 2 = Footer |
| leftTitle | Text | &#8594;  | Text displayed on the left side |
| centerTitle | Text | &#8594;  | Text displayed in the middle |
| rightTitle | Text | &#8594;  | Text displayed on the right side |
| height | Integer | &#8594;  | Header or footer height |
| picture | Picture | &#8594;  | Picture to display |
| pictAlignment | Integer | &#8594;  | Alignment attribute for the picture |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR SET HEADER AND FOOTER.Summary-->The QR SET HEADER AND FOOTER command sets the contents and size of the header or footer.<!-- END REF-->

*selector* selects the header or the footer:

* If *selector* is 1, the header is affected;
* If *selector* is 2, the footer is affected.

*leftTitle*, *centerTitle* and *rightTitle* are the values for, respectively, the left, center and right header/footer.

*height* is the height of the header/footer, expressed in the unit selected for the quick report.

*picture* is a picture that will be displayed in the header or footer.

*pictAlignment* is the alignment attribute for the picture passed in *picture*.

* If *pictAlignment* is 1, the picture is aligned to the left.
* If *pictAlignment* is 2, the picture is centered.
* If *pictAlignment* is 3, the picture is aligned to the right.

If you pass an invalid *area* number, the error -9850 will be generated.  
If you pass an invalid *selector* value, the error -9852 will be generated.

#### Example 

The following statement places the title “Center title” in the header for the Quick Report in MyArea and sets the header height to 200 points:

```4d
 QR SET HEADER AND FOOTER(MyArea;1;"";"Center title";"";200)
```

#### See also 

[QR GET HEADER AND FOOTER](qr-get-header-and-footer.md)  
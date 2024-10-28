---
id: qr-set-html-template
title: QR SET HTML TEMPLATE
slug: /commands/qr-set-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR SET HTML TEMPLATE.Syntax-->**QR SET HTML TEMPLATE** ( *area* ; *template* )<!-- END REF-->
<!--REF #_command_.QR SET HTML TEMPLATE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Reference of the area |
| template | Text | &#8594;  | HTML template |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.QR SET HTML TEMPLATE.Summary-->The **QR SET HTML TEMPLATE** command sets the HTML template currently used for the Quick Report *area*.<!-- END REF--> The template will be used when building the report in HTML format. 

The template uses a set of tags to process the data in order to either retain a layout close to the original report or to adopt your own custom HTML.

**Note:** You first need to call [QR SET DESTINATION](qr-set-destination.md) to set the output to HTML file.

#### HTML Tags 

*<!--#4DQRheader--> ... <!--/#4DQRheader-->*  
The HTML contents that are included between these tags come from the column titles. You will typically use these tags to define the title row of the report.

*<!--#4DQRrow--> ... <!--/#4DQRrow-->*  
The HTML contents that are included between these tags are repeated for each data row (including detail and subtotal rows).

*<!--#4DQRcol--> ... <!--/#4DQRcol-->*  
The HTML contents that are included between these tags are repeated for each data column within a row. The column order will remain identical to the order in the report. When used in conjunction with *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*, the tags *<!--#4DQRcol--> ... <!--/#4DQRcol-->* will only go through the columns whose contents are not inserted using *<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*.  
For example, in a report that has five columns, you choose to use *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->* to insert data from the second column, *<!--#4DQRcol--> ... <!--/#4DQRcol-->* will go, for each row, through columns 1, 3, 4, and 5\. These last tags ignore the column whose contents are published using *<!--#4DQRcol;2--> ... <!--/#4DQRcol;2-->*. 

*<!--#4DQRcol;n--> ... <!--/#4DQRcol;n-->*  
The HTML contents that are included between these tags are extracted from the column in the report whose number is “n”. If, for example, you want to display a different column order in the HTML output for a three-column report, you could use:  
*<!--#4DQRrow--> <!--#4DQRcol;3--> ... <!--/#4DQRcol;3--><!--#4DQRcol;2--> ... <!--/#4DQRcol;2--><!--#4DQRcol;1--> ... <!--/#4DQRcol;1--> <!--/#4DQRrow-->*  
In this example, the columns are inserted in the opposite order of the report.

*<!--#4DQRfont--> ... <!--/#4DQRfont-->*  
The HTML contents that are included between these tags will be assigned the font of the current column or cell.  
*<!--#4DQRfont-->* will be replaced by an HTML font definition and *<!--/#4DQRfont-->* will be replaced by the matching closing tag (*</font>*).

*<!--#4DQRface--> ... <!--/#4DQRface-->*  
The HTML contents that are included between these tags will be assigned the font style of the current column or cell.  
*<!--#4DQRface-->* will be replaced by an HTML face definition and *<!--#4DQRface-->* will be replaced by the matching closing tag (*</face>*).

*<!--#4DQRbgcolor-->*  
This color tag will be replaced by the current color for the current cell.

*<!--#4DQRdata-->*  
This tag will be replaced by the current data for the current cell.

*<!--#4DQRlHeader--><!--#4DQRdata--><!--/#4DQRlHeader-->*  
*<!--#4DQRcHeader--><!--#4DQRdata--><!--/#4DQRcHeader-->*  
*<!--#4DQRrHeader--><!--#4DQRdata--><!--/#4DQRrHeader-->*  
These tags will be replaced respectively by the data in the left, center or right header.

*<!--#4DQRlFooter--><!--#4DQRdata--><!--/#4DQRlFooter-->*  
*<!--#4DQRcFooter--><!--#4DQRdata--><!--/#4DQRcFooter-->*  
*<!--#4DQRrFooter--><!--#4DQRdata--><!--/#4DQRrFooter-->*  
These tags will be replaced respectively by the data in the left, center or right footer.

If you pass an invalid *area* number, the error -9850 will be generated.

#### See also 

[QR Get HTML template](qr-get-html-template.md)  
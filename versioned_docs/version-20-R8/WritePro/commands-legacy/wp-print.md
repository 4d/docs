---
id: wp-print
title: WP PRINT
slug: /WritePro/commands/wp-print
displayed_sidebar: docs
---

<!--REF #_command_.WP PRINT.Syntax-->**WP PRINT** ( *wpDoc* {; *printOptions*} )<!-- END REF-->
<!--REF #_command_.WP PRINT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| printOptions | Integer | &#8594;  | Printing options for the 4D Write Pro document |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.WP PRINT.Summary-->The **WP PRINT** command launches a print job for the 4D Write Pro document specified in *wpDoc*, or adds the document to the current print job if it is called between [OPEN PRINTING JOB](../../commands-legacy/open-printing-job.md) and [CLOSE PRINTING JOB](../../commands-legacy/close-printing-job.md).<!-- END REF--> **WP PRINT** uses print settings defined by the 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md) or [SET PRINT OPTION](../../commands-legacy/set-print-option.md) commands, except for page margins which are always based on the 4D Write Pro document page settings. **WP PRINT** uses current page setup options (such as page size and orientation), or those of the document if [WP USE PAGE SETUP](wp-use-page-setup.md) was called previously.

The optional *printOptions* parameter can be used to set the HTML WYSIWYG view for the print output as well as the formula computing. You can pass one or a combination of the following constants from the "4D Write Pro" theme:

| Constant                        | Type    | Value | Comment                                                                                                                                         |
| ------------------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| wk 4D Write Pro layout          | Integer | 0     | Standard 4D Write Pro layout, which can include some specific style attributes                                                                  |
| wk do not recompute expressions | Integer | 2     | Specifies that all expressions in the document are not recomputed before printing or freezing.                                                  |
| wk html wysiwyg                 | Integer | 1     | In this layout, any 4D Write Pro advanced attributes which are not compliant with all browsers are removed (e.g. columns, double underlines...) |
| wk recompute expressions        | Integer | 0     | Specifies that all expressions in the document are recomputed before printing or freezing (default value).                                      |

If *printOptions* is omitted, by default the 4D Write Pro layout is used and expressions are recomputed (if any).

**Note:** When printed with **WP PRINT**, 4D Write Pro documents are always printed as in Page view mode, regardless of the View property setting for the area (see *Configuring View properties*).

**Compatibility Note:** The GDI-based legacy printing layer (which can be set using the [SET PRINT OPTION](../../commands-legacy/set-print-option.md) command) **is deprecated** and should not be used with **WP PRINT**, since it may result in rendering artifacts. It is recommended to only use the default printing layer with this command. 

#### Example 

You want to print a 4D Write Pro document in standard or HTML wysiwyg layout depending on the value of a variable:  

```4d
  // print using a specific layout HTML wysiwyg or 4D Write Pro Layout
 If(rb_htmlwysiwyg=1)
    WP PRINT(writeProDoc;wk html wysiwyg)
 Else
    WP PRINT(writeProDoc;wk 4D Write Pro layout)
 End if
```

#### See also 

[WP Get position](wp-get-position.md)  
[WP USE PAGE SETUP](wp-use-page-setup.md)  
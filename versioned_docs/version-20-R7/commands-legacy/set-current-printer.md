---
id: set-current-printer
title: SET CURRENT PRINTER
slug: /commands/set-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.SET CURRENT PRINTER.Syntax-->**SET CURRENT PRINTER** ( *printerName* )<!-- END REF-->
<!--REF #_command_.SET CURRENT PRINTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| printerName | Text | &#8594;  | Name of printer to be used |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET CURRENT PRINTER.Summary-->The **SET CURRENT PRINTER** command designates the printer to be used for printing with the current 4D application.<!-- END REF-->

Pass the name of the printer to be selected in the *printerName* parameter. To get a list of available printers, use the [PRINTERS LIST](printers-list.md) command beforehand. If you pass an empty string in *printerName*, the current printer defined in the system will be used.

You can also designate the generic PDF printer automatically, regardless of the platform, by passing the following constant found in the *Print Options* theme:

| Constant           | Value              | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generic PDF driver | \_4d\_pdf\_printer | On macOS, sets the current printer to the default driver. This driver is invisible; it is not found in the list returned by [PRINTERS LIST](printers-list.md). Note that a PDF document path must be set using [SET PRINT OPTION](set-print-option.md), otherwise error 3107 is returned. On Windows, sets the current printer to the Windows PDF driver (named "Microsoft Print to PDF"). This feature is only available in Windows 10 and higher with the PDF option installed. In older Windows versions, or if no PDF driver is available, the command does nothing and the *OK* variable is set to 0. |

The **SET CURRENT PRINTER** command must be called before [SET PRINT OPTION](set-print-option.md), so that the options available correspond to the selected printer. On the other hand, **SET CURRENT PRINTER** must be called after *\_o\_PAGE SETUP*, otherwise the print settings are lost.

This command can be used with the [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md), and [QR REPORT](qr-report.md) commands, and is applied to all 4D printing, including that in Design mode.  
It is imperative for print commands to be called with the *\>* parameter (where applicable) so that the specified settings are not lost.

#### System variables and sets 

If printer selection is carried out correctly, the system variable OK is set to 1\. Should the opposite occur (for instance if the designated printer is not found), the system variable OK is set to 0 and the current printer remains unchanged. 

#### Example 

Creation of a PDF document under Windows:

```4d
 var $pdfpath : Text
 $pdfpath:=System folder(Desktop)+"test.pdf"
 SET CURRENT PRINTER(Generic PDF driver)
 SET PRINT OPTION(Destination option;3;$pdfpath)
 ALL RECORDS([Table_1])
 PRINT SELECTION([Table_1];*)
 SET CURRENT PRINTER("")
```

#### See also 

[Get current printer](get-current-printer.md)  
[PRINTERS LIST](printers-list.md)  
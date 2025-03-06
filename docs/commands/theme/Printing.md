---
id: Printing
title: Printing
---
||
|---|
|[**ACCUMULATE** ( *data* {; *data2* ; ... ; *dataN*} )](../../commands-legacy/accumulate)<br/>**ACCUMULATE** specifies the fields or variables to be accumulated during a form report performed using [PRINT SELECTION](print-selection.md).|
|[**BLOB to print settings** ( *printSettings* {; *params*} ) : Integer](../../commands-legacy/blob-to-print-settings)<br/>The **BLOB to print settings** command replaces the current 4D print settings with the parameters stored in the *printSettings* BLOB.|
|[**BREAK LEVEL** ( *level* {; *pageBreak*} )](../../commands-legacy/break-level)<br/>**BREAK LEVEL** specifies the number of break levels in a report performed using [PRINT SELECTION](print-selection.md).|
|[**CLOSE PRINTING JOB**](../../commands-legacy/close-printing-job)<br/>The **CLOSE PRINTING JOB** command closes the print job previously opened by the [OPEN PRINTING JOB](open-printing-job.md) command and sends any printing document that has been assembled to the current printer.|
|[**Get current printer**  : Text](../../commands-legacy/get-current-printer)<br/>The **Get current printer** command returns the name of the current printer defined in the 4D application.|
|[**Get print marker** ( *markNum* ) : Integer](../../commands-legacy/get-print-marker)<br/>The **Get print marker** command enables you to get the current position of a marker during printing.|
|[**GET PRINT OPTION** ( *option* ; *value1* {; *value2*} )](../../commands-legacy/get-print-option)<br/>The **GET PRINT OPTION** command returns the current value(s) of a print option.|
|[**Get print preview**  : Boolean](../../commands-legacy/get-print-preview)<br/>The **Get print preview** command returns True if the [SET PRINT PREVIEW](set-print-preview.md) command was called with the **True** value in the current process.|
|[**GET PRINTABLE AREA** ( *height* {; *width*} )](../../commands-legacy/get-printable-area)<br/>The **GET PRINTABLE AREA** command returns the size, in pixels, of the *height* and *width* parameters of the printable area.|
|[**GET PRINTABLE MARGIN** ( *left* ; *top* ; *right* ; *bottom* )](../../commands-legacy/get-printable-margin)<br/>The GET PRINTABLE MARGIN command returns the current values of the different margins defined using the [Print form](../commands/print-form.md), [PRINT SELECTION](print-selection.md) and [PRINT RECORD](print-record.md) commands.|
|[**Get printed height**  : Integer](../../commands-legacy/get-printed-height)<br/>The **Get printed height** command returns the overall height (in pixels) of the section printed using the [Print form](../commands/print-form.md) command.|
|[**Is in print preview**  : Boolean](../../commands-legacy/is-in-print-preview)<br/>The **Is in print preview** command returns True if the **Preview on Screen** option is checked in the printing dialog box and False otherwise.|
|[**Level**  : Integer](../../commands-legacy/level)<br/>Level is used to determine the current header or break level.|
|[**OPEN PRINTING JOB**](../../commands-legacy/open-printing-job)<br/>The **OPEN PRINTING JOB** command opens a print job and stacks all the subsequent printing orders there until the [CLOSE PRINTING JOB](close-printing-job.md) command is called.|
|[**PAGE BREAK** {( * | > )}](../../commands-legacy/page-break)<br/>**PAGE BREAK** triggers the printing of the data that has been sent to the printer and ejects the page.|
|[**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer](../../commands/print-form)<br/>**Print form** simply prints *form* with the current values of fields and variables of *aTable*.|
|[**PRINT LABEL** ( {*aTable* }{;}{ *document* {; * | >}} )](../../commands-legacy/print-label)<br/>**PRINT LABEL** enables you to print labels with the data from the selection of *aTable*.|
|[**Print object** ( {* ;} *object* {; *posX* {; *posY* {; *width* {; *height*}}}} ) : Boolean](../../commands-legacy/print-object)<br/>The **Print object** command lets you print the form object(s) designated by the *object* and *\** parameters, at the location set by the *posX* and *posY* parameters.|
|[**PRINT OPTION VALUES** ( *option* ; *namesArray* {; *info1Array* {; *info2Array*}} )](../../commands-legacy/print-option-values)<br/>The **PRINT OPTION VALUES** command returns in *namesArray* a list of names available for the print *option* defined.|
|[**PRINT RECORD** ( {*aTable*}{;}{* | >} )](../../commands-legacy/print-record)<br/>**PRINT RECORD** prints the current record of *aTable*, without modifying the current selection.|
|[**PRINT SELECTION** ( {*aTable*}{;}{* | >} )](../../commands-legacy/print-selection)<br/>**PRINT SELECTION** prints the current selection of *aTable*.|
|[**PRINT SETTINGS** {( *dialType* )}](../../commands-legacy/print-settings)<br/>**PRINT SETTINGS** displays a printing dialog box.|
|[**Print settings to BLOB** ( *printSettings* ) : Integer](../../commands-legacy/print-settings-to-blob)<br/>The **Print settings to BLOB** command saves the current 4D print settings in the *printSettings* BLOB.|
|[**PRINTERS LIST** ( *namesArray* {; *altNamesArray* {; *modelsArray*}} )](../../commands-legacy/printers-list)<br/>The **PRINTERS LIST** command fills in the array(s) passed as parameter(s) with the names as well as, optionally, the locations or custom names and models of the available printers for the machine.|
|[**Printing page**  : Integer](../../commands-legacy/printing-page)<br/>**Printing page** returns the printing page number.|
|[**SET CURRENT PRINTER** ( *printerName* )](../../commands-legacy/set-current-printer)<br/>The **SET CURRENT PRINTER** command designates the printer to be used for printing with the current 4D application.|
|[**SET PRINT MARKER** ( *markNum* ; *position* {; *} )](../../commands-legacy/set-print-marker)<br/>The **SET PRINT MARKER** command enables the definition of the marker position during printing.|
|[**SET PRINT OPTION** ( *option* ; *value1* {; *value2*} )](../../commands-legacy/set-print-option)<br/>The **SET PRINT OPTION** command is used to modify, by programming, the value of a print option.|
|[**SET PRINT PREVIEW** ( *preview* )](../../commands-legacy/set-print-preview)<br/>**SET PRINT PREVIEW** allows you to programmatically check or uncheck the Preview on Screen option of the Print dialog box.|
|[**SET PRINTABLE MARGIN** ( *left* ; *top* ; *right* ; *bottom* )](../../commands-legacy/set-printable-margin)<br/>The **SET PRINTABLE MARGIN** command sets the values of various printing margins by using the [Print form](../commands/print-form.md), [PRINT SELECTION](print-selection.md) and [PRINT RECORD](print-record.md) commands.|
|[**Subtotal** ( *data* {; *pageBreak*} ) : Real](../../commands-legacy/subtotal)<br/>**Subtotal** returns the subtotal for *data* for the current or last break level.|

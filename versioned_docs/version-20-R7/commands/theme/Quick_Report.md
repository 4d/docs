---
id: Quick_Report
title: Quick Report
---
||
|---|
|[**QR BLOB TO REPORT** ( *area* ; *blob* )](../../commands-legacy/qr-blob-to-report)<br/>The QR BLOB TO REPORT command places the report contained in *blob* in the Quick Report area passed in *area*.|
|[**QR Count columns** ( *area* ) : Integer](../../commands-legacy/qr-count-columns)<br/>The QR Count columns command returns the number of columns present in the Quick Report *area*.|
|[**QR DELETE COLUMN** ( *area* ; *colNumber* )](../../commands-legacy/qr-delete-column)<br/>The QR DELETE COLUMN command deletes the column in *area* whose number was passed in *colNumber*.|
|[**QR DELETE OFFSCREEN AREA** ( *area* )](../../commands-legacy/qr-delete-offscreen-area)<br/>The QR DELETE OFFSCREEN AREA command deletes in memory the Quick Report offscreen *area* whose reference was passed as parameter.|
|[**QR EXECUTE COMMAND** ( *area* ; *command* )](../../commands-legacy/qr-execute-command)<br/>The **QR EXECUTE COMMAND** command executes the toolbar button command whose reference was passed in *command*.|
|[**QR Find column** ( *area* ; *expression* ) : Integer](../../commands-legacy/qr-find-column)<br/>The QR Find column command returns the number of the first column whose contents match the *expression* passed in parameter.|
|[**QR Get area property** ( *area* ; *property* ) : Integer](../../commands-legacy/qr-get-area-property)<br/>The **QR Get area property** command returns 0 if the interface element passed in *property* is not displayed; otherwise, it returns 1.|
|[**QR GET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )](../../commands-legacy/qr-get-borders)<br/>The **QR GET BORDERS** command allows you to retrieve the border style for a border of a given cell.|
|[**QR Get command status** ( *area* ; *command* {; *value*} ) : Integer](../../commands-legacy/qr-get-command-status)<br/>The **QR Get command status** command returns 0 if the *command* is disabled or 1 if it is enabled.|
|[**QR GET DESTINATION** ( *area* ; *type* {; *specifics*} )](../../commands-legacy/qr-get-destination)<br/>The **QR GET DESTINATION** command retrieves the output *type* of the report for the area whose reference was passed in *area*.|
|[**QR Get document property** ( *area* ; *property* ) : Integer](../../commands-legacy/qr-get-document-property)<br/>The **QR Get document property** command retrieves the display status for the print dialog box or the unit used for the document that are present in *area*.|
|[**QR Get drop column** ( *area* ) : Integer](../../commands-legacy/qr-get-drop-column)<br/>The QR Get drop column command returns a value depending on where the drop was performed:

* if the value is negative, it indicates a column number (i.e., -3 if the the drop was performed on column number 3)
* if the value is positive, it indicates that the drop was performed on a separator preceding the column (i.e., 3 if the drop was performed after column 2).|
|[**QR GET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )](../../commands-legacy/qr-get-header-and-footer)<br/>The QR GET HEADER AND FOOTER command retrieves the contents and size of the header or footer.|
|[**QR Get HTML template** ( *area* ) : Text](../../commands-legacy/qr-get-html-template)<br/>The QR Get HTML template command returns the HTML template currently used for the Quick Report *area*.|
|[**QR GET INFO COLUMN** ( *area* ; *colNum* ; *title* ; *object* ; *hide* ; *size* ; *repeatedValue* ; *displayFormat* {; *resultVar*} )](../../commands-legacy/qr-get-info-column)<br/>##### List mode 

The **QR GET INFO COLUMN** command retrieves the parameters of an existing column.|
|[**QR Get info row** ( *area* ; *row* ) : Integer](../../commands-legacy/qr-get-info-row)<br/>The **QR Get info row** command retrieves the display status of the row whose reference was passed in *row*.|
|[**QR Get report kind** ( *area* ) : Integer](../../commands-legacy/qr-get-report-kind)<br/>The **QR Get report kind** command retrieves the report type for the area whose reference was passed in *area*.|
|[**QR Get report table** ( *area* ) : Integer](../../commands-legacy/qr-get-report-table)<br/>The QR Get report table command returns the current table number for the report area whose reference was passed in *area*.|
|[**QR GET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )](../../commands-legacy/qr-get-selection)<br/>The QR GET SELECTION command returns the coordinates of the cell that is selected.|
|[**QR GET SORTS** ( *area* ; *aColumns* ; *aOrders* )](../../commands-legacy/qr-get-sorts)<br/>The QR GET SORTS command populates two arrays:

* *aColumns*  
This array includes all the columns that have a sort order.|
|[**QR Get text property** ( *area* ; *colNum* ; *rowNum* ; *property* ) : any](../../commands-legacy/qr-get-text-property)<br/>The **QR Get text property** command returns the property value of the text attributes for the cell determined by *colNum* and *RowNum*.|
|[**QR GET TOTALS DATA** ( *area* ; *colNum* ; *breakNum* ; *operator* ; *text* )](../../commands-legacy/qr-get-totals-data)<br/>##### List Mode 

The **QR GET TOTALS DATA** command retrieves the details of a specific break.|
|[**QR GET TOTALS SPACING** ( *area* ; *subtotal* ; *value* )](../../commands-legacy/qr-get-totals-spacing)<br/>The QR GET TOTALS SPACING command retrieves a space below a subtotal row.|
|[**QR INSERT COLUMN** ( *area* ; *colNumber* ; *object* )](../../commands-legacy/qr-insert-column)<br/>The QR INSERT COLUMN command inserts or creates a column at the specified position.|
|[**QR MOVE COLUMN** ( *area* ; *column* ; *newPos* )](../../commands-legacy/qr-move-column)<br/>The **QR MOVE COLUMN** command moves the column currently found at the *column* position to the *newPos* position.|
|[**QR NEW AREA** ( *ptr* )](../../commands-legacy/qr-new-area)<br/>The **QR NEW AREA** command creates a new Quick Report area and stores its reference number in the longint variable referenced by the *ptr* pointer.|
|[**QR New offscreen area**  : Integer](../../commands-legacy/qr-new-offscreen-area)<br/>The QR New offscreen area command creates a new Quick Report offscreen area and returns its reference.|
|[**QR ON COMMAND** ( *area* ; *methodName* )](../../commands-legacy/qr-on-command)<br/>The **QR ON COMMAND** command executes the 4D method passed in *methodName* when a Quick Report command is invoked by the user, by the selection of a menu command or by a click on a button.|
|[**QR REPORT** ( {*aTable* ;} *document* {; *methodName*}{; *} )](../../commands-legacy/qr-report)<br/>**QR REPORT** prints a report for *aTable*, created with the Quick Report editor.|
|[**QR REPORT TO BLOB** ( *area* ; *blob* )](../../commands-legacy/qr-report-to-blob)<br/>The QR REPORT TO BLOB command places the report whose reference was passed in *area* in a BLOB (variable or field).|
|[**QR RUN** ( *area* )](../../commands-legacy/qr-run)<br/>The **QR RUN** command executes the report *area* whose reference was passed as parameter with the Quick Report current settings, including the output type.|
|[**QR SET AREA PROPERTY** ( *area* ; *property* ; *value* )](../../commands-legacy/qr-set-area-property)<br/>The **QR SET AREA PROPERTY** command shows or hides the interface element whose reference is passed in *property*.|
|[**QR SET BORDERS** ( *area* ; *column* ; *row* ; *border* ; *line* {; *color*} )](../../commands-legacy/qr-set-borders)<br/>The **QR SET BORDERS** command sets the border style for a given cell.|
|[**QR SET DESTINATION** ( *area* ; *type* {; *specifics*} )](../../commands-legacy/qr-set-destination)<br/>The **QR SET DESTINATION** command sets the output *type* of the report for the area whose reference was passed in *area*.|
|[**QR SET DOCUMENT PROPERTY** ( *area* ; *property* ; *value* )](../../commands-legacy/qr-set-document-property)<br/>The QR SET DOCUMENT PROPERTY command displays the printing dialog or sets the unit used for the document.|
|[**QR SET HEADER AND FOOTER** ( *area* ; *selector* ; *leftTitle* ; *centerTitle* ; *rightTitle* ; *height* {; *picture* {; *pictAlignment*}} )](../../commands-legacy/qr-set-header-and-footer)<br/>The QR SET HEADER AND FOOTER command sets the contents and size of the header or footer.|
|[**QR SET HTML TEMPLATE** ( *area* ; *template* )](../../commands-legacy/qr-set-html-template)<br/>The **QR SET HTML TEMPLATE** command sets the HTML template currently used for the Quick Report *area*.|
|[**QR SET INFO COLUMN** ( *area* ; *colNum* ; *title* ; *object* ; *hide* ; *size* ; *repeatedValue* ; *displayFormat* )](../../commands-legacy/qr-set-info-column)<br/>##### List mode 

The **QR SET INFO COLUMN** command sets the parameters of an existing column.|
|[**QR SET INFO ROW** ( *area* ; *row* ; *hide* )](../../commands-legacy/qr-set-info-row)<br/>The **QR SET INFO ROW** command shows/hides the row whose reference was passed in *row*.|
|[**QR SET REPORT KIND** ( *area* ; *type* )](../../commands-legacy/qr-set-report-kind)<br/>The **QR SET REPORT KIND** command sets the report *type* for the area whose reference was passed in *area*.|
|[**QR SET REPORT TABLE** ( *area* ; *aTable* )](../../commands-legacy/qr-set-report-table)<br/>The QR SET REPORT TABLE command sets the current table for the report area whose reference was passed in *area* to the table whose number was passed in *aTable*.|
|[**QR SET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )](../../commands-legacy/qr-set-selection)<br/>The QR SET SELECTION command highlights a cell, a row, a column or the entire *area* as you would with a mouse click.|
|[**QR SET SORTS** ( *area* ; *aColumns* {; *aOrders*} )](../../commands-legacy/qr-set-sorts)<br/>The QR SET SORTS command sets the sort orders for the columns in the report whose reference is passed in *area*.|
|[**QR SET TEXT PROPERTY** ( *area* ; *colNum* ; *rowNum* ; *property* ; *value* )](../../commands-legacy/qr-set-text-property)<br/>The **QR SET TEXT PROPERTY** command sets the text attributes for the cell determined by *colNum* and *rowNum*.|
|[**QR SET TOTALS DATA** ( *area* ; *colNum* ; *breakNum* ; operator | value )](../../commands-legacy/qr-set-totals-data)<br/>**Note:** This command cannot create a subtotal.|
|[**QR SET TOTALS SPACING** ( *area* ; *subtotal* ; *value* )](../../commands-legacy/qr-set-totals-spacing)<br/>The QR SET TOTALS SPACING command sets a space below a subtotal row.|

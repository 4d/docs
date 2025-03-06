---
id: Forms
title: Forms
---
||
|---|
|[**Current form name**  : Text](../../commands-legacy/current-form-name)<br/>The **Current form name** command returns the name of the current form defined for the process.|
|[**Form**  : Object](../../commands-legacy/form)<br/>The **Form** command returns the object associated with the current form, if any.|
|[**FORM Convert to dynamic** ( {*aTable* ;} *formName* ) : Object](../../commands-legacy/form-convert-to-dynamic)<br/>The **FORM Convert to dynamic** command converts the *formName* (classic form) to a dynamic form and returns it in an object.|
|[**FORM FIRST PAGE**](../../commands-legacy/form-first-page)<br/>FORM FIRST PAGE changes the currently displayed form page to the first form page.|
|[**FORM Get color scheme**  : Text](../../commands-legacy/form-get-color-scheme)<br/>The **FORM Get color scheme** command returns the name of the actual color scheme of the currently displayed form.|
|[**FORM Get current page** {( * )} : Integer](../../commands-legacy/form-get-current-page)<br/>The **FORM Get current page** command returns the number of the currently displayed form page or of the current form loaded by the [FORM LOAD](form-load.md) command.|
|[**FORM GET ENTRY ORDER** ( *objectNames* {; pageNumber | *} )](../../commands-legacy/form-get-entry-order)<br/>The **FORM GET ENTRY ORDER** command returns in *objectNames* the sorted names of objects that define the form entry order.|
|[**FORM GET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )](../../commands-legacy/form-get-horizontal-resizing)<br/>The FORM GET HORIZONTAL RESIZING command returns the horizontal resizing properties of the current form in the *resize*, *minWidth* and *maxWidth* variables.|
|[**FORM GET OBJECTS** ( *objectsArray* {; *variablesArray* {; *pagesArray*}} {; formPageOption | *} )](../../commands-legacy/form-get-objects)<br/>The FORM GET OBJECTS command returns the list of all objects present in the current form in the form of (an) array(s).|
|[**FORM GET PROPERTIES** ( {*aTable* ;} *formName* ; *width* ; *height* {; *numPages* {; *fixedWidth* {; *fixedHeight* {; *title*}}}} )](../../commands-legacy/form-get-properties)<br/>The FORM GET PROPERTIES command returns the properties of the form *formName*.|
|[**FORM GET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )](../../commands-legacy/form-get-vertical-resizing)<br/>The FORM GET VERTICAL RESIZING command returns the vertical resizing properties of the current form in the *resize*, *minHeight* and *maxHeight* variables.|
|[**FORM GOTO PAGE** ( *pageNumber* {; *} )](../../commands-legacy/form-goto-page)<br/>**FORM GOTO PAGE** changes the currently displayed form page to the form page specified by *pageNumber*.|
|[**FORM LAST PAGE**](../../commands-legacy/form-last-page)<br/>FORM LAST PAGE changes the currently displayed form page to the last form page.|
|[**FORM LOAD** ( {*aTable* ;} *form* {; *formData*}{; *} )](../../commands-legacy/form-load)<br/>The **FORM LOAD** command is used to load the *form* in memory in the current process along with *formData* (optional) in order to print its data or parse its contents.|
|[**FORM NEXT PAGE**](../../commands-legacy/form-next-page)<br/>FORM NEXT PAGE changes the currently displayed form page to the next form page.|
|[**FORM PREVIOUS PAGE**](../../commands-legacy/form-previous-page)<br/>FORM PREVIOUS PAGE changes the currently displayed form page to the previous form page.|
|[**FORM SCREENSHOT** ( {{*aTable* ;} *formName* ;} *formPict* {; *pageNum*} )](../../commands-legacy/form-screenshot)<br/>The FORM SCREENSHOT command returns a form as a picture.|
|[**FORM SET ENTRY ORDER** ( *objectNames* {; *pageNumber*} )](../../commands-legacy/form-set-entry-order)<br/>The **FORM SET ENTRY ORDER** command allows to set dynamically the entry order of the current form for the current process based upon the *objectNames* array.|
|[**FORM SET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )](../../commands-legacy/form-set-horizontal-resizing)<br/>The FORM SET HORIZONTAL RESIZING command allows you to change the horizontal resizing properties of the current form through programming.|
|[**FORM SET INPUT** ( {*aTable* ;} *form* {; *userForm* {; *}} )](../../commands-legacy/form-set-input)<br/>The **FORM SET INPUT** command sets the current input form for *aTable* to *form*, or *userForm*.|
|[**FORM SET OUTPUT** ( {*aTable* ;} *form* {; *userForm*} )](../../commands-legacy/form-set-output)<br/>The **FORM SET OUTPUT**  command sets the current output form for *table* to *form*, or *userForm*.|
|[**FORM SET SIZE** ( {*object* ;} *horizontal* ; *vertical* {; *} )](../../commands-legacy/form-set-size)<br/>The **FORM SET SIZE** command allows you to change the size of the current form by programming.|
|[**FORM SET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )](../../commands-legacy/form-set-vertical-resizing)<br/>The **FORM SET VERTICAL RESIZING** command allows you to change the vertical resizing properties of the current form through programming.|
|[**FORM UNLOAD**](../../commands-legacy/form-unload)<br/>The **FORM UNLOAD** command releases from memory the current form designated using the [FORM LOAD](form-load.md) command.|

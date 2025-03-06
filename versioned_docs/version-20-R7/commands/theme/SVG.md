---
id: SVG
title: SVG
---
||
|---|
|[**SVG EXPORT TO PICTURE** ( *elementRef* ; *pictVar* {; *exportType*} )](../../commands-legacy/svg-export-to-picture)<br/>The **SVG EXPORT TO PICTURE** command saves an SVG format picture contained in an XML tree in the picture field or variable indicated by the *pictVar* parameter.|
|[**SVG Find element ID by coordinates** ( {* ;} *pictureObject* ; *x* ; *y* ) : Text](../../commands-legacy/svg-find-element-id-by-coordinates)<br/>The **SVG Find element ID by coordinates** command returns the ID ("id" or "xml:id" attribute) of the XML element found at the location set by the coordinates (x,y) in the SVG picture designated by the *pictureObject* parameter.|
|[**SVG Find element IDs by rect** ( {* ;} *pictureObject* ; *x* ; *y* ; *width* ; *height* ; *arrIDs* ) : Boolean](../../commands-legacy/svg-find-element-ids-by-rect)<br/>The **SVG Find element IDs by rect** command fills the Text or Alpha *arrIDs* array with the IDs ("id" or "xml:id" attribute) of the XML elements whose bounding rectangle intersects with the selection rectangle at the location specified by the *x* and *y* parameters.|
|[**SVG GET ATTRIBUTE** ( {* ;} *pictureObject* ; element_ID ; *attribName* ; *attribValue* )](../../commands-legacy/svg-get-attribute)<br/>The SVG GET ATTRIBUTE command is used to get the current value of the *attribName* attribute in an object or an SVG picture.|
|[**SVG SET ATTRIBUTE** ( {* ;} *pictureObject* ; element_ID ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} {; *})](../../commands-legacy/svg-set-attribute)<br/>The **SVG SET ATTRIBUTE** command is used to modify the value of an existing attribute in the SVG rendering tree of a displayed image or in the internal DOM tree of an image.|
|[**SVG SHOW ELEMENT** ( {* ;} *pictureObject* ; *id* {; *margin*} )](../../commands-legacy/svg-show-element)<br/>The SVG SHOW ELEMENT command moves the *pictureObject* SVG document in order to show the element whose "id" attribute is specified by the *id* parameter.|

---
id: exporting-to-svg-format
title: Exporting to SVG format
displayed_sidebar: docs
---

You can export 4D Write Pro document pages to SVG format using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. This page provides additional details and notes about SVG export. 

### SVG Rendering 

SVG images and text boxes are rendered according to page settings displayed in Page view mode. The following properties are taken into account:

* Background attributes (if exported)
* Borders
* Margins
* Orientation
* Padding
* Page size
* Sections (SVG rendering takes into account the section attributes, but the sections themselves are not exported)

Parts of the document that are exported to SVG:

* Body
* Inline images
* Text boxes
* Title (metadata wk title)

Parts of the document that are exported to SVG depending on the *option* parameter:

* Headers
* Footers
* References or values (regarding values, the wk recompute formulas option determines if the formulas are evaluated before export)
* Background colors
* Images defined as background images and anchored images

The following elements are not exported to SVG:

* Fonts (converted to CSS styles, but not embedded in the exported SVG. See *Font management*)
* Links to bookmarks (rendered but not active)
* Links to URLs (rendered but not active)
* Customized formula highlighting
* Text boxes anchored to embedded view mode
* Metadata  
   * Author  
   * Subject  
   * Creation date  
   * Modification date

### Font management 

Fonts are not embedded in the exported SVG, so text will be rendered correctly only if the font family and style are supported on the platform where the SVG image is rendered. 

If you want to make sure that the rendering will be equivalent on all platforms, even when fonts are not available, you can use the wk import google fonts option when exporting a 4D Write Pro document.

Imported Google fonts override native fonts when the SVG is rendered. If you intend to render the SVG image on the same platform, we recommend not using the wk import google fonts option as rendering with native fonts is always better.

**Note:** Only bold and italic styles are preserved. 100% compatibility between native font styles and font style definition in CSS (and thus SVG) is not guaranteed. Export to PDF is more suited for distribution to all platforms or for better WYSIWYG support for fonts, as fonts are embedded in PDF.

### Example 

This example exports a document page to SVG format and creates an image preview using [SVG EXPORT TO PICTURE](../../commands/svg-export-to-picture).

```4d
 var $preview : Picture
 var $options : Object
 var $svgRoot : Text
 var $options : Object
 
 $options:=New object
 $options[wk max picture DPI]:=96
 WP EXPORT VARIABLE(wpDoc;$text;wk svg;$options)
 $svgRoot:=DOM Parse XML variable($text;False)
 SVG EXPORT TO PICTURE($svgRoot;$preview;Own XML data source)
```
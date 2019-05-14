---
id: toolbarButton
title: Toolbar Button
---

**Overview**

This style of button is primarily intended for integration in a toolbar.

 - *Windows* - its highlight appears when the mouse rolls over it. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. 
 - *macOS* - the highlight of the button never appears. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.
 

ADD PICTURE
<p>
 
<hr>
<hr>
 **Properties**
 
|Property|Data Type|Description|Possible values
|---|:---:|---|---|
|Bold|boolean|Sets the selected text to appear darker and heavier.|TRUE/FALSE
|Bottom|longint |Position of the button on the bottom of the form.  | |
|Button Style|text |Defines the the style of the button|Toolbar Button| |
|Focusable|boolean|Enables the object to have the focus (and can be activated by the keyboard).|TRUE / FALSE|
|Font|text|Name of font used in the button.|Any from the presented list|
|Font color|text|Font color used in the button.|any css value, "transparent", "automatic"|
|Height|longint|Defines the button's vertical size.|minimum:0|
|Horizontal Sizing| text |Specifies if the horizontal size of the button should be moved or resized the form is resized.|"None"<br>The button size/position will not change,<p>"Grow"<br>The size of the button will change in accordance with the form, <p>"Move"<br>The position of the button will change in accordance with the form |
|Italic|boolean|Sets the selected text to slant slightly to the right.|TRUE/FALSE
|Left|longint |Position of the button on the left of the form. |
|Not rendered|boolean|  |TRUE/FALSE| 
|Number of States|longint|Sets the exact number of states present in the picture.|minimum: 1
|Object Name|text|Name of the button|
|Picture pathname|text|The pathname of the picture.|
|popupPlacement|text|Allows displaying a symbol that appears as a triangle in the button, which indicates that there is a pop-up menu attached.|"None",<p><br>"Linked" <br>a simple click on the button only displays the pop-up menu <p>"Separated" <br>clicking on the left part of the button directly executes the current action of the button
|Right|longint |Position of the button on the left of the form. ||
|Shortcut|text|Defines the settings for a special meaning key, including the<br> <ul><li>key to be used,</li> <li>operating system,</li> <li>keys per operating system</li></ul> |key<br>"[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]" <br><p> OS<br> Specifies the system to use, Windows or Mac. <p>  OS CMD/ctrl<br>Designates the Control key (Windows), Designates the Command key (Mac)  <p> OS Alt<br>Designates the Alt key  |
|Title|text|Text to display on the button.|
|Title/Picture Position|text |Allows modifying the relative location of the button title in relation to an associated icon. Has no effect when the button contains only a title (no associated picture) or a picture (no title).|"Left", "Top", "Right", "Bottom", "Middle"
|Top|longint |Position of the button on the top of the form.  |
|Type|text|Designates the data type of the form object.|Button|
|Underline|boolean|Sets the selected text to have a line running beneath it.|TRUE/FALSE
|Variable or Expression|text| |
|Vertical Sizing| text |Specifies if the horizontal size of the button should be moved or resized the form is resized.|"None"<br>The button size/position will not change,<p>"Grow"<br>The size of the button will change in accordance with the form, <p>"Move"<br>The position of the button will change in accordance with the form|
|Visibility|text|Allows hiding the object in the Application environment.|"visible", "hidden"|
|Width|longint |Defines the button's horizontal size.|minimum: 0 |
|With pop-up menu|text |Allows displaying a symbol that appears as a triangle in the button to indicate the presence of an attached pop-up menu. <p><br> **Note:** the “With Pop-up Menu” property only manages the graphic aspect of the button. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using form events and the **Dynamic pop up menu** and **Pop up menu** commands <p>These options also influence the handling of form events by the button |"None",<p><br>"Linked" <br>a simple click on the button only displays the pop-up menu <p>"Separated" <br>clicking on the left part of the button directly executes the current action of the button

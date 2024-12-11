---
id: svg-set-attribute
title: SVG SET ATTRIBUTE
slug: /commands/svg-set-attribute
displayed_sidebar: docs
---

<!--REF #_command_.SVG SET ATTRIBUTE.Syntax-->**SVG SET ATTRIBUTE** ( {* ;} *pictureObject* ; element_ID ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} {; *})<!-- END REF-->
<!--REF #_command_.SVG SET ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, pictureObject is an object name (string) <br/>If omitted, pictureObject is a variable |
| pictureObject | Picture | &#8594;  | Object name (if * specified) or <br/>Variable or field (if * omitted) |
| element_ID | Text | &#8594;  | ID of element where one or more attributes are set |
| attribName | Text | &#8594;  | Attribute to be specified |
| attribValue | Text, Integer | &#8594;  | New value of attribute |
| * | Operator | &#8594;  | If passed = modify SVG image itself |

<!-- END REF-->

#### Description 

<!--REF #_command_.SVG SET ATTRIBUTE.Summary-->The **SVG SET ATTRIBUTE** command is used to modify the value of an existing attribute in the SVG rendering tree of a displayed image or in the internal DOM tree of an image.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *pictureObject* parameter is an object name (string). In this case, the command applies to the parameters of the rendered image attached to the object (note that the parameters and therefore the rendered image of the object are only created if the **SVG SET ATTRIBUTE** command is called at least once).   
If you do not pass the *\** parameter, you indicate that the *pictureObject* parameter is a variable or a field. Therefore, you pass a variable (object variable only) or field reference instead of a string. In this case, the command applies to the rendered images of all the objects that use the variable or the field.

By default, this command modifies only the rendered image in the form object(s) matching *pictureObject* in the form context, and does nothing if no object uses it. If you pass the second *\** as the last parameter, the command modifies the SVG picture itself, even if no form object uses it. In this case, all existing or future form objects that use the SVG picture will be modified, in all contexts. 

**Notes:**

* The last \* is useless if the *pictureObject* parameter is an object name, it is taken into account only if *pictureObject* is a variable or field.
* To change the data source of an SVG image, you can also use the *XML DOM* commands or the **4D SVG component** provided by 4D.

The *element\_ID* parameter is used to specify the ID ("id" or "xml:id" attribute) of the element whose attribute(s) you want to modify.

In the *attribName* and *attribValue* parameters, pass, respectively, the attribute to set and its value (as variables, fields or literal values). You can pass as many attribute/value pairs as you want. 

The **SVG SET ATTRIBUTE** command is used to modify (but not to add or delete) most of the SVG attributes, such as, for instance, 'fill', 'opacity', 'font-family', and so on. For a complete definition of the SVG attributes, please refer to the reference documents available on the Internet, for example: *http://www.w3.org/TR/SVG11/attindex.html*. The rendered image is updated immediately; the modifications are transferred on to the child elements for inherited styles. 

Note that for technical reasons, the attributes of certain elements as well as certain attributes cannot be modified. The following table lists the elements that can be modified, and those that cannot, as well as the attributes that cannot be modified:

**Elements whose attributes can be modified**   

| svg                                                                                              | Restrictions :                                                                                                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| \- "width" and "height" cannot be modified(1)                                                    |                                                                                                                          |
| \- "viewBox" can only be modified if "width" and "height" are specified in the original document |                                                                                                                          |
| g                                                                                                |                                                                                                                          |
| defs                                                                                             |                                                                                                                          |
| use                                                                                              |                                                                                                                          |
| filter                                                                                           | Restriction: fe\_xxx child elements cannot be modified                                                                   |
| circle                                                                                           |                                                                                                                          |
| ellipse                                                                                          |                                                                                                                          |
| line                                                                                             |                                                                                                                          |
| polyline                                                                                         |                                                                                                                          |
| polygon                                                                                          |                                                                                                                          |
| path                                                                                             |                                                                                                                          |
| rect                                                                                             |                                                                                                                          |
| text, tspan, textArea                                                                            | The specific "4d-text" attribute is used to modify the text of a "text", "tspan" or "textArea" element (see the example) |
| Image                                                                                            |                                                                                                                          |

**Elements whose attributes cannot be modified**   

| linearGradient, radialGradient, Stop, solidColor, marker, symbol, clipPath, filter et les éléments commençant par fe, style, pattern | This group designates all the elements that can be referenced or contained in an element that can be referenced. This means that it is not possible, for example, to redefine the attributes of a gradient (but it is possible to change the gradient used). Similarly, to change a black color marker to a red marker, it is necessary to define both markers in the SVG document (one black and one red) and to select one of them. It is not possible either for example to modify the color of a rectangle if its parent is a symbol or marker element |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Attributes that cannot be modified**  

| id or xml:id       |                                                      |
| ------------------ | ---------------------------------------------------- |
| lang or xml:lang   |                                                      |
| class or xml:class |                                                      |
| width, height      | Concerns the attributes of the 'svg' element only(1) |

(1) These attributes cannot be modified because they define and structure the resulting image. The *width* and *height* attributes of the *svg* element are used to define the initial dimensions of the picture in 4D and these dimensions must remain constant after the picture is created (it is however possible to modify the dimensions of the resulting picture with the [TRANSFORM PICTURE](transform-picture.md) command of 4D).

You can also refer to the description of the [SVG GET ATTRIBUTE](svg-get-attribute.md) command to see the list of 4D attributes that are reserved and dedicated to animation.

If you attempt to modify the attribute of an element that is not supported or one of its child elements, the command does nothing and no error is generated.

If the command is not executed in the context of a form or if an invalid *pictureObject* is passed, the *OK* variable is set to 0\. If the command has been executed correctly, it is set to 1.

#### Example 

Modification of the contents of a Text type element:

```4d
 SVG SET ATTRIBUTE(*;picture_object_name;text_element_ID;"4d-text";"This is a text")
```

**Note:** There is no namespace in order that the attribute could be used in a CSS style sheet without risk of conflict. 

#### See also 

[SVG GET ATTRIBUTE](svg-get-attribute.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1055 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||



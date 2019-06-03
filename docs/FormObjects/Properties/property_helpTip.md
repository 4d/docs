---
id: property_helpTip
title: Property: Help Tip
---

### Description

This property allows displaying help messages associated with fields and active objects in your forms.
<p> 
**Note:** Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)** command.

![](../../assets/en/property_helpTip.png)  

You can associate a help tip with any active object in your form by using the Help Tip drop-down list found in the "Help" theme of the Property List. You can either:

- Choose an existing help tip. The help tip must have been previously specified in the [Help tips](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) editor of 4D. 
- Enter the help message directly in the area. This allows you to take advantage of XLIFF architecture. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). You can also use 4D references ([see Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).

The message you select or enter will appear as a help tip for the field or object selected in the form. The display delay and maximum duration of help tips can be controlled using the ``Tips delay`` and ``Tips duration`` selectors of the **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)** command.

To delete the association of a help tip with the selected object, choose **None** in the Property List.

**Note:** In macOS, displaying help tips is not supported in pop-up type windows.

You can also associate help messages with form objects in two other ways:

- at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. structure level (lowest priority)
2. form editor level
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)


### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|tooltip|text | additional information  to help a user|



### Objects Supported

|Type|Title|
|---|---|
|Button|[Regular](../Buttons/button_overview.md#regular) <br>
|Button|[Toolbar](../Buttons/button_overview.md#toolbar)<br>
|Button|[Bevel](../Buttons/button_overview.md#bevel)<br>
|Button|[Rounded Bevel](../Buttons/button_overview.md#Rounded-bevel)<br> 
|Button|[OS X Gradient](../Buttons/button_overview.md#os-x-gradient)<br> 
|Button|[OS X Textured](../Buttons/button_overview.md#os-x-textured)<br> 
|Button|[Office XP](../Buttons/button_overview.md#office-XP)<br> 
|Button|[Help](../Buttons/button_overview.md#help)<br> 
|Button|[Circle](../Buttons/button_overview.md#circle)<br> 
|Button|[Custom](../Buttons/button_overview.md#custom)<br> 




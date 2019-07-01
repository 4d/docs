---
id: propertiesHelp
title:Help Properties
---

## Help Tip

This property allows displaying help messages associated with fields and active objects in your forms.
<p> 

>Help tips can be globally disabled or enabled for the application using the Tips enabled selector of the [**SET DATABASE PARAMETER**](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html) command.

![](assets/en/FormObjects/property_helpTip.png)  

You can associate a help tip with any active object in your form by using the Help Tip drop-down list found in the "Help" theme of the Property List. You can either:

- Choose an existing help tip. The help tip must have been previously specified in the [Help tips](https://doc.4d.com/4Dv17R5/4D/17-R5/Help-tips.200-4163423.en.html) editor of 4D. 
- Enter the help message directly in the area. This allows you to take advantage of XLIFF architecture. You can enter an XLIFF reference here in order to display a message in the application language (for more information about XLIFF, refer to [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html). You can also use 4D references ([see Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html)).

The message you select or enter will appear as a help tip for the field or object selected in the form. The display delay and maximum duration of help tips can be controlled using the ``Tips delay`` and ``Tips duration`` selectors of the **[SET DATABASE PARAMETER](https://doc.4d.com/4Dv17R5/4D/17-R5/SET-DATABASE-PARAMETER.301-4128139.en.html)** command.

To delete the association of a help tip with the selected object, choose **None** in the Property List.

>In macOS, displaying help tips is not supported in pop-up type windows.

You can also associate help messages with form objects in two other ways:

- at the level of the database structure (fields only). In this case, the help tip of the field is displayed in every form where it appears. For more information, refer to “Help Tips” in [Field properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Field-properties.300-4163580.en.html).
- using the **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command, for the current process.

When different tips are associated with the same object in several locations, the following priority order is applied:

1. structure level (lowest priority)
2. form editor level
3. **[OBJECT SET HELP TIP](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-HELP-TIP.301-4128221.en.html)** command (highest priority)



#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|tooltip|text | additional information  to help a user|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) - [Picture](pictureButton_overview.md)|




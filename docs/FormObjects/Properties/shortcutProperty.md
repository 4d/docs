---
id: shortcutProperty
title: Shortcut
---

Defines the settings for a special meaning key, including the<br> <ul><li>key to be used,</li> <li>operating system,</li> <li>keys per operating system</li></ul>

![alt-text](assets/en/shortcut.en.png)


<p>
<hr>
<hr>

**Objects Supported**

[Regular Button](regularButton.md) <br>
[Toolbar Button](toolbarButton.md)<br>
[Bevel Button](bevelButton.md)<br>
[Rounded Bevel Button](roundedBevelButton.md)<br> 
[OS X Gradient Button](osxGradientButton.md)<br> 
[OS X Textured Button](osxTexturedButton.md)<br> 
[Office XP Button](officeXPButton.md)<br> 
[Help Button](helpButton.md)<br> 
[Circle Button](circleButton.md)<br> 
[Custom Button](customButton.md)<br> 

<p>
<hr>
<hr>

**JSON Grammar**

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|shortcutAccel	|boolean	|TRUE / FALSE|
|shortcutAlt	|boolean	|TRUE / FALSE|
|shortcutCommand	|boolean	|TRUE / FALSE|
|shortcutControl	|boolean	|TRUE / FALSE|
|shortcutKey	|string	|"[F1]" -> "[F15]"<p><br>"[Return]"<p> "[Enter]"<p> "[Backspace]" <p>"[Tab]"<p> "[Esc]"<p> "[Del]"<p> "[Home]"<p> "[End]"<p> "[Help]"<p> "[Page up]"<p> "[Page down]" <p>"[left arrow]"<p> "[right arrow]"<p> "[up arrow]"<p> "[down arrow]"|



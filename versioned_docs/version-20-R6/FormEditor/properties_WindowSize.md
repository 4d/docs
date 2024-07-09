---
id: windowSize
title: Window Size
---


## Fixed Height 


If you select this option, the window height will be locked and it will not be possible for the user to resize it. 

If this option is not selected, the width of the form window can be modified. In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowSizingY| string|"fixed", "variable"|


--- 

## Fixed Width 


If you select this option, the window width will be locked and it will not be possible for the user to resize it. 

If this option is not selected, the width of the form window can be modified. In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowSizingX| string|"fixed", "variable"|

--- 



## Maximum Height, Minimum Height

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set. 

##### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMinHeight|number|integer value|
|windowMaxHeight|number|integer value|


## Maximum Width, Minimum Width

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set. 


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMinWidth|number|integer value|
|windowMaxWidth|number|integer value|


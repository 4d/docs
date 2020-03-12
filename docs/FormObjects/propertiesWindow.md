---
id: propertiesWindow
title: Window Size
---
 
---

## Fixed Height  

If you check this option, the window height will be locked and it will not be possible for the user to resize it. If this option is not checked, the height of the form window can be modified. In this case, the [Minimum Height](#minimum-height) and [Maximum Height](#maximum-height) entry areas can be used to determine the resizing limits.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowSizingX|string|"fixed", "variable"|



---

## Fixed Width  

If you check this option, the window width will be locked and it will not be possible for the user to resize it. If this option is not checked, the width of the form window can be modified. In this case, the [Minimum Width](#minimum-width) and [Maximum Width](#minimum-width) entry areas can be used to determine the resizing limits.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowSizingY|string|"fixed", "variable"|


---


## Maximum Height  

Designates the largest allowable height.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMaxHeight|integer|minimum: 0|



---


## Maximum Width  


Designates the largest allowable width.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMaxWidth|integer|minimum: 0|


---


## Minimum Height  

Designates the smallest allowable height.



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMinHeight|integer|minimum: 0|
|windowMinWidth|integer	|minimum: 0|

---







## Minimum Width  

Designates the smallest allowable width.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowMinWidth|integer	|minimum: 0|


---








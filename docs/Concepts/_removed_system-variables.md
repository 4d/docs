---
id: system-variables
title:System Variables
---

4D maintains a number of variables called **system variables**. These variables let you monitor many operations. System variables are all process variables, accessible only from within a process.

The following table provides the list of 4D system variables:

|Variable name|Type|Description|
|---|---|---|
|`OK`|Longint|Set to 1 when an operation is successfully executed, and set to 0 when the operation fails. Was the record saved? Has the importing operation been completed? Did the user click the OK button? Many 4D commands modify the value of the OK system variable. Refer to the description of each command to find out whether it affects this system variable.|  
|`Document`|Text|Document contains the "long name" (access path+name) of the last file opened or created using 4D. Refer to the description of each command to find out whether it affects this system variable.|  
|`FldDelimit`|Longint|Contains the character code that will be used as a field separator when importing or exporting text. By default, this value is set to 9, which is the character code for the Tab key. To use a different field separator, assign a new value to `FldDelimit`.|
|`RecDelimit`|Longint|Contains the character code that will be used as a record separator when importing or exporting text. By default, this value is set to 13, which is the character code for the Carriage Return key. To use a different record separator, assign a new value to RecDelimit.|  
|`Error`|Longint|Can only be used in an error-catching method installed by the `ON ERR CALL` command. Contains the error code.|
|`Error method`|Text|Can only be used in an error-catching method installed by the `ON ERR CALL` command. Contains the full name of the method that triggered the error.|
|`Error line`|Longint|Can only be used in an error-catching method installed by the `ON ERR CALL` command. Contains the line number at the origin of the error in the method that triggered the error.|
|`Error formula`|Text|Can only be used in an error-catching method installed by the `ON ERR CALL` command. Contains the formula of the 4D code (raw text) which is at the origin of the error. The text of the formula is expressed in the current language of the 4D code. If the source code responsible for the error cannot be found, `Error formula` contains an empty string. This case can occur in compiled databases when: <br>- the source code was deleted from the compiled structure using the application builder. <br>- the source code is available but the database was compiled without the Range Checking option.|
|`MouseDown`|Longint|Can only be used in a method installed by the `ON EVENT CALL` command. Set to 1 when the mouse button is pushed. Otherwise, it is set to 0.|
|`MouseX` and `MouseY`|Longint|- In case of use in a method installed by the `ON EVENT CALL` command: if the event is a `MouseDown` (`MouseDown=1`), `MouseX` and `MouseY` are respectively set to the vertical and horizontal coordinates of the location where the click took place. Both values are expressed in pixels and use the local coordinate system of the window.<br>- In case of picture fields or variables, `MouseX` and `MouseY` return the local coordinates of a mouse click in the `On Clicked`, `On Double Clicked` and `On Mouse Up` form events. Local coordinates of the mouse cursor are also returned in the `On Mouse Enter` and `On Mouse Move` form events. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0). For more information, please refer to the `SVG Find element ID by coordinates` command. |
|`KeyCode`|Longint|Can only be used in a method installed by the `ON EVENT CALL` command. Set to the character code of the key that was just pressed. If the key is a function key, `KeyCode` is set to a special code. 4D provides predefined constants for the major character codes and for Function Keys. |
|`Modifiers`|Longint (bit field)|Can only be used in a method installed by the `ON EVENT CALL` command. Set to the keyboard modifier keys (**Ctrl/Command**, **Alt/Option**, **Shift**, **Caps Lock**). See the command `ON EVENT CALL`.|
|`MouseProc`|Longint|Can only be used in a method installed by the `ON EVENT CALL` command. Contains the process reference number of the process in which the event occurred (mouse click).|
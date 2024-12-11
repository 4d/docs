---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->
<!--REF #_command_.Command name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| command | Integer | &#8594;  | Command number |
| info | Integer | &#8592; | Thread-safety property of command |
| theme | Text | &#8592; | Language theme of command |
| Function result | Text | &#8592; | Localized command name |

<!-- END REF-->

#### Description 

<!--REF #_command_.Command name.Summary-->The **Command name** command returns the name as well as (optionally) the properties of the command whose command number you pass in *command*.<!-- END REF-->The number of each command is indicated in the Explorer as well as in the Properties area of this documentation.

**Compatibility note:** Since a command name may vary from one 4D version to the next (commands renamed), this command was used in previous versions of the program to designate a command directly by means of its number, especially in non-tokenized portions of code. This need has diminished over time as 4D continues to evolve because, for non-tokenized statements (formulas), 4D now provides a token syntax. This syntax allows you to avoid potential problems due to variations in command names as well as other elements such as tables, while still being able to type these names in a legible manner (for more information about this point, refer to the *Using tokens in formulas* section). Furthermore, by default, the English language version is used starting with 4D v15; however, the "Use regional system settings" option on the [Is a list](is-a-list.md) of the Preferences allows you to continue using the French language in a French version of 4D.

Two optional parameters are available:

* *info*: properties of the command. The returned value is a *bit field*, where currently only the first bit (bit 0) is meaningful. It is set to 1 if the command is thread-safe (i.e., compatible with execution in a preemptive process) and 0 if it is thread-unsafe. Only thread-safe commands can be used in preemptive processes. For more information about this point, refer to the *Preemptive 4D processes* section.
* *theme*: returns the name of the 4D language theme for the command.

The **Command name** command sets the *OK* variable to 1 if *command* corresponds to an existing command number, and to 0 otherwise. Note, however, that some existing commands have been disabled, in which case **Command name** returns an empty string (see last example). 

#### Example 1 

The following code allows you to load all valid 4D commands in an array:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) //command number exists
       If(Length($Txt_command)>0) //command is not disabled
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //end of existing commands
```

#### Example 2 

In a form, you want a drop-down list populated with the basic summary report commands. In the object method for that drop-down list, you write:

```4d
 Case of
    :(Form event code=On Before)
       ARRAY TEXT(asCommand;4)
       asCommand{1}:=Command name(1)
       asCommand{2}:=Command name(2)
       asCommand{3}:=Command name(4)
       asCommand{4}:=Command name(3)
  // ...
 End case
```

In the English version of 4D, the drop-down list will read: Sum, Average, Min, and Max. In the French version\*, the drop-down list will read: Somme, Moyenne, Min, and Max.

\*with a 4D application configured to use the French programming language (see compatibility note)

#### Example 3 

You want to create a method that returns **True** if the command, whose number is passed as parameter, is thread-safe, and **False** otherwise.

```4d
  //Is_Thread_Safe project method
  //Is_Thread_Safe(numCom) -> Boolean
 
 var $1;$threadsafe : Integer
 var $name : Text
 var $0 : Boolean
 $name:=Command name($1;$threadsafe;$theme)
 If($threadsafe ?? 0) //if the first bit is set to 1
    $0:=True
 Else
    $0:=False
 End if
```

Then, for the "SAVE RECORD" command (53) for example, you can write:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // returns True
```

#### See also 

[EXECUTE FORMULA](execute-formula.md)  
*Preemptive 4D processes*  

#### Properties
|  |  |
| --- | --- |
| Command number | 538 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||



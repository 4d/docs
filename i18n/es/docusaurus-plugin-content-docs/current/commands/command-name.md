---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->

<!--REF #_command_.Command name.Params-->

| Parámetros | Tipo    |                             | Descripción                     |
| ---------- | ------- | --------------------------- | ------------------------------- |
| comando    | Integer | &#8594; | Número de comando               |
| info       | Integer | &#8592; | Propiedad del comando a evaluar |
| theme      | Text    | &#8592; | Tema del lenguaje del comando   |
| Resultado  | Text    | &#8592; | Localized command name          |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                   |
| ----------- | -------------------------------- |
| 20 R9       | Soporte de la propiedad obsoleta |

</details>

## Descripción

El comando **Command name** <!--REF #_command_.Command name.Summary-->devuelve el nombre así como (opcionalmente) las propiedades del comando cuyo número de comando pasa en *command*.<!-- END REF--> El número de cada comando se indica en el Explorador así como en el área Propiedades de esta documentación.

**Compatibility note:** A command name may vary from one 4D version to the next (commands renamed), this command was used in previous versions to designate a command directly by means of its number, especially in non-tokenized portions of code. This need has diminished over time as 4D continues to evolve because, for non-tokenized statements (formulas), 4D now provides a token syntax. This syntax allows you to avoid potential problems due to variations in command names as well as other elements such as tables, while still being able to type these names in a legible manner (for more information, refer to the *Using tokens in formulas* section). Tenga en cuenta también que la opción \*[Usar parámetros del sistema regional\* de las Preferencias](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) le permite seguir usando el idioma francés en una versión francesa de 4D.

Two optional parameters are available:

- *info*: propiedades del comando. The returned value is a *bit field*, where the following bits are meaningful:
  - Primer bit (bit 0): definido en 1 si el comando es [**hilo-seguro**](../Develop/preemptive.md#thread-safe-vs-thread-unsafe-code) (es decir, compatible con la ejecución en un proceso apropiativo) y 0 si es **hilo-inseguro**. Only thread-safe commands can be used in [preemptive processes](../Develop/preemptive.md).
  - Second bit (bit 1): set to 1 if the command is **deprecated**, and 0 if it is not. A deprecated command will continue to work normally as long as it is supported, but should be replaced whenever possible and must no longer be used in new code. Los comandos obsoletos en su código generan advertencias en el [Live Checker y el compilador](../code-editor/write-class-method.md#warnings-and-errors).

*theme*: name of the 4D language theme for the command.

The **Command name** command sets the *OK* variable to 1 if *command* corresponds to an existing command number, and to 0 otherwise. Note, however, that some existing commands have been disabled, in which case **Command name** returns an empty string (see last example).

## Ejemplo 1

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

## Ejemplo 2

En un formulario, quiere una lista desplegable con los comandos básicos de informe resumido. In the object method for that drop-down list, you write:

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

## Ejemplo 3

You want to create a method that returns **True** if the command, whose number is passed as parameter, is thread-safe, and **False** otherwise.

```4d
  //Is_Thread_Safe project method
 #declare($command : Integer) : Boolean
 var $threadsafe : Integer
 var $name; $theme : Text
 $name:=Command name($command;$threadsafe;$theme)
 If($threadsafe ?? 0) //if the first bit is set to 1
    return True
 Else
    return False
 End if
```

Then, for the "SAVE RECORD" command (53) for example, you can write:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // devuelve True
```

## Ejemplo 4

You want to return a collection of all deprecated commands in your version of 4D.

```4d
var $info; $Lon_id : Integer
var $Txt_command : Text
var $deprecated : Collection

Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id;$info)
    If($info ?? 1) //the second bit is set to 1
            //then the command is deprecated
        $deprecated.push($Txt_command)
    End if
Until(OK=0) //end of existing commands

```

## Ver también

[EXECUTE FORMULA](../commands-legacy/execute-formula.md)\
[Preemptive Processes](../Develop/preemptive.md)

## Propiedades

|                        |                             |
| ---------------------- | --------------------------- |
| Número de comando      | 538                         |
| Hilo seguro            | &check; |
| Modifica las variables | OK                          |



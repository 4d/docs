---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* {; *info* {; *theme*}} ) : Text<!-- END REF-->

<!--REF #_command_.Command name.Params-->

| Parâmetro | Tipo    |                             | Descrição                    |
| --------- | ------- | --------------------------- | ---------------------------- |
| comando   | Integer | &#8594; | Número de comando            |
| info      | Integer | &#8592; | Command property to evaluate |
| theme     | Text    | &#8592; | Language theme of command    |
| Resultado | Text    | &#8592; | Localized command name       |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                       |
| ------- | ------------------------------ |
| 20 R9   | Support of deprecated property |

</details>

## Descrição

The **Command name** command <!--REF #_command_.Command name.Summary-->returns the name as well as (optionally) the properties of the command whose command number you pass in *command*.<!-- END REF-->The number of each command is indicated in the Explorer as well as in the Properties area of this documentation.

**Compatibility note:** A command name may vary from one 4D version to the next (commands renamed), this command was used in previous versions to designate a command directly by means of its number, especially in non-tokenized portions of code. This need has diminished over time as 4D continues to evolve because, for non-tokenized statements (formulas), 4D now provides a token syntax. This syntax allows you to avoid potential problems due to variations in command names as well as other elements such as tables, while still being able to type these names in a legible manner (for more information, refer to the *Using tokens in formulas* section). Note also that the \*[Use regional system settings\* option of the Preferences](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) allows you to continue using the French language in a French version of 4D.

Two optional parameters are available:

- *info*: propriedades do comando. O valor retornado é um *campo de bits*, em que os seguintes bits são significativos:
 - First bit (bit 0): set to 1 if the command is [**thread-safe**](../Develop/preemptive.md#thread-safe-vs-thread-unsafe-code) (i.e., compatible with execution in a preemptive process) and 0 if it is **thread-unsafe**. Apenas os comandos thread-safe podem ser usados em [processos preventivos](../Develop/preemptive.md).
 - Segundo bit (bit 1): defina como 1 se o comando for **obsoleto** e 0 se não for. A deprecated command will continue to work normally as long as it is supported, but should be replaced whenever possible and must no longer be used in new code. Comandos obsoletos no seu código geram avisos no [verificador ao vivo e no compilador](../code-editor/write-class-method.md#warnings-and-errors).

*theme*: nome do tema da linguagem 4D para o comando.

The **Command name** command sets the *OK* variable to 1 if *command* corresponds to an existing command number, and to 0 otherwise. Note, however, that some existing commands have been disabled, in which case **Command name** returns an empty string (see last example).

## Exemplo 1

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

## Exemplo 2

Em uma forma, você quer uma lista suspensa preenchida com os comandos básicos do relatório de resumo. In the object method for that drop-down list, you write:

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

## Exemplo 3

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
  // returns True
```

## Exemplo

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

## Veja também

[EXECUTE FORMULA](../commands-legacy/execute-formula.md)\
[Preemptive Processes](../Develop/preemptive.md)

## Propriedades

|                       |                             |
| --------------------- | --------------------------- |
| Número de comando     | 538                         |
| Thread safe           | &check; |
| Modifica as variáveis | OK                          |



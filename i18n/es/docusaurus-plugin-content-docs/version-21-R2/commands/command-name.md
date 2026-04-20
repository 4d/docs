---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *command* : Integer {; *info* : Integer {; *theme* : Text}} ) : Text<!-- END REF-->

<!--REF #_command_.Command name.Params-->

<div class="no-index">

| Parámetros | Tipo    |                             | Descripción                     |
| ---------- | ------- | --------------------------- | ------------------------------- |
| comando    | Integer | &#8594; | Número de comando               |
| info       | Integer | &#8592; | Propiedad del comando a evaluar |
| theme      | Text    | &#8592; | Tema del lenguaje del comando   |
| Resultado  | Text    | &#8592; | Nombre del comando              |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                   |
| ----------- | -------------------------------- |
| 20 R9       | Soporte de la propiedad obsoleta |

</details>
</div>

## Descripción

El comando **Command name** <!--REF #_command_.Command name.Summary-->devuelve el nombre así como (opcionalmente) las propiedades del comando cuyo número de comando pasa en *command*.<!-- END REF-->El número de cada comando se indica tanto en el explorador como en el área Propiedades de esta documentación.

**Nota de compatibilidad:** el nombre de un comando puede variar de una versión 4D a la siguiente (comandos renombrados), este comando se utilizaba en versiones anteriores para designar un comando directamente mediante su número, especialmente en porciones de código no tokenizadas. Esta necesidad ha disminuido con el tiempo a medida que 4D sigue evolucionando porque, para las sentencias no tokenizadas (fórmulas), 4D ahora ofrece una sintaxis con tokens. Esta sintaxis le permite evitar posibles problemas debidos a las variaciones en los nombres de los comandos y otros elementos, como las tablas, sin dejar de poder escribir estos nombres de forma legible (para más información, consulte la sección *Utilización de tokens en las fórmulas*). Tenga en cuenta también que la opción \*[Usar parámetros del sistema regional\* de las Preferencias](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) le permite seguir usando el idioma francés en una versión francesa de 4D.

Hay dos parámetros opcionales:

- *info*: propiedades del comando. El valor devuelto es un *campo de bits*, donde los siguientes bits son significativos:
  - Primer bit (bit 0): definido en 1 si el comando es [**hilo-seguro**](../Develop/preemptive.md#thread-safe-vs-thread-unsafe-code) (es decir, compatible con la ejecución en un proceso apropiativo) y 0 si es **hilo-inseguro**. Solo se pueden usar comandos hilo seguro en [procesos preventivos](../Develop/preemptive.md).
  - Segundo bit (bit 1): se define en 1 si el comando es **obsoleto**, y en 0 si no lo es. Un comando obsoleto seguirá funcionando normalmente mientras sea compatible, pero debe sustituirse siempre que sea posible y no debe utilizarse en código nuevo. Los comandos obsoletos en su código generan advertencias en el [Live Checker y el compilador](../code-editor/write-class-method.md#warnings-and-errors).

*theme*: nombre del tema del lenguaje 4D para el comando.

El comando **Command name** define la variable *OK* en 1 si *command* corresponde a un número de comando existente, y a 0 en caso contrario. Tenga en cuenta, sin embargo, que algunos comandos existentes han sido desactivados, en cuyo caso **Command name** devuelve una cadena vacía (ver el último ejemplo).

## Ejemplo 1

El siguiente código permite cargar todos los comandos 4D válidos en un array:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) //command number exists
       If(Length($Txt_command)>0) //el comando no está desactivado
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //fin de los comandos existentes
```

## Ejemplo 2

En un formulario, quiere una lista desplegable con los comandos básicos de informe resumido. En el método objeto para esa lista desplegable, escribe:

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

En la versión inglesa de 4D, la lista desplegable leerá: Sum, Average, Min y Max. En la versión francésa \*, la lista desplegable dirá: Somme, Moyenne, Min, y Max.

\*con una aplicación 4D configurada para usar el lenguaje de programación en francés (ver nota de compatibilidad)

## Ejemplo 3

Quiere crear un método que devuelva **True** si el comando, cuyo número se pasa como parámetro, es hilo seguro, y **False** en caso contrario.

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

Luego, para el comando "SAVE RECORD" (53) por ejemplo, puede escribir:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // devuelve True
```

## Ejemplo 4

Quiere devolver una colección de todos los comandos obsoletos en su versión de 4D.

```4d
var $info; $Lon_id : Integer
var $Txt_command : Text
var $deprecated : Collection

Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id;$info)
    If($info ?? 1) //el segundo bit está a 1
            //entonces el comando es obsoleto
        $deprecated.push($Txt_command)
    End if
Until(OK=0) //fin de los comandos existentes

```

## Ver también

[EXECUTE FORMULA](../commands-legacy/execute-formula.md)  
[Preemptive Processes](../Develop/preemptive.md)

## Propiedades

|                        |     |
| ---------------------- | --- |
| Número de comando      | 538 |
| Hilo seguro            | sí  |
| Modifica las variables | OK  |



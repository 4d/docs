---
id: command-name
title: Command name
slug: /commands/command-name
displayed_sidebar: docs
---

<!--REF #_command_.Command name.Syntax-->**Command name** ( *comando* {; *info* {; *theme*}} ) : Text<!-- END REF-->
<!--REF #_command_.Command name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| comando | Integer | &#8594;  | Número del comando |
| info | Integer | &#8592; | Propiedad hilo seguro del comando |
| theme | Text | &#8592; | Tema del lenguaje del comando |
| Resultado | Text | &#8592; | Nombre del comando traducido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Command name.Summary-->El comando **Command name** devuelve el nombre y (opcionalmente) las propiedades del comando cuyo número se pasa en *comando*.<!-- END REF-->

**Nota:** el número de cada comando está indicado en el Explorador, así como también en el área de Propiedades de esta documentación.

**Nota de compatibilidad**: como el nombre de un comando puede variar de una versión 4D a otra (comandos renombrados), este comando se utilizó en versiones anteriores del programa para designar un comando directamente por medio de su número, especialmente en partes de código no tokenizadas. Esta sintaxis permite evitar posibles problemas debido a las variaciones en los nombres de los comandos, así como otros elementos tales como tablas, sin dejar de poder escribir estos nombres de forma legible (para obtener más información sobre este punto, consulte la sección *Utilizar tokens en fórmulas*). Además, de forma predeterminada, la versión en Inglés del lenguaje se utiliza a partir de 4D v15; Sin embargo, la opción "Utilizar la configuración del sistema regional" en la [Is a list](is-a-list.md) de las Preferencias le permite continuar con el uso de la versión en español en un 4D en español.

Dos parámetros opcionales están disponibles:

* *info*: propiedades del comando. El valor devuelto es un campo de bits, donde actualmente sólo el primer bit (bit 0) es significativo. Se pone en 1 si el comando es hilo seguro (es decir, compatible con la ejecución de un proceso apropiativo) y 0 si es hilo-inseguro. Sólo los comandos compatibles con el proceso se pueden utilizar en los procesos apropiativos. Para más información sobre este punto, consulte la sección *Procesos 4D apropiativos*.
* *tema*: devuelve el nombre del tema del comando en el lenguaje 4D.

El comando **Command name** define la *variable* *OK* en 1 si *comando* corresponde a un número de comando existente y a 0 en caso contrario. Tenga en cuenta, sin embargo, que algunos comandos existentes han sido desactivados, en cuyo caso **Command name** devuelve una cadena vacía (ver el último ejemplo).

#### Ejemplo 1 

El siguiente código le permite cargar todos los comandos 4D válidos en un array:

```4d
 var $Lon_id : Integer
 var $Txt_command : Text
 ARRAY LONGINT($tLon_Command_IDs;0)
 ARRAY TEXT($tTxt_commands;0)
 
 Repeat
    $Lon_id:=$Lon_id+1
    $Txt_command:=Command name($Lon_id)
    If(OK=1) //el número de comando existe
       If(Length($Txt_command)>0) //el comando no está desactivado
          APPEND TO ARRAY($tTxt_commands;$Txt_command)
          APPEND TO ARRAY($tLon_Command_IDs;$Lon_id)
       End if
    End if
 Until(OK=0) //fin de los comandos existentes
```

#### Ejemplo 2 

En un formulario, usted quiere mostrar una lista desplegable que contenga los comandos estándar de generación de informes. En el método de objeto de esta lista desplegable, usted escribe:

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

En la versión inglesa de 4D, la lista desplegable contendrá: Sum, Average, Min, y Max. En la versión francesa\* de 4D, la lista desplegable contendrá: Somme, Moyenne, Min, y Max.

\*con la aplicación 4D configurada para ser utilizada en idioma francés (ver nota de compatibilidad).

#### Ejemplo 3 

Desea crear un método que devuelva **True** si el comando, cuyo número se pasa como parámetro, es hilo seguro y en caso contrario **False**.   

```4d
  //Método proyecto Is_Thread_Safe
  //Is_Thread_Safe(numCom) -> Booleano
 
 var $1;$threadsafe : Integer
 var $name : Text
 var $0 : Boolean
 $name:=Command name($1;$threadsafe;$theme)
 If($threadsafe ?? 0) //si el primer bit se define en 1
    $0:=True
 Else
    $0:=False
 End if
```

Luego, para el comando "SAVE RECORD" (53) por ejemplo, puede escribir:

```4d
 $isSafe:=Is_Thread_Safe(53)
  // devuelveTrue
```

#### Ver también 

[EXECUTE FORMULA](execute-formula.md)  
*Procesos 4D apropiativos*  
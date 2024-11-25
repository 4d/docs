---
id: php-execute
title: PHP Execute
slug: /commands/php-execute
displayed_sidebar: docs
---

<!--REF #_command_.PHP Execute.Syntax-->**PHP Execute** ( *rutaScript* {; *nomFuncion* {; *resultPHP* {; *param*} {; *param2* ; ... ; *paramN*}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.PHP Execute.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaScript | Text | &#8594;  | Ruta de acceso al script PHP o "" para ejecutar una función PHP |
| nomFuncion | Text | &#8594;  | Función PHP a ejecutar |
| resultPHP | *, Variable, Field | &#8592; | Resultado de ejecución de la función PHP o * para no recibir el resultado |
| param | Text, Boolean, Real, Integer, Date, Time | &#8594;  | Parámetros de la función PHP |
| Resultado | Boolean | &#8592; | True = ejecución correcta, False = error de ejecución |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


:::info Compatibilidad

**PHP es obsoleto en 4D**. Se recomienda utilizar la clase [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Descripción 

<!--REF #_command_.PHP Execute.Summary-->El comando **PHP Execute** permite ejecutar un script o una función PHP.<!-- END REF-->

Pase en el parámetro *rutaScrip*t la ruta de acceso del archivo de script PHP a ejecutar. Puede ser una ruta de acceso relativa si el archivo está ubicado junto a la estructura de la base o de una ruta absoluta. La ruta de acceso puede expresarse en sintaxis sistema o POSIX.   
Si quiere ejecutar directamente una función PHP estándar, pase una cadena vacía ("") en *rutaScript*. El nombre de la función debe pasarse en el segundo parámetro.

Pase en el parámetro *nomFuncion* un nombre de función PHP si quiere ejecutar una función específica en el script *rutaScript*. Si pasa una cadena vacía u omite el parámetro *nomFuncion*, el script se ejecuta completamente.

**Nota:** PHP tiene en cuenta las mayúsculas y minúsculas de los caracteres en el nombre de la función. No utilice paréntesis, introduzca únicamente el nombre de la función.

El parámetro *resultPHP* recibe el resultado de la ejecución de la función PHP. Puede pasar:

* una variable, un array o un campo para recibir el resultado,
* el carácter *\** si la función no devuelve ningún resultado o si no quiere recuperar el resultado.

El parámetro *resultPHP* puede ser de tipo texto, entero largo, real, booleano o fecha así como también (excepto para arrays) BLOB u hora. 4D efectuará la conversión de los datos y los ajustes necesarios siguiendo los principios descritos en la sección a continuación.

* si pasa un nombre de función en el parámetro *nomFuncion*, *resultPHP* recibirá lo que el desarrollador PHP devuelve con el comando return del cuerpo de la función.
* Si utiliza el comando sin pasar un nombre de función en el parámetro *nomFuncion*, *r* *esultPHP* recibirá lo que el desarrollador PHP devolvió con el comando echo ( o un comando similar).

 Si llama a una función PHP que espera argumentos, utilice los parámetros *param1...N* para pasar uno o varios valores. Los valores deben estar separados por punto y coma. Puede pasar valores de tipo alfa, texto, booleano, real, entero, entero largo, fecha u hora. Las imágenes y los BLOBs y objetos no se aceptan. Puede enviar un array; en este caso debe pasar un puntero en el array al comando **PHP Execute**, de lo contrario el índice actual del array se enviará como un entero (ver el ejemplo). El comando acepta todos los tipos de arrays excepto los arrays puntero, los arrays imagen y los arrays 2D.

**Nota:** por razones técnicas, el tamaño de los parámetros pasados vía el protocolo FastCGI no debe pasar los 64 KB. Debe tener en cuenta esta limitación si utiliza parámetros de tipo Texto.

El comando devuelve True si la ejecución se ha efectuado correctamente del lado de 4D, en otras palabras, si el lanzamiento del entorno de ejecución, la apertura del script y el establecimiento de la comunicación con el intérprete PHP fueron exitosos. De lo contrario, se genera un error, que puede interceptar con el comando [ON ERR CALL](on-err-call.md "ON ERR CALL") y analizar con [Last errors](get-last-error-stack.md "Last errors").   
Además, el script mismo puede generar errores PHP. En este caso, debe utilizar el comando [PHP GET FULL RESPONSE](php-get-full-response.md "PHP GET FULL RESPONSE") para analizar la fuente del error (ver ejemplo 4). 

**Nota:** PHP permite configurar la gestión de errores. Para mayor información, consulte por ejemplo la página: <http://www.php.net/manual/en/errorfunc.configuration.php#ini.error-reporting>.

##### Conversión de los datos devueltos 

La siguiente tabla especifica cómo 4D interpreta y convierte los datos devueltos en función del tipo del parámetro *resultPHP*.

| **Tipo del parámetro *resultPHP*** | **Proceso 4D**                                                                                                                                                                                                                                   | **Ejemplo**                                                                                              |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| BLOB                               | 4D recupera los datos recibidos sin ninguna modificación(\*).                                                                                                                                                                                    |                                                                                                          |
| Texto                              | 4D espera los datos codificados en UTF-8 (\*). El desarrollador PHP puede necesitar utilizar el comando PHP **utf8\_encode**.                                                                                                                    | Ejemplo de script PHP: echo utf8\_encode(miTexto)                                                        |
| Fecha                              | 4D espera una fecha enviada como una cadena en formato RFC 3339 (también llamado DATE\_ATOM en PHP). Este formato es de tipo "AAAA-MM-DDTHH:MM:SS", por ejemplo: 2005-08-15T15:52:01+00:00\. 4D ignora la parte hora y devuelve la fecha en UTC. |                                                                                                          |
| Hora                               | 4D espera una hora enviada en forma de cadena en formato RFC 3339 (ver el tipo Fecha). 4D ignora la parte fecha y devuelve el número de segundos transcurridos desde la media noche considerando la fecha en la zona horaria local.              | Ejemplo de script PHP para enviar 2h30'45": echo date( DATE\_ATOM, mktime( 2,30,45))                     |
| Entero o Real                      | 4D interpreta el valor numérico expresado con números, signo + o - y/o el exponente con el prefijo 'e'. Todo carácter '.' o ',' se interpreta como un separador decimal.                                                                         | Ejemplo de script PHP: echo -1.4e-16;                                                                    |
| Booleano                           | 4D devuelve True si recibe la cadena "true" desde PHP o si la evaluación numérica da un valor no nulo.                                                                                                                                           | Ejemplo de script PHP: echo (a==b);                                                                      |
| Array                              | 4D considera que el array PHP fue devuelto en el formato JSON.                                                                                                                                                                                   | Ejemplo de script PHP para devolver un array de dos textos: echo json\_encode( array( "hola", "mundo")); |

(\*) Por defecto, no se devuelven los encabezados HTTP:  
\- Si utiliza [PHP Execute](php-execute.md) al pasar una función en el parámetro *nomFuncion*, los encabezados HTTP nunca se devuelven en *resultPHP*. Sólo están disponibles por medio del comando [PHP GET FULL RESPONSE](php-get-full-response.md).  
\- Si utiliza [PHP Execute](php-execute.md) sin un nombre de función (el parámetro *nomFuncion* se omite o contiene una cadena vacía), puede devolver los encabezados HTTP fijando la opción PHP Raw result en True utilizando el comando [PHP SET OPTION](php-set-option.md).

**Nota:** si debe recuperar grandes volúmenes de datos utilizando PHP, es más eficiente pasar por el canal del buffer *stdOut* (comando **echo** o similar) que por el retorno de función. Para mayor información, consulte la descripción del comando [PHP GET FULL RESPONSE](php-get-full-response.md). 

##### Using environment variables 

Puede utilizar el comando [SET ENVIRONMENT VARIABLE](set-environment-variable.md "SET ENVIRONMENT VARIABLE") para definir las variables de entorno utilizadas por el script. Atención: después de llamar [LAUNCH EXTERNAL PROCESS](launch-external-process.md "LAUNCH EXTERNAL PROCESS") o PHP Execute, el conjunto de las variables entorno se borra.

##### Special functions 

4D ofrece las siguientes funciones especiales:

* **quit\_4d\_php**: permite salir del intérprete PHP y de todos sus procesos hijos. Si al menos uno de los procesos hijo está ejecutando un script, el intérprete no sale y el comando PHP Execute devuelve False.
* **relaunch\_4d\_php**: permite relanzar el intérprete PHP.

Note que el intérprete se relanza automáticamente cuando la primera petición se envía por PHP Execute. 

#### Ejemplo 1 

Llamada del script "myPhpFile.php" sin función. Este es el contenido del script:

```PHP

```

El siguiente código 4D:

```4d
 var $result : Text
 var $isOK : Boolean
 $isOK:=PHP Execute("C:\php\myPhpFile.php";"";$result)
 ALERT($Result)
```

...mostrará la versión PHP actual.

#### Ejemplo 2 

Llamada de la función *myPhpFunction* en el script "myNewScript.php" con parámetros. Este es el contenido del script:

```PHP

```

Llamada con función:

```4d
 var $result : Text
 var $param1 : Text
 var $param2 : Text
 var $isOk : Boolean
 $param1 :="¡Hola"
 $param2 :="mundo 4D!"
 $isOk:=PHP Execute("C:\MyFolder\myNewScript.php";"myPhpFunction";$result;$param1;$param2)
 ALERT($result) // Muestra "¡Hola mundo 4D!"
```

#### Ejemplo 3 

Salir del intérprete PHP:

```4d
 $ifOk:=PHP Execute("";"quit_4d_php")
```

#### Ejemplo 4 

Gestión de errores:

```4d
  // Instalación del método de gestión de errores
 phpCommError:="" // Modificado por PHPErrorHandler
 $T_saveErrorHandler :=Method called on error
 ON ERR CALL("PHPErrorHandler")

 // Ejecución del script
 var $T_result : Text
 If(PHP Execute("C:\MyScripts\MiscInfos.php";"";$T_result))
  // Ningún error, $T_Result contiene el resultado
 Else
  // Se ha detectado un error, administrado por PHPErrorHandler
    If(phpCommError="")
       ... // error PHP, utilice PHP GET FULL RESPONSE
    Else
       ALERT(phpCommError)
    End if
 End if
 
  // Desinstalación del método
 ON ERR CALL($T_saveErrorHandler)


```

El método PHP\_errHandler es el siguiente:

```4d
 phpCommError:=""
 GET LAST ERROR STACK(arrCodes;arrComps;arrLabels)
 For($i;1;Size of array(arrCodes))
    phpCommError:=phpCommError+String(arrCodes{$i})+" "+arrComps{$i}+" "+
    arrLabels{$i}+Char(Carriage return)
 End for
```

#### Ejemplo 5 

Creación dinámica por 4D de un script antes de su ejecución:

```4d
 DOCUMENT TO BLOB("C:\Scripts\MyScript.php";$blobDoc)
 If(OK=1)
    $strDoc:=BLOB to text($blobDoc;UTF8 text without length)
 
    $strPosition:=Position("function2Rename";$strDoc)
 
    $strDoc:=Insert string($strDoc;"_v2";Length("function2Rename")+$strPosition)
 
    TEXT TO BLOB($strDoc;$blobDoc;UTF8 text without length)
    BLOB TO DOCUMENT("C:\Scripts\MyScript.php";$blobDoc)
    If(OK#1)
       ALERT("Error on script creation")
    End if
 End if
```

Se ejecuta el script:

```4d
 $err:=PHP Execute("C:\Scripts\MyScript.php";"function2Rename_v2";*)
```

#### Ejemplo 6 

Recuperación directa de un valor de tipo fecha y hora. Este es el contenido del script:

```PHP

```

Recepción de la fecha del lado 4D:

```4d
 var $phpResult_date : Date
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_date)
  //$phpResult_date is !05/04/2009 !
 
 var $phpResult_time : Time
 $result :=PHP Execute("C:\php_scripts\ReturnDate.php";"";$phpResult_time)
  //$phpResult_time is ?01 :02 :03 ?
```

#### Ejemplo 7 

Distribución de datos en arrays:

```4d
 ARRAY TEXT($arText ;0)
 ARRAY LONGINT($arLong ;0)
 $p1 :=","
 $p2 :="11,22,33,44,55"
 $phpok :=PHP Execute("";"explode";$arText;$p1;$p2)
 $phpok :=PHP Execute("";"explode";$arLong;$p1;$p2)
 
  // $arText contiene los valores Alfa "11", "22", "33", etc.
  // $arLong contiene los números, 11, 22, 33, etc.
```

#### Ejemplo 8 

Inicialización de un array:

```4d
 ARRAY TEXT($arText ;0)
 $phpok :=PHP Execute("";"array_pad";$arText;->$arText;50;"indefinido")
  // Ejecute en PHP: $arrTest = array_pad($arrTest, 50, ’indefinido’);
  // Llene el array $arText con 50 elementos "indefinido"
```

#### Ejemplo 9 

Paso de parámetros vía un array:

```4d
 ARRAY INTEGER($arInt;0)
 $phpok :=PHP Execute("";"json_decode";$arInt;"[13,51,69,42,7]")
  // Ejecute en PHP: $arInt = json_decode(’[13,51,69,42,7]’);
  // Llene el array con los valores iniciales
```

#### Ejemplo 10 

Este es un ejemplo de la utilización básica de la función trim, para eliminar espacios adicionales y/o caracteres invisibles de principio a fin de una cadena:

```4d
 var $T_String : Text
 $T_String:="   Hello  "
 var $B : Boolean
 $B:=PHP Execute("";"trim";$T_String;$T_String)
```

Para obtener más información acerca de la función trim, por favor, consulte la documentación de PHP.

#### Ver también 

*Ejecutar scripts PHP en 4D*  
[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  
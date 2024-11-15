---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *nombre* {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Process number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombre | Text | &#8594;  | Nombre del proceso del cual recuperar el número |
| * | Operator |  &#8594;  | Devolver el número del proceso servidor |
| Resultado | Integer | &#8592; | Número de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Process number.Summary-->Process number devuelve el número del proceso cuyo nombre se pasa en *nom*.<!-- END REF--> Si no se encuentra ningún proceso, Process number devuelve 0.

El parámetro opcional *\** le permite recuperar, a partir de 4D Client, el número de un proceso que se está ejecutando en el servidor (un procedimiento almacenado). En este caso, el valor devuelto es negativo. Esta opción es particularmente útil cuando se utilizan los comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE") y [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE"). Para mayor información, consulte las descripciones de estos comandos.

Si el comando se ejecuta con el parámetro *\** desde un proceso en el equipo servidor, el valor devuelto es positivo.

#### Ejemplo 

Usted crea una paleta flotante, que corre en un proceso separado, en el cual usted implementa sus propias herramientas para interactuar con el entorno Diseño. Por ejemplo, cuando selecciona un elemento en una lista jerárquica de palabras claves, usted quiere pegar algún texto en la ventana del primer plano del entorno Diseño. Para hacerlo, puede utilizar el Portapapeles, pero el evento de pegado debe ocurrir dentro del proceso Diseño. La siguiente función devuelve el número del proceso del proceso Diseño (si está activo):

```4d
  // Método de proyecto Numero proceso Diseño
  // Numero proceso Diseño -> Entero largo
  // Numero proceso Diseño -> Número del proceso de Diseño
 
 $0:=Process number("Proceso Diseño")
  // Nota: Esto puede no funcionar en el futuro si la fuente cambia
```

Con esta función, el método de proyecto listado pega el texto recibido como parámetro en la ventana del primer plano en el entorno Diseño (si aplica):

```4d
  // Método de proyecto PEGAR TEXTO EN DISEÑO
  // PEGAR TEXTO EN DISEÑO ( Text )
  //PEGAR TEXTO EN DISEÑO (Texto a pegar en la ventana de Diseño del primer plano)
 
 var $1 : Text
 var $vlDiseñoPID;$vlCont : Integer
 
 $vlDiseñoPID:=Numero proceso Diseño
 If($vlDiseñoPID #0)
  // Coloque el texto en el portapapeles
    SET TEXT TO PASTEBOARD($1)
  // Generar un evento Ctrl-V / Comando-V
    POST KEY(ASCII("v");Command key mask;$vlDiseñoPID)
  // Llamar repetitivamente DELAY PROCESS para que el minutero puede pasar
  // sobre el evento al proceso Diseño
    For($vlCont;1;5)
       DELAY PROCESS(Current process;1)
    End for
 End if
```

#### Ver también 

[GET PROCESS VARIABLE](get-process-variable.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  
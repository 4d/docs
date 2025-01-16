---
id: print-object
title: Print object
slug: /commands/print-object
displayed_sidebar: docs
---

<!--REF #_command_.Print object.Syntax-->**Print object** ( {* ;} *objeto* {; *posX* {; *posY* {; *ancho* {; *alto*}}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Print object.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de ojbeto (cadena). Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o variable (si se omite *) |
| posX | Integer | &#8594;  | Ubicación horizontal del objeto |
| posY | Integer | &#8594;  | Ubicación vertical del objeto |
| ancho | Integer | &#8594;  | Ancho del objeto (píxeles) |
| alto | Integer | &#8594;  | Alto del objeto (píxeles) |
| Resultado | Boolean | &#8592; | True = objeto impreso completamente, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Print object.Summary-->El comando **Print object** permite imprimir el o los objetos de formulario designado(s) por los parámetros *objeto* y *\**, en la ubicación definida por los parámetros *posX* y *posY*.<!-- END REF-->  
  
Antes de llamar el comando **Print object**, debe designar el formulario tabla o proyecto que contiene los objetos a imprimir, utilizando el comando [FORM LOAD](form-load.md).   
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena de caracteres). Si no pasa el parámetro *\**, está indicando que *objeto* es una variable. En este caso, se pasa una referencia de variable (tipo de objeto únicamente) en lugar de una cadena.  
  
Los parámetros *posX* y *posY* especifican el punto de partida para la impresión del o de los objeto(s). Estos valores deben expresarse en píxeles. Si estos parámetros se omiten, el objeto se imprime de acuerdo a su ubicación en el formulario.   
  
Los parámetros *ancho* y *alto* se utilizan para especificar el ancho y el alto del objeto de formulario. El comando **Print object** no trata objetos de tamaño variable. Debe utilizar el comando [OBJECT GET BEST SIZE](object-get-best-size.md) para manejar el tamaño de los objetos. También puede utilizar el comando [OBJECT GET BEST SIZE](object-get-best-size.md) para determinar el tamaño más adecuado para los objetos que contienen texto. Del mismo modo, **Print object** no provoca saltos de página automáticos. Debe manejarlos de acuerdo a sus necesidades.   
  
Puede utilizar los comandos de 4D para modificar rápidamente las propiedades del objeto (color, tamaño, etc).  
  
El comando devuelve True si el objeto se ha impreso completamente y False si este no es el caso, en otras palabras, si no pudo imprimir todos los datos asociados con el objeto dentro del marco establecido. Normalmente, el comando devuelve False cuando se imprime un list box si todas las líneas del list box no se pudieron imprimir. En este caso, basta con llamar al comando **Print object** varias veces hasta que devuelva True: un mecanismo específico provoca de forma automática el desplazamiento del contenido del objeto después de cada llamada. Si el usuario cancela la operación de impresión, se genera un error -128, que puede interceptar utilizando [ON ERR CALL](on-err-call.md).  
  
**Notas**:  

* En la versión actual de 4D, sólo los objetos de tipo list box tienen este mecanismo (el comando siempre devuelve True para cualquier otro tipo de objeto).
* El comando [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) permite controlar el estado de la impresión durante la operación.
El comando **Print object** sólo puede ser utilizado en el contexto de un trabajo de impresión abierto previamente con el comando [OPEN PRINTING JOB](open-printing-job.md). Si no se llama en este contexto, el comando no hace nada. Varios comandos **Print object** pueden llamarse en el mismo trabajo de impresión.  
  
**Nota**: las listas jerárquicas, los subformularios y las áreas web no se pueden imprimir.

#### Ejemplo 1 

Ejemplo de impresión de diez objetos en un formulario:

```4d
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    If(OK=1)
       FORM LOAD("PrintForm")
       x:=100
       y:=50
       GET PRINTABLE AREA(hpaper;wpaper)
       For($i;1;10)
          OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)
          $end:=Print object(*;"Obj"+String($i))
          y:=y+bestheight+15
          If(y>hpaper)
             PAGE BREAK(>)
             y:=50
          End if
       End for
    End if
    CLOSE PRINTING JOB
 End if
```

#### Ejemplo 2 

Ejemplo de impresión de un list box completo:

```4d
 OPEN PRINTING JOB
 FORM LOAD("myForm")
 $Over:=False
 gError:=0
 ON ERR CALL("err")
 Repeat
    $Total:=Print object(*;"List_Box")
    LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)
    PAGE BREAK
    If(gError=-128) //el usuario ha cancelado la operación
       $Over:=True
    End if
 Until($Over)
 CLOSE PRINTING JOB
 ON ERR CALL("")
```

#### Ver también 

[FORM LOAD](form-load.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1095 |
| Hilo seguro | &cross; |



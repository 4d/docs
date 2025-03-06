---
id: wa-execute-javascript-function
title: WA EXECUTE JAVASCRIPT FUNCTION
slug: /commands/wa-execute-javascript-function
displayed_sidebar: docs
---

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Syntax-->**WA EXECUTE JAVASCRIPT FUNCTION** ( {* ;} *objeto* ; *funcionjs* ; resultado|* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| funcionjs | Text | &#8594;  | Nombre de la función JavaScript a ejecutar |
| resultado&#124;* | Variable | &#8594;  | * para una función sin resultado o |
| &#8592; | Resultado de la función (si se espera) |
| param | Text, Number, Date, Object, Collection | &#8594;  | Parámetro(s) a pasar a la función |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA EXECUTE JAVASCRIPT FUNCTION.Summary-->El comando WA EXECUTE JAVASCRIPT FUNCTION ejecuta en el área Web designada por los parámetros *\** y *objeto*, la función JavaScript *funcionJS* y devuelve opcionalmente su resultado en el parámetro *resultado*.<!-- END REF-->

Si la función no devuelve un resultado, pase *\** en el parámetro *resultado*.

Puede pasar en *param* una o varios parámetros que contengan los parámetros de la función.

El comando soporta varios tipos de parámetros, tanto para entrada (*param*) como para salida (*resultado*). Puede pasar y recuperar datos de tipos cadena, número, fecha, objeto y colección. Si el tipo de parámetro no está definido, el tipo texto se utiliza de manera predeterminada.

**Atención**: no se recomienda utilizar este comando para llamar directamente a una función JavaScript que muestre un diálogo **(alert(), print()...)** ya que el usuario no puede interactuar con el área web mientras se ejecuta el código 4D. Si necesita implementar dicha interfaz, puede llamar, por ejemplo, a **setTimeout(function(){alert();}, 50))** para dejar que termine la ejecución del código 4D y permitir la interacción del usuario.

#### Ejemplo 1 

Llamada de una función JavaScript con 3 parámetros:

```4d
 $JavaScriptFunction:="FuncionAEjecutar"
 $Param1:="10"
 $Param2:="true"
 $Param3:="1,000.2" //note "," como separador de miles y "." como separador décimal
 
 WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$FuncionAEjecutar;$Result;$Param1;$Param2;$Param3)
```

#### Ejemplo 2 

La función JavaScript "getCustomerInfo" recibe un número ID como parámetro y devuelve un objeto:

```4d
 var $Result : Object
 var $ID : Integer
 $ID:=1000
 WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)
```

#### Ver también 

[WA Evaluate JavaScript](wa-evaluate-javascript.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1043 |
| Hilo seguro | &cross; |



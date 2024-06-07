---
id: interpreted-compiled
title: Modos interpretado y compilado
---

Las aplicaciones 4D pueden funcionar en modo **interpretado** o **compilado**:

- en modo interpretado, las declaraciones se leen y se traducen en lenguaje máquina en el momento de su ejecución. Puede añadir o modificar el código siempre que lo necesite, la aplicación se actualiza automáticamente.
- en modo compilado, todos los métodos se leen y traducen una vez, en el paso de compilación. Después, la aplicación sólo contiene instrucciones a nivel de ensamblaje, ya no es posible editar el código.

Las ventajas de la compilación son:

- **Velocidad**: su base aplicación se ejecuta de 3 a 1.000 veces más rápido.
- **Verificación del código**: su aplicación se analiza para comprobar la consistencia del código. Se detectan tanto los conflictos lógicos como los sintácticos.
- **Protección:**: una vez compilada su aplicación, puede eliminar el código interpretado. Entonces, la aplicación compilada es funcionalmente idéntica a la original, excepto que la estructura y los métodos no pueden ser vistos o modificados, deliberada o inadvertidamente.
- **Aplicaciones independientes con doble clic**: las aplicaciones compiladas también pueden transformarse en aplicaciones autónomas con su propio icono.
- **Modo apropiativo**: sólo se puede ejecutar código compilado en procesos apropiativos.

## Diferencias entre el código interpretado y el compilado

Aunque la aplicación funcionará de la misma manera en modo interpretado y compilado, hay algunas diferencias que hay que conocer cuando se escribe código que será compilado. El intérprete de 4D suele ser más flexible que el compilador.

| Compilado                                                                                                                                                                                                                     | Interpretado                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| No se puede tener un método con el mismo nombre que una variable.                                                                                                                                             | No se genera ningún error, pero se da prioridad al método                                            |
| Todas las variables deben estar digitadas, ya sea mediante una declaración (utilizando las palabras claves `var`, `#Declare`, o `Function`), o por el compilador en tiempo de compilación. | Las variables se pueden escribir sobre la marcha (no se recomienda)               |
| No se puede cambiar el tipo de datos de ninguna variable o array.                                                                                                                                             | Es posible cambiar el tipo de datos de una variable o un array (no se recomienda) |
| No se puede cambiar un array unidimensional a uno bidimensional, ni cambiar un array bidimensional a uno unidimensional.                                                                                      | Posible                                                                                              |
| Aunque el compilador escribirá la variable por usted, debe especificar el tipo de datos de una variable mediante declaraciones en las que el tipo de datos sea ambiguo, como en un formulario.                |                                                                                                      |
| La función `Undefined` siempre devuelve False para las variables. Las variables siempre están definidas.                                                                                      |                                                                                                      |
| Si has marcado la propiedad "Puede ser ejecutado en procesos apropiativos" para el método, el código no debe llamar a ningún comando hilo no seguro u otros métodos hilo no seguro.                           | Se ignoran las propiedades de los procesos preventivos                                               |
| El comando `IDLE` es necesario para llamar a 4D en bucles específicos                                                                                                                                                         | Siempre es posible interrumpir 4D                                                                    |

## Utilizar las directivas del compilador con el intérprete

Las aplicaciones no compiladas no requieren directivas del compilador. El intérprete digita automáticamente cada variable en función de cómo se utilice en cada declaración, y una variable puede volver a escribirse libremente en el proyecto de aplicación.

Debido a esta flexibilidad, es posible que una aplicación tenga un rendimiento diferente en modo interpretado y compilado.

Por ejemplo, si se escribe:

```4d
var MyInt : Integer
```

y en otra parte del proyecto, escribe:

```4d
MyInt:=3.1416
```

En este ejemplo, `MyInt` se asigna el mismo valor (3) tanto en el modo interpretado como en el compilado, siempre que la directiva del compilador se interprete _antes_ de la declaración de asignación.

El intérprete 4D utiliza directivas de compilador para escribir las variables. Cuando el intérprete encuentra una directiva de compilador, escribe la variable según la directiva. Si una declaración posterior intenta asignar un valor incorrecto (por ejemplo, asignar un valor alfanumérico a una variable numérica) la asignación no tendrá lugar y generará un error.

El orden en el que aparecen las dos declaraciones es irrelevante para el compilador, porque primero busca en todo el proyecto para las directivas del compilador. El intérprete, sin embargo, no es sistemático. Interpreta las declaraciones en el orden de ejecución. Ese orden, por supuesto, puede cambiar de una sesión a otra, dependiendo de lo que haga el usuario. Por esta razón, es importante diseñar su proyecto de manera que las directivas del compilador se ejecuten antes de cualquier declaración que contenga las variables declaradas.

## Utilización de punteros para evitar la reescritura

Una variable no se puede volver a escribir. Sin embargo, es posible utilizar un puntero para referirse a variables de diferentes tipos de datos. Por ejemplo, el siguiente código está permitido tanto en modo interpretado como compilado:

```4d
var $p : Pointer
var $name : Text
var $age : Integer

$name:="Smith"
$age:=50

$p:=->$name //texto objetivo para el puntero
$p->:="Wesson" //asigna un valor texto

$p:=->$age  
// nuevo objetivo de tipo diferente para el puntero
$p->:=55 //asigna un valor
```

Imagine una función que devuelve la longitud (número de caracteres) de valores de todo tipo.

```4d
  // Calc_Length (cuántos caracteres)
  // $vp = puntero a variable de tipo flexible, numérico, texto, tiempo, booleano

#DECLARE($vp : Pointer) -> $length : Integer
var $result : Text  
$result:=String($vp->)
$length:=Length($result)
```

Entonces se puede llamar a este método:

```4d
$var1:="my text"
$var2:=5.3
$var3:=?10:02:24?
$var4:=True

$vLength:=Calc_Length(->$var1)+Calc_Length(->$var2)+Calc_Length (->$var3)+Calc_Length(->$var4)

ALERT("Total length: "+String($vLength))
```

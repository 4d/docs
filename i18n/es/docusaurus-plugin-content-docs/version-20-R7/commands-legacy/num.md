---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expresion* {; *separador*} ) : Real<!-- END REF-->
<!--REF #_command_.Num.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Text, Boolean, Integer | &#8594;  | Cadena a convertir en numérico o  Booleano a convertir en 0 ó 1, o  Expresión numérica |
| separador | Text | &#8594;  | Separador decimal |
| Resultado | Real | &#8592; | Valor numérico del parámetro  expresión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Num.Summary-->El comando Num devuelve en forma numérica la expresión de tipo cadena, booleano, o numérica que pasó en *expresion*.<!-- END REF--> El parámetro opcional *separador* puede utilizarse para designar un separador decimal para la evaluación de las expresiones de tipo cadena. 

Expresiones de tipo cadena

Si *expresion* consiste únicamente uno o más caracteres alfabéticos, Num devuelve cero. Si *expresion* incluye caracteres alfabéticos y caracteres numéricos, Num ignora los caracteres alfabéticos. De esta forma, Num transforma la cadena "a1b2c3" en el número 123\. 

Hay tres caracteres reservados que Num trata de manera particular: el separador decimal definido en el sistema (si el parámetro *separador* no se pasa), el guión “*\-*”, y “*e*” *o* “E”. Estos caracteres son interpretados como caracteres de formato numérico.

* El separador decimal se interpreta como un lugar decimal y debe aparecer en una cadena numérica. Por defecto, el comando utiliza el separador decimal definido en el sistema operativo. Puede modificar este carácter utilizando el parámetro *separador* (ver a continuación).
* El guión define un número o exponente negativo. El guión debe aparecer antes de los caracteres numéricos negativos o después de la “e” para un exponente. Excepto por el carácter “e”, si un guión está en una cadena numérica, la porción de la cadena después del guión se ignora. Por ejemplo, **Num**("123-456") devuelve 123, pero **Num**("-9") devuelve -9.
* La e o E hace que todos los caracteres numéricos a la derecha se interpreten como la potencia de un exponente. La “e” debe estar en una cadena numérica. De esta forma, **Num**("123e–2") devuelve 1,23.

Note que en el caso de que una cadena tenga más de un carácter "e", la conversión podrá dar resultados diferentes bajo Mac OS y bajo Windows.

El parámetro *separador* puede utilizarse para designar un separador decimal personalizado para la evaluación de *expresion*. Cuando la cadena a evaluar se expresa con un separador decimal diferente del separador del sistema, el comando devuelve un resultado incorrecto. El parámetro *separador* puede utilizarse en este caso para obtener una evaluación correcta. Cuando se pasa este parámetro, el comando no tiene en cuenta el separador decimal del sistema. Puede pasar uno o más caracteres.

**Nota:** el comando [GET SYSTEM FORMAT](get-system-format.md) puede utilizarse para buscar el separador decimal actual como también otros parámetros sistema regionales.

Expresiones de tipo Booleano

Si pasa una expresión booleana en el parámetro expresión, Num devuelve 1 si la expresión es True; de lo contrario devuelve *0* (cero).

Expresiones numéricas

Si pasa una expresión numérica en el parámetro *expresion*, Num devuelve tal cual el valor pasado en *expresion*. Esto puede ser útil especialmente en el caso de programación genérica utilizando punteros.

**Expresiones indefinidas**  
Si la *expresion* se evalúa como indefinida, el comando devuelve 0 (cero). Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo objeto) sea un número, incluso si puede ser indefinido.

#### Ejemplo 1 

El siguiente ejemplo ilustra cómo funciona Num cuando se pasa un argumento de tipo cadena. Cada línea asigna un número a la variable *vResult*. Los comentarios describen los resultados:

```4d
 vResult:=Num("ABCD") // vResult vale 0
 vResult:=Num("A1B2C3") // vResult vale 123
 vResult:=Num("123") // vResult vale 123
 vResult:=Num("123,4") // vResult vale 123,4
 vResult:=Num("-123") // vResult vale -123
 vResult:=Num("-123e2") // vResult vale -12300
```

#### Ejemplo 2 

En este ejemplo, *\[Cliente\]Deuda* se compara con el valor *$1000*. El comando Num aplicado a esta comparación devuelve 1 o 0\. La multiplicación de una cadena por 1 ó 0 devuelve la cadena o la cadena vacía. Como resultado, *\[Cliente\]Riesgo* recibe el valor “Aceptable” o “Inaceptable”:

```4d
  // Si el cliente tiene deudas menores a 1000, el riesgo es aceptable.
  // Si el cliente tiene deudas superiores a 1000, el riesgo es inaceptable.
 [Cliente]Riesgo:=("Aceptable"*Num([Cliente]Deuda<1000))+("Inaceptable"*Num([Cliente]Deuda>=1000))
```

#### Ejemplo 3 

Este ejemplo compara los resultados obtenidos dependiendo del separador “actual”:

```4d
 $lacadena:="33,333.33"
 $elnum:=Num($lacadena)
  // by default, $elnum es igual a 33,33333 en un sistema francés
 $elnum:=Num($lacadena;".")
  // $elnum se evaluará correctamente sin importar el sistema;
  // por ejemplo, 33 333,33 en un sistema francés
```

#### Ver también 

[Bool](bool.md)  
[GET SYSTEM FORMAT](get-system-format.md)  
[String](string.md)  
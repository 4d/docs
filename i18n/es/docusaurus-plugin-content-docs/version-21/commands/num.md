---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expression* {; *separator*} ) : Real<br/>**Num** ( *expression* ; *base* ) : Real<!-- END REF-->

<!--REF #_command_.Num.Params-->

| Parámetros | Tipo                   |                             | Descripción                                                                         |
| ---------- | ---------------------- | --------------------------- | ----------------------------------------------------------------------------------- |
| expresión  | Text, Boolean, Integer | &#8594; | Cadena a convertir en numérica o Booleano para devolver 0 o 1, o Expresión numérica |
| separador  | Text                   | &#8594; | Separador decimal                                                                   |
| base       | Integer                | &#8594; | Valor entre 2 y 36 que representa la base                                           |
| Resultado  | Real                   | &#8592; | Forma numérica del parámetro de expresión                                           |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones               |
| ----------- | ---------------------------- |
| 21          | Soporte del parámetro *base* |

</details>

## Descripción

<!--REF #_command_.Num.Summary-->El comando **Num** devuelve la forma numérica de la cadena, booleano o expresión numérica que se pasa en *expression*.<!-- END REF-->

Cuando *expression* es de tipo cadena, puede utilizar un parámetro *separator* o un parámetro *base* (ver abajo).

### Expresiones de tipo cadena

Cuando se utiliza el comando **Num** con una *expression* cadena, hay dos sintaxis disponibles:

- **Num(string{;separator})**
- **Num(string;base)**

#### Num(string{;separator})

Si *expression* contiene sólo uno o más caracteres alfabéticos, **Num** devuelve un cero. Si *expression* incluye caracteres alfabéticos y numéricos, el comando ignora los caracteres alfabéticos. Así, transforma la cadena "a1b2c3" en el número 123.

Hay tres caracteres reservados que **Num** trata de forma especial: el separador decimal definido en el sistema (si no se pasa el parámetro *separator*), el guión "*\-*" y "*e*". *o* "E". Estos caracteres se interpretan como caracteres de formato numérico.

- El separador decimal se interpreta como un decimal y debe aparecer incluido en una cadena numérica. Por defecto, el comando utiliza el separador decimal definido por el sistema operativo. Puede modificar este carácter utilizando el parámetro *separator* (ver abajo).
- El guión hace que el número o exponente sea negativo. El guión debe aparecer antes de todo carácter numérico negativo o después de la "e" para un exponente. Excepto en el caso del carácter "e", si se introduce un guión en una cadena numérica, se ignora la parte de la cadena que va después del guión. Por ejemplo, `Num("123-456")` devuelve 123, pero `Num("-9")` devuelve -9.
- La e o E hace que todo caracter numérico a su derecha se interprete como la potencia de un exponente. La "e" debe estar incluida en una cadena numérica. Entonces, `Num("123e-2")` devuelve 1.23.  
  Tenga en cuenta que cuando la cadena incluye más de una "e", la conversión puede dar resultados diferentes en macOS y en Windows.

#### Parámetro *separador*

El parámetro *separator* designa un separador decimal personalizado para evaluar la *expression*. Cuando la cadena a evaluar se expresa con un separador decimal distinto del operador del sistema, el comando devuelve un resultado incorrecto. El parámetro *separator* puede utilizarse en este caso para obtener una evaluación correcta. Cuando se pasa este parámetro, el comando no tiene en cuenta el separador decimal del sistema. Puede pasar uno o más caracteres.

:::note

El comando [`GET SYSTEM FORMAT`](../commands-legacy/get-system-format.md) puede utilizarse para averiguar el separador decimal actual, así como otros parámetros del sistema regional.

:::

#### Num(string;base)

El uso de un parámetro *base* (entero) activa un modo específico en el que se especifica el radix (base) del número expresado como cadena en *expression*. En particular, esta sintaxis permite convertir cadenas hexadecimales a números.

En el parámetro *base*, pase la base del número en *expression*. Puede pasar cualquier valor entero entre 2 y 36.

Si pasa 0 en *base*, el comando determina la base dependiendo del valor de *expression*. Si *expression* empieza por "0x", se utiliza base 16. En caso contrario, se utiliza la base 10.

Si *expression* se evalúa como un número decimal, sólo se convierte la parte entera.

:::info

- Esta sintaxis sigue estrictamente la especificación [`parseInt` EcmaScript](https://tc39.es/ecma262/multipage/global-object.html#sec-parseint-string-radix).
- Utilizar esta sintaxis con *base*=10 no dará exactamente los mismos resultados que utilizar la sintaxis sin el parámetro *base*. Por ejemplo, de acuerdo con la especificación EcmaScript, todo caracter que no pertenezca a la base se considera un separador (ver los ejemplos).

:::

### Expresiones booleanas

Si pasa una expresión booleana, **Num** devuelve 1 si la expresión es True; en caso contrario, devuelve *0* (cero).

### Expresiones numéricas

Si pasa una expresión numérica en el parámetro *expression*, **Num** devuelve el valor pasado en el parámetro *expression* tal cual. Esto puede ser útil sobre todo en el caso de la programación genérica que utiliza punteros.

### Expresiones indefinidas

Si la evaluación de *expression* da un valor indefinido, el comando devuelve 0 (cero). Esto es útil cuando se espera que el resultado de una expresión (por ejemplo, un atributo de objeto) sea un número, aunque pueda ser indefinido.

## Ejemplo 1

El siguiente ejemplo ilustra cómo funciona **Num** cuando se le pasa un único argumento de cadena:

```4d
$result:=Num("ABCD") // 0
$result:=Num("A1B2C3") // 123
$result:=Num("123") // 123
$result:=Num("123.4") // 123.4
$result:=Num("–123") // –123
$result:=Num("–123e2") // –12300
```

## Ejemplo 2

Aquí, *\[Client\]Debt* se compara con *1000$*. El comando Num aplicado a estas comparaciones devuelve 1 ó 0\. Multiplicar 1 o 0 por una cadena repite la cadena una vez o devuelve la cadena vacía. Como resultado, el campo *[Client]Risk* obtiene el valor “Good” or “Bad”:

```4d
  // If client owes less than 1000, a good risk.
  // If client owes more than 1000, a bad risk.
 [Client]Risk:=("Good"*Num([Client]Debt<1000))+("Bad"*Num([Client]Debt>=1000))
```

## Ejemplo 3

Este ejemplo compara los resultados obtenidos dependiendo del separador “actual”:

```4d
 $thestring:="33,333.33"
 $thenum:=Num($thestring)
  // by default, $thenum equals 33,33333 on a French system
 $thenum:=Num($thestring;".")
  // $thenum will be correctly evaluated regardless of the system;
  // for example, 33 333,33 on a French system
```

## Ejemplo 4

Este ejemplo ilustra el uso de la sintaxis *base*:

```4d
$result:=Num("ff";16) // 255 (lower-case hexadecimal)
$result:=Num("0xFF") // 0
$result:=Num("0xFF";16) // 255
$result:=Num("2";2) // 0
$result:=Num("10.3";16) // 16
$result:=Num("123.20") // 12320 (standard base 10 syntax)
$result:=Num("123.20"; 10) // 123 (explicitly specify base 10)

```

## Ver también

[Bool](../commands-legacy/bool.md)  
[GET SYSTEM FORMAT](../commands-legacy/get-system-format.md)  
[String](./string.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 11                          |
| Hilo seguro       | &check; |



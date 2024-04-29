---
id: propertiesDisplay
title: Visualización
---

---

## Formato Alfa

Los formatos alfabéticos controlan la forma en que aparecen los campos alfanuméricos y las variables cuando se visualizan o imprimen. Aquí hay una lista de formatos suministrados para los campos alfanuméricos:

![](../assets/en/FormObjects/property_alphaFormat.png)

Puede elegir un formato de esta lista o utilizar cualquier formato personalizado. La lista por defecto contiene formatos para algunos de los campos alfa más comunes que requieren formatos: Números de teléfono de EE. UU. (locales y de larga distancia), números de la Seguridad Social y códigos postales. También puede introducir un nombre de formato personalizado definido en el editor Filtros y formatos de la caja de herramientas. En este caso, el formato no se puede modificar en las propiedades del objeto.
Los formatos o filtros personalizados que haya creado estarán disponibles automáticamente, precedidos de una barra vertical (|).

El signo número (#) es el marcador de posición para un formato de visualización alfanumérico. Puede incluir los guiones, rayas, espacios y cualquier otro signo de puntuación que desee mostrar. Utilice los signos de puntuación que desee y el signo número para cada caracter que desee mostrar.

Por ejemplo, considere un número de parte con un formato como "RB-1762-1".

El formato alfa sería:

\##-####-#

Cuando el usuario introduce "RB17621," el campo muestra:

RB-1762-1

El campo contiene realmente "RB17621".

Si el usuario introduce más caracteres de los que permite el formato, 4D muestra los últimos caracteres. Por ejemplo, si el formato es:

(#######)

y el usuario introduce "proporción", el campo muestra:

(portion)

El campo contiene realmente "proportion". 4D acepta y almacena la entrada completa sin importar el formato de visualización. No se pierde ninguna información.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                 |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| textFormat | string         | "### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", formatos personalizados |

#### Objetos soportados

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato Fecha

Los formatos de fecha controlan la forma en que aparecen las fechas cuando se muestran o imprimen. Para la entrada de datos, las fechas se introducen en el formato MM/DD/AAAA, independientemente del formato de visualización que haya elegido.

Se pueden definir formatos de visualización para las fechas:

- utilizando un formato integrado en 4D,
- utilizando un modelo personalizado.

### Formatos integrados

La siguiente tabla muestra las opciones disponibles:

| Nombre del formato                                 | Cadena JSON                                  | Ejemplo (sistema USA)                      |
| -------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------- |
| System date short                                  | systemShort (por defecto) | 03/25/20                                                      |
| System date abbreviated _(1)_   | systemMedium                                 | Wed, Mar 25, 2020                                             |
| System date long                                   | systemLong                                   | Wednesday, March 25, 2020                                     |
| RFC 822                                            | rfc822                                       | Tue, 25 Mar 2020 22:00:00 GMT |
| Short Century                                      | shortCentury                                 | 03/25/20 but 04/25/2032 _(2)_              |
| Internal date long                                 | largo                                        | March 25, 2020                                                |
| Internal date abbreviated _(1)_ | abbreviated                                  | Mar 25, 2020                                                  |
| Internal date short                                | short                                        | 03/25/2020                                                    |
| ISO Date Time _(3)_             | iso8601                                      | 2020-03-25T00:00:00           |

_(1)_ To avoid ambiguity and in accordance with current practice, the abbreviated date formats display "jun" for June and "jul" for July. Esta particularidad sólo se aplica a las versiones francesas de 4D.

_(2)_ The year is displayed using two digits when it belongs to the interval (1930;2029) otherwise it will be displayed using four digits. This is by default but it can be modified using the [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/en/page392.html) command.

_(3)_ The `ISO Date Time` format corresponds to the XML date and time representation standard (ISO8601). Está pensado principalmente para ser utilizado al importar/exportar datos en formato XML y en Servicios Web.

> Independientemente del formato de visualización, si el año se introduce con dos dígitos, 4D asume que el siglo es el 21 si el año pertenece al intervalo (00;29) y el 20 si pertenece al intervalo (30;99). This is the default setting but it can be modified using the [SET DEFAULT CENTURY](https://doc.4d.com/4dv20/help/command/en/page392.html) command.

### Formatos personalizados

Customized date formats can be built using several patterns described in the [**Date and Time Formats**](../Project/date-time-formats.md) page. Por ejemplo:

| Modelo               | Ejemplo (sistema USA) |
| -------------------- | ---------------------------------------- |
| "eeee, dd"           | Wednesday, 29                            |
| "'Día' #D 'del año'" | Día 333 del año                          |

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                                                                                                                                    |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateFormat | string         | <li>Built-in formats: "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long" + " blankIfNull"</li><li>Custom formats: any format built using a [supported pattern](../Project/date-time-formats.md) + " blankIfNull"</li> |

:::note blankIfNull

Por defecto, una fecha null se muestra con ceros, por ejemplo 00/00/00. Con la opción "blankIfNull", una fecha null se muestra como un área vacía. La cadena "blankIfNull" (distingue mayúsculas de minúsculas) debe combinarse con el valor de formato seleccionado. Ej: "systemShort blankIfNull" o "ee dd LL blankIfNull".

:::

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato de número

> Los campos numéricos incluyen los tipos Integer, Long integer, Integer 64 bits, Real y Float.

Los formatos numéricos controlan la forma en que aparecen los números cuando se muestran o imprimen. Para la entrada de datos, sólo se introducen los números (incluido el punto decimal o el signo menos si es necesario), independientemente del formato de visualización que se haya elegido.

4D ofrece varios formatos de números por defecto.

### Marcadores

En cada uno de los formatos de visualización de números, el signo número (#), el cero (0), el signo de intercalación (^) y el asterisco (\*) se utilizan como marcadores de posición. Puede crear sus propios formatos numéricos utilizando un marcador de posición para cada dígito que desee mostrar.

| Marcador | Efecto para cero inicial o posterior      |
| -------- | ----------------------------------------- |
| #        | No muestra nada                           |
| 0        | Muestra 0                                 |
| ^        | Muestra un espacio (1) |
| -        | Muestra un asterisco                      |

(1) El signo de intercalación (^) genera un caracter de espacio que ocupa el mismo ancho que un dígito en la mayoría de los tipos de fuente.

Por ejemplo, si desea mostrar números de tres digitos, puede utilizar el formato ###. If the user enters more digits than the format allows, 4D displays <<< in the field to indicate that more digits were entered than the number of digits specified in the display format.

Si el usuario introduce un número negativo, el caracter situado más a la izquierda se muestra como un signo menos (a menos que se haya especificado un formato de visualización negativo). If ##0 is the format, minus 26 is displayed as –26 and minus 260 is displayed as <<< because the minus sign occupies a placeholder and there are only three placeholders.

> Sea cual sea el formato de visualización, 4D acepta y almacena el número introducido en el campo. No se pierde ninguna información.

Cada caracter de marcador de posición tiene un efecto diferente en la visualización de ceros a la izquierda o a la derecha. Un cero inicial es un cero que comienza un número antes del punto decimal; un cero final es un cero que termina un número después del punto decimal.

Supongamos que usa el formato ##0 para mostrar tres dígitos. Si el usuario no introduce nada en el campo, el campo muestra 0. Si el usuario introduce 26, el campo muestra 26.

### Caracteres separadores

Los formatos numéricos de visualización (excepto las notaciones científicas) se basan automáticamente en los parámetros regionales del sistema. 4D sustituye los caracteres "." y "," por, respectivamente, el separador decimal y el separador de miles definidos en el sistema operativo. Así, el punto y la coma se consideran caracteres comodín, siguiendo el ejemplo de 0 o #.

> En Windows, cuando se utiliza la tecla separadora decimal del teclado numérico, 4D hace una distinción según el tipo de campo donde se encuentre el cursor:
>
> - en un campo de tipo Real, al utilizar esta tecla se insertará el separador decimal definido en el sistema,
> - in any other type of field, this key inserts the character associated with the key, usually a period (.) o coma (,).

### Puntos decimales y otros caracteres de visualización

Puede utilizar un punto decimal en un formato de visualización de números. Si desea que el decimal se muestre independientemente de si el usuario lo teclea o no, debe colocarlo entre ceros.

Puede utilizar cualquier otro caracter en el formato. Cuando se utilizan solos, o se colocan antes o después de marcadores de posición, los caracteres siempre aparecen. Por ejemplo, si utiliza el siguiente formato:

$##0

siempre aparece un signo de dólar porque se coloca antes de los marcadores de posición.

Si se colocan caracteres entre los marcadores de posición, sólo aparecerán si se muestran dígitos a ambos lados. Por ejemplo, si define el formato:

\###.##0

el punto aparece sólo si el usuario introduce al menos cuatro dígitos.

Los espacios se tratan como caracteres en los formatos de visualización de números.

### Formatos para positivo, negativo y cero

Un formato de visualización de números puede tener hasta tres partes, lo que permite especificar formatos de visualización para valores positivos, negativos y cero. Especifique las tres partes separándolas con punto y coma, como se muestra a continuación:

Positivo;Negativo;Cero

No es necesario especificar las tres partes del formato. Si utiliza sólo una parte, 4D la utiliza para todos los números, colocando un signo menos delante de los números negativos.

Si utiliza dos partes, 4D utiliza la primera parte para los números positivos y el cero y la segunda parte para los números negativos. Si utiliza tres partes, la primera es para los números positivos, la segunda para los negativos y la tercera para el cero.

> La tercera parte (cero) no se interpreta y no acepta caracteres de sustitución. If you enter `###;###;#`, the zero value will be displayed “#”. En otras palabras, lo que realmente introduzca es lo que se mostrará para el valor cero.

A continuación se muestra un ejemplo de formato de visualización de números que muestra signos de dólar y comas, coloca los valores negativos entre paréntesis y no muestra ceros:

￥###,##0.00;(￥###,##0.00);

Observe que la presencia del segundo punto y coma indica a 4D que utilice nada para mostrar el cero. El siguiente formato es similar excepto que la ausencia del segundo punto y coma indica a 4D que utilice el formato de número positivo para el cero:

￥###,##0.00;(￥###,##0.00)

En este caso, la visualización del cero sería $0.00.

### Notación científica

If you want to display numbers in scientific notation, use the **ampersand** (&) followed by a number to specify the number of digits you want to display. Por ejemplo, el formato:

&3

mostrará 759.62 como:

7.60e+2

El formato de notación científica es el único que redondea automáticamente el número mostrado. Observe en el ejemplo anterior que el número se redondea a 7,60e+2 en lugar de truncarse en 7,59e+2.

### Formatos hexadecimales

Puede visualizar un número en hexadecimal utilizando los siguientes formatos de visualización:

- `&x`: This format displays hexadecimal numbers using the “0xFFFF” format.
- `&$`: This format displays hexadecimal numbers using the “$FFFF” format.

### Notación XML

The `&xml` format will make a number compliant with XML standard rules. En particular, el caracter separador decimal será un punto "." en todos los casos, independientemente de la configuración del sistema.

### Mostrar un número como una hora

You can display a number as a time (with a time format) by using `&/` followed by a digit. La hora se determina calculando el número de segundos desde medianoche que representa el valor. El dígito en el formato corresponde al orden en que aparece el formato de hora en el menú desplegable Formato.

Por ejemplo, el formato:

&/5

corresponde al 5º formato horario del menú desplegable, concretamente a la hora AM/PM. Un campo numérico con este formato mostraría 25000 como:

6:56 AM

### Ejemplos

La siguiente tabla muestra cómo afectan los distintos formatos a la visualización de los números. Las tres columnas, Positiva, Negativa y Cero, muestran cada una cómo se mostrarían 1.234,50, -1.234,50 y 0.

| Formato introducido                                                                   | Positivo                   | Negativo                                       | Cero                           |
| ------------------------------------------------------------------------------------- | -------------------------- | ---------------------------------------------- | ------------------------------ |
| ###                                                                                   | <<<                        | <<<                                            |                                |
| ####                                                                                  | 1234                       | <<<<                                           |                                |
| #######                                                                               | 1234                       | -1234                                          |                                |
| #####.##                                                              | 1234.5     | -1234.5                        |                                |
| ####0.00                                                              | 1234.50    | -1234.50                       | 0.00           |
| #####0                                                                                | 1234                       | -1234                                          | 0                              |
| +#####0;–#####0;0                                                                     | +1234                      | -1234                                          | 0                              |
| #####0DB;#####0CR;0                                                                   | 1234DB                     | 1234CR                                         | 0                              |
| #####0;(#####0)                                                    | 1234                       | (1234)                      | 0                              |
| ###,##0                                                                               | 1,234                      | -1,234                                         | 0                              |
| ##,##0.00                                                             | 1,234.50   | -1,234.50                      | 0.00           |
| \^\^\^\^\^\^\^                                                                 | 1234                       | -1234                                          |                                |
| \^\^\^\^\^\^0                                                                   | 1234                       | -1234                                          | 0                              |
| \^\^\^,\^\^0                                                                     | 1,234                      | -1,234                                         | 0                              |
| \^\^,\^\^0.00                                                     | 1,234.50   | -1,234.50                      | 0.00           |
| \*\*\*\*\*\*\*                                                                        | \*\*\*1234                 | \*\*-1234                                      | \*\*\*\*\*\*\*                 |
| \*\*\*\*\*\*0                                                                         | \*\*\*1234                 | \*\*-1234                                      | \*\*\*\*\*\*0                  |
| \*\*\*,\*\*0                                                                          | \*\*1,234                  | \*-1,234                                       | \*\*\*\*\*\*0                  |
| \*\*,\*\*0.00                                                         | \*1,234.50 | -1,234.50                      | \*\*\*\*\*0.00 |
| $\*,\*\*0.00;–$\*,\*\*0.00                            | $1,234.50  | -$1,234.50                     | $\*\*\*\*0.00  |
| $\^\^\^\^0                                                                        | $ 1234                     | $–1234                                         | $    0                         |
| $\^\^\^0;–$\^\^\^0                                                              | $1234                      | –$1234                                         | $   0                          |
| $\^\^\^0 ;($\^\^\^0)                                         | $1234                      | ($1234)                     | $   0                          |
| $\^,\^\^0.00 ;($\^,\^\^0.00) | $1,234.50  | ($1,234.50) | $    0.00      |
| &2                                                                | 1.2e+3     | -1.2e+3                        | 0.0e+0         |
| &5                                                                | 1.23450e+3 | -1.23450e+3                    | 0.00000        |
| &xml                                                              | 1234.5     | -1234.5                        | 0                              |

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                                                                          |
| ------------ | -------------- | ----------------------------------------------------------------------------------------- |
| numberFormat | string         | Números (incluyendo un punto decimal o un signo menos si es necesario) |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Progress Indicators](progressIndicator.md)

---

## Formato imagen

Los formatos Imagen controlan la apariencia de las imágenes cuando se muestran o se imprimen. Para la entrada de datos, el usuario siempre introduce las imágenes pegándolas desde el Portapapeles o arrastrándolas y soltándolas, independientemente del formato de visualización.

Las opciones de truncamiento y escalado no afectan a la imagen en sí. El contenido de un campo Imagen siempre se guarda. El formato de visualización de la imagen sólo afecta a la visualización en el formulario en cuestión.

### A escala para ajustarse

`Gramática JSON: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Truncado (centrado y no centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

The **Truncated (centered)** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D recorta por igual desde cada borde y desde la parte superior e inferior.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D corta desde la derecha y desde abajo.

> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

### Escala de ajuste (proporcional) y Escala de ajuste centrada (proporcional)

`Gramática JSON: "proportionalTopLeft" / "proportionalCenter"`

When you use **Scaled to fit (proportional)**, the picture is reduced proportionally on all sides to fit the area created for the picture. The **Scaled to fit centered (proportional)** option does the same, but centers the picture in the picture area.

Si la imagen es más pequeña que el área definida en el formulario, no se modificará. Si la imagen es mayor que el área definida en el formulario, se reduce proporcionalmente. Como se reduce proporcionalmente, la imagen no aparecerá distorsionada.

If you have applied the **Scaled to fit centered (proportional)** format, the picture is also centered in the area:

![](../assets/en/FormObjects/property_pictureFormat_ScaledProportional.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

Si el campo se reduce a un tamaño menor que el de la imagen original, la imagen queda truncada (no centrada).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                                                      |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| pictureFormat | string         | "truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter" |

#### Objetos soportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato Hora

Los formatos de hora controlan la forma en que aparecen las horas cuando se muestran o imprimen. For data entry, you enter times in the 24-hour HH: MM:SS format or the 12-hour HH: MM:SS AM/PM format, regardless of the display format you have chosen.

Se pueden definir los formatos de visualización de las horas:

- utilizando un formato integrado en 4D,
- utilizando un modelo personalizado.

### Formatos integrados

La siguiente tabla muestra los formatos de visualización de los campos de hora y da ejemplos:

| Nombre del formato                       | Cadena JSON                                        | Comentarios                                                                                                                                                                                          | Ejemplo para 04:30:25     |
| ---------------------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| HH:MM:SS | hh_mm_ss |                                                                                                                                                                                                      | 04:30:25                  |
| HH:MM                    | hh_mm                         |                                                                                                                                                                                                      | 04:30                                     |
| Hour Min Sec                             | HH_MM_SS |                                                                                                                                                                                                      | 4 horas 30 minutos 25 segundos                            |
| Hour Min                                 | HH_MM                         |                                                                                                                                                                                                      | 4 horas 30 minutos                                        |
| HH:MM AM/PM              | hh_mm_am |                                                                                                                                                                                                      | 4:30 a.m. |
| MM SS                                    | mm_ss                         | Hora expresada como duración a partir de las 00:00:00                                                                                                                | 270:25                                    |
| Min Sec                                  | MM_SS                         | Hora expresada como duración a partir de las 00:00:00                                                                                                                | 270 Minutos 25 Segundos                                   |
| ISO Date Time                            | iso8601                                            | Corresponde al estándar XML para representar datos relacionados con la hora. Está pensado principalmente para ser utilizado cuando se importan/exportan datos en formato XML         | 0000-00-00T04:30:25       |
| System time short                        | - (por defecto)                 | Formato de hora estándar definido en el sistema                                                                                                                                                      | 04:30:25                  |
| System time long abbreviated             | systemMedium                                       | sólo macOS: formato de tiempo abreviado definido en el sistema. <br/>Windows: este formato es el mismo que el formato corto de la hora del sistema   | 4•30•25 AM                                                |
| System time long                         | systemLong                                         | macOS únicamente: formato de tiempo largo definido en el sistema. <br/>Windows: este formato es el mismo que el formato corto de la hora del sistema | 4:30:25 AM HNEC           |

### Formatos personalizados

Customized time formats can be built using several patterns described in the [**Date and Time Formats**](../Project/date-time-formats.md) page. Por ejemplo:

| Modelo                                  | Ejemplo (sistema USA) |
| --------------------------------------- | ---------------------------------------- |
| "HH 'horas' mm 'minutos' ss 'segundos'" | 13 horas 25 minutos 12 segundos          |
| "hh:mm aa"              | 01:25 PM                 |

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                                                                                                                                                 |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timeFormat | string         | <li>Built-in formats: "systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS" + " blankIfNull"</li><li>Custom formats: any format built using [a supported pattern](../Project/date-time-formats.md) + "blankIfNull"</li> |

:::note blankIfNull

Por defecto, una hora null se muestra con ceros, por ejemplo "00:00:00". Con la opción "blankIfNull", una hora null se muestra como un área vacía. La cadena "blankIfNull" (distingue mayúsculas de minúsculas) debe combinarse con el valor de formato seleccionado. Ej: "MM_SS blankIfNull" o "hh:mm aa blankIfNull"

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Texto cuando False/Texto cuando True

When a [boolean expression](properties_Object.md#expression-type) is displayed as:

- a text in an [input object](input_overview.md)
- a ["popup"](properties_Display.md#display-type) in a [list box column](listbox_overview.md#list-box-columns),

... puede seleccionar el texto que se mostrará para cada valor:

- **Text when True** - the text to be displayed when the value is "true"
- **Text when False** - the text to be displayed when the value is "false"

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles                                                                                         |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| booleanFormat | string         | "\<_textWhenTrue_\>;\<_textWhenFalse_\>", e.g. "Assigned;Unassigned" |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Tipo de visualización

Utilizado para asociar un formato de visualización con los datos de la columna. Los formatos suministrados dependen del tipo de variable (list box de tipo array) o del tipo dato/campo (list boxes de tipo selección y colección).

Las columnas booleanas y numéricas (números o enteros) pueden mostrarse como casillas de verificación. In this case, the [Title](#title) property can be defined.

Las columnas booleanas también pueden mostrarse como menús emergentes. In this case, the [Text when False and Text when True](#text-when-false-text-when-true) properties must be defined.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                                                                                              |
| ----------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| controlType | string         | <li>**number columns**: "automatic" (default) or "checkbox"</li><li>**boolean columns**: "checkbox" (default) or "popup"</li> |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## No renderizado

Cuando esta propiedad está activada, el objeto no se dibuja en el formulario, sin embargo aún puede activarse.

En particular, esta propiedad permite implementar botones "invisibles".  Los botones no renderizados pueden colocarse sobre los objetos gráficos. Permanecen invisibles y no se resaltan al hacer clic sobre ellos, pero su acción se activa a al pulsarlos.

#### Gramática JSON

| Nombre  | Tipos de datos | Valores posibles |
| ------- | -------------- | ---------------- |
| display | boolean        | true, false      |

#### Objetos soportados

[Button](button_overview.md) - [Drop-down List](dropdownList_Overview.md)

---

## Tres estados

Permite que un objeto casilla de selección acepte un tercer estado. La variable asociada a la casilla de selección devuelve el valor 2 cuando la casilla está en el tercer estado.

#### Casillas de verificación de tres estados en columnas list box

List box columns with a numeric [data type](properties_Object.md#expression-type) can be displayed as three-states check boxes. Si se elige, se muestran los siguientes valores:

- 0 = casilla no seleccionada,
- 1 = casilla seleccionada,
- 2 (or any value >0) = semi-checked box (third state). Para la entrada de datos, este estado devuelve el valor 2.
- -1 = casilla de verificación invisible,
- -2 = casilla desmarcada, no editable,
- -3 = casilla marcada, no editable,
- -4 = casilla semi-marcada, no editable

In this case as well, the [Title](#title) property is also available so that the title of the check box can be entered.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| threeState | boolean        | true, false      |

#### Objetos soportados

[Check box](checkbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Título

Esta propiedad está disponible para una columna de list box si:

- the [column type](properties_Object.md#expression-type) is **boolean** and its [display type](properties_Display.md#display-type) is "Check Box"
- the [column type](properties_Object.md#expression-type) is **number** (numeric or integer) and its [display type](properties_Display.md#display-type) is "Three-states Checkbox".

En ese caso, el título de la casilla de verificación puede introducirse utilizando esta propiedad.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                                         |
| ------------ | -------------- | -------------------------------------------------------- |
| controlTitle | string         | Toda etiqueta personalizada para la casilla de selección |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Truncar con puntos suspensivos

Controla la visualización de los valores cuando las columnas del list box son demasiado estrechas para mostrar todo su contenido.

Esta opción está disponible para columnas con cualquier tipo de contenido, excepto imágenes y objetos.

- Cuando la propiedad está activada (por defecto), si el contenido de una celda del list box excede el ancho de la columna, se trunca y se muestra una elipsis:

![](../assets/en/FormObjects/property_truncate1.png)

> La posición de la elipsis depende del sistema operativo. En el ejemplo anterior (Windows), se añade a la derecha del texto. En macOS, la elipsis se añade en medio del texto.

- Cuando la propiedad está desactivada, si el contenido de una celda excede el ancho de la columna, simplemente se recorta sin añadir elipsis:

![](../assets/en/FormObjects/property_truncate2.png)

La opción Truncar con elipsis está activada por defecto y puede especificarse con list boxes de tipo Array, Selección o Colección.

> When applied to Text type columns, the Truncate with ellipsis option is available only if the [Wordwrap](#wordwrap) option is not selected. Cuando se selecciona la propiedad Ajuste de palabras, el contenido adicional de las celdas se gestiona mediante las funciones de ajuste de palabras, por lo que la propiedad Truncar con elipsis no está disponible.

The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the [cell format](#display-type):

- En los formatos booleanos de tipo emergente, las etiquetas se truncan con una elipsis,
- Para los formatos booleanos de tipo casilla de verificación, las etiquetas siempre se recortan.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles       |
| ------------ | -------------- | ---------------------- |
| truncateMode | string         | "withEllipsis", "none" |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-footers)

---

## Visibilidad

Esta propiedad permite ocultar el objeto en el entorno Aplicación.

Puede manejar la propiedad Visibilidad para la mayoría de los objetos del formulario. Esta propiedad se utiliza principalmente para simplificar el desarrollo de interfaces dinámicas. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. In this context, it is often necessary to hide objects programatically during the <code>On load</code> event of the form then to display certain objects afterwards. The developer can then program their display using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv19/help/command/en/page603.html) command when needed.

#### Visibilidad automática en los formularios lista

In the context of ["list" forms](FormEditor/properties_FormProperties.md#form-type), the Visibility property supports two specific values:

- **If record selected** (JSON name: "selectedRows")
- **If record not selected** (JSON name: "unselectedRows")

Esta propiedad sólo se utiliza cuando se dibujan objetos situados en el cuerpo de un formulario listado. Indica a 4D si debe o no dibujar el objeto dependiendo de si el registro que se está procesando está seleccionado/no seleccionado. Permite representar una selección de registros utilizando atributos visuales distintos de los colores de resaltado:

![](../assets/en/FormObjects/select-row.png)

4D does not take this property into account if the object was hidden using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv20/help/command/en/page603.html) command; in this case, the object remains invisible regardless of whether or not the record is selected.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                            |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| visibility | string         | "visible", "hidden", "selectedRows" (formulario listado únicamente), "unselectedRows" (formulario listado únicamente) |

#### Objetos soportados

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Ajuste de texto

> For [input](input_overview.md) objects, available when the [Multiline](properties_Entry.md#multiline) property is set to "yes" .

Gestiona la visualización del contenido cuando supera el ancho del objeto.

#### Marcada para list box/Sí para entrada

`JSON grammar: "normal"`

Cuando esta opción está seleccionada, el texto pasa automáticamente a la línea siguiente siempre que su ancho supere el de la columna/área, si la altura de la columna/área lo permite.

- En las columnas/áreas de una sola línea, sólo se muestra la última palabra que puede mostrarse entera. 4D inserta retornos de línea; es posible desplazarse por el contenido del área presionando la tecla de flecha abajo.

- En las columnas/áreas multilínea, 4D realiza retornos de línea automáticos.

![](../assets/en/FormObjects/wordwrap2.png)

#### Sin marcar para el list box/No para entrada

`JSON grammar: "none"`

Cuando se selecciona esta opción, 4D no realiza ningún retorno de línea automático y la última palabra que se puede mostrar puede quedar truncada. En las áreas de tipo de texto, se soportan los retornos de carro:

![](../assets/en/FormObjects/wordwrap3.png)

En los list boxes, el texto demasiado largo se trunca y se muestra con una elipse (...). In the following example, the Wordwrap option is **checked for the left column** and **unchecked for the right column**:

![](../assets/en/FormObjects/property_wordwrap1.png)

Tenga en cuenta que, independientemente del valor de la opción Ajuste de texto, la altura de la línea no se modifica. Si el texto con saltos de línea no puede visualizarse por completo en la columna, se trunca (sin elipse). En el caso de los list boxes que muestran una sola línea, sólo se muestra la primera línea de texto:

![](../assets/en/FormObjects/property_wordwrap2.png)

#### Automático para entrada (opción por defecto)

`JSON grammar: "automatic"`

- En las áreas de una sola línea, las palabras situadas al final de las líneas se truncan y no hay retornos de línea.
- En áreas multilíneas, 4D realiza retornos de línea automáticos.

![](../assets/en/FormObjects/wordwrap1.png)

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                       |
| -------- | -------------- | ---------------------------------------------------------------------- |
| wordwrap | string         | "automatic" (excluyendo list box), "normal", "none" |

#### Objetos soportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

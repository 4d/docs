---
id: formulas
title: Fórmulas y funciones
---
   
## Utilización de las fórmulas

Una fórmula de hoja de cálculo es una expresión que calcula el valor de una celda.

### Entrada de las fórmulas

Para introducir una fórmula en un área 4D View Pro:

1. Seleccione la celda en la que introducirá la fórmula o función.
2. Introduzca = (el signo igual).
3. Escriba la fórmula y presione la tecla **Intro**.

Al escribir una fórmula, puede utilizar diferentes atajos:

- haga clic en una celda para introducir su referencia en la fórmula:

![](../assets/en/ViewPro/formulas.PNG)

- escriba la primera letra de una función a ingresar. Aparece un menú contextual en el que se listan las funciones y referencias disponibles, permitiéndole seleccionar los elementos deseados:

![](../assets/en/ViewPro/formula2.png)

También puede crear fórmulas con nombre que pueden ser llamadas a través de su nombre. Para ello, introduzca estas fórmulas utilizando el comando [VP ADD FORMULA NAME](method-list.md#vp-add-formula-name).

### Operadores y operandos

Todas las fórmulas tienen operandos y operadores:

- **Operadores**: ver [Valores y operadores](#valores-y-operadores) abajo.
- Los **operandos** incluyen varias categorías:
  - Los [valores](#values-and-operators) (soportan 5 tipos de datos)
  - Las [referencias a otras celdas](#cell-references) (relativas, absolutas, mixtas o por nombre)
  - [funciones estándar de hoja de cálculo](#using-functions)
  - Las [funciones 4D](#4d-functions) basados en fórmulas 4D y que dan acceso a variables, campos, métodos, comandos o expresiones 4D.

## Valores y operadores

4D View Pro soporta cinco tipos de datos. Para cada tipo de datos, se soportan valores literales y de operadores específicos.

| Tipos de datos                    | Valores                                               | Operadores                                                                                                                                                                                                                                            |
| --------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Number](Concepts/dt_number.md)   | 1.2<br/>1.2 E3<br/>1.2E-3<br/>10.3x | + (suma)<br/>- (resta)<br/>* (multiplicación)<br/>/ (división)<br/>^ (exponente, el número de veces que hay que multiplicar un número por sí mismo)<br/>% (porcentaje -- dividir el número antes del operador por cien) |
| [Fecha](Concepts/dt_date.md)      | 10/24/2017                                            | + (fecha + número de días -> fecha)<br/>+ (fecha + hora -> fecha + hora del día)<br/>- (fecha - número de días -> fecha)<br/>- (fecha - fecha -> número de días entre los dos)                                                      |
| [Hora](Concepts/dt_time.md)       | 10:12:10                                              | Duration operators: + (addition)<br/>- (subtraction)<br/>*(duration* number -> duration)<br/>/ (duration / number -> duration)                                                                                                      |
| [String](Concepts/dt_string.md)   | 'Sophie' o "Sophie"                                   | & (concatenación)                                                                                                                                                                                                                                     |
| [Boolean](Concepts/dt_boolean.md) | TRUE o FALSE                                          | -                                                                                                                                                                                                                                                     |

### Operadores de comparación

Los siguientes operadores pueden utilizarse con dos operandos del mismo tipo:

| Operador   | Comparación       |
| ---------- | ----------------- |
| =          | igual a           |
| `<>` | es diferente de   |
| >          | mayor que         |
| <          | menor que         |
| >=         | mayor o igual que |
| <=         | menor o igual que |

### Presedencia de los operadores

Lista de los operadores de la mas a menos importante:

| Operador                            | Descripción               |
| ----------------------------------- | ------------------------- |
| ()                                  | Paréntesis (para agrupar) |
| -                                   | Negativo                  |
| +                                   | Más                       |
| %                                   | Porcentaje                |
| ^                                   | Exponente                 |
| * y /                               | Multiplicar y dividar     |
| + y -                               | Añadir y restar           |
| &                                   | Concatenar                |
| `=  > < >= <= <>` | Comparar                  |

## Referencias de celdas

Las fórmulas a menudo se refieren a otras celdas por medio de direcciones de celdas. Puede copiar estas fórmulas a otras celdas. For example, the following formula, entered in cell C8, adds the values in the two cells above it and displays the result.

```
= C6 + C7
```

Esta fórmula se refiere a las celdas C6 y C7. That is, 4D View Pro is instructed to refer to these other cells for values to use in the formula.

When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.

- A reference that changes is called a **relative reference**, and refers to a cell by how far left/right and up/down it is from the cell with the formula.
- Una referencia que siempre apunta a una celda particular se denomina **referencia absoluta**.
- También puede crear una referencia mixta que apunte siempre a una línea o columna fija.

### Notación de las referencias

Si sólo utiliza coordenadas de celda, por ejemplo, `C5`, 4D View Pro interpreta la referencia como relativa. Puede hacer que la referencia sea absoluta poniendo un signo de dólar delante de la letra y el número, como en `$C$5`.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, `$C5` or `C$5`. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.

A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. Una referencia a una celda nombrada es siempre absoluta. You can create or modify named cells or named cell ranges using the [`VP ADD RANGE NAME`](method-list.md#vp-add-range-name) method.

La siguiente tabla muestra el efecto de las diferentes notaciones:

| Ejemplo            | Tipo de referencia | Descripción                                                                                                                                                     |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| C5                 | Relativo           | Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used                                    |
| $C$5               | Absoluto           | La referencia es absoluta. Siempre se referirá a la celda C5 sin importar dónde se utilice.                                                                     |
| $C5                | Mixed              | Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.                            |
| C$5                | Mixed              | La referencia es siempre la línea 5, pero la referencia de la columna es relativa a la ubicación de la celda en la que se utiliza la referencia por primera vez |
| Nombre de la celda | Absoluto           | La referencia es absoluta. Siempre se referirá a la [celda o rango nombrado](method-list.md#vp-add-range-name) sin importar donde se use la referencia.         |

## Funciones integradas

Las funciones de hoja de cálculo son fórmulas predefinidas utilizadas para calcular los valores de las celdas. Al teclear la primera letra de la función a introducir, aparece un menú emergente con las funciones y referencias disponibles, que permite seleccionar los elementos deseados:

![](../assets/en/ViewPro/vpFormula2.PNG)

Ver [**Lista extendida de funciones de SpreadJS**](https://www.grapecity.com/spreadjs/docs/v14/online/FormulaFunctions.html) para más detalles y ejemplos.

## Funciones 4D

4D View Pro le permite definir y llamar ** las funciones 4D personalizadas**, que ejecutan las [fórmulas 4D](API/FunctionClass.md). El uso de las funciones personalizadas 4D extiende las posibilidades de sus documentos 4D View Pro y permite interacciones avanzadas con la base de datos 4D.

Las funciones personalizadas 4D permiten acceder, desde sus fórmulas 4D View Pro, a:

- variables proceso 4D,
- campos,
- métodos proyecto,
- comandos del lenguaje 4D,
- o cualquier expresión válida de 4D.

Las funciones personalizadas 4D pueden recibir los [parámetros ](#parameters) desde el área 4D View Pro, y devolver los valores.

Usted declara todas sus funciones utilizando el método [`VP SET CUSTOM FUNCTIONS`](method-list.md#vp-set-custom-functions). Ejemplos:

```4d
o:=New object

//Nombre de la fonción en 4D View Pro: "DRIVERS_LICENCE"
$o.DRIVERS_LICENCE:=New object

/variable process
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicence)

//campo table
$o.DRIVERS_LICENCE.formula:=Formula([Users]DriverLicence)

//método proyecto
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicenceState)

//Comando 4D
$o.DRIVERS_LICENCE:=Formula(Choose(DriverLicence; "Obtained"; "Failed"))

//expresión y parámetro 4D 
$o.DRIVERS_LICENCE.formula:=Formula(ds.Users.get($1).DriverLicence)
$o.DRIVERS_LICENCE.parameters:=New collection
$o.DRIVERS_LICENCE.parameters.push(New object("name"; "ID"; "type"; Is longint))
```

> **Ver también** [4D View Pro: Utilización de las fórmulas 4D en su hoja de cálculo (entrada de blog)](https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)

### Ejemplo con Hello World

Queremos imprimir "Hola Mundo" en una celda del área 4D View Pro utilizando un método proyecto 4D:

1. Cree un método proyecto "myMethod" con el siguiente código:

```4d
 #DECLARE->$hw Text
 $hw:="Hello World"

```

2. Ejecute el siguiente código antes de abrir cualquier formulario que contenga un área 4D View Pro:

```4d
  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Definir la función "vpHello" a partir del método "myMethod"
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
```

3. Edite el contenido de una celda en un área 4D View Pro y escriba:

 ![](../assets/en/ViewPro/vpProjMeth1.PNG)

 "myMethod" es entonces llamado por 4D y la la celda se muestra:

 ![](../assets/en/ViewPro/vpProjMeth2.PNG)

### Parámetros

Los parámetros se pueden pasar a las funciones 4D que llaman a los métodos proyecto utilizando la siguiente sintaxis:

```
=METHODNAME(param1,param2,...,paramN)
```

Estos parámetros se reciben en *methodName* en $1, $2...$N.

Tenga en cuenta que los ( ) son obligatorios, incluso si no se pasan parámetros:

```
=METHODWITHOUTNAME()
```

Puede declarar el nombre, el tipo y el número de parámetros a través de la colección de *parámetros* de la función que declaró utilizando el método [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions). Opcionalmente, puede controlar el número de parámetros pasados por el usuario a través de las propiedades *minParams* y *maxParams*.

Para más información sobre los tipos de parámetros entrantes soportados, consulte la descripción del método [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions).

> Si no se declaran los parámetros, los valores pueden pasarse secuencialmente a los métodos (se recibirán en $1, $2...) y su tipo se convertirá automáticamente. Dates in *jstype* will be passed as [object](Concepts/dt_object.md) in 4D code with two properties: |Property| Type| Description| |---|---|---| |value| Date| Date value| |time |Real| Time in seconds|

Los métodos proyecto 4D también pueden devolver valores en la fórmula de la celda 4D View Pro a través de $0. Los siguientes tipos de datos son soportados para los parámetros devueltos:

- [text](Concepts/dt_string.md) (convertido en cadena de caracteres en 4D View Pro)
- [real](Concepts/dt_number.md)/[longint](Concepts/dt_number.md) (convertido a número en 4D View Pro)
- [date](Concepts/dt_date.md) (convertido en tipo JS Date en 4D View Pro - hora, minuto, segundo = 0)
- [time](Concepts/dt_time.md) (convertida en tipo JS Date en 4D View Pro - date en date de base, es decir, 30/12/1899)
- [boolean](Concepts/dt_boolean.md) (converted to bool in 4D View Pro)
- [picture](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed
- [object](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):

 | Propiedad | Tipo  | Descripción      |
 | --------- | ----- | ---------------- |
 | value     | Fecha | Valor fecha      |
 | time      | Real  | Hora en segundos |

Si el método 4D no devuelve nada, se devuelve automáticamente una cadena vacía.

Se devuelve un error en la celda 4D View Pro si:

- el método 4D devuelve otro tipo distinto de los mencionados anteriormente,
- an error occurred during 4D method execution (when user clicks on "abort" button).

#### Ejemplo

```4d
var $o : Object

$o.BIRTH_INFORMATION:=New object
$o.BIRTH_INFORMATION.formula:=Formula(BirthInformation)
$o.BIRTH_INFORMATION.parameters:=New collection
$o.BIRTH_INFORMATION.parameters.push(New object("name";"First name";"type";Is text))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Birthday";"type";Is date))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Time of birth";"type";Is time))
$o.BIRTH_INFORMATION.summary:="Returns a formatted string from given information"

VP SET CUSTOM FUNCTIONS("ViewProArea"; $o)
```

![](../assets/en/ViewPro/params.png)

## Compatibilidad

Alternate solutions are available to declare fields or methods as functions in your 4D View Pro areas. These solutions are maintained for compatibility reasons and can be used in specific cases. However, using the [`VP SET CUSTOM FUNCTIONS`](method-list.md#vp-set-custom-functions) method is recommended.

### Referenciación de campos mediante la estructura virtual

4D View Pro allows you to reference 4D fields using the virtual structure of the database, i.e. declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter. This alternate solution could be useful if your application already relies on a virtual structure (otherwise, [using `VP SET CUSTOM FUNCTIONS`](#4d-functions) is recommended).

> **ATENCIÓN:** No puede utilizar la estructura virtual y `VP SET CUSTOM FUNCTIONS` simultáneamente. En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, las funciones basadas en los comandos `SET TABLE TITLES` y `SET FIELD TITLES` se ignoran en el área 4D View Pro.

#### Requisitos

- El campo debe pertenecer a la estructura virtual de la base de datos, es decir, debe ser declarado por los comandos [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) y/o [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) con el parámetro \* (ver ejemplo),
- Los nombres de las tablas y de los campos deben ser conformes con la norma ECMA (ver el [estándard ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)),
- El tipo de campo debe ser soportado por 4D View Pro (ver arriba).

Se devuelve un error en la celda 4D View Pro si la fórmula llama a un campo que no es compatible.

#### Llamar a un campo virtual en una fórmula

Para insertar una referencia a un campo virtual en una fórmula, introduzca el campo con la siguiente sintaxis:

```
TABLENAME_FIELDNAME()
```

Por ejemplo, si declaró el campo "Name" de la tabla "People" en la estructura virtual, puede llamar las siguientes funciones:

```
=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
```

> Si un campo tiene el mismo nombre que un [método 4D], tiene prioridad sobre el método.

#### Ejemplo

Queremos imprimir el nombre de una persona en una celda del área 4D View Pro utilizando un campo virtual 4D:

1. Crear una tabla "Employee" con un campo "L_Name":

![](../assets/en/ViewPro/vpFieldMeth1.PNG)

2. Ejecuta el siguiente código para inicializar una estructura virtual:

 ```4d
 ARRAY TEXT($tableTitles;1)
 ARRAY LONGINT($tableNum;1)
 $tableTitles{1}:="Emp"
 $tableNum{1}:=2
 SET TABLE TITLES($tableTitles;$tableNum;*)

 ARRAY TEXT($fieldTitles;1)
 ARRAY LONGINT($fieldNum;1)
 $fieldTitles{1}:="Name"
 $fieldNum{1}:=2 //last name
 SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
 ```

3. Edite el contenido de una celda en el área 4D View Pro e introduzca "=e":

![](../assets/en/ViewPro/vpFieldMeth2.PNG)

4. Seleccione EMP_NAME (utilice la tecla Tab) e introduzca el cierre).

![](../assets/en/ViewPro/vpFieldMeth3.PNG)

5. Valide el campo para mostrar el nombre del empleado actual:

![](../assets/en/ViewPro/vpFieldMeth4.PNG)
> La tabla \[Employee] debe tener un registro actual.

### Declarar los métodos autorizados

Puede llamar directamente a los métodos del proyecto 4D desde sus fórmulas 4D View Pro. Por razones de seguridad, debe declarar explícitamente los métodos que pueden ser llamados por el usuario con el método [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods).

#### Requisitos

Para ser llamado en una fórmula 4D View Pro, un método proyecto debe ser:

- **Autorizado**: fue declarado explícitamente utilizando el método [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods).
- **Ejecutable**: pertenece al proyecto local o a un componente cargado con la opción "Compartido por los componentes y el proyecto local" activada (ver [Compartir los métodos proyecto](../Concepts/components.md#sharing-of-project-methods)).
- **No está en conflicto** con una función de hoja de cálculo 4D View Pro existente: si llama a un método proyecto con el mismo nombre que una función integrada 4D View Pro, se llama a la función.
> > If neither the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) nor the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. En este caso, los nombres de los métodos proyecto deben cumplir con la gramática de identificación JavaScript (ver [Estándar ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). La opción de filtrado global de la caja de diálogo Parámetros (ver *Acceso a los datos*) se ignora en todos los casos.

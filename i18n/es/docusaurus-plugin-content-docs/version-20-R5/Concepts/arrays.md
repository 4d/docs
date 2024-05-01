---
id: arrays
title: Arrays
---

An **array** is an ordered series of **variables** of the same type. Each variable is called an **element** of the array. Un array recibe su tamaño cuando se crea; luego se puede redimensionar tantas veces como sea necesario añadiendo, insertando o eliminando elementos, o redimensionando el array utilizando el mismo comando utilizado para crearlo. Los elementos del array se numeran de 1 a N, siendo N el tamaño del array. An array always has a special [element zero](#using-the-element-zero-of-an-array). Los arrays son variables 4D. Como toda variable, un array tiene un alcance y sigue las reglas del lenguaje 4D, aunque con algunas diferencias únicas.

> In most cases, it is recommended to use **collections** instead of **arrays**. Las colecciones son más flexibles y ofrecen una amplia gama de métodos dedicados. For more information, please refer to the [Collection](Concepts/dt_collection.md) section.

## Crear arrays

Se crea un array con uno de los comandos de declaración del tema "Arrays". Cada comando de declaración de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. For more information about two-dimensional arrays, see the [two dimensional arrays](#two-dimensional-arrays) section.

La siguiente línea de código crea (declara) un array de enteros de 10 elementos:

```4d
 ARRAY INTEGER(aiAnArray;10)
```

A continuación, el siguiente código redimensiona ese mismo array a 20 elementos:

```4d
ARRAY INTEGER(aiAnArray;20)
```

A continuación, el siguiente código redimensiona ese mismo array a 0 elementos:

```4d
ARRAY INTEGER(aiAnArray;0)
```

## Asignar valores en arrays

Para referirse a los elementos de un array se utilizan llaves ({...}). Dentro de las llaves se utiliza un número para dirigirse a un elemento concreto; este número se denomina número de elemento. Las siguientes líneas ponen cinco nombres en el array llamado atNames y luego los muestran en ventanas de alerta:

```4d
 ARRAY TEXT(atNames;5)
 atNames{1}:="Richard"
 atNames{2}:="Sarah"
 atNames{3}:="Sam"
 atNames{4}:="Jane"
 atNames{5}:="John"
 For($vlElem;1;5)
    ALERT("The element #"+String($vlElem)+" is equal to: "+atNames{$vlElem})
 End for
```

Tenga en cuenta la sintaxis atNames{$vlElem}. En lugar de especificar un literal numérico como atNames{3}, puede utilizar una variable numérica para indicar a qué elemento de un array se dirige. Using the iteration provided by a loop structure (`For...End for`, `Repeat...Until` or `While...End while`), compact pieces of code can address all or part of the elements in an array.

**Important:** Be careful not to confuse the assignment operator (:=) with the comparison operator, equal (=). La asignación y la comparación son operaciones muy diferentes.

### Asignación de un array a otro array

A diferencia de las variables de tipo texto o cadena, no se puede asignar un array a otro. To copy (assign) an array to another one, use `COPY ARRAY`.

## Utilizar el elemento cero de un array

Un array siempre tiene un elemento cero. Aunque el elemento cero no se muestra cuando un array soporta un objeto de formulario, no hay ninguna restricción(\*) para utilizarlo en el lenguaje.

He aquí otro ejemplo: quiere inicializar un objeto de formulario con un valor texto pero sin definir un valor por defecto. Puede utilizar el elemento cero del array:

```4d
  // method for a combo box or drop-down list  
  // bound to atName variable array
 Case of
    :(Form event code=On Load)
  // Initialize the array (as shown further above)  
  // But use the element zero
		ARRAY TEXT(atName;5)
		atName{0}:=Please select an item"
		atName{1}:="Text1"
		atName{2}:="Text2"
		atName{3}:="Text3"
		atName{4}:="Text4"
		atName{5}:="Text5"
	// Position the array to element 0
  		atName:=0
 End case
```

(\*) Sin embargo, hay una excepción: en un array tipo List Box, el elemento cero se utiliza internamente para almacenar el valor anterior de un elemento que se está editando, por lo que no es posible utilizarlo en este contexto particular.

## Arrays de dos dimensiones

Cada comando de declaración de arrays puede crear o redimensionar arrays unidimensionales o bidimensionales. Ejemplo:

```4d
 ARRAY TEXT(atTopics;100;50) // Crear un array texto compuesto por 100 líneas de 50 columnas
```

Los arrays de dos dimensiones son esencialmente objetos de lenguaje; no se pueden mostrar ni imprimir.

En el ejemplo anterior:

- atTopics es una array de dos dimensiones
- atTopics{8}{5} is the 5th element (5th column...) de la 8ª fila
- atTopics{20} es la vigésima fila y es a su vez un array de una dimensión
- `Size of array(atTopics)` returns 100, which is the number of rows
- `Size of array(atTopics{17})` returns 50, which the number of columns for the 17th row

En el siguiente ejemplo, un puntero a cada campo de cada tabla de la base se almacena en un array de dos dimensiones:

```4d
 C_LONGINT($vlLastTable;$vlLastField)
 C_LONGINT($vlFieldNumber)
  // Create as many rows (empty and without columns) as there are tables
 $vlLastTable:=Get last table number
 ARRAY POINTER(<>apFields;$vlLastTable;0) //2D array with X rows and zero columns
  // For each table
 For($vlTable;1;$vlLastTable)
    If(Is table number valid($vlTable))
       $vlLastField:=Get last field number($vlTable)
  // Give value of elements
       $vlColumnNumber:=0
       For($vlField;1;$vlLastField)
          If(Is field number valid($vlTable;$vlField))
             $vlColumnNumber:=$vlColumnNumber+1
  //Insert a column in a row of the table underway
             INSERT IN ARRAY(<>apFields{$vlTable};$vlColumnNumber;1)
  //Assign the "cell" with the pointer
             <>apFields{$vlTable}{$vlColumnNumber}:=Field($vlTable;$vlField)
          End if
       End for
    End if
 End for
```

Siempre que se haya inicializado este array de dos dimensiones, se pueden obtener los punteros a los campos de una tabla concreta de la siguiente manera:

```4d
  // Get the pointers to the fields for the table currently displayed at the screen:
 COPY ARRAY(◊apFields{Table(Current form table)};$apTheFieldsIamWorkingOn)
  // Initialize Boolean and Date fields
 For($vlElem;1;Size of array($apTheFieldsIamWorkingOn))
    Case of
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is date)
          $apTheFieldsIamWorkingOn{$vlElem}->:=Current date
       :(Type($apTheFieldsIamWorkingOn{$vlElem}->)=Is Boolean)
          $apTheFieldsIamWorkingOn{$vlElem}->:=True
    End case
 End for
```

**Note:** As this example suggests, rows of a two-dimensional arrays can be the same size or different sizes.

## Arrays y memoria

A diferencia de los datos que se almacenan en el disco mediante tablas y registros, un array se mantiene siempre en memoria en su totalidad.

Por ejemplo, si se introdujeran todos los códigos postales de EE. UU. en la tabla [Zip Codes], ésta contendría unos 100.000 registros. Además, esa tabla incluiría varios campos: el propio código postal y la ciudad, el condado y el estado correspondientes. Si selecciona sólo los códigos postales de California, el motor de la base 4D crea la correspondiente selección de registros dentro de la tabla [Zip Codes], y luego carga los registros sólo cuando se necesitan (es decir, cuando se visualizan o imprimen). En palabras de orden, se trabaja con una serie ordenada de valores (del mismo tipo para cada campo) que se carga parcialmente desde el disco a la memoria por el motor de la base 4D.

Hacer lo mismo con arrays sería prohibido por las siguientes razones:

- Para mantener los cuatro tipos de información (código postal, ciudad, condado, estado), habría que mantener cuatro grandes arrays en memoria.
- Como un array se mantiene siempre en memoria en su totalidad, habría que mantener toda la información de los códigos postales en memoria durante toda la sesión de trabajo, aunque los datos no estén siempre en uso.
- De nuevo, dado que un array se mantiene siempre en memoria en su totalidad, cada vez que se inicia la aplicación y se sale de ella, los cuatro arrays tendrían que cargarse y luego guardarse en el disco, aunque los datos no se utilicen ni se modifiquen durante la sesión de trabajo.

**Conclusion:** Arrays are intended to hold reasonable amounts of data for a short period of time. Por otro lado, como los arrays se mantienen en memoria, son fáciles de manejar y rápidos de manipular.

Sin embargo, en algunas circunstancias, puede ser necesario trabajar con arrays que contengan cientos o miles de elementos. La siguiente tabla muestra las fórmulas utilizadas para calcular la cantidad de memoria utilizada para cada tipo de array:

| Tipo de array   | Fórmula para determinar el uso de la memoria en bytes                                                          |
| --------------- | -------------------------------------------------------------------------------------------------------------- |
| Blob            | (1+número de elementos) \* 12 + Suma del tamaño de cada blob                                |
| Boolean         | (31+número de elementos)\N8                                                                 |
| Fecha           | (1+número de elementos) \* 6                                                                |
| Integer         | (1+número de elementos) \* 2                                                                |
| Entero largo    | (1+número de elementos) \* 4                                                                |
| Object          | (1+número de elementos) \* 8 + Suma del tamaño de cada objeto                               |
| Picture         | (1+número de elementos) \* 8 + Suma del tamaño de cada imagen                               |
| Puntero         | (1+número de elementos) \* 8 + Suma del tamaño de cada puntero                              |
| Real            | (1+número de elementos) \* 8                                                                |
| Text            | (1+número de elementos) \* 20 + (suma de la longitud de cada texto) \* 2 |
| Hora            | (1+número de elementos) \* 4                                                                |
| Dos dimensiones | (1+número de elementos) \* 16 + Suma del tamaño de cada array                               |

**Notas:**

- El tamaño de un texto en memoria se calcula con esta fórmula ((Longitud + 1) \* 2)
- Se requieren algunos bytes adicionales para llevar la cuenta del elemento seleccionado, el número de elementos y el propio array.

---
id: identifiers
title: Identificadores
---

Esta sección describe las convenciones y reglas para nombrar los distintos elementos del lenguaje 4D (variables, tablas, objetos, formularios, etc.).

## Reglas básicas

Las siguientes reglas se aplican a todas las estructuras de 4D.

- Un nombre debe comenzar por un carácter alfabético, un guión bajo o un dólar ("$") (tenga en cuenta que un signo de dólar puede denotar un elemento local, ver).
- A partir de ahí, el nombre puede incluir caracteres alfabéticos, numéricos, el carácter espacio y el carácter de subrayado ("_").
- Puntos (".") Puntos (".") Puntos (".") Puntos (".") y corchetes ("[ ]") no están permitidos en los nombres de tablas, campos, métodos o variables.
- No se permiten comas, barras inclinadas, comillas ni dos puntos.
- Los caracteres reservados para su uso como operadores, como * y +, no están permitidos.
- No utilice nombres reservados, es decir, nombres de comandos 4D (`Date`, `Time`, etc.), palabras clave (If, For, etc.) y constantes.
- Los espacios finales se ignoran.

### Reglas adicionales para las propiedades de los objetos y los nombres ORDA

- Los caracteres de espacio no están permitidos.
- Puntos (".") Puntos (".") Puntos (".") Puntos (".") Periods (".") and brackets ("[ ]") are not allowed.
- Los nombres son sensibles a las mayúsculas y minúsculas.

### Reglas adicionales para SQL

- Sólo se aceptan los caracteres _0123456789abcdefghijklmnopqrstuvwxyz
- Los nombres no deben incluir ninguna palabra clave SQL (comando, atributo, etc.).

**Nota:** el área "SQL" del Inspector en el editor de estructuras indica automáticamente cualquier carácter no autorizado en el nombre de una tabla o campo.

## Tablas

Una tabla se designa colocando su nombre entre paréntesis: [...]. Un nombre de tabla puede contener hasta 31 caracteres.

Ejemplos:

```4d
DEFAULT TABLE([Orders])
FORM SET INPUT([Clients];"Entry")
ADD RECORD([Letters])
```

## Campos

Para designar un campo hay que especificar primero la tabla a la que pertenece. El nombre del campo va inmediatamente después del nombre de la tabla. Un nombre de campo puede contener hasta 31 caracteres.

Ejemplos:

```4d
[Orders]Total:=Sum([Line]Amount)
QUERY([Clients];[Clients]Name="Smith")
[Letters]Text:=Capitalize text([Letters]Text)
```

## Variables interproceso

Una variable interproceso se designa precediendo el nombre de la variable con los símbolos (`<>`) — un signo "menor que" seguido de un signo "mayor que".

El nombre de una variable interproceso puede tener hasta 31 caracteres, sin incluir los símbolos `<>`.

Ejemplos:

```4d
<>vlProcessID:=Current process
<>vsKey:=Char(KeyCode)
If(<>vtName#"")
```

## Variables proceso

Una variable de proceso se designa con su nombre (que no puede empezar con los símbolos `<>` ni el signo dólar $). Un nombre de variable proceso puede contener hasta 31 caracteres.

Ejemplos:

```4d
<>vrGrandTotal:=Sum([Accounts]Amount)
If(bValidate=1)
vsCurrentName:=""
```

## Variables locales

Una variable local se designa colocando un signo de dólar ($) antes del nombre de la variable. Un nombre de variable local puede contener hasta 31 caracteres, sin incluir el signo del dólar.

Ejemplos:

```4d
For($vlRecord;1;100)
If($vsTempVar="No")
$vsMyString:="Hola"
```

## Arrays

Un array se designa escribiendo su nombre, que es el nombre que se pasa a un comando de declaración de array (como ARRAY LONGINT) cuando se crea el array. Los arrays son variables, y desde el punto de vista del alcance, al igual que las variables, hay tres tipos diferentes de arrays:

- Arrays interproceso,
- Arrays proceso,
- Arrays locales.

### Arrays interproceso

El nombre de un array interproceso va precedido de los símbolos (`<>`) - un signo "menor que" seguido de un signo "mayor que".

Un nombre de array interproceso puede contener hasta 31 caracteres, sin incluir los símbolos `<>`.

Ejemplos:

```4d
ARRAY TEXT(<>atSubjects;Records in table([Topics]))
SORT ARRAY(<>asKeywords;>)
ARRAY INTEGER(<>aiBigArray;10000)
```

### Arrays proceso

Un array proceso se designa con su nombre (que no puede empezar con los símbolos `<>` ni el signo dólar $). Un nombre de array proceso puede contener hasta 31 caracteres.

Ejemplos:

```4d
ARRAY TEXT(atSubjects;Records in table([Topics]))
SORT ARRAY(asKeywords;>)
ARRAY INTEGER(aiBigArray;10000)
```

### Arrays locales

El nombre de un array local va precedido del signo de dólar ($). Un nombre de array local puede contener hasta 31 caracteres, sin incluir el signo del dólar.

Ejemplos:

```4d
ARRAY TEXT($atSubjects;Records in table([Topics]))
SORT ARRAY($asKeywords;>)
ARRAY INTEGER($aiBigArray;10000)
```

### Elementos de arrays

La referencia a un elemento de un array local, proceso o interproceso se realiza mediante llaves ("{ }"). El elemento al que se hace referencia se indica con una expresión numérica.

Ejemplos:

```4d  
 //Direccionar un elemento de un array interproceso
If(<>asKeywords{1}="Stop")
<>atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{Size of array(<>aiBigArray)}

 //Direccionar un elemento de un array proceso
If(asKeywords{1}="Stop")
atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{Size of array(aiBigArray)}

 //Direccionar un elemento de un array local
If($asKeywords{1}="Stop")
$atSubjects{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{Size of array($aiBigArray)}
```

### Elementos de arrays de dos dimensiones

You reference an element of a two-dimensional array by using the curly braces ({…}) twice. dos veces. El elemento al que se hace referencia se denota mediante dos expresiones numéricas en dos pares de llaves.

Ejemplos:

```4d
 //Direccionamiento de un elemento de un array interproceso de dos dimensiones 
If(<>asKeywords{$vlNextRow}{1}="Stop")
<>atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=<>aiBigArray{$vlSet}{Size of array(<>aiBigArray{$vlSet})}

 //Direccionar un elemento de una array proceso de dos dimensiones
If(asKeywords{$vlNextRow}{1}="Stop")
atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=aiBigArray{$vlSet}{Size of array(aiBigArray{$vlSet})}

 //Direccionar un elemento de un array local de dos dimensiones
If($asKeywords{$vlNextRow}{1}="Stop")
$atSubjects{10}{$vlElem}:=[Topics]Subject
$viNextValue:=$aiBigArray{$vlSet}{Size of array($aiBigArray{$vlSet})}
```

## Atributos de objetos

When object notation is enabled, you designate an object attribute (also called object property) by placing a point (".") between the name of the object (or attribute) and the name of the attribute. entre el nombre del objeto (o del atributo) y el nombre del atributo. Un nombre de atributo puede contener hasta 255 caracteres y es sensible a las mayúsculas y minúsculas.

Ejemplos:

```4d
myObject.myAttribute:="10"
$value:=$clientObj.data.address.city
```

**Nota:** se aplican reglas adicionales a los nombres de atributos de objetos (deben ajustarse a la especificación ECMAScript). Para más información, consulte [Identificadores de propiedades de objetos](Concepts/dt_object.md#object-property-identifiers).

## Formularios

Un formulario se designa mediante una expresión de tipo cadena que representa su nombre. Un nombre de formulario puede contener hasta 31 caracteres.

Ejemplos:

```4d
FORM SET INPUT([People];"Input")
FORM SET OUTPUT([People];"Output")
DIALOG([Storage];"Note box"+String($vlStage))
```

## Objetos de formularios

Se designa un objeto de formulario pasando su nombre como una cadena, precedida por el parámetro *. Un nombre de objeto de formulario puede contener hasta 255 caracteres.

Ejemplo:

```4d
OBJECT SET FONT(*;"Binfo";"Times")
```

**Nota:** no confunda los objetos de formulario (botones, list boxes, variables editables, etc.) y los objetos del lenguaje 4D. Los objetos del lenguaje 4D se crean y manipulan a través de la notación de objetos o de comandos dedicados.

## Métodos proyecto

Un método proyecto (procedimiento o función) se designa utilizando su nombre. Un nombre de método puede contener hasta 31 caracteres.

**Nota:** un método proyecto que no devuelve un resultado también se llama un procedimiento. Un método proyecto que devuelve un resultado también se denomina función.

Ejemplos:

```4d
If(New client)
DELETE DUPLICATED VALUES
APPLY TO SELECTION([Employees];INCREASE SALARIES)
```

**Consejo:** es una buena técnica de programación adoptar la misma convención de nomenclatura que la utilizada por 4D para los métodos integrados. Utilice mayúsculas para nombrar sus métodos; sin embargo, si un método es una función, ponga en mayúscula el primer carácter de su nombre. De este modo, cuando vuelva a abrir una base para su mantenimiento después de unos meses, ya sabrá si un método devuelve un resultado simplemente mirando su nombre en la ventana del Explorador.

**Nota:** cuando llame a un método, sólo tiene que escribir su nombre. Sin embargo, algunos comandos integrados en 4D, como `ON EVENT CALL`, así como todos los comandos del Plug-In, esperan el nombre de un método como una cadena cuando se pasa un parámetro de tipo método. Ejemplo:

Ejemplos:

```4d
 //Este comando espera un método (función) o una fórmula
QUERY BY FORMULA([aTable];Special query)
 //Este comando espera un método (procedimiento) o una instrucción
APPLY TO SELECTION([Employees];INCREASE SALARIES)
 //Pero este comando espera un nombre de método
ON EVENT CALL("HANDLE EVENTS")
```

Los métodos proyecto pueden aceptar parámetros (argumentos). Los parámetros se pasan al método entre paréntesis, a continuación del nombre del método. Cada parámetro está separado del siguiente por un punto y coma (;). Los parámetros están disponibles dentro del método llamado como variables locales numeradas secuencialmente: $1, $2,..., $n. The parameters are passed to the method in parentheses, following the name of the method.

Dentro de una función, la variable local $0 contiene el valor a devolver.

Ejemplos:

```4d
 //Dentro de DROP SPACES $1 es un puntero al campo [People]Name
DROP SPACES(->[People]Name)

 //Dentro de Calc creator:
 //- $1 es numérico e igual a 1
 //- $2 es numérico e igual a 5
 //- $3 es texto o cadena e igual a "Nice"
 //- El valor resultante se asigna a $0
$vsResult:=Calc creator(1;5; "Nice")

 //Dentro de Dump:
 //- Los tres parámetros son texto o cadena
 //- Pueden direccionarse como $1, $2 o $3
 //- También pueden direccionarse como, por ejemplo, ${$vlParam} donde $vlParam es 1, 2 o 3
 //- El valor resultante se asigna a $0
vtClone:=Dump("is";"the";"it")
```

## Comandos de plug-in

Para designar un comando de plug-in se utiliza su nombre, tal y como lo define el plug-in. El nombre de un comando plug-in puede contener hasta 31 caracteres.

Ejemplos:

```4d
$error:=SMTP_From($smtp_id;"henry@gmail.com")
```

## Conjuntos

Desde el punto de vista del alcance, hay dos tipos de conjuntos:

- Conjuntos interproceso
- Conjuntos proceso

4D Server también incluye:

- Conjuntos clientes

### Conjuntos interproceso

Un conjunto es un conjunto interproceso cuando el nombre del conjunto está precedido por los símbolos (`<>`) - un signo "menor que" seguido de un signo "mayor que".

Un nombre de conjunto interproceso puede contener hasta 255 caracteres, sin incluir los símbolos `<>`.

### Conjuntos proceso

Para designar un conjunto de procesos utilizando una expresión de cadena que representa su nombre (que no puede comenzar con los símbolos `<>` ni con el signo de dólar $). El nombre de un conjunto proceso puede contener hasta 255 caracteres.

### Conjuntos clientes

El nombre de un conjunto cliente debe ser precedido del signo de dólar ($). Un nombre de conjunto cliente puede contener hasta 255 caracteres, sin incluir el signo del dólar.

**Nota:** los conjuntos son mantenidos por el equipo servidor. En algunos casos, por eficiencia o por motivos especiales, es posible que necesite trabajar con conjuntos localmente en los equipos clientes. Para ello, utilice los conjuntos clientes.

Ejemplos:

```4d
 //Conjuntos interproceso
USE SET("<>Deleted Records")
CREATE SET([Customers];"<>Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Conjuntos proceso
USE SET("Deleted Records")
CREATE SET([Customers];"Customer Orders")
If(Records in set("<>Selection"+String($i))>0)
 //Conjuntos cliente
USE SET("$Deleted Records")
CREATE SET([Customers];"$Customer Orders")
If(Records in set("$Selection"+String($i))>0)
```

## Selecciones temporales

Desde el punto de vista del alcance, hay dos tipos de selecciones temporales:

- Selecciones temporales interproceso
- Selecciones temporales proceso.

### Selecciones temporales interproceso

Una selección temporal es una selección temporal interproceso si su nombre va precedido de los símbolos (`<>`) - un signo "menor que" seguido de un signo "mayor que".

Un nombre de selección temporal interproceso puede contener hasta 255 caracteres, sin incluir los símbolos `<>`.

### Selecciones temporales proceso

Una selección temporal proceso se designa mediante una expresión de cadena que representa su nombre (que no puede comenzar con los símbolos `<>` ni con el signo de dólar $). El nombre de una selección temporal puede contener hasta 255 caracteres.

Ejemplos:

```4d
 //Selección temporal interproceso
USE NAMED SELECTION([Customers];"<>ByZipcode")
 //Selección temporal proceso
USE NAMED SELECTION([Customers];"<>ByZipcode")
```

## Procesos

En modo monopuesto, o en Cliente/Servidor del lado del Cliente, hay dos tipos de procesos:

- Procesos globales
- Procesos locales.

### Procesos globales

Un proceso global se designa mediante una expresión de tipo cadena que representa su nombre (que no puede comenzar con el signo de dólar $). El nombre de un proceso puede contener hasta 255 caracteres.

### Procesos locales

Se denota un proceso local si el nombre del proceso está precedido por el signo del dólar ($). El nombre de un proceso puede contener hasta 255 caracteres, sin incluir el signo del dólar.

Ejemplos:

```4d
 //Lanzar el proceso global "Add Customers"
$vlProcessID:=New process("P_ADD_CUSTOMERS";48*1024;"Add Customers")
 //Iniciar el proceso local "$Follow Mouse Moves"
$vlProcessID:=New process("P_MOUSE_SNIFFER";16*1024;"$Follow Mouse Moves")
```

## Resumen de las convenciones de escritura en 4D

La siguiente tabla resume las convenciones de denominación de 4D.

| Identificador                   | Longitud Max. Max. | Ejemplo                            |
| ------------------------------- | ------------------ | ---------------------------------- |
| Tabla                           | 31                 | [Invoices]                         |
| Campo                           | 31                 | [Employees]Last Name               |
| Variable/array interproceso     | `<>` + 31    | `<>vlNextProcessID`          |
| Variable/Array proceso          | 31                 | vsCurrentName                      |
| Variable/Array local            | $ + 31             | $vlLocalCounter                    |
| Propiedades de objetos          | 255                | $o.myAttribute                     |
| Formulario                      | 31                 | "My Custom Web Input"              |
| Objetos de formulario           | 255                | "MyButton"                         |
| Métodos proyecto                | 31                 | M_ADD_CUSTOMERS                  |
| Comando de plug-in              | 31                 | PDF SET ROTATION                   |
| Conjuntos interproceso          | `<>` + 255   | `"<>Records to be Archived"` |
| Conjuntos proceso               | 255                | "Current selected records"         |
| Conjunto cliente                | $ + 255            | "$Previous Subjects"               |
| Selección temporal              | 255                | "Employees A to Z"                 |
| Selección temporal interproceso | `<>` + 255   | `"<>Employees Z to A"`       |
| Proceso local                   | $ + 255            | "$Follow Events"                   |
| Proceso global                  | 255                | "*P_INVOICES_MODULE*"            |
| Semáforo                        | 255                | "mysemaphore"                      |

**Nota:** si se utilizan caracteres no romanos en los nombres de los identificadores, su longitud máxima puede ser menor.

## Resolución de conflictos de nombres

Asegúrese de utilizar nombres únicos para los diferentes elementos de su base. Si un objeto particular tiene el mismo nombre que otro objeto de diferente tipo (por ejemplo, si un campo se llama Persona y una variable también se llama Persona), 4D utiliza un sistema de prioridad.

4D identifica los nombres utilizados en los métodos en función del siguiente orden de prioridad:

1. Campos
2. Comandos
3. Métodos
4. Comandos de plug-in
5. Constantes predefinidas
6. Variables.

Por ejemplo, 4D tiene un comando integrado llamado `Date`. Si llama a un método *Date*, 4D lo reconocerá como el comando integrado `Date`, y no como su método. Esto le impediría llamar a su método. Sin embargo, si llama a un campo “Date”, 4D intentará utilizar su campo en lugar del comando `Date`.

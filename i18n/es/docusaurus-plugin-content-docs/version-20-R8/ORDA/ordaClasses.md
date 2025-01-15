---
id: ordaClasses
title: Clases del modelo de datos
---

ORDA permite crear funciones de clase de alto nivel arriba del modelo de datos. Esto le permite escribir código orientado al negocio y "publicarlo" como una API. Los almacenes de datos, las clases de datos, las selecciones de entidades y las entidades están disponibles como objetos de clase que pueden contener funciones.

Por ejemplo, podría crear una función `getNextWithHigherSalary()` en la clase `EmployeeEntity` para devolver los empleados con un salario superior al seleccionado. Sería tan sencillo como llamar:

```4d
$nextHigh:=ds.Employee.get(1).getNextWithHigherSalary()
```

Los desarrolladores no sólo pueden utilizar estas funciones en almacenes de datos locales, sino también en arquitecturas cliente/servidor y remotas:

```4d
 //$cityManager es la referencia de un datastore remoto
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)
```

Gracias a esta funcionalidad, toda la lógica de negocio de su aplicación 4D puede ser almacenada como una capa independiente para que pueda ser fácilmente mantenida y reutilizada con un alto nivel de seguridad:

- Puede "ocultar" la complejidad global de la estructura física subyacente y exponer únicamente funciones comprensibles y listas para usar.

- Si la estructura física evoluciona, basta con adaptar el código de las funciones y las aplicaciones cliente seguirán llamándolas de forma transparente.

- Los atributos alias de ORDA por defecto son **no expuestos**. Debe añadir la palabra clave [`exposed`](#exposed-vs-non-exposed-functions) antes de la palabra clave `Alias` si desea que el alias esté disponible para peticiones remotas.

![](../assets/en/ORDA/api.png)

Además, 4D [precrea automáticamente](#creating-classes) las clases para cada objeto del modelo de datos disponible.

## Arquitectura

ORDA ofrece **clases genéricas** expuestas a través del [class store](Concepts/classes.md#class-stores) **`4D`**, así como **clases usuario** (que extienden las clases genéricas) expuestas en el [class store](Concepts/classes.md#class-stores) **`cs`**:

![](../assets/en/ORDA/ClassDiagramImage.png)

Todas las clases de modelo de datos ORDA se exponen como propiedades del class store **`cs`**. Las clases ORDA siguientes están disponibles:

| Class                                                                                 | Nombre del ejemplo                   | Instanciado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cs.DataStore                                                          | cs.DataStore         | Comando [`ds`](comandos/ds.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| cs._DataClassName_                                                    | cs.Employee          | [`dataStore.DataClassName`](API/DataStoreClass.md#dataclassname), `dataStore["DataClassName"]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| cs._DataClassName_Entity    | cs.EmployeeEntity    | [`dataClass.get()`](API/DataClassClass.md#get), [`dataClass.new()`](API/DataClassClass.md#new), [`entitySelection.first()`](API/EntitySelectionClass.md#first), [`entitySelection.last()`](API/EntitySelectionClass.md#last), [`entity.previous()`](API/EntityClass.md#previous), [`entity.next()`](API/EntityClass.md#next), [`entity.first()`](API/EntityClass.md#first), [`entity.last()`](API/EntityClass.md#last), [`entity.clone()`](API/EntityClass.md#clone)                                                                                                                                                                                                                                                                                                                                                                                                   |
| cs._DataClassName_Selection | cs.EmployeeSelection | [`dataClass.query()`](API/DataClassClass.md#query), [`entitySelection.query()`](API/EntitySelectionClass.md#query), [`dataClass.all()`](API/DataClassClass.md#all), [`dataClass.fromCollection()`](API/DataClassClass.md#fromcollection), [`dataClass.newSelection()`](API/DataClassClass.md#newselection), [`entitySelection.drop()`](API/EntitySelectionClass.md#drop), [`entity.getSelection()`](API/EntityClass.md#getselection), [`entitySelection.and()`](API/EntitySelectionClass.md#and), [`entitySelection.minus()`](API/EntitySelectionClass.md#minus), [`entitySelection.or()`](API/EntitySelectionClass.md#or), [`entitySelection.orderBy()`](API/EntitySelectionClass.md#or), [`entitySelection.orderByFormula()`](API/EntitySelectionClass.md#orderbyformula), [`entitySelection.slice()`](API/EntitySelectionClass.md#slice), `Create entity selection` |

> Las clases usuario ORDA se almacenan como archivos de clase estándar (.4dm) en la subcarpeta Classes del proyecto [(ver más abajo)](#class-files).

Además, las instancias de objeto de clases usuario de los modelos de datos ORDA se benefician de las propiedades y funciones de sus padres:

- un objeto de clase Datastore puede llamar las funciones de la [clase genérica ORDA Datastore](API/DataStoreClass.md).
- un objeto de clase Dataclass puede llamar las funciones de la [clase genérica ORDA Dataclass](API/DataClassClass.md).
- un objeto de clase Entity selection puede llamar las funciones de la [clase genérica ORDA Entity selection](API/EntitySelectionClass.md).
- un objeto de clase Entity puede llamar las funciones de la [clase genérica ORDA Entity](API/EntityClass.md).

## Descripción de la clase

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19 R4       | Atributos alias en la Entity Class                                                                                                                          |
| 19 R3       | Atributos calculados en la Entity Class                                                                                                                     |
| 18 R5       | Las funciones de clase de modelo de datos no están expuestas a REST por defecto. Nuevas palabras clave `exposed` y `local`. |

</details>

### Clase DataStore

Una base de datos 4D expone su propia clase DataStore en el class store `cs`.

- **Extends**: 4D.DataStoreImplementation
- **Nombre de clase**: cs.DataStore

Puede crear funciones en la clase DataStore que estarán disponibles a través del objeto `ds`.

#### Ejemplo

```4d
// cs.DataStore class

Class extends DataStoreImplementation

Function getDesc
  $0:="Database exposing employees and their companies"
```

Esta función puede ser llamada:

```4d
$desc:=ds.getDesc() //"Database exposing..."
```

### Clase DataClass

Cada tabla expuesta con ORDA ofrece una clase DataClass en el class store `cs`.

- **Extends**: 4D.DataClass
- **Nombre de clase**: cs._DataClassName_ (donde _DataClassName_ es el nombre de la tabla)
- **Ejemplo**: cs.Employee

#### Ejemplo

```4D
// cs.Company class


Class extends DataClass

// Devuelve las empresas cuyos ingresos están por encima de la media
// Devuelve una selección de entidades relacionadas con la clase de datos Company

Function GetBestOnes()
$sel:=This.query("revenues >= :1";This.all().average("revenues"));
	$0:=$sel
```

A continuación, puede obtener una selección de entidades de las "mejores" empresas ejecutando:

```4d
	var $best : cs.CompanySelection
	$best:=ds.Company.GetBestOnes()
```

:::info

[Los atributos calculados](#computed-attributes) se definen en [la clase Entity](#entity-class).

:::

#### Ejemplo con un datastore remoto

El catálogo _City_ siguiente está expuesto en un datastore remoto (vista parcial):

![](../assets/en/ORDA/Orda_example.png)

La clase `City` ofrece una API:

```4d
// clase cs.City 

Class extends DataClass

Function getCityName()
	var $1; $zipcode : Integer
	var $zip : 4D.Entity
	var $0 : Text

	$zipcode:=$1
	$zip:=ds.ZipCode.get($zipcode)
	$0:=""

	If ($zip#Null)
		$0:=$zip.city.name
	End if
```

La aplicación cliente abre una sesión en el datastore remoto:

```4d
$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
```

A continuación, una aplicación cliente puede utilizar la API para obtener la ciudad correspondiente al código postal (por ejemplo) a partir de un formulario:

```4d
Form.comp.city:=$cityManager.City.getCityName(Form.comp.zipcode)

```

### Clase EntitySelection

Cada tabla expuesta con ORDA ofrece una clase EntitySelection en el class store `cs`.

- **Extends**: 4D.EntitySelection
- **Nombre de clase**: _DataClassName_Selection (donde _DataClassName_ es el nombre de la tabla)
- **Ejemplo**: cs.EmployeeSelection

#### Ejemplo

```4d
// cs.EmployeeSelection class


Class extends EntitySelection

//Extract the employees with a salary greater than the average from this entity selection

Function withSalaryGreaterThanAverage() : cs.EmployeeSelection
	return This.query("salary > :1";This.average("salary")).orderBy("salary")

```

A continuación, puede obtener los empleados con un salario superior a la media en cualquier selección de entidades mediante la ejecución:

```4d
$moreThanAvg:=ds.Company.all().employees.withSalaryGreaterThanAverage()
```

:::info

[Los filtros de selección de entidades restringidas](entities.md#restricting-entity-selections) se definen en la clase de datos .

:::

### Entity Class

Cada tabla expuesta con ORDA ofrece una clase Entity en el class store `cs`.

- **Extends**: 4D.Entity
- **Nombre de clase**: _DataClassName_Entity (donde _DataClassName_ es el nombre de la tabla)
- **Ejemplo**: cs.CityEntity

#### Atributos calculados

Las clases Entity permiten definir **atributos calculados** utilizando palabras clave específicas:

- `Función get` _attributeName_
- `Función set` _attributeName_
- `Function query` _attributeName_
- `Función orderBy` _attributeName_

Para más información, consulte la sección [Atributos calculados](#computed-attributes-1).

#### Atributos de tipo alias

Las clases Entity permiten definir **atributos alias**, normalmente sobre atributos relacionados, utilizando la palabra clave `Alias`:

`Alias` _attributeName_ _targetPath_

Para más información, consulte la sección [Atributos alias](#alias-attributes-1).

#### Ejemplo

```4d
// cs.CityEntity class

Class extends Entity

Function getPopulation() : Integer
    return This.zips.sum("población")


Function isBigCity(): Boolean
// La función getPopulation() es utilizable dentro de la clase
    devuelve This.getPopulation()>50000
```

Luego puede llamar este código:

```4d
var $cityManager; $city : Object

$cityManager:=Open datastore(New object("hostname";"127.0.0.1:8111");"CityManager")
$city:=$cityManager.City.getCity("Caguas")

If ($city.isBigCity())
	ALERT($city.name + " is a big city")
End if
```

### Reglas específicas

Al crear o editar clases de modelos de datos, debe prestar atención a las siguientes reglas:

- Dado que se utilizan para definir nombres de clase DataClass automáticos en el [class store](Concepts/classes.md#class-stores) **cs**, las tablas 4D deben nombrarse para evitar todo conflicto en el espacio de nombres **cs**. En particular:
  - No dé el mismo nombre a una tabla 4D y a una [clase de usuarios](Concepts/classes.md#class-names). En tal caso, el constructor de la clase usuario queda inutilizado (el compilador devuelve una advertencia).
  - No utilice un nombre reservado para una tabla 4D (por ejemplo, "DataClass").

- Al definir una clase, asegúrese de que la instrucción [`Class extends`](Concepts/classes.md#class-extends-classnameclass) coincida exactamente con el nombre de la clase padre (recuerde que son sensibles a mayúsculas y minúsculas). Por ejemplo, `Class extends EntitySelection` para una clase de selección de entidades.

- No se puede instanciar un objeto de clase de modelo de datos con la palabra clave `new()` (se devuelve un error). Debe utilizar un método regular como se muestra en la [columna `Instantiated by` de la tabla de clases ORDA](#architecture).

- No puede sobrescribir una función de clase ORDA nativa del [class store](Concepts/classes.md#class-stores) **`4D`** con una función de clase usuario de modelo de datos.

### Ejecución apropiativa

Cuando se compilan, las funciones de clase del modelo de datos se ejecutan:

- en **procesos apropiativos o cooperativos** (dependiendo del proceso de llamada) en aplicaciones monopuesto,
- en **procesos apropiativos** en las aplicaciones cliente/servidor (excepto si se utiliza la palabra clave [`local`](#local-functions), en cuyo caso depende del proceso llamante como en monopuesto).

Si su proyecto está diseñado para ejecutarse en cliente/servidor, asegúrese de que el código de la función de clase del modelo de datos es hilo seguro. Si se llama un código thread-unsafe, se lanzará un error en tiempo de ejecución (no se lanzará ningún error al momento de la compilación ya que la ejecución cooperativa está soportada en las aplicaciones monopuesto).

## Atributos calculados

### Generalidades

Un atributo calculado es un atributo de clase de datos con un tipo de datos que enmascara un cálculo. [Clases 4D estándar](Concepts/classes.md) implementa el concepto de propiedades calculadas con `get` (_getter_) y `set` (_setter_) [accessor functions](Concepts/classes.md#function-get-and-function-set). Los atributos de las clases de datos ORDA se benefician de esta funcionalidad y la extienden con dos funcionalidades adicionales: `query` y `orderBy`.

Como mínimo, un atributo calculado requiere una función `get` que describa cómo se calculará su valor. Cuando se suministra una función _getter_ para un atributo, 4D no crea el espacio de almacenamiento subyacente en el datastore sino que sustituye el código de la función cada vez que se accede al atributo. Si no se accede al atributo, el código nunca se ejecuta.

Un atributo calculado también puede implementar una función `set`, que se ejecuta cada vez que se asigna un valor al atributo. La función _setter_ describe qué hacer con el valor asignado, normalmente redirigiéndolo a uno o más atributos de almacenamiento o en algunos casos a otras entidades.

Al igual que los atributos de almacenamiento, los atributos calculados pueden incluirse en **búsquedas**. Por defecto, cuando se utiliza un atributo calculado en una búsqueda ORDA, el atributo se calcula una vez por entidad examinada. En algunos casos esto es suficiente. Sin embargo, para un mejor rendimiento, especialmente en cliente/servidor, los atributos calculados pueden implementar una función `query` que se basa en los atributos reales de la clase de datos y se beneficia de sus índices.

Del mismo modo, los atributos calculados pueden incluirse en **ordenaciones**. Cuando se utiliza un atributo calculado en una ordenación ORDA, el atributo se calcula una vez por entidad examinada. Cuando se utiliza un atributo calculado en una ordenación ORDA, el atributo se calcula una vez por entidad examinada.

### Cómo definir los atributos calculados

Se crea un atributo calculado definiendo un accesor `get` en la [**clase entity**](#entity-class) de la dataclass. El atributo calculado estará disponible automáticamente en los atributos de la dataclass y en los atributos de la entidad.

También pueden definirse en la clase entity otras funciones de atributos calculados (`set`, `query` y `orderBy`). Son opcionales.

Dentro de las funciones de atributos calculados, [`This`](Concepts/classes.md#this) designa la entidad. Los atributos calculados pueden utilizarse y manejarse como cualquier atributo de dataclass, es decir, serán procesados por las funciones de [clase entity](API/EntityClass.md) o [clase entity selection](API/EntitySelectionClass.md).

> Los atributos calculados ORDA no están [**expuestos**](#exposed-vs-non-exposed-functions) por defecto. Para exponer un atributo calculado, añada la palabra clave `exposed` a la definición de la función \*\*get \*\*.

> **Las funciones get y set** pueden tener la propiedad [**local**](#local-functions) para optimizar el procesamiento cliente/servidor.

### `Function get <attributeName>`

#### Sintaxis

```4d
{local} {exposed} Function get <attributeName>({$event : Object}) -> $result : type
// code
```

La función _getter_ es obligatoria para declarar el atributo calculado _attributeName_. Cada vez que se accede al atributo _attributeName_, 4D evalúa el código `Function get` y devuelve el valor _$result_.

> Un atributo calculado puede utilizar el valor de otro(s) atributo(s) calculado(s). Las llamadas recursivas generan errores.

La función _getter_ define el tipo de datos del atributo calculado gracias al parámetro _$result_. Se permiten los siguientes tipos resultantes:

- Scalar (text, boolean, date, time, number)
- Object
- Imagen
- BLOB
- Entity (por ejemplo, cs.EmployeeEntity)
- Entity selection (p.e. cs.EmployeeeSelection)

El parámetro _$event_ contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                                  |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| attributeName | Text    | Nombre de atributo calculado                                                                                 |
| dataClassName | Text    | Nombre de la clase de datos                                                                                  |
| kind          | Text    | "get"                                                                                                        |
| resultado     | Variant | Opcional. Añada esta propiedad con valor Null si desea que un atributo escalar devuelva Null |

#### Ejemplos

- El campo calculado _fullName_:

```4d
Function get fullName($event : Object)-> $fullName : Text

  Case of 	
	: (This.firstName=Null) & (This.lastName=Null)
		$event.result:=Null //use result to return Null
	: (This.firstName=Null)
		$fullName:=This.lastName
	: (This.lastName=Null)
		$fullName:=This.firstName
	Else
		$fullName:=This.firstName+" "+This.lastName
	End case
```

- Un atributo calculado puede basarse en un atributo relativo a una entidad:

```4d
Function get bigBoss($event : Object)-> $result: cs.EmployeeEntity
	$result:=This.manager.manager

```

- Un atributo calculado puede basarse en un atributo relacionado con una entity selection:

```4d
Function get coWorkers($event : Object)-> $result: cs.EmployeeSelection
    If (This.manager.manager=Null)
        $result:=ds.Employee.newSelection()
    Else
        $result:=This.manager.directReports.minus(this)
    End if
```

### `Function set <attributeName>`

#### Sintaxis

```4d

{local} Function set <attributeName>($value : type {; $event : Object})
// code
```

La función _setter_ se ejecuta cada vez que se asigna un valor al atributo. Esta función suele procesar los valores de entrada y el resultado se envía entre uno o varios atributos.

El parámetro _$value_ recibe el valor asignado al atributo.

El parámetro _$event_ contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                              |
| ------------- | ------- | ---------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado             |
| dataClassName | Text    | Nombre de la clase de datos              |
| kind          | Text    | "set"                                    |
| value         | Variant | Valor a tratar por el atributo calculado |

#### Ejemplo

```4d
Function set fullName($value : Text; $event : Object)
	var $p : Integer
    $p:=Position(" "; $value) 		
	This.firstname:=Substring($value; 1; $p-1)  // "" if $p<0
	This.lastname:=Substring($value; $p+1)
```

### `Function query <attributeName>`

#### Sintaxis

```4d
Function query <attributeName>($event : Object)
Function query <attributeName>($event : Object) -> $result : Text
Function query <attributeName>($event : Object) -> $result : Object
// code
```

Esta función soporta tres sintaxis:

- Con la primera sintaxis, se maneja toda la consulta a través de la propiedad del objeto `$event.result`.
- Con la segunda y tercera sintaxis, la función devuelve un valor en _$result_:

  - Si _$result_ es un texto, debe ser una cadena de consulta válida
  - Si _$result_ es un Objeto, debe contener dos propiedades:

  | Propiedad                          | Tipo       | Descripción                                                                                                                            |
  | ---------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
  | $result.query      | Text       | Cadena de búsqueda válida con marcadores de posición (:1, :2, etc.) |
  | $result.parameters | Collection | valores para marcadores                                                                                                                |

La función `query` se ejecuta cada vez que se lanza una consulta que utiliza el atributo calculado. Resulta útil personalizar y optimizar las consultas basándose en los atributos indexados. Cuando la función `query` no está implementada para un atributo calculado, la búsqueda es siempre secuencial (basada en la evaluación de todos los valores utilizando la función `get <AttributeName>`).

> No se soportan las siguientes funcionalidades:
>
> - llamar a una función `query` en los atributos calculados de tipo Entity o Entity selection,
> - utilizando la palabra clave `order by` en la cadena de consulta resultante.

El parámetro _$event_ contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| dataClassName | Text    | Nombre de la clase de datos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| kind          | Text    | "query"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| value         | Variant | Valor a tratar por el atributo calculado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| operator      | Text    | Operador de búsqueda (ver también la [función de clase `query`](API/DataClassClass.md#query)). Valores posibles:<li>== (igual a, @ es un comodín)</li><li>=== (igual a, @ no es un comodín)</li><li>!= (no igual a, @ es un comodín)</li><li>!== (no igual a, @ no es un comodín)</li><li>< (menor que)</li><li><= (menor que o igual a)</li><li>> (mayor que)</li><li>>= (mayor que o igual a)</li><li>IN (incluido en)</li><li>% (contiene la palabra clave)</li> |
| resultado     | Variant | Valor a tratar por el atributo calculado. Pase `Null` en esta propiedad si desea que 4D ejecute la consulta por defecto (siempre secuencialmente para los atributos calculados).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

> Si la función devuelve un valor en _$result_ y se asigna otro valor a la propiedad `$event.result`, se da prioridad a `$event.result`.

#### Ejemplos

- Búsqueda en el atributo calculado _fullName_.

```4d
Function query fullName($event : Object)->$result : Object

	var $fullname; $firstname; $lastname; $query : Text
	var $operator : Text
	var $p : Integer
	var $parameters : Collection

	$operator:=$event.operator
	$fullname:=$event.value

	$p:=Position(" "; $fullname)
	If ($p>0)
		$firstname:=Substring($fullname; 1; $p-1)+"@"
		$lastname:=Substring($fullname; $p+1)+"@"
		$parameters:=New collection($firstname; $lastname) // two items collection
	Else
		$fullname:=$fullname+"@"
		$parameters:=New collection($fullname) // single item collection
	End if

	Case of
	: ($operator="==") | ($operator="===")
		If ($p>0)
			$query:="(firstName = :1 and lastName = :2) or (firstName = :2 and lastName = :1)"
		Else
			$query:="firstName = :1 or lastName = :1"
		End if
	: ($operator="!=")
		If ($p>0)
			$query:="firstName != :1 and lastName != :2 and firstName != :2 and lastName != :1"
		Else
			$query:="firstName != :1 and lastName != :1"
		End if
	End case

	$result:=New object("query"; $query; "parameters"; $parameters)
```

> Ten en cuenta que el uso de marcadores de posición en consultas basadas en la entrada de texto del usuario es recomendado por razones de seguridad (ver la [descripción de `query()`](API/DataClassClass.md#query)).

Código de llamada, por ejemplo:

```4d
$emps:=ds.Employee.query("fullName = :1"; "Flora Pionsin")
```

- Esta función gestiona las consultas sobre el atributo calculado _age_ y devuelve un objeto con parámetros:

```4d
Function query age($event : Object)->$result : Object

	var $operator : Text
	var $age : Integer
	var $_ages : Collection

	$operator:=$event.operator

	$age:=Num($event.value)  // integer
	$d1:=Add to date(Current date; -$age-1; 0; 0)
	$d2:=Add to date($d1; 1; 0; 0)
	$parameters:=New collection($d1; $d2)

	Case of

		: ($operator="==")
			$query:="birthday > :1 and birthday <= :2"  // after d1 and before or egal d2

		: ($operator="===")

			$query:="birthday = :2"  // d2 = second calculated date (= birthday date)

		: ($operator=">=")
			$query:="birthday <= :2"

			//... other operators			


	End case


	If (Undefined($event.result))
		$result:=New object
		$result.query:=$query
		$result.parameters:=$parameters
	End if

```

Código de llamada, por ejemplo:

```4d
// people aged between 20 and 21 years (-1 day)
$twenty:=people.query("age = 20")  // calls the "==" case

// people aged 20 years today
$twentyToday:=people.query("age === 20") // equivalent to people.query("age is 20")

```

### `Function orderBy <attributeName>`

#### Sintaxis

```4d
Function orderBy <attributeName>($event : Object)
Function orderBy <attributeName>($event : Object)-> $result : Text

// code
```

La función `orderBy` se ejecuta siempre que sea necesario ordenar el atributo calculado. Permite ordenar el atributo calculado. Por ejemplo, puede ordenar _fullName_ en función de los nombres y luego de los apellidos, o a la inversa.
Cuando la función `orderBy` no está implementada para un atributo calculado, la ordenación es siempre secuencial (basada en la evaluación de todos los valores utilizando la función `get <AttributeName>`).

> **No se soporta** la llamada a una función `orderBy` sobre atributos calculados de tipo Entity class o Entity selection class.

El parámetro _$event_ contiene las siguientes propiedades:

| Propiedad     | Tipo    | Descripción                                                                                                                              |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| attributeName | Text    | Nombre de atributo calculado                                                                                                             |
| dataClassName | Text    | Nombre de la clase de datos                                                                                                              |
| kind          | Text    | "orderBy"                                                                                                                                |
| value         | Variant | Valor a tratar por el atributo calculado                                                                                                 |
| operator      | Text    | "desc" o "asc" (por defecto)                                                                                          |
| descending    | Boolean | `true` para orden descendente, `false` para orden ascendente                                                                             |
| resultado     | Variant | Valor a tratar por el atributo calculado. Pase `Null` si desea que 4D ejecute la ordenación por defecto. |

> Puede utilizar el `operator` o la propiedad `descending`. Es esencialmente una cuestión de estilo de programación (ver ejemplos).

Puede devolver la cadena `orderBy` en la propiedad del objeto `$event.result` o en el resultado de la función _$result_. Si la función devuelve un valor en _$result_ y se asigna otro valor a la propiedad `$event.result`, se da prioridad a `$event.result`.

#### Ejemplo

Puede escribir código condicional:

```4d
Function orderBy fullName($event : Object)-> $result : Text
    If ($event.descending=True)
        $result:="firstName desc, lastName desc"
    Else
        $result:="firstName, lastName"
    End if
```

También puede escribir un código compacto:

```4d
Function orderBy fullName($event : Object)-> $result : Text
	$result:="firstName "+$event.operator+", "lastName "+$event.operator

```

El código condicional es necesario en algunos casos:

```4d
Function orderBy age($event : Object)-> $result : Text

    If ($event.descending=True)
        $result:="birthday asc"
    Else
        $result:="birthday desc"
    End if

```

## Atributos de tipo alias

### Generalidades

Un atributo **alias** se crea sobre otro atributo del modelo de datos, denominado **atributo de destino**. El atributo de destino puede pertenecer a una clase de datos relacionada (disponible a través de todo número de niveles de relación) o a la misma clase de datos. Un atributo alias no almacena ningún dato, sino la ruta a su atributo de destino. Puede definir tantos atributos de alias como desee en una clase de datos.

Los atributos del alias son particularmente útiles para manejar las relaciones N a N. Aportan más legibilidad y simplicidad en el código y en las consultas al permitir basarse en conceptos de negocio en lugar de en detalles de implementación.

### Cómo definir los atributos alias

Se crea un atributo alias en una dataclass utilizando la palabra clave `Alias` en la [**clase Entity**](#entity-class) de la dataclass.

### `Alias <attributeName> <targetPath>`

#### Sintaxis

```
{exposed} Alias <attributeName> <targetPath>
```

_attributeName_ debe cumplir las [reglas estándar para nombres de propiedades](../Concepts/identifiers.md#object-properties).

_targetPath_ es una ruta atributo que contiene uno o más niveles, como "employee.company.name". Si el atributo de destino pertenece a la misma clase de datos, _targetPath_ es el nombre del atributo.

Un alias puede ser utilizado como parte de una ruta de otro alias.

Un [atributo calculado](#computed-attributes-1) puede utilizarse en una ruta alias, pero sólo como último nivel de la ruta; de lo contrario, se devuelve un error. Por ejemplo, si "fullName" es un atributo calculado, un alias con ruta "employee.fullName" es válido.

> Los atributos alias de ORDA por defecto son **no expuestos**. Debe añadir la palabra clave [`exposed`](#exposed-vs-non-exposed-functions) antes de la palabra clave `Alias` si desea que el alias esté disponible para peticiones remotas.

### Uso de los atributos alias

Los atributos alias son de sólo lectura (excepto cuando se basan en un atributo escalar de la misma clase de datos, ver el último ejemplo a continuación). Pueden utilizarse en lugar de la ruta de su atributo de destino en funciones de clase como:

| Function                                       |
| ---------------------------------------------- |
| `dataClass.query()`, `entitySelection.query()` |
| `entity.toObject()`                            |
| `entitySelection.toCollection()`               |
| `entitySelection.extract()`                    |
| `entitySelection.orderBy()`                    |
| `entitySelection.orderByFormula()`             |
| `entitySelection.average()`                    |
| `entitySelection.count()`                      |
| `entitySelection.distinct()`                   |
| `entitySelection.sum()`                        |
| `entitySelection.min()`                        |
| `entitySelection.max()`                        |
| `entity.diff()`                                |
| `entity.touchedAttributes()`                   |

> Tenga en cuenta que los atributos alias se calculan en el servidor. En las configuraciones remotas, la actualización de los atributos alias en las entidades requiere que éstas se vuelvan a cargar desde el servidor.

### Propiedades del alias

El atributo alias [`kind`](../API/DataClassClass.md#attributename) es "alias".

Un atributo alias hereda su propiedad de [`type`](../API/DataClassClass.md#attributename) del atributo objetivo:

- si el [`kind`](../API/DataClassClass.md#attributename) del atributo objetivo es "storage", el tipo de datos del alias es del mismo tipo,
- si el [`kind`](../API/DataClassClass.md#attributename) del atributo objetivo es "relatedEntity" o "relatedEntities", el tipo de datos del alias es de tipo `4D.Entity` o `4D.EntitySelection` ("_classname_Entity" o "_classname_Selection").

Los atributos alias basados en relaciones tienen una propiedad específica [`path`](../API/DataClassClass.md#attributename), que contiene la ruta de sus atributos objetivos. Los atributos de alias basados en atributos de la misma clase de datos tienen las mismas propiedades que sus atributos de destino (y ninguna propiedad `path`).

### Ejemplos

Considerando el siguiente modelo:

![](../assets/en/ORDA/alias1.png)

En la clase de datos Teacher, un atributo alias devuelve todos los alumnos de un profesor:

```4d
// cs.TeacherEntity class

Class extends Entity

Alias students courses.student //relatedEntities
```

En la clase Student, un atributo alias devuelve todos los profesores de un alumno:

```4d
// cs.StudentEntity class

Class extends Entity

Alias teachers courses.teacher //relatedEntities
```

En la dataclass Course:

- un atributo alias devuelve otra etiqueta para el atributo "name"
- un atributo alias devuelve el nombre del profesor
- un atributo alias devuelve el nombre del estudiante

```4d
// cs.CourseEntity class

Class extends Entity

Exposed Alias courseName name //scalar
Exposed Alias teacherName teacher.name //scalar value
Exposed Alias studentName student.name //scalar value

```

Luego puede ejecutar las siguientes consultas:

```4d
// Find course named "Archaeology"
ds.Course.query("courseName = :1";"Archaeology")

// Find courses given by the professor Smith
ds.Course.query("teacherName = :1";"Smith")

// Find courses where Student "Martin" assists
ds.Course.query("studentName = :1";"Martin")

// Find students who have M. Smith as teacher
ds.Student.query("teachers.name = :1";"Smith")

// Find teachers who have M. Martin as Student
ds.Teacher.query("students.name = :1";"Martin")
// Note that this very simple query string processes a complex
// query including a double join, as you can see in the queryPlan:   
// "Join on Table : Course  :  Teacher.ID = Course.teacherID,    
//  subquery:[ Join on Table : Student  :  Course.studentID = Student.ID,
//  subquery:[ Student.name === Martin]]"
```

También puede editar el valor del alias _courseName_:

```4d
// Renombrar un curso utilizando su atributo alias
$arch:=ds.Course.query("courseName = :1"; "Archaeology")
$arch.courseName:="Archaeology II"
$arch.save() //courseName y name son "Archaeology II"
```

## Funciones expuestas y no expuestas

Por razones de seguridad, todas sus funciones de clase de modelo de datos y atributos de alias son **no expuestas** (es decir, privadas) por defecto a peticiones remotas.

Las peticiones remotas incluyen:

- Las peticiones enviadas por las aplicaciones 4D remotas conectadas a través de `Open datastore`
- Peticiones REST

> Las peticiones cliente/servidor 4D estándar no se ven afectadas. Las funciones de clase del modelo de datos están siempre disponibles en esta arquitectura.

Una función que no está expuesta no está disponible en aplicaciones remotas y no se puede llamar a ninguna instancia de objeto desde una petición REST. Si una aplicación remota intenta acceder a una función no expuesta, se devuelve el error "-10729 - Método miembro desconocido".

Para permitir que una función de clase de modelo de datos sea llamada por una petición remota, debe declararla explícitamente utilizando la palabra clave `exposed`. La sintaxis formal es:

```4d
// declarar una función expuesta
exposed Function <functionName>   
```

> La palabra clave `exposed` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

### Ejemplo

Desea que una función expuesta utilice una función privada de una clase dataclass:

```4d
Class extends DataClass

//Función pública
exposed Function registerNewStudent($student : Object) -> $status : Object

var $entity : cs.StudentsEntity

$entity:=ds.Students.new()
$entity.fromObject($student)
$entity.school:=This.query("name=:1"; $student.schoolName).first()
$entity.serialNumber:=This.computeSerialNumber()
$status:=$entity.save()

//función (privada) no expuesta
Function computeIDNumber() -> $id : Integer
//calcular un nuevo número de ID
$id:=...

```

Cuando se llama al código:

```4d
var $remoteDS; $student; $status : Object
var $id : Integer

$remoteDS:=Open datastore(New object("hostname"; "127.0.0.1:8044"); "students")
$student:=New object("firstname"; "Mary"; "lastname"; "Smith"; "schoolName"; "Math school")

$status:=$remoteDS.Schools.registerNewStudent($student) // OK
$id:=$remoteDS.Schools.computeIDNumber() // Error "Unknown member method"
```

## onHttpGet keyword

Use the `onHttpGet` keyword to declare functions that can be called through HTTP requests using the `GET` verb. Such functions can return any web contents, for example using the [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class.

The `onHttpGet` keyword is available with:

- ORDA Data model class functions
- [Funciones de la clase Singletons](../Concepts/classes.md#singleton-classes)

La sintaxis formal es:

```4d
// declare an onHttpGet function
exposed onHttpGet Function <functionName>(params) : result
```

:::info

The `exposed` keyword must also be added in this case, otherwise an error will be generated.

:::

:::caution

As this type of call is an easy offered action, the developer must ensure no sensitive action is done in such functions.

:::

### params

A function with `onHttpGet` keyword accepts [parameters](../Concepts/parameters.md).

In the HTTP GET request, parameters must be passed directly in the URL and declared using the `$params` keyword (they must be enclosed in a collection).

```
IP:port/rest/<dataclass>/functionName?$params='[<params>]'
```

Consulte la sección [Parámetros](../REST/classFunctions#parameters) en la documentación del servidor REST.

### resultado

A function with `onHttpGet` keyword can return any value of a supported type (same as for REST [parameters](../REST/classFunctions#parameters)).

:::info

You can return a value of the [`4D.OutgoingMessage`](../API/OutgoingMessageClass.md) class type to benefit from properties and functions to set the header, the body, and the status of the answer.

:::

### Ejemplo

You have defined the following function:

```4d
Class extends DataClass

exposed onHTTPGet Function getThumbnail($name : Text; $width : Integer; $height : Integer) : 4D.OutgoingMessage
	
	var $file := File("/RESOURCES/Images/"+$name+".jpg")
	var $image; $thumbnail : Picture
	var $response := 4D.OutgoingMessage.new()
	
	READ PICTURE FILE($file.platformPath; $image)
	CREATE THUMBNAIL($image; $thumbnail; $width; $height; Scaled to fit)
	$response.setBody($thumbnail)	
	$response.setHeader("Content-Type"; "image/jpeg")
	return $response
```

It can be called by the following HTTP GET request:

```
IP:port/rest/Products/getThumbnail?$params='["Yellow Pack",200,200]'
```

## Funciones locales

Por defecto en la arquitectura cliente/servidor, las funciones de modelo de datos ORDA se ejecutan **en el servidor**. Suele ofrecer el mejor rendimiento, ya que sólo se envían por la red la petición de función y el resultado.

Sin embargo, puede ocurrir que una función sea totalmente ejecutable del lado del cliente (por ejemplo, cuando procesa los datos que ya están en la caché local). En este caso, puede ahorrar peticiones al servidor y, de este modo, mejorar el rendimiento de la aplicación insertando la palabra clave `local`. La sintaxis formal es:

```4d
// declarar una función a ejecutar localmente en cliente/servidor
local Function <functionName>   
```

Con esta palabra clave, la función se ejecutará siempre del lado del cliente.

> La palabra clave `local` sólo puede utilizarse con las funciones de clase del modelo de datos. Si se utiliza con una función de [ clase usuario estándar](Concepts/classes.md), se ignora y el compilador devuelve un error.

Tenga en cuenta que la función funcionará incluso si eventualmente requiere acceder al servidor (por ejemplo si la caché ORDA está vencida). Sin embargo, es muy recomendable asegurarse de que la función local no accede a los datos del servidor, ya que de lo contrario la ejecución local no podría aportar ninguna ventaja en cuanto al rendimiento. Una función local que genera numerosas peticiones al servidor es menos eficiente que una función ejecutada en el servidor que sólo devolvería los valores resultantes. Por ejemplo, considere la siguiente función en la entidad Schools:

```4d
// Obtener los estudiantes más jóvenes
// Utilización inapropiada de la palabra clave local
local Function getYoungest
	var $0 : Object
    $0:=This.students.query("birthDate >= :1"; !2000-01-01!).orderBy("birthDate desc").slice(0; 5)
```

- **sin** la palabra clave `local`, el resultado se da utilizando una única petición
- **con** la palabra clave `local`, son necesarias 4 peticiones: una para obtener la entidad Schools, una para la `query()`, una para la `orderBy()`, y una para la `slice()`. En este ejemplo, el uso de la palabra clave `local` es inapropiado.

### Ejemplos

#### Cálculo de la edad

Dada una entidad con un atributo _birthDate_, queremos definir una función `age()` que sería llamada en un list box. Esta función puede ejecutarse en el cliente, lo que evita lanzar una petición al servidor para cada línea del list box.

En la classe _StudentsEntity_:

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else
    $age:=Null
End if
```

#### Verificación de los atributos

Queremos comprobar la consistencia de los atributos de una entidad cargada en el cliente y actualizada por el usuario antes de solicitar al servidor que los guarde.

En la clase _StudentsEntity_, la función local `checkData()` verifica la edad del estudiante:

```4d
Class extends Entity

local Function checkData() -> $status : Object

$status:=New object("success"; True)
Case of
    : (This.age()=Null)
        $status.success:=False
        $status.statusText:="The birthdate is missing"

    :((This.age() <15) | (This.age()>30) )
        $status.success:=False
        $status.statusText:="The student must be between 15 and 30 - This one is "+String(This.age())
End case
```

Código de llamada:

```4d
var $status : Object

//Form.student es cargado con todos sus atributos y actualizado en un Formulario
$status:=Form.student.checkData()
If ($status.success)
    $status:=Form.student.save() // llamada al servidor
End if
```

## Soporte en IDE 4D

### Archivos de clase (class files)

Una clase usuario ORDA del modelo de datos se define añadiendo, en la [misma ubicación que los archivos de clase usuarles](Concepts/classes.md#class-files) (_es decir_ en la carpeta `/Sources/Classes` de la carpeta proyecto), un archivo .4dm con el nombre Por ejemplo, una clase de entidad para la dataclass `Utilities` se definirá a través de un archivo `UtilitiesEntity.4dm`. Por ejemplo, una clase de entidad para la dataclass `Utilities` se definirá a través de un archivo `UtilitiesEntity.4dm`.

### Crear las clases

4D crea previa y automáticamente las clases vacías en memoria para cada objeto del modelo de datos disponible.

![](../assets/en/ORDA/ORDA_Classes-3.png)

> Por defecto, las clases ORDA vacías no se muestran en el Explorador. Para mostrarlas, debe seleccionar **Mostrar todas las clases de datos** en el menú de opciones del Explorador:
> ![](../assets/en/ORDA/showClass.png)

Las clases de usuarios ORDA tienen un icono diferente de las otras clases. Las clases vacías se atenúan:

![](../assets/en/ORDA/classORDA2.png)

Para crear un archivo de clase ORDA, basta con hacer doble clic en la clase predefinida correspondiente en el Explorador. Para crear un archivo de clase ORDA, basta con hacer doble clic en la clase predefinida correspondiente en el Explorador. Por ejemplo, para una clase Entity:

```
Class extends Entity
```

Una vez definida una clase, su nombre ya no aparece atenuado en el Explorador.

### Editar las clases

Para abrir una clase ORDA definida en el editor de código 4D, seleccione o haga doble clic en el nombre de una clase ORDA y utilice **Editar...** en el menú contextual/menú de opciones de la ventana del Explorador:

![](../assets/en/ORDA/classORDA4.png)

Para las clases ORDA basadas en el datastore local (`ds`), puede acceder directamente al código de la clase desde la ventana de estructura 4D:

![](../assets/en/ORDA/classORDA5.png)

### Editor de código

En el editor de código de 4D, las variables escritas como una clase ORDA se benefician automáticamente de las funcionalidades de autocompletado. Ejemplo con una variable de clase Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)

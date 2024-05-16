---
id: entities
title: Trabajar con los datos
---

En ORDA, se accede a los datos a través de [entidades](dsMapping.md#entity) y [selecciones de entidades](dsMapping.md#entity-selection). Estos objetos permiten crear, actualizar, buscar u ordenar los datos del datastore.

## Crear una entidad

Hay dos maneras de crear una nueva entidad en una dataclass:

- Since entities are references to database records, you can create entities by creating records using the 4D language and then reference them with ORDA functions such as [`entity.next()`](../API/EntityClass.md#next) or [`entitySelection.first()`](../API/EntitySelectionClass.md#first).
- You can also create an entity using the [`dataClass.new()`](../API/DataClassClass.md#new) function.

Tenga en cuenta que la entidad sólo se crea en la memoria. If you want to add it to the datastore, you must call the [`entity.save()`](../API/EntityClass.md#save) function.

Los atributos de la entidad están disponibles directamente como propiedades del objeto entidad. Para más información, consulte [Uso de los atributos de entidad](#using-entity-attributes).

Por ejemplo, queremos crear una nueva entidad en la dataclass "Employee" en el datastore actual con "John" y "Dupont" asignados a los atributos firstname y name:

```4d
var $myEntity : cs.EmployeeEntity
$myEntity:=ds.Employee.new() //Crear un nuevo objeto de tipo entidad
$myEntity.name:="Dupont" //asignar 'Dupont' al atributo 'name'
$myEntity.firstname:="John" //asignar 'John' al atributo 'firstname'
$myEntity.save() //guardar la entidad
```

> Una entidad se define sólo en el proceso en el que fue creada. No se puede, por ejemplo, almacenar una referencia a una entidad en una variable interproceso y utilizarla en otro proceso.

## Entidades y referencias

Una entidad contiene una referencia a un registro 4D. Diferentes entidades pueden referenciar el mismo registro 4D. Además, como una entidad puede almacenarse en una variable objeto 4D, diferentes variables pueden contener una referencia a la misma entidad.

Si ejecuta el siguiente código:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1) //access the employee with ID 1
 $e2:=$e1
 $e1.name:="Hammer"
  //both variables $e1 and $e2 share the reference to the same entity
  //$e2.name contains "Hammer"
 If($e1=$e2) //True
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef1.png)

Ahora, si se ejecuta:

```4d
 var $e1; $e2 : cs.EmployeeEntity
 $e1:=ds.Employee.get(1)
 $e2:=ds.Employee.get(1)
 $e1.name:="Hammer"
  //variable $e1 contains a reference to an entity
  //variable $e2 contains another reference to another entity
  //$e2.name contains "smith"
 If($e1=$e2) //False
```

Esto es ilustrado por el siguiente gráfico:

![](../assets/en/ORDA/entityRef2.png)

Sin embargo, hay que tener en cuenta que las entidades se refieren al mismo registro. En todos los casos, si se llama al método `entity.save( )`, el registro se actualizará (excepto en caso de conflicto, ver [Entity locking](#entity-locking)).

De hecho, `$e1` y `$e2` no son la entidad misma, sino referencias a la entidad. Significa que puede pasarlos directamente a cualquier función o método, y actuará como un puntero, y más rápido que un puntero 4D. Por ejemplo:

```4d
 For each($entity;$selection)
    do_Capitalize($entity)
 End for each
```

Y el método es:

```4d
 $entity:=$1
 $name:=$entity.lastname
 If(Not($name=Null))
    $name:=Uppercase(Substring($name;1;1))+Lowercase(Substring($name;2))
 End if
 $entity.lastname:=$name
```

Puede manejar las entidades como cualquier otro objeto en 4D y pasar sus referencias directamente como [parámetros](Concepts/parameters.md).

:::info

Con las entidades, no existe el concepto de "registro actual" como en el lenguaje 4D. Puede utilizar tantas entidades como necesite al mismo tiempo. Tampoco existe un bloqueo automático de una entidad (ver [Bloqueo de una entidad](#entity-locking)). Cuando se carga una entidad, se utiliza el mecanismo de [lazy loading](glossary.md#lazy-loading), lo que significa que sólo se carga la información necesaria. No obstante, en cliente/servidor, la entidad puede cargarse directamente de forma automática si es necesario.

:::

## Uso de los atributos de entidades

Los atributos de entidad almacenan los datos y mapean los campos correspondientes en la tabla correspondiente.

- los atributos de tipo **storage** pueden definirse u obtenerse como propiedades simples del objeto de la entidad,
- los atributos del tipo **RelatedEntity** devolverán una entidad,
- los atributos de tipo **relatedEntities** devolverán una selección de entidad,
- los atributos de tipo **computed** y **alias** pueden devolver todo tipo de datos, dependiendo de cómo estén configurados.

:::info

Para más información sobre el tipo de atributo, consulte el párrafo [Atributos de almacenamiento y de relación](dsMapping.md#storage-and-relation-attributes).

:::

Por ejemplo, para obtener y definir un valor de atributo de almacenamiento de tipo cadena:

```4d
 $entity:=ds.Employee.get(1) //obtener el atributo de Employee con ID 1
 $name:=$entity.lastname //obtener el nombre del empleado, por ejemplo "Smith"
$entity.lastname:="Jones" //definir el nombr del empleado
$entity.save() //guardar los cambios
```

> Database Blob fields ([scalar blobs](Concepts/dt_blob.md) are automatically converted to and from blob object attributes ([`4D.Blob`](Concepts/dt_blob.md)) when handled through ORDA. Cuando guarde un atributo de objeto blob, tenga en cuenta que, a diferencia del tamaño del objeto blob, que sólo está limitado por la memoria disponible, el tamaño del campo blob está limitado a 2 GB.

El acceso a un atributo relacionado depende del tipo de atributo. Por ejemplo, con la siguiente estructura:

![](../assets/en/ORDA/entityAttributes.png)

Puede acceder a los datos a través del objeto(s) relacionado(s):

```4d
 $entity:=ds.Project.all().first().theClient //obtener la entidad Company asociada al proyecto
 $EntitySel:=ds.Company.all().first().companyProjects //obtener la selección de proyectos de la empresa
```

Observe que tanto _theClient_ como _companyProjects_ en el ejemplo anterior son atributos de relación primaria y representan una relación directa entre las dos dataclasses. Sin embargo, los atributos de relación también pueden crearse a partir de rutas vía las relaciones de varios niveles, incluidas las referencias circulares. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entityAttributes2.png)

Cada empleado puede ser gerente y puede tener un gerente. Para obtener el gerente del gerente de un empleado, puede simplemente escribir:

```4d
 $myEmp:=ds.Employee.get(50)
 $manLev2:=$myEmp.manager.manager.lastname
```

### Asignación de archivos a atributos imagen o blob

Puede almacenar imágenes en atributos imagen; de forma similar, puede almacenar cualquier dato binario en atributos blob.

ORDA permite asignar al atributo los datos en sí, es decir, una imagen o un objeto blob, o una **referencia a un archivo** que contenga los datos. Sólo se guarda la ruta del archivo dentro de la entidad.

Gracias a esta funcionalidad, puede reutilizar la misma imagen en varias entidades sin duplicarla, organizar los archivos como desee o utilizarlos fuera de 4D. Además, puede controlar el tamaño del archivo de datos.

La referencia del archivo puede ser:

- un objeto 4D.File
- una ruta en formato POSIX

Ejemplo:

```4d
Function createCompany($name : Text; $logo : 4D.File)

	var $company : cs.CompanyEntity
	$company:=ds.Company.new()

	$company.name:=$name
		//assignment using a file object
	$company.logo:=$logo
		//assignment using a path
	$company.datablob:="/RESOURCES/"+$name+"/data.bin"
	$company.save()
```

Independientemente de cómo se asigne el atributo (datos propiamente dichos o referencia a un archivo), el acceso de lectura al atributo es transparente desde el punto de vista del usuario.

El archivo no tiene que existir en el disco en el momento de la asignación (no se devuelve ningún error en este caso). Si el archivo de referencia no se encuentra cuando se lee el atributo, se devuelve un valor null.

:::tip

4D carga imágenes y datos en una caché local. Si el archivo referenciado es modificado después de haber sido cargado, debe reasignar el archivo para que la modificación se tenga en cuenta en la aplicación.

:::

:::note

La asignación de referencia de archivos solo se admite en modo local (4D Server o 4D mono usuario). Se genera un error si la asignación se realiza de forma remota o a través de una petición REST.

:::

### Asignar los valores a los atributos de relación

En la arquitectura ORDA, los atributos de relación contienen directamente los datos relacionados con las entidades:

- Un atributo de relación de tipo N->1 (**relatedEntity** kind) contiene una entidad
- Un atributo de relación de tipo 1->N (**relatedEntities** kind) contiene una selección de entidades

Veamos la siguiente estructura (simplificada):

![](../assets/en/ORDA/entityAttributes3.png)

En este ejemplo, una entidad de la dataclass "Employee" contiene un objeto de tipo Entity en el atributo "employer" (o un valor nulo). Una entidad de la dataclass "Company" contiene un objeto de tipo EntitySelection en el atributo "staff" (o un valor nulo).

> En ORDA, la propiedad Automática o Manual de las relaciones no tiene ningún efecto.

Para asignar un valor directamente al atributo "employer", debe pasar una entidad existente de la dataclass "Company". Por ejemplo:

```4d
 $emp:=ds.Employee.new() //crear un empleado
 $emp.lastname:="Smith" //asignar un valor a un atributo
 $emp.employer:=ds.Company.query("name =:1"; "4D")[0]  //asignar una entidad de empresa
 $emp.save()
```

También puede obtener directamente la entidad relacionada "uno" a través de su valor de llave primaria (Number o Text). Por ejemplo:

```4d
 $emp:=ds.Employee.new()
 $emp.lastname:="Wesson"
 $emp.employer:=ds.Company.get(2)
  //obtiene la entidad Company con valor de llave primaria 2
  //se la asigna al empleado
 $emp.save()
```

Esto resulta especialmente útil cuando se importan grandes cantidades de datos de una base de datos relacional. Este tipo de importación suele contener una columna "ID", que hace referencia a una llave primaria que puede asignarse directamente a un atributo de relación.

Puede asignar o modificar el valor de un atributo de entidad asociado "1" a partir de la dataclass "N" directamente vía el atributo relacionado. Por ejemplo, si desea modificar el atributo de nombre de una entidad Company asociada de una entidad Employee, puede escribir:

```code4d
 $emp:=ds.Employee.get(2) // load the Employee entity with primary key 2
 $emp.employer.name:="4D, Inc." //modify the name attribute of the related Company
 $emp.employer.save() //save the related attribute
  //the related entity is updated
```

## Crear una entity selection

Puede crear un objeto de tipo [entity selection](dsMapping.md#entity-selection) de la siguiente manera:

- Lance una búsqueda en las entidades [en una dataclass](API/DataClassClass.md#query) o en una [selección de entidades existente](API/EntitySelectionClass.md#query);
- Using the [`.all()`](API/DataClassClass.md#all) dataclass function to select all the entities in a dataclass;
- Using the [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection) command or the [`.newSelection()`](API/DataClassClass.md#newselection) dataclass function to create a blank entity selection;
- Using the [`.copy()`](API/EntitySelectionClass.md#copy) function to duplicate an existing entity selection;
- Using one of the various functions from the [Entity selection class](API/EntitySelectionClass.md) that returns a new entity selection, such as [`.or()`](API/EntitySelectionClass.md#or);
- Utilizando un atributo de relación de tipo "related entities" (ver abajo).

Puede crear y utilizar simultáneamente tantas selecciones de entidades diferentes como desee para una dataclass. Tenga en cuenta que una selección de entidades sólo contiene referencias a entidades. Diferentes selecciones de entidades pueden contener las referencias a las mismas entidades.

:::note

Puede filtrar qué entidades deben incluirse en las selecciones de entidades para una clase de datos en función de toda regla de negocio, gracias a la funcionalidad [selección de entidad restringida](#restricting-entity-selections).

:::

### Entity selections compartibles o modificables

An entity selection can be **shareable** (readable by multiple processes, but not alterable after creation) or **alterable** (supports the [`.add()`](API/EntitySelectionClass.md#add) function, but only usable by the current process).

#### Propiedades

Una entity selection **compartible** tiene las siguientes características:

- puede almacenarse en un objeto compartido o en una colección compartida, y puede pasarse como parámetro entre varios procesos o trabajadores;
- puede almacenarse en varios objetos o colecciones compartidos, o en un objeto o colección compartido que ya pertenezca a un grupo (no tiene un \* identificador de bloqueo\*);
- no permite la adición de nuevas entidades. Al intentar añadir una entidad a una entity selection compartibles se producirá un error (1637 - Esta entity selection no puede modificarse). To add an entity to a shareable entity selection, you must first transform it into a non-shareable entity selection using the [`.copy()`](API/EntitySelectionClass.md#copy) function, before calling [`.add()`](API/EntitySelectionClass.md#add).

> Most entity selection functions (such as [`.slice()`](API/EntitySelectionClass.md#slice), [`.and()`](API/EntitySelectionClass.md#and)...) support shareable entity selections since they do not need to alter the original entity selection (they return a new one).

Una entity selection **modificable** tiene las siguientes características:

- no puede compartirse entre los procesos, ni almacenarse en un objeto o colección compartido. Si se intenta almacenar una entity selection no compartible en un objeto o colección compartido, se producirá un error (-10721 - Tipo de valor no soportado en un objeto o colección compartido);
- it accepts the addition of new entities, i.e. it is supports the [`.add()`](API/EntitySelectionClass.md#add) function.

#### ¿Cómo se definen?

La naturaleza **compartible** o **modificable** de una entity selection se define cuando se crea (no puede modificarse posteriormente). Puede conocer la naturaleza de una entity selection utilizando la función [.isAlterable()](API/EntitySelectionClass.md#isalterable) o el comando `OB Is shared`.

Una nueva entity selection es **compartible** en los siguientes casos:

- la nueva entity selection resulta de una función de clase ORDA aplicada a una dataClass: [dataClass.all()](API/DataClassClass.md#all), [dataClass.fromCollection()](API/DataClassClass.md#fromcollection), [dataClass.query()](API/DataClassClass.md#query),
- the new entity selection is based upon a relation [entity._attributeName_](API/EntityClass.md#attributename) (e.g. "company.employees") when _attributeName_ is a one-to-many related attribute but the entity does not belong to an entity selection.
- la nueva entity selection se copia explícitamente como compartible con [entitySelection.copy()](API/EntitySelectionClass.md#copy) o `OB Copy` (es decir, con la opción `ck shared`).

Ejemplo:

```4d
var $myComp : cs.CompanyEntity
var $employees : cs.EmployeeSelection
$myComp:=ds.Company.get(2) //$myComp no pertenece a una selección de entidades
$employees:=$myComp.employees //$employees es compartible
```

Una nueva entity selection es **compartible** en los siguientes casos:

- la nueva entity selection creada en un espacio vacío utilizando la función [dataClass.newSelection()](API/DataClassClass.md#newselection) o el comando `Create entity selection`,
- la nueva entity selection se copia explícitamente como modificable con [entitySelection.copy()](API/EntitySelectionClass.md#copy) o `OB Copy` (es decir, sin la opción `ck shared`).

Ejemplo:

```4d
var $toModify : cs.CompanySelection
$toModify:=ds.Company.all().copy() //$toModify es alterable
```

Una nueva entity selection **hereda** de la naturaleza de la entity selection original en los siguientes casos:

- la nueva entity selection resulta de una de las varias funciones de clase ORDA aplicadas a una entity selection existente ([.query()](API/EntitySelectionClass.md#query), [.slice()](API/EntitySelectionClass.md#slice), etc.) .
- la nueva entity selection se basa en una relación:
  - [entity._attributeName_](API/EntityClass.md#attributename) (e.g. "company.employees") when _attributeName_ is a one-to-many related attribute and the entity belongs to an entity selection (same nature as [.getSelection()](API/EntityClass.md#getselection) entity selection),
  - [entitySelection._attributeName_](API/EntitySelectionClass.md#attributename) (e.g. "employees.employer") when _attributeName_ is a related attribute (same nature as the entity selection),
  - [.extract()](API/EntitySelectionClass.md#extract) cuando la colección resultante contiene selecciones de entidades (de la misma naturaleza que la entity selection).

Ejemplos:

```4d
var $highSal; $lowSal : cs.EmployeeSelection
var $comp; $comp2 : cs.Company

$highSal:=ds.Employee.query("salary >= :1"; 1000000)   

	//$highSal is shareable because of the query on dataClass
$comp:=$highSal.employer //$comp is shareable because $highSal is shareable

$lowSal:=ds.Employee.query("salary <= :1"; 10000).copy()
	//$lowSal is alterable because of the copy()
$comp2:=$lowSal.employer //$comp2 is alterable because $lowSal is alterable
```

:::note Entity selections returned from the server

In client/server architecture, entity selections returned from the server are always shareable on the client, even if [`copy()`](API/EntitySelectionClass.md#copy) was called on the server. To make such an entity selection alterable on the client, you need to execute [`copy()`](API/EntitySelectionClass.md#copy) on the client side. Ejemplo:

```4d
	//a function is always executed on the server
exposed Function getSome() : cs.MembersSelection
    return This.query("ID >= :1"; 15).orderBy("ID ASC")

	//in a method, executes on the remote side
var $result : cs.MembersSelection
var $alterable : Boolean
$result:=ds.Members.getSome() //$result is shareable
$alterable:=$result.isAlterable() //False

$result:=ds.Members.getSome().copy() // $result is now alterable
$alterable:=$result.isAlterable() // True
```

:::

#### Compartir una selección de entidades entre procesos (ejemplo)

Se trabaja con dos selecciones de entidades que se quieren pasar a un proceso worker para que envíe correos a las personas adecuadas:

```4d

var $paid; $unpaid : cs.InvoicesSelection
//We get entity selections for paid and unpaid invoices
$paid:=ds.Invoices.query("status=:1"; "Paid")
$unpaid:=ds.Invoices.query("status=:1"; "Unpaid")

//We pass entity selection references as parameters to the worker
CALL WORKER("mailing"; "sendMails"; $paid; $unpaid)

```

El método `sendMails`:

```4d

 #DECLARE ($paid : cs.InvoicesSelection; $unpaid : cs.InvoicesSelection)
 var $invoice : cs.InvoicesEntity

 var $server; $transporter; $email; $status : Object

  //Prepare emails
 $server:=New object()
 $server.host:="exchange.company.com"
 $server.user:="myName@company.com"
 $server.password:="my!!password"
 $transporter:=SMTP New transporter($server)
 $email:=New object()
 $email.from:="myName@company.com"

  //Loops on entity selections
 For each($invoice;$paid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Payment OK for invoice # "+String($invoice.number)

    $status:=$transporter.send($email)
 End for each

 For each($invoice;$unpaid)
    $email.to:=$invoice.customer.address // email address of the customer
    $email.subject:="Please pay invoice # "+String($invoice.number)
    $status:=$transporter.send($email)
 End for each
```

### Selecciones de entidades y atributos de almacenamiento

Todos los atributos de almacenamiento (texto, número, booleano, fecha) están disponibles como propiedades de las selecciones de entidades, así como de las entidades. Cuando se utiliza junto con una selección de entidad, un atributo escalar devuelve una colección de valores escalares. Por ejemplo:

```4d
var $locals : cs.PersonSelection
var $localEmails : Collection
$locals:=ds.Person.query("city = :1"; "San Jose") //selección de entidades de personas
$localEmails:=$locals.emailAddress //colección de direcciones de correo electrónico (cadenas)
```

Este código devuelve en _$localEmails_ una colección de direcciones de correo electrónico como cadenas.

### Selecciones de entidades y atributos de relación

Además de la variedad de formas en que puede consultar, también puede utilizar los atributos de relación como propiedades de selecciones de entidades para devolver nuevas selecciones de entidades. Por ejemplo, consideremos la siguiente estructura:

![](../assets/en/ORDA/entitySelectionRelationAttributes.png)

```4d
var $myParts : cs.PartSelection
var $myInvoices : cs.InvoiceSelection
$myParts:=ds.Part.query("ID < 100") //Return parts with ID less than 100
$myInvoices:=$myParts.invoiceItems.invoice
  //All invoices with at least one line item related to a part in $myParts
```

La última línea devolverá en _$myInvoices_ una selección de entidades de todas las facturas que tengan al menos una partida de factura relacionada con una parte en la selección de entidades myParts. Cuando se utiliza un atributo de relación como propiedad de una selección de entidades, el resultado es siempre otra selección de entidades, aunque sólo se devuelva una entidad. Cuando se utiliza un atributo de relación como propiedad de una selección de entidades y no se devuelve ninguna entidad, el resultado es una selección de entidades vacía, no nula.

## Restringir la selección de entidades

En ORDA, puede crear filtros para restringir el acceso a entidades de cualquiera de sus clases de datos. Once implemented, a filter is automatically applied whenever the entities of the dataclass are accessed either by **ORDA class functions** such as [`all()`](../API/DataClassClass.md#all) or [`query()`](../API/EntitySelectionClass.md#query), or by the [**REST API**](../category/api-dataclass) (which involves the [Data Explorer](../Admin/dataExplorer.md) and [remote datastores](remoteDatastores.md)).

Un filtro crea una vista restringida de los datos, basada en cualquier regla de negocio, como el usuario de la sesión actual. Por ejemplo, en una aplicación utilizada por vendedores para hacer tratos con sus clientes, puede restringir los clientes leídos a los gestionados por el vendedor autenticado.

:::info

Los filtros se aplican a las **entidades**. Si desea restringir el acceso a una **clase de datos** o a uno o varios de sus **atributos**, puede utilizar los [privilegios de sesión](privileges.md), que son más apropiados en este caso.

:::

### Cómo definir un filtro de restricción

You create a filter for a dataclass by defining an `event restrict` function in the [**dataclass class**](dsMapping.md#dataclass-class) of the dataclass. El filtro se activa automáticamente.

### `Function event restrict`

#### Sintaxis

```4d
Function event restrict() -> $result : cs.*DataClassName*Selection
// código
```

Esta función se llama cada vez que se solicita una selección de entidades o una entidad de la dataclass. El filtro se ejecuta una vez, cuando se crea la selección de entidades.

El filtro debe devolver una selección de entidades de la clase de datos. Puede ser una selección de entidades creada a partir de una consulta, almacenada en el [`Storage`], etc.

:::note

Por razones de rendimiento, recomendamos utilizar **atributos indexados** en la definición del filtro.

:::

La función debe devolver una selección de entidades válida de la dataclass. No se aplica ningún filtro (se devuelven todas las entidades correspondientes de la solicitud inicial) si:

- la función devuelve **null**,
- la función devuelve **indefinido**,
- la función no devuelve una selección de entidades válida.

#### Ejemplo

Cuando se accede desde una petición web o REST, queremos que la clase de datos Customers sólo exponga los clientes que pertenecen a la persona de ventas identificada. Durante la fase de autenticación, el vendedor se almacena en el objeto `Session`. También se gestionan otros tipos de solicitudes.

```4d
Class extends DataClass


Function event restrict() : cs.CustomersSelection


    	//We work in a web or REST context
    If (Session#Null)

        Case of
                // Only return the customers of the authenticated sales person stored in the session
            : (Session.storage.salesInfo#Null)
                return This.query("sales.internalId = :1"; Session.storage.salesInfo.internalId)

                //Data explorer - No filter is applied
            : (Session.hasPrivilege("WebAdmin"))
                return Null
            Else
                //No customers can be read
                return This.newSelection()

        End case

    Else // We work in client server
        return This.query("sales.userName = :1"; Current user)
    End if
```

### Detalles de activación del filtro

Los filtros se aplican a todas las peticiones ORDA o REST ejecutadas en sus proyectos 4D (arquitecturas autónomas y cliente/servidor). Un filtro se activa en cuanto se abre el proyecto, es decir, puede activarse en el método de base de datos `On Startup`.

:::info

Los filtros no se aplican a las selecciones heredadas de registros manejadas a través de la interfaz 4D o el lenguaje 4D (por ejemplo cuando se llama a `ALL RECORDS`).

:::

| Funciones                                                                                                | Comentario                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dataclass.get()](../API/DataClassClass.md#get)                       | Si la entidad no coincide con el filtro, se devuelve `null`                                                                                                                                                                                                                                                           |
| [entity.reload()](../API/EntityClass.md#reload)                       | Sólo en almacenes de datos cliente/servidor y remotos                                                                                                                                                                                                                                                                 |
| [dataclass.all()](../API/DataClassClass.md#all)                       |                                                                                                                                                                                                                                                                                                                       |
| [dataclass.fromCollection()](../API/DataClassClass.md#fromcollection) | <li>In case of update, only entities matching the filter can be updated. If the collection refers to entities not matching the filter, they are created as new entities (if no duplicate PK error)</li><li>In case of creation, entities not matching the filter are created but will not be read after creation</li> |
| [entitySelection.and()](../API/EntitySelectionClass.md#and)           | Sólo se devuelven las entidades que coinciden con el filtro                                                                                                                                                                                                                                                           |
| [entitySelection.or()](../API/EntitySelectionClass.md#or)             | Sólo se devuelven las entidades que coinciden con el filtro                                                                                                                                                                                                                                                           |
| [entitySelection.minus()](../API/EntitySelectionClass.md#minus)       | Sólo se devuelven las entidades que coinciden con el filtro                                                                                                                                                                                                                                                           |
| [dataclass.query()](../API/DataClassClass.md#query)                   |                                                                                                                                                                                                                                                                                                                       |
| [entitySelection.query()](../API/EntitySelectionClass.md#query)       |                                                                                                                                                                                                                                                                                                                       |
| [entitySelection.attributeName](../API/EntitySelectionClass.md#attributename)            | Filtro aplicado si _attributeName_ es una entidad relacionada o entidades relacionadas de una clase de datos filtrada (incluyendo alias o atributo calculado)                                                                                                                                      |
| [entity.attributeName](../API/EntityClass.md#attributename)                              | Filtro aplicado si _attributeName_ corresponde a entidades relacionadas de una clase de datos filtrada (incluyendo alias o atributo calculado)                                                                                                                                                     |
| [Create entity selection](../API/EntitySelectionClass.md#create-entity-selection)                        |                                                                                                                                                                                                                                                                                                                       |

Otras funciones ORDA que acceden a los datos no activan directamente el filtro, pero sin embargo se benefician de él. For example, the [`entity.next()`](../API/EntityClass.md#next) function will return the next entity in the already-filtered entity selection. On the other hand, if the entity selection is not filtered, [`entity.next()`](../API/EntityClass.md#next) will work on non-filtered entities.

:::note

Si hay un error en el filtro en tiempo de ejecución, se lanza como si el error viniera de la propia función ORDA.

:::

## Bloqueo de una entidad

A menudo es necesario gestionar los posibles conflictos que pueden surgir cuando varios usuarios o procesos cargan e intentan modificar las mismas entidades al mismo tiempo. El bloqueo de registros es una metodología utilizada en las bases de datos relacionales para evitar actualizaciones incoherentes de los datos. El concepto consiste en bloquear un registro al leerlo para que ningún otro proceso pueda actualizarlo o, alternativamente, comprobar al guardar un registro que ningún otro proceso lo ha modificado desde que se leyó. El primero se denomina **bloqueo de registro pesimista** y garantiza que un registro modificado pueda escribirse a expensas de bloquear los registros a otros usuarios. Este último se conoce como **bloqueo de registro optimista** y cambia la garantía de los privilegios de escritura en el registro por la flexibilidad de decidir privilegios de escritura sólo si el registro necesita ser actualizado. En el bloqueo de registros pesimista, el registro se bloquea aunque no haya necesidad de actualizarlo. En el bloqueo optimista de registros, la validez de la modificación de un registro se decide en el momento de la actualización.

ORDA le ofrece dos modos de bloqueo de entidad:

- un modo automático "optimista", adecuado para la mayoría de las aplicaciones,
- un modo "pesimista" que permite bloquear las entidades antes de su acceso.

### Bloqueo optimista automático

Este mecanismo automático se basa en el concepto de "bloqueo optimista", especialmente adaptado a los problemas de las aplicaciones web. Este concepto se caracteriza por los siguientes principios de funcionamiento:

- Todas las entidades pueden cargarse siempre en lectura-escritura; no existe el "bloqueo" _a priori_ de las entidades.
- Cada entidad tiene un sello de bloqueo interno que se incrementa cada vez que se guarda.
- Cuando un usuario o proceso intenta guardar una entidad utilizando el método `entity.save( )`, 4D compara el valor del marcador de la entidad a guardar con el de la entidad encontrada en los datos (en el caso de modificación):
  - Cuando los valores coinciden, se guarda la entidad y se incrementa el valor del marcador interno.

  - Cuando los valores no coinciden, significa que otro usuario ha modificado esta entidad mientras tanto. No se guarda y se devuelve un error.

El siguiente diagrama ilustra el bloqueo optimista:

1. Two processes load the same entity.<br/><br/>![](../assets/en/ORDA/optimisticLock1.png)

2. El primer proceso modifica la entidad y valida el cambio. Se llama al método `entity.save( )`. El motor 4D compara automáticamente el valor del marcador interno de la entidad modificada con el de la entidad almacenada en los datos. Since they match, the entity is saved and its stamp value is incremented.<br/><br/>![](../assets/en/ORDA/optimisticLock2.png)

3. El segundo proceso también modifica la entidad cargada y valida sus cambios. Se llama al método `entity.save( )`. Since the stamp value of the modified entity does not match the one of the entity stored in the data, the save is not performed and an error is returned.<br/><br/>![](../assets/en/ORDA/optimisticLock3.png)

Esto también puede ilustrarse con el siguiente código:

```4d
 $person1:=ds.Person.get(1) //Reference to entity
 $person2:=ds.Person.get(1) //Other reference to same entity
 $person1.name:="Bill"
 $result:=$person1.save() //$result.success=true, change saved
 $person2.name:="William"
 $result:=$person2.save() //$result.success=false, change not saved
```

En este ejemplo, asignamos a $person1 una referencia a la entidad person con una llave de 1. A continuación, asignamos otra referencia de la misma entidad a la variable $person2. Con $person1, cambiamos el nombre de la persona y guardamos la entidad. Cuando intentamos hacer lo mismo con $person2, 4D verifica que la entidad en el disco es la misma que cuando se asignó por primera vez la referencia en $person1. Como no es lo mismo, devuelve false en la propiedad success y no guarda la segunda modificación.

Cuando se produce esta situación, puede, por ejemplo, volver a cargar la entidad desde el disco utilizando el método `entity.reload()` para poder intentar realizar de nuevo la modificación. El método `entity.save()` también propone una opción "automerge" para guardar la entidad en caso de que los procesos modificaran atributos que no fueran los mismos.

> Los mardadores de registro no se utilizan en las de **transacciones** porque en este contexto sólo existe una única copia de un registro. Sea cual sea el número de entidades que hacen referencia a un registro, se modifica la misma copia, por lo que las operaciones `entity.save()` nunca generarán errores de marcador.

### Bloqueo pesimista

Puede bloquear y desbloquear las entidades bajo pedido cuando acceda a los datos. Cuando una entidad es bloqueada por un proceso, es cargada en lectura/escritura en este proceso pero es bloqueada para todos los otros procesos. La entidad sólo puede cargarse en modo de sólo lectura en estos procesos; sus valores no pueden editarse ni guardarse.

Esta funcionalidad se basa en dos funciones de la clase `Entity`:

- [`entity.lock()`](../API/EntityClass.md#lock)
- [`entity.unlock()`](../API/EntityClass.md#unlock)

Para más información, consulte las descripciones de estas funciones.

> Los bloqueos pesimistas también pueden gestionarse a través de la [REST API](../REST/$lock.md).

### Utilización simultánea de los bloqueos clásicos 4D y de los bloqueos pesimistas ORDA

El uso de comandos clásicos y ORDA para bloquear registros se basa en los siguientes principios:

- Un bloqueo definido con un comando 4D clásico en un registro impide a ORDA bloquear la entidad correspondiente al registro.
- Un bloqueo definido con ORDA en una entidad impide que los comandos 4D clásicos bloqueen el registro que coincide a la entidad.

Estos principios se muestran en el siguiente diagrama:

![](../assets/en/ORDA/concurrent1.png)

Los **bloqueos de transacciones** también se aplican tanto a los comandos clásicos como a los comandos ORDA. En una aplicación multiproceso o multiusuario, un bloqueo definido en una transacción en un registro por un comando clásico tendrá como resultado impedir que cualquier otro proceso bloquee las entidades relacionadas con este registro (o a la inversa), hasta que la transacción sea validada o cancelada.

- Example with a lock set by a classic command:<br/><br/>![](../assets/en/ORDA/concurrent2.png)
- Example with a lock set by an ORDA function:<br/><br/>![](../assets/en/ORDA/concurrent3.png)

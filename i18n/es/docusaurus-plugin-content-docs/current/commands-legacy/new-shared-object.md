---
id: new-shared-object
title: New shared object
slug: /commands/new-shared-object
displayed_sidebar: docs
---

<!--REF #_command_.New shared object.Syntax-->**New shared object** {( *propiedad* ; *valor* {; *propiedad2* ; *valor2* ; ... ; *propiedadN* ; *valorN*} )} : Object<!-- END REF-->
<!--REF #_command_.New shared object.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| propiedad | Text | &#8594;  | Nombre de la propiedad a crear |
| valor | Text, Date, Boolean, Pointer, Number, Object | &#8594;  | Valor de la propiedad |
| Resultado | Object | &#8592; | Nuevo objeto compartido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New shared object.Summary-->El comando **New shared object** crea un nuevo objeto compartido vacío o prellenado y devuelve su referencia.<!-- END REF--> Para agregar o editar una propiedad a este objeto debe estar rodeado por la estructura *Use...End use*, de lo contrario, se devuelve un error. Sin embargo, es posible leer una propiedad fuera de una estructura *Use...End use*. 

**Nota:** para más información sobre objetos compartidos, consulte la página *Objetos y colecciones compartidos*.

Si no pasa ningún parámetro, **New shared object** crea un objeto vacío y devuelve su referencia. Debe asignar esta referencia a una variable 4D declarada con el comando [C\_OBJECT](c-object.md).

**Nota:** [C\_OBJECT](c-object.md) declara una variable del tipo [Objeto](# "Datos estructurados como forma de objeto nativo 4D") pero no crea un objeto.

Opcionalmente, puede rellenar el nuevo objeto pasando uno o varios pares de *propiedad*/*valor* como parámetros:

* En el parámetro *propiedad*, pase la etiqueta de la propiedad que se creará (hasta 255 caracteres). Tenga en cuenta que el parámetro de propiedad es sensible a mayúsculas y minúsculas.
* En el parámetro *valor*, pase el valor que desea definir para la propiedad. Los objetos compartidos solo pueden contener valores de los siguientes tipos:  
   * número (real, entero largo...) Los valores numéricos siempre se almacenan como reales.  
   * texto  
   * booleano  
   * fecha  
   * hora (almacenado como número de milisegundos - real)  
   * null  
   * objeto compartido(\*)  
   * colección compartida(\*)  
**Nota:** a diferencia de los objetos estándar (no compartidos), los objetos compartidos no son compatibles con imágenes, punteros y objetos o colecciones que no se comparten.  
    
(\*) Cuando se agrega un objeto o una colección compartido a un objeto compartido, comparten el mismo identificador de bloqueo. Para más información sobre este punto, consulte la sección *Identificador de bloqueo*.

#### Ejemplo 1 

Usted desea crear un nuevo objeto compartido prellenado:

```4d
 var $contact : Object
 $contact:=New shared object("name";"Smith";"firstname";"John")
```

#### Ejemplo 2 

Usted desea crear y modificar un objeto compartido. La estructura debe llamarse para este objeto:

```4d
 var $s_obj : Object
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End use
```

#### Ver también 

[New object](new-object.md)  
[New shared collection](../commands/new-shared-collection.md)  
*Objetos y colecciones compartidos*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1526 |
| Hilo seguro | &check; |



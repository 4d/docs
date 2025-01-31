---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| formulaObj | Object | -> | Objeto fórmula                               | <!-- END REF --> |

#### Descripción

El comando `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designa las fórmulas 4D que pueden ser llamadas directamente desde las fórmulas de 4D View Pro<!-- END REF -->. Dado que las funciones personalizadas no se almacenan en el documento, `VP SET CUSTOM FUNCTIONS` debe ejecutarse en el evento de formulario `On Load`.

Las fórmulas especificadas por `VP SET CUSTOM FUNCTIONS` aparecen en un menú emergente cuando se introduce la primera letra de su nombre. Ver la [página Fórmulas y funciones](../formulas.md).

> Si se llama varias veces a `VP SET CUSTOM FUNCTIONS` para la misma área, en la misma sesión, sólo se tiene en cuenta la última llamada.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro *formulaObj*, pase un objeto que contenga las fórmulas 4D que pueden ser llamadas desde las fórmulas 4D View Pro así como las propiedades adicionales. Cada propiedad `customFunction` pasada en *formulaObj* se convierte en el nombre de una función en el área 4D View Pro.

| Propiedad          |            |                                                                                | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object               | Definición de la función personalizada. `<customFunction>` define el nombre de la función personalizada que se mostrará en las fórmulas 4D View Pro (no se permiten espacios)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                    | formula    |                                                                                | Object               | Objeto fórmula 4D (obligatorio). Ver el comando `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | parameters |                                                                                | Colección de objetos | Colección de parámetros (en el orden en que están definidos en la fórmula). Para más información, consulte la sección [Parámetros](../formulas.md#parameters).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                    |            | \[ ].name | Text                 | Nombre del parámetro a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    |            | \[ ].type | Number               | Tipo de parámetro. Tipos soportados:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>`*type* puede omitirse o puede pasarse el valor por defecto (-1) (excepto cuando al menos un parámetro es de tipo collection, en cuyo caso la declaración del tipo del parámetro es obligatoria). <br/>Si se omite *type* o -1, el valor se envía automáticamente con su tipo, excepto los valores de fecha u hora que se envían como un objeto. Si *type* es `Is object`, el objeto es enviado en una propiedad `.value\`. Ver la sección [Parámetros](../formulas.md#parameters). |
|                    | summary    |                                                                                | Text                 | Descripción de la Fórmula a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|                    | minParams  |                                                                                | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                    | maxParams  |                                                                                | Number               | Número máximo de parámetros. Pasar un número superior a la longitud de los *parámetros* permite declarar parámetros "opcionales" con tipo por defecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

> **ATENCIÓN**

> - En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, los métodos permitidos por el comando [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) (si los hay) son ignorados en el área 4D View Pro.
> - En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, las funciones basadas en los comandos `SET TABLE TITLES` y `SET FIELD TITLES` son ignoradas en el área 4D View Pro.

#### Ejemplo

Desea utilizar objetos fórmula en un área 4D View Pro para añadir números, recuperar el apellido y el sexo de un cliente y el mes pico de la empresa:

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// Define la función "addnum" de un método llamado "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// Definir la función "ClientLastName" desde un campo base de datos
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Define la función "label" de una expresión 4D con un parámetro
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// Define la función "AverageValues" de un método llamado "AverageValues"
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// Define la función "Title" de una variable llamada "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

#### Ver también

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)

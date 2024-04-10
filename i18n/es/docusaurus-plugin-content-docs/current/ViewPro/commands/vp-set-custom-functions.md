---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( _vpAreaName_ : Text ; _formulaObj_ : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| formulaObj | Object | -> | Objeto fórmula                               | <!-- END REF --> |

#### Descripción

El comando `VP SET CUSTOM FUNCTIONS` <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designa las fórmulas 4D que pueden ser llamadas directamente desde las fórmulas de 4D View Pro<!-- END REF -->. Dado que las funciones personalizadas no se almacenan en el documento, `VP SET CUSTOM FUNCTIONS` debe ejecutarse en el evento de formulario `On Load`.

Las fórmulas especificadas por `VP SET CUSTOM FUNCTIONS` aparecen en un menú emergente cuando se introduce la primera letra de su nombre. Ver la [página Fórmulas y funciones](../formulas.md).

> Si se llama varias veces a `VP SET CUSTOM FUNCTIONS` para la misma área, en la misma sesión, sólo se tiene en cuenta la última llamada.

Pase el nombre del área de 4D View Pro en _vpAreaName_. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro _formulaObj_, pase un objeto que contenga las fórmulas 4D que pueden ser llamadas desde las fórmulas 4D View Pro así como las propiedades adicionales. Cada propiedad `customFunction` pasada en _formulaObj_ se convierte en el nombre de una función en el área 4D View Pro.

| Propiedad          |            |                                                                                | Tipo                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | Object               | Definición de la función personalizada. `<customFunction>` define el nombre de la función personalizada que se mostrará en las fórmulas 4D View Pro (no se permiten espacios)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                    | formula    |                                                                                | Object               | Objeto fórmula 4D (obligatorio). Ver el comando `Formula`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                    | parameters |                                                                                | Colección de objetos | Colección de parámetros (en el orden en que están definidos en la fórmula). For more information, please refer to the [Parameters](../formulas.md#parameters) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                    |            | \[ ].name | Text                 | Nombre del parámetro a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                    |            | \[ ].type | Number               | Tipo de parámetro. Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>_type_ can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If _type_ is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. If _type_ is `Is object`, the object is sent in a `.value` property. Ver la sección [Parámetros](../formulas.md#parameters). |
|                    | summary    |                                                                                | Text                 | Descripción de la Fórmula a mostrar en 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                    | minParams  |                                                                                | Number               | Número mínimo de parámetros                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                    | maxParams  |                                                                                | Number               | Número máximo de parámetros. Pasar un número superior a la longitud de los _parámetros_ permite declarar parámetros "opcionales" con tipo por defecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

> **ATENCIÓN**

> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) command (if any) are ignored in the 4D View Pro area.
> - En cuanto se llama a `VP SET CUSTOM FUNCTIONS`, las funciones basadas en los comandos `SET TABLE TITLES` y `SET FIELD TITLES` son ignoradas en el área 4D View Pro.

#### Ejemplo

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender and the company's peak month:

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// Define "AverageValues" function from a method named "AverageValues"
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

#### Ver también

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)

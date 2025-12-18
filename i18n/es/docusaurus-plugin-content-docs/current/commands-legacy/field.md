---
id: field
title: Field
slug: /commands/field
displayed_sidebar: docs
---

<!--REF #_command_.Field.Syntax-->**Field** ( *numTabla* : Integer ; *numCamp* : Integer ) -> Resultado <br/>**Field** ( *ptrCamp* : Pointer ) -> numCampo<!-- END REF-->
<!--REF #_command_.Field.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla | Integer | &#8594; | Número de tabla |
| numCamp | Integer | &#8594; | Número de campo |
| ptrCamp | Pointer | &#8594; | Puntero del campo |
| Resultado | Pointer, Integer | &#8592; | Puntero de campo o Número de campo|

<!-- END REF-->

## Descripción 

El comando **Field** tiene dos sintaxis: 

<!--REF #_command_.Field.Summary-->* Si pasa un número de tabla en *numTabla* y un número de campo en *numCampo*, Field devuelve un puntero al campo.
* Si pasa un puntero a un campo en *ptrCamp*, Field devuelve el número del campo.<!-- END REF-->

## Ejemplo 1 

El siguiente ejemplo asigna la variable *campPtr* a un puntero al segundo campo en la tercera tabla:

```4d
 CampPtr:=Field(3;2)
```

## Ejemplo 2 

Si pasa *campPtr* (un puntero al segundo campo de una tabla) a Field devuelve el valor 2\. La siguiente línea asigna el valor 2 a *campNum*:

```4d
 campNum:=Field(campPtr)
```

## Ejemplo 3 

En el siguiente ejemplo, la variable *campNum* es igual al número del campo de \[Tabla3\]Campo2:

```4d
 campNum:=Field(->[Tabla3]Campo2)
```

## Ver también 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Last field number](last-field-number.md)  
[Table](table.md)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 253 |
| Hilo seguro | yes |



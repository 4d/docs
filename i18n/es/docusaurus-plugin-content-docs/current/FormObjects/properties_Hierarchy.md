---
id: propertiesHierarchy
title: Jerarquía
---

## List box jerárquico

`List box de tipo array`

This property specifies that the list box must be displayed in hierarchical form. In the JSON form, this feature is triggered [when the *dataSource* property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the *Hierarchical List Box* option is selected, corresponding to each *dataSource* array to use as break column. Cada vez que se introduce un valor en un campo, se añade una nueva línea. Se pueden especificar hasta 10 variables. These variables set the hierarchical levels to be displayed in the first column.

Ver [List box jerárquicos](listbox_overview.md#hierarchical-list-boxes)

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                        |
| ---------- | -------------- | ------------------------------------------------------- |
| datasource | array cadena   | Colección de nombres de arrays que definen la jerarquía |

#### Objetos soportados

[List Box](listbox_overview.md)

---
id: propertiesHierarchy
title: Jerarquía
---

## List box jerárquico

`Array type list boxes`

Esta propiedad especifica que el list box debe mostrarse en forma jerárquica. In the JSON form, this feature is triggered [when the _dataSource_ property value is an array](properties_Object.md#hierarchical-list-box), i.e. a collection.

Additional options (**Variable 1...10**) are available when the _Hierarchical List Box_ option is selected, corresponding to each _dataSource_ array to use as break column. Cada vez que se introduce un valor en un campo, se añade una nueva línea. Se pueden especificar hasta 10 variables. Estas variables definen los niveles jerárquicos a mostrar en la primera columna.

See [Hierarchical list boxes](listbox_overview.md#hierarchical-list-boxes)

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                        |
| ---------- | -------------- | ------------------------------------------------------- |
| datasource | array cadena   | Colección de nombres de arrays que definen la jerarquía |

#### Objetos soportados

[List Box](listbox_overview.md)

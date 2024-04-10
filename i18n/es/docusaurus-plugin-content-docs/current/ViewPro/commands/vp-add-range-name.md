---
id: vp-add-range-name
title: VP ADD RANGE NAME
---

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( _rangeObj_ : Object ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| Parámetros | Tipo   |    | Descripción                     |                  |
| ---------- | ------ | -- | ------------------------------- | ---------------- |
| rangeObj   | Object | -> | Objeto rango                    |                  |
| name       | Text   | -> | Nombre de la fórmula            |                  |
| options    | Object | -> | Opciones de la fórmula temporal | <!-- END REF --> |

#### Descripción

El comando `VP ADD RANGE NAME` <!-- REF #_method_.VP ADD RANGE NAME.Summary -->crea o modifica un rango con nombre en el documento abierto<!-- END REF -->.

> Los rangos nombrados creados por este comando se guardan con el documento.

En _rangeObj_, pase el rango que quiere nombrar, y pase el nuevo nombre del rango en _name_. Si el nombre ya se utiliza en el mismo alcance, el nuevo rango nombrado sustituye al existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Puede pasar un objeto con las propiedades adicionales para el rango nombrado en _options_. Se soportan las siguientes propiedades:

| Propiedad | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| scope     | Number | Alcance del rango. Puede pasar el índice de hojas (el conteo comienza en 0) o usar las siguientes constantes: <li>`vk current sheet`</li><li>`vk workbook`</li>El alcance determina si un nombre de rango es local en una hoja de trabajo determinada (_scope_=sheet index o `vk current sheet`), o global en todo el libro de trabajo (_scope_=`vk workbook`). |
| comment   | Text   | Comentario asociado al rango nombrado                                                                                                                                                                                                                                                                                                                                                                                                                                    |

> - Un rango nombrado es en realidad una fórmula nombrada que contiene coordenadas. `VP ADD RANGE NAME` facilitates the creation of named ranges, but you can also use the [`VP ADD FORMULA NAME`](vp-add-formula-name.md) method to create named ranges.
> - Formulas defining named ranges can be retrieved with the [`VP Get formula by name`](vp-get-formula-by-name.md) method.

#### Ejemplo

Quiere crear un rango nombrado para un rango de celdas:

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### Ver también

[VP Get names](vp-get-names.md)<br/>
[VP Name](vp-name.md)

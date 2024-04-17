---
id: vp-add-formula-name
title: VP ADD FORMULA NAME
---

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( _vpAreaName_ : Text ; _vpFormula_ : Text ; _name_ : Text { ; _options_ : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| Parámetros | Tipo   |    | Descripción                                  |                  |
| ---------- | ------ | -- | -------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro |                  |
| vpFormula  | Text   | -> | Fórmula 4D View Pro                          |                  |
| name       | Text   | -> | Nombre de la fórmula                         |                  |
| options    | Object | -> | Opciones de la fórmula temporal              | <!-- END REF --> |

#### Descripción

El comando `VP ADD FORMULA NAME` <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->crea o modifica una fórmula temporal en el documento abierto<!-- END REF -->.

> Las fórmulas nombradas creadas por este comando se guardan en el documento.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase la fórmula 4D View Pro que desea nombrar en _vpFormula_. For detailed information about formula syntax, see [Formulas and Functions](../formulas.md) page.

Pase el nuevo nombre para la fórmula en _name_. Si el nombre ya se utiliza en el mismo alcance, la nueva fórmula nombrada sustituye la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Puede pasar un objeto con las propiedades adicionales para la fórmula nombrada en _options_. Se soportan las siguientes propiedades:

| Propiedad | Tipo   | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope     | Number | Alcance de la fórmula. Puede pasar el índice de hojas (el conteo comienza en 0) o usar las siguientes constantes: <li>`vk current sheet`</li><li>`vk workbook`</li>El ámbito determina si un nombre de fórmula es local en una hoja de trabajo determinada (_scope_=sheet index o `vk current sheet`), o global en todo el libro de trabajo (_scope_=`vk workbook`). |
| comment   | Text   | Comentario asociado a una fórmula nombrada                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Ejemplo

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### Ver también

[Cell references](../formulas.md#cell-references)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Get names](vp-get-names.md)

---
id: vp-get-names
title: VP Get names
---

<!-- REF #_method_.VP Get names.Syntax -->

**VP Get names** ( vpAreaName : Text { ; scope : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

| Parámetros | Tipo       |                             | Descripción                                                    |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| scope      | Integer    | ->                          | Alcance objetivo (por defecto= hoja actual) |                  |
| Result     | Collection | <- | Nombres existentes en el alcance definido                      | <!-- END REF --> |

#### Descripción

El comando `VP Get names` <!-- REF #_method_.VP Get names.Summary -->devuelve una colección de todos los "nombres" definidos en la hoja actual o en el ámbito designado por el parámetro *scope*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener los nombres en *scope* utilizando el índice de la hoja (la numeración comienza en 0) o una de las siguientes constantes:

- `vk current sheet`
- `vk workbook`

##### Colección devuelta

La colección devuelta contiene un objeto por nombre. Las propiedades de objetos siguientes pueden ser devueltas:

| Propiedad                                                                               | Tipo | Descripción                   |
| --------------------------------------------------------------------------------------- | ---- | ----------------------------- |
| result\[ ].name    | Text | nombre de celda o de rango    |
| result\[ ].formula | Text | formula                       |
| result\[ ].comment | Text | Comentario asociado al nombre |

Las propiedades disponibles dependen del tipo de elemento con nombre (celda con nombre, rango con nombre o fórmula con nombre).

#### Ejemplo

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) //nombres en la 3a hoja
```

#### Ver también

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Name](vp-name.md)

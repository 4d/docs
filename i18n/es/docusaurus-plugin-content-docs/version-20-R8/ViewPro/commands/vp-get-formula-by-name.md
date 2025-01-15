---
id: vp-get-formula-by-name
title: VP Get formula by name
---

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| Parámetros | Tipo    |                             | Descripción                                                   |                  |
| ---------- | ------- | --------------------------- | ------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                  |                  |
| name       | Text    | ->                          | Nombre del rango nombrado                                     |                  |
| scope      | Integer | ->                          | Alcance objetivo (por defecto=hoja actual) |                  |
| Result     | Object  | <- | Definición de la fórmula o rango con nombre                   | <!-- END REF --> |

#### Descripción

El comando `VP Get formula by name` <!-- REF #_method_.VP Get formula by name.Summary --> devuelve la fórmula y el comentario correspondientes al rango con nombre o a la fórmula con nombre pasada en el parámetro *name*, o **null** si no existe en el ámbito definido<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Pase el rango con nombre o la fórmula con nombre que desea obtener en *name*. Tenga en cuenta que los rangos con nombre se devuelven como fórmulas que contienen referencias absolutas de celdas.

Puede definir dónde obtener la fórmula en *scope* utilizando el índice de la hoja (la numeración comienza en 0) o una de las siguientes constantes:

- `vk current sheet`
- `vk workbook`

##### Objeto devuelto

El objeto devuelto contiene las siguientes propiedades:

| Propiedad | Tipo | Descripción                                                                                                                                                                                     |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula   | Text | Texto de la fórmula correspondiente a la fórmula nombrada o al rango nombrado. Para los rangos nombrados, la fórmula es una secuencia de coordenadas absolutas. |
| comment   | Text | Comentario correspondiente a la fórmula nombrada o al rango nombrado                                                                                                                            |

#### Ejemplo

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```

#### Ver también

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP Get names](vp-get-names.md)

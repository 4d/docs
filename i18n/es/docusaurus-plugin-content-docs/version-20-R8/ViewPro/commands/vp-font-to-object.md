---
id: vp-font-to-object
title: VP Font to object
---

<!-- REF #_method_.VP Font to object.Syntax -->

**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Font to object.Params -->

| Parámetros | Tipo   |                             | Descripción                     |
| ---------- | ------ | --------------------------- | ------------------------------- |
| font       | Text   | ->                          | Cadena abreviada para la fuente |
| Result     | Object | <- | Objeto fuente                   |

<!-- END REF -->

#### Descripción

El comando utilitario `VP Font to object` <!-- REF #_method_.VP Font to object.Summary -->devuelve un objeto a partir de una cadena abreviada de fuentes<!-- END REF -->. Este objeto se puede utilizar para establecer u obtener la configuración de las propiedades de la fuente a través de la notación de objetos.

En el parámetro *font*, pase una cadena de fuente abreviada para especificar las diferentes propiedades de una fuente (por ejemplo, "12 pt Arial"). Puede obtener más información sobre las cadenas abreviadas de fuentes [en esta página](https://www.w3schools.com/cssref/pr_font_font.asp), por ejemplo.

El objeto devuelto contiene los atributos de fuente definidos como propiedades. Para obtener más información sobre las propiedades disponibles, consulte el comando [VP Object to font](vp-object-to-font.md).

#### Ejemplo 1

Este código:

```4d
$font:=VP Font to object("16pt arial")
```

devolverá el objeto $font:

```4d
{

family:arial
size:16pt
}
```

#### Ejemplo 2

Ver el ejemplo de [`VP Object to font`](vp-object-to-font.md).

#### Ver también

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)

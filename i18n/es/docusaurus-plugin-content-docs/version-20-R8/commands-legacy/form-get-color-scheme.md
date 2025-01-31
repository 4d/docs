---
id: form-get-color-scheme
title: FORM Get color scheme
slug: /commands/form-get-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get color scheme.Syntax-->**FORM Get color scheme**  : Text<!-- END REF-->
<!--REF #_command_.FORM Get color scheme.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Esquema de colores del formulario actual: "claro" u "oscuro" |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM Get color scheme.Summary-->El comando **FORM Get color scheme** devuelve el nombre de la combinación de colores actual del formulario mostrado actualmente.<!-- END REF--> Si no hay un formulario actual, el comando devuelve una cadena vacía.

**Nota**: en Windows, este comando siempre devuelve "light".

El esquema de color real de un formulario se define por:

* la propiedad del formulario "Color Scheme" (ver *colorScheme*);
* si "Color Scheme" es "heredado", una llamada al comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md);
* si [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) no se llama o se llama con el valor del parámetro "heredado", la Configuración (configuración de la base local en caso de un componente);
* si si la configuración se define como "heredada", las preferencias del usuario del sistema operativo.

Consulte el comando [SET APPLICATION COLOR SCHEME](set-application-color-scheme.md) para obtener detalles sobre los nombres de las combinaciones de colores. 

#### Ejemplo 

Desea cargar una imagen según el esquema actual del formulario:

```4d
 $txt_suffix:=Choose((FORM Get color scheme="dark");"_dark";"")
 READ PICTURE FILE(Get 4D folder(Current resources folder)+"myPict"+$txt_suffix+".png";$Pic_icon)
```

**Nota:** se recomienda utilizar *css* para adaptar el diseño de objetos formulario al esquema actual.

#### Ver también 

[Get application color scheme](get-application-color-scheme.md)  
[SET APPLICATION COLOR SCHEME](set-application-color-scheme.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1761 |
| Hilo seguro | &cross; |



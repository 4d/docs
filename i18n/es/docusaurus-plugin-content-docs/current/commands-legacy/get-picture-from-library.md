---
id: get-picture-from-library
title: GET PICTURE FROM LIBRARY
slug: /commands/get-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FROM LIBRARY.Syntax-->**GET PICTURE FROM LIBRARY** ( refImag | nomImag ; *imagen* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FROM LIBRARY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refImag &#124; nomImag | Entero largo, Cadena | &#8594;  | Número de referencia o nombre de una imagen de la librería de imágenes |
| imagen | Picture | &#8592; | Imagen de la librería de imágenes |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET PICTURE FROM LIBRARY.Summary-->El comando GET PICTURE FROM LIBRARY devuelve en el parámetro *imagen* la imagen de la librería de imágenes cuyo número de referencia se pasa en *refImag* o cuyo nombre se pasa en *nomImag*.<!-- END REF-->

Si no hay una imagen con ese nombre o número de referencia, GET PICTURE FROM LIBRARY no modifica *imagen*. 

#### Ejemplo 1 

El siguiente ejemplo devuelve en *vgMiImagen* la imagen cuyo número de referencia se almacena en la variable local *$vlRefImag*:

```4d
 GET PICTURE FROM LIBRARY($vlRefImag;vgMiImagen)
```

#### Ejemplo 2 

El siguiente ejemplo devuelve en *$DDcom\_Prot\_MiImagen* la imagen con el nombre "DDcom\_Prot\_Boton1" almacenada en la librería de imágenes:

```4d
 GET PICTURE FROM LIBRARY("XP - Aceptar";$XP_Aceptar)
```

#### Ejemplo 3 

Ver el tercer ejemplo para el comando [PICTURE LIBRARY LIST](picture-library-list.md "PICTURE LIBRARY LIST").

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si la imagen existe en la librería de imágenes. De lo contrario, OK toma el valor cero.

#### Gestión de errores 

Si no hay suficiente memoria para devolver la imagen, se genera el error -108\. Puede interceptar este error utilizando un método de gestión de errores.

#### Ver también 

[PICTURE LIBRARY LIST](picture-library-list.md)  
[REMOVE PICTURE FROM LIBRARY](remove-picture-from-library.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  
---
id: remove-picture-from-library
title: REMOVE PICTURE FROM LIBRARY
slug: /commands/remove-picture-from-library
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Syntax-->**REMOVE PICTURE FROM LIBRARY** ( refImag | nomImag )<!-- END REF-->
<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| refImag &#124; nomImag | Entero largo, Cadena | &#8594;  | Número de referencia o nombre de una imagen de la librería de imágenes |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.REMOVE PICTURE FROM LIBRARY.Summary-->El comando REMOVE PICTURE FROM LIBRARY elimina de la librería de imágenes la imagen cuyo número de referencia se pasa en *refImag* o cuyo nombre se pasa en *nomImag*.<!-- END REF--> 

Si el número de referencia o nombre no corresponden a ninguna imagen, el comando no hace nada.

**4D Server:** REMOVE PICTURE FROM LIBRARY no puede utilizarse desde un método ejecutado en el equipo servidor (procedimiento almacenado o trigger). Si llama REMOVE PICTURE FROM LIBRARY en un equipo servidor, no pasa nada, se ignora la llamada.

**Advertencia:** los objetos de diseño (elementos de lista jerárquica, líneas de menú, etc.) pueden hacer referencia a una imagen de la librería. Sea prudente cuando elimine por programación una imagen de la librería de imágenes. 

#### Ejemplo 1 

El siguiente ejemplo borra la imagen #4444 de la librería de imágenes.

```4d
 REMOVE PICTURE FROM LIBRARY(4444)
```

#### Ejemplo 2 

El siguiente ejemplo borra de la librería de imágenes toda imagen cuyo nombre comience por el símbolo dólar (*$*):

```4d
 PICTURE LIBRARY LIST($alRefImag;$asNomImag)
 For($vlImag;1;Size of array($alRefImag))
    If($asNomImag{$vlImag}="$@")
       REMOVE PICTURE FROM LIBRARY($alRefImag{$vlImag})
    End if
 End for
```

#### Ver también 

[GET PICTURE FROM LIBRARY](get-picture-from-library.md)  
[PICTURE LIBRARY LIST](picture-library-list.md)  
[SET PICTURE TO LIBRARY](set-picture-to-library.md)  
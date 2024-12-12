---
id: font-file
title: Font file
slug: /commands/font-file
displayed_sidebar: docs
---

<!--REF #_command_.Font file.Syntax-->**Font file** ( *familiaFuente* {; *estiloFuente*} ) : any<!-- END REF-->
<!--REF #_command_.Font file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| familiaFuente | Text | &#8594;  | Nombre de la familia de fuente |
| estiloFuente | Integer | &#8594;  | Estilo de fuente: 0=normal (por defecto), 1=negrita, 2=itálica |
| Resultado | Null, Object | &#8592; | Objeto archivo fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Font file.Summary-->El comando **Font file** devuelve un objeto que describe el archivo de fuente de su sistema operativo correspondiente a *familiaFuente* y, opcionalmente, a *estilofuente* pasado en el parámetro.<!-- END REF--> 

Si la fuente designada por *familiaFuente* no está instalada en el sistema operativo, el comando devuelve un objeto *Null*. 

El parámetro opcional *estilofuente* permite definir una variación de estilo. Puede pasar una o una combinación de las siguientes constantes del tema *Estilos de fuente* (se ignora cualquier otro valor):

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Plain     | Entero largo | 0     |

#### Ejemplo 

Desea asegurarse de que la fuente utilizada en un área de texto esté disponible en el sistema del usuario para una visualización correcta:

```4d
 var $fontName : Text
 var $fontStyle : Integer
 var $fontFile : Object
 $fontName:=OBJECT Get font(*;"vText")
 $fontStyle:=OBJECT Get font style(*;"vText")
 $fontFile:=Font file($fontName;$fontStyle)
 If($fontFile=Null)
    ALERT("La fuente definida no está disponible, por favor instale: “+$fontName)
 End if
```

#### Ver también 

[OBJECT SET FONT](object-set-font.md)  
---
id: equal-pictures
title: Equal pictures
slug: /commands/equal-pictures
displayed_sidebar: docs
---

<!--REF #_command_.Equal pictures.Syntax-->**Equal pictures** ( *imagen1* ; *imagen2* ; *mascara* ) : Boolean<!-- END REF-->
<!--REF #_command_.Equal pictures.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen1 | Picture, Picture | &#8594;  | Imagen fuente original |
| imagen2 | Picture, Picture | &#8594;  | Imagen a comparar |
| mascara | Picture, Picture | &#8592; | Máscara resultante |
| resultado | Boolean | &#8592; | True si ambas imágenes son idénticas; de lo contrario, False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Equal pictures.Summary-->El comando **Equal pictures** compara con precisión las dimensiones y el contenido de dos imágenes.<!-- END REF-->  
  
Pase en *imagen1* la imagen fuente y en *imagen2* una imagen comparar con la imagen fuente. 

* Si las imágenes no son de la misma dimensión, el comando devuelve **False** y el parámetro *mascara* contiene una imagen vacía.
* Si las dos imágenes son del mismo tamaño pero tienen contenidos diferentes, el comando devuelve **False** y el parámetro *mascara* contiene la imagen mascara resultante de la comparación de las dos imágenes. Esta comparación se realiza píxel por píxel. Cada píxel diferente aparece en blanco sobre un fondo negro.
* Si las dos imágenes son idénticas, el comando devuelve **True** y el parámetro *mascara* contiene una imagen completamente negra.

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se comparan las dos imágenes. En caso de anomalía, particularmente si una de las imágenes no se inicializa (imagen vacía), la variable OK toma el valor 0.

#### Ejemplo 

En el siguiente ejemplo, comparamos dos imágenes (pict1 y pict2) y mostramos la máscara resultante:

![](../assets/en/commands/pict847365.fr.png)

Este es el código del botón **Compare**:

```4d
 $equal :=Equal pictures($pict1;$pict2;$mask)
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1196 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||



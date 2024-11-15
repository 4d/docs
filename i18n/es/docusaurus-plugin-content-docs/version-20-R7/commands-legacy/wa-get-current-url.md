---
id: wa-get-current-url
title: WA Get current URL
slug: /commands/wa-get-current-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get current URL.Syntax-->**WA Get current URL** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get current URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &#8592; | URL actualmente cargada en el área Web |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WA Get current URL.Summary-->El comando WA Get current URL devuelve la dirección URL de la página mostrada en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> 

Si el URL actual no está disponible, el comando devuelve una cadena vacía.

Si la página web está cargada completamente, el valor devuelto por la función es idéntico al de la variable "URL" asociada con el área web. Si la página está en el proceso de ser cargada, los dos valores serán diferentes: la función devuelve el URL completamente cargado y la variable contiene el URL en proceso de ser cargado.

#### Ejemplo 

La página mostrada es el URL "www.apple.com" y la página "www.4dhispano.com" está en proceso de ser cargada:

```4d
 $url:=WA Get current URL(MyWArea) //devuelve "http://www.apple.com"
  //La variable URL asociada contiene "http://www.4dhispano.com"
```

#### Ver también 

[WA OPEN URL](wa-open-url.md)  
---
id: php-get-option
title: PHP GET OPTION
slug: /commands/php-get-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *opcion* ; *valor* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opcion | Entero largo | &#x1F852; | Opción a leer |
| valor | Booleano | &#x1F858; | Valor actual de la opción |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PHP GET OPTION.Summary-->El comando PHP GET OPTION puede ser utilizado para conocer el valor actual de una opción relativa a la ejecución de scripts PHP.<!-- END REF--> 

Pase en el parámetro *opcion* una constante del tema "*PHP*" para designar la opción a leer. El comando devuelve el valor actual de la opción en el parámetro *valor*.

| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Entero largo | 2     | Definición del modo de procesamiento de los encabezados HTTP devueltos por PHP en el resultado de la ejecución cuando este resultado es de tipo Texto (cuando el resultado es de tipo BLOB, los encabezados se mantienen siempre).<br/>**Valor(es) posible(s)**: Booleano. False (valor por defecto = eliminar los encabezados HTTP del resultado. True = conservar los encabezados HTTP. |

#### Ver también 

[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  
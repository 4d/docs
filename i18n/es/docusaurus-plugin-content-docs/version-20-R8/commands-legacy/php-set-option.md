---
id: php-set-option
title: PHP SET OPTION
slug: /commands/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *opción* ; *valor* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| opción | Integer | &#8594;  | Número de opción a definir |
| valor | Boolean | &#8594;  | Nuevo valor de la opción |
| * | Operador | &#8594;  | Si se pasa: la modificación no se aplica a la siguiente llamada |

<!-- END REF-->

:::info Compatibilidad

**PHP es obsoleto en 4D**. Se recomienda utilizar la clase [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::

#### Descripción 

<!--REF #_command_.PHP SET OPTION.Summary-->El comando **PHP SET OPTION** se utiliza para definir opciones específicas antes de llamar el comando [PHP Execute](php-execute.md).<!-- END REF--> El alcance de este comando es el proceso actual.

Pase en el parámetro *opcion* una constante del tema "*PHP*" para designar la opción a modificar y en el parámetro *valor*, el nuevo valor de la opción.

| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Entero largo | 2     | Definición del modo de procesamiento de los encabezados HTTP devueltos por PHP en el resultado de la ejecución cuando este resultado es de tipo Texto (cuando el resultado es de tipo BLOB, los encabezados se mantienen siempre).<br/>**Valor(es) posible(s)**: Booleano. False (valor por defecto = eliminar los encabezados HTTP del resultado. True = conservar los encabezados HTTP. |

Por defecto, **PHP SET OPTION** define la opción para todas las llamadas posteriores a [PHP Execute](php-execute.md) del proceso. Si lo quiere definir para la próxima llamada únicamente pase el parámetro estrella (*\**).

#### Ver también 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1059 |
| Hilo seguro | &cross; |



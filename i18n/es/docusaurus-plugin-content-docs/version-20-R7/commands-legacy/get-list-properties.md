---
id: get-list-properties
title: GET LIST PROPERTIES
slug: /commands/get-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST PROPERTIES.Syntax-->**GET LIST PROPERTIES** ( *lista* ; *apariencia* {; *icono* {; *altoLinea* {; *dobleClic* {; *multiSeleccion* {; *editable*}}}}} )<!-- END REF-->
<!--REF #_command_.GET LIST PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referencia de la lista |
| apariencia | Integer | &#8592; | Estilo gráfico de la lista 1 = Lista jerárquica a la Macintosh 2 = Lista jerárquica a la Windows |
| icono | Integer | &#8592; | Referencia de recurso Mac OS  ‘cicn’ |
| altoLinea | Integer | &#8592; | Altura mínima de la línea expresada en píxeles |
| dobleClic | Integer | &#8592; | Desplegar/Contraer sublista con doble-clik? 0 = Sí, 1= No |
| multiSeleccion | Integer | &#8592; | Selecciones múltiples: 0 = No, 1 = Sí |
| editable | Integer | &#8592; | Lista editable por el usuario: 0 = No, 1 = Sí |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET LIST PROPERTIES.Summary-->El comando GET LIST PROPERTIES devuelve información sobe la lista cuyo número de referencia se pasa en *lista*.<!-- END REF-->

El parámetro *apariencia* devuelve el estilo gráfico de la lista.  
El parámetro *icono* devuelve las referencias de los recursos de los iconos de nodos utilizados en la lista.  
El parámetro *alturaLinea* devuelve la altura de línea mínima.  
Si *dobleClic* vale 1, hacer doble-clic en una elemento padre de la lista no hace que su lista hijo se despliegue o se contraiga. Si *dobleClic* vale 0, este comportamiento se activa (valor por defecto).  
Si el parámetro *multiSeleccion* vale 0, las selecciones múltiples de elementos (manualmente o por programación) no son posibles en la lista. Si vale 1, se permiten las selecciones múltiples.   
Si el parámetro *editable* vale 1, la lista es editable cuando se muestra en forma de lista de selección en los registros. Si vale 0, la lista no es editable. 

Estas propiedades pueden definirse con la ayuda del comando [SET LIST PROPERTIES](set-list-properties.md "SET LIST PROPERTIES") y/o en el editor de listas en el entorno Diseño, si la lista fue creada en el editor o guardada utilizando el comando [SAVE LIST](save-list.md "SAVE LIST").

Para una completa descripción de la apariencia, iconos de nodos, altura de línea mínima y administración de una lista con doble clic, consulte el comando [SET LIST PROPERTIES](set-list-properties.md "SET LIST PROPERTIES").

#### Ver también 

[SET LIST PROPERTIES](set-list-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 632 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



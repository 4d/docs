---
id: web-get-variables
title: WEB GET VARIABLES
slug: /commands/web-get-variables
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET VARIABLES.Syntax-->**WEB GET VARIABLES** ( *arrayNoms* ; *arrayValores* )<!-- END REF-->
<!--REF #_command_.WEB GET VARIABLES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayNoms | Text array | &#8592; | Nombres de las variables del formulario web |
| arrayValores | Text array | &#8592; | Valores de las variables del formulario web |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB GET VARIABLES.Summary-->El comando **WEB GET VARIABLES** llena los arrays texto *arrayNoms* y *arrayValores* con los nombres y los valores de las variables contenidas en el formulario web “enviado” al servidor web.<!-- END REF--> 

Este comando obtiene el valor de todas las variables que pueden incluirse en páginas HTML: áreas de entrada, botones, casillas de selección, botones de radio, menús pop up, listas de opciones...

**Nota:** en el caso de las casillas de selección, el nombre de la variable y su valor sólo se devuelven si la casilla de selección ha sido seleccionada. 

Este comando es valido sin importar el tipo de URL o de formulario (método POST o GET) enviado al servidor web.

Este comando puede llamarse, si es necesario, en el *Método de base On Web Connection* o en cualquier otro método 4D que resulte del envío de un formulario.

##### Acerca de los formularios Web y sus acciones asociadas 

Un formulario contiene áreas de entrada (áreas de texto, botones, casillas de selección), cada una con un nombre.   
Cuando un formulario se "envía" al servidor web (una petición se envía al servidor web), la petición contiene, entre otros, la lista de áreas de entrada y sus valores respectivos.   
Hay dos métodos para enviar un formulario (ambos pueden utilizarse indiferentemente con 4D): 

* POST, generalmente utilizado para añadir datos en el servidor web, a una base de datos,
* GET, generalmente utilizado para la petición del servidor web, datos que provienen de una base de de datos.

#### Ejemplo 

Un formulario contiene dos campos, vNombre y vCiudad que reciben los valores “ROBERTO” y “PARIS”. La acción asociada al formulario es “/4DACTION/WEBFORM”.

* Si el método de formulario es POST (el utilizado con más frecuencia), los datos introducidos no serán visible en el URL (http://127.0.0.1/4DACTION/WEBFORM).
* Si el método de formulario es GET, los datos serán visibles en el URL (http://127.0.0.1/4DACTION/WEBFORM?vNOMBRE=ROBERTO&vCIUDAD=PARIS).

El método WEBFORM puede ser de esta forma:

```4d
 ARRAY TEXT($anombres;0)
 ARRAY TEXT($avalores;0)
 WEB GET VARIABLES($anombres;$avalores)
```

El resultado será:

```4d
 $anombres{1}="vNOMBRE"
 $anombres{2}="vCIUDAD"
 $avalores{1}="ROBERTO"
 $avalores{2}="PARIS"
```

La variable vNOMBRE contiene ROBERTO y vCIUDAD contiene PARIS.

#### Ver también 

[WEB GET BODY PART](web-get-body-part.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 683 |
| Hilo seguro | &check; |



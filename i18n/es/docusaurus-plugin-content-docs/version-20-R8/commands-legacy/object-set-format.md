---
id: object-set-format
title: OBJECT SET FORMAT
slug: /commands/object-set-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FORMAT.Syntax-->**OBJECT SET FORMAT** ( {* ;} *objeto* ; *formato* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FORMAT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| formato | Text | &#8594;  | Nuevo formato de salida para el objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET FORMAT.Summary-->**OBJECT SET FORMAT** reemplaza el formato de salida para los objetos especificados por *objeto* por el formato que pasa en *formatSalida*.<!-- END REF--> El nuevo formato se utiliza únicamente para la visualización actual, no se guarda con el formulario.

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se especifica una referencia de un campo o de una variable (campo o variable tipo objeto únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

**OBJECT SET FORMAT** puede utilizarse en formularios de entrada y de salida (visualizados o impresos) y pueden aplicarse a campos o variables (editables/no editables).

Naturalmente, debe utilizar un formato de salida compatible con el tipo de datos presente en el objeto o con el objeto mismo.

##### Booleanos 

Para dar formato a campos booleanos:

* (todas las versiones) puede pasar un valor simple en *formatSalida*. En este caso, el campo se mostrará como una casilla de selección y su etiqueta será el valor especificado.
* (sólo bases de datos binarias) puede pasar dos valores, separados por un punto y coma (*;*), en *formatSalida*. En este caso, el campo se mostrará como dos botones radio.

##### Fecha y hora 

Para dar formato a los campos o variables de tipo Fecha u Hora, puede utilizar:

* o bien un **formato predefinido** disponible a través de constantes del tema *Formatos de salida de fechas* o *Formatos de salida de hora* (valor longint). En este caso, debe pasar [Char](char.md)(n) en *displayFormat*, donde *n* es la constante:  
    
Fechas:  

| Constante                   | Valor | Comentario                                                                                                                 |  
| --------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null date          | 100   | A añadir a la constante de formato. Indica que en caso de valor null, 4D debe devolver una cadena vacía en lugar de ceros. |  
| Date RFC 1123               | 10    | Fri, 10 Sep 2010 13:07:20 GMT                                                                                              |  
| Internal date abbreviated   | 6     | 29 dic, 2006                                                                                                               |  
| Internal date long          | 5     | 29 diciembre 2006                                                                                                          |  
| Internal date short         | 7     |                                                                                                                            |  
| Internal date short special | 4     | 12/29/06 (pero 12/29/1896 o 12/29/2096)                                                                                    |  
| ISO Date                    | 8     | 2006-12-29T00:00:00                                                                                                        |  
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z                                                                                                       |  
| System date abbreviated     | 2     | dom. 29 de 2006                                                                                                            |  
| System date long            | 3     | domingo 29 diciembre 2006                                                                                                  |  
| System date short           | 1     |                                                                                                                            |  
    
Horas:  

| Constante                    | Valor | Comentario                                                                                                                                                                                                                          |  
| ---------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null time           | 100   | "" en lugar de 0                                                                                                                                                                                                                    |  
| HH MM                        | 2     |                                                                                                                                                                                                                                     |  
| HH MM AM PM                  | 5     |                                                                                                                                                                                                                                     |  
| HH MM SS                     | 1     |                                                                                                                                                                                                                                     |  
| Hour min                     | 4     | 1 hora 2 minutos                                                                                                                                                                                                                    |  
| Hour min sec                 | 3     | 1 hora 2 minutos 3 segundos                                                                                                                                                                                                         |  
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponde a la norma ISO8601 y contiene, en teoría, una fecha y una hora. Como este formato no soporta fechas/horas combinadas, la parte de la fecha se rellena con 0s. Este formato expresa la hora local. |  
| Min sec                      | 7     | 62 minutos 3 segundos                                                                                                                                                                                                               |  
| MM SS                        | 6     |                                                                                                                                                                                                                                     |  
| System time long             | 11    | 1:02:03 AM HNEC (Mac únicamente)                                                                                                                                                                                                    |  
| System time long abbreviated | 10    | 1•02•03 AM (Mac únicamente)                                                                                                                                                                                                         |  
| System time short            | 9     |                                                                                                                                                                                                                                     |
* o un [formato personalizado basado en un modelo](../Project/date-time-formats.md) (valor string). Por ejemplo:  
    
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy")  
```  
    
Véase también el ejemplo 2.  
    
**Notas**:  
\- Para aplicar la opción "En blanco si null" a un formato personalizado, añada "blankIfNull" al final de la cadena de formato (distingue mayúsculas de minúsculas). Ejemplo:  
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy blankIfNull")  
```  
    
\- Para evitar conflictos al formatear fechas u horas, los formatos de un solo caracter deben ir precedidos de ":" Ejemplo:  
```4d  
 OBJECT SET FORMAT(*;"timeinput";":m")  
```

##### Imágenes 

Para dar formato a campos o variables de tipo Imagen, pase Char(n) en *formatSalida*, donde *n* es una de las siguientes constantes predefinidas de 4D: 

| Constante                   | Tipo         | Valor |
| --------------------------- | ------------ | ----- |
| Truncated centered          | Entero largo | 1     |
| Scaled to fit               | Entero largo | 2     |
| On background               | Entero largo | 3     |
| Truncated non centered      | Entero largo | 4     |
| Scaled to fit proportional  | Entero largo | 5     |
| Scaled to fit prop centered | Entero largo | 6     |
| Replicated                  | Entero largo | 7     |

  
##### Alfas y numéricos 

Para dar formato a campos o variables de tipo alfa o numérico, pase directamente la etiqueta del formato en el parámetro *formatSalida*. 

Para mayor información sobre formatos de salida, consulte las secciones *Formatos numéricos* y *Formatos Alfa* en el manual de Diseño de 4D.

**Nota:** en *formatSalida*, para utilizar los formatos de salida personalizados que usted haya podido crear en la caja de diálogo Preferencias, coloque un prefijo al nombre del formato con una barra vertical (|).

##### Botones imagen 

Para dar formato a botones imagen, pase en el parámetro *formatSalida* una cadena de caracteres respetando la siguiente sintaxis:  
*cols;lineas;imagen;modo{;ticks}*

* *cols* \= número de columnas en la imagen.
* *lineas* \= número de líneas en la imagen.
* *imagen*\= imagen utilizada, proveniente de la librería de imágenes, una variable imagen, o un archivo en la carpeta Resources:  
\- Si la imagen proviene de la librería de imágenes, introduzca su número, precedido de un signo de interrogación (ej.: "?250").  
\- Si la imagen proviene de una variable imagen, introduzca el nombre de la variable.  
\- Si la imagen proviene de un archivo almacenado en la carpeta Resources de la base, introduzca una ruta del tipo "#{carpeta/}nombreImagen" o "archivo:{carpeta/}nombreImagen".
* *modo* \= modo de visualización y de funcionamiento del botón imagen. Este parámetro puede tomar cualquiera de los siguientes valores: 0, 1, 2, 16, 32, 64 y 128\. Cada uno de estos valores representa un modo de visualización o de funcionamiento. Estos valores son acumulativos, por ejemplo, si quiere activar los modos 1 y 64, pase 65 en el parámetro *modo*. Estos son los detalles para cada valor:  
\- *modo* \= 0 (ninguna opción)  
Muestra la imagen siguiente en la serie cuando el usuario hace clic en la imagen. Muestra la imagen anterior en la serie cuando el usuario presiona la tecla Mayús y hace clic en la imagen. Cuando el usuario alcanza la última imagen en la serie, la imagen no cambia cuando el usuario hace clic nuevamente. Es decir que no va a la primera imagen de la serie.  
\- *modo* \= 1 (Cambiar continuamente)  
Similar al anterior, excepto que cuando el usuario hace clic en la imagen y mantiene el botón del ratón presionado la visualización de imágenes es continua (como una animación). Cuando el usuario alcanza la última imagen, el objeto no regresa a la primera imagen.  
\- *modo* \= 2 (Volver al inicio)  
Similar al anterior, a diferencia de que las imágenes se muestran en un bucle continuo. Cuando el usuario llega a la última imagen y hace clic nuevamente, la primera imagen aparece, y así sucesivamente.  
\- *modo* \= 16 (Cambiar al pasar el cursor encima)  
El contenido del botón imagen se modifica cuando el cursor del ratón pasa sobre él. La imagen inicial se restablece cuando el cursor deja el área del botón. Este modo se utiliza con frecuencia en aplicaciones multimedia o en documentos HTML. La imagen que se muestra es la última imagen de la tabla de miniaturas, a menos que la opción Última imagen si desactivado esté seleccionada (128). Si esa opción está seleccionada, se muestra la miniatura anterior a la última.  
\- *modo* \= 32 (Volver al soltar el clic)  
Este modo funciona con dos imágenes. Muestra la primera imagen todo el tiempo excepto cuando el usuario hace clic en el botón. En ese caso, la segunda imagen se muestra hasta que el botón del ratón es liberado. Este modo le permite crear un botón de acción que muestra su estatus (normal o presionado). Puede utilizar este modo para crear un efecto 3D o para mostrar toda imagen que simbolice la acción.  
\- *modo* \= 64 (Transparente)  
Utilizado para volver transparente el fondo de la imagen.  
\- *modo* \= 128 (Última imagen si desactivado)

Este modo le permite definir que la última miniatura debe ser mostrada cuando el botón esté inactivo. Cuando este modo es seleccionado, 4D muestra la última miniatura cuando el botón está desactivado. Cuando este modo se utiliza con los modos 0, 1 y 2, la última miniatura no se tiene en cuanta en la secuencia de los otros modos. Aparecerá únicamente cuando el botón esté desactivado.  
• *ticks* \= activación del modo “Cambiar cada x ticks” y define intervalo de tiempo entre la visualización de cada imagen. Cuando se pasa este parámetro opcional, le permite hacer ciclos a través del contenido del botón imagen a la velocidad especificada. Por ejemplo, si usted introduce "2;3;?16807;0;10", el botón imagen mostrará una imagen diferente cada 10 tics. Cuando este modo está activo, sólo el modo Transparente puede utilizarse (64).

##### Menús imagen desplegable 

Para dar formato a los menús imagen desplegable, pase en el parámetro *formatSalida* una cadena de caracteres respetando la siguiente sintaxis:  
*cols;lineas;imagen;hMargen;vMargen;modo*  

* *cols* \= número de columnas de la imagen.
* *lineas* \= número de líneas de la imagen.
* *imagen* \= imagen utilizada, proveniente de la librería de imágenes o de una variable imagen:  
\- si la imagen proviene de la librería de imágenes, introduzca su número, precedido por un signo de interrogación (ej. : "?250").  
\- Si la imagen proviene de una variable imagen, introduzca el nombre de la variable.
* *hMargen* \= margen en píxeles entre los límites horizontales del menú y la imagen.
* *vMargen* \= margen en píxeles entre los límites verticales del menú y la imagen.
* *modo* \= modo de transparencia de menú imagen desplegable. Acepta los valores 0 y 64:  
\- *modo* \= 0: el menú imagen desplegable no es transparente,  
\- *modo* \= 64: el menú imagen desplegable es transparente.

##### Termómetros y reglas 

Para dar formato a objetos de tipo termómetro o regla, pase en el parámetro *formatSalida*, una cadena de carácter respetando la siguiente sintaxis:  
*min;max;unidad;paso;modo{;format{;visualización}}*  

* *min* \= valor de la graduación de origen del indicador.
* *max* \= valor de la graduación final del indicador.
* *unid* \= intervalo entre las graduaciones del indicador.
* *interv* \= intervalo mínimo del movimiento del cursor en el indicador.
* *modo* \= modo de visualización y de funcionamiento del indicador. Este parámetro acepta los valores 0, 2, 3, 16, 32 y 128\. Estos valores pueden acumularse con el fin de definir varias opciones (excepto para 128). Estos son los detalles para cada valor:  
\- *modo* \= 0: no mostrar las unidades.  
\- *modo* \= 2: mostrar las unidades a la derecha o debajo del indicador.  
\- *modo* \= 3: mostrar las unidades a la izquierda o sobre el indicador.  
\- *modo* \= 16: mostrar las graduaciones junto a las unidades.  
\- *modo* \= 32: On Data Change se ejecuta mientras el usuario está ajustando el indicador. Si este valor no se utiliza, On Data Change ocurre sólo después que el usuario termina de ajustar el indicador.  
\- *modo* \= 128: activar el modo "Barber shop (animación continua). Este valor no puede combinarse con otros. En este modo, se ignoran los otros parámetros (excepto para el parámetro *display*, si se pasa). Para mayor información sobre este modo, consulte el manual de Diseño.
* *format* \= formato de salida de las graduaciones del indicador.
* *visualización* \= opciones de visualización específicas. En el caso de los termómetros, este parámetro sólo se tiene en cuenta cuando el subparámetro *modo* es igual a 128.  
   * *visualización* \= 0 (o se omite): mostrar una regla estándar/termómetro en animación continua "barber shop".  
   * *visualización* \= 1 : activa el modo "Stepper" para una regla / activa el modo "Progresión asincrónica" para un termómetro. Para mayor información sobre estas opciones consulte el manual de *Diseño*.

##### Dials 

Para dar formato a objetos de tipo dial, en el parámetro *formatSalida*, pase una cadena de caracteres respetando la siguiente sintaxis:  
*min;max;unid;interv{;modo}*  

* *min* \= valor de la primera graduación del indicador.
* *max* \= valor de la última graduación del indicador.
* *unid* \= intervalo entre las graduaciones del indicador.
* *interv* \= intervalo mínimo del cursor de movimiento en el indicador.
* *modo* \= modo de funcionamiento del dial (opcional). Este parámetro sólo acepta el valor 32: On Data Change se ejecuta mientras el usuario está ajustando el indicador. Si este valor no se utiliza, On Data Change ocurre sólo después de que el usuario haya terminado de ajustar el indicador.

##### Rejillas de botones 

Para dar formato a rejillas de botones, pase en el parámetro *formatSalida* una cadena de caracteres respetando la siguiente sintaxis:  
*cols;lines*  

* *cols* \= número de columnas de la rejilla.
* *lineas* \= número de líneas de la rejilla.

**Nota:** para mayor información sobre formatos de salida de los objetos de formulario, consulte el Manual de Diseño.

##### Botones 3D 

Para dar formato a botones 3D, pase en el parámetro *formatSalida* una cadena de caracteres respetando la siguiente sintaxis:  
*titulo;imagen;fondo;tituloPos;tituloVisible;iconVisible;estilo;horMargen;vertMargen;*  
*iconOffset;popupMenu,* *hipervínculo;numEstados* *;imageHugsTitle*

* *titulo* \= título del botón. Este valor puede expresarse como texto o un número de recurso (ej.: “:16800,1”)
* *imagen* \= imagen asociada al botón, proveniente de la librería de imágenes, de una variable imagen o de un archivo en la carpeta Resources:  
\- Si la imagen proviene de una librería de imágenes, introduzca su número, precedido por un signo de interrogación (ej.: “?250”).  
\- Si la imagen proviene de una variable imagen, introduzca el nombre de la variable.  
\- Si la imagen proviene de un archivo almacenado en el archivo Recursos de la base, introduzca un ruta del tipo carpeta/}nomimagen" o "archivo:{carpeta/}nomimagen".
* *fondo*\= imagen de fondo asociada a un botón (estilo personalizado), que proviene de una librería de imágenes, de una variable imagen o de un archivo almacenado en la carpeta Recursos (ver arriba).
* *tituloPos*\= posición del título del botón. Son posibles cinco valores:  
\- *tituloPos* \= 0: Centro  
\- *tituloPos* \= 1: Derecha  
\- *tituloPos* \= 2: Izquierda  
\- *tituloPos* \= 3: Abajo  
\- *tituloPos* \= 4: Arriba
* *tituloVisible*\= Define si el título es visible o no. Dos valores son posibles:  
\- *tituloVisible*\= 0: el título está oculto  
\- *tituloVisible*\= 1: el título se muestra
* *iconVisible* \= Define si el icono es visible o no. Son posibles dos valores:  
\- *iconVisible* \= 0 : el icono está oculto  
\- *iconVisible* \= 1 : el icono se muestra
* *estilo* \= Estilo de botón. El valor de esta opción determina si otras opciones son tenidas en cuenta (por ejemplo, fondo). Los siguientes valores de estilo son posibles:  
\- *estilo* \= 0: Ninguno  
\- *estilo* \= 1: Fondo desplazado  
\- *estilo* \= 2: Pulsador  
\- *estilo* \= 3: Botón de barra  
\- *estilo* \= 4: Personalizado  
\- *estilo* \= 5: Círculo  
\- *estilo* \= 6: Cuadrito de sistema  
\- *estilo* \= 7: Office XP  
\- *estilo* \= 8: Bevel  
\- *estilo* \= 9: Bevel redondeado\- *estilo* \= 10: Contraer/Expandir\- *estilo* \= 11: Ayuda\- *estilo* \= 12: OS X Texturizado\- *estilo* \= 13: OS X Gradiente
* *horMargen* \= Margen horizontal. Número de píxeles delimitando las márgenes internas a la derecha y a la izquierda del botón (áreas que el icono y el texto no deben invadir).
* *vertMargen* \= Margen vertical. Número de píxeles delimitando las márgenes superior e inferior del botón (áreas que el icono y el texto no deben invadir).
* *iconOffset* \= Desplazamiento del icono a la derecha y hacia abajo. Este valor, expresado en píxeles, indica la diferencia del icono del botón a la derecha y hacia abajo en caso de clic (el mismo valor se utiliza para ambas direcciones).
* *popupMenu* \= Asociación de un menú desplegable con el botón. Son posibles tres valores:  
\- *popupMenu* \= 0: Sin menú desplegable  
\- *popupMenu* \= 1: Con menú desplegable asociado  
\- *popupMenu* \= 2: Con menú desplegable separado
* hipervínculo \= El título es subrayado al pasar el cursor del ratón para parecerse a un hipervínculo (mecanismo obsoleto). Dos valores son posibles:  
   * hipervínculo \= 0: el título no es subrayado al pasar el ratón  
   * hipervínculo \= 1: el título es subrayado al pasar el ratón
* *numEstados* \= Número de estados presentes en la imagen utilizada como icono para el botón 3D, y que serán utilizados por 4D para representar los estados de los botones estándar (de 0 a 4).
* *imageHugsTitle* \= Define si el icono y el título deben estar separados o contiguos. Dos valores son posibles:  
   * *imageHugsTitle* \= 0: el icono y el título están separados  
   * *imageHugsTitle* \= 1: el icono y el título están contiguos

Algunas opciones no se tienen en cuenta para todos los estilos de botones 3D. Adicionalmente, en algunos casos, usted podría querer no modificar todas las opciones. Para no pasar una opción, simplemente omita el valor correspondiente. Por ejemplo, si no quiere pasar las opciones *titleVisible*, *vertMargin* e *hyperlink*, puede escribir:

```4d
 OBJECT SET FORMAT(myVar;"NiceButton;?256;:562;1;;1;4;5;;5;0;;2")
```

##### Encabezados de list box 

Para formatear el icono en un encabezado de list box, pase una cadena de caracteres en el parámetro *formatSalida*, que respeta la siguiente sintaxis:  
*imagen;iconPos*

* *imagen*\= imagen de encabezado, procedente de la librería de imágenes, una variable imagen o un archivo imagen:  
   * Si la imagen viene de la librería de imágenes, introduzca su número, precedido por un signo de interrogación (por ejemplo: "?250").  
   * Si viene de una variable imagen, introduzca el nombre de la variable.  
   * Si viene de un archivo almacenado en la carpeta de recursos de la base, introduzca una URL del tipo "#{carpeta/}nombreimagen" o "file: {carpeta/}nombreimagen".
* *iconPos* \= posición del icono en el encabezado. Dos valores son soportados:  
   * *iconPos* \= 1: Izquierda  
   * *iconPos* \= 2: Derecha

Esta funcionalidad es útil, por ejemplo, cuando se quiere trabajar con un icono personalizado.

#### Ejemplo 1 

La siguiente línea de código da formato al campo *\[Empleados\]Fecha Contratado* al quinto formato de fecha (Internal date long). 

```4d
 OBJECT SET FORMAT([Empleados]Fecha Contratado;Char(Internal date long))
```

#### Ejemplo 2 

Este ejemplo formatea una variable fecha y una variable hora utilizando [formatos personalizados](../Project/date-time-formats.md): 

```4d
 OBJECT SET FORMAT(*;"mydate";"(yyyy) MMM dd") // (2023) Dec 12
 OBJECT SET FORMAT(*;"mytime";"hh'h' mm'mn' ss'sec.'") // 15h 12mn 17sec.
```

#### Ejemplo 3 

El siguiente ejemplo cambia el formato de un campo *\[Empresa\]Codigo postal* de acuerdo con la longitud del valor en el campo: 

```4d
 If(Length([Empresa]Codigo postal)=9)
    OBJECT SET FORMAT([Empresa]Codigo postal;"#####–####")
 Else
    OBJECT SET FORMAT([Empresa]Codigo postal;"#####")
 End if
```

#### Ejemplo 4 

El siguiente ejemplo da formato al valor de un campo numérico dependiendo de si es positivo, negativo, o nulo:

```4d
 OBJECT SET FORMAT([Stats]Results;"### ##0.00;(### ##0.00);")
```

#### Ejemplo 5 

El siguiente ejemplo define el formato de un campo Booleano para mostrar Casado y Soltero, en lugar de los valores por defecto Sí y No: 

```4d
 OBJECT SET FORMAT([Empleado]Estado Civil;"Casado;Soltero")
```

#### Ejemplo 6 

Siempre que haya almacenado un archivo de imagen llamado "envelope\_open.png" en la carpeta Resources de la base, puede escribir:

```4d
 vIcon:="#envelope_open.png"
 vPos:="2" // Right
 OBJECT SET FORMAT(*;"Header1";vIcon+";"+vPos)
```

![](../assets/en/commands/pict2878245.en.png)

#### Ejemplo 7 

El siguiente ejemplo define el formato de un campo booleano para mostrar una casilla de selección llamada “Clasificado”: 

```4d
 OBJECT SET FORMAT([Carpeta]Clasificación;"Clasificado")
```

#### Ejemplo 8 

Usted tiene una tabla de miniaturas que contiene 1 línea y 4 columnas, destinada a mostrar un botón imagen (“activa por defecto”, “al hacer clic en el botón”, “al pasar el cursor” e “inactivo”). Usted quiere asociar las opciones Cambiar al pasar el cursor encima, Volver al soltar el clic y Última imagen si desactivado: 

```4d
 OBJECT SET FORMAT(*;"BotonImagen";"4;1;?15000;176")
```

#### Ejemplo 9 

Pase un termómetro a modo "Barber shop" 

```4d
 OBJECT SET FORMAT($Mitermo;";;;;128")
 $Mitermo :=1 //Iniciar la animación
```

#### Ver también 

  
[GET SYSTEM FORMAT](get-system-format.md)  
[OBJECT Get format](object-get-format.md)  
[OBJECT SET FILTER](object-set-filter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 236 |
| Hilo seguro | &cross; |



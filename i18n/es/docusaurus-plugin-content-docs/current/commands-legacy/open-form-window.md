---
id: open-form-window
title: Open form window
slug: /commands/open-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Open form window.Syntax-->**Open form window** ( {*tabla* ;} *nomForm* {; *tipo* {; *posH* {; *posV* {; *}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open form window.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del formulario o tabla por defecto, si se omite |
| nomForm | Text, Object | &#8594;  | Nombre del formulario |
| tipo | Integer | &#8594;  | Tipo de la ventana |
| posH | Integer | &#8594;  | Posición horizontal de la ventana |
| posV | Integer | &#8594;  | Posición vertical de la ventana |
| * | Operador | &#8594;  | Conservar la posición actual y el tamaño de la ventana |
| Resultado | Integer | &#8592; | Número de referencia de la ventana |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Open form window.Summary-->El comando Open form window abre una nueva ventana utilizando las propiedades de tamaño y de redimensionamiento del formulario *nomForm*.<!-- END REF-->

El formulario *nomForm* no se muestra en la ventana. Si quiere mostrar el formulario, tiene que llamar un comando que cargue un formulario (por ejemplo [ADD RECORD](add-record.md)).

A diferencia del comando [Open window](open-window.md), ningún método está asociado a la casilla de cierre de la ventana. Al hacer clic en esta casilla se cancela y cierra la ventana, excepto si el evento de formulario On Close Box ha sido activado para el formulario. En este caso, el código asociado con este evento se ejecutará.

Si el formulario *nomForm* es redimensionable, la ventana abierta tendrá una casilla de zoom como también una casilla de redimensionamiento.

**Nota:** para conocer las principales propiedades de un formulario, utilice el comando [FORM GET PROPERTIES](form-get-properties.md).

En el parámetro *nomForm*, puede pasar:

* el nombre de un formulario (formulario proyecto o tabla) a utilizar;
* la ruta (en sintaxis POSIX) a un archivo .json válido que contiene una descripción del formulario a usar. Ver *Ruta de archivo del formulario*;
* un objeto que contiene una descripción del formulario a utilizar.

El parámetro opcional *tipo* permite especificar un tipo de ventana. Este parámetro debe contener una de las siguientes constantes predefinidas del tema *Abrir ventana formulario*):

| Constante                        | Tipo         | Valor  |
| -------------------------------- | ------------ | ------ |
| Controller form window           | Entero largo | 133056 |
| Form has full screen mode Mac    | Entero largo | 65536  |
| Form has no menu bar             | Entero largo | 2048   |
| Modal form dialog box            | Entero largo | 1      |
| Movable form dialog box          | Entero largo | 5      |
| Movable form dialog box no title | Entero largo | 524293 |
| Palette form window              | Entero largo | 1984   |
| Plain form window                | Entero largo | 8      |
| Plain form window no title       | Entero largo | 524296 |
| Pop up form window               | Entero largo | 32     |
| Sheet form window                | Entero largo | 33     |
| Toolbar form window              | Entero largo | 35     |

Los tipos de ventanas se detallan en la sección *Tipos de ventanas*.

**Nota:** las constantes Form has full screen mode Mac y Form has no menu bar deben añadirse a una de las otras constantes de tipo

De forma predeterminada, si no se pasa el parámetro *tipo*, se abre una ventana de tipo Plain form window.

**Caja de cerrar**  
Las ventanas de tipo Movable form dialog box, Plain form window y Palette form window tienen una caja de cierre. No se asocia ningún método a la caja de cierre de la ventana. Al hacer clic en este caja de cierre cancela y cierra la ventana, excepto si se ha activado el evento de formulario On Close Box para el formulario. En este caso, se ejecutará el código asociado a este evento.

**Control de tamaño** 
Si las propiedades de "tamaño de ventana" del formulario *nomForm* no están definidas como "fixed", la ventana abierta puede ser redimensionada por el usuario. Una caja de zoom puede estar disponible, dependiendo del tipo de ventana. Si la propiedad **Ancho fijo** y/o **Altura fija** está marcada en las propiedades del formulario, la ventana no será redimensionable.

**Nota:** algunos atributos (caja de control de tamaño, caja cerrar ...) de la ventana creada dependen de las especificaciones de interfaz del sistema operativo para el *tipo* elegido. Por lo tanto, es posible obtener diferentes resultados dependiendo de la plataforma utilizada.

El parámetro opcional *posH* permite definir la posición horizontal de la ventana. Puede pasar una posición definida en píxeles o una de las siguientes constantes predefinidas ubicadas en el tema *Abrir ventana formulario*:

| Constante             | Tipo         | Valor  |
| --------------------- | ------------ | ------ |
| Horizontally centered | Entero largo | 65536  |
| On the left           | Entero largo | 131072 |
| On the right          | Entero largo | 196608 |

El parámetro opcional *posV* permite definir la posición vertical de la ventana. Puede pasar una posición definida en píxeles o una de las siguientes constantes predefinidas ubicadas en el tema *Abrir ventana formulario*:

| Constante           | Tipo         | Valor  |
| ------------------- | ------------ | ------ |
| At the bottom       | Entero largo | 393216 |
| At the top          | Entero largo | 327680 |
| Vertically centered | Entero largo | 262144 |

Estos parámetros se expresan con relación a la esquina superior izquierda del área de contenido de la ventana de la aplicación (modo Windows MDI) o de la pantalla principal (macOS y modo Windows SDI). Tienen en cuenta la presencia de la barra de herramientas y la barra de menús.

Si pasa el parámetro opcional *\**, la posición y el tamaño actual de la ventana se memorizan al cerrar. Cuando la ventana se abre nuevamente, se respetan su posición y tamaño anterior. En este caso, los parámetros *posV* y *PosH* sólo se utilizan cuando se abre la ventana por primera vez.

#### Ejemplo 1 

La siguiente instrucción abre una ventana estándar o una casilla cerrar y se ajusta automáticamente al tamaño del formulario de "Entrada". Como el formulario ha sido definido como redimensionables, la ventana tiene una casilla de redimensionamiento y una casilla de zoom:

```4d
 $winRef :=Open form window([Table1];"Enter")
```

#### Ejemplo 2 

La siguiente instrucción abre una paleta flotante en la parte superior izquierda de la pantalla basada en un formulario de proyecto llamado "Herramientas". Esta paleta utiliza la última posición en cada nueva apertura:

```4d
 $winRef :=Open form window("Herramientas";Palette form window;On the left;At the top;*)
```

#### Ejemplo 3 

Este código se debe llamar en macOS mientras se muestra una ventana documento, por ejemplo desde un botón de formulario, para mostrar una ventana hoja:

```4d
 $myWin:=Open form window("sheet form";Sheet form window)
  // Por el momento, la ventana se crea pero permanece oculta
 DIALOG([aTable];"dialForm")
  //El evento On Load se genera luego se muestra la ventana hoja; "Cae"
  //desde la parte inferior de la barra de título
```

#### Ejemplo 4 

El siguiente ejemplo usa la ruta a un formulario .json para mostrar los registros en una lista de empleados:

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

que devuelve:

![](../assets/en/commands/pict3687439.en.png)

#### Ver también 

[FORM GET PROPERTIES](form-get-properties.md)  
[Open window](open-window.md)  
*Tipos de ventanas*  
*Tipos de ventanas (Compatibilidad)*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 675 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



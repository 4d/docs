---
id: object-duplicate
title: OBJECT DUPLICATE
slug: /commands/object-duplicate
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT DUPLICATE.Syntax-->**OBJECT DUPLICATE** ( {* ;} *objeto* {; *nuevoNom* {; *nuevaVAr* {; *relacionadoA* {; *movH* {; *moveV* {; *redimH* {; *redimV*}}}}}}} {; *} )<!-- END REF-->
<!--REF #_command_.OBJECT DUPLICATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o variable o campo (si se omite *) |
| nuevoNom | Text | &#8594;  | Nombre del nuevo objeto |
| nuevaVAr | Pointer | &#8594;  | Puntero a la variable del nuevo objeto |
| relacionadoA | Text | &#8594;  | Nombre del objeto editable (o del botón de radio) anterior |
| movH | Integer | &#8594;  | Desplazamiento horizontal del nuevo objeto (>0 = a la derecha, <0 =a la izquierda) |
| moveV | Integer | &#8594;  | Desplazamiento vertical del nuevo objeto (>0 = hacia abajo, <0= hacia arriba) |
| redimH | Integer | &#8594;  | Valor de redimensionamiento horizontal del nuevo objeto |
| redimV | Integer | &#8594;  | Valor de redimensionamiento vertical del nuevo objeto |
| * | Operador | &#8594;  | Si se especifica = coordenadas absolutas Si se omite = coordenadas relativas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT DUPLICATE.Summary-->El comando OBJECT DUPLICATE permite crear una copia del objeto designado por el parámetro *objeto* en el contexto del formulario que está siendo ejecutado (modo Aplicación).<!-- END REF--> El formulario de origen, generado en modo Diseño, no se modifica. 

Por defecto, todas las opciones definidas en la lista de propiedades para el objeto fuente se aplican a la copia (tamaño, opciones de redimensionamiento, color, etc.), incluyendo el método de objeto asociado. Sin embargo, se deben tener en cuenta las siguientes excepciones:

* Botón por defecto: sólo puede haber un botón por defecto en un formulario. Al duplicar un botón con la propiedad "Botón por defecto", esta propiedad se asigna a la copia y se suprime del objeto de origen.
* Equivalentes de teclado: el atajo de teclado asociado a un objeto fuente no se duplica. Esta propiedad se deja en blanco en la copia.
* Nombres de objetos: no puede haber varios objetos con el mismo nombre en un formulario. Si no pasa el parámetro *nuevoNom*, el nombre del objeto fuente automáticamente se incrementa en el nuevo objeto (ver a continuación).

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, pase una referencia del campo o variable (campos o variables objeto únicamente) en lugar de una cadena.  
Si pasa una referencia de campo o variable y si el formulario contiene varios objetos que utilizan la misma referencia, la primera ocurrencia encontrada se utilizará. En este caso, para evitar cualquier ambigüedad, se recomienda trabajar con nombres de objetos únicos.

Pase en el parámetro *nuevoNom* el nombre asignado a la copia del objeto. Este nombre debe ser conforme con la reglas de nombre de objetos y ser único en el formulario. Si no es válido o ya está siendo utilizado por otro objeto, el comando no hace nada y la variable *OK* devuelve 0\.   
Si omite este parámetro o pasa una cadena vacía, el nuevo nombre se genera automáticamente al incrementar el nombre del objeto fuente (si este nombre no se utiliza). Por ejemplo:  

| **Nombre de origen** | **Nombre de la copia**       |
| -------------------- | ---------------------------- |
| Botón                | Botón1                       |
| Botón20              | Botón21                      |
| Botón21              | Botón23 si Botón22 ya existe |

Pase en *nuevaVar* un puntero a la variable a asociar al nuevo objeto. En principio, debe estar dirigido a una variable del mismo tipo que el del objeto fuente pero en algunos casos es posible cambiar el tipo. El comando ofrece funciones automáticas para facilitar la escritura de código genérico:

* Por lo general, se puede cambiar el tipo a todas las variables "editables"; por ejemplo, un objeto que muestra una Fecha o un Entero largo puede duplicarse y utilizarse con una variable de tipo Texto. Las propiedades compatibles se conservan. El comando permite igualmente cambiar el tipo entre objetos Texto y objetos Imagen. Note que un objeto texto duplicado y asociado a una variable o campo Booleano aparecerá automáticamente como casilla de selección.
* Por lo general es posible transformar dinámicamente un variable en campo y viceversa.  
Por otra parte, los objetos gráficos (botones, casillas de selección, etc.) no pueden transformarse en otros tipos de controles.

Si el tipo de la variable no es compatible con el objeto, el comando no hace nada y la variable *OK* toma el valor 0\. Si omite este parámetro, la variable es creada dinámicamente por 4D (ver el párrafo “Variables dinámicas” en la sección ). Si duplica un objeto estático (líneas, rectángulo, imagen estática, etc.), este parámetro se ignora. Pase un puntero Nil (->\[\]) si quiere poder utilizar los otros parámetros. 

Utilice el parámetro *relacionadoA* en dos casos:

* actualizar el orden de entrada: en este caso, en *relacionadoA*, pase el nombre del objeto editable ubicado justo antes del objeto duplicado. Si quiere que el nuevo objeto se convierta en el primer objeto en el orden de entrada de la página, pase la constante Object First in entry order (ver el comando [OBJECT Get pointer](object-get-pointer.md)).
* asociación con un grupo de botones radio: los botones radio funcionan de manera coordinada cuando están agrupados. Si el objeto duplicado es un botón de radio, en *relacionadoA* pase el nombre de un botón radio del grupo al cual asociar el nuevo objeto.

Si omite este parámetro o pasa una cadena vacía, el nuevo objeto se convierte en el último objeto editable de la página del formulario.

El nuevo objeto puede moverse y redimensionarse por medio de los parámetros *moveH*, *moveV*, *redimH* y *redimV*. Como para el comando [OBJECT MOVE](object-move.md), el sentido de desplazamiento o redimensionamiento es definido por el signo de los valores pasados en los parámetros *moveH* y *moveV*:
* Si el valor es positivo, el desplazamiento o redimensionamiento se efectúa respectivamente hacia la derecha o hacia abajo.
* Si el valor es negativo, el movimiento o redimensionamiento se efectúa respectivamente hacia la izquierda o hacia arriba.

Por defecto, los valores de *moveH*, *moveV*, *redimH* y *redimV* modifican las coordenadas del objeto en relación con su posición anterior. Si quiere que estos parámetros especifiquen coordenadas absolutas, pase el parámetro opcional *\**.  
Si omite estos parámetros, el nuevo objeto se superpone al objeto de origen. 

Este comando debe utilizarse en el contexto de la visualización de un formulario. Por lo general se llama en el evento On Load del formulario o luego de una acción usuario (evento On Clicked). 

**Nota:** si el evento On Load está asociado al objeto de origen, se genera para el objeto duplicado al ejecutar el comando. Esto permite, por ejemplo, inicializar el valor del objeto. 

Por razones técnicas y lógicas, **OBJECT DUPLICATE** no puede llamarse dentro de ciertos eventos de formulario, en particular:

* Evento On Load generado en un método de objeto
* Evento On Unload.

Cuando el comando se llama en un contexto no soportado, el objeto no se duplica y la variable *OK* toma el valor 0\. Si se llama en un contexto de impresión, el error -10601 se genera también.  
  
Si el comando se ejecutó correctamente, la variable *OK* toma el valor 1\. De lo contrario toma el valor 0.

#### Ejemplo 1 

Creación de un nuevo botón llamado "BotonCancel" sobre el objeto existente "BotónOK" y asociación con la variable *vCancel*:

```4d
 OBJECT DUPLICATE(*;"BotonOK";"BotonCancel";vCancel)
```

#### Ejemplo 2 

Creación de un nuevo botón radio "bRadio6" basado en el botón radio existente "bRadio5". Este botón se asociará a la variable <>r6, integrada con el grupo del botón "bRadio5" y ubicado 20 píxeles arriba:

```4d
 OBJECT DUPLICATE(*;"bRadio5";"bRadio6";<>r6;"bRadio5";0;20)
```

#### Ver también 

[OBJECT Get pointer](object-get-pointer.md)  
[OBJECT MOVE](object-move.md)  
*Objetos de formulario (Acceso)*  
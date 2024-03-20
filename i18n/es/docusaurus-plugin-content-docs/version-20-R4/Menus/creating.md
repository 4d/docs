---
id: creating
title: Creación de menús y barras de menú
---

Puede crear menús y barras de menús:

- utilizando el editor de menús de la ventana de la caja de herramientas 4D. En este caso, los menús y las barras de menú se almacenan en la estructura de la aplicación.
- dinámicamente, utilizando los comandos del lenguaje del tema "Menús". En este caso, los menús y las barras de menús no se almacenan, sólo existen en la memoria.

Puede combinar ambas funcionalidades y utilizar los menús creados en la estructura como plantillas para definir los menús en la memoria.


## Barra de menús por defecto

Una aplicación personalizada debe contener al menos una barra de menús con un menú. Una aplicación personalizada debe contener al menos una barra de menús con un menú. La barra de menús por defecto incluye menús estándar y un comando para volver al modo Diseño.

Esto permite al usuario acceder al modo Aplicación tan pronto como se crea el proyecto. La barra de menús nº 1 se llama automáticamente cuando se elige el comando **Test Application** en el menú **Ejecución**.

La barra de menús por defecto incluye tres menús:

- **Archivo**: sólo incluye el comando **Salir**. La acción estándar *Salir* está asociada al comando, que hace que la aplicación salga.
- **Editar**: menú estándar y totalmente editable. Las funciones de edición, como copiar, pegar, etc., se definen mediante acciones estándar.
- **Modo**: contiene, por defecto, el comando **Volver al modo Diseño**, que se utiliza para salir del modo Aplicación.
> > Menu items appear *in italics* because they consist of references and not hard-coded text. Consulte [Propiedad Título](properties.md#title).

Puede modificar esta barra de menú como desee o crear otras adicionales.


## Crear menús

### Utilizando el editor de menús

1. Seleccione el elemento que desea crear y haga clic en el botón añadir ![](../assets/en/Menus/PlussNew.png)debajo de la zona de la barra de menús. O Elija **Crear una nueva barra de menús** o **Crear un nuevo menú** en el menú contextual de la lista o en el menú de opciones situado debajo de la lista. Si ha creado una barra de menús, aparece una nueva barra en la lista que contiene los menús por defecto (Archivo y Edición).
2. (opcional) Haga doble clic en el nombre de la barra de menú/menú para pasar al modo de edición e introducir un nombre personalizado. OR Enter the custom name in the "Title" area. Los nombres de las barras de menú deben ser únicos. Pueden contener hasta 31 caracteres. Puede introducir el nombre como "hard coded" o introducir una referencia (ver [información sobre la propiedad Title](properties.md#title)).

### Utilizando el lenguaje 4D
Utilice el comando `Create menu` para crear una nueva barra de menú o referencia de menú (*MenuRef*) en la memoria.

Cuando los menús se manejan mediante referencias *MenuRef*, no hay diferencia per se entre un menú y una barra de menús. En ambos casos, consiste en una lista de elementos. Sólo difiere su uso. En el caso de una barra de menús, cada elemento corresponde a un menú que a su vez está compuesto por elementos.

`Create menu` puede crear menús vacíos (para llenar utilizando `APPEND MENU ITEM` o `INSERT MENU ITEM`) o por menús construidos sobre menús diseñados en el editor de menús.

## Añadir líneas
Para cada uno de los menús, debe añadir los comandos que aparecen cuando el menú se despliega. Puede insertar elementos que se asociarán a los métodos o a las acciones estándar, o adjuntar otros menús (submenús).

### Utilizando el editor de menús
Para añadir un elemento de menú:

1. En la lista de menús fuente, seleccione el menú al que desea añadir un comando. Si el menú ya tiene comandos, se mostrarán en la lista central. Si desea insertar el nuevo comando, seleccione el comando que desea que aparezca sobre él. Todavía es posible reorganizar el menú posteriormente utilizando la función de arrastrar y soltar.
2. Elija **Añadir un elemento al menú "NombreDelMenú"** en el menú de opciones del editor o desde el menú contextual (clic derecho en la lista central). OR Click on the add ![](../assets/en/Menus/PlussNew.png) button located below the central list. 4D añade un nuevo elemento con el nombre por defecto "Elemento X" donde X es el número de elementos ya creados.
3. Haga doble clic en el nombre del comando para pasar al modo edición e introducir un nombre personalizado. OR Enter the custom name in the "Title" area. Puede contener hasta 31 caracteres. Puede introducir el nombre como "codificado" o introducir una referencia (ver más abajo).


### Utilizando el lenguaje 4D

Utilice `INSERT MENU ITEM` o `APPEND MENU ITEM` para insertar o añadir elementos de menú en referencias de menú existentes.


## Eliminar menús y elementos de menús

### Utilizando el editor de menús
Puede eliminar una barra de menús, un menú o un elemento de menú en el editor de menús en cualquier momento. Tenga en cuenta que cada menú o barra de menús sólo tiene una referencia. Cuando un menú está unido a diferentes barras o a diferentes menús, cualquier modificación o supresión realizada en el menú se lleva a cabo inmediatamente en todas las demás apariciones de este menú. La eliminación de un menú sólo borrará una referencia. Cuando se borra la última referencia de un menú, 4D muestra una alerta.

Para eliminar una barra de menús, un menú o un elemento de menú:

- Seleccione el elemento a eliminar y haga clic en el botón de eliminación ![](../assets/en/Menus/MinussNew.png) situado debajo de la lista.
- o bien, utilice el comando apropiado **Eliminar...** del menú contextual o del menú de opciones del editor.

> No es posible eliminar Menu Bar #1.


### Utilizando el lenguaje 4D

Utilice `DELETE MENU ITEM` para eliminar un elemento de una referencia de menú. Utilice `RELEASE MENU` para descargar la referencia del menú de la memoria.


## Adjuntar los menús

Una vez creado un menú, puede adjuntarlo a uno o a varios otros menús (submenús) o barras de menús.

Los submenús pueden utilizarse para agrupar funciones organizadas por temas dentro del mismo menú. Los submenús y sus elementos pueden tener los mismos atributos que los propios menús (acciones, métodos, accesos directos, iconos, etc.). Los elementos del submenú conservan sus características y propiedades originales y el funcionamiento del submenú es idéntico al de un menú estándar.

Puede crear submenús de submenús hasta una profundidad prácticamente ilimitada. Sin embargo, tenga en cuenta que, por razones de ergonomía de la interfaz, en general no se recomienda superar los dos niveles de submenús.

En tiempo de ejecución, si un menú adjunto se modifica por programación, todas las demás instancias del menú reflejarán estos cambios.


### Utilizando el editor de menús

Un menú puede estar unido a una barra de menús o a otro menú.

- To attach a menu to a menu bar: right-click on the menu bar and select **Attach a menu to the menu bar "bar name" >**, then choose the menu to be attached to the menu bar: ![](../assets/en/Menus/attach.png) You can also select a menu bar then click on the options button found below the list.
- To attach a menu to another menu: select the menu in the left-hand area, then right-click on the menu item and select **Attach a sub-menu to the item "item name">**, then choose the menu you want to use as sub-menu:  
  ![](../assets/en/Menus/attach2.png) You can also select a menu item then click on the options button found below the list. El menú que se adjunta se convierte así en un submenú. El título del elemento se mantiene (el nombre original del submenú se ignora), pero este título puede modificarse.

#### Quitar los menús

Puede separar un menú de una barra de menús o un submenú de un menú en cualquier momento. El menú separado ya no está disponible en la barra de menús o en el submenú, según el caso, pero sigue estando presente en la lista de menús.

Para desvincular un menú, haga clic con el botón derecho en el menú o submenú que desee desvincular en la lista central y, a continuación, elija la opción **Desvincular el menú(...)** o **Desvincular el submenú(...)**

### Utilizando el lenguaje 4D

Como no hay diferencia entre los menús y las barras de menús en el lenguaje de 4D, adjuntar menús o submenús se hace de la misma manera: utilice el parámetro *submenú* del comando `APPEND MENU ITEM` para adjuntar un menú a una barra de menús o a un menú.  

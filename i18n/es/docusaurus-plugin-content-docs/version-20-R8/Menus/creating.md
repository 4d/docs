---
id: creating
title: Creación de menús y barras de menús
---

Puede crear menús y barras de menús:

- utilizando el editor de menús de la ventana de la caja de herramientas 4D. En este caso, los menús y las barras de menú se almacenan en la estructura de la aplicación.
- dinámicamente, utilizando los comandos del lenguaje del tema "Menús". En este caso, los menús y las barras de menús no se almacenan, sólo existen en la memoria.

Puede combinar ambas funcionalidades y utilizar los menús creados en la estructura como plantillas para definir los menús en la memoria.

## Barra de menús por defecto

Una aplicación personalizada debe contener al menos una barra de menús con un menú. Una aplicación personalizada debe contener al menos una barra de menús con un menú. La barra de menús por defecto incluye menús estándar y un comando para volver al modo Diseño.

Esto permite al usuario acceder al modo Aplicación tan pronto como se crea el proyecto. La barra de menús nº 1 se llama automáticamente cuando se elige el comando **Test Application** en el menú **Ejecución**.

La barra de menús por defecto incluye tres menús:

- **Archivo**: sólo incluye el comando **Salir**. La acción estándar _Salir_ está asociada al comando, que hace que la aplicación salga.
- **Editar**: menú estándar y totalmente editable. Las funciones de edición, como copiar, pegar, etc., se definen mediante acciones estándar.
- **Modo**: contiene, por defecto, el comando **Volver al modo Diseño**, que se utiliza para salir del modo Aplicación.

> > Menu items appear _in italics_ because they consist of references and not hard-coded text. Consulte [Propiedad Título](properties.md#title).

Puede modificar esta barra de menú como desee o crear otras adicionales.

## Crear menús

### Utilizando el editor de menús

1. Seleccione el elemento que desea crear y haga clic en el botón Añadir ![](../assets/en/Menus/PlussNew.png) debajo del área de la barra de menús.
   O
   Elija **Crear una nueva barra de menús** o **Crear un nuevo menú** en el menú contextual de la lista o en el menú de opciones situado debajo de la lista.
   Si ha creado una barra de menús, aparece una nueva barra en la lista que contiene los menús por defecto (Archivo y Edición).
2. (opcional) Haga doble clic en el nombre de la barra de menú/menú para pasar al modo de edición e introducir un nombre personalizado.
   OR Enter the custom name in the "Title" area.
   Los nombres de las barras de menú deben ser únicos. Pueden contener hasta 31 caracteres. Puede introducir el nombre como "hard coded" o introducir una referencia (ver [información sobre la propiedad Title](properties.md#title)).

### Utilizando el lenguaje 4D

Utilice el comando `Create menu` para crear una nueva barra de menú o referencia de menú (_MenuRef_) en la memoria.

Cuando los menús se manejan mediante referencias _MenuRef_, no hay diferencia per se entre un menú y una barra de menús. En ambos casos, consiste en una lista de elementos. Sólo difiere su uso. En el caso de una barra de menús, cada elemento corresponde a un menú que a su vez está compuesto por elementos.

`Create menu` puede crear menús vacíos (para llenar utilizando `APPEND MENU ITEM` o `INSERT MENU ITEM`) o por menús construidos sobre menús diseñados en el editor de menús.

## Añadir líneas

Para cada uno de los menús, debe añadir los comandos que aparecen cuando el menú se despliega. Puede insertar elementos que se asociarán a los métodos o a las acciones estándar, o adjuntar otros menús (submenús).

### Utilizando el editor de menús

Para añadir un elemento de menú:

1. En la lista de menús fuente, seleccione el menú al que desea añadir un comando.
   Si el menú ya tiene comandos, se mostrarán en la lista central. Si desea insertar el nuevo comando, seleccione el comando que desea que aparezca sobre él. Todavía es posible reorganizar el menú posteriormente utilizando la función de arrastrar y soltar.
2. Elija **Añadir un elemento al menú "NombreDelMenú"** en el menú de opciones del editor o desde el menú contextual (clic derecho en la lista central).
   O
   Haga clic en el botón añadir ![](../assets/en/Menus/PlussNew.png) ubicado debajo de la lista central.
   4D añade un nuevo elemento con el nombre por defecto "Elemento X" donde X es el número de elementos ya creados.
3. Haga doble clic en el nombre del comando para pasar al modo edición e introducir un nombre personalizado.
   OR Enter the custom name in the "Title" area. Puede contener hasta 31 caracteres. Puede introducir el nombre como "codificado" o introducir una referencia (ver más abajo).

### Utilizando el lenguaje 4D

Utilice `INSERT MENU ITEM` o `APPEND MENU ITEM` para insertar o añadir elementos de menú en referencias de menú existentes.

## Eliminar menús y elementos de menús

### Utilizando el editor de menús

Puede eliminar una barra de menús, un menú o un elemento de menú en el editor de menús en cualquier momento. Tenga en cuenta que cada menú o barra de menús sólo tiene una referencia. Cuando un menú está unido a diferentes barras o a diferentes menús, cualquier modificación o supresión realizada en el menú se lleva a cabo inmediatamente en todas las demás apariciones de este menú. La eliminación de un menú sólo borrará una referencia. Cuando se borra la última referencia de un menú, 4D muestra una alerta.

Para eliminar una barra de menús, un menú o un elemento de menú:

- Seleccione el elemento que desea eliminar y haga clic en el botón ![](../assets/en/Menus/MinussNew.png) situado debajo de la lista.
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

- Para adjuntar un menú a una barra de menú: haga clic derecho en la barra de menú y seleccione **Adjuntar un menú a la barra de menú "nombre de barra" >**, luego elija el menú a adjuntar a la barra de menú:
  ! ](. /assets/en/Menus/attach.png)
  También puede seleccionar una barra de menú y luego hacer clic en el botón de opciones que se encuentra debajo de la lista.
- Para adjuntar un menú a otro menú: seleccione el menú en el área de la izquierda, luego haga clic derecho en el elemento de menú y seleccione **Adjuntar un submenú al elemento "nombre del elemento">**, luego elija el menú que desea utilizar como submenú:\
  ! ](. /assets/en/Menus/attach2.png)
  También puede seleccionar un elemento de menú y luego hacer clic en el botón de opciones que se encuentra debajo de la lista.
  El menú que se adjunta se convierte así en un submenú. El título del elemento se mantiene (el nombre original del submenú se ignora), pero este título puede modificarse.

#### Quitar los menús

Puede separar un menú de una barra de menús o un submenú de un menú en cualquier momento. El menú separado ya no está disponible en la barra de menús o en el submenú, según el caso, pero sigue estando presente en la lista de menús.

Para desvincular un menú, haga clic con el botón derecho en el menú o submenú que desee desvincular en la lista central y, a continuación, elija la opción **Desvincular el menú(...)** o **Desvincular el submenú(...)**

### Utilizando el lenguaje 4D

Como no hay diferencia entre los menús y las barras de menús en el lenguaje de 4D, adjuntar menús o submenús se hace de la misma manera: utilice el parámetro _submenú_ del comando `APPEND MENU ITEM` para adjuntar un menú a una barra de menús o a un menú.

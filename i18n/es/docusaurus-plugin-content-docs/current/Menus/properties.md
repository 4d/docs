---
id: properties
title: Propiedades de los menús
---

Puede definir varias propiedades para los elementos del menú, como las acción, el estilo de la fuente, las líneas de separación, los atajos de teclado o los iconos.

## Título

La propiedad **Title** contiene la etiqueta de un menú o elemento de menú tal y como se mostrará en la interfaz de la aplicación.

En el editor de menús, puede introducir directamente la etiqueta como "fijo". También puede introducir una referencia para una variable o un elemento XLIFF, lo que facilitará el mantenimiento y la traducción de las aplicaciones. Puede utilizar los siguientes tipos de referencias:

- Una referencia a un recurso XLIFF del tipo :xliff:MyLabel. Para más información sobre las referencias XLIFF, consulte la sección _Arquitectura XLIFF_ en _Referencia Diseño 4D_.
- Un nombre de variable interproceso seguido de un número, por ejemplo:
  `:<>vlang,3`. Si se cambia el contenido de esta variable, se modificará la etiqueta del menú cuando se muestre. En este caso, la etiqueta llamará a un recurso XLIFF. El valor contenido en la variable `<>vlang` corresponde al atributo _id_ del elemento _group_. El segundo valor (3 en este ejemplo) designa el atributo _id_ del elemento _trans-unit_.

Utilizando el lenguaje 4D, se define la propiedad del título a través del parámetro _itemText_ de los comandos `APPEND MENU ITEM`, `INSERT MENU ITEM`, y `SET MENU ITEM`.

### Caracteres de control

Puede definir algunas propiedades de los comandos de menú utilizando caracteres de control (metacaracteres) directamente en las etiquetas de los comandos de menú. Por ejemplo, puede asignar el atajo de teclado Ctrl+G (Windows) o Comando+G (macOS) para un comando de menú colocando los caracteres "/G" en la etiqueta del elemento de menú.

Los caracteres de control no aparecen en las etiquetas de los comandos del menú. Por lo tanto, hay que evitar su uso para no tener efectos indeseables. Los caracteres de control son los siguientes:

| Caracter                    | Descripción                   | Utilización                                                                                                                          |
| --------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| (        | paréntesis de apertura        | Desactivar la línea                                                                                                                  |
| <B | menor que B                   | Negrita                                                                                                                              |
| <I | menor que I                   | Itálica                                                                                                                              |
| <U | menor que U                   | Subrayado                                                                                                                            |
| !+caracter                  | signo de exclamación+caracter | Caracter de adición como marca de verificación (macOS); añadir marca de verificación (Windows) |
| /+caracter                  | barra+caracter                | Añadir un carácter como atajo                                                                                                        |

## Parámetros

Puede asociar un parámetro personalizado a cada elemento del menú. Un parámetro de elemento de menú es una cadena de caracteres cuyo contenido puede elegirse libremente. Puede definirse en el editor de menús, o a través del comando `SET MENU ITEM PARAMETER`.

Los parámetros de elementos de menú son útiles con la gestión programada de los menús, en particular cuando se utilizan los comandos `Dynamic pop up menu`, `Get menu item parameter` y `Get selected menu item parameter`.

## Acción

Cada comando de menú puede tener un método proyecto o una acción estándar adjunta. Cuando se elige el comando del menú, 4D ejecuta la acción estándar o el método proyecto asociado. Por ejemplo, un comando de menú **Informe mensual** puede llamar a un método proyecto que prepare un informe mensual a partir de una tabla que contenga datos financieros. El comando del menú **Cortar** suele llamar a la acción estándar `cut` para mover la selección al portapapeles y borrarla de la ventana en primer plano.

Si no asigna un método o una acción estándar a un comando de menú, la elección de ese comando de menú hace que 4D salga del entorno de Aplicación y pase al entorno de Diseño. Si sólo está disponible el entorno de la Aplicación, esto significa salir al Escritorio.

Las acciones estándar se pueden utilizar para llevar a cabo diversas operaciones actuales vinculadas a las funciones del sistema (copiar, salir, etc.) o a las de la base de datos (añadir registro, seleccionar todo, etc.).

Puede asignar al mismo tiempo una acción estándar y un método proyecto a un comando de menú. En este caso, la acción estándar no se ejecuta nunca; sin embargo, 4D utiliza esta acción para habilitar/deshabilitar el comando de menú según el contexto actual y para asociar una operación específica según la plataforma. Cuando se desactiva un comando de menú, no se puede ejecutar el método proyecto asociado.

La elección entre asociar una acción estándar o un método proyecto a un comando de menú depende del tipo de resultado deseado. En principio, es preferible elegir una acción estándar siempre que sea posible, ya que implementan mecanismos optimizados, más concretamente la activación/desactivación en función del contexto.

### Asociar un método proyecto o una acción estándar

Puede asignar un método proyecto y/o una acción estándar a un comando de menú seleccionado en el editor de menú:

- **Nombre del método**: seleccione un nombre de método proyecto existente en el combo box. Si el método proyecto no existe, introduzca su nombre en el combo "Nombre del método" y haga clic en el botón [...] button. 4D muestra un diálogo de creación de método proyecto que se utiliza para acceder al editor de código.
- **Acción estándar asociada**: elija o escriba la acción que desea asignar en el combo box "Acción estándar asociada". Puede introducir toda acción soportada y (opcionalmente) el parámetro que desee en el área. Para obtener una lista completa de acciones estándar, consulte la sección **Acciones estándar** en el _Modo Diseño_.
  **Nota para macOS:** en macOS, los comandos de menús personalizados asociados a la acción _Salir_ se colocan automáticamente en el menú de la aplicación, conforme a los estándares de interfaz de la plataforma.

Utilizando el lenguaje 4D, puedes asociar un método proyecto utilizando el comando `SET MENU ITEM METHOD`, y una acción estándar utilizando el comando `SET MENU ITEM PROPERTY`.

### Iniciar un proceso

La opción **Iniciar un nuevo proceso** está disponible para los comandos de menú asociados a los métodos. Puede definirse a través de una casilla de selección en el editor de menús, o a través del parámetro _propiedad_ del comando `SET MENU ITEM PROPERTY`.

Cuando la opción **Iniciar un nuevo proceso** está activada, se crea un nuevo proceso cuando se elige el comando de menú.
Normalmente, un método asociado a un comando de menú se ejecuta en el proceso actual a menos que llame explícitamente a un nuevo proceso en su código. La opción **Iniciar un nuevo proceso** facilita el lanzamiento de un nuevo proceso. Si se activa, 4D creará un nuevo proceso cuando se elija el comando del menú.

En la lista de procesos, 4D asigna al nuevo proceso un nombre por defecto utilizando el formato "ML_NúmeroProceso".
Los nombres de los procesos iniciados desde un menú se crean combinando el prefijo "ML_" con el número del proceso.

### Ejecutar sin validar

La opción **Ejecutar sin validar** está disponible sólo para los comandos de menú asociados a acciones estándar en el editor de menús.

Cuando esta opción está marcada, 4D no activa la "validación" del campo donde se encuentra el cursor antes de ejecutar la acción asociada.
Esta opción está pensada principalmente para los comandos del menú **Edición**. Por defecto, 4D procesa y "valida" el contenido de un campo antes de ejecutar una acción estándar (a través de un comando de menú o un acceso directo), que tiene el efecto de generar un evento de formulario `On Data Change`. Esto puede interrumpir el funcionamiento de los comandos de tipo copiar o pegar, ya que cuando son llamados, el evento formulario `On Data Change` se genera inesperadamente. En este caso, es útil marcar la opción **Ejecutar sin validar**.

## Privilegios de acceso remoto

Esta opción del editor de menús permite definir un grupo para un comando de menú para que sólo los usuarios de ese grupo puedan utilizar el comando de menú desde una aplicación remota 4D (ver Usuarios y grupos).

## Opciones

### Líneas de separación

Los grupos de comandos de menús pueden estar divididos por una línea de separación. Esta convención es útil para agrupar los comandos de menú asociados por función.

![](../assets/en/Menus/separator.png)

Se añade una línea de separación mediante la creación de un comando de menú específico.

En el editor de menús, en lugar de introducir el texto del comando de menú en el área del título, basta con seleccionar la opción **Línea separadora**. En lugar de texto, aparece una línea en el área de la barra de menú actual. Cuando esta opción está marcada, las otras propiedades no tienen efecto.
**Nota:** en macOS, si utiliza el guión "-" como primer caracter de un elemento de menú, aparecerá como línea de separación.

En el lenguaje 4D, se inserta una línea de separación introduciendo `-` o `(-` como itemText para los comandos `APPEND MENU ITEM`, `INSERT MENU ITEM`, o `SET MENU ITEM`.

### Atajos de teclado

Puede añadir atajos de teclado a todo comando de menú. Si un comando de menú tiene uno de estos atajos de teclado, los usuarios lo verán junto al comando de menú. Por ejemplo, "Ctrl+C" (Windows) o "Comando+C" (macOS) aparece junto al comando de menú **Copiar** en el menú **Edición**.

También puede añadir la tecla **Mayús**, así como la tecla **Alt** (Windows) u **Opción** (macOS) al acceso directo asociado a un comando de menú. Esto multiplica el número de accesos directos que se pueden utilizar. Por lo tanto, se pueden definir los siguientes tipos de atajos de teclado:

- En Windows:
  - Ctrl+caracter
  - Ctrl+Mayús+letra
  - Ctrl+Alt+caracter
  - Ctrl+Mayús+Alt+letra

- En macOS:
  - Comando+letra
  - Comando+Mayús+letra
  - Comando+Opción+letra
  - Comando+Mayús+Opción+letra

> Le recomendamos que mantenga los atajos de teclado por defecto que están asociados a las acciones estándar.

Puede utilizar cualquier tecla alfanumérica como atajo de teclado, excepto las teclas reservadas por los comandos de menú estándar que aparecen en los menús **Edición** y **Archivo**, y las teclas reservadas para los comandos de menú 4D.

Estas combinaciones de teclas reservadas se indican en la siguiente tabla:

| Llave (Windows)                | Llave (macOS)                     | Operación         |
| ------------------------------------------------- | ---------------------------------------------------- | ----------------- |
| Ctrl+C                                            | Comando+C                                            | Copiar            |
| Ctrl+Q                                            | Comando+Q                                            | Salir             |
| Ctrl+V                                            | Comando+V                                            | Pegar             |
| Ctrl+X                                            | Comando+X                                            | Cortar            |
| Ctrl+Z                                            | Comando+Z                                            | Deshacer          |
| Ctrl+. (punto) | Comando+. (punto) | Detener la acción |

Para asignar un atajo de teclado en el editor de menús:

Seleccione la opción de menú a la que desea asignar un atajo de teclado.
Haga clic en el botón [...] botón a la derecha del área de entrada "Acceso directo". Aparece la siguiente ventana:

![](../assets/en/Menus/Shortcut.png)

Introduzca el carácter que desea utilizar y, a continuación (opcional), haga clic en las casillas de selección **Mayús** y/o **Alt** (**Opción**) según la combinación deseada.
También puede presionar directamente las teclas que componen la combinación deseada (no presione la tecla **Ctrl/Comando**).

> No se puede desmarcar la tecla Ctrl/Comando, que es obligatoria para los atajos de teclado de los menús.
> Para volver a empezar, haga clic en **Borrar**. Haga clic en **Aceptar** para validar los cambios. El acceso directo definido se muestra en el área de entrada "Acceso directo".

Para asignar un atajo de teclado utilizando el lenguaje 4D, utilice el comando `SET ITEM SHORTCUT`.

> Un objeto activo también puede tener un atajo de teclado. Si las asignaciones de las teclas **Ctrl/Comando** entran en conflicto, el objeto activo tiene prioridad.

### Línea activa

En el editor de menús, puede especificar si un elemento del menú aparecerá activo o inactivo. Un comando de menú activo puede ser elegido por el usuario; un comando de menú inactivo está atenuado y no puede ser elegido. Cuando la casilla de selección **Línea activa** está desmarcada, el comando de menú aparece atenuado, lo que indica que no se puede elegir.

A menos que especifique lo contrario, 4D habilita automáticamente cada elemento de menú que añada a un menú personalizado. Puede desactivar un elemento para, por ejemplo, activarlo sólo por programación con los comandos `ENABLE MENU ITEM` y `DISABLE MENU ITEM`.

### Marca de verificación

Esta opción del editor de menús puede utilizarse para asociar una marca de verificación del sistema a un elemento del menú. A continuación, puede gestionar la visualización de la marca de verificación utilizando los comandos del lenguaje (`SET MENU ITEM MARK` y `Get menu item mark`).

Las marcas de verificación se utilizan generalmente para los elementos del menú de acción continua e indican que la acción está en curso.

### Estilos de fuentes

4D le permite personalizar los menús aplicando diferentes estilos de letra a los comandos del menú. Puede personalizar sus menús con los estilos Negrita, Cursiva o Subrayado a través de las opciones del editor de menús, o utilizando el comando de lenguaje `SET MENU ITEM STYLE`.

Como regla general, aplique los estilos de fuente con moderación a sus menús; demasiados estilos distraerán al usuario y darán un aspecto desordenado a su aplicación.

> También puede aplicar estilos insertando caracteres especiales en el título del menú (ver [Usar caracteres de control](properties.md#using-control-characters) más arriba).

### Icono línea

Puede asociar un icono a un elemento del menú. Aparecerá directamente en el menú, junto al elemento:

![](../assets/en/Menus/iconMenu.png)

Para definir el icono en el editor de menús, haga clic en el área "Icono del elemento" y seleccione **Abrir** para abrir una imagen del disco. Si selecciona un archivo imagen que no está almacenado en la carpeta Recursos del proyecto, se copiará automáticamente en esa carpeta. Una vez definido, el icono del elemento aparece en el área de vista previa:

![](../assets/en/Menus/iconpreview.png)

Para eliminar el icono del elemento, elija la opción **Sin icono** del área "Icono línea".

Para definir los iconos de los elementos utilizando el lenguaje 4D, llame al comando `SET MENU ITEM ICON`.

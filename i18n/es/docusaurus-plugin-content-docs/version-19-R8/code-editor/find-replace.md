---
id: find-replace
title: Buscar y reemplazar
---

El Editor de Código tiene funciones específicas de búsqueda y reemplazo que se aplican a la ventana actual.

El área de búsqueda situada en la barra de herramientas de cada ventana de método puede utilizarse para realizar búsquedas sencillas.

Los comandos Buscar/Reemplazar para métodos, clases o funciones se encuentran en **Editar** menú de 4D:

![find-replace](../assets/en/code-editor/find-replace-1.png)

> Los comandos de búsqueda situados sobre el submenú **Buscar** no son específicos del Editor de código, pero pueden utilizarse para buscar un valor entre todos los métodos, clases o funciones, utilizando la función **Buscar en diseño** de la barra de herramientas o en el menú **Editar**.

## Buscar

Al seleccionar el comando **Buscar...** aparece el siguiente diálogo:

![find-dialog](../assets/en/code-editor/find-dialog.png)

La búsqueda definida en este diálogo se realizará en el método situado en el primer plano.

- El área **Buscar qué:** permite introducir la cadena de caracteres que se desea buscar. Esta área es un combo box que almacena las últimas 15 cadenas de caracteres que se han buscado o reemplazado durante la sesión. Si resalta el texto antes de elegir el comando **Buscar...**, aparecerá en esta área. Entonces puede utilizar este texto o reemplazarlo por otro.
- La opción **Toda la palabra** se utiliza para limitar la búsqueda a las ocurrencias exactas de la palabra buscada. Cuando esta opción está marcada, por ejemplo, una búsqueda de "cliente" no encontrará ni "clientes" ni "micliente" By default, this option is not checked; therefore, a search for "var" will find "Myvar," "variation," etc. Be careful, unlike the **Whole Object Name** option of the Find in Design dialog box, the **Whole Word** option does not take object names into account. Por ejemplo, con esta opción, la búsqueda de la cadena "Mi" en un método encontrará la variable "Mi variable". This is not the case for an overall search using the **Whole Object Name** option, where the same result will not be found in the context of the above example since the whole object name (of the variable found previously) is "My Variable" and therefore does not correspond exactly to the string entered ("My").
- La opción **Sensible a mayúsculas y minúsculas** se utiliza para tener en cuenta las mayúsculas y minúsculas de los caracteres introducidos en el área "Buscar qué:". Por ejemplo, una búsqueda de "MiVar" no encontrará "miVar"
- Los botones de opción **Anterior/Siguiente** permiten establecer la dirección de la búsqueda: hacia el principio o hacia el final del método actual, partiendo de la posición inicial del cursor.

Al hacer clic en **OK**, 4D inicia la búsqueda a partir del punto de inserción del texto actual y continúa hasta el final del método. De este modo, en la ventana del Editor de código se selecciona el primer elemento correspondiente a los criterios establecidos. A continuación, es posible continuar la búsqueda utilizando los comandos **Buscar siguiente** y **Buscar anterior** del menú **Editar**.

### Buscar lo mismo

El comando **Buscar el mismo** se utiliza para buscar cadenas de caracteres idénticas a la seleccionada. Este comando sólo está activo si ha seleccionado al menos un caracter en el Editor de código.

La búsqueda realizada es del tipo "Buscar siguiente" en la ventana actual del editor de código.

### Buscar Igual Siguiente/Anterior

The **Find Same Next** and **Find Same Previous** commands are used to find character strings *strictly* identical to the ones selected. For example, the case must match.

### Bookmark All

The **Bookmark All** command is enabled when a search has already been specified in the find or replace dialog box. Cuando selecciona este comando, 4D pone un marcador en cada línea que contiene un elemento correspondiente al criterio de búsqueda "actual". Esto facilita la localización de todos los resultados de la búsqueda.

Para más información sobre marcadores, consulte [Uso de marcadores](./write-class-method.md#using-bookmarks).

## Reemplazar

The **Replace** command displays the following dialog box:

![find-dialog](../assets/en/code-editor/replace-dialog.png)

- The **Find What:** area is used to define the character string or the expression to be searched for. Al igual que en el diálogo Buscar, esta área es un combo-box que almacena las últimas 15 cadenas de caracteres buscadas. Si resalta el texto antes de elegir el comando **Reemplazar...**, aparecerá en esta área.
- El área **Reemplazar por** se utiliza para definir la cadena de caracteres que sustituirá a la definida anteriormente. Esta área también es un combo-box que almacena las últimas 15 cadenas de caracteres que se han buscado o sustituido.
- La opción **Palabra completa** se utiliza para buscar/reemplazar sólo las cadenas de caracteres que correspondan exactamente con la cadena introducida. En este caso, por ejemplo, una búsqueda de "cliente" no encontrará las cadenas "clientes" o "micliente", etc.
- The **Case Sensitive** option is used to find/replace only character strings having the same case as that of the entered string. Por ejemplo, una búsqueda de "MiVar" no encontrará "miVar"
- As in the Find dialog box, the **Previous** and **Next** buttons are used to set the direction of the search: towards the beginning or end of the current method, starting from the initial location of the cursor.

The first item corresponding to the set criteria is thus selected in the Code Editor window. 4D begins searching from the current text insertion point and continues to the end of the method. It is then possible to continue finding/replacing using the **Replace Next** and **Replace Previous** commands of the **Edit** menu.

The **Everywhere** button is used to replace all the occurrences corresponding to the search criteria directly in the open method.



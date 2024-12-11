---
id: set-list-item-properties
title: SET LIST ITEM PROPERTIES
slug: /commands/set-list-item-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM PROPERTIES.Syntax-->**SET LIST ITEM PROPERTIES** ( {* ;} *lista* ; refElem | * ; *editable* ; *estilos* {; *icono* {; *color*}} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, lista es un nombre de objeto (cadena) Si se omite, lista es una referencia de lista |
| lista | Integer, Text | &#8594;  | Número de referencia de lista (si se omite *) o Nombre del objeto de tipo lista (si se pasa *) |
| refElem &#124; * | Operador, Entero largo | &#8594;  | Número de referencia del elemento, o 0 para el último elemento añadido a la lista, o * para el elemento actual de la lista |
| editable | Boolean | &#8594;  | TRUE = Editable, FALSE = No-editable |
| estilos | Integer | &#8594;  | Estilo de fuente para el elemento |
| icono | Text, Integer | &#8594;  | Nombre o número de la imagen ("" o 0 para ningún icono) |
| color | Integer | &#8594;  | Valor de color RGB o -1 = restablecer color original |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET LIST ITEM PROPERTIES.Summary-->El comando **SET LIST ITEM PROPERTIES** modifica el elemento designado por el parámetro *refElem* de la lista cuyo número de referencia o nombre de objeto se pasa en *lista*.<!-- END REF-->

Si pasa el primer parámetro opcional *\**, indica que el parámetro *lista* es un nombre de objeto (cadena) correspondiente a una representación de lista en el formulario. Si no pasa este parámetro, indica que el parámetro *lista* es una referencia de lista jerárquica RefLista). Si utiliza sólo una representación de lista o trabaja con elementos estructurales (el segundo \* se omite), puede utilizar indiferentemente una u otra sintaxis. Por el contrario, si utiliza varias representaciones de una misma lista y trabaja con el elemento actual (el segundo *\** se pasa), la sintaxis basada en el nombre del objeto es necesaria ya que cada representación puede tener su propio elemento actual.

Puede pasar un número de referencia en *refElem*. Si el número no corresponde a ningún elemento de la lista, el comando no hace nada. Opcionalmente puede pasar *0* en *refElem* para modificar el último elemento añadido a la lista utilizando [APPEND TO LIST](append-to-list.md).

Por último, puede pasar *\** en *refElem*: en este caso, el comando se aplicará al elemento actual de la lista. Si varios elementos se seleccionan manualmente, el elemento actual es el que fue seleccionado de último. Si no se selecciona un elemento, el comando no hace nada.

Si trabaja con los números de referencia de los elementos, construya una lista en la cual los elementos tengan números de referencia únicos, de lo contrario no podrá diferenciar los elementos. Para mayor información, consulte la sección *Gestión de listas jerárquicas*.

**Nota:** para cambiar el texto del elemento o su sublista, utilice el comando [SET LIST ITEM](set-list-item.md).

Para hacer que un elemento sea editable, pase TRUE en *editable*; o de lo contrario, pase FALSE.

**Importante:** para que un elemento sea editable, debe pertenecer a una lista que sea editable. Para hacer que una lista sea editable, utilice el comando [OBJECT SET ENTERABLE](object-set-enterable.md). Para hacer que un elemento individual sea editable, utilice **SET LIST ITEM PROPERTIES** . La modificación de la propiedad editable a nivel de la lista no afecta las propiedades individuales de cada elemento. Sin embargo, un elemento puede ser editable sólo si su lista es editable.

El estilo de fuente del elemento se especifica en el parámetro *estilos*. Se pasa una o una combinación de las siguientes constantes predefinidas:

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Plain     | Entero largo | 0     |
| Underline | Entero largo | 4     |

En el parámetro *icono*, puede pasar una imagen para utilizarla como icono para el elemento. Puede usar una referencia de archivo de imagen o una imagen de librería (solo bases de datos binarias).

* Referencia del archivo de imagen (texto): debe utilizar **path:<filesystem path>**. Para más información, consulte el párrafo *Rutas a los Filesystem*.
* Imagen de librería (entero largo o texto, solo en bases de datos binarias): puede pasar el nombre o el número de la imagen. Generalmente, es preferible utilizar su número en lugar de su nombre, ya que los números de imágenes son ID únicos, lo que no es el caso de los nombres. Si desea utilizar un número, pase Use PicRef+*N* en el parámetro, donde N es el número de referencia de la imagen en la librería de imágenes. Use PicRef es una constante predefinida ubicada en el tema *Listas jerárquicas*.
* Pase una cadena vacía ("") o cero (0) en el *icono* si no desea ningún gráfico para el elemento.

**Notas:**

* Se recomienda el uso de una ruta de archivo de imagen ya que la librería de imágenes está en desuso y no es soportada en proyectos 4D.
* Si quiere utilizar expresiones imagen 4D (campos, variables, etc.) para definir los iconos de los elementos, utilice el comando [SET LIST ITEM ICON](set-list-item-icon.md).

El parámetro *color* (opcional) le permite modificar el color del texto del elemento. El color debe especificarse en forma de color RGB, es decir un entero largo de 4 bytes en formato 0x00RRGGBB. Para mayor información sobre este formato, consulte la descripción del comando [OBJECT SET RGB COLORS](object-set-rgb-colors.md). Pase -1 en el parámetro *color* para restablecer el color original del elemento.

#### Ejemplo 1 

Ver el ejemplo del comando [APPEND TO LIST](append-to-list.md "APPEND TO LIST").

#### Ejemplo 2 

El siguiente ejemplo cambia el texto del elemento actual de *lista* a negrita y rojo vivo:

```4d
 SET LIST ITEM PROPERTIES(list;*;True;Bold;0;0x00FF0000)
```

#### Ver también 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
*Listas jerárquicas*  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 386 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



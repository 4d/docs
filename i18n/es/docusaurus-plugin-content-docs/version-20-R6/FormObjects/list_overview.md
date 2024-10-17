---
id: listOverview
title: Lista jerárquica
---

Las listas jerárquicas son objetos formulario que pueden utilizarse para mostrar datos en forma de listas con uno o más niveles que pueden desplegarse o contraerse.

![](../assets/en/FormObjects/Hlist1.png)

Cuando corresponda, el icono desplegar/contraer se mostrará automáticamente a la izquierda del elemento. Las listas jerárquicas soportan un número ilimitado de subniveles.

## Fuente de datos de lista jerárquica

El contenido de un objeto formulario lista jerárquica se puede inicializar de una de las siguientes maneras:

- Asociar una [lista de opciones](properties_DataSource.md#choice-list) existente al objeto. La lista de elección debe haber sido definida en el editor de listas en modo Diseño.
- Asigne directamente una referencia de lista jerárquica a la [variable o expresión](properties_Object.md#variable-or-expression) asociada al objeto formulario.

En ambos casos, se gestiona una lista jerárquica en tiempo de ejecución a través de su referencia *ListRef*, utilizando los comandos [lista jerárquica](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) del lenguaje 4D.

## RefList y nombre de objeto

Una lista jerárquica es a la vez un **objeto de lenguaje** existente en memoria y un **objeto de formulario**.

El **objeto de lenguaje** está referenciado por un ID interno único de tipo Entero largo, designado por *ListRef* en el manual de Lenguaje 4D. Este ID es devuelto por los comandos que se pueden usar para crear listas: `New list`, `Copy list`, `Load list`, `BLOB to list`. Sólo hay una instancia del objeto lenguaje en la memoria y cualquier modificación realizada en este objeto se traslada inmediatamente a todos los lugares donde se utiliza.

El **objeto de formulario** no es necesariamente único: puede haber varias representaciones de la misma lista jerárquica en el mismo formulario o en otros diferentes. Al igual que con otros objetos formulario, se especifica el objeto en el lenguaje utilizando la sintaxis (\*; "NomLista", etc.).

Conecte el "objeto lenguaje " lista jerárquica con el "objeto de formulario" lista jerárquica por medio de la variable que contiene el valor RefLista. Conecte el "objeto lenguaje " lista jerárquica con el "objeto de formulario" lista jerárquica por medio de la variable que contiene el valor RefLista.

```4d
mylist:=New list
```

Cada representación de la lista tiene sus propias características específicas y comparte características comunes con todas las demás representaciones. Las siguientes características son específicas de cada representación de la lista:

- La selección,
- El estado desplegado/colapsado de sus elementos,
- La posición del cursor de desplazamiento.

Las otras características (fuente, tamaño de fuente, estilo, control de entrada, color, contenido de la lista, iconos, etc.) son comunes a todas las representaciones y no se pueden modificar por separado.
Por consiguiente, cuando se utilizan comandos basados en la configuración expandida/colapsada o en el elemento actual, por ejemplo `Count list items` (cuando no se pasa el parámetro final `*`), es importante poder especificar la representación que se utilizará sin ninguna ambigüedad.

Debe utilizar el identificador `RefLista` con los comandos del lenguaje cuando quiera especificar la lista jerárquica que se encuentra en la memoria. En cambio, si desea especificar la representación al nivel del formulario de un objeto Lista jerárquica, debe utilizar el nombre del objeto (tipo cadena) en el comando, mediante la sintaxis estándar (\*; "NomLista", etc.).

> En el caso de los comandos que definen propiedades, la sintaxis basada en el nombre del objeto no significa que sólo el objeto formulario especificado será modificado por el comando, sino que la acción del comando se basará en el estado de este objeto. Las características comunes de las listas jerárquicas se modifican siempre en todas sus representaciones.
> Por ejemplo, si pasa la instrucción:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... está indicando que quiere modificar la fuente de un elemento de la lista jerárquica asociada al objeto de formulario *mylist1*. El comando tendrá en cuenta el elemento actual del objeto *mylist1* para definir el elemento a modificar, pero esta modificación se trasladará a todas las representaciones de la lista en todos los procesos.

### Soporte de @

Al igual que con otros comandos de gestión de propiedades de objetos, es posible utilizar el carácter "@" en el parámetro `NomLista`. Por regla general, esta sintaxis se utiliza para designar un conjunto de objetos del formulario. Sin embargo, en el contexto de los comandos de listas jerárquicas, esto no se aplica en todos los casos. Esta sintaxis tendrá dos efectos diferentes según el tipo de comando:

- Para los comandos que fijan propiedades, esta sintaxis designa todos los objetos cuyo nombre corresponde (comportamiento estándar). Por ejemplo, el parámetro "LH@" designa todos los objetos del tipo lista jerárquica cuyo nombre empieza por "LH."
  - `DELETE FROM LIST`
  - `INSERT IN LIST`
  - `SELECT LIST ITEMS BY POSITION`
  - `SET LIST ITEM`
  - `SET LIST ITEM FONT`
  - `SET LIST ITEM ICON`
  - `SET LIST ITEM PARAMETER`
  - `SET LIST ITEM PROPERTIES`

- Para los comandos que recuperan propiedades, esta sintaxis designa el primer objeto cuyo nombre corresponde:
  - `Count list items`
  - `Find in list`
  - `GET LIST ITEM`
  - `Get list item font`
  - `GET LIST ITEM ICON`
  - `GET LIST ITEM PARAMETER`
  - `GET LIST ITEM PROPERTIES`
  - `List item parent`
  - `List item position`
  - `Selected list items`

## Comandos genéricos utilizables con listas jerárquicas

Es posible modificar la apariencia de una lista jerárquica en un formulario utilizando varios comandos 4D genéricos. Puede pasar a estos comandos el nombre del objeto de la lista jerárquica (utilizando el parámetro \*), o su nombre de variable (que contiene el valor ListRef):

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Recordatorio: excepto `OBJECT SET SCROLL POSITION`, estos comandos modifican todas las representaciones de una misma lista, aunque sólo se especifique una lista a través de su nombre de objeto.

## Prioridad de los comandos de propiedad

Ciertas propiedades de las listas jerárquicas (por ejemplo, el atributo **editable** o el color) pueden definirse de diferentes maneras: en las propiedades del formulario, mediante un comando del tema "Propiedades de los objetos" o mediante un comando del Cuando se utilizan los tres medios para definir las propiedades de la lista, se aplica el siguiente orden de prioridad:

1. Comandos del tema "Lista jerárquica"
2. Comandos genéricos de propiedad de objeto
3. Propiedad formulario

Este principio se aplica independientemente del orden de llamada de los comandos. Si una propiedad de un elemento se modifica individualmente a través de un comando de lista jerárquica, el comando de propiedad de objeto equivalente no tendrá ningún efecto sobre este elemento, incluso si se llama posteriormente. Por ejemplo, si el color de un elemento se modifica a través del comando `SET LIST ITEM PROPERTIES`, el comando `OBJECT SET COLOR` no tendrá ningún efecto sobre este elemento.

## Gestión de los elementos por posición o por referencia

Normalmente se puede trabajar de dos maneras con el contenido de las listas jerárquicas: por posición o por referencia.

- Cuando se trabaja por posición, 4D se basa en la posición con respecto a los elementos de la lista que aparecen en pantalla para identificarlos. El resultado será diferente según se expandan o colapsen determinados elementos jerárquicos. Tenga en cuenta que en el caso de las representaciones múltiples, cada objeto formulario tiene su propia configuración de elementos expandidos/colapsados.
- Cuando se trabaja por referencia, 4D se basa en el número de identificación *itemRef* de los elementos de la lista. Así, cada elemento puede especificarse individualmente, independientemente de su posición o de su visualización en la lista jerárquica.

### Utilizar los números de referencia de los artículos (itemRef)

Cada elemento de una lista jerárquica tiene un número de referencia (*itemRef*) del tipo Entero largo. Este valor sólo está destinado a su propio uso: 4D simplemente lo mantiene.

> Atención: puede utilizar cualquier tipo de valor entero largo como número de referencia, excepto 0. De hecho, para la mayoría de los comandos de este tema, se utiliza el valor 0 para especificar el último elemento añadido a la lista.

He aquí algunos consejos para utilizar los números de referencia:

1. No es necesario identificar cada elemento con un número único (nivel principiante).

   - Primer ejemplo: se construye por programación un sistema de pestañas, por ejemplo, una libreta de direcciones. Como el sistema devuelve el número de la pestaña seleccionada, probablemente no necesitará más información que ésta. En este caso, no se preocupe por los números de referencia de los elementos: pase un valor cualquiera (excepto 0) en el parámetro *itemRef*. Tenga en cuenta que para un sistema de libreta de direcciones, puede predefinir una lista A, B, ..., Z en el modo Diseño. También se puede crear por programación para eliminar las letras para las que no hay registros.
   - Segundo ejemplo: al trabajar con una base, se construye progresivamente una lista de palabras clave. Puede guardar esta lista al final de cada sesión utilizando los comandos `SAVE LIST` o `LIST TO BLOB` y volver a cargarla al comienzo de cada nueva sesión utilizando el `Load list` o `BLOB to list`. Puede mostrar esta lista en una paleta flotante; cuando cada usuario hace clic en una palabra clave de la lista, el elemento elegido se inserta en el área introducible que está seleccionada en el proceso en primer plano. Lo importante es que sólo procese el elemento seleccionado, porque el comando `Select list items` devuelve la posición del elemento que debe procesar. Cuando se utiliza este valor de posición, se obtiene el título del elemento mediante el comando `GET LIST ITEM`. También en este caso, no es necesario identificar cada elemento individualmente; puede pasar cualquier valor (excepto 0) en el parámetro *itemRef*.

2. Necesita identificar parcialmente los elementos de la lista (nivel intermediario).\
   Se utiliza el número de referencia del elemento para almacenar la información necesaria cuando debe trabajar con el elemento; este punto se detalla en el ejemplo del comando `APPEND TO LIST`. En este ejemplo, utilizamos los números de referencia de los artículos para almacenar los números de registro. Sin embargo, debemos ser capaces de establecer una distinción entre los elementos que corresponden a los registros [Department] y los que corresponden a los registros [Employees].

3. Debe identificar cada los elementos de la lista individualmente (nivel avanzado).\
   Programe una gestión elaborada de listas jerárquicas en la que es absolutamente necesario poder identificar cada elemento individualmente en cada nivel de la lista. Una forma sencilla de ponerlo en práctica es mantener un contador personal. Suponga que crea una lista *hlList* utilizando el comando `APPEND TO LIST`. En esta etapa, se inicializa un contador *vhlCounter* en 1. Cada vez que se llama a `APPEND TO LIST` o `INSERT IN LIST`, se incrementa este contador `(vhlCounter:=vhlCounter+1)`, y se pasa el número del contador como número de referencia del elemento. El truco consiste en no disminuir nunca el contador cuando se eliminan elementos: el contador sólo puede aumentar. De este modo, se garantiza la unicidad de los números de referencia de los elementos. Como estos números son de tipo Entero largo, puede añadir o insertar más de dos mil millones de elementos en una lista que ha sido reiniciada... (sin embargo, si está trabajando con un número tan grande de elementos, esto suele significar que debe utilizar una tabla en lugar de una lista.)

> Si se utilizan operadores Bitwise, también se pueden utilizar los números de referencia de los elementos para almacenar información que se puede poner en un Entero largo, es decir, 2 enteros, valores de 4 bytes o de nuevo 32 booleanos.

### ¿Cuándo necesita números de referencia únicos?

En la mayoría de los casos, cuando se utilizan listas jerárquicas con fines de interfaz de usuario y cuando sólo se trata del elemento seleccionado (por un clic o arrastrado), no será necesario utilizar los números de referencia de los elementos en absoluto. Con `Selected list items` y `GET LIST ITEM`, tiene todo lo que necesita para tratar con el elemento seleccionado actualmente. Además, comandos como `INSERT IN LIST` y `DELETE FROM LIST` permiten manipular la lista "relativamente" con respecto al elemento seleccionado.

Básicamente, es necesario tratar con los números de referencia de los elementos cuando se quiere acceder directamente a cualquier elemento de la lista de forma programada y no necesariamente al actualmente seleccionado en la lista.

## Elemento modificable

Puede controlar si los elementos de la lista jerárquica pueden ser modificados por el usuario utilizando el atajo de teclado **Alt+clic**(Windows) / **Opción+clic** (macOS), o realizando una pulsación larga sobre el texto del elemento.

- Sea cual sea la fuente de datos de la lista jerárquica, puede controlar todo el objeto con la propiedad [Editable](properties_Entry.md#enterable).

- Además, si llena la lista jerárquica utilizando una lista creada en el editor de listas, puede controlar si un elemento de una lista jerárquica es modificable mediante la opción **Elemento modificable** del editor de listas. Para más información, consulte [Definir las propiedades de la lista](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Arrastrable](properties_Action.md#draggable-and-droppable) - [Soltable](properties_Action.md#draggable-and-droppable) - [Editable](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Color de relleno](properties_BackgroundAndBorder.md#background-color--fill-color) - [Enfocable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Alto](properties_CoordinatesAndSizing.md#height) - [Ayuda](properties_Help.md#help-tip) - [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Multiselección](properties_Action.md#multi-selectable) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Variable o Expresión](properties_Object.md#variable-or-expression) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)

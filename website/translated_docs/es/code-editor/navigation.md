---
id: navigation
title: Despliegue de navegación
---

La lista desplegable de navegación le ayuda a organizar su código y a navegar más fácilmente dentro de sus clases y métodos:

![dropdown-list](assets/en/code-editor/dropdown-list.png)

Algunas etiquetas se añaden automáticamente y puede complementar la lista desplegable utilizando los [marcadores ](#manual-tagging).

## Navegación en el código

Haga clic en un elemento de la lista desplegable para acceder a su primera línea en el código. También puede navegar con las teclas de flecha y presionar **Intro**.

## Etiquetado automático

Los constructores, las declaraciones de métodos, las funciones y los atributos calculados se etiquetan automáticamente y se añaden a la lista desplegable.

Cuando no hay ninguna etiqueta en la clase/método, la herramienta muestra "Sin etiqueta".

Los siguientes elementos se añaden automáticamente:

| Icono                                                                    | Elemento                                       |
| ------------------------------------------------------------------------ | ---------------------------------------------- |
| ![no-tag-icon](assets/en/code-editor/no-tag.png)                         | Sin etiqueta                                   |
| ![constructor-icon](assets/en/code-editor/constructor.png)               | Class constructor o declaración de método      |
| ![computed-attribute-icon](assets/en/code-editor/computed-attribute.png) | Atributo calculado (get, set, orderBy y query) |
| ![function-icon](assets/en/code-editor/function.png)                     | Nombre de la función de clase                  |


## Etiquetado manual

Añadiendo marcadores en su código, puede añadir las siguientes etiquetas a la lista desplegable:

| Icono                                                | Elemento       |
| ---------------------------------------------------- | -------------- |
| ![mark-tag-icon](assets/en/code-editor/mark-tag.png) | MARK: etiqueta |
| ![todo-tag-icon](assets/en/code-editor/todo-tag.png) | TODO: etiqueta |
| ![fixme-icon](assets/en/code-editor/fixme-tag.png)   | FIXME: tag     |

Se declaran añadiendo comentarios como:

```4d 
// FIXME: Corrige los siguientes elementos
```

Las declaraciones no distinguen entre mayúsculas y minúsculas; escribir `fixme:` tiene el mismo efecto.

Añadir un guión después de la etiqueta `MARK:` dibuja una línea de separación en el editor de código y en el menú desplegable. Así que escribiendo esto:

![mark-hyphen-image](assets/en/code-editor/mark-hyphen-editor.png)

Esto es lo que resulta:

![mark-hyphen-image](assets/en/code-editor/dropdown-organize.png)

Todos los marcadores situados dentro de las funciones tienen sangría en la lista desplegable, excepto las etiquetas `MARK:` situadas al final de las funciones y no seguidas de instrucciones. Estos aparecerán en el primer nivel.

## Orden de visualización

Las etiquetas se muestran en su orden de aparición dentro del método/clase.

Para mostrar las etiquetas de un método o de una clase en orden alfabético, realice una de las siguientes acciones:
* **haga clic derecho** en la herramienta desplegable
* mantenga **Cmd** en macOS o **Alt** en Windows, y haga clic en la herramienta de lista desplegable

> Las etiquetas dentro de las funciones se mueven con sus elementos padres.





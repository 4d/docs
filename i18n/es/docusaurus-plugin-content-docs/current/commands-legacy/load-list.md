---
id: load-list
title: Load list
slug: /commands/load-list
displayed_sidebar: docs
---

<!--REF #_command_.Load list.Syntax-->**Load list** ( *nomLista* ) : Integer<!-- END REF-->
<!--REF #_command_.Load list.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomLista | Text | &#8594;  | Nombre de una lista creada en el Editor de listas del entorno Diseño |
| Resultado | Integer | &#8592; | Número de referencia de la lista creada recientemente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Load list.Summary-->Load list crea una lista jerárquica cuyo contenido se copia de la lista pasada en *nomLista*.<!-- END REF--> Luego devuelve el número de referencia de la lista creada recientemente. 

Para asegurarse de que la lista especificada por *nomLista* existe, utilice la función [Is a list](is-a-list.md "Is a list").

Note que la nueva lista es una copia de la lista definida en el entorno Diseño. Por lo tanto, cualquier modificación realizada a la nueva lista no afectará la lista definida en el entorno Diseño. Igualmente, toda modificación posterior a la lista definida en el entorno Diseño no afectará la lista que acaba de crear.

Si modifica la lista creada recientemente y quiere guardar los cambios de forma permanente, llame al comando [SAVE LIST](save-list.md "SAVE LIST"). 

Recuerde llamar [CLEAR LIST](clear-list.md "CLEAR LIST") para borrar la lista creada cuando haya terminado. De lo contrario, permanecerá en memoria hasta el final de la sesión de trabajo o hasta que el proceso en el cual fue creada termine o sea abortado.

**Consejo:** si asocia una lista a un objeto de formulario (lista jerárquica, pestaña, o menú jerárquico) utilizando Lista de valores en la ventana de Lista de propiedades, no necesita llamar Load list o [CLEAR LIST](clear-list.md "CLEAR LIST") en el método del objeto. 4D carga y borra la lista automáticamente por usted.

#### Ejemplo 

Usted crea una base para el mercado internacional y necesita cambiar a los diferentes idiomas mientras utiliza la base. En un formulario, presenta una lista jerárquica, llamada *hlList*, que ofrece una lista de opciones estándar. En el entorno Diseño, usted preparó varias listas, tales como “Opciones EN” para la versión en inglés, “Opciones FR” para la versión en francés, “Opciones ES” para la versión en español, etc. Adicionalmente, usted mantiene una variable interproceso llamada◊*gsIdiomaActual*, donde almacena un código de lenguaje de 2 caracteres, como “EN” para la versión en inglés, “FR” para la versión en francés, “ES” para la versión en español, etc. Para asegurarse de que se cargue la lista correcta utilizando el idioma seleccionado actualmente, puede escribir:

```4d
  // Método de objeto de la lista jerárquica hlList
 Case of
    :(FORM Event=On Load)
       var hlList : Integer
       hlList:=Load list("Std Options"+◊gsIdiomaActual)
    :(FORM Event=On Unload)
       CLEAR LIST(hlList;*)
 End case
```

#### Ver también 

[CLEAR LIST](clear-list.md)  
[Is a list](is-a-list.md)  
[SAVE LIST](save-list.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 383 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



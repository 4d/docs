---
id: execute-method
title: EXECUTE METHOD
slug: /commands/execute-method
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE METHOD.Syntax-->**EXECUTE METHOD** ( *nomMetodo* {; *result* {; *param*}}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE METHOD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomMetodo | Text | &#8594;  | Nombre del método de proyecto a ejecutar |
| result | Variable, * | &#8592; | Variable que recibe el resultado del método * para un método que no devuelve un resultado |
| param | Expression | &#8594;  | Parámetro(s) del método |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXECUTE METHOD.Summary-->El comando EXECUTE METHOD provoca la ejecución del método de proyecto *nomMetodo* pasando los parámetros en *param1.<!-- END REF-->..paramN*. Puede pasar el nombre de un método que puede ser llamado desde la base o el componente que ejecuta el comando.

En *result*, puede pasar una variable que reciba el resultado de la ejecución de *nomMetodo* (valor ubicado en $0 al interior de *nomMetodo*). Si el método no devuelve un resultado, pase *\** como segundo parámetro.

El contexto de ejecución se conserva en el método llamado, lo que significa que el formulario actual y el evento de formulario actual permanecen definidos.

Si llama este comando desde un componente y pasa un nombre de método que pertenece a la base local en *nomMetodo* (o viceversa), el método debe estar compartido (opción “Compartido entre componente y base principal”, en las propiedades del método).

#### Variables y conjuntos del sistema 

Si este comando se ejecuta correctamente, la variable sistema OK toma el valor 1; de lo contrario toma el valor 0.

#### Ver también 

[EXECUTE FORMULA](execute-formula.md)  
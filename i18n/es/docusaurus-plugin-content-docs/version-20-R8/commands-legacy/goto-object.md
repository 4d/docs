---
id: goto-object
title: GOTO OBJECT
slug: /commands/goto-object
displayed_sidebar: docs
---

<!--REF #_command_.GOTO OBJECT.Syntax-->**GOTO OBJECT** ( {* ;} *objeto* )<!-- END REF-->
<!--REF #_command_.GOTO OBJECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica = objeto es un nombre de objeto (cadena) Si se omite = objeto es un campo o una variable |
| objeto | Field, Variable | &#8594;  | Nombre del objeto (si se especifica *) o Campo o Variable (si se omite *) a donde ir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GOTO OBJECT.Summary-->El comando GOTO OBJECT se utiliza para seleccionar el objeto editable *objeto* como el área activa del formulario.<!-- END REF--> Es equivalente de un clic del usuario en el área o de utilizar la tecla Tab para seleccionar el campo o la variable. 

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica un campo o una variable en *objeto*. En este caso, especifique una referencia de campo o de variable (objetos de campos o variables únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección . 

Para eliminar todo foco en el formulario actual, llame al comando mientras pasa un nombre de objeto vacío en *objeto* (ver ejemplo 2).

El comando GOTO OBJECT puede utilizarse en el contexto de un subformulario. Cuando se llama desde un subformulario, busca primero el objeto en el subformulario, luego, si la búsqueda no encuentra nada allí, extiende la búsqueda a objetos del formulario padre.

#### Ejemplo 1 

El comando GOTO OBJECT puede utilizarse de dos maneras: 

```4d
 GOTO OBJECT([Personas]Nombre) // Referencia del campo
 GOTO OBJECT(*;"AreaEdad") // Nombre del objeto
```

#### Ejemplo 2 

Si no quiere que ningún objeto del formulario tenga el foco. 

```4d
 GOTO OBJECT(*;"")
```

#### Ejemplo 3 

Ver el ejemplo del comando [REJECT](reject.md "REJECT").

#### Ver también 

[CALL SUBFORM CONTAINER](call-subform-container.md)  
[REJECT](reject.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 206 |
| Hilo seguro | &cross; |



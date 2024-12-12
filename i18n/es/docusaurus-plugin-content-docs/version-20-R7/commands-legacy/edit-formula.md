---
id: edit-formula
title: EDIT FORMULA
slug: /commands/edit-formula
displayed_sidebar: docs
---

<!--REF #_command_.EDIT FORMULA.Syntax-->**EDIT FORMULA** ( *tabla* ; *formula* )<!-- END REF-->
<!--REF #_command_.EDIT FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a mostrar por defecto en el editor de fórmulas |
| formula | Text | &#8594;  | Variable que contiene la fórmula a mostrar en el editor de fórmulas o "" para mostrar sólo el editor |
| &#8592; | Fórmula validada por el usuario |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.EDIT FORMULA.Summary-->El comando EDIT FORMULA muestra el editor de fórmulas con el fin de permitir al usuario escribir o modificar una fórmula.<!-- END REF--> El editor contiene al abrir:

* en la lista de la izquierda, los campos de la tabla pasados en el parámetro *tabla*,
* en el área de fórmula, la fórmula contenida en la variable *formula*. Si pasa una cadena vacía en *formula*, el editor es mostrado sin fórmula.

El usuario puede modificar y guardar la *formula* mostrada. También es posible escribir o cargar una nueva fórmula. Sin embargo, si el usuario valida la caja de diálogo, la variable de sistema OK toma el valor 1 y la variable *formula* contiene la fórmula definida por el usuario. Si el usuario cancela la fórmula, la variable sistema OK toma el valor 0 y la variable *formula* no cambia. 

**Notas:**

* Por defecto, el acceso a los métodos y a los comandos está restringido para todos los usuarios (excepto para el Diseñador y Administrador, en bases de datos creadas con 4D 2004.4 y posteriores). Cuando este mecanismo está activado, usted debe designar explícitamente los elementos accesibles a los usuarios utilizando el comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md). Si la *formula* llama métodos que no han sido autorizados previamente en el editor de fórmulas utilizando el comando [SET ALLOWED METHODS](../commands/set-allowed-methods.md), se genera un error de sintaxis y no podrá validar la caja de diálogo.
* El editor de fórmulas no está asociado a ninguna barra de menús de forma predeterminada. Debe instalar un menú **Editar** estándar en el proceso de llamada si desea que los usuarios puedan beneficiarse de los accesos directos cortar/copiar/pegar en el editor de fórmulas.
* La estructura virtual definida por los comandos [SET TABLE TITLES](set-table-titles.md) y [SET FIELD TITLES](set-field-titles.md) (si existe) no debe ser utilizada en la variable *formula*, ni será utilizada por 4D en la variable devuelta. La estructura virtual sólo se utiliza en la caja de diálogo del editor de fórmulas.

Recuerde que cuando se valida la caja de diálogo, el comando no ejecuta la *formula*; sólo valida y actualiza el contenido de la variable. Si quiere ejecutar la *formula*, debe utilizar el comando [EXECUTE FORMULA](execute-formula.md). 

#### Ejemplo 

Visualización del editor de fórmulas con la tabla \[Empleados\] y sin una fórmula introducida previamente: 

```4d
 $miFormula:=""
 EDIT FORMULA([Empleados];$miFormula)
 If(OK=1)
    APPLY TO SELECTION([Empleados];EXECUTE FORMULA($miFormula))
 End if
```

#### Variables y conjuntos del sistema 

Si el usuario valida la caja de diálogo, la variable sistema OK toma el valor 1\. Si el usuario anula la caja de diálogo, la variable sistema OK toma el valor 0.

#### Ver también 

[APPLY TO SELECTION](apply-to-selection.md)  
[EXECUTE FORMULA](execute-formula.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  
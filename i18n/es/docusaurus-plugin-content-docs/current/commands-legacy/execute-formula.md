---
id: execute-formula
title: EXECUTE FORMULA
slug: /commands/execute-formula
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE FORMULA.Syntax-->**EXECUTE FORMULA** ( *instruccion* )<!-- END REF-->
<!--REF #_command_.EXECUTE FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| instruccion | Text | &#8594;  | Código a ejecutar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXECUTE FORMULA.Summary-->**EXECUTE FORMULA** ejecuta *instruccion* como una línea de código.<!-- END REF--> Este comando está diseñado para ser utilizado cuando necesita evaluar expresiones que el usuario puede construir o modificar. 

La cadena de instrucción debe ser de una sola línea. Si *instruccion* es una cadena vacía, **EXECUTE FORMULA** no hace nada. La regla es que si la instrucción puede ejecutarse como un método de una línea, entonces se ejecutará correctamente. El comando **EXECUTE FORMULA** debe utilizarse con precaución, ya que disminuye la velocidad de ejecución. En una base compilada, el código de la instrucción no está compilado. Esto significa que la instrucción será ejecutada, pero no será verificada por el compilador en el momento de la compilación.

**Nota:** la ejecución de fórmulas en modo compilado se puede optimizar utilizando una memoria caché (ver *Caché para fórmulas en modo compilado* abajo).

La *instrucción* puede incluir los siguientes elementos:

* una llamada a una función (método proyecto que devuelve un valor),
* una llamada a un comando 4D
* una tarea

La fórmula puede incluir variables proceso e interproceso. La instrucción no puede contener instrucciones de control de flujo (If, While, etc.), porque la instrucción debe tener sólo una línea de código.

Para asegurarse de que la *instruccion* sea evaluada correctamente independientemente del lenguaje o versión 4D utilizada, se recomienda utilizar la sintaxis tokenizada para los elementos cuyo nombre puede variar entre las diferentes versiones (comandos, tablas, campos, constantes). Por ejemplo, para insertar el comando [Current time](current-time.md), introduzca **'Current time:C178'**. Para más información, consulte *Utilizar tokens en fórmulas*.  

**Notas:** 

* Si la *instruccion* es un método proyecto, se recomienda utilizar [EXECUTE METHOD](execute-method.md) que le permite pasar parámetros.
* No se recomienda llamar a ningún comando de declaración de variable como [C\_DATE](c-date.md) en *instruccion* ya que puede generar conflictos en el código.

La fórmula puede incluir variables de proceso y variables entre procesos. Sin embargo, la declaración no puede contener el control de las instrucciones de flujo (If, While, etc.), ya que debe estar en una línea de código.

Para garantizar que la *instrucción* se evalúe correctamente, independientemente del lenguaje 4D o la versión utilizada, se recomienda utilizar la sintaxis del *token* para los elementos cuyo nombre puede variar entre diferentes versiones (comandos, tablas, campos, constantes). Por ejemplo, para insertar el comando \[#cmd id="178"/\], introduzca '**Current time:C178**'. Para más información al respecto, consulte *Utilizar tokens en fórmulas*. 

##### Caché para fórmulas en modo compilado 

Por optimización, cada fórmula ejecutada vía **EXECUTE FORMULA** en modo compilado se puede almacenar en una memoria caché en la memoria dedicada. La fórmula se almacena en caché en forma tokenizada. Una vez que se coloca en la caché, sus ejecuciones posteriores están altamente optimizadas ya que el paso de tokenización se evita.

El tamaño de la caché es cero por defecto (sin caché); debe ser creada o ajustada con el comando [SET DATABASE PARAMETER](set-database-parameter.md). Por ejemplo:

```4d
 SET DATABASE PARAMETER(Number of formulas in cache;0) //sin caché de fórmulas
 SET DATABASE PARAMETER(Number of formulas in cache;3) //hasta tres fórmulas se puede almacenar en caché para cada proceso
```

El comando **EXECUTE FORMULA** utiliza la caché sólo cuando se llama desde una base o componente compilado.

#### Ejemplo 

Usted desea ejecutar una fórmula incluida las llamadas a los comandos y tablas 4D. Dado que estos elementos potencialmente podrían ser renombrados, quiere asegurarse de la correcta ejecución de la instrucción en las versiones futuras de su aplicación utilizando la sintaxis *tokens*:

```4d
 EXECUTE FORMULA("Year of:C25 ([Products:5]Creation_Date:2])+$add")
```

#### Ver también 

[Command name](command-name.md)  
[EDIT FORMULA](edit-formula.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 63 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||



---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | Expresión a ejecutar al salir |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R4|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.defer.Summary-->El comando `defer` declara una expresión *exitFormula* que siempre se ejecutará al salir del método o de la función, incluso si se ha lanzado un error o se ha ejecutado un `return`<!-- END REF-->. Usar `defer` le permite garantizar que un método o una función termine correctamente ejecutando el código de finalización al salir. Además, este comando evita duplicar el mismo código de salida en cada bloque de retorno o de captura de errores.

:::tip Entrada de blog relacionada

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::

El comando `defer` puede llamarse en cualquier parte del código de un método o de una función, y puede insertar tantas expresiones `defer` como desee. Durante la ejecución, todas las expresiones *exitFormula* encontradas se apilan. Cuando se detiene la ejecución, sea cual sea el motivo (flujo normal, break, error, interrupción del usuario, return...), todas las expresiones de la pila diferida se desapilan y se ejecutan en orden LIFO (*Last In First Out*).

Por ejemplo:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// Al salir, las alertas mostrarán "2" y luego "1"
```

En *exitFormula*, pase la expresión que desea evaluar al salir del método o de la función, sin importar cómo haya terminado. Internamente, cada vez que se llama a `defer`, 4D convierte *exitFormula* en una [formula](../../commands/formula) y la añade a una pila asociada al método o a la función. Cuando finaliza el método o la función, todas las fórmulas almacenadas en la pila se evalúan en el orden en que aparecen en la colección.

Como ocurre con todas las [formulas](../../commands/formula), si la expresión *exitFormula* usa variables locales, sus valores actuales se copian y se almacenan en el objeto fórmula devuelto **cuando se coloca en la pila diferida**. Al ejecutarse, la fórmula utiliza esos valores copiados en lugar de los valores actuales de las variables locales.

:::note Notas

- Tenga en cuenta que las variables locales almacenan **referencias** para los valores de tipo [object](../../Concepts/dt_object.md#assignment) y [collection](../../Concepts/dt_collection.md#assignment).
- Si *exitFormula* contiene otra instrucción `defer`, se genera un error.

:::

Si la expresión *exitFormula* genera un error, este se intercepta e ignora automáticamente y el flujo de ejecución continúa sin interrupción.

## Ejemplo 1

Estos ejemplos ilustran las distintas expresiones *exitFormula* compatibles:

```4d
// Llamada de método
defer(aMethod)

// Llamada de una función de objeto
defer(myObject.aFunction(something))

// Llamada de una función singleton
defer(cs.aClass.me.aFunction(something))
```

## Ejemplo 2

Quiere asegurarse de que una referencia XML siempre se libere correctamente, para evitar posibles fugas de memoria:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## Ejemplo 3 

Quiere asegurarse de que la supervisión de actividad se detenga al final del método:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## Ejemplo 4 

Quiere controlar la generación de registros:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```

## Ver también 

[throw](../commands/throw)  
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1805 |
| Hilo seguro | no |

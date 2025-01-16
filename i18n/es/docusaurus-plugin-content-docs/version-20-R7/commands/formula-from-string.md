---
id: formula-from-string
title: Formula from string
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                             |
| ----------- | -------------------------------------------------------------------------- |
| 20 R3       | Soporte del parámetro *context*                                            |
| 17 R6       | Renombrado: New formula from string -> Formula from string |
| 17 R3       | Añadidos                                                                   |

</details>

<!-- REF #_command_.Formula from string.Syntax -->**Formula from string**( *formulaString* : Text ) : 4D.Function<br/>**Formula from string**( *formulaString* : Text ; *context* : Longint ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->

| Parámetros    | Tipo                        |     | Descripción                                                                                       |
| ------------- | --------------------------- | :-: | ------------------------------------------------------------------------------------------------- |
| formulaString | Text                        |  →  | Fórmula texto a devolver como objeto                                                              |
| context       | Number                      |  →  | `sk execute in current database` (por defecto) o `sk execute in host database` |
| Result        | 4D.Function |  ←  | Objeto nativo que encapsula la fórmula                                                            |

<!-- END REF -->

#### Descripción

El comando `Formula from string` <!-- REF #_command_.Formula from string.Summary -->crea un objeto `4D.Function` basado en *formulaString* y, opcionalmente, *context*<!-- END REF -->.  *formulaString* puede ser tan simple como un valor único o complejo, como un método proyecto con parámetros.

This command is similar to [`Formula`](formula.md), except that it handles a text-based formula and allows to define an execution context. Normalmente se recomienda utilizar el comando `Formula`, excepto si la fórmula original se expresó como texto (por ejemplo, almacenada externamente en un archivo JSON), o si desea crear una fórmula en una base de datos local mientras llama a `Formula from string` desde un componente. Se recomienda especialmente utilizar sintaxis con tokens con este comando.

> Dado que no se puede acceder al contenido de las variables locales por su nombre en el modo compilado, no se pueden utilizar en *formulaString*. Un intento de acceder a una variable local con `Formula from string` generará un error (-10737).

Si la fórmula se crea en un componente, puede considerar utilizar el parámetro *context*. Por defecto, dado que las fórmulas se ejecutan en el contexto en el que fueron creadas, no podrá llamar a una variable, función o método no compartido de la base de datos local. En este caso, puede pasar la constante `sk execute in host database` en el parámetro *context* para ejecutar el objeto `4D.Function` en el contexto de la base de datos local. Las siguientes constantes están disponibles:

| Constante                        | Tipo    | Descripción                                                                               |
| -------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| `sk execute in current database` | Integer | (por defecto) La fórmula se ejecutará en el contexto en el que se creó |
| `sk execute in host database`    | Integer | La fórmula se ejecutará en el contexto de la base de datos local                          |

#### Ejemplo

El siguiente código creará un diálogo que acepta una fórmula en formato texto:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](../assets/en/API/formulaDialog.png)

...y ejecuta la fórmula:

![](../assets/en/API/formulaAlert.png)

#### Ver también

[Formula](formula.md)\
[Parse formula](../commands-legacy/parse-formula.md)

#### Propiedades

|                |                                                                     |
| -------------- | ------------------------------------------------------------------- |
| Command number | 1601                                                                |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |

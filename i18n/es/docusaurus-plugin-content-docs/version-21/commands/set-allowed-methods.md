---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->

<!--REF #_command_.SET ALLOWED METHODS.Params-->

| Parámetros   | Tipo           |                             | Descripción                 |
| ------------ | -------------- | --------------------------- | --------------------------- |
| methodsArray | Array de texto | &#8594; | Array de nombres de métodos |

<!-- END REF-->

## Descripción

<!--REF #_command_.SET ALLOWED METHODS.Summary-->El comando **SET ALLOWED METHODS** designa los métodos proyecto que se pueden llamar a través de la aplicación.<!-- END REF-->

4D incluye un mecanismo de seguridad que filtra los métodos proyecto que se pueden introducir desde los siguientes contextos:

- El editor de fórmulas: los métodos autorizados aparecen al final de la lista de comandos por defecto y pueden utilizarse en las fórmulas (ver la sección *Descripción del editor de fórmulas*).
- El editor de etiquetas: los métodos permitidos aparecen en el menú **Aplicar** si también se comparten con el componente (ver la sección *Descripción del editor de etiquetas*).
- Fórmulas insertadas en áreas de texto con estilo o documentos 4D Write Pro a través del comando [ST INSERT EXPRESSION](../commands-legacy/st-insert-expression.md) - los métodos no permitidos se rechazan automáticamente.
- Documentos 4D View Pro - por defecto, si el comando [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) nunca ha sido llamado durante la sesión, las fórmulas de 4D View Pro sólo aceptan métodos definidos por **SET ALLOWED METHODS**. Sin embargo, se recomienda utilizar [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md). Ver [Declarando el método permitido](../ViewPro/formulas.md#declaring-allowed-methods).

Por defecto, si no se utiliza el comando **SET ALLOWED METHODS**, no se puede introducir ningún método (utilizar un método no autorizado en una expresión provoca un error).

En el parámetro *methodsArray*, pase el nombre de un array que contenga la lista de métodos a permitir. El array debe haber sido configurado previamente.

Puede utilizar el caracter comodín (@) en los nombres de métodos para definir uno o varios grupos de métodos autorizados.

Si desea que el usuario pueda llamar a comandos 4D que no están autorizados por defecto o a comandos plug-in, debe utilizar métodos específicos que manejen estos comandos.

**Nota:** el filtrado de fórmula puede ser deshabilitado para todos los usuarios o para el Diseñador y Administrador a través de [una opción en la página "Seguridad" de los Parámetros](../settings/security.md#options). Si la opción "Deshabilitado para todos" está seleccionada, el comando **SET ALLOWED METHODS** no tendrá efecto.

:::warning

Este comando sólo filtra la **entrada** de los métodos, no su **ejecución**. No controla la ejecución de las fórmulas creadas fuera de la aplicación.

:::

## Ejemplo

Este ejemplo autoriza a todos los métodos que empiezan por "formula" y al método "Total_general" a ser introducidos por el usuario en contextos protegidos:

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

## Ver también

[EDIT FORMULA](../commands-legacy/edit-formula.md)\
[GET ALLOWED METHODS](../commands-legacy/get-allowed-methods.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 805                         |
| Hilo seguro       | &cross; |



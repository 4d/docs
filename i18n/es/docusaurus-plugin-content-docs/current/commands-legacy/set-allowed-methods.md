---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *arrMetodos* )<!-- END REF-->
<!--REF #_command_.SET ALLOWED METHODS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrMetodos | Text array | &#x1F852; | Array de nombres de métodos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET ALLOWED METHODS.Summary-->El comando **SET ALLOWED METHODS** permite designar los métodos proyecto que pueden ser llamados directamente desde la aplicación.<!-- END REF-->

4D incluye un mecanismo de seguridad que filtra los métodos proyecto llamables de los siguientes contextos:

* El editor de fórmulas: los métodos permitidos aparecen al final de la lista de comandos por defecto y pueden utilizarse en fórmulas (ver la sección *Descripción del editor de fórmulas*).
* El editor de etiquetas: los métodos permitidos aparecen en el menú **Aplicar** si también se comparten con el componente (ver la sección *Descripción del editor de etiquetas*).
* Las fórmulas insertadas en las áreas de texto con estilo o documentos 4D Write Pro utilizando el comando [ST INSERT EXPRESSION](st-insert-expression.md) \- metodos no habilitados se rechazan automáticamente.
* Documentos 4D View Pro, por defecto, si el comando *VP SET ALLOWED METHODS* nunca se ha llamado durante la sesión, las fórmulas 4D View Pro sólo aceptan los métodos definidos por **SET ALLOWED METHODS**. Sin embargo, se recomienda utilizar *VP SET ALLOWED METHODS*. Ver *Referencias método proyecto*.

Por defecto, si no utiliza el comando **SET ALLOWED METHODS**, ningún método es llamable (utilizar un método no autorizado en una expresión, genera un error).

En el Parámetro *arrMetodos* pase el nombre del array que contiene la lista de métodos a ofrecer en el editor de fórmulas. El array debe haberse definido previamente.

Puede utilizar el carácter arroba (@) en los nombres de los métodos para definir uno o más grupos de métodos autorizados.

Si quiere que el usuario pueda llamar los comandos 4D no autorizados por defecto o a los comandos de plug-ins, debe utilizar los métodos específicos encargados de ejecutar estos comandos.

**Nota**: el filtrado de los comandos y métodos se puede deshabilitar para todos los usuarios o para el Diseñador y el Administrador a través de una opción de las Propiedades de la base (). Si la opción "Desactivada para todos" está seleccionada, el comando **SET ALLOWED METHODS** no tendrá efecto.

#### Ejemplo 

Este ejemplo autoriza todos los métodos que comienzan por “formula” y el método “Total\_general” a ser ejecutados por el usuario en contextos protegidos: 

```4d
 ARRAY TEXT(arrMetodos;2)
 arrMetodos{1}:="formula@"
 arrMetodos{2}:="Total_general"
 SET ALLOWED METHODS(arrMetodos)
```

#### Ver también 

[EDIT FORMULA](edit-formula.md)  
[GET ALLOWED METHODS](get-allowed-methods.md)  
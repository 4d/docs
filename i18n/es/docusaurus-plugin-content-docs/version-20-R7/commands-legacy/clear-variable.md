---
id: clear-variable
title: CLEAR VARIABLE
slug: /commands/clear-variable
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR VARIABLE.Syntax-->**CLEAR VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.CLEAR VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR VARIABLE.Summary-->CLEAR VARIABLE reinicia *variable* en el valor por defecto de su tipo (por ejemplo, cadena vacía para los tipos Alfa y Texto, *0* para las variables numéricas, ningún elemento para un array, etc.).<!-- END REF--> La variable continúa existiendo en memoria.

**Nota:** para más información sobre los valores de tipo predeterminados, consulte el párrafo *Valores por defecto*.

La variable que se pasa en *variable* puede ser una variable local, proceso o interproceso.

**Nota:** no es necesario borrar las variables proceso al terminar un proceso; 4D las borra automáticamente. De forma similar cada variable local se borra automáticamente cuando el método donde se ubica termina su ejecución.

#### Ejemplo 

En un formulario, utilice una lista desplegable llamada *asMiListaDesplegable* cuyo único propósito es la interfaz del usuario. En otras palabras, utilice este array durante la entrada de datos, pero una vez cierre el formulario, no utilice más este array. Por lo tanto, durante el evento On Unload, borre el array:

```4d
  //Método de objeto lista desplegable asMyDropDown
 Case of
    :(Form event code=On Load)
  //Inicializar el array de una manera u otra
       ARRAY TEXT(asMyDropDown;...)
  // ...
    :(Form event code=On Unload)
  //No necesita más el array
       CLEAR VARIABLE(asMyDropDown)
  // ...
 End case
```

#### Ver también 

[Undefined](undefined.md)  
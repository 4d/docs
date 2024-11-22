---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *objeto* ; *tecla* {; *modificadores*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable o campo(si se omite *) |
| tecla | Text | &#8594;  | Tecla a asociar al objeto |
| modificadores | Integer | &#8594;  | Máscara o combinación de máscaras de teclas de modificación |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->El comando **OBJECT SET SHORTCUT** permite definir o modificar dinámicamente el atajo de teclado asociado al objeto o a los objetos designados por los parámetros *objeto* y *\** para el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable o un campo. En este caso, pase una referencia en lugar de un nombre.  
  
En el parámetro *tecla*, pase una cadena indicando la tecla a asociar al objeto. Puede pasar:

* un nombre de tecla estándar, por ejemplo "B"
* o una constante del tema *Atajos de teclado* (o su valor) :  

| Constante                     | Tipo   | Valor           |  
| ----------------------------- | ------ | --------------- |  
| Shortcut with Backspace       | Cadena | \[backspace\]   |  
| Shortcut with Carriage Return | Cadena | \[return\]      |  
| Shortcut with Delete          | Cadena | \[del\]         |  
| Shortcut with Down arrow      | Cadena | \[down arrow\]  |  
| Shortcut with End             | Cadena | \[end\]         |  
| Shortcut with Enter           | Cadena | \[enter\]       |  
| Shortcut with Escape          | Cadena | \[esc\]         |  
| Shortcut with F1              | Cadena | \[F1\]          |  
| Shortcut with F10             | Cadena | \[F10\]         |  
| Shortcut with F11             | Cadena | \[F11\]         |  
| Shortcut with F12             | Cadena | \[F12\]         |  
| Shortcut with F13             | Cadena | \[F13\]         |  
| Shortcut with F14             | Cadena | \[F14\]         |  
| Shortcut with F15             | Cadena | \[F15\]         |  
| Shortcut with F2              | Cadena | \[F2\]          |  
| Shortcut with F3              | Cadena | \[F3\]          |  
| Shortcut with F4              | Cadena | \[F4\]          |  
| Shortcut with F5              | Cadena | \[F5\]          |  
| Shortcut with F6              | Cadena | \[F6\]          |  
| Shortcut with F7              | Cadena | \[F7\]          |  
| Shortcut with F8              | Cadena | \[F8\]          |  
| Shortcut with F9              | Cadena | \[F9\]          |  
| Shortcut with Help            | Cadena | \[help\]        |  
| Shortcut with Home            | Cadena | \[home\]        |  
| Shortcut with Left arrow      | Cadena | \[left arrow\]  |  
| Shortcut with Page down       | Cadena | \[page down\]   |  
| Shortcut with Page up         | Cadena | \[page up\]     |  
| Shortcut with Right arrow     | Cadena | \[right arrow\] |  
| Shortcut with Tabulation      | Cadena | \[tab\]         |  
| Shortcut with Up arrow        | Cadena | \[up arrow\]    |

En el parámetro *modificadores*, pase una o más teclas de modificación a asociar al atajo de teclado. Para definir el parámetro *modificadores*, pase una o más de las siguientes constantes de tipo "Mask" del tema *Eventos (Modificadores)*:  
  
| Constante        | Tipo         | Valor | Comentario                                             |
| ---------------- | ------------ | ----- | ------------------------------------------------------ |
| Command key mask | Entero largo | 256   | Tecla Ctrl en Windows, Tecla Comando en OS X           |
| Control key mask | Entero largo | 4096  | Tecla Ctrl bajo OS X, o clic derecho en Windows y OS X |
| Option key mask  | Entero largo | 2048  | Tecla Alt (también llamada Opción en OS X)             |
| Shift key mask   | Entero largo | 512   | Windows y OS X                                         |

  
**Nota**: si omite el parámetro *modificadores*, el objeto se activa tan pronto como se presiona la tecla definida. Por ejemplo, si se asocia la tecla "H" a un botón, este botón se activa cada vez que presione la tecla H. Este funcionamiento ser reserva para interfaces específicas.

#### Ejemplo 

Usted quiere asociar un atajo de teclado diferente en función del lenguaje actual de la aplicación. En el evento On Load form, puede escribir:

```4d
 Case of
       vLang="FR"
       OBJECT SET SHORTCUT(*;"SortButton";"T";Command key mask+Shift key mask) // Ctrl+Mayús+T en francés
       vLang="US"
       OBJECT SET SHORTCUT(*;"SortButton";"O";Command key mask+Shift key mask) // Ctrl+Mayús+O en inglés
 End case
```

#### Ver también 

[OBJECT GET SHORTCUT](object-get-shortcut.md)  
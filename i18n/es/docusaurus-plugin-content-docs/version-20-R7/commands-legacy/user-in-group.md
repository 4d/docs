---
id: user-in-group
title: User in group
slug: /commands/user-in-group
displayed_sidebar: docs
---

<!--REF #_command_.User in group.Syntax-->**User in group** ( *usuario* ; *grupo* ) : Boolean<!-- END REF-->
<!--REF #_command_.User in group.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuario | Text | &#8594;  | Nombre del usuario |
| grupo | Text | &#8594;  | Nombre del grupo |
| Resultado | Boolean | &#8592; | TRUE = el usuario está en el grupo FALSE = el usuario no está en el grupo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.User in group.Summary-->User in group devuelve TRUE si *usuario* está en *grupo*.<!-- END REF-->

**Nota:** este comando espera un nombre de cuenta de usuario en el parámetro *usuario* (no soporta alias de usuario). Si ha definido alias de usuario en su aplicación, pase el parámetro 4D user account al comando [Current user](current-user.md) para asegurarse de que devuelve una cuenta de usuario (ver el ejemplo).

#### Ejemplo 

El siguiente ejemplo busca facturas específicas. Si el usuario actual está en el grupo Executive, podrá acceder a los formularios que muestran información confidencial. Si el usuario no está en el grupo Executive, se muestra un formulario diferente:

```4d
 QUERY([Invoices];[Invoices]Retail>100)
 If(User in group(Current user(4D user account);"Executive"))
    FORM SET OUTPUT([Invoices];"Executive Output")
    FORM SET INPUT([Invoices];"Executive Input")
 Else
    FORM SET OUTPUT([Invoices];"Standard Output")
    FORM SET INPUT([Invoices];"Standard Input")
 End if
 MODIFY SELECTION([Invoices];*)
```

#### Ver también 

[Current user](current-user.md)  
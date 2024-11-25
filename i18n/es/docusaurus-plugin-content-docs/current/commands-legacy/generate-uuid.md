---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nuevo UUID en forma de texto no canónico (32 caracteres) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Generate UUID.Summary-->Generate UUID devuelve un nuevo identificador UUID de 32 caracteres en forma no canónica.<!-- END REF-->

Un UUID es un número de 16 bytes (128 bits). Contiene 32 caracteres hexadecimales. Puede expresarse en forma no canónica (series de 32 letras \[A-F, a-f\] y/o números \[0-9\], por ejemplo 550e8400e29b41d4a716446655440000) o en forma canónica (grupos de 8,4,4,4,12, por ejemplo 550e8400-e29b-41d4-a716-446655440000). 

En 4D, los números UUID pueden guardarse en campos. Para mayor información, consulte la sección *Formato UUID* en el manual de *Diseño*.

#### Ejemplo 

Generación de un UUID en una variable: 

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```

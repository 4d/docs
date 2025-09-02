---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<br>**Generate UUID**( *version* ) : Text<!-- END REF-->

<!--REF #_command_.Generate UUID.Params-->

| Parámetros | Tipo    |                             | Descripción                                                             |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------------------- |
| version    | Integer | &#8594; | Versión de UUID: 4 (por defecto) o 7 |
| Resultado  | Text    | &#8592; | Nuevo UUID como texto no canónico (32 caracteres)    |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                  |
| ----------- | ------------------------------- |
| 20 R10      | Soporte del parámetro *version* |

</details>

## Descripción

<!--REF #_command_.Generate UUID.Summary-->La función Generar UUID devuelve un nuevo identificador UUID de 32 caracteres en forma no canónica<!-- END REF-->.

Un UUID es un número de 16 bytes (128 bits). Contiene 32 caracteres hexadecimales. Puede expresarse en forma no canónica (serie de 32 letras \[A-F, a-f\] y/o números \[0-9\], por ejemplo 550e8400e29b41d4a716446655440000) o en forma canónica (grupos de 8,4,4,4,12, por ejemplo 550e8400-e29b-41d4-a716-446655440000).

Puede utilizar el parámetro opcional *version* para definir la **versión de UID** a generar. Se aceptan los siguientes valores:

- **4** (por defecto si se omite), para UUID totalmente aleatorios
- **7**, para UUID aleatorios y de marca de tiempo (el orden cronológico coincide con el orden léxico).

:::note

Para más información sobre UUID versión 7, lea [esta entrada de blog](https://blog.4d.com/sort-uuids-with-version-7).

:::

En 4D, los números UUID pueden almacenarse en campos (ver [Formato UUID](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.en.html#106190). Una [opción de configuración 4D](../settings/database.md#auto-uuid-version) permite generar UUIDs de la versión 7 en campos automáticos.

## Ejemplo

Generación de un UUID en una variable:

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1066                        |
| Hilo seguro       | &check; |



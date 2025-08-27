---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<br>**Generate UUID**( *version* ) : Text<!-- END REF-->

<!--REF #_command_.Generate UUID.Params-->

| Paramètres | Type    |                             | Description                                                       |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------------- |
| version    | Integer | &#8594; | UUID version: 4 (default) or 7 |
| Résultat   | Text    | &#8592; | New UUID as non-canonical text (32 characters) |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                  |
| ------- | ------------------------------ |
| 20 R10  | Support of *version* parameter |

</details>

## Description

<!--REF #_command_.Generate UUID.Summary-->The Generate UUID returns a new 32-character UUID identifier in non-canonical form<!-- END REF-->.

An UUID is a 16-byte number (128 bits). It contains 32 hexadecimal characters. It can be expressed either in non-canonical form (series of 32 letters \[A-F, a-f\] and/or numbers \[0-9\], for example 550e8400e29b41d4a716446655440000) or in canonical form (groups of 8,4,4,4,12, for example 550e8400-e29b-41d4-a716-446655440000).

You can use the optional *version* parameter to set the **UUID version** to generate. The following values are accepted:

- **4** (default if omitted), for fully random UUIDs
- **7**, for random and timestamp UUIDs (chronological order matches lexical order).

:::note

For more information on UUID version 7, please read [this blog post](https://blog.4d.com/sort-uuids-with-version-7).

:::

In 4D, UUID numbers can be stored in fields (see [UUID Format](https://doc.4d.com/4Dv20/4D/20.2/Field-properties.300-6750280.en.html#106190). A [4D settings option](../settings/database.md#auto-uuid-version) allows generating version 7 UUIDs in automatic fields.

## Exemple

Generation of a UUID in a variable:

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1066                        |
| Thread safe        | &check; |



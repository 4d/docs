---
id: records-in-table
title: Records in table
slug: /commands/records-in-table
displayed_sidebar: docs
---

<!--REF #_command_.Records in table.Syntax-->**Records in table** {( *laTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in table.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle retourner le nombre total d'enregistrements ou Table par défaut si ce paramètre est omis |
| Résultat | Integer | &#8592; | Nombre total d'enregistrements dans table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Records in table.Summary-->**Records in table** retourne le nombre total d'enregistrements que contient *laTable*.<!-- END REF--> Par opposition, [Records in selection](records-in-selection.md) retourne le nombre d'enregistrements de la sélection courante uniquement. Lorsque cette commande est utilisée dans une transaction, les enregistrements éventuellement créés pendant la transaction sont comptabilisés.

#### Exemple 

L'exemple suivant affiche une alerte indiquant le nombre d'enregistrements de la table :

```4d
 ALERT("Il y a "+String(Enregistrements dans table([Personnes]))+" enregistrements dans la table.")
```

#### Voir aussi 

[Records in selection](records-in-selection.md)  
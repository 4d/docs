---
id: default-table
title: DEFAULT TABLE
slug: /commands/default-table
displayed_sidebar: docs
---

<!--REF #_command_.DEFAULT TABLE.Syntax-->**DEFAULT TABLE** ( *laTable* )<!-- END REF-->
<!--REF #_command_.DEFAULT TABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à définir comme table par défaut |

<!-- END REF-->

#### Description 

<!--REF #_command_.DEFAULT TABLE.Summary-->**Conseil :** Bien que l'appel de **DEFAULT TABLE** et l'omission du nom de la table rendent le code plus lisible, la plupart des programmeurs estiment que l'utilisation de cette commande apporte plus d'inconvénients que d'avantages.<!-- END REF-->  
En particulier, notez que [DEFAULT TABLE](default-table.md) est prioritaire lorsque vous utilisez par exemple la commande [DIALOG](dialog.md) avec un formulaire projet et qu'un formulaire de la table par défaut a le même nom.

**DEFAULT TABLE** désigne *laTable* comme la table par défaut pour le process courant.

Un process n'a pas de table par défaut tant que la commande **DEFAULT TABLE** n'a pas été exécutée. Après qu'une table par défaut ait été désignée, toute commande pour laquelle le paramètre *laTable* n'a pas été défini s'appliquera à la table par défaut. Considérez par exemple l'instruction suivante :

```4d
 FORM SET INPUT([maTable];"Formulaire")
```

Si \[maTable\] a préalablement été définie comme table par défaut, la même instruction pourrait s'écrire :

```4d
 FORM SET INPUT("Formulaire")
```

Une des raisons pour lesquelles vous pouvez définir une table par défaut est l'écriture de code qui ne soit pas lié à une table. Cela permet au même code d'être appliqué à différentes tables.  
Vous pouvez aussi utiliser des pointeurs vers des tables pour écrire du code non lié aux tables. Pour plus d'informations sur cette technique, reportez-vous à la description de la commande [Table name](table-name.md).

**DEFAULT TABLE** ne permet pas d'omettre les noms de tables lorsque vous vous référez à des champs. Par exemple :

```4d
 [MaTable]MonChamp:="Une chaîne" // OK
```

ne peut pas s'écrire :

```4d
 DEFAULT TABLE([MaTable])
 MonChamp:="Une chaîne" // Incorrect
```

... simplement parce qu'une table par défaut a été définie. 

Dans 4D, toutes les tables sont “ouvertes” et prêtes à être utilisées. **DEFAULT TABLE** n'ouvre pas de table, ne définit pas de table courante et ne prépare pas de table pour la saisie ou l'affichage. **DEFAULT TABLE** est simplement une facilité de programmation proposée pour accélérer la saisie du code et le rendre plus facile à lire.

#### Exemple 

L'exemple suivant présente la même méthode avec et sans la commande **DEFAULT TABLE**. Le code est une boucle souvent utilisée pour créer de nouveaux enregistrements dans une base. Les commandes [FORM SET INPUT](form-set-input.md) et [ADD RECORD](add-record.md) nécessitent le nom d'une table comme premier paramètre :

```4d
 FORM SET INPUT([Clients];"Ajout Enrg")
 Repeat
    ADD RECORD([Clients])
 Until(OK=0)
```

Voici le résultat lorsqu'une table par défaut est définie :

```4d
 DEFAULT TABLE([Clients])
 FORM SET INPUT("Ajout Enrg")
 Repeat
    ADD RECORD
 Until(OK=0)
```

#### Voir aussi 

[Current default table](current-default-table.md)  
[NO DEFAULT TABLE](no-default-table.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 46 |
| Thread safe | &check; |
| Interdite sur le serveur ||



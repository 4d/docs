---
id: qr-find-column
title: QR Find column
slug: /commands/qr-find-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Find column.Syntax-->**QR Find column** ( *zone* ; *expression* ) -> Résultat<!-- END REF-->
<!--REF #_command_.QR Find column.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &rarr; | Référence de la zone |
| expression | Text, Pointer | &rarr; | Objet de colonne |
| Résultat | Integer | &larr; | Numéro de colonne |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR Find column.Summary-->La commande **QR Find column** retourne le numéro de la première colonne de la *zone* dont le contenu correspond à l'*expression* passée en paramètre.<!-- END REF--> 

*expression* peut contenir soit une chaîne soit un pointeur. 

**QR Find column** retourne -1 si la recherche n'aboutit pas.

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

#### Exemple 

Le code suivant permet de récupérer le numéro de la colonne contenant le champ \[G.ER Tests\]Quarter puis de supprimer la colonne :

```4d
 $NumColonne:=QR Find column(MaZone;->[G.ER Tests]Quarter)
```

ou :

```4d
 $NumColonne:=QR Find column(MaZone;"[G.ER Tests]Quarter")
```

suivi de :

```4d
 If($NumColonne#-1)
    QR DELETE COLUMN(MaZone;$NumColonne)
 End if
```

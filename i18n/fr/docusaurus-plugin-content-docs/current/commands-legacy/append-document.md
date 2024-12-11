---
id: append-document
title: Append document
slug: /commands/append-document
displayed_sidebar: docs
---

<!--REF #_command_.Append document.Syntax-->**Append document** ( *nomFichier* {; *typeFichier*} ) : Time<!-- END REF-->
<!--REF #_command_.Append document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom du document ou Chemin d'accès complet au document ou Chaîne vide pour afficher la boîte de dialogue standard d'ouverture de fichiers |
| typeFichier | Text | &#8594;  | Liste des types de documents à filtrer, ou "*" pour ne pas filtrer les documents |
| Résultat | Time | &#8592; | Numéro de référence du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Append document.Summary-->La commande **Append document** "fait la même chose" que la commande [Open document](open-document.md) : elle vous permet d'ouvrir un document sur disque et de se placer à la fin du document.<!-- END REF--> 

La seule différence est que **Append document** se place initialement à la fin du document, alors que [Open document](open-document.md) se place au début. 

Pour plus d'informations, reportez-vous à la description de la commande [Open document](open-document.md).

#### Exemple 

L'exemple suivant ouvre un document existant qui s'appelle “Note”, ajoute à la fin du document la chaîne “ et à bientôt” suivie d'un retour chariot puis le referme. Si le document contenait déjà la chaîne “Au revoir”, il contiendra la chaîne “Au revoir et à bientôt” suivie d'un retour chariot :

```4d
 var vDoc : Time
 vDoc:=Append document("Note.txt") // Ouvrir le document Note
 SEND PACKET(vDoc;" et à bientôt"+Char(13)) // Ajouter la chaîne
 CLOSE DOCUMENT(vDoc) // Fermer le document
```

#### Voir aussi 

[Create document](create-document.md)  
[Open document](open-document.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 265 |
| Thread safe | &check; |
| Modifie les variables | OK, Document, error |
| Interdite sur le serveur ||



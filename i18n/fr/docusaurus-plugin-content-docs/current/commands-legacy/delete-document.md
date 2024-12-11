---
id: delete-document
title: DELETE DOCUMENT
slug: /commands/delete-document
displayed_sidebar: docs
---

<!--REF #_command_.DELETE DOCUMENT.Syntax-->**DELETE DOCUMENT** ( *nomFichier* )<!-- END REF-->
<!--REF #_command_.DELETE DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom de document ou Chemin d'accès complet au document |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE DOCUMENT.Summary-->**DELETE DOCUMENT** supprime le document dont vous avez passé le nom dans *document*.<!-- END REF-->

Si le nom du document ou le chemin d'accès saisi est incorrect, une erreur est générée.

Si le document est ouvert lorsque la commande est appelée, le résultat dépend du système d'exploitation :

* sur Windows, une erreur est générée,
* sur macOS, aucune erreur n'est générée et le document est supprimé.

**DELETE DOCUMENT** n'accepte pas de chaîne vide dans le paramètre *document*. Si vous passez une chaîne vide, la boîte de dialogue standard d'ouverture de fichiers ne s'affiche pas et une erreur est générée.

**Attention :** **DELETE DOCUMENT** peut supprimer tout fichier disque, y compris des fichiers créés par d'autres applications ou les applications elles-mêmes. La commande **DELETE DOCUMENT** doit donc être utilisée avec précaution. La suppression d'un document est une opération définitive et irréversible.

#### Exemple 1 

L'exemple suivant supprime le document appelé Note :

```4d
 DELETE DOCUMENT("Note") // Suppression du document
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md).

#### Variables et ensembles système 

La suppression d'un document met la variable système OK à 1\. Si **DELETE DOCUMENT** ne peut pas supprimer le document, la variable système OK prend la valeur 0.

#### Voir aussi 

[Test path name](test-path-name.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 159 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||



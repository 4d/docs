---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->**CLOSE DOCUMENT** ferme le document spécifié par *docRef*.<!-- END REF-->

Fermer un document est le seul moyen de s'assurer que les données écrites dans le fichier sont sauvegardées. Vous devez fermer tous les documents ouverts par les commandes [Open document](open-document.md), [Create document](create-document.md) et [Append document](append-document.md).

#### Exemple 

L'exemple suivant permet à l'utilisateur de créer un nouveau document, écrit la chaîne “Bonjour”, puis le referme :

```4d
 var vDoc : Time
 vDoc:=Create document("")
 If(OK=1)
    SEND PACKET(vDoc;"Bonjour") // Ecrire un mot dans le document
    CLOSE DOCUMENT(vDoc) // Fermer le document
 End if
```

#### Voir aussi 

[Append document](append-document.md)  
[Create document](create-document.md)  
[Open document](open-document.md)  
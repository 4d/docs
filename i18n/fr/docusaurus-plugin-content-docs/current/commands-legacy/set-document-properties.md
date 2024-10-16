---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *nomFichier* ; *verrouillé* ; *invisible* ; créé le ; créé à  ; modifié le ; modifié à )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &rarr; | Nom du document ou Chemin d'accès complet au document |
| verrouillé | Boolean | &rarr; | Verrouillé (Vrai) ou non verrouillé (Faux) |
| invisible | Boolean | &rarr; | Invisible (Vrai) ou visible (Faux) |
| créé le | Date | &rarr; | Date de création |
| créé à | Heure | &rarr; | Heure de création |
| modifié le | Date | &rarr; | Date de dernière modification |
| modifié à | Heure | &rarr; | Heure de dernière modification |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->La commande **SET DOCUMENT PROPERTIES** modifie certaines informations du document dont vous avez passé le nom ou le chemin d'accès dans *document*.<!-- END REF-->

Avant l'appel :

* Passez Vrai dans *verrouillé* pour verrouiller le document. Un document verrouillé ne peut être modifié. Passez Faux dans *verrouillé* pour déverrouiller un document.
* Passez Vrai dans *invisible* pour cacher le document. Passez Faux dans *invisible* pour rendre le document visible dans les fenêtres du bureau.
* Passez la date et l'heure de création du document dans *créé le* et *créé à*.
* Passez la date et l'heure de la dernière modification du document dans *modifié le* et *modifié à*.

L'heure et la date de création et de dernière modification sont gérées par le gestionnaire de fichiers de votre système, à chaque fois que vous créez ou modifiez un document. Cette commande vous permet de modifier ces propriétés, dans des buts particuliers. Reportez-vous à l'exemple de la commande [GET DOCUMENT PROPERTIES](get-document-properties.md).

#### Voir aussi 

*\_o\_SET DOCUMENT CREATOR*  
*\_o\_SET DOCUMENT TYPE*  
[GET DOCUMENT PROPERTIES](get-document-properties.md)  
---
id: form-get-horizontal-resizing
title: FORM GET HORIZONTAL RESIZING
slug: /commands/form-get-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Syntax-->**FORM GET HORIZONTAL RESIZING** ( *redimension* {; *largeurMini* {; *largeurMaxi*}} )<!-- END REF-->
<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| redimension | Boolean | &#8592; | Vrai : le formulaire est redimensionnable horizontalement, Faux : le formulaire n'est pas redimensionnable horizontalement |
| largeurMini | Integer | &#8592; | Largeur minimale du formulaire (pixels) |
| largeurMaxi | Integer | &#8592; | Largeur maximale du formulaire (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET HORIZONTAL RESIZING.Summary-->La commande **FORM GET HORIZONTAL RESIZING** retourne dans les variables *redimension*, *largeurMini* et *largeurMaxi* les propriétés de redimensionnement horizontal du formulaire courant.<!-- END REF--> Ces propriétés peuvent avoir été définies pour le formulaire dans l’éditeur de formulaires en mode Développement ou pour le process courant via la commande [FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md).

#### Voir aussi 

[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1077 |
| Thread safe | &check; |
| Interdite sur le serveur ||



---
id: form-get-vertical-resizing
title: FORM GET VERTICAL RESIZING
slug: /commands/form-get-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET VERTICAL RESIZING.Syntax-->**FORM GET VERTICAL RESIZING** ( *redimension* {; *hauteurMini* {; *hauteurMaxi*}} )<!-- END REF-->
<!--REF #_command_.FORM GET VERTICAL RESIZING.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| redimension | Booléen | &#x1F858; | Vrai : le formulaire est redimensionnable verticalement, Faux : le formulaire n'est pas redimensionnable verticalement |
| hauteurMini | Entier long | &#x1F858; | Hauteur minimale du formulaire (pixels) |
| hauteurMaxi | Entier long | &#x1F858; | Hauteur maximale du formulaire (pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM GET VERTICAL RESIZING.Summary-->La commande **FORM GET VERTICAL RESIZING** retourne dans les variables *redimension*, *hauteurMini* et *hauteurMaxi* les propriétés de redimensionnement vertical du formulaire courant.<!-- END REF--> Ces propriétés peuvent avoir été définies pour le formulaire dans l’éditeur de formulaires en mode Développement ou pour le process courant via la commande [FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md).

#### Voir aussi 

[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  
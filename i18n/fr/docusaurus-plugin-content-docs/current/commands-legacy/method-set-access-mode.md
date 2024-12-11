---
id: method-set-access-mode
title: METHOD SET ACCESS MODE
slug: /commands/method-set-access-mode
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET ACCESS MODE.Syntax-->**METHOD SET ACCESS MODE** ( *mode* )<!-- END REF-->
<!--REF #_command_.METHOD SET ACCESS MODE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| mode | Integer | &#8594;  | Mode d’accès aux objets verrouillés |

<!-- END REF-->

#### Description 

<!--REF #_command_.METHOD SET ACCESS MODE.Summary-->La commande **METHOD SET ACCESS MODE** vous permet de définir le comportement de 4D lorsque vous tentez d’accéder en écriture à un objet déjà chargé en modification par un autre utilisateur ou process.<!-- END REF-->La portée de cette commande est la session.

Passez dans *mode* une des constantes suivantes du thème *Accès objets développement* :

| Constante                | Type        | Valeur | Comment                                                                                                                                                                         |
| ------------------------ | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On object locked abort   | Entier long | 0      | Le chargement de l’objet est abandonné (fonctionnement par défaut)                                                                                                              |
| On object locked confirm | Entier long | 2      | 4D affiche une boîte de dialogue vous permettant de choisir de réessayer ou d’abandonner. En mode distant, cette option n’est pas prise en charge (le chargement est abandonné) |
| On object locked retry   | Entier long | 1      | 4D tente de charger l’objet jusqu’à ce qu’il soit libéré                                                                                                                        |


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1191 |
| Thread safe | &check; |
| Interdite sur le serveur ||



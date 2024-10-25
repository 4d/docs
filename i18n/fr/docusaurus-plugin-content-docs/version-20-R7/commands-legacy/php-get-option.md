---
id: php-get-option
title: PHP GET OPTION
slug: /commands/php-get-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *option* ; *valeur* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option à lire |
| valeur | Boolean | &#8592; | Valeur courante de l’option |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


:::info Compatibilité

**PHP est obsolète dans 4D**. Il est désormais recommandé d'utiliser la classe [`4D.SystemWorker`](../API/SystemWorkerClass.md).

:::

#### Description 

<!--REF #_command_.PHP GET OPTION.Summary-->La commande **PHP GET OPTION** permet de connaître la valeur courante d’une option relative à l’éxécution de scripts PHP.<!-- END REF--> 

Passez dans le paramètre *option* une constante du thème *PHP* désignant l’option à lire. La commande retourne dans le paramètre *valeur* la valeur courante de l’option. Vous pouvez passer une des constantes suivantes :

| Constante           | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \_o\_PHP privileges | Entier long | 1      | *\*\*\*\* Sélecteur désactivé \*\*\*\**                                                                                                                                                                                                                                                                                                                                          |
| PHP raw result      | Entier long | 2      | Définition du mode de traitement des en-têtes HTTP renvoyés par PHP dans le résultat de l’exécution lorsque ce résultat est de type texte (lorsque le résultat est de type BLOB, les en-têtes sont toujours conservés).<br/>**Valeur(s) possible(s)** : Booléen. Faux (valeur par défaut) = supprimer les en-têtes HTTP du résultat. Vrai = conserver les en-têtes HTTP. |

**Note :** Seul le compte utilisateur est retourné lorsque vous utilisez l'option PHP privileges avec la commande **PHP GET OPTION** (le mot de passe n'est pas retourné).

#### Voir aussi 

[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  
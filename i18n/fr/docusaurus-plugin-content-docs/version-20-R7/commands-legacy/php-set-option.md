---
id: php-set-option
title: PHP SET OPTION
slug: /commands/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *option* ; *valeur* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Numéro d’option à définir |
| valeur | Boolean | &#8594;  | Nouvelle valeur de l’option |
| * | Opérateur | &#8594;  | Si passé : la modification ne s’applique qu’à l’appel suivant |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


:::info Compatibilité

**PHP est obsolète dans 4D**. Il est désormais recommandé d'utiliser la classe [`4D.SystemWorker`](../API/SystemWorkerClass.md).

:::

#### Description 

<!--REF #_command_.PHP SET OPTION.Summary-->La commande **PHP SET OPTION** permet de définir des options spécifiques avant un appel à la commande [PHP Execute](php-execute.md).<!-- END REF--> La portée de cette commande est le process courant. 

Passez dans le paramètre *option* une constante du thème *PHP* désignant l’option à modifier et dans le paramètre *valeur*, la nouvelle valeur de l’option. 

| Constante      | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PHP raw result | Entier long | 2      | Définition du mode de traitement des en-têtes HTTP renvoyés par PHP dans le résultat de l’exécution lorsque ce résultat est de type texte (lorsque le résultat est de type BLOB, les en-têtes sont toujours conservés).<br/>**Valeur(s) possible(s)** : Booléen. Faux (valeur par défaut) = supprimer les en-têtes HTTP du résultat. Vrai = conserver les en-têtes HTTP. |

Par défaut, **PHP SET OPTION** définit l’option pour tous les appels à [PHP Execute](php-execute.md) ultérieurs du process. Si vous souhaitez la définir pour le prochain appel uniquement, passez le paramètre étoile (*\**).

#### Voir aussi 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  
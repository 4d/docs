---
id: wa-create-url-history-menu
title: WA Create URL history menu
slug: /commands/wa-create-url-history-menu
displayed_sidebar: docs
---

<!--REF #_command_.WA Create URL history menu.Syntax-->**WA Create URL history menu** ( {* ;} *objet* {; *direction*} ) : Text<!-- END REF-->
<!--REF #_command_.WA Create URL history menu.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| direction | Integer | &#8594;  | 0 ou omis=Liste des URLs précédents, 1=Liste des URLs suivants |
| Résultat | Text | &#8592; | Référence du menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.WA Create URL history menu.Summary-->La commande **WA Create URL history menu** crée et remplit un menu pouvant être utilisé directement pour la navigation parmi les URLs visités au cours de la session dans la zone Web désignée par les paramètres *\** et *objet*.<!-- END REF--> Elle permet de construire une interface de navigation personnalisée.

Les informations fournies concernent la session, c’est-à-dire la navigation effectuée dans une même zone Web tant que le formulaire n’a pas été refermé.

Passez dans *direction* une valeur indiquant la liste à récupérer. Vous pouvez utiliser l’une des constantes suivantes, placées dans le thème "*Zone Web*" :

| Constante        | Type        | Valeur |
| ---------------- | ----------- | ------ |
| WA next URLs     | Entier long | 1      |
| WA previous URLs | Entier long | 0      |

Si vous omettez le paramètre *direction*, la valeur 0 est utilisée.

Une fois le menu généré, vous pouvez l’afficher via la commande de 4D [Dynamic pop up menu](dynamic-pop-up-menu.md) et le manipuler via les commandes standard de gestion des menus de 4D. La chaîne retournée par la commande [Dynamic pop up menu](dynamic-pop-up-menu.md) contient l’URL de la page visitée (voir exemple).

Appelez la commande [RELEASE MENU](release-menu.md) pour supprimer un menu historique d’URL lorsqu’il est devenu inutile.

**Note de compatibilité :* A partir de 4D v19 R5, cette commande remplit un menu uniquement avec l'URL courante des zones web à l'aide du moteur de rendu du système de Windows.*

#### Exemple 

Le code suivant pourrait être associé à un bouton 3D avec pop up menu libellé "Précédent" :

```4d
 Case of
    :(Form event code=On Clicked) //Clic simple
       WA OPEN BACK URL(WA_zone)
    :(Form event code=On Alternative Click) //Clic sur la flèche -> affichage du pop up
  //Créer un menu historique précédent
       $Menu:=WA Create URL history menu(WA_zone;wa URLs précédents)
  //Afficher ce menu dans un pop up
       $URL:=Dynamic pop up menu($Menu)
       If($URL#"") //Si une ligne est sélectionnée
          WA OPEN URL(WA_zone;$URL) // Ouvrir la page Web
       End if
       RELEASE MENU($Menu) //Effacer le menu pour libérer la mémoire
 End case
```

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[WA GET URL HISTORY](wa-get-url-history.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1049 |
| Thread safe | &check; |
| Interdite sur le serveur ||



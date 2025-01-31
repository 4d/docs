---
id: hide-window
title: HIDE WINDOW
slug: /commands/hide-window
displayed_sidebar: docs
---

<!--REF #_command_.HIDE WINDOW.Syntax-->**HIDE WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.HIDE WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process courant si omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIDE WINDOW.Summary-->La commande **HIDE WINDOW** permet de masquer la fenêtre dont vous avez passé le numéro de référence dans *fenêtre* ou, si ce paramètre est omis, la fenêtre de premier plan du process courant.<!-- END REF--> Cette commande vous permet, par exemple, dans un process comportant plusieurs fenêtres, de ne conserver à l'écran que la fenêtre active. 

La fenêtre disparaît de l'écran mais reste ouverte. Vous pouvez continuer à lui appliquer par programmation tout traitement supporté par les fenêtres 4D. 

Pour réafficher une fenêtre masquée par **HIDE WINDOW** :

* Utilisez la commande [SHOW WINDOW](show-window.md) et passez-lui le numéro de référence de la fenêtre.
* Ou bien, utilisez la page **Process** de l'Explorateur d'exécution. Sélectionnez le process dans lequel la fenêtre est gérée (process de gestion de la fenêtre ou Process principal) puis cliquez sur le bouton **Montrer**.

Si vous souhaitez cacher toutes les fenêtres d'un process, utilisez la commande [HIDE PROCESS](hide-process.md).

#### Exemple 

Cet exemple est la méthode d'un bouton placé dans un formulaire entrée. Ce bouton ouvre une boîte de dialogue dans une nouvelle fenêtre du même process. Vous souhaitez masquer les autres fenêtres du process (un formulaire de saisie et une palette d'outils) afin de ne présenter que la boîte de dialogue. Une fois que celle-ci a été validée, vous réaffichez les fenêtres du process.

```4d
  // Méthode objet du bouton "Informations"
 
 HIDE WINDOW(Saisie) // Masquer la fenêtre de saisie
 HIDE WINDOW(Palette) // Masquer la palette
 $Infos:=Open window(20;100;500;400;8) // Créer la fenêtre d'informations
 ... // Placer ici les instructions nécessaires au remplissage et à la gestion du dialogue
 CLOSE WINDOW($Infos) // Fermer le dialogue
 SHOW WINDOW(Saisie)
 SHOW WINDOW(Palette) // Réafficher les autres fenêtres du process
```

#### Voir aussi 

[SHOW WINDOW](show-window.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 436 |
| Thread safe | &cross; |



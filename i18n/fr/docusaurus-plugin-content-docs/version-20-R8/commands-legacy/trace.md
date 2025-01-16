---
id: trace
title: TRACE
slug: /commands/trace
displayed_sidebar: docs
---

<!--REF #_command_.TRACE.Syntax-->**TRACE**<!-- END REF-->
<!--REF #_command_.TRACE.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRACE.Summary-->La commande **TRACE** est utilisée, lors du développement des bases, pour tracer des méthodes, c'est-à-dire contrôler leur exécution pas à pas.<!-- END REF-->

La commande **TRACE** affiche le débogueur de 4D dans le process courant. La fenêtre du *Débogueur* apparaît dès que la commande est appelée, avant l'exécution de la ligne de code suivante, et reste affichée pour l'exécution de chaque ligne de code. Vous pouvez également appeler manuellement le débogueur en utilisant la combinaison **Alt+Maj+clic droit** sous Windows ou **Control+Option+Commande+clic** sous Mac OS pendant l'exécution du code. 

Dans les bases compilées, cette commande est ignorée.

**4D Server :** Si vous appelez **TRACE** depuis une méthode projet exécutée en tant que Procédure stockée, la fenêtre du débogueur apparaîtra sur le poste serveur.

**Conseil :** N'appelez pas **TRACE** lorsque vous utilisez un formulaire pour lequel les événements On Activate et On Deactivate ont été sélectionnés. En effet, chaque fois que la fenêtre du débogueur apparaîtra, les événements formulaire seront activés et cela créera une boucle sans fin entre les événements et le débogueur. De même, si vous appelez la commande **TRACE** depuis une méthode formulaire ou objet exécutée pendant la mise à jour du formulaire à l'écran, vous devrez également faire face à un problème de répétition sans fin de la séquence mises à jour du formulaire/apparitions de la fenêtre du débogueur.   
Si vous vous retrouvez dans une telle situation, pour en sortir, utilisez la combinaison **Maj+clic** sur le bouton **Reprendre exécution** du débogueur. Tous les appels ultérieurs à **TRACE** dans le process seront ignorés. 

#### Exemple 

Dans le code suivant, la variable process *CREER\_LANG* doit être égale à “US” ou “FR”. Si ce n'est pas le cas, la méthode projet DEBUG est appelée :

```4d
  // ...
 Case of
    :(CREER_LANG="US")
       vsBHCmdNom:=[Commandes]CM US Nom
    :(CREER_LANG="FR")
       vsBHCmdNom:=[Commandes]CM FR Nom
    Else
       DEBUG("Valeur de CREER_LANG incorrecte")
 End case
```

La méthode projet DEBUG est listée ci-dessous :

```4d
  // Méthode projet DEBUG
  // DEBUG (Texte)
  // DEBUG (Informations supplémentaires de débogage)
 
 var $1 : Text
 
 If(◊vbDebugOn) // Variable interprocess définie dans la méthode base Sur ouverture
    If(Is compiled mode)
       If(Count parameters>=1)
          ALERT($1+Char(13)+"Appelez le concepteur au 05 05 05 05")
       End if
    Else
       TRACE
    End if
 End if
```


#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 157 |
| Thread safe | &check; |



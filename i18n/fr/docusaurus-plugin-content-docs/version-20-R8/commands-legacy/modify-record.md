---
id: modify-record
title: MODIFY RECORD
slug: /commands/modify-record
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY RECORD.Syntax-->**MODIFY RECORD** ( {*laTable*}{;}{*} )<!-- END REF-->
<!--REF #_command_.MODIFY RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle modifier des données ou Table par défaut si ce paramètre est omis |
| * | Operator |  &#8594;  | Cacher les barres de défilement |

<!-- END REF-->

#### Description 

<!--REF #_command_.MODIFY RECORD.Summary-->La commande **MODIFY RECORD** permet à l'utilisateur de modifier l'enregistrement courant de *laTable*, ou de la table par défaut si ce paramètre est omis.<!-- END REF--> **MODIFY RECORD** charge depuis le disque l'enregistrement courant pour le process en cours (s'il n'est pas déjà chargé par un autre utilisateur/process) et l'affiche dans le formulaire entrée courant. S'il n'y a pas d'enregistrement courant, **MODIFY RECORD** ne fait rien. **MODIFY RECORD** ne change pas la sélection courante. 

Le formulaire est affiché dans la fenêtre se trouvant au premier plan du process. Elle comporte des barres de défilement et une case de contrôle de taille. Si vous passez le paramètre optionnel astérisque (\*), ces éléments n'apparaîtront pas.

Pour que vous puissiez utiliser **MODIFY RECORD**, l'enregistrement courant doit être en Lecture/écriture et ne doit pas être verrouillé.

Si le formulaire comporte des boutons de navigation parmi les enregistrements de la sélection, ils restent utilisables, ce qui permet à l'utilisateur de modifier des enregistrements puis de se déplacer pour en modifier d'autres.

L'enregistrement est sauvegardé si l'utilisateur clique sur un bouton du type Valider ou appuie sur la touche **Entrée**, ou encore si la commande [ACCEPT](accept.md) est exécutée. 

L'enregistrement n'est pas sauvegardé si l'utilisateur clique sur un bouton du type **Annuler** ou appuie sur la touche d'annulation (**Echap** sous Windows, **Esc** sous Mac OS), ou encore si la commande [CANCEL](cancel.md) est exécutée. 

Après un appel à **MODIFY RECORD**, la variable système OK prend la valeur 1 si l'enregistrement est validé, et 0 lorsqu'il est annulé. 

**Note :** Même lorsqu'il est annulé, l'enregistrement reste en mémoire et peut être sauvegardé par la commande [SAVE RECORD](save-record.md) si celle-ci est appelée avant que le pointeur d'enregistrement courant ne soit modifié.

Dans le cadre d'un **MODIFY RECORD**, si l'utilisateur n'effectue aucune modification dans l'enregistrement et le valide, l'enregistrement ne sera pas considéré comme modifié et ne sera pas sauvegardé une nouvelle fois. Les actions telles que le changement de la valeur d'une variable, la sélection de cases à cocher ou de boutons radio ne sont pas qualifiées de modifications. Seule la modification de la valeur d'un champ, par le biais d'une saisie manuelle ou d'une méthode, provoque une nouvelle sauvegarde de l'enregistrement.

#### Exemple 

Reportez-vous au second exemple de la commande [ADD RECORD](add-record.md). 

#### Variables et ensembles système 

La variable système OK prend la valeur 1 lorsque l'enregistrement est validé et 0 lorsqu'il est annulé. OK ne prend une valeur qu'après que l'enregistrement ait été effectivement validé ou annulé. 

#### Voir aussi 

[ADD RECORD](add-record.md)  
[Locked](locked.md)  
[Modified record](modified-record.md)  
[READ WRITE](read-write.md)  
[UNLOAD RECORD](unload-record.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 57 |
| Thread safe | &cross; |
| Modifie les variables | OK |
| Interdite sur le serveur ||



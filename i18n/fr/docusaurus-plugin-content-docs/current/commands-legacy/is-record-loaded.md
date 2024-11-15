---
id: is-record-loaded
title: Is record loaded
slug: /commands/is-record-loaded
displayed_sidebar: docs
---

<!--REF #_command_.Is record loaded.Syntax-->**Is record loaded** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is record loaded.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l’enregistrement à examiner ou Table par défaut si ce paramètre est omis |
| Résultat | Boolean | &#8592; | Vrai si l’enregistrement est chargé, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is record loaded.Summary-->La commande **Is record loaded** retourne Vrai si l’enregistrement courant de *laTable* est chargé dans le process en cours.<!-- END REF-->

**4D Server** : En principe, lorsque des tables sont liées par des liens automatiques, les enregistrements courants des tables liées sont automatiquement chargés (cf. *Présentation des liens*). Toutefois, pour des raisons d'optimisation, 4D Server ne charge ces enregistrements qu'au moment où c'est nécessaire, par exemple lors de la lecture ou de l'affectation d'un champ de l'enregistrement lié. Par conséquent, dans ce contexte la commande **Is record loaded** retournera Faux en mode distant (elle retourne Vrai en mode local). 

#### Exemple 

Au lieu d’utiliser les actions automatiques “Enregistrement suivant” ou “Enregistrement précédent”, vous voulez écrire dans les méthodes de boutons sans action des instructions spécifiant que le bouton “Suivant” affiche le début de la sélection si la fin de la sélection est atteinte et que le bouton “Précédent” affiche la fin de la sélection si le début est atteint.

```4d
  // Méthode objet du bouton sans action "PRÉCÉDENT"
 If(FORM Event=On Clicked)
    PREVIOUS RECORD([Groupe])
    If(Not(Is record loaded([Groupe])))
       GOTO SELECTED RECORD([Groupe];Records in selection([Groupe]))
  //Aller au dernier enregistrement de la sélection
    End if
 End if
 
  // Méthode objet du bouton sans action "SUIVANT"
 If(FORM Event=On Clicked)
    NEXT RECORD([Groupe])
    If(Not(Is record loaded([Groupe])))
       GOTO SELECTED RECORD([Groupe];1) //Aller au premier enregistrement de la sélection
    End if
 End if
```

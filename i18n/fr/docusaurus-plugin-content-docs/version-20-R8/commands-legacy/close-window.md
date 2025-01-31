---
id: close-window
title: CLOSE WINDOW
slug: /commands/close-window
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE WINDOW.Syntax-->**CLOSE WINDOW** {( *fenêtre* )}<!-- END REF-->
<!--REF #_command_.CLOSE WINDOW.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre externe ou Fenêtre de premier plan du process si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLOSE WINDOW.Summary-->**CLOSE WINDOW** referme la dernière fenêtre créée à l'aide de la commande [Open window](open-window.md) ou [Open form window](open-form-window.md) dans le process courant.<!-- END REF--> S'il n'y a pas de fenêtre personnalisée ouverte, **CLOSE WINDOW** ne fait rien ; la commande ne ferme pas les fenêtres système. Si **CLOSE WINDOW** est appelée alors qu'un formulaire est actif dans la fenêtre, elle n'a pas d'effet non plus. Vous devez appeler **CLOSE WINDOW** lorsque vous avez fini d'utiliser une fenêtre ouverte avec [Open window](open-window.md) ou [Open form window](open-form-window.md). 

Il est inutile de passer un numéro à **CLOSE WINDOW** lorsque vous l'utilisez pour refermer des fenêtres ouvertes à l'aide de la fonction [Open window](open-window.md) ou [Open form window](open-form-window.md). En effet, si plusieurs fenêtres ont été ouvertes par une succession d'appels à ces commandes, elles ne pourront être refermées que dans l'ordre inverse de leur création.

Si vous passez en paramètre la référence d'une zone externe créée à l'aide de la fonction , **CLOSE WINDOW** referme la fenêtre externe. Pour plus d'informations sur les fenêtres externes, reportez-vous à la description de la fonction .

#### Exemple 

L'exemple suivant ouvre une fenêtre formulaire et crée des enregistrements à l'aide de la commande [ADD RECORD](add-record.md). Une fois les enregistrements ajoutés, la fenêtre est fermée par la commande **CLOSE WINDOW** :

```4d
 FORM SET INPUT([Employés];"Entrée")
 $refFen:=Open form window([Employés];"Entrée")
 Repeat
    ADD RECORD([Employés]) //Ajout d'un enregistrement d'employé
 Until(OK=0) //Boucle jusqu'à ce que l'utilisateur annule
 CLOSE WINDOW //Fermeture de la fenêtre
```

#### Voir aussi 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 154 |
| Thread safe | &cross; |



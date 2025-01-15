---
id: on-event-call
title: ON EVENT CALL
slug: /commands/on-event-call
displayed_sidebar: docs
---

<!--REF #_command_.ON EVENT CALL.Syntax-->**ON EVENT CALL** ( *méthodeEvén* {; *nomProcess*} )<!-- END REF-->
<!--REF #_command_.ON EVENT CALL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| méthodeEvén | Text | &#8594;  | Méthode d'événement à appeler ou Chaîne vide pour arrêter l'interception des événements |
| nomProcess | Text | &#8594;  | Nom de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.ON EVENT CALL.Summary-->**ON EVENT CALL** installe la méthode dont le nom est passé dans *méthodeEvén* comme méthode de gestion des événements.<!-- END REF--> 

**Conseil :** Cette commande nécessite un niveau de connaissances avancé en programmation. Généralement, vous n'avez pas besoin d'appeler **ON EVENT CALL** pour traiter les événements. Lorsque vous utilisez des formulaires, 4D gère pour vous les événements et les retourne aux formulaires et objets appropriés. 

**Astuce :** Les commandes telles que [MOUSE POSITION](mouse-position.md), [Shift down](shift-down.md), etc., permettent de récupérer des informations sur les événements. Ces commandes, dans une certaine mesure, peuvent être appelées depuis les méthodes objet pour traiter les informations dont vous avez besoin. Elles peuvent ainsi vous épargner l'écriture d'un algorithme basé sur une structure du type **ON EVENT CALL**.

La portée de cette commande est la session de travail. Par défaut, la méthode est exécutée dans un process local séparé. Vous ne pouvez avoir qu'une méthode de gestion d'événement à la fois. Pour désinstaller une méthode de gestion d'événement, appelez de nouveau **ON EVENT CALL** et passez une chaîne vide dans *méthodeEvén*.

Comme la méthode de gestion d'événement tourne dans process séparé, *méthodeEvén* est toujours active, même si aucune méthode 4D n'est en cours d'exécution. Après l'installation, 4D appelle la méthode *méthodeEvén* dès qu'un événement survient. Un événement peut être un clic souris ou la frappe d'une touche.

Le paramètre optionnel *nomProcess* permet de donner un nom au process créé par **ON EVENT CALL**. Si *nomProcess* commence par le symbole dollar (*$*), *nomProcess* est un process local, ce dont vous aurez généralement besoin. Si vous ne passez pas le paramètre *nomProcess*, 4D crée par défaut un process local nommé *$Gestionnaire d'événement*.

**ATTENTION :** Soyez prudent lors de l'écriture d'une méthode de gestion d'événement. N'appelez pas de commande générant un événement, sinon vous risquez de ne plus pouvoir sortir de la méthode. La combinaison de touches **Ctrl**+**Maj**+**Retour Arrière** (sous Windows) ou **Commande**+**Maj**+**Control**+**Retour Arrière** (sous Mac) permet de tuer le process d'événement. Cette combinaison vous permet de sortir d'une méthode de gestion d'événement devenue incontrôlable.

Dans la méthode de gestion d'événement, vous pouvez lire les variables système suivantes : MouseDown, KeyCode, Modifiers, MouseX, MouseY et MouseProc. Notez que ces variables sont des variables process. Leur portée est donc le process de gestion d'événements. Copiez-les dans des variables interprocess si vous souhaitez que leurs valeurs soient disponibles dans un autre process. 

* La variable système MouseDown contient 1 s'il y a eu un clic souris, 0 sinon.
* La variable système KeyCode contient le code du caractère tapé au clavier, ou le code d'une touche de fonction. Référez-vous aux sections *Codes Unicode* and [EXPORT TEXT](export-text.md) qui listent les codes de caractères utilisés par 4D, ainsi qu'à la section *Codes des touches de fonction*. 4D fournit des constantes prédéfinies pour les principaux codes ASCII et touches de fonctions. Vous pouvez les visualiser à l'aide la fenêtre de l'Explorateur, dans les thèmes correspondants.
* La variable système Modifiers permet de savoir si une touche de modification (*modifier*) était enfoncée au moment où l'événement s'est produit. Les touches suivantes peuvent être détectées :  

| **Plate-forme** | **Modifiers**                                                     |  
| --------------- | ----------------------------------------------------------------- |  
| Windows         | Maj, Verrouillage des majuscules, Alt, Ctrl                       |  
| Macintosh       | Maj, Verrouillage des majuscules, Alt (ou Option), Ctrl, Commande |  
    
Isolément, les touches *modifiers* ne génèrent pas d'événement. Pour cela, une autre touche ou le bouton de la souris doit également être enfoncé(e). La variable Modifiers, de type Entier long, contient un champ de bits. 4D fournit des constantes désignant la position ou le masque des bits pour chaque touche de modification. Lorsque, par exemple, vous voulez détecter si la touche Majuscule était enfoncée pour l'événement, vous pouvez écrire indifféremment :  
```4d  
 If(Modifiers?? Bit touche majuscule) //Si la touche Majuscule était enfoncée  
```  
    
ou :  
```4d  
 If((Modifiers&Shift key mask)#0) //Si la touche Majuscule était enfoncée  
```  
    
Les constantes à utiliser en fonction du *modifier* à tester et de la plate-forme sont les suivantes, placées dans le thème *Evénements (Modifiers)* :  

| **Modifier**                         | **Constante**                                                |  
| ------------------------------------ | ------------------------------------------------------------ |  
| Majuscule                            | Bit touche majuscule / Masque touche majuscule               |  
| Verr. majuscule                      | Bit touche verrouillage maj / Masque touche verrouillage maj |  
| Alt (aussi appelée Option sous OS X) | Bit touche option / Masque touche option                     |  
| Ctrl sous Windows                    | Bit touche commande / Masque touche commande                 |  
| Ctrl sous OS X                       | Bit touche contrôle / Masque touche contrôle                 |  
| Commande sous OS X                   | Bit touche commande / Masque touche commande                 |  
| Clic droit                           | Bit touche contrôle / Masque touche contrôle                 |
* Les variables systèmes MouseX et MouseY contiennent les coordonnées horizontale et verticale du clic souris, exprimées dans le système de coordonnées locales de la fenêtre dans laquelle le clic s'est produit. L'angle supérieur gauche de la fenêtre a les coordonnées 0,0\. Ces variables n'ont de signification que lorsqu'un clic souris a eu lieu.
* La variable système MouseProc contient le numéro de référence du process dans lequel le clic souris s'est produit.

**Note :** Les variables système MouseDown, KeyCode, Modifiers, MouseX, MouseY et MouseProc ne contiennent des valeurs significatives que dans une méthode de gestion d'événement installée par **ON EVENT CALL**.

#### Exemple 

L'exemple suivant annule l'impression si l'utilisateur appuie sur les touches **Ctrl**+**.** (**Commande+.** sous Mac OS). En premier lieu, la méthode de gestion des événements est installée. Ensuite, un message s'affiche, indiquant que l'impression a été annulée. Si la variable interprocess *◊vbOnStoppe* est égale à Vrai dans la méthode de gestion d'événement, une boîte de dialogue d'alerte s'affiche pour indiquer à l'utilisateur le nombre d'enregistrements qui viennent de s'imprimer. Enfin, la méthode de gestion d'événement est désinstallée :

```4d
 PAGE SETUP
 If(OK=1)
    ◊vbOnStoppe:=False
    ON EVENT CALL("GESTION EVENEMENTS")
    ALL RECORDS([Personnes])
    MESSAGE("Pour interrompre l'impression, appuyez sur Ctrl+point.")
    $NbEnregistrements:=Records in selection([Personnes])
    For($Enrg;1;$NbEnregistrements)
       If(◊vbOnStoppe)
          ALERT("L'impression a été annulée à l'enregistrement "+String($Enrg)+" sur "+Chaine($NbEnregistrements))
          $Enrg:=$NbEnregistrements+1
       Else
          Print form([Personnes];"Etat")
       End if
    End for
    PAGE BREAK
    ON EVENT CALL("") // Désinstallation de la méthode d'appel sur événement
 End if
```

La méthode de gestion d'événement teste si la combinaison de touches **Ctrl**+**.** (**Commande**+**.**) a été employée et met la variable interprocess *◊vbOnStoppe* à Vrai :

```4d
  // Méthode projet GESTION EVENEMENTS
 If((Modifiers?? Bit touche commande) & (KeyCode=Period))
    CONFIRM("Voulez-vous vraiment annuler l'impression ?")
    If(OK=1)
       ◊vbOnStoppe:=True
       FILTER EVENT // N'oubliez pas cet appel sinon 4D traitera aussi cet événement
    End if
 End if
```

Notez que **ON EVENT CALL** est utilisé dans cet exemple car un état spécial est imprimé à l'aide des commandes *\_o\_PAGE SETUP*, [Print form](../commands/print-form.md) et [PAGE BREAK](page-break.md) dans une structure de type [ARRAY TO LIST](array-to-list.md).

Lorsque vous imprimez un état à l'aide la commande [PRINT SELECTION](print-selection.md), vous n'avez pas besoin de gérer les événements permettant à l'utilisateur d'interrompre l'impression, [PRINT SELECTION](print-selection.md) le fait pour vous.

#### Voir aussi 

[FILTER EVENT](filter-event.md)  
[MOUSE POSITION](mouse-position.md)  
[Method called on event](method-called-on-event.md)  
[Shift down](shift-down.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 190 |
| Thread safe | &cross; |
| Interdite sur le serveur ||



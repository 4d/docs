---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *gauche* ; *haut* ; *droite* ; *bas* {; *type* {; *titre* {; *caseFermeture*}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| gauche | Integer | &#8594;  | Coordonnée gauche de l'intérieur de la fenêtre |
| haut | Integer | &#8594;  | Coordonnée supérieure de l'intérieur de la fenêtre |
| droite | Integer | &#8594;  | Coordonnée droite de l'intérieur de la fenêtre |
| bas | Integer | &#8594;  | Coordonnée inférieure de l'intérieur de la fenêtre |
| type | Integer | &#8594;  | Type de la fenêtre |
| titre | Text | &#8594;  | Titre de la fenêtre |
| caseFermeture | Text | &#8594;  | Méthode à appeler en cas de double-clic sur la case du menu Système ou de clic sur la case de fermeture |
| Résultat | Integer | &#8592; | Numéro de référence de la fenêtre |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.Open window.Summary-->**Open window** ouvre une nouvelle fenêtre dont les dimensions sont définies par les quatre premiers paramètres :

* *gauche* est la distance en pixels entre le côté gauche de la fenêtre de l'application et le côté intérieur gauche de la fenêtre.<!-- END REF-->
* *haut* est la distance en pixels entre le haut de la fenêtre de l'application et le bord supérieur de l'intérieur de la fenêtre.
* *droite* est la distance en pixels entre le côté gauche de la fenêtre de l'application et le côté intérieur droit de la fenêtre.
* *bas* est la distance en pixels entre le haut de la fenêtre de l'application et le bord inférieur de l'intérieur de la fenêtre.

**Note de compatibilité :** **Open window** a intégré différentes options qui ont évolué au fil des versions, et n'est plus conservée que pour des raisons de compatibilité. Lorsque vous écrivez du nouveau code de gestion des fenêtres, il est vivement conseillé d'utiliser la commande [Open form window](open-form-window.md), mieux adaptée aux interfaces actuelles. 

Si vous passez -1 dans *droite* et *bas*, vous indiquez à 4D qu'il faut redimensionner automatiquement la fenêtre si les conditions suivantes sont réunies :

* Vous avez conçu un formulaire et défini ses options de dimensionnement dans la fenêtre des propriétés des formulaires du mode Développement.
* Avant d'appeler **Open window** vous avez sélectionné le formulaire à l'aide de la commande [FORM SET INPUT](form-set-input.md), à laquelle vous avez passé le paramètre optionnel *\**.

**Important :** Ce dimensionnement automatique de la fenêtre n'aura lieu que si vous avez au préalable appelé la commande [FORM SET INPUT](form-set-input.md) pour le formulaire que vous allez afficher dans la fenêtre, et si vous lui avez passé le paramètre optionnel \*.

* Le paramètre *type* est optionnel. Il définit le type de fenêtre que vous souhaitez afficher, et correspond aux différentes fenêtres présentées dans la section *Types de fenêtres (compatibilité)* (constantes du thème *Creer fenetre*). Si le type passé est négatif, la fenêtre sera flottante. Si le type n'est pas spécifié, le type 1 est utilisé par défaut.
* Le paramètre *titre* indique le titre (optionnel) de la fenêtre.  
Si vous passez une chaîne de caractères vide ("") dans *titre*, vous indiquez à 4D d'utiliser les valeurs saisies dans la zone **Nom de la fenêtre** de la fenêtre des Propriétés du formulaire en mode Développement pour le titre du formulaire que vous allez afficher dans la fenêtre.

**Important :** Le nom par défaut du formulaire ne sera appliqué à la fenêtre que si vous avez appelé la commande [FORM SET INPUT](form-set-input.md) pour le formulaire que vous allez afficher dans la fenêtre et si vous lui avez passé le paramètre optionnel *\**.

* Le paramètre *caseFermeture*, optionnel, désigne la méthode de gestion de la fermeture de la fenêtre. Si ce paramètre est passé, la case du menu Système (sous Windows) ou une case de fermeture (sous Mac OS) est ajoutée à la fenêtre. Lorsque l'utilisateur Windows double-clique sur la case du menu Système ou que l'utilisateur Mac OS clique sur la case de fermeture, la méthode passée dans *caseFermeture* est exécutée.

**Note :** Vous pouvez aussi gérer la fermeture à partir de la méthode du formulaire affiché dans la fenêtre pendant l'événement On Close Box. Pour plus d'informations sur ce point, reportez-vous à la commande [Form event code](../commands/form-event-code.md).

Si plusieurs fenêtres sont ouvertes dans le même process, la dernière fenêtre créée est la fenêtre active (de premier plan) du process. Seules les informations situées dans la fenêtre active peuvent être modifiées. Toutes les autres fenêtres peuvent être visualisées. Lorsque l'utilisateur tape une touche du clavier, la fenêtre active vient toujours se placer au premier plan, si elle n'y est pas déjà. 

Les formulaires sont affichés à l'intérieur de fenêtres ouvertes à l'écran. Le texte passé à la commande [MESSAGE](message.md) est également affiché dans une fenêtre. 

#### Exemple 1 

La méthode projet suivante ouvre une fenêtre centrée dans la fenêtre principale (sous Windows) ou dans l'écran principal (sous Mac OS). Notez qu'elle accepte deux, trois ou quatre paramètres :

```4d
  // Méthode projet OUVRIR FENETRE CENTREE
  // $1 – Largeur de la fenêtre
  // $2 – Hauteur de la fenêtre
  // $3 – Type de la fenêtre (optionnel)
  // $4 – Titre de la fenêtre (optionnel)
 $SW:=Screen width\2
 $SH:=(Screen height\2)-10
 $WW:=$1\2
 $WH:=$2\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)
 End case
```

Une fois que cette méthode projet est écrite, vous pouvez l'utiliser de la manière suivante :

```4d
 OUVRIR FENETRE CENTREE(400;250;Plain dialog box;"Mise à jour Archives")
 DIALOG([Table outils];"OPTIONS MAJ")
 CLOSE WINDOW
 If(OK=1)
  // ...
 End if
```

#### Exemple 2 

L'exemple suivant crée une fenêtre flottante comportant une case de menu système (sous Windows) ou une case de fermeture (sous Mac OS). La fenêtre est créée dans le coin supérieur droit de la fenêtre de l'application.

```4d
 $mafenetre:=Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"caseFermeture")
 DIALOG([Dialogues];"Palette de couleurs")
```

La méthode *caseFermeture* appelle la commande [CANCEL](cancel.md) :

```4d
 CANCEL
```

#### Exemple 3 

L'exemple suivant ouvre une fenêtre dont le titre et la taille proviennent des propriétés du formulaire affiché dans la fenêtre : 

```4d
 FORM SET INPUT([Clients];"Ajout d'enregistrements";*)
 $mafenetre:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Clients])
 Until(OK=0)
```

**Rappel** 

 Pour que la fonction **Open window** utilise automatiquement les propriétés du formulaire, vous devez avoir appelé [FORM SET INPUT](form-set-input.md) avec le paramètre optionnel *\** et les propriétés du formulaire doivent avoir été définies en fonction de cette utilisation.

#### Exemple 4 

Cet exemple illustre le mécanisme de “retard” d’affichage des fenêtres feuille sous Mac OS X :

```4d
 $maFenêtre:=Open window(10;10;400;400;Sheet window)
  //A cet instant la fenêtre est créée mais reste invisible
 DIALOG([Table];"formDial")
  //L’événement Sur chargement est généré puis la fenêtre feuille est affichée, elle "descend"
  //du dessous de la barre de titre
```

#### Voir aussi 

[CLOSE WINDOW](close-window.md)  
*Creer fenetre*  
[Open form window](open-form-window.md)  
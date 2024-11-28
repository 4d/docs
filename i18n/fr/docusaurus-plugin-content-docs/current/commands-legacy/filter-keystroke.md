---
id: filter-keystroke
title: FILTER KEYSTROKE
slug: /commands/filter-keystroke
displayed_sidebar: docs
---

<!--REF #_command_.FILTER KEYSTROKE.Syntax-->**FILTER KEYSTROKE** ( *carFiltré* )<!-- END REF-->
<!--REF #_command_.FILTER KEYSTROKE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| carFiltré | Text | &#8594;  | Caractère(s) de remplacement ou Chaîne vide pour annuler le filtrage clavier |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->**FILTER KEYSTROKE** vous permet de remplacer le caractère saisi par l'utilisateur dans un champ ou une zone saisissable par le premier caractère de la chaîne *carFiltré*.<!-- END REF-->

Si vous passez une chaîne vide, le filtrage clavier en cours est annulé.

Vous appelez généralement **FILTER KEYSTROKE** dans une méthode formulaire ou objet lorsque vous gérez l'événement formulaire On Before Keystroke . Pour détecter les événements de frappe clavier, utilisez la commande [Form event code](../commands/form-event-code.md). Pour récupérer les caractères saisis au clavier, utilisez les fonctions [Keystroke](keystroke.md) ou [Get edited text](get-edited-text.md). 

**IMPORTANT :** Si vous voulez effectuer des opérations “à la volée” en fonction de la valeur courante de la zone saisissable en cours de modification ainsi que du caractère à saisir, rappelez-vous que le texte affiché à l'écran n'est pas encore la valeur du champ ou de la variable. La valeur saisie dans une variable ou un champ ne lui est affectée que lorsque la zone est validée (lorsque l'utilisateur appuie sur la touche **Tabulation**, clique sur un bouton, etc.). En conséquence, pensez à placer les valeurs saisies dans une variable temporaire et à travailler avec celle-ci, puis à assigner cette variable à la zone de saisie (reportez-vous à l'exemple ci-dessous). Vous pouvez également utiliser la fonction [Get edited text](get-edited-text.md).

Utilisez la commande **FILTER KEYSTROKE** dans les cas suivants :

* Pour effectuer un filtrage personnalisé des caractères,
* Pour créer un filtre de saisie non disponible en standard,
* Pour implémenter des zones de recherche ou de pré-saisie dynamiques.

**ATTENTION :** si vous appelez la commande [Keystroke](keystroke.md) après avoir appelé **FILTER KEYSTROKE**, c'est le caractère passé à cette commande qui sera retourné et non le caractère réellement saisi.

#### Exemple 1 

Avec le code suivant :

```4d
  // Méthode objet de la zone saisissable monObjet
 Case of
    :(FORM Event=On Load)
       monObjet:=""
    :(FORM Event=On Before Keystroke)
       If(Position(Keystroke;"0123456789")>0)
          FILTER KEYSTROKE("*")
       End if
 End case
```

... tous les chiffres saisis dans la zone *monObjet* seront transformés en astérisques. 

#### Exemple 2 

Le code ci-dessous définit le comportement d'une zone de saisie de mot de passe, dans laquelle les caractères saisis sont remplacés à l'écran par des caractères aléatoires : 

```4d
  // Méthode objet de la zone saisissable vaMotsPasse
 Case of
    :(FORM Event=On Load)
       vaMotsPasse:=""
       vaMotPasseActuel:=""
    :(FORM Event=On Before Keystroke)
       Gérer frappe clavier(->vaMotsPasse;->vaMotPasseRéel)
       If(Position(Keystroke;Char(Backspace key)+Char(Left arrow key)+
          Char(Right arrow key)+Char(Up arrow key)+
          Char(Down arrow key))=0)
          FILTER KEYSTROKE(Char(65+(Random%26)))
       End if
 End case
```

Une fois la zone validée, vous récupérez le mot de passe réellement saisi par l'utilisateur dans la variable *vaMotPasseRéel*. La méthode Gérer frappe clavier est listée dans l'exemple de la commande [Keystroke](keystroke.md). 

#### Exemple 3 

Vous disposez dans votre application de diverses zones de texte dans lesquelles vous pouvez saisir quelques phrases. Votre application comporte également une table de glossaire contenant les termes les plus fréquemment utilisés dans votre base. Lors de l'édition de vos zones de texte, vous voulez pouvoir rapidement, à partir du glossaire, retrouver et insérer des mots en fonction des caractères sélectionnés dans le texte. Pour cela, vous avez deux solutions : soit placer des boutons avec des touches associées qui vont exécuter l'opération, soit intercepter les frappes clavier spéciales pendant la saisie. L'exemple ci-dessous utilise la seconde solution, basée sur la touche **Aide**. 

Comme décrit ci-dessus, lorsque vous éditez une zone de texte, la valeur du champ ou de la variable de texte ne sera réellement modifiée que lorsque que vous l'aurez validée. Pour retrouver et insérer rapidement des entrées du glossaire dans une zone de texte alors qu'elle est en train d'être modifiée, vous devez donc créer une seconde zone "tampon" pour y placer les valeurs saisies. Vous pouvez effectuer cette opération à l'aide de la méthode projet décrite ci-dessous. Vous passez comme premiers paramètres des pointeurs vers la zone de saisie et vers la variable, puis la chaîne de caractère “interdits” comme troisième paramètre. Peu importe comment l'entrée clavier sera traitée, la méthode retourne la valeur saisie originale. Les caractères “interdits” sont les caractères que vous ne voulez pas insérer dans la zone saisissable et que vous voulez traiter en tant que caractères spéciaux.

```4d
  // Méthode projet Frappe clavier tampon
  // Frappe clavier tampon ( Pointeur ; Pointeur ; Alpha ) -> Alpha
  // Frappe clavier tampon ( -> zoneSource ; -> valeurCourante ; Filtre ) -> Ancien frappe clavier
 C_STRING(1;$0)
 var $1;$2 : Pointer
 var $vtNouvValeur : Text
 C_STRING(255;$3)
  // Retourne la frappe clavier originale
 $0:=Keystroke
  // Obtenir la sélection de texte dans la zone saisissable
 GET HIGHLIGHT($1->;$vlDébut;$vlFin)
  // Commencer à travailler sur la valeur courante
 $vtNouvValeur:=$2->
  // En fonction de la touche enfoncée ou du caractère saisi, effectuer les actions appropriées
 Case of
  // La touche Retour arrière a été enfoncée
    :(Character code($0)=Backspace key)
  // Supprimer les caractères sélectionnés ou le caractère à gauche du curseur
       $vtNouvValeur:=Supprimer texte($vtNouvValeur;$vlDébut;$vlFin)
  // Une touche "flèche" a été appuyée
  // Ne faites rien sauf accepter la frappe clavier
    :(Character code($0)=Left arrow key)
    :(Character code($0)=Right arrow key)
    :(Character code($0)=Up arrow key)
    :(Character code($0)=Down arrow key)
 
  // Un caractère valide a été saisi
    :(Position($0;$3)=0)
       $vtNouvValeur:=Inserer texte($vtNouvValeur;$vlDébut;$vlFin;$0)
    Else
  // Le caractère n'est pas accepté
       FILTER KEYSTROKE("")
 End case
  // Retourner la valeur pour la prochaine gestion de la frappe clavier
 $2->:=$vtNouvValeur
```

Cette méthode utilise les sous-méthodes suivantes :

```4d
  // Méthode projet Supprimer texte
  // Supprimer texte ( Alpha ; Long ; Long ) -> Alpha
  // Supprimer texte ( -> Texte ; SelDébut ; SelFin ) -> Nouveau texte
 var $0;$1 : Text
 var $2;$3 : Integer
 $0:=Substring($1;1;$2-1-Num($2=$3))+Substring($1;$3)
```

```4d
  // Méthode projet Inserer texte
  // Inserer texte ( Alpha ; Long ; Long ; Alpha ) -> Alpha
  // Inserer texte ( -> texteSource ; SelDébut ; SelFin ; Texte à insérer ) -> Nouveau texte
 var $0;$1;$4 : Text
 var $2;$3 : Integer
 $0:=$1
 If($2#$3)
    $0:=Substring($0;1;$2-1)+$4+Substring($0;$3)
 Else
    Case of
       :($2<=1)
          $0:=$4+$0
       :($2>Length($0))
          $0:=$0+$4
       Else
          $0:=Substring($0;1;$2-1)+$4+Substring($0;$2)
    End case
 End if
```

Une fois que vous avez ajouté ces méthodes projet à votre base, vous pouvez les utiliser de la manière suivante :

```4d
  // Méthode objet de la zone saisissable vaDescription
 Case of
    :(FORM Event=On Load)
       vaDescription:=""
       vaDescriptionDouble:=""
  // Etablir la liste des caractères “interdits” à traiter comme des touches spéciales
  // (Dans cet exemple, seule la touche Aide est filtrée)
       vaTouchesSpéciales:=Char(Help key)
    :(FORM Event=On Before Keystroke)
       $vsKey:=Frappe clavier tampon(->vaDescription;->vaDescriptionDouble;vaTouchesSpéciales)
       Case of
          :(Character code($vsKey)=Help key)
  // Faire quelque chose lorsque la touche Aide est enfoncée
  // Dans cet exemple, une saisie de glossaire doit être recherchée et insérée
             chercher_Glossaire(->vaDescription;->vaDescriptionDouble)
       End case
 End case
```

La méthode projet chercher\_Glossaire est listée ci-dessous (le point principal est l'utilisation de la variable tampon pour réaffecter la zone saisissable à modifier) :

```4d
  // Méthode projet chercher_Glossaire
  // chercher_Glossaire ( Pointeur ; Pointeur )
  // chercher_Glossaire ( -> zone saisissable ; ->variable double )
 var $1;$2 : Pointer
 var $vlDébut;$vlFin : Integer
  // Obtenir la sélection de texte dans la zone saisissable
 GET HIGHLIGHT($1->;$vlDébut;$vlFin)
  // Obtenir le texte sélectionné ou le mot situé à gauche du curseur $vtTexteSelectionne:=obtenirTexteSelectionne ($2->;$vlDébut;$vlFin)
  // Y a-t-il quelque chose à rechercher ?
 If($vtTexteSelectionne#"")
  // Si la sélection de texte était le curseur, la sélection débute au mot situé après le curseur
    If($vlDébut=$vlFin)
       $vlDébut:=$vlDébut-Length($vtTexteSelectionne)
    End if
  // Chercher la première entrée du glossaire disponible
    QUERY([Glossaire];[Glossaire]Saisie=$vtTexteSelectionne+"@")
  // Existe-t-elle ?
    If(Records in selection([Glossaire])>0)
  // Si oui, l'insérer dans la zone tampon
       $2->:=Inserer texte($2->;$vlDébut;$vlFin;[Glossaire]Saisie)
  // Copier le tampon dans la zone saisissable
       $1->:=$2->
  // Fixer la sélection après avoir inséré l'entrée du glossaire
       $vlFin:=$vlDébut+Length([Dictionnaire]Saisie)
       HIGHLIGHT TEXT(vsComments;$vlFin;$vlFin)
    Else
  // Il n'y a pas d'entrée qui correspond dans le glossaire
       BEEP
    End if
 Else
  // Il n'y a pas de texte sélectionné
    BEEP
 End if
```

La méthode obtenirTexteSelectionne est la suivante :

```4d
  // Méthode objet obtenirTexteSelectionne
  // obtenirTexteSelectionne ( Alpha ; Entier long ; Entier long ) -> Alpha
  // obtenirTexteSelectionne ( Texte ; SelDébut ; SelFin ) -> texte sélectionné
 var $0;$1 : Text
 var $2;$3 : Integer
 If($2<$3)
    $0:=Substring($1;$2;$3-$2)
 Else
    $0:=""
    $2:=$2-1
    Repeat
       If($2>0)
          If(Position($1[[$2]];"  ,.!?:;()-_–—")=0)
             $0:=$1[[$2]]+$0
             $2:=$2-1
          Else
             $2:=0
          End if
       End if
    Until($2=0)
 End if
```

#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  
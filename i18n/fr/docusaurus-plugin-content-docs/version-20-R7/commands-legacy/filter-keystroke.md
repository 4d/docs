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
  // Shadow keystroke project method
  // Shadow keystroke ( Pointer ; Pointer ; String ) -> String
  // Shadow keystroke ( -> srcArea ; -> curValue ; Filter ) -> Old keystroke
#DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text
 var $vtNewValue : Text
  // Return the original keystroke
 $old:=Keystroke
  // Get the text selection range within the enterable area
 GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)
  // Start working with the current value
 $vtNewValue:=$curVal->
  // Depending on the key pressed or the character entered,
  // Perform the appropriate actions
 Case of
  // The Backspace (Delete) key has been pressed
    :(Character code($old)=Backspace)
  // Delete the selected characters or the character at the left of the text cursor
       $vtNewValue:=Delete text($vtNewValue;$vlStart;$vlEnd)
  // An Arrow key has been pressed
  // Do nothing, but accept the keystroke
    :(Character code($old)=Left arrow key)
    :(Character code($old)=Right arrow key)
    :(Character code($old)=Up arrow key)
    :(Character code($old)=Down arrow key)
 
  // An acceptable character has been entered
    :(Position($old;$filter)=0)
       $vtNewValue:=Insert text($vtNewValue;$vlStart;$vlEnd;$0)
    Else
  // The character is not accepted
       FILTER KEYSTROKE("")
 End case
  // Return the value for the next keystroke handling
 $curVal->:=$vtNewValue
```


Cette méthode utilise les sous-méthodes suivantes :

```4d
  // Delete text project method
  // Delete text ( String ; Long ; Long ) -> String
  // Delete text ( -> Text ; SelStart ; SelEnd ) -> New text
#DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text 
 $new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)
```
```4d 
  // Insert text project method
  // Insert text ( String ; Long ; Long ; String ) -> String
  // Insert text ( -> srcText ; SelStart ; SelEnd ; Text to insert ) -> New text
#DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text 
 $new:=$src
 If($start # $end)
    $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)
 Else
    Case of
       :($start<=1)
          $new:=$toInsert+$new
       :($start>Length($new))
          $new:=$new+$toInsert
       Else
          $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$start)
    End case
 End if
```

Une fois que vous avez ajouté ces méthodes projet à votre base, vous pouvez les utiliser de la manière suivante :

```4d
  // vsDescription enterable area object method
 Case of
    :(FORM Event=On Load)
       vsDescription:=""
       vsShadowDescription:=""
  // Establish the list of the “forbidden” characters to be treated as special keys
  // ( here, in this example, only the Help Key is filtered)
       vsSpecialKeys:=Char(HelpKey)
    :(FORM Event=On Before Keystroke)
       $vsKey:=Shadow keystroke(->vsDescription;->vsShadowDescription;vsSpecialKeys)
       Case of
          :(Character code($vsKey)=Help key)
  // Do something when the Help key is pressed
  // Here, in this example, a Dictionary entry must be searched and inserted
             LOOKUP DICTIONARY(->vsDescription;->vsShadowDescription)
       End case
 End case
```

La méthode projet chercher\_Glossaire est listée ci-dessous (le point principal est l'utilisation de la variable tampon pour réaffecter la zone saisissable à modifier) :

```4d
  // LOOKUP DICTIONARY project method
  // LOOKUP DICTIONARY ( Pointer ; Pointer )
  // LOOKUP DICTIONARY ( -> Enterable Area ; ->ShadowVariable )
 
#DECLARE ($area : Pointer ; $shadow : Pointer)
 var $vlStart;$vlEnd : Integer
 
  // Get the text selection range within the enterable area
 GET HIGHLIGHT($area->;$vlStart;$vlEnd)
  // Get the selected text or the word on the left of the text cursor
 $vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)
  // Is there something to look for?
 If($vtHighlightedText#"")
  // If the text selection was the text cursor,
  // the selection now starts at the word preceeding the text cursor
    If($vlStart=$vlEnd)
       $vlStart:=$vlStart-Length($vtHighlightedText)
    End if
  // Look for the first available dictionary entry
    QUERY([Dictionary];[Dictionary]Entry=$vtHighlightedText+"@")
  // Is there one?
    If(Records in selection([Dictionary])>0)
  // If so, insert it in the shadow text
       $shadow->:=Insert text($shadow->;$vlStart;$vlEnd;[Dictionary]Entry)
  // Copy the shadow text to the enterable being edited
       $area->:=$shadow->
  // Set the selection just after the insert dictionary entry
       $vlEnd:=$vlStart+Length([Dictionary]Entry)
       HIGHLIGHT TEXT(vsComments;$vlEnd;$vlEnd)
    Else
  // There is no corresponding entry in the Dictionary
       BEEP
    End if
 Else
  // There is no highlighted text
    BEEP
 End if
```

La méthode obtenirTexteSelectionne est la suivante :

```4d
  // Get highlighted text project method
  // Get highlighted text ( String ; Long ; Long ) -> String
  // Get highlighted text ( Text ; SelStart ; SelEnd ) -> highlighted text
#DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text
 If($start<$end)
    $highlight:=Substring($text;$start;$end-$start)
 Else
    $highlight:=""
    $start:=$start-1
    Repeat
       If($start>0)
          If(Position($text[[$start]];"  ,.!?:;()-_–—")=0)
             $highlight:=$text[[$start]]+$highlight
             $start:=$start-1
          Else
             $start:=0
          End if
       End if
    Until($start=0)
 End if
```


#### Voir aussi 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 389 |
| Thread safe | &cross; |



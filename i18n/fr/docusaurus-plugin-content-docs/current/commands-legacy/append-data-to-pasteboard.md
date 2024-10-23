---
id: append-data-to-pasteboard
title: APPEND DATA TO PASTEBOARD
slug: /commands/append-data-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.APPEND DATA TO PASTEBOARD.Syntax-->**APPEND DATA TO PASTEBOARD** ( *typeDonnées* ; *données* )<!-- END REF-->
<!--REF #_command_.APPEND DATA TO PASTEBOARD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeDonnées | Text | &#8594;  | Type des données à ajouter |
| données | Blob | &#8594;  | Données à ajouter au conteneur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.APPEND DATA TO PASTEBOARD.Summary-->**APPEND DATA TO PASTEBOARD** ajoute dans le conteneur les données du type spécifié dans *typeDonnées* présentes dans le BLOB *données*.<!-- END REF-->

**Note :** Dans le cadre d'une opération de copier/coller, le conteneur de données correspond au Presse-papiers. 

Passez dans *typeDonnées* une valeur définissant le type de données à ajouter. Vous pouvez passer une signature 4D, un type UTI (Mac OS), un nom/numéro de format (Windows), ou un type de 4 caractères (compatibilité). Pour plus d'informations sur ces types, reportez-vous à la section *Gestion du conteneur de données*. 

**Note pour les utilisateurs Windows :** Lorsque la commande est utilisée avec des données de type texte (*typeDonnées* vaut "TEXT", com.4d.private.text.native ou com.4d.private.text.utf16), la chaîne contenue dans le paramètre BLOB *données* doit se terminer par le caractère NULL sous Windows. 

Généralement, vous utilisez la commande **APPEND DATA TO PASTEBOARD** pour placer plusieurs instances des mêmes données dans le conteneur de données ou pour y ajouter des valeurs qui ne sont pas du texte ou une image. Pour ajouter de nouvelles données au conteneur, il faut d'abord l'effacer à l'aide de la commande [CLEAR PASTEBOARD](clear-pasteboard.md). 

Si vous voulez effacer le conteneur et y ajouter :

* du texte, utilisez la commande [SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md),
* une image, utilisez la commande [SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md),
* un chemin d'accès de fichier (glisser-déposer), utilisez la commande [SET FILE TO PASTEBOARD](set-file-to-pasteboard.md).

Notez cependant que si un BLOB contient du texte ou une image, vous pouvez utiliser la commande **APPEND DATA TO PASTEBOARD** pour y ajouter du texte ou une image.

#### Exemple 

A l'aide des commandes du thème Conteneur de données et des BLOBs, vous pouvez écrire des méthodes de Couper/Copier/Coller pour gérer des données structurées au lieu d'une seule information. Dans l'exemple suivant, les deux méthodes projet écrire enregistrement dans Presse papiers et lire enregistrement dans Presse papiers vous permettent de traiter un enregistrement comme une information à copier dans le Presse-papiers.

```4d
  // Méthode projet écrire enregistrement dans Presse papiers
  // écrire enregistrement dans Presse papiers ( Numérique )
  // écrire enregistrement dans Presse papiers ( Numéro de table )
 
 var $1;$vlChamp;$vlTypeChamp : Integer
 var $vpTable;$vpChamp : Pointer
 C_STRING(255;$vaNomDoc)
 var $vtDonnéesEnregistrement;$vtDonnéesChamp : Text
 var $vxDonnéesEnregistrement : Blob
 
  // Effacer le Presse-papiers (il restera vide s'il n'y a pas d'enregistrement courant)
 CLEAR PASTEBOARD
  // Obtenir un pointeur vers la table dont le numéro est passé en paramètre
 $vpTable:=Table($1)
  // S'il y a un enregistrement courant pour cette table
 If((Record number($vpTable->)>=0) | (Is new record($vpTable->)))
  // Initialiser la variable Texte qui contiendra l'image de texte de l'enregistrement
    $vtDonnéesEnregistrement:=""
  // For each champ de l'enregistrement :
    For($vlChamp;1;Last field number($1))
  // Obtenir le type du champ
       GET FIELD PROPERTIES($1;$vlChamp;$vlTypeChamp)
  // Obtenir un pointeur vers le champ
       $vpChamp:=Field($1;$vlChamp)
  // Selon le type du champ, copier (ou non) ses données de façon appropriée
       Case of
          :(($vlTypeChamp=Is alpha field) | ($vlTypeChamp=Is text))
             $vtDonnéesChamp:=$vpChamp->
          :(($vlTypeChamp=Is real) | ($vlTypeChamp=Is integer) | ($vlTypeChamp=Is longint)| ($vlTypeChamp=Is date)|($vlTypeChamp=Is time))
             $vtDonnéesChamp:=String($vpChamp->)
          :($vlTypeChamp=Is Boolean)
             $vtDonnéesChamp:=String(Num($vpChamp->);"Oui;;Non")
          Else
  // Passer et ignorer les autres types de champs
             $vtDonnéesChamp:=""  
       End case
  // Accumuler les données sur le champ dans une variable texte qui stocke l'image de texte de l'enregistrement
       $vtDonnéesEnregistrement:=$vtDonnéesEnregistrement+Field name($1;$vlChamp)+":"+Char(9)+$vtDonnéesChamp+CR
  // Note : La méthode CR retourne Caractere(13) sous Mac OS et Caractere(13)+Caractere(10) sous Windows
    End for
  // Mettre l'image de texte de l'enregistrement dans le Presse-papiers
    SET TEXT TO PASTEBOARD($vtDonnéesEnregistrement)  
  // Nommez le fichier d'Album dans le Dossier temporaire
    $vaNomDoc:=Temporary folder+"Album"+String(1+(Hasard%99))
  // Supprimer le fichier d'Album s'il existe (il faut tester une erreur ici)
    DELETE DOCUMENT($vaNomDoc)
  // Créez le fichier d'Album
    SET CHANNEL(10;$vaNomDoc)
  // Envoyer l'enregistrement entier dans le Presse-papiers
    SEND RECORD($vpTable->)
  // Fermer le fichier d'Album
    SET CHANNEL(11)
  // Charger le fichier d'Album dans un BLOB
    DOCUMENT TO BLOB($vaNomDoc;$vxDonnéesEnregistrement)
  // Nous n'avons plus besoin du fichier d'Album
    DELETE DOCUMENT($vaNomDoc)
  // Ajouter l'image complète de l'enregistrement dans le Presse-papiers
  // Note: nous utilisons le type de données "4Drc" de façon arbitraire
    APPEND DATA TO PASTEBOARD("4Drc";$vxDonnéesEnregistrement)
  // Le Presse-papiers contient :
  // (1) Une image de texte de l'enregistrement (comme illustré dans les copies d'écran ci-dessous)
  // (2) Une image entière de l'enregistrement (y compris les images, sous-tables et les champs de type BLOB)
 End if
```

Lors de la saisie d'un enregistrement, si vous appliquez la méthode écrire enregistrement dans Presse papiers à la table, le Presse-papiers contiendra le texte de l'enregistrement et également l'image entière de l'enregistrement.

Vous pouvez coller cette image de l'enregistrement dans un autre enregistrement, à l'aide de la méthode lire enregistrement dans Presse papiers, qui est la suivante :

```4d
  // Méthode lire enregistrement dans Presse papiers
  // lire enregistrement dans Presse papiers ( Numéro )
  // lire enregistrement dans Presse papiers ( Numéro de table )
 var $1;$vlChamp;$vlTypeChamp;$vlPosCR;$vlPosColon : Integer
 var $vpTable;$vpChamp : Pointer
 C_STRING(255;$vaNomDoc)
 var $vxDonnéeesPressePapiers : Blob
 var $vtDonnéeesPressePapiers;$vtDonnéesChamp : Text
 
  // Obtenir un pointeur vers la table dont le numéro est passé en tant que paramètre
 $vpTable:=Table($1)
  // S'il y a un enregistrement courant pour cette table
 If((Record number($vpTable->)>=0) | (Is new record($vpTable->)))
    Case of
  // Est-ce que le Presse-papiers contient une image entière de l'enregistrement ?
       :(Pasteboard data size("4Drc")>0)
  // Si oui, extraire le contenu du Presse-papiers
          GET PASTEBOARD DATA("4Drc";$vxDonnéesPressePapiers)
  // Nommer le fichier d'Album dans le Dossier temporaire
          $vaNomDoc:=Temporary folder+"Album"+String(1+(Hasard%99))  
  // Supprimer le fichier d'Album s'il existe (il faut tester l'erreur ici)
          DELETE DOCUMENT($vaNomDoc)
  // Enregistrer le BLOB dans le fichier d'Album
          BLOB TO DOCUMENT($vaNomDoc;$vxDonnéesPressePapiers)
  // Ouvrir le fichier d'Album
          SET CHANNEL(10;$vaNomDoc)
  // Recevoir l'enregistrement entier du fichier d'Album
          RECEIVE RECORD($vpTable->)
  // Fermer le fichier d'Album
          SET CHANNEL(11)
  // Nous n'avons plus besoin du fichier d'Album
          DELETE DOCUMENT($vaNomDoc)
  // Est-ce que le Presse-papiers contient du texte ?
       :(Pasteboard data size("TEXT")>0)
  // Extraire le texte du Presse-papiers  
          $vtDonnéesPressePapiers:=Get text from pasteboard
  // Initialiser le numéro de champ à incrémenter
          $vlChamp:=0
          Repeat
  // Chercher la ligne de champ suivante dans le texte
             $vlPosCR:=Position(CR;$vtDonnéesPressePapiers)
             If($vlPosCR>0)
  // Extraire la ligne de champ
                $vtDonnéesChamp:=Substring($vtDonnéesPressePapiers;1;$vlPosCR-1)
  // S'il y a un signe deux points ":"
                $vlPosColon:=Position(":";$vtDonnéesChamp)
                If($vlPosColon>0)
  // Récupérer seulement les données de champ (supprimer le nom du champ)
                   $vtDonnéesChamp:=Substring($vtDonnéesChamp;$vlPosColon+2)
                End if
  // Incrémenter le numéro du champ
                $vlChamp:=$vlChamp+1
  // Le Presse-papiers peut contenir plus de données dont nous n'avons pas besoin...
                If($vlChamp<=Last field number($vpTable))
  // Obtenir le type du champ
                   GET FIELD PROPERTIES($1;$vlChamp;$vlTypeChamp)
  // Obtenir un pointeur vers le champ
                   $vpChamp:=Field($1;$vlChamp)
  // Selon le type du champ, copier (ou non) le texte d'une manière appropriée
                   Case of
                      :(($vlTypeChamp=Is alpha field) | ($vlTypeChamp=Is text))
                         $vpChamp->:=$vtDonnéesChamp
                      :(($vlTypeChamp=Is real) | ($vlTypeChamp=Is integer) | ($vlTypeChamp=Is longint))
                         $vpChamp->:=Num($vtDonnéesChamp)
                      :($vlTypeChamp=Is date)
                         $vpChamp->:=Date($vtDonnéesChamp)
                      :($vlTypeChamp=Is time)
                         $vpChamp->:=Time($vtDonnéesChamp)
                      :($vlTypeChamp=Is Boolean)
                         $vpChamp->:=($vtDonnéesChamp="Oui")
                      Else
  // Passer et ignorer les autres types de données
                   End case
                Else
  // Tous les champs ont été affectés, sortir de la boucle
                   $vtDonnéesPressePapiers:=""
                End if
  // Eliminer le texte qui vient d'être extrait
                $vtDonnéeesPressePapiers:=Substring($vtDonnéeesPressePapiers;$vlPosCR+Length(CR))
             Else
  // Aucun délimiteur trouvé, sortir de la boucle
                $vtDonnéesPressePapiers:=""
             End if
  // Répéter jusqu'à ce que nous ayons des données
          Until(Length($vtDonnéesPressePapiers)=0)
       Else
          ALERT("Le Presse-papiers ne contient pas de données pouvant être collées en tant qu'enregistrement.")
    End case
 End if
```

#### Variables et ensembles système 

Si les données dans le BLOB sont correctement ajoutées au conteneur, la variable système OK prend la valeur 1\. Sinon, OK est mise à 0 et une erreur peut être générée.

#### Voir aussi 

[CLEAR PASTEBOARD](clear-pasteboard.md)  
[SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md)  
[SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md)  
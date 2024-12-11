---
id: volume-attributes
title: VOLUME ATTRIBUTES
slug: /commands/volume-attributes
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME ATTRIBUTES.Syntax-->**VOLUME ATTRIBUTES** ( *volume* ; *taille* ; *utilisé* ; *libre* )<!-- END REF-->
<!--REF #_command_.VOLUME ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| volume | Text | &#8594;  | Nom du volume |
| taille | Real | &#8592; | Taille du volume exprimée en octets |
| utilisé | Real | &#8592; | Place utilisée sur le volume exprimée en octets |
| libre | Real | &#8592; | Place libre sur le volume exprimée en octets |

<!-- END REF-->

#### Description 

<!--REF #_command_.VOLUME ATTRIBUTES.Summary-->La commande **VOLUME ATTRIBUTES** retourne la taille, la place utilisée et la place libre sur le volume dont le nom est passé dans *volume*.<!-- END REF--> Ces valeurs sont exprimées en octets.

**Note :** Si *volume* indique un volume distant non monté, la variable OK prend la valeur 0 et les trois paramètres retournent -1\. 

#### Exemple 

Votre application comprend des opérations par lots qui sont exécutées la nuit ou pendant le week-end. Ces opérations stockent des fichiers temporaires sur disque. Pour que cette méthode soit aussi autonome et souple que possible, vous écrivez une routine qui va automatiquement chercher et utiliser le premier volume ayant de la place disponible pour les fichiers temporaires. Voici la méthode :

```4d
  // Méthode projet Chercher volume pour place
  // Chercher volume pour place ( Reel ) -> Alpha
  // Chercher volume pour place ( Place nécessaire en octets ) -> Nom du volume ou chaîne vide
 
 C_STRING(31;$0)
 C_STRING(255;$vaNomDoc)
 var $vlNbVolumes;$vlVolume : Integer
 var $1;$vlTaille;$vlUtilisé;$vlLibre : Real
 var $vhDocRef : Time
 
  // Initialiser le résultat de la fonction
 $0:=""
  // Protéger toutes les opérations d'entrée/sortie par une méthode d'interruption d'erreur
 ON ERR CALL("METHODE ERREUR")
  // Obtenir la liste des volumes
 ARRAY STRING(31;$taVolumes;0)
 gErreur:=0
 VOLUME LIST($taVolumes)
 If(gErreur=0)
  // Si nous sommes sous Windows, ignorer les deux lecteurs de disquettes
    If(Sous Windows)
       $vlVolume:=Find in array($taVolumes;"A:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($taVolumes;$vlVolume)
       End if
       $vlVolume:=Find in array($taVolumes;"B:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($taVolumes;$vlVolume)
       End if
    End if
    $vlNbVolumes:=Size of array($taVolumes)
  // For each volume
    For($vlVolume;1;$vlNbVolumes)
  // Obtenir la taille, la place utilisée et la place libre
       gErreur:=0
       VOLUME ATTRIBUTES($taVolumes{$vlVolume};$vlTaille;$vlUtilisé;$vlLibre)
       If(gErreur=0)
  // Est-ce que la place libre est suffisante (plus 32K) ?
          If($vlLibre>=($1+32768))
  // Si oui, vérifier que le volume n'est pas verrouillé...
             $vaNomDoc:=$taVolumes{$vlVolume}+Char(Symbole séparateur)+"XYZ"+String(Hasard)+".TXT"
             $vhDocRef:=Create document($vaNomDoc)
             If(OK=1)
                CLOSE DOCUMENT($vhDocRef)
                DELETE DOCUMENT($vaNomDoc)
  // Si tout est ok, retourner le nom du volume
                $0:=$taVolumes{$vlVolume}
                $vlVolume:=$vlNbVolumes+1
             End if
          End if
       End if
    End for
 End if
 ON ERR CALL("")
```

 cette méthode projet est ajoutée à votre application, vous pouvez écrire :

```4d
 $vaVolume:=Chercher volume pour place(100*1024*1024)
 If($vaVolume#"")
  // Continuer
 Else
    ALERT("Un volume avec au moins 100 Mo d'espace libre est nécessaire !")
 End if
```

#### Voir aussi 

[VOLUME LIST](volume-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 472 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||



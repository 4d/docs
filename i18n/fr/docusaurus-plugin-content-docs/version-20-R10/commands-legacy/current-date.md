---
id: current-date
title: Current date
slug: /commands/current-date
displayed_sidebar: docs
---

<!--REF #_command_.Current date.Syntax-->**Current date** {( * )} : Date<!-- END REF-->
<!--REF #_command_.Current date.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Retourne la date du jour du serveur |
| Résultat | Date | &#8592; | Date du jour |

<!-- END REF-->

## Description 

<!--REF #_command_.Current date.Summary-->**Current date** retourne la date courante telle que définie dans l'horloge système de la machine.<!-- END REF-->**:** Si vous passez le paramètre astérisque (\*) — lors d'une exécution sur un poste 4D Client —, la fonction retourne la date du jour telle que définie dans l'horloge du poste serveur. 

## Exemple 1 

L'exemple suivant fait apparaître une boîte de dialogue d'alerte affichant la date du jour :

```4d
 ALERT("Nous sommes le "+String(Date du jour)+".")
```

## Exemple 2 

Vous développez une application pour le marché international. Vous souhaitez savoir si la version de 4D avec laquelle votre application est exécutée fonctionne avec des dates formatées en MM/JJ/AAAA (version US) ou JJ/MM/AAAA (version française). Cette information est nécessaire pour vous permettre, par exemple, de personnaliser correctement les zones de saisie.

La méthode projet suivante vous permet de traiter cette question :

```4d
  // Méthode projet (fonction) Format date système
  // Format date système -> Chaine
  // Format date système -> Format de données 4D par défaut
 
 #DECLARE -> $format : Text
 var $vsDate;$vsMJA;$vsMois;$vsJour;$vsAnnée : Text
 var $vlPos : Integer
 var $vdDate : Date
 
  // Récupérer une date dans laquelle les valeurs de mois, de jour et d'année sont toutes différentes
 $vdDate:=Current date
 Repeat
    $vsMois:=String(Mois de($vdDate))
    $vsJour:=String(Jour de($vdDate))
    $vsAnnée:=String(Annee de($vdDate)%100)
    If(($vsMois=$vsJour) | ($vsMois=$vsAnnée) | ($vsJour=$vsAnnée))
       OK:=0
       $vdDate:=$vdDate+1
    Else
       OK:=1
    End if
 Until(OK=1)
 $format:=""   // Initialisation du résultat de la fonction
 $vsDate:=String($vdDate)
 $vlPos:=Position("/";$vsDate)   // Trouver le premier séparateur / dans la chaîne ../../..
 $vsMJA:=Substring($vsDate;1;$vlPos-1)   // Extraire les premiers chiffres de la date
 $vsDate:=Substring($vsDate;$vlPos+1)   // Eliminer les premiers chiffres et le premier séparateur /
 Case of
    :($vsMJA=$vsMois)   // Les chiffres expriment le mois
       $format:="MM"
    :($vsMJA=$vsJour)   // Les chiffres expriment le jour
       $format:="JJ"
    :($vsMJA=$vsAnnée)   // Les chiffres expriment l'année
       $format:="AAAA"
 End case
 $format:=$format+"/"   // Commencer à construire le résultat de la fonction
 $vlPos:=Position("/";$vsDate)   // Trouver le deuxième séparateur dans la chaîne ../..
 $vsMJA:=Substring($vsDate;1;$vlPos-1)   // Extraire les chiffres suivants de la date
 $vsDate:=Substring($vsDate;$vlPos+1)   // Réduire la chaîne aux derniers chiffres de la date
 Case of
    :($vsMJA=$vsMois)   // Les chiffres expriment le mois
       $format:=$format+"MM"
    :($vsMJA=$vsJour)   // Les chiffres expriment le jour
       $format:=$format+"JJ"
    :($vsMJA=$vsAnnée)   // Les chiffres expriment l'année
       $format:=$format+"AAAA"
 End case
 $format:=$format+"/"   // Poursuivre la construction du résultat de la fonction
 Case of
    :($vsDate=$vsMois)   // Les chiffres expriment le mois
       $format:=$format+"MM"
    :($vsDate=$vsJour)   // Les chiffres expriment le jour
       $format:=$format+"DD"
    :($vsDate=$vsAnnée)   // Les chiffres expriment l'année
       $format:=$format+"AAAA"
 End case
  // A ce moment, $format vaut soit MM/JJ/AAAA soit JJ/MM/AAAA, ou encore...
```

## Voir aussi 

[Day of](day-of.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 33 |
| Thread safe | &check; |



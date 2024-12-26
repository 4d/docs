---
id: window-list
title: WINDOW LIST
slug: /commands/window-list
displayed_sidebar: docs
---

<!--REF #_command_.WINDOW LIST.Syntax-->**WINDOW LIST** ( *fenêtres* {; *} )<!-- END REF-->
<!--REF #_command_.WINDOW LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtres | Array | &#8592; | Tableau des numéros de référence des fenêtres |
| * | Opérateur | &#8594;  | Si omis, ignorer fenêtres flottantes Si spécifié, tenir compte des fenêtres flottantes |

<!-- END REF-->

#### Description 

<!--REF #_command_.WINDOW LIST.Summary-->La commande **WINDOW LIST** remplit le tableau *fenêtres* avec les numéros de référence des fenêtres actuellement ouvertes dans tous les process (process moteur et process utilisateur).<!-- END REF--> Seules les fenêtres "visibles" (i.e. non cachées) sont retournées. 

Si vous ne passez pas le paramètre optionnel *\**, les fenêtres flottantes sont ignorées.

#### Exemple 

La méthode projet suivante place en "mosaïque" toutes les fenêtres ouvertes (à l'exception des fenêtres flottantes et des boîtes de dialogue) :

```4d
  // Méthode projet Mosaïque
 
 WINDOW LIST($alWnd)
 $vlLeft:=10
 $vlTop:=80 // Laissons de la place à la barre d'outils
 For($vlWnd;1;Size of array($alWnd))
    If(Window kind($alWnd{$vlWnd})#Modal dialog)
       GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlWR:=$vlLeft+($vlWR-$vlWL)
       $vlWB:=$vlTop+($vlWB-$vlWT)
       $vlWL:=$vlLeft
       $vlWT:=$vlTop
       SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})
       $vlLeft:=$vlLeft+10
       $vlTop:=$vlTop+25
    End if
 End for
```

**Note :** Cette méthode pourrait être améliorée par l'ajout de tests sur la taille de la fenêtre principale (sous Windows) ou sur la taille et l'emplacement du ou des écran(s) (sous Mac OS).

#### Voir aussi 

[Window kind](window-kind.md)  
[Window process](window-process.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 442 |
| Thread safe | &cross; |



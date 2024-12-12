---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *nom* {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Process number.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom du process duquel récupérer le numéro |
| * | Operator |  &#8594;  | Retourner le numéro du process serveur |
| Résultat | Integer | &#8592; | Numéro du process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Process number.Summary-->La commande **Process number** retourne le numéro du process dont vous passez le nom dans *nomProcess*.<!-- END REF--> Si aucun process n'est trouvé, **Process number** retourne 0.

Le paramètre optionnel *\** vous permet, à partir de 4D Client, de récupérer le numéro d'un process s'exécutant sur le serveur, c'est-à-dire une procédure stockée. Dans ce cas, la valeur retournée est négative. Cette option est particulièrement utile dans le cadre de l'utilisation des commandes [GET PROCESS VARIABLE](get-process-variable.md), [SET PROCESS VARIABLE](set-process-variable.md) et [VARIABLE TO VARIABLE](variable-to-variable.md). Pour plus d'informations, reportez-vous à la description de ces commandes.  
Si la commande est exécutée avec le paramètre *\** à partir d'un process tournant sur le poste serveur, la valeur retournée est positive.

#### Exemple 

Vous créez une palette flottante, fonctionnant dans un process séparé, dans lequel vous implémentez vos propres outils pour interagir avec l'environnement Développement. Par exemple, quand vous sélectionnez un élément dans une liste hérarchique de mots-clés, vous voulez coller du texte dans la fenêtre de premier plan du mode Développement. Pour cela, vous pouvez utiliser le presse-papiers, mais l'événement de collage doit se passer dans le process Développement. La petite fonction qui suit retourne le numéro du process de Développement (s'il est actif) :

```4d
  // Méthode projet Numéro process Développement
  // Numéro process Développement -> Entier long
  // Numéro process Développement -> Numéro du process de Développement
 
 $0:=Process number("Process Développement")
  // Note: ceci peut ne pas fonctionner si le nom du process est modifié dans l'avenir
```

Avec cette fonction, la méthode projet listée ci-dessous colle le texte reçu en paramètre dans la fenêtre de premier plan du mode Développement (si c'est possible) :

```4d
  // Méthode projet COLLER TEXTE EN STRUCTURE
  // COLLER TEXTE EN STRUCTURE ( Texte)
  // COLLER TEXTE EN STRUCTURE ( Texte à coller dans la fenêtre de Structure de premier plan )
 
 var $1 : Text
 var $vlStructurePID;$vlCompte : Integer
 
 $vlStructurePID:=Numero process Développement
 If($vlStructurePID #0)
  // Mettre le texte dans le presse-papiers
    SET TEXT TO PASTEBOARD($1)
  // Générer un événement Ctrl-V / Command-V
    POST KEY(Character code("v");Command key mask;$vlStructurePID)
  // Appeler répétitivement ENDORMIR PROCESS pour que le minuteur puisse passer
  // l'événement au process Développement
    For($vlCompte;1;5)
       DELAY PROCESS(Current process;1)
    End for
 End if
```

#### Voir aussi 

[GET PROCESS VARIABLE](get-process-variable.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 372 |
| Thread safe | &check; |



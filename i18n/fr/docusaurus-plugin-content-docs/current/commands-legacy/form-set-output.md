---
id: form-set-output
title: FORM SET OUTPUT
slug: /commands/form-set-output
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET OUTPUT.Syntax-->**FORM SET OUTPUT** ( {*laTable* ;} *formulaire* {; *formUtilisateur*} )<!-- END REF-->
<!--REF #_command_.FORM SET OUTPUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle définir le formulaire sortie ou Table par défaut si ce paramètre est omis |
| formulaire | Text, Object | &#8594;  | Nom du formulaire table (chaîne), ouChemin POSIX (chaîne) d'un fichier .json décrivant le formulaire, ouObjet décrivant le formulaire |
| formUtilisateur | Text | &#8594;  | Nom du formulaire utilisateur à utiliser |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.FORM SET OUTPUT.Summary-->**FORM SET OUTPUT** vous permet de définir *formulaire* ou *formUtilisateur* comme formulaire sortie courant de *laTable* pour le process courant.<!-- END REF--> *formulaire* doit appartenir à *laTable*.

Dans le paramètre *formulaire*, vous pouvez passer :

* le nom d'un formulaire (table) à utiliser,
* le chemin (en syntaxe POSIX) d'un fichier .json valide contenant la description du formulaire à utiliser (voir *Chemin d'accès du formulaire*),
* un objet contenant la description du formulaire à utiliser.

La portée de cette commande est le process courant. Chaque table dispose de son propre formulaire sortie dans chaque process. 

**Note :** Pour des raisons structurelles, cette commande n'est pas compatible avec les formulaires projets. 

La commande **FORM SET OUTPUT** ne provoque pas l'affichage du formulaire ; elle désigne simplement le formulaire devant être imprimé, affiché, ou utilisé par d'autres commandes. Pour plus d'informations sur la création de formulaires, reportez-vous au manuel *Mode Développement* de 4D.

Le formulaire sortie par défaut est défini dans la fenêtre de l'Explorateur pour chaque table. Il est identifié par la lettre S placée près de son nom dans l'Explorateur et dans les boîtes de dialogue listant les formulaires. Ce formulaire par défaut sera utilisé si vous n'appelez pas la commande **FORM SET OUTPUT** ou si vous passez à cette commande un nom de formulaire erroné ou inexistant.

Le paramètre facultatif *formUtilisateur* permet de désigner un formulaire utilisateur (issu du *formulaire*) comme formulaire sortie par défaut. Si vous passez un nom de formulaire utilisateur valide, ce formulaire sera utilisé par défaut en lieu et place du formulaire sortie dans le process courant. Ce principe permet de disposer simultanément de différents formulaires utilisateurs personnalisés (générés à l’aide de la commande *\_o\_CREATE USER FORM*) et d’utiliser celui qui convient en fonction du contexte. 

Pour plus d’informations sur les formulaires utilisateurs, reportez-vous à la section *Présentation des formulaires utilisateurs*. 

Les formulaires sortie sont exploités par trois groupes de commandes. Le premier groupe gère l'affichage des enregistrements à l'écran, le deuxième gère la génération d'états et le troisième gère l'export de données. 

Chacune des commandes suivantes affiche une liste d'enregistrements dans un formulaire sortie :

* [DISPLAY SELECTION](display-selection.md)
* [MODIFY SELECTION](modify-selection.md)

Vous utilisez le formulaire sortie lorsque vous créez des états à l'aide des commandes suivantes : 

* [PRINT LABEL](print-label.md)
* [PRINT SELECTION](print-selection.md)

 Chacune des commandes d'export suivantes utilise également le formulaire sortie : 

* [EXPORT DIF](export-dif.md)
* [EXPORT SYLK](export-sylk.md)
* [EXPORT TEXT](export-text.md)

#### Exemple 1 

L'exemple suivant illustre une utilisation typique **FORM SET OUTPUT**. Notez que, bien que dans cet exemple la commande **FORM SET OUTPUT** soit placée juste avant que le formulaire soit utilisé, cela n'est pas obligatoire. En fait, la commande pourrait se trouver dans n'importe quelle autre méthode, dans la mesure où elle est exécutée avant celle-ci : 

```4d
 FORM SET INPUT([Parties];"Saisie Parties") //Sélection du formulaire entrée
 FORM SET OUTPUT([Parties];"Liste Parties") //Sélection du formulaire sortie
 MODIFY SELECTION([Parties]) //Cette commande utilise les deux formulaires
```

#### Exemple 2 

L'exemple suivant utilise un formulaire décrit dans un fichier .json : 

```4d
 FORM SET OUTPUT([Personnel];"/RESOURCES/PersonnelPrintForm.json")
 ALL RECORDS([Personnel])
 PRINT SELECTION([Personnel])
```

#### Voir aussi 

[DISPLAY SELECTION](display-selection.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[FORM SET INPUT](form-set-input.md)  
[MODIFY SELECTION](modify-selection.md)  
[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
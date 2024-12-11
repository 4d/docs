---
id: document-list
title: DOCUMENT LIST
slug: /commands/document-list
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT LIST.Syntax-->**DOCUMENT LIST** ( *cheminAccès* ; *documents* {; *options*} )<!-- END REF-->
<!--REF #_command_.DOCUMENT LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Chemin d'accès de volume ou de dossier |
| documents | Text array | &#8592; | Nom des documents situés à cet endroit |
| options | Integer | &#8594;  | Options de construction de la liste |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOCUMENT LIST.Summary-->La commande **DOCUMENT LIST** remplit le tableau de type Texte *documents* avec les noms des documents situés à l'endroit que vous avez indiqué avec le paramètre *cheminAccès*.<!-- END REF-->Vous devez passer un chemin d'accès absolu dans le paramètre *cheminAccès*. 

Par défaut, si vous omettez le paramètre *options*, seuls les noms des documents sont retournés dans le tableau *documents*. Vous pouvez modifier ce fonctionnement en passant dans le paramètre *options* une ou plusieurs des constantes suivantes, placées dans le thème *Documents système* :

| Constante         | Type        | Valeur | Comment                                                                                    |
| ----------------- | ----------- | ------ | ------------------------------------------------------------------------------------------ |
| Absolute path     | Entier long | 2      | Le tableau *documents* contient des chemins d’accès absolus                                |
| Ignore invisible  | Entier long | 8      | Les documents invisibles ne sont pas listés                                                |
| Posix path        | Entier long | 4      | Le tableau *documents* contient des chemins d’accès au format POSIX                        |
| Recursive parsing | Entier long | 1      | Le tableau *documents* contient les fichiers et tous les sous-dossiers du dossier spécifié |

**Notes :**

* Avec l’option Recursive parsing en mode relatif (option 1 seule), les chemins des documents situés dans des sous-dossiers débutent par les caractères ":" ou "\\" en fonction de la plate-forme.
* Avec l’option Posix path en mode relatif (option 4 seule), les chemins ne débutent pas par "/"
* Avec l’option Posix path en mode absolu (option 4 + 2), les chemins débutent toujours par "/"

S'il n'y pas de document à l'endroit défini, la commande retourne un tableau vide. Si le chemin d'accès que vous avez passé dans *cheminAccès* est invalide, **DOCUMENT LIST** génère une erreur de gestionnaire de fichier que vous pouvez intercepter à l'aide d'une méthode installée par [ON ERR CALL](on-err-call.md).

#### Exemple 1 

Liste de tous les documents dans un dossier (syntaxe par défaut) :

```4d
 DOCUMENT LIST("C:\\";tabFichiers)
```

\-> tabFichiers :  
 Texte1.txt  
 Texte2.txt

#### Exemple 2 

Liste de tous les documents dans un dossier en mode absolu : 

```4d
 DOCUMENT LIST("C:\\";tabFichiers; Chemin absolu)
```

\-> tabFichiers :  
 C:\\Texte1.txt  
 C:\\Texte2.txt

#### Exemple 3 

Liste de tous les documents en mode récursif (relatif) : 

```4d
 DOCUMENT LIST("C:\\";tabFichiers;Chemin récursif)
```

  
\-> tabFichiers :  
 Texte1.txt  
 Texte2.txt  
 \\Dossier1\\Texte3.txt  
 \\Dossier1\\Texte4.txt  
 \\Dossier2\\Texte5.txt  
 \\Dossier2\\Dossier3\\Image1.png

#### Exemple 4 

Liste de tous les documents en mode récursif absolu : 

```4d
 DOCUMENT LIST("C:\\MonDossier\\";tabFichiers;Chemin récursif+Chemin absolu)
```

\-> tabFichiers :  
 C:\\MonDossier\\MonTexte1.txt  
 C:\\MonDossier\\MonTexte2.txt  
 C:\\MonDossier\\Dossier1\\MonTexte3.txt  
 C:\\MonDossier\\Dossier1\\MonTexte4.txt  
 C:\\MonDossier\\Dossier2\\MonTexte5.txt  
 C:\\MonDossier\\Dossier2\\Dossier3\\MonImage1.png

#### Exemple 5 

Liste de tous les documents en mode récursif POSIX (relatif) :

```4d
 DOCUMENT LIST("C:\\MonDossier\\";tabFichiers;Chemin récursif+Chemin POSIX)
```

\-> tabFichiers :  
 MonTexte1.txt  
 MonTexte2.txt  
 Dossier1/MonTexte3.txt  
 Dossier1/MonTexte4.txt  
 Dossier2/MonTexte5.txt  
 Dossier2/Dossier3/MonImage1.png

#### Voir aussi 

[FOLDER LIST](folder-list.md)  
[VOLUME LIST](volume-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 474 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||



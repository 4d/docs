---
id: text-to-document
title: TEXT TO DOCUMENT
slug: /commands/text-to-document
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO DOCUMENT.Syntax-->**TEXT TO DOCUMENT** ( *nomFichier* ; *texte* {; *jeuCaractères* {; *modeRetour*}} )<!-- END REF-->
<!--REF #_command_.TEXT TO DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom de document ou Chemin d'accès à un document |
| texte | Text | &#8594;  | Texte à stocker dans un document |
| jeuCaractères | Text, Integer | &#8594;  | Nom ou Numéro de jeu de caractères |
| modeRetour | Integer | &#8594;  | Mode de traitement des retours à la ligne |

<!-- END REF-->

#### Description 

<!--REF #_command_.TEXT TO DOCUMENT.Summary-->La commande **TEXT TO DOCUMENT** permet d’écrire directement le *texte* dans un fichier sur disque.<!-- END REF-->

Passez dans *nomFichier* le nom ou le chemin d’accès du fichier à écrire. Si le fichier n’existe pas, il est créé. S’il existe déjà sur le disque, son contenu précédent est écrasé. Si le fichier existe mais est déjà ouvert, son contenu est verrouillé et une erreur est générée. Vous pouvez passer dans *nomFichier* :

* uniquement le nom du fichier, par exemple "monFichier.txt" : dans ce cas, le fichier sera placé à côté du fichier de structure de l’application.
* un chemin d’accès relatif au fichier de structure de l’application, par exemple "\\\\docs\\\\monFichier.txt" sous Windows ou "//docs/monFichier.txt" sous macOS.
* un chemin d’accès absolu, par exemple "c:\\\\app\\\\docs\\\\monFichier.txt" sous Windows ou "MacHD/docs/monFichier.txt" sous macOS.

Si vous souhaitez permettre à l’utilisateur de désigner le nom ou l’emplacement du document, utilisez les commandes [Open document](open-document.md) ou [Create document](create-document.md) ainsi que la variable système *Document*.

**Note :** Par défaut, les documents générés par cette commande n’ont pas d’extension. Vous devez passer une extension dans *nomFichier*.

Passez dans le paramètre *texte* le texte à écrire sur disque. Il peut s’agir d’une constante littérale ("mon texte"), d’un champ texte ou d’une variable texte 4D. 

Vous pouvez passer dans *jeuCaractères* le jeu de caractères à utiliser pour l’écriture du document. Vous pouvez passer une chaîne contenant le nom standard du jeu (par exemple “ISO-8859-1” ou “UTF-8”) ou son identifiant MIBEnum (entier long). Pour plus d’informations sur la liste des jeux de caractères pris en charge par 4D, reportez-vous à la description de la commande [CONVERT FROM TEXT](convert-from-text.md). Si une BOM (Byte Order Mark) existe pour le jeu de caractères, 4D l’insère dans le document, sauf si le jeu de caractères utilisé contient le suffixe "-no-bom" (ex : "UTF-8-no-bom"). Si vous ne précisez pas de jeu de caractères, 4D utilise par défaut le jeu de caractères "UTF-8" défini sans BOM (sauf en mode compatibilité, voir *Page Compatibilité*). 

Vous pouvez passer dans *modeRetour* un entier long indiquant le traitement à effectuer sur les caractères de fin de ligne avant de les stocker dans le fichier. Vous pouvez passer une des constantes suivantes, placées dans le thème "*Documents système*" :

| Constante                   | Type        | Valeur | Comment                                                                                                                                                                   |
| --------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Entier long | 0      | Aucun traitement                                                                                                                                                          |
| Document with CR            | Entier long | 3      | Les sauts de ligne sont convertis en CR (*carriage return*), le format Classic Mac OS par défaut.                                                                         |
| Document with CRLF          | Entier long | 2      | Les sauts de ligne sont convertis en CRLF (*carriage return + line feed*), au format Windows par défaut.                                                                  |
| Document with LF            | Entier long | 4      | Les sauts de ligne sont convertis en LF (*line feed*), le format Unix et macOS par défaut.                                                                                |
| Document with native format | Entier long | 1      | (Défaut) Les sauts de ligne sont convertis au format natif de la plate-forme d’exécution : LF *(line feed)* sous macOS, CRLF (*carriage return + line feed*) sous Windows |

Par défaut, si le paramètre *modeRetour* est omis, les caractères de fin de ligne sont traités en mode natif (1).

**Note :** Cette commande ne modifie pas la variable OK. En cas d’échec, une erreur est générée, que vous pouvez intercepter à l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 1 

Voici des exemples type d’utilisation de cette commande :

```4d
 TEXT TO DOCUMENT("monTest.txt";"Ceci est un test")
 TEXT TO DOCUMENT("monTest.xml";"Ceci est un test")
```

#### Exemple 2 

Exemple permettant à l’utilisateur de désigner l’emplacement du fichier à créer :

```4d
 $MyTextVar:="Ceci est un test"
 ON ERR CALL("IO ERROR HANDLER")
 $vhDocRef :=Create document("")
     // Stocker le document avec l’extension ".txt"
     // Dans ce cas, l’extension .txt est toujours ajoutée au nom, il n’est pas possible de la modifier
 If(OK=1) // Si le document a bien été créé
       CLOSE DOCUMENT($vhDocRef) //Refermer le document
       TEXT TO DOCUMENT(Document;$MyTextVar )
        // On écrit le document
 Else
        // Gestion d’erreur
 End if
```

#### Voir aussi 

[Document to text](document-to-text.md)  
*Documents système*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1237 |
| Thread safe | &check; |



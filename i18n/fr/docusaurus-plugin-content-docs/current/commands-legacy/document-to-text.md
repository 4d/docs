---
id: document-to-text
title: Document to text
slug: /commands/document-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Document to text.Syntax-->**Document to text** ( *nomFichier* {; *jeuCaractères* {; *modeRetour*}} ) : Text<!-- END REF-->
<!--REF #_command_.Document to text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Nom de document ou Chemin d'accès à un document |
| jeuCaractères | Text, Integer | &#8594;  | Nom ou Numéro de jeu de caractères |
| modeRetour | Integer | &#8594;  | Mode de traitement des retours à la ligne |
| Résultat | Text | &#8592; | Texte issu du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.Document to text.Summary-->La commande **Document to text** permet de récupérer directement le contenu d’un fichier sur disque dans une variable texte ou un champ texte 4D.<!-- END REF-->

Passez dans *nomFichier* le nom ou le chemin d’accès du fichier à lire. Le fichier doit exister sur le disque, sinon une erreur est générée. Vous pouvez passer :

* uniquement le nom du fichier, par exemple "monFichier.txt" : dans ce cas, le fichier doit se trouver à côté du fichier de structure de l’application.
* un chemin d’accès relatif au fichier de structure de l’application, par exemple "\\\\docs\\\\monFichier.txt" sous Windows ou "/docs/monFichier.txt" sous macOS.
* un chemin d’accès absolu, par exemple "c:\\\\app\\\\docs\\\\monFichier.txt" sous Windows ou "MacHD/docs/monFichier.txt" sous macOS.

Vous pouvez passer dans *jeuCaractères* le jeu de caractères à utiliser pour la lecture. Vous pouvez passer une chaîne contenant le nom standard du jeu (par exemple “ISO-8859-1” ou “UTF-8”) ou son identifiant MIBEnum (entier long). Pour plus d’informations sur la liste des jeux de caractères pris en charge par 4D, reportez-vous à la description de la commande [CONVERT FROM TEXT](convert-from-text.md).

Si le document contient une BOM (Byte Order Mark), 4D utilise le jeu de caractères qu’elle définit au lieu du jeu de caractères spécifié dans *jeuCaractères* (ce paramètre est alors ignoré). 

Si le document ne contient pas de BOM et si le paramètre *jeuCaractères* est omis, 4D utilise par défaut les jeux de caractères suivants :

* sous Windows : ANSI
* sous OS X : MacRoman

Vous pouvez passer dans *modeRetour* un entier long indiquant le traitement à effectuer sur les caractères de fin de ligne présents dans le document. Vous pouvez utiliser une des constantes suivantes, placées dans le thème "*Documents système*" :

| Constante                   | Type        | Valeur | Comment                                                                                                                                                                   |
| --------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Document unchanged          | Entier long | 0      | Aucun traitement                                                                                                                                                          |
| Document with CR            | Entier long | 3      | Les sauts de ligne sont convertis en CR (*carriage return*), le format Classic Mac OS par défaut.                                                                         |
| Document with CRLF          | Entier long | 2      | Les sauts de ligne sont convertis en CRLF (*carriage return + line feed*), au format Windows par défaut.                                                                  |
| Document with LF            | Entier long | 4      | Les sauts de ligne sont convertis en LF (*line feed*), le format Unix et macOS par défaut.                                                                                |
| Document with native format | Entier long | 1      | (Défaut) Les sauts de ligne sont convertis au format natif de la plate-forme d’exécution : LF *(line feed)* sous macOS, CRLF (*carriage return + line feed*) sous Windows |

Par défaut, si le paramètre *modeRetour* est omis, les caractères de fin de ligne sont traités en mode natif (1).

**Note de compatibilité** : Les options de compatibilité sont disponibles pour gérer EOL et BOM. Voir la *Page Compatibilité*.

**Note :** Cette commande ne modifie pas la variable OK. En cas d’échec, une erreur est générée, que vous pouvez intercepter à l’aide d’une méthode installées par la commande [ON ERR CALL](on-err-call.md).

#### Exemple 

Soit le document texte suivant (les champs sont séparés par des tabulations) :

```RAW
id    name    price    vat3    4D Tags    99    19,6
```

Si vous exécutez ce code :

```4d
 $Text:=Document to text("products.txt")
```

... vous obtenez :

```4d
  // $Text = "id\tname\tprice\tvat\r\n3\t4D Tags\t99 \t19,6"
  // \t = tabulation
  // \r = CR
```

#### Voir aussi 

*Documents système*  
[TEXT TO DOCUMENT](text-to-document.md)  
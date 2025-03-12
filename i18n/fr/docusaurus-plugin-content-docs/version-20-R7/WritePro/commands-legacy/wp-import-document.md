---
id: wp-import-document
title: WP Import document
slug: /WritePro/commands/wp-import-document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *cheminFichier* {; *option*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Import document.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminFichier | Text | &#8594;  | Chemin du document 4D Write (.4w7 ou .4wt)<br/>ou du document 4D Write Pro (.4wp) |
| option | Integer, Object | &#8594;  | Option de formatage des expressions HTML |
| Résultat | Object | &#8592; | Objet 4D Write Pro |

<!-- END REF-->

## Description 

<!--REF #_command_.WP Import document.Summary-->La commande **WP Import document** convertit un document 4D Write Pro / 4D Write existant (extension .4wp, .4w7 ou .4wt) ou un document MS Word (.docx) en un nouvel objet 4D Write Pro.<!-- END REF-->

Dans le paramètre *cheminFichier*, vous passez le chemin d'accès d'un document stocké sur disque. Les types de documents suivants sont pris en charge :

* ancien document 4D Write (.4w7 ou .4wt). Pour une liste détaillée des fonctions 4D Write qui sont actuellement prises en charge dans les objets 4D Write Pro, veuillez vous référer à la section *Import de documents 4D Write*.
* documents au format 4D Write Pro (.4wp). Pour plus d'informations sur le format de document 4D Write Pro, veuillez vous reporter au paragraphe *Format de document .4wp*.
* documents au format .docx. Pour plus d'informations, veuillez consulter *Exporter au format .docx*.

Vous devez passer un chemin d'accès complet, sauf si le document est situé au même niveau que le fichier de structure, auquel cas vous pouvez passer uniquement son nom.

**Note :** Si vous voulez importer un document stocké dans un champ BLOB 4D, utilisez plutôt la commande [WP New](wp-new.md).

Une erreur est retournée si le paramètre *cheminFichier* est invalide, si le fichier est manquant, ou si le format du fichier n'est pas pris en charge.

Le paramètre optionnel *option* permet de définir les options d'import pour :

* **entier long**

Par défaut, les expressions HTML insérées dans les anciens documents 4D Write ne sont pas importées (aucune prise en charge de 4D Write Pro). Si vous passez la constante wk import html expressions as text dans le paramètre option, les expressions HTML seront importées en texte brut dans les balises *##htmlBegin##* et *##htmlEnd##* \-- et devront être formatées ultérieurement. Par exemple :

```RAW
##htmlBegin##Titre importébold##htmlEnd##
```

* **objet**  
    
Vous pouvez passer un objet pour définir la manière dont les attributs suivants sont traités lors de l'import :  
    
| **Attribut**            | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |  
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| anchoredTextAreas       | Texte    | Pour les documents MS Word (.docx) uniquement. Indique la manière dont les zones de texte ancré sont gérées. Valeurs disponibles :<br/><br/> **anchored** (par défaut) - Les zones de texte ancrées sont traitées comme des zones de texte. **inline** \- Les zones de texte ancré sont traitées comme du texte en ligne au niveau de l'ancre. **ignore** \- Les zones de texte ancré sont ignorées. **Note** : La mise en page et le nombre de pages du document peuvent changer. Voir aussi *Comment importer au format .docx*                                                                                                                                                   |  
| anchoredImages          | Texte    | Pour les documents MS Word (.docx) uniquement. Indique la manière dont les images ancrées sont gérées. Valeurs disponibles :<br/><br/> **all** (par défaut) - Toutes les images ancrées sont importées en tant qu'images ancrées avec leurs propriétés d'habillage du texte (exception : l'option d'habillage .docx "tight" est importée en tant que "wrap square"). **ignoreWrap** \- Les images ancrées sont importées, mais tout texte comportant l'image est ignoré. **ignore** \- Les images ancrées ne sont pas importées.                                                                                                                                                   |  
| sections                | Texte    | Pour les documents MS Word (.docx) uniquement. Indique la manière dont les sections sont gérées. Valeurs disponibles :<br/><br/> **all** (par défaut) - Toutes les sections sont importées. Les sections continues, paires ou impaires sont converties en sections standard. **ignore** \- Les sections sont converties en sections 4D Write Pro par défaut (mise en page portrait A4 sans en-tête ni pied de page). **Note** : Les sauts de section (à l'exception des sauts continus) sont convertis en sauts de section avec saut de page. Les sauts de section continus sont importés.                                                                                         |  
| fields                  | Texte    | Pour les documents MS Word (.docx) uniquement. Indique la manière dont les champs .docx ne pouvant être convertis en formules 4D Write Pro sont gérés. Valeurs disponibles :<br/><br/> **ignore** \- Les champs .docx sont ignorés. **label** \- Les références de champ .docx sont importées sous forme d'étiquettes entre doubles accolades ("{{ }}"). Ex : le champ "ClientName" serait importé en tant que {{ClientName}}. **value** (par défaut) - La dernière valeur calculée pour le champ .docx (si disponible) est importée. **Note** : Si un champ .docx correspond à une variable 4D Write Pro, le champ est importé sous forme de formule et cette option est ignorée. |  
| borderRules             | Texte    | Pour les documents MS Word (.docx) uniquement. Indique la manière dont les bordures de paragraphes sont gérées. Valeurs disponibles :<br/><br/> **collapse** \- La mise en forme des paragraphes est modifiée pour imiter les bordures automatiquement repliées. A noter que la propriété collapse s'applique uniquement pendant l'opération d'import. Si une feuille de style avec un paramètre de réduction automatique de la bordure est réappliquée après l'import, le paramètre sera ignoré. **noCollapse** (par défaut) - La mise en forme des paragraphes n'est pas modifiée.                                                                                               |  
| preferredFontScriptType | Texte    | Spécifie la police favorite à utiliser lorsque différentes polices sont définies pour une seule propriété de police dans OOXML. Valeurs disponibles :<br/><br/> **latin** (par défaut) - Ecriture latine **bidi** \- Script bidirectionnel. Convient aux documents principalement composés de texte bidirectionnel de gauche à droite (LTR) ou de droite à gauche (RTL) (par exemple, en arabe ou en hébreu). **eastAsia** \- Script d'Asie de l'Est. Convient aux documents principalement composés de texte asiatique.                                                                                                                                                           |  
| htmlExpressions         | Texte    | Pour les documents 4D Write (.4w7) uniquement. Indique la manière dont les expressions HTML sont gérées. Valeurs disponibles :<br/><br/> **rawText** \- Les expressions HTML sont importées sous forme de texte brut dans les balises ##htmlBegin## et ##htmlEnd## **ignore** (par défaut) - Les expressions HTML sont ignorées.                                                                                                                                                                                                                                                                                                                                                   |  
| importDisplayMode       | Texte    | Pour les documents 4D Write (.4w7) uniquement. Indique la manière dont les images affichées sont gérées. Valeurs disponibles :<br/><br/> **legacy -** image display mode 4W7 est converti à l'aide d'une image de fond si le mode est différent de "ScaledToFit". **noLegacy** (par défaut) - image display mode 4W7 est converti en attribut *imageDisplayMode* si le mode est différent du mode "ScaledToFit".                                                                                                                                                                                                                                                                   |

**Notes de c* *ompatibilité** 

* *Les feuilles de style de caractères des documents 4D Write hérités utilisent un mécanisme propriétaire, qui n'est pas pris en charge par 4D Write Pro. Afin d'obtenir le meilleur résultat pour les textes importés, les attributs de feuilles de style sont convertis en attributs de style "codés en dur". Les feuilles de style de caractères hérités ne sont pas importants et ne sont plus référencés dans les documents.*
* *La prise en charge de l'import au format .docx n'est certifiée que pour Microsoft Word 2010 et les versions plus récentes. Les versions antérieures, en particulier Microsoft Word 2007, peuvent ne pas être importées correctement.*

## Exemple 1 

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Exemple 2 

Vous souhaitez importer un document .docx et souhaitez que les bordures de paragraphe soient réduites comme dans MS Word :

```4d
 $options:=New object
 $options.borderRules:="collapse" // réduit les bordures de paragraphe lors de la conversion
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Vous souhaitez importer les champs d'origine .docx sous forme de texte (pour les champs non convertis en formules 4D) :

```4d
 $options:=New object
 $options.fields:="label" //pour les champs non convertis, importer les références de champ sous forme de texte entre {{ et }}
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Vous souhaitez importer un document .docx dont le texte est principalement en japonais :

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //forcer la conversion pour favoriser les scripts de police d'Asie de l'Est
 
 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Voir aussi 

[WP New](wp-new.md)  
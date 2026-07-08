---
id: wp-import-document
title: WP Import document
displayed_sidebar: docs
---

<!--REF #_command_.WP Import document.Syntax-->**WP Import document** ( *filePath* : Text { ; *option* : Integer, Object} ) : Object<br/>**WP Import document** ( *fileObj* : 4D.File { ; *option* : Integer, Object} ) : Object<!-- END REF-->

<!--REF #_command_.WP Import document.Params-->

<div class="no-index">

| Paramètres | Type                                              |                             | Description                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filePath   | Text                                              | &#8594; | Chemin d'accès : un document 4D Write (.4w7 ou .4wt) ou un document 4D Write Pro (.4wp) ou un document .docx (.docx) |
| fileObj    | [4D.File](../../API/FileClass.md) | &#8594; | Objet du fichier à importer                                                                                                                                                                                                                                                   |
| option     | Integer, Object                                   | &#8594; | (Integer) Option d'importation pour les expressions HTML, (object) Options d'importation pour les documents .docx                                                                                                       |
| Résultat   | Object                                            | &#8592; | Objet 4D Write Pro                                                                                                                                                                                                                                                            |

</div>
<!-- END REF-->

## Description

La commande **WP Import document**<!--REF #_command_.WP Import document.Summary--> convertit un document 4D Write Pro / 4D Write existant (.4wp, .4w7 ou .4wt) ou un document MS Word (.docx) en un nouvel objet 4D Write Pro.<!-- END REF-->

Vous pouvez passer soit un *filePath* ou *fileObj* :

- Dans le paramètre *filePath*, indiquez le chemin d'accès d'un document stocké sur le disque. Vous devez indiquer un chemin d'accès complet, sauf si le document se trouve au même niveau que le dossier Project, auquel cas vous pouvez vous contenter d'indiquer son nom.

- Dans le paramètre *fileObj*, passez un objet 4D.File représentant le fichier à importer.

Les types de documents suivants sont pris en charge :

- anciens documents 4D Write (.4w7 ou .4wt). Pour une liste détaillée des fonctionnalités de 4D Write qui sont actuellement prises en charge dans les objets de 4D Write Pro, veuillez vous référer à la section [Import de documents 4D Write](../user-legacy/importing-4d-write-documents.md).
- Documents au format 4D Write Pro (.4wp). Pour plus d'informations sur le format du document 4D Write Pro, reportez-vous à [.4wp document format](../user-legacy/storing-4d-write-pro-documents-in-4d-object-fields.md#4wp-document-format).
- Documents au format .docx. Pour plus d'informations, voir [Importer et exporter au format .docx](../user-legacy/importing-and-exporting-in-docx-format.md).

**Note :** Si vous souhaitez importer un document stocké dans un champ BLOB 4D, vous pouvez également utiliser la commande [WP New](../commands/wp-new).

Une erreur est renvoyée si le paramètre *filePath* ou *fileObj* n'est pas valide, si le fichier est manquant ou si le format de fichier n'est pas pris en charge.

Le paramètre facultatif *option* permet de définir des options d'importation pour :

- **longint**

Par défaut, les expressions HTML insérées dans les anciens documents 4D Write ne sont pas importées (pas de support 4D Write Pro). Si vous passez la constante wk import html expressions as text, les expressions HTML seront importées comme du texte brut à l'intérieur des balises `##htmlBegin##` et `##htmlEnd##` -- ce qui nécessitera des actions de formatage par la suite. Par exemple :

```html
##htmlBegin##Imported titlebold##htmlEnd##  
```

- **object**

Vous pouvez passer un objet pour définir comment les attributs suivants sont traités pendant l'opération d'importation :

| **Attribut**            | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| anchoredTextAreas       | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie comment les zones de texte ancrées de Word sont gérées. Valeurs disponibles :<br/><br/> **anchored** (par défaut) - Les zones de texte ancrées sont traitées comme des zones de texte. **inline** \- Les zones de texte ancrées sont traitées comme du texte en ligne à la position de l'ancre. **ignore** \- Les zones de texte ancrées sont ignorées. **Note** : La mise en page et le nombre de pages du document peuvent changer. Voir aussi *Comment importer un format .docx*                                                                                                                                                                                                                                                                                   |
| anchoredImages          | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie comment les images ancrées sont traitées. Valeurs disponibles :<br/><br/> **all** (par défaut) - Toutes les images ancrées sont importées en tant qu'images ancrées avec leurs propriétés d'habillage du texte (exception : l'option d'habillage .docx "tight" est importée en tant qu'habillage carré). **ignoreWrap** \- Les images ancrées sont importées, mais tout texte entourant l'image est ignoré. **ignore** \N- Les images ancrées ne sont pas importées.                                                                                                                                                                                                                                                                                                |
| sections                | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie comment les sections sont gérées. Valeurs disponibles :<br/><br/> **all** (par défaut) - Toutes les sections sont importées. Les sections continues, paires ou impaires sont converties en sections standard. **ignore** \- Les sections sont converties en sections par défaut de 4D Write Pro (format A4 portrait sans en-tête ni pied de page). **Note** : Les sauts de section de tout type sauf continus sont convertis en sauts de section avec saut de page. Les sauts de section continus sont importés en tant que sauts de section continus.                                                                                                                                                                                              |
| fields                  | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie comment les champs .docx qui ne peuvent pas être convertis en formules 4D Write Pro sont traités. Valeurs disponibles :<br/><br/> **ignore** \- Les champs .docx sont ignorés. **label** \- Les références aux champs .docx sont importées sous forme de libellés entre doubles accolades ("{{ }}"). Ex : Le champ "ClientName" serait importé sous la forme {{ClientName}}. **value** (par défaut) - La dernière valeur calculée pour le champ .docx (si disponible) est importée. **Note** : Si un champ .docx correspond à une variable de 4D Write Pro, le champ est importé comme une formule et cette option est ignorée. |
| borderRules             | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie la manière dont les bordures de paragraphe sont gérées. Valeurs disponibles :<br/><br/> **collapse** \- La mise en forme du paragraphe est modifiée pour imiter les bordures automatiquement réduites. Notez que la propriété de réduction ne s'applique que pendant l'opération d'importation. Si une feuille de style avec un paramètre de réduction automatique des bordures est réappliquée après l'opération d'importation, le paramètre sera ignoré. **noCollapse** (par défaut) - La mise en forme des paragraphes n'est pas modifiée.                                                                                                                                                                                                                                                          |
| preferredFontScriptType | Text     | Pour les documents MS Word (.docx) uniquement. Spécifie la police de caractères préférée à utiliser lorsque plusieurs polices sont définies pour une même propriété de police dans OOXML. Valeurs disponibles :<br/><br/> **latin** (par défaut) - Script latin **bidi** \- Script bidirectionnel. Convient si le document est principalement composé de texte bidirectionnel de gauche à droite (LTR) ou de droite à gauche (RTL) (par exemple, en arabe ou en hébreu). **eastAsia** \- Script d'Asie de l'Est. Convient si le document est principalement composé de textes asiatiques.                                                                                                                                                                                                            |
| htmlExpressions         | Text     | Pour les documents 4D Write (.4w7) uniquement. Spécifie comment les expressions HTML sont traitées. Valeurs disponibles : <br/><br/> **rawText** \- Les expressions HTML sont importées en tant que texte brut dans les balises ##htmlBegin## et ##htmlEnd## **ignore** (par défaut) - Les expressions HTML sont ignorées.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| importDisplayMode       | Text     | Pour les documents 4D Write (.4w7) uniquement. Spécifie comment l'affichage des images est géré. Valeurs disponibles : <br/><br/> **legacy -** Le mode d'affichage des images 4W7 est converti à l'aide d'une image d'arrière-plan s'il est différent de la mise à l'échelle. **noLegacy** (par défaut) - Le mode d'affichage des images 4W7 est converti dans l'attribut *imageDisplayMode* s'il est différent de la mise à l'échelle.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

**Notes de compatibilité**

- *Les feuilles de style de caractères dans les anciens documents 4D Write utilisent un mécanisme propriétaire, qui n'est pas pris en charge par 4D Write Pro. Pour obtenir le meilleur résultat possible pour le texte importé, les attributs de la feuille de style sont convertis en attributs de style "codés en dur". Les feuilles de style des caractères hérités ne sont pas importées et ne sont plus référencées dans le document.*
- *La prise en charge de l'importation au format .docx n'est certifiée que pour Microsoft Word 2010 et les versions plus récentes. Les versions plus anciennes, en particulier Microsoft Word 2007, peuvent ne pas être importées correctement.*

## Exemple 1

```4d
 var WPDoc : Object
 WPDoc:=WP Import document("C:\\documents\\4DWriteDocs\\Letter.4w7")
```

## Exemple 2

Vous souhaitez importer un document .docx et aimeriez que les bordures des paragraphes soient réduites comme dans MS Word :

```4d
 $options:=New object
 $options.borderRules:="collapse" //réduire les marges des paragraphes lors de la conversion

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Vous voulez importer les champs .docx d'origine en tant que texte (pour les champs non convertis en formules 4D) :

```4d
 $options:=New object
 $options.fields:="label" //pour les champs non convertis, importez les références de champ sous forme de texte entre {{ and }}

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

Vous voulez importer un document .docx dont le texte est principalement en japonais :

```4d
 $options:=New object
 $options.preferredFontScriptType:="eastAsia" //Forcer la conversion pour privilégier les polices de caractères eastAsia

 wpDoc:=WP Import document(«mydoc.docx»;$options)
```

## Exemple 3

Vous voulez importer un document sur disque en utilisant un objet File :

```4d
var $file : 4D.File

$file:=File("/RESOURCES/myFile.4wp")

WParea:=WP Import document($file)
```

## Voir également

[WP New](../commands/wp-new)


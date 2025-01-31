---
id: get-style-sheet-info
title: GET STYLE SHEET INFO
slug: /commands/get-style-sheet-info
displayed_sidebar: docs
---

<!--REF #_command_.GET STYLE SHEET INFO.Syntax-->**GET STYLE SHEET INFO** ( *nomFeuilleStyle* ; *police* ; *taille* ; *styles* )<!-- END REF-->
<!--REF #_command_.GET STYLE SHEET INFO.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |
| police | Text | &#8592; | Police de caractères |
| taille | Integer | &#8592; | Taille de police |
| styles | Integer | &#8592; | Valeur de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET STYLE SHEET INFO.Summary-->La commande **GET STYLE SHEET INFO** retourne la configuration courante de la feuille de style *nomFeuilleStyle*.<!-- END REF--> 

Passez dans *nomFeuilleStyle* le nom de la feuille de style tel que défini en mode Développement. Pour désigner une feuille de style automatique, utilisez une des constantes suivantes, placées dans le thème "*Styles de caractères*" : 

| Constante                         | Type   | Valeur                              | Comment                                                                                                                                   |
| --------------------------------- | ------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Automatic style sheet             | Chaîne | \_\_automatic\_\_                   | Utilisée par défaut pour tous les objets                                                                                                  |
| Automatic style sheet\_additional | Chaîne | \_\_automatic\_additional\_text\_\_ | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour du texte additionnel dans les boîtes de dialogue. |
| Automatic style sheet\_main       | Chaîne | \_\_automatic\_main\_text\_\_       | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour le texte principal des boîtes de dialogue.        |

La commande retourne dans *police* le nom de la police de caractères associée à la feuille de style pour la plate-forme courante. 

La commande retourne dans *taille* la taille en points de la police de caractères associée à la feuille de style pour la plate-forme courante. 

La commande retourne dans *styles* une valeur correspondant au(x) style(s) associé(s) à la feuille de style pour la plate-forme courante. Vous pouvez comparer la valeur reçue aux constantes suivantes, placées dans le thème "*Styles de caractères*" : 

| Constante            | Type        | Valeur |
| -------------------- | ----------- | ------ |
| Bold                 | Entier long | 1      |
| Bold and Italic      | Entier long | 3      |
| Bold and Underline   | Entier long | 5      |
| Italic               | Entier long | 2      |
| Italic and Underline | Entier long | 6      |
| Plain                | Entier long | 0      |
| Underline            | Entier long | 4      |

Si la commande est exécutée correctement, la variable système *OK* prend la valeur 1\. Dans le cas contraire (par exemple si *nomFeuilleStyle* n’existe pas), elle prend la valeur 0.

##### Note de compatibilité 

Dans **l'architecture Projet**, seules les trois feuilles de style automatiques sont prises en charge par cette commande.

#### Exemple 

Vous souhaitez connaître la configuration actuelle de la feuille de style "Automatique" :

```4d
 var $taille;$style : Integer
 var $pol : Text
 GET STYLE SHEET INFO(Automatic style sheet;$pol;$taille;$style)
```

#### Voir aussi 

[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1256 |
| Thread safe | &cross; |
| Modifie les variables | OK |



---
id: get-pasteboard-data-type
title: GET PASTEBOARD DATA TYPE
slug: /commands/get-pasteboard-data-type
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Syntax-->**GET PASTEBOARD DATA TYPE** ( *signatures4D* ; *typesNatifs* {; *nomsFormats*} )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA TYPE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| signatures4D | Text array | &#8592; | Signatures 4D des types de données |
| typesNatifs | Text array | &#8592; | Types de données natifs |
| nomsFormats | Text array | &#8592; | Noms des formats (Windows uniquement), chaînes vides sous Mac OS |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Summary-->La commande **GET PASTEBOARD DATA TYPE** permet d’obtenir la liste des types de données présents dans le conteneur.<!-- END REF--> Cette commande doit généralement être utilisée dans le contexte d'un glisser-déposer, dans le cadre des événements formulaire On Drop ou On Drag Over de l’objet de destination. Elle permet notamment de vérifier la présence d’un type de données spécifique dans le conteneur.

Cette commande retourne les types de données sous plusieurs formes différentes via deux (ou trois) tableaux :

* le tableau *signatures4D* contient les types de données exprimés à l’aide de leur signature 4D interne (par exemple “com.4d.private.picture.gif”). Si un type de données présent n’est pas reconnu par 4D, une chaîne vide (“”) est retournée dans le tableau.
* le tableau *typesNatifs* contient les types de données exprimés à l’aide de leur type natif. Le format des types natifs diffère entre Mac OS et Windows :  
   * Sous Mac OS, les types natifs sont exprimés sous forme d’UTI (UniformType Identifier).  
   * Sous Windows, les types natifs sont exprimés sous forme de numéros, chaque numéro étant associé à un nom de format. Le tableau *typesNatifs* contient ces numéros sous forme de chaîne (“3”, “12”, etc.). Si vous souhaitez utiliser des libellés plus explicites, il est recommandé d’utiliser le tableau facultatif *nomsFormats*, qui contient le nom de format des types natifs sous Windows.  
Le tableau *typesNatifs* permet de prendre en charge tout type de données présent dans le conteneur, y compris des données dont le type n’est pas référencé par 4D.
* Sous Windows, vous pouvez également passer le tableau *nomsFormats*, qui reçoit les noms des types de données présents dans le conteneur. Les valeurs retournées dans ce tableau peuvent être utilisées par exemple pour construire un pop up menu de sélection de format. Sous Mac OS, le tableau *nomsFormats* retourne des chaînes vides.

Pour plus d’informations sur les types de données pris en charge, reportez-vous à la section *Gestion du conteneur de données*. 

#### Voir aussi 

*Gestion du conteneur de données*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 958 |
| Thread safe | &cross; |



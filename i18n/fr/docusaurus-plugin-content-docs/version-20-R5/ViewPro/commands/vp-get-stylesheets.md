---
id: vp-get-stylesheet
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| Paramètres | Type       |                             | Description                                              |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nom d'objet formulaire zone 4D View Pro                  |                  |
| sheet      | Integer    | ->                          | Cible (par défaut = feuille courante) |                  |
| Résultat   | Collection | <- | Collection d'objets feuille de style                     | <!-- END REF --> |

#### Description

La commande `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary -->retourne la collection d'objets feuille de style définis à partir de la _feuille_ désignée<!-- END REF -->.

In _vpAreaName_, pass the name property of the 4D View Pro area. Si vous passez un nom inexistant, une erreur est retournée.

Vous pouvez définir où lire les feuilles de style via le paramètre _sheet_ en passant le numéro d'indice de la feuille (la numérotation commence à partir de 0) ou à l'aide des constantes suivantes :

- `vk current sheet`
- `vk workbook`

#### Exemple

Le code suivant retournera une collection de tous les objets style de la feuille courante :

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

Dans ce cas, la feuille courante utilise deux objets style :

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### Voir également

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)

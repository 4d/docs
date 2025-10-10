---
id: print-form
title: Print form
displayed_sidebar: docs
---

<!--REF #_command_.Print form.Syntax-->**Print form** ( {*aTable* ;} *form* {; *formData*} {; *areaStart*{; *areaEnd*}} ) : Integer<!-- END REF-->

<!--REF #_command_.Print form.Params-->

| Paramètres | Type         |                             | Description                                                                                                                                                                                           |
| ---------- | ------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| aTable     | Table        | &#8594; | Table du formulaire, ou table par défaut si omis                                                                                                                                                      |
| form       | Text, Object | &#8594; | Nom (chaîne) du formulaire, ou chemin POSIX (chaîne) vers un fichier .json décrivant le formulaire, ou objet décrivant le formulaire à imprimer |
| formData   | Object       | &#8594; | Données à associer au formulaire                                                                                                                                                                      |
| areaStart  | Integer      | &#8594; | Marqueur d'impression ou zone de démarrage (si areaEnd est spécifié)                                                                                                               |
| areaEnd    | Integer      | &#8594; | Zone de fin (si areaStart est spécifié)                                                                                                                                            |
| Résultat   | Integer      | &#8592; | Hauteur de la section imprimée                                                                                                                                                                        |

<!-- END REF-->

## Description

<!--REF #_command_.Print form.Summary-->The **Print form** command simply prints *form* with the current values of fields and variables of *aTable*.<!-- END REF-->La commande **Print form** imprime simplement *form* avec les valeurs courantes des champs et des variables de la table *aTable*. Elle est généralement utilisée pour imprimer des états très complexes qui nécessitent un contrôle complet du processus d'impression. **Print form** ne gère pas les traitements d'enregistrements, ni les ruptures, sauts de pages, en-têtes ou pieds de pages. Vous devez vous-même prendre en charge ces opérations. **Print form** imprime uniquement des champs et des variables avec une taille fixe, la commande ne gère pas les objets de taille variable.

Dans le paramètre *form*, vous pouvez passer soit :

- le nom d'un formulaire,
- le chemin d'accès (en syntaxe POSIX) d'un fichier .json valide contenant une description du formulaire à utiliser (voir *Chemin d'accès au fichier de formulaire*), ou
- un objet contenant la description du formulaire à utiliser.

Comme **Print form** ne génère pas de saut de page après avoir imprimé un formulaire, elle vous permet de combiner facilement différents formulaires sur la même page. Ainsi, **Print form** est idéale pour effectuer des impressions complexes impliquant plusieurs tables et plusieurs formulaires. Pour forcer un saut de page entre les formulaires, utilisez la commande [PAGE BREAK](../commands-legacy/page-break.md). Pour reporter l'impression à la page suivante d'un formulaire dont la hauteur est supérieure à l'espace disponible, appelez la commande [CANCEL](../commands-legacy/cancel.md) avant la commande [PAGE BREAK](../commands-legacy/page-break.md).

Trois syntaxes différentes peuvent être utilisées :

- **Impression du corps d'un formulaire**

Syntaxe :

```4d
 height:=Print form(myTable;myForm)
```

Dans ce cas, **Print form** n'imprime que la zone de corps du formulaire (la zone comprise entre les marqueur d'en-tête et de corps).

- **Impression de zone de formulaire**

Syntaxe :

```4d
 height:=Print form(myTable;myForm;marker)
```

Dans ce cas, la commande imprime la section désignée par *marker*. Passez dans le paramètre *marker* une des constantes :

| Constante     | Type    | Valeur |
| ------------- | ------- | ------ |
| Form break0   | Integer | 300    |
| Form break1   | Integer | 301    |
| Form break2   | Integer | 302    |
| Form break3   | Integer | 303    |
| Form break4   | Integer | 304    |
| Form break5   | Integer | 305    |
| Form break6   | Integer | 306    |
| Form break7   | Integer | 307    |
| Form break8   | Integer | 308    |
| Form break9   | Integer | 309    |
| Form detail   | Integer | 0      |
| Form footer   | Integer | 100    |
| Form header   | Integer | 200    |
| Form header1  | Integer | 201    |
| Form header10 | Integer | 210    |
| Form header2  | Integer | 202    |
| Form header3  | Integer | 203    |
| Form header4  | Integer | 204    |
| Form header5  | Integer | 205    |
| Form header6  | Integer | 206    |
| Form header7  | Integer | 207    |
| Form header8  | Integer | 208    |
| Form header9  | Integer | 209    |

- **Impression de section**

Syntaxe :

```4d
 height:=Print form(myTable;myForm;areaStart;areaEnd)
```

Dans ce cas, la commande imprime la section comprise entre les paramètres *areaStart* et *areaEnd*. Les valeurs saisies doivent être exprimées en pixels.

**formData**

Optionnellement, vous pouvez passer des paramètres au formulaire *form* en utilisant soit l'objet *formData*, soit l'objet de classe de formulaire automatiquement instancié par 4D si vous avez [associé une classe utilisateur au formulaire](../FormEditor/properties_FormProperties.md#form-class). Toutes les propriétés de l'objet de données du formulaire seront alors disponibles dans le contexte du formulaire par le biais de la commande [Form](form.md). L'objet form data est disponible dans l'[événement formulaire `On Printing Detail`](../Events/onPrintingDetail.md).

Pour des informations détaillées sur l'objet de données formulaire, veuillez vous référer à la commande [`DIALOG`](dialog.md).

**Valeur retournée**

La valeur retournée par **Print form** indique la hauteur de la zone d’impression. Cette valeur sera automatiquement prise en compte par la commande [Get printed height](../commands-legacy/get-printed-height.md).

Les boîtes de dialogue standard d'impression n'apparaissent pas lorsque vous utilisez la commande **Print form**. L'état généré ne tient pas compte des paramètres d'impression définis en mode Développement pour le formulaire. Il y a deux manières de définir les paramètres d'impression avant d'effectuer une série d'appels à **Print form** :

- Appeler [PRINT SETTINGS](../commands-legacy/print-settings.md). Dans ce cas, vous laissez l'utilisateur définir ses paramètres dans les boîtes de dialogue d'impression.
- Appeler [SET PRINT OPTION](../commands-legacy/set-print-option.md) et [GET PRINT OPTION](../commands-legacy/get-print-option.md). Dans ce cas, les paramètres sont définis par programmation.

**Print form** construit chaque page à imprimer en mémoire. Chaque page est imprimée lorsque la page en mémoire est remplie ou lorsque vous appelez [PAGE BREAK](../commands-legacy/page-break.md). Pour vous assurer que la dernière page d'une impression exécutée par l'intermédiaire de **Print form** est effectivement imprimée, il faut terminer par la commande [PAGE BREAK](../commands-legacy/page-break.md) (sauf dans le cadre d'un [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), voir note). Sinon, la dernière page, si elle n'est pas remplie, reste en mémoire et n'est pas imprimée.

**Attention :** Si la commande est appelée dans le contexte d'une tâche d'impression ouverte avec [OPEN PRINTING JOB](../commands-legacy/open-printing-job.md), vous ne devez PAS appeler [PAGE BREAK](../commands-legacy/page-break.md) pour la dernière page car celle-ci est automatiquement imprimée par la commande [CLOSE PRINTING JOB](../commands-legacy/close-printing-job.md). Si vous appelez [PAGE BREAK](../commands-legacy/page-break.md) dans ce cas, une page vide est imprimée.

Cette commande permet d'imprimer des zones et des objets externes (par exemple, les zones 4D Write Pro ou 4D View Pro). La zone est réinitialisée à chaque exécution de la commande.

**Attention :** **Print form** n'imprime pas les sous-formulaires. Si vous voulez imprimer uniquement un formulaire comportant de tels objets, utilisez plutôt [PRINT RECORD](../commands-legacy/print-record.md).

**Print form** ne génère qu'un seul événement [`On Printing Detail`](../Events/onPrintingDetail.md) pour la méthode formulaire.

**4D Server:** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte :

- Veillez à ce qu'aucune boîte de dialogue n'apparaisse sur la machine serveur (sauf exigence particulière).
- Dans le cas d'un problème concernant l'imprimante (manque de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré.

## Exemple 1

L'exemple suivant effectue la même chose que ce que ferait la commande [PRINT SELECTION](../commands-legacy/print-selection.md). Cependant, l'état utilise deux formulaires différents suivant le type d'enregistrement (chèque émis ou dépôt) :

```4d
 QUERY([Register]) // sélectionner les enregistrements
 If(OK=1)
    ORDER BY([Register]) // trier les enregistrements
    If(OK=1)
       PRINT SETTINGS // Afficher les boîtes de dialogue d'impression
       If(OK=1)
          For($vlRecord;1;Records in selection([Register]))
             If([Register]Type ="Check")
                Print form([Register];"Check Out") // formulaire de chèque
             Else
                Print form([Register];"Deposit Out") // formulaire de dépôt
             End if
             NEXT RECORD([Register])
          End for
          PAGE BREAK // S'assurer que la dernière page est imprimée
       End if
    End if
 End if
```

## Exemple 2

Voir l'exemple de la commande [SET PRINT MARKER](../commands-legacy/set-print-marker.md).

## Exemple 3

Ce formulaire est utilisé comme dialogue, puis imprimé avec des modifications :

![](../assets/en/commands/pict6264975.en.png)

La méthode formulaire :

```4d
 If(Form event code=On Printing Detail)
    Form.lastname:=Uppercase(Form.lastname)
    Form.firstname:=Uppercase(Substring(Form.firstname;1;1))+Lowercase(Substring(Form.firstname;2))
    Form.request:=Lowercase(Form.request)
 End if
```

Le code qui appelle la boîte de dialogue imprime ensuite le corps :

```4d
 $formData:=New object
 $formData.lastname:="Smith"
 $formData.firstname:="john"
 $formData.request:="I need more COFFEE"
 $win:=Open form window("Request_obj";Plain form window;Horizontally centered;Vertically centered)
 DIALOG("Request_obj";$formData)
 $h:=Print form("Request_var";$formData;Form detail)
```

## Voir également

[CANCEL](../commands-legacy/cancel.md)\
[PAGE BREAK](../commands-legacy/page-break.md)\
[PRINT SETTINGS](../commands-legacy/print-settings.md)\
[SET PRINT OPTION](../commands-legacy/set-print-option.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 5                           |
| Thread safe        | &cross; |



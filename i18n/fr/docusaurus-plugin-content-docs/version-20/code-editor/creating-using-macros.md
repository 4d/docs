---
id: creating-using-macros
title: Créer et utiliser des macros
---

Vous pouvez utiliser des macro-commandes dans vos méthodes. Les macro-commandes permettent de gagner beaucoup de temps lors de la saisie de code.

## Qu’est-ce qu’une macro ?

Une macro-commande est une partie de code 4D accessible en permanence et pouvant être insérée à tout endroit de vos méthodes, quelle que soit la base ouverte. Les macro-commandes peuvent contenir tout type de texte, des commandes et des constantes 4D, ainsi que des balises spéciales, remplacées au moment de l’insertion de la macro par des valeurs issues du contexte de la méthode. Par exemple, une macro-commande peut contenir la balise `<method_name/>;` au moment de son insertion, cette balise sera remplacée par le nom de la méthode projet courante.

Les macro-commandes sont stockées dans un ou plusieurs fichier(s) au format XML (texte). Elles peuvent être affichées dans une liste de l’éditeur de code; elle peuvent également être appelées à l’aide du menu contextuel de l’éditeur ou à l’aide de la fonction de saisie prédictive.

Les macro-commandes de 4D sont écrites au format XML. Vous pouvez utiliser “tel quel” le fichier de macro-commandes par défaut de 4D ou le modifier.

## Emplacement des macros

4D charge les macros à partir d’un dossier nommé **Macros v2**. Les macros doivent être présentes sous forme d’un ou plusieurs fichiers XML placés dans ce dossier.

Le dossier “Macros v2” peut être situé :

- Dans le dossier 4D actif de la machine. Les macros sont alors partagées pour toutes les bases. **Note :** L’emplacement du dossier 4D actif varie en fonction du système d’exploitation. Pour plus d’informations, reportez-vous à la description de la commande [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) dans le *manuel Langage de 4D*.
- A côté du fichier de structure de la base. Les macros ne sont chargées que pour cette structure.
- Pour les composants : dans le dossier **Components** de la base. Les macros ne sont alors chargées que si le composant est installé.

Ces trois emplacements peuvent être utilisés simultanément : il est possible d’installer un dossier “Macros v2” à chaque emplacement. Les macros seront chargées dans l’ordre suivant : dossier 4D, fichier de structure, composant 1... composant N.

## Macros par défaut



4D propose un ensemble de macros par défaut contenant, par exemple, des mots-clés des conditions et boucles. Ces macros sont incluses dans le fichier par défaut "*Macros.xml*", placé dans le dossier " Macros v2 " qui est créé dans le dossier 4D actif de la machine lors du démarrage initial de 4D.

Vous pouvez modifier ce fichier ou le contenu du dossier par la suite comme vous le souhaitez (voir le paragraphe suivant). En cas de problème avec ce dossier, il peut être supprimé et 4D le recréera au démarrage suivant.

## Ajout de macros personnalisées

Vous pouvez ajouter des macros personnalisées dans le fichier "Macros.xml" à l'aide d'un éditeur de texte standard ou par programmation. Vous pouvez également ajouter des fichiers XML de macros personnalisées dans ce dossier.

En mode local, le fichier de macros peut être ouvert tout en utilisant 4D. La liste des macros disponibles est mise à jour à chaque événement activant 4D. Par exemple, il est possible de faire passer l'éditeur de texte au premier plan, de modifier le fichier macro, puis de revenir à la méthode : la nouvelle macro est alors disponible dans l'éditeur de code.

Les macros vides ou erronées ne sont pas affichées.

### Vérification de la syntaxe des macros personnalisées

Les fichiers de macro-commandes de 4D doivent être conformes à la norme XML. Cela signifie plus particulièrement que la déclaration XML `<?xml version="1.0" ... ?>` et la déclaration de document `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` sont obligatoires au début d'un fichier macro pour que celui-ci soit chargé. Les différents types d'encodage XML sont pris en charge. Toutefois, il est recommandé d'utiliser un encodage compatible avec Mac/PC (UTF-8). 4D fournit une DTD qui peut être utilisée pour valider les fichiers macro. Ce fichier se trouve à l'emplacement suivant :

- Windows : \Resources\DTD\macros.dtd
- Mac OS : :Contenu:Ressources:DTD:macros.dtd

Si un fichier de macros ne contient pas les déclarations ou ne peut être validé, il n'est pas chargé.

## Syntaxe des macros 4D

Les macros 4D sont construites à l'aide de balises XML personnalisées appelées "éléments".

Certaines balises indiquent le début et la fin de la définition (balises doubles du type `<tag> </tag>`), d'autres sont remplacées par des valeurs de contexte d'insertion (`<tag/>`).

Conformément aux spécifications XML, certaines balises d'éléments peuvent inclure des attributs. Sauf indication contraire, ces attributs sont facultatifs et une valeur par défaut est utilisée lorsqu'ils sont omis. La syntaxe des éléments avec attributs est la suivante :

- Balises doubles : `<tag attribute="value"> </macro>`
- Balises simples : `<tag attribute="value"/>`

Si l'élément accepte plusieurs attributs, vous pouvez les regrouper dans une même ligne de commande, en les séparant par un espace : `\N-&#060;tag attribut1="valeur" attribut2="valeur" attribut3="valeur"... &#062;`

Voici la liste des balises et leur mode d'utilisation :

| **Balises d'éléments**           | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<macros> </macros>` | Début et fin du fichier macro (balise obligatoire).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `<macro> </macro>`   | Début et fin de la définition d'une macro et de ses attributs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                  | *Attributs* :                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                  | - name : Nom de la macro tel qu'il apparaît dans les menus et les listes de l'éditeur de code (attribut obligatoire).                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | - type_ahead_text : Chaîne de caractères à saisir pour appeler la macro à l'aide de la fonction de saisie prédictive (ou autocomplétion).                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - in_menu : Booléen indiquant si la macro peut être appelée à l'aide du menu contextuel. Valeurs = "true" (par défaut) ou "false".                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                  | - type_ahead : Booléen indiquant si la macro peut être appelée en utilisant la fonction de saisie prédictive (ou autocomplétion). Valeurs = "true" (par défaut) ou "false".                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - method_event : Utilisé pour déclencher l'appel automatique de la macro en fonction de la phase de traitement courante de chaque méthode (création, fermeture, etc.). Valeurs = "on_load" : La macro est déclenchée à l'ouverture de chaque méthode, "on_save" : La macro est déclenchée lors de l'enregistrement de chaque méthode (fermeture d'une méthode modifiée ou enregistrement à l'aide de la commande File>Save, "on_create" : La macro est déclenchée lorsque chaque méthode est créée, "on_close" : La macro est déclenchée lors de la fermeture de chaque méthode. |
|                                  | "on_save" et "on_close" peuvent être utilisés conjointement --- en d'autres termes, ces deux événements sont générés lorsqu'une méthode modifiée est fermée. En revanche, "on_create" et "on_load" ne sont jamais générés de manière consécutive. Cet attribut peut être utilisé, par exemple, pour préformater les méthodes lors de leur création (commentaires dans la zone d'en-tête) ou pour enregistrer des informations telles que la date et l'heure de leur clôture.                                                                                                     |
|                                  | - version : Utilisé pour activer le nouveau mode de prise en charge des sélections de texte pour la macro (voir la section "À propos de la balise `<method>`" ci-dessous). Pour activer ce mode, passez la valeur "2". Si vous omettez cet attribut ou passez la version="1", l'ancien mode est conservé.                                                                                                                                                                                                                                                                      |
|                                  | - in_toolbar : Booléen indiquant si la macro doit être présente dans le menu du bouton Macro de la barre d'outils. Valeurs = "true" (par défaut) ou "false".                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<selection/>`             | Balise remplacée par le texte sélectionné lors de l'insertion de la macro. La sélection peut être vide.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `<text> </text>`     | Début et fin du code qui doit être inséré dans la méthode. Un retour chariot sera ajouté avant et après le code.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `<method> </method>` | Début et fin du nom de la méthode projet et de son paramètre (facultatif). La méthode est exécutée lorsque la macro est appelée. Vous pouvez passer un paramètre sous la forme ("param1;param2 ;..."). Ce paramètre sera reçu dans la méthode à l'aide des variables $1, $2, etc. Pour plus d'informations sur cette balise, reportez-vous à la section "À propos de la balise `<method>`" ci-dessous.                                                                                                                                                                         |
| `<caret/>`                 | Emplacement du point d'insertion dans le code après l'insertion de la macro.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<user_4D/>`               | Balise remplacée par le nom de l'utilisateur 4D courant.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<user_os/>`               | Balise remplacée par le nom d'utilisateur courant du système.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `<method_name/>`           | Tag replaced by the current method name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<method_path/>`           | Tag replaced by path syntax (as returned by [`METHOD Get path`](https://doc.4d.com/4dv19R/help/command/en/page1164.html) of the current method.                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `<date/>`                  | Balise remplacée par la date courante.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                  | *Attribut*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - format : Format 4D utilisé pour afficher la date. Si aucun format n'est défini, le format par défaut est utilisé. Valeurs = numéro du format 4D (0 à 8).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<time/>`                  | Balise remplacée par l'heure courante.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                  | *Attribut*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - format : Format 4D utilisé pour afficher l'heure. Si aucun format n'est défini, le format par défaut est utilisé. Valeurs = numéro du format 4D (0 à 6).                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<clipboard/>`             | Balise remplacée par le contenu du presse-papiers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                  | *Attribut*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - index : Presse-papiers à coller. Valeurs = numéro du presse-papiers (0 à 9).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

- Les macros peuvent être appelées à l'aide du menu contextuel de l'éditeur de code ou à l'aide de la fonction type-ahead (voir la section suivante).
- Si vous voulez vous conformer aux spécifications du langage XML, vous ne devez pas utiliser de caractères étendus (caractères accentués, guillemets, etc.).

Voici un exemple de définition de macro :

| **Contenu de la macro**                              | **Commentaires**                                                                                                                                             |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<?xml version="1.0"...?>`                     | Déclaration XML                                                                                                                                              |
| `<!DOCTYPE macros SYSTEM>`                     | Déclaration de document                                                                                                                                      |
| `<macros>`                                     | Début du fichier XML des macros                                                                                                                              |
| `<macro name="RecordLoop">`                    | Début de la définition et du nom de la macro                                                                                                                 |
| `<text>`                                       | Début du code de la macro                                                                                                                                    |
| For($i;1;Records in selection(`<Selection/>`)) | La balise `<Selection/>` sera remplacée par le code sélectionné dans la méthode 4D au moment de l'insertion de la macro (par exemple, un nom de table) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                              |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                              |
| End for                                              |                                                                                                                                                              |
| `</text>`                                      | Fin du code de la macro                                                                                                                                      |
| `</macro>`                                     | Fin de la définition de la macro                                                                                                                             |
| `</macros>`                                    | Fin du fichier XML des macros                                                                                                                                |

## À propos de la balise `<method>`

La balise `<method>` permet de générer et d'utiliser des macro-commandes qui exécutent des méthodes projet 4D. Cela permet aux développeurs de créer des fonctions sophistiquées qui peuvent être distribuées via des macro-commandes associées à des composants. Par exemple, la macro suivante provoquera l'exécution de la méthode *MyMethod* avec le nom de la méthode courante comme paramètre :

`<method>MyMethod("<method_name/>")</method>`

Le code d'une méthode appelée est exécuté dans un nouveau process. Ce process est tué une fois la méthode exécutée.

> Le process de structure reste figé jusqu'à ce que l'exécution de la méthode appelée soit terminée. Vous devez vous assurer que l'exécution est rapide et qu'il n'y a aucun risque qu'elle bloque l'application. Si cela se produit, utilisez la commande **Ctrl+F8** (Windows) ou **Command+F8** (macOS) pour "tuer" le process.

## Appeler des macros

Par défaut, les macros peuvent être appelées à l'aide du menu contextuel ou de la barre d'outils de l'éditeur de code, de la fonction d'auto-complétion ou d'une liste spécifique au bas de la fenêtre de l'éditeur de code.

Notez que pour chaque macro, il est possible de restreindre la possibilité de l'appeler à l'aide du menu contextuel et/ou de la fonction d'autocomplétion.

### Menu contextuel et barre d'outils

Par défaut, toutes les macros peuvent être appelées via le menu contextuel de l'éditeur de code (à l'aide de la commande hiérarchique **Insert macro** ) ou le bouton **Macros** de la barre d'outils.

L'attribut *in_menu* de la balise `<macro>` permet de définir si la macro apparaît ou non dans ce menu.

Dans le menu contextuel, les macros sont affichées dans l'ordre du fichier "Macros.xml" et des éventuels fichiers XML supplémentaires. Il est donc possible de changer l'ordre en modifiant ces fichiers.

### Autocomplétion

Par défaut, toutes les macros sont accessibles à l'aide de la fonction d'autocomplétion (ou fonction de saisie prédictive) (voir [Editeur de code](./write-class-method.md)). L'attribut *type_ahead* de la balise `<macro>` peut être utilisé pour exclure une macro de ce type d'opération.

**Note :** Si la macro contient la balise `<selection/>`, elle n'apparaîtra pas dans la fenêtre pop-up d'auto-complétion.

### Liste de l'éditeur de code

Vous pouvez afficher vos macros dans une liste de l'éditeur de code (voir [Editeur de code](./write-class-method.md)). Il suffit de double-cliquer sur le nom d'une macro dans la liste pour l'appeler. Il n'est pas possible d'exclure une macro spécifique de cette liste.

## Notes de compatibilité

La prise en charge des macros peut changer d'une version de 4D à l'autre. Afin de garder les différentes versions compatibles tout en conservant vos personnalisations, 4D ne supprime pas les versions précédentes. Si vous souhaitez utiliser les dernières fonctionnalités disponibles, vous devez adapter votre version en conséquence.

### Variables de sélection de texte pour les méthodes

Il est recommandé de gérer les sélections de texte à l'aide des commandes [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) et [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) . Ces commandes peuvent être utilisées pour surmonter le cloisonnement des espaces d'exécution du projet hôte/composant et ainsi permettre la création de composants dédiés à la gestion des macros. Afin d'activer ce mode pour une macro, vous devez déclarer l'attribut Version avec la valeur 2 dans l'élément Macro. Dans ce cas, 4D ne gère plus les variables prédéfinies _textSel,_textReplace, etc. et les commandes [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) et [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) sont utilisées. Cet attribut doit être déclaré comme suit :

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

Si vous ne passez pas cet attribut, le mode précédent est conservé.

### Incompatibilités liées à la norme XML

Des règles syntaxiques strictes doivent être observées pour que les fichiers de macros respectent la norme XML. Cela peut entraîner des incompatibilités avec le code des macros créées avec les versions précédentes et empêcher le chargement des fichiers XML. Les principales sources de dysfonctionnement sont les suivantes :

- Les commentaires du type "// mon commentaire", autorisés à l'intérieur des éléments `<macro>` dans les versions précédentes de 4D, ne sont pas compatibles avec la syntaxe XML. Les lignes de commentaires doivent respecter la forme standard `"<!-- mon commentaire -->"`.
- Les symboles `<>` utilisés plus particulièrement pour les noms d'objets interprocess doivent être encodés. Par exemple, la variable `<>params` doit être écrite `&lt;>params`.
- La balise de déclaration initiale `<macros>` pouvait être omise dans les versions précédentes de 4D. Il est maintenant obligatoire ; sinon, le fichier ne sera pas chargé.

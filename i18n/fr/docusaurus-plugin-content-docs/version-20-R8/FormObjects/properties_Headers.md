---
id: propertiesHeaders
title: En-têtes
---

## Afficher en-têtes

Cette propriété est utilisée pour afficher ou masquer [les en-têtes de colonne listbox](listbox_overview.md#list-box-headers). Il existe un en-tête par colonne; chaque en-tête est configuré séparément.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles |
| ----------- | --------------- | ----------------- |
| showHeaders | boolean         | true, false       |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Hauteur

Cette propriété sert à définir la hauteur de ligne d'un en-tête de list box en **pixels** ou en **lignes de texte** (lorsqu'elle est affichée). Les deux types d'unités peuvent être utilisés dans la même list box :

- _Pixel_ - la valeur de hauteur est appliquée directement à la ligne concernée, quelle que soit la taille de la police contenue dans les colonnes. Si une police est trop grande, le texte est tronqué. De plus, les images sont tronquées ou redimensionnées selon leur format.

- _Ligne_ - la hauteur est calculée en tenant compte de la taille de police de la ligne concernée.
  - Si plus d'une taille est définie, 4D utilise la plus grande. Par exemple, si une ligne contient «Verdana 18», «Geneva 12» et «Arial 9», 4D utilise «Verdana 18» pour déterminer la hauteur de ligne (par exemple, 25 pixels). Cette hauteur est ensuite multipliée par le nombre de lignes définies.
  - Ce calcul ne prend pas en compte la taille des images ni les styles appliqués aux polices.
  - Sous macOS, la hauteur de ligne peut être incorrecte si l'utilisateur saisit des caractères qui ne sont pas disponibles dans la police sélectionnée. Lorsque cela se produit, une police de remplacement est utilisée, ce qui peut entraîner des variations de taille.

> Cette propriété peut être également définie dynamiquement à l'aide de la commande [LISTBOX SET HEADERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-SET-HEADERS-HEIGHT.301-4311129.en.html).

Conversion d'unités : lorsque vous passez d'une unité à l'autre, 4D les convertit automatiquement et affiche le résultat dans la liste des propriétés. Par exemple, si la police utilisée est "Lucida grande 24", une hauteur de "1 ligne" est convertie en "30 pixels" et une hauteur de "60 pixels" est convertie en "2 lignes".

A noter que la conversion en va-et-vient peut conduire à un résultat final différent de la valeur de départ en raison des calculs automatiques effectués par 4D. Ceci est illustré dans les séquences suivantes :

- (font Arial 18)\*: 52 pixels -> 2 lines -> 40 pixels
- (font Arial 12)\*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels

#### Exemple JSON

```
 "List Box": {
  "type": "listbox",
  "showHeaders": true,
  "headerHeight": "22px",  
  ...
  }
```

#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles             |
| ------------ | --------------- | ----------------------------- |
| headerHeight | string          | décimales positives +px \| em |

#### Objets pris en charge

[List Box](listbox_overview.md)

#### Voir également

[Pieds](properties_Footers.md) - [En-têtes List box](listbox_overview.md#list-box-headers)

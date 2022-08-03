---
id: formSize
title: Form Size
---

 
4D vous permet de définir la taille du formulaire et de la [fenêtre](properties_WindowSize.md). Ces propriétés sont interdépendantes et l'interface de votre application résulte de leur interaction.

Les options de taille dépendent de la valeur de l'option **Taille basée sur**.

---
## Taille basée sur


*   **Taille automatique** : La taille du formulaire permettra d'afficher tous les objets, auxquels s'ajouteront les valeurs de marge (en pixels) saisies dans

**les champs **Marge [hor.](#hor-margin) et Marge **ver.**   <p> Vous pouvez choisir cette option lorsque vous souhaitez utiliser des objets actifs placés dans une zone hors écran (c'est-à-dire en dehors du rectangle de délimitation de la fenêtre) avec une fenêtre de taille automatique. Grâce à cette option, la présence de ces objets ne modifiera pas la taille de la fenêtre.</p></li> 
  
  *   **Fixer taille :** La taille du formulaire sera basée sur ce que vous entrez (en pixels) dans les champs [**Largeur**](#width) et [**Hauteur**](#height).

*   **\<object name>** : La taille du formulaire sera basée sur la position de l'objet de formulaire sélectionné. Par exemple, si vous choisissez un objet qui est placé dans la partie inférieure droite de la zone à afficher, la taille du formulaire sera constituée d'un rectangle dont le coin supérieur gauche sera l'origine du formulaire et le coin inférieur droit correspondra à celle de l'objet sélectionné, plus les éventuelles valeurs de marge.</ul> 




> Pour les formulaires de sortie, seul les champs Marge [**hor. margin**](#hor-margin) or [**Width**](#width) fields are available.




#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                              |
| -------------- | --------------- | -------------------------------------------------------------- |
| formSizeAnchor | string          | Nom de l'objet à utiliser pour définir la taille du formulaire |




--- 


## Hauteur

Hauteur du formulaire (en pixels) lorsque la [taille du formulaire](#size-based-on) est définie sur **Fixer taille**.  




#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles  |
| ------ | --------------- | ------------------ |
| height | number          | valeur entier long |





--- 


## Marge hor.

Valeur à ajouter (en pixels) à la marge droite du formulaire lorsque la [taille du formulaire](#size-based-on) est définie sur **Taille automatique** ou **\<object name>**

Cette valeur détermine également les marges droites des formulaires utilisés dans l'éditeur d'étiquettes.



#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles  |
| ----------- | --------------- | ------------------ |
| rightMargin | number          | valeur entier long |





---



## Marge hor.

Valeur à ajouter (en pixels) à la marge inférieure du formulaire lorsque la [taille du formulaire](#size-based-on) est définie sur **Taille automatique** ou **\<object name>**. 

Cette valeur détermine également les marges supérieures des formulaires utilisés dans l'éditeur d'étiquettes.



#### Grammaire JSON

| Nom          | Type de données | Valeurs possibles  |
| ------------ | --------------- | ------------------ |
| bottomMargin | number          | valeur entier long |





--- 


## Largeur

Largeur du formulaire (en pixels) lorsque la [taille du formulaire](#size-based-on) est définie sur **Fixer taille**.  




#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles  |
| ----- | --------------- | ------------------ |
| width | number          | valeur entier long |

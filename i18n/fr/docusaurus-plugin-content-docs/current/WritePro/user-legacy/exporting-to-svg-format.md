---
id: exporting-to-svg-format
title: Exporter au format SVG
displayed_sidebar: docs
---

#### 

Vous pouvez exporter les pages d’un document 4D Write Pro au format SVG à l'aide des commandes [WP EXPORTER DOCUMENT](../commands/wp-exporter-document) et [WP EXPORTER VARIABLE](../commands/wp-exporter-variable). Cette page contient des informations et des notes supplémentaires sur l'exportation SVG.

#### Rendu SVG 

Les images SVG et les zones de texte sont rendues selon les paramètres de la page affichée en Mode d'affichage de la page. Les propriétés suivantes sont prises en compte :

* Attributs d'arrière-plan (si exportés)
* Bordures
* Marges
* Orientation
* Marges intérieures (padding)
* Taille de la page
* Sections (le rendu SVG prend en compte les attributs des sections, mais les sections elles-mêmes ne sont pas exportées)

Parties du document qui sont exportées en SVG :

* Corps
* Images en ligne
* Zones de texte
* Titre (la métadonnée wk title)

Parties du document qui sont exportées en SVG en fonction du paramètre *option* :

* En-têtes
* Pieds de page
* Références ou valeurs (concernant les valeurs, l'option wk recompute formulas détermine si les formules sont évaluées avant l'exportation)
* Couleurs d'arrière-plan
* Images définies comme images de fond et images ancrées

Les éléments suivants ne sont pas exportés en SVG :

* Polices (converties en styles CSS, mais non intégrées dans le SVG exporté. Voir *Gestion des polices*)
* Liens vers des signets (rendus mais non actifs)
* Liens vers des URL (rendus mais non actifs)
* Mise en évidence des formules personnalisées
* Zones de texte ancrées dans le mode d'affichage intégré
* Métadonnées  
   * Auteur  
   * Sujet  
   * Date de création  
   * Date de modification

#### Gestion des polices 

Les polices ne sont pas intégrées dans le SVG exporté. Le texte ne sera donc rendu correctement que si la famille et le style de police sont supportés sur la plateforme où l'image SVG est rendue.

Si vous voulez vous assurer que le rendu sera équivalent sur toutes les plateformes, même lorsque les polices ne sont pas disponibles, vous pouvez utiliser l'option wk import google fonts lors de l'exportation d'un document 4D Write Pro.

Les polices Google importées remplacent les polices natives lors du rendu du SVG. Si votre intention est de rendre l'image SVG sur la même plateforme, nous vous recommandons de ne pas utiliser l'option wk import google fonts option puisque le rendu avec les polices natives est toujours meilleur.

**Note :** Seuls les styles en gras et en italique sont préservés. La compatibilité à 100 % entre les styles de police natifs et la définition des styles de police en CSS (et ainsi en SVG) n'est pas garantie. L'exportation vers PDF est plus adaptée pour la distribution vers toutes les plateformes ou pour un meilleur support WYSIWYG des polices, puisque les polices sont intégrées dans le PDF.

#### Exemple 

Cet exemple exporte une page de document au format SVG et crée un aperçu de l'image en utilisant [SVG EXPORTER VERS IMAGE](../../commands/svg-exporter-vers-image).

```4d
 
var $preview : Picture
 var $options : Object
 var $svgRoot : Text
 var $options Object

$options: :=Créer objet
 $options[wk max picture DPI]:=96
 WP EXPORTER VARIABLE(wpDoc;$text;wk svg;$options)
 $svgRoot:=DOM Analyser variable XML($text;Faux)
 SVG EXPORTER VERS IMAGE($svgRoot;$preview;Posséder source données XML)


```
---
id: VectorClass
title: Vector
---

La classe `Vector` vous permet de manipuler des **vecteurs** et d'effectuer des calculs de distance et de similarité entre eux. Cette classe est disponible depuis le "class store" de `4D`.

Dans le monde des IA, un vecteur est une séquence de nombres qui permet à une machine de comprendre et de manipuler des données complexes. Pour un aperçu détaillé du rôle des vecteurs avec les IA, vous pouvez vous référer à [cette page](https://aiforsocialgood.ca/blog/understanding-the-role-of-vectors-in-artificial-intelligence-a-comprehensive-guide).

### Comprendre les différents calculs vectoriels

La classe `4D.Vector` propose trois types de calculs vectoriels. Le tableau suivant résume les principales caractéristiques de chacun d'entre eux :

|                 | cosineSimilarity (*similarité de cosinus*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | dotSimilarity (*produit point*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | euclideanDistance (*distance euclidienne*)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Définition      | Compare l'orientation de deux textes représentés sous forme de vecteurs. Plus ils pointent dans la même direction, plus ils sont proches.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Somme des produits entre chaque dimension du vecteur. Il s'agit d'une sorte de score de compatibilité pondéré.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Distance réelle entre deux vecteurs, comme si on la mesurait à l'aide d'une règle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Analogie simple | Parlons-nous du même sujet ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Parlez-vous du même sujet avec insistance ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Êtes-vous vraiment loin de ce que je dis ?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Exemple         | Imaginez que vous cherchiez des films à regarder sur un service de vidéo à la demande. La similarité de cosinus est utilisée pour comparer vos goûts (par exemple, vous aimez les films d'action avec un peu de comédie) aux descriptions de films dans la base de données du service. Peu importe que vous soyez un "petit" fan (vous regardez 1 film par mois) ou un "grand" fan (vous regardez 10 films par semaine), ce qui compte c'est que les films aient des caractéristiques similaires à ce que vous aimez (action + comédie). Le service de streaming utilise la similarité cosinusoïdale pour recommander des films qui "vont dans la même direction" que vos préférences. | Pensez à un moteur de recherche. Lorsque vous tapez "recette de gâteau au chocolat", l'algorithme compare votre requête à des pages web. La *dotSimilarity* peut être utilisée non seulement pour vérifier si une page parle de gâteaux au chocolat (une direction similaire à votre recherche), mais aussi pour donner plus de poids aux pages qui sont très pertinentes (par exemple, une page avec beaucoup de contenu détaillé sur les gâteaux au chocolat aura une plus grande "longueur" et donc un score plus élevé). Une page ne comportant qu'une seule phrase sur le sujet aura un score plus faible. | Imaginez une application de rencontres. L'algorithme peut utiliser la distance euclidienne pour comparer votre profil (vos centres d'intérêt, votre âge, votre localisation, etc.) avec ceux des autres utilisateurs. Si vos profils sont très similaires (par exemple, vous aimez tous les deux la randonnée et la musique pop, et vous vivez à 5 km l'un de l'autre), la distance euclidienne entre vos profils sera faible, et l'application suggérera cette personne comme un bon "match". Ici, toutes les différences (aussi petites soient-elles) comptent, et pas seulement l'orientation générale de vos goûts. |

Dans tous les cas, il est conseillé de tester les différents vecteurs pour déterminer celui qui correspond le mieux à vos besoins et à vos données.

### Objet vecteur

Les objets vectoriels sont partagés, immuables et transmissibles.

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #VectorClass.cosineSimilarity().Syntax -->](#cosinesimilarity)<br/><!-- INCLUDE #VectorClass.cosineSimilarity().Summary -->    |
| [<!-- INCLUDE #VectorClass.dotSimilarity().Syntax -->](#dotsimilarity)<br/><!-- INCLUDE #VectorClass.dotSimilarity().Summary -->             |
| [<!-- INCLUDE #VectorClass.euclideanDistance().Syntax -->](#euclideandistance)<br/><!-- INCLUDE #VectorClass.euclideanDistance().Summary --> |
| [<!-- INCLUDE #VectorClass.length.Syntax -->](#length)<br/><!-- INCLUDE #VectorClass.length.Summary -->                                      |
| [<!-- INCLUDE #VectorClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #VectorClass.toCollection().Summary -->                |

## 4D.Vector.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R10  | Ajout         |

</details>

<!-- REF #4D.Vector.new().Syntax -->

**4D.Vector.new** ( *parameter* : Collection ) : 4D.Vector<!-- END REF -->

<!--REF #4D.Vector.new().Params -->

| Paramètres | Type                      |                             | Description                                         |
| ---------- | ------------------------- | --------------------------- | --------------------------------------------------- |
| paramètres | Collection de réels       | ->                          | Collection de nombres réels représentant un vecteur |
| Résultat   | 4D.Vector | <- | Nouvel objet vectoriel                              |

<!-- END REF -->

#### Description

La fonction `4D.Vector.new()` <!-- REF #4D.Vector.new().Summary -->crée et renvoie un nouvel objet de type `4D.Vector`<!-- END REF -->.

Dans *parameter*, passez une collection de nombres réels représentant le vecteur à créer. Ces valeurs sont fournies par les intelligences artificielles et représentent mathématiquement des objets tels que des mots ou des données.

#### Exemple

Pour créer un vecteur :

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
```

Vous pouvez accéder aux composants individuels ou convertir l'ensemble du vecteur en collection :

```4d
var $firstComponent := $vector[0]
var $collection := $vector.toCollection()
```

## .cosineSimilarity()

<!--REF #VectorClass.cosineSimilarity().Syntax -->**.cosineSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.cosineSimilarity().Params -->

| Paramètres | Type                      |                             | Description                 |
| ---------- | ------------------------- | --------------------------- | --------------------------- |
| vector     | 4D.Vector | ->                          | Vecteur à comparer avec     |
| Résultat   | Real                      | <- | Distance entre les vecteurs |

<!-- END REF -->

#### Description

La fonction `.cosineSimilarity()` <!-- REF #VectorClass.cosineSimilarity().Summary -->calcule la similarité en cosinus entre le vecteur 4D courant et celui que vous avez passé dans le paramètre *vector*<!-- END REF -->. Les deux vecteurs doivent avoir la même taille.

Cette métrique mesure l'**angle entre les vecteurs** et est couramment utilisée pour déterminer la similarité sémantique entre les textes. It is recommended for text embeddings, documents, sentences, and any data where **direction** matters more than **magnitude** (e.g. for semantic search or text classification).

**Valeur retournée**

- Range: -1 (opposite) to 1 (identical).
- Plus la valeur retournée est élevée, plus les vecteurs sont similaires.

#### Exemple 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $similarity := $vector.cosineSimilarity($anotherVector)
```

#### Exemple 2

:::info

Cet exemple utilise l'extension [4D AIKit extension] (../aikit/overview.md) pour générer des embeddings.

:::

```4d

var $model:="text-embedding-ada-002"
var $people:=ds.People.get(1)

$prompt:=String($people.Firstname)+" "+String($people.Lastname)+" was born on "+\
String($people.Birthday)+" and lives in "+String($people.Address)+", "+\
String($people.ZipCode)+", "+String($people.City)+", "+String($people.Country)+\
". Contact: "+String($people.email)+", "+String($people.Cell)+", "+\
String($people.Phone)+". Family IDs - Father: "+String($people.FatherID)+\
", Mother : "+String($people.MotherID)+", Partner: "+String($people.PartnerID)+"."

var $clientAI:=cs.AIKit.OpenAI.new(getAIKey())

// Calcul vectoriel avec 4D AIKit
var $result:=$clientAI.embeddings.create($prompt; $model)

// Création d'un objet 4D.vector
var $vector:=$result.vector

var $question:="I'm looking for John who lives in USA"

// Calcul vectoriel avec le composant 4D AIKit
var $questionVector:=$clientAI.embeddings.create($question; $model).vector

// calcul de similarité
If ($vector.cosineSimilarity($questionVector)>0.9)
  ALERT("Interesting result")
End if

// résultat réel : 0,7360136465949


```

## .dotSimilarity()

<!--REF #VectorClass.dotSimilarity().Syntax -->**.dotSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.dotSimilarity().Params -->

| Paramètres | Type                      |                             | Description                 |
| ---------- | ------------------------- | --------------------------- | --------------------------- |
| vector     | 4D.Vector | ->                          | Vecteur à comparer avec     |
| Résultat   | Real                      | <- | Distance entre les vecteurs |

<!-- END REF -->

#### Description

The `.dotSimilarity()` function <!-- REF #VectorClass.dotSimilarity().Summary -->calculates the dot product of the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Les deux vecteurs doivent avoir la même taille.

This metric reflects both **similarity** and **magnitude**, and is generally used in models where vector norms (magnitudes) vary. It is recommended for scenarios where embeddings have been fine-tuned with magnitude in mind (e.g., recommendation engines, scoring relevance).

**Valeur retournée**

- Dépend de la magnitude et de la direction des vecteurs
- Plus la valeur retournée est élevée, plus les vecteurs sont similaires.

#### Exemple

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $score := $vector.dotSimilarity($anotherVector)

```

#### Exemple 2

:::info

Cet exemple utilise l'extension [4D AIKit extension] (../aikit/overview.md) pour générer des embeddings.

:::

```4d
var $model:="text-embedding-ada-002"
var $clientAI:=cs.AIKit.OpenAI.new(getAIKey())

$documents:=[{text: "How to bake a chocolate cake"; similarity: 0}; \
{text: "Best hiking trails in the Alps"; similarity: 0}; \
{text: "Tips for learning 4D programming"; similarity: 0}; \
{text: "Top 10 sci-fi movies of all time"; similarity: 0}]

$question:="4D coding tutorials"

// Vector calculation with 4D AIKit component
$questionVector:=$clientAI.embeddings.create($question; $model).vector

For each ($document; $documents)
        // Vector calculation with 4D AIKit component
    $vector:=$clientAI.embeddings.create($document.text; $model).vector
        // similarity
    $document.similarity:=$vector.dotSimilarity($questionVector)
End for each

$documents:=$documents.orderBy("similarity desc")
ALERT("Best answer: "+$documents[0].text)

//$documents:
//{text:Tips for learning 4D programming,similarity:0.90409492325102}
//{text:Top 10 sci-fi movies of all time,similarity:0.75362527646035}
//{text:How to bake a chocolate cake,similarity:0.73664833336323}
//{text:Best hiking trails in the Alps,similarity:0.73138600461065}
 
```

## .euclideanDistance()

<!--REF #VectorClass.euclideanDistance().Syntax -->**.euclideanDistance**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.euclideanDistance().Params -->

| Paramètres | Type                      |                             | Description                 |
| ---------- | ------------------------- | --------------------------- | --------------------------- |
| vector     | 4D.Vector | ->                          | Vecteur à comparer avec     |
| Résultat   | Real                      | <- | Distance entre les vecteurs |

<!-- END REF -->

#### Description

The `.euclideanDistance()` function <!-- REF #VectorClass.euclideanDistance().Summary -->calculates the Euclidean distance between the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Les deux vecteurs doivent avoir la même taille.

This measures the straight-line distance in the vector space. It is recommended for numeric or structured data embeddings, or when using models where proximity in raw space directly correlates with similarity.

**Valeur retournée**

- valeur retournée >= 0
- Plus la valeur retournée est faible, plus les vecteurs sont similaires.

#### Exemple 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $distance := $vector.euclideanDistance($anotherVector)

```

#### Exemple 2

```4d
$places:=[\
{name: "Eiffel Tower"; coord: [48.8584; 200.2945]; similarity: 0}; \
{name: "Louvre Museum"; coord: [48.8606; 200.3376]; similarity: 0}; \
{name: "Notre-Dame"; coord: [48.8529; 200.35]; similarity: 0}; \
{name: "Montmartre"; coord: [48.8867; 200.3431]; similarity: 0}\
]

$userLocation:=[8.8566; 20.3522]
var $vector:=4D.Vector.new($userLocation)

For each ($place; $places)
  $place.similarity:=$vector.euclideanDistance(4D.Vector.new($place.coord))
End for each

$places:=$places.orderBy("similarity asc")
ALERT("Nearest monument: "+$places[0].name)
```

## .length

<!-- REF #VectorClass.length.Syntax -->**length** : Integer<!-- END REF -->

#### Description

The `.length` property contains <!-- REF #VectorClass.length.Summary -->the number of vector components<!-- END REF -->.

## .toCollection()

<!--REF #VectorClass.toCollection().Syntax -->**.toCollection**() : Collection<!-- END REF -->

<!--REF #VectorClass.toCollection().Params -->

| Paramètres | Type       |                             | Description                                                   |
| ---------- | ---------- | --------------------------- | ------------------------------------------------------------- |
| Résultat   | Collection | <- | Collection of real numbers representing the vector components |

<!-- END REF -->

The `.toCollection()` function <!-- REF #VectorClass.toCollection().Summary -->returns the vector components as a collection of reals<!-- END REF -->.



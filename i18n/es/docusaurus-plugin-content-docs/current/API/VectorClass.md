---
id: VectorClass
title: Vector
---

La clase `Vector` permite manejar **vectores** y ejecutar cálculos de distancia y similitud entre ellos. Esta clase está disponible en el "class store" de `4D`.

En el mundo de las IA, un vector es una secuencia de números que permite a una máquina comprender y manipular datos complejos. Para una visión detallada del papel de los vectores con las IAs, puede consultar [esta página](https://aiforsocialgood.ca/blog/understanding-the-role-of-vectors-in-artificial-intelligence-a-comprehensive-guide).

### Comprender los diferentes cálculos vectoriales

La clase `4D.Vector` propone tres tipos de cálculos vectoriales. La siguiente tabla resume las principales características de cada uno:

|                 | cosineSimilarity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | dotSimilarity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | euclideanDistance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definición      | Compara la orientación de dos textos representados como vectores. Cuanto más apunta en la misma dirección, más cerca están.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Suma de productos entre cada dimensión vectorial. Es como una puntuación ponderada de compatibilidad.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Distancia real entre dos vectores, como si se midiera con una regla.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Analogía simple | ¿Estamos hablando del mismo tema?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ¿Se refiere usted al mismo tema de forma insistente?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ¿Está realmente lejos de lo que estoy diciendo?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Ejemplo         | Imagine que busca películas para ver en un servicio de streaming de vídeo a la carta. La similitud del coseno se utiliza para comparar sus gustos (por ejemplo, le gustan las películas de acción con un poco de comedia) con las descripciones de las películas de su base de datos. No importa si es un "pequeño" fan (ve 1 película al mes) o un "gran" fan (ve 10 películas a la semana), lo que importa es si las películas tienen características similares a lo que le gusta (acción + comedia). El servicio de streaming utiliza la similitud del coseno para recomendar películas que "apuntan en la misma dirección" que sus preferencias. | Piense en un motor de búsqueda. Cuando escribe "receta de tarta de chocolate", el algoritmo compara su consulta con páginas web. El producto punto se puede utilizar no sólo para comprobar si una página habla de pasteles de chocolate (una dirección similar a la de su búsqueda), sino también para dar más peso a las páginas que son muy relevantes (por ejemplo, una página con mucho contenido detallado sobre pasteles de chocolate tendrá una mayor "longitud" y, por tanto, una puntuación más alta). Una página con una sola frase sobre el tema tendrá una puntuación más baja. | Imagine una aplicación de citas. El algoritmo puede utilizar la distancia euclidiana para comparar su perfil (sus intereses, edad, ubicación, etc.) con las de otros usuarios. Si sus perfiles son muy similares (por ejemplo, a ambos les gusta el senderismo, la música pop, y viven a 5 km de distancia), la distancia euclidiana entre sus perfiles será baja, y la aplicación sugerirá a esta persona como un buen "match". Aquí cuentan todas las diferencias (por pequeñas que sean), no sólo la orientación general de sus gustos. |

En cualquier caso, conviene probar los distintos vectores para determinar cuál se adapta mejor a sus necesidades y datos.

### Objeto vector

Los objetos vectoriales son compartidos, inmutables y transmisibles.

|                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #VectorClass.cosineSimilarity().Syntax -->](#cosinesimilarity)<br/><!-- INCLUDE #VectorClass.cosineSimilarity().Summary -->    |
| [<!-- INCLUDE #VectorClass.dotSimilarity().Syntax -->](#dotsimilarity)<br/><!-- INCLUDE #VectorClass.dotSimilarity().Summary -->             |
| [<!-- INCLUDE #VectorClass.euclideanDistance().Syntax -->](#euclideandistance)<br/><!-- INCLUDE #VectorClass.euclideanDistance().Summary --> |
| [<!-- INCLUDE #VectorClass.length.Syntax -->](#length)<br/><!-- INCLUDE #VectorClass.length.Summary -->                                      |
| [<!-- INCLUDE #VectorClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #VectorClass.toCollection().Summary -->                |

## 4D.Vector.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R10      | Añadidos       |

</details>

<!-- REF #4D.Vector.new().Syntax -->**4D.Vector.new** ( *parameter* : Collection ) : 4D.Vector<!-- END REF -->

<!--REF #4D.Vector.new().Params -->

| Parámetros | Tipo                      |                             | Descripción                                           |
| ---------- | ------------------------- | --------------------------- | ----------------------------------------------------- |
| parámetros | Colección de reales       | ->                          | Colección de números reales que representan un vector |
| Resultado  | 4D.Vector | <- | Nuevo objeto vector                                   |

<!-- END REF -->

#### Descripción

La función `4D.Vector.new()` <!-- REF #4D.Vector.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.Vector`<!-- END REF -->.

En *parameter*, pase una colección de números reales que representen el vector a crear. Estos valores los ofrecen las inteligencias artificiales y representan matemáticamente objetos como palabras o datos.

#### Ejemplo

Para crear un vector:

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
```

Puede acceder a componentes individuales o convertir todo el vector en una colección:

```4d
var $firstComponent := $vector[0]
var $collection := $vector.toCollection()
```

## .cosineSimilarity()

<!--REF #VectorClass.cosineSimilarity().Syntax -->**.cosineSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.cosineSimilarity().Params -->

| Parámetros | Tipo                      |                             | Descripción                |
| ---------- | ------------------------- | --------------------------- | -------------------------- |
| vector     | 4D.Vector | ->                          | Vector con el que comparar |
| Resultado  | Real                      | <- | Distancia entre vectores   |

<!-- END REF -->

#### Descripción

La función `.cosineSimilarity()` <!-- REF #VectorClass.cosineSimilarity().Summary -->calcula la similitud coseno entre el vector 4D actual y el que se paso en el parámetro *vector*<!-- END REF -->. Ambos vectores deben tener el mismo tamaño.

Esta métrica mide el **ángulo entre vectores** y se utiliza habitualmente para determinar la similitud semántica entre textos. Se recomienda para incrustaciones de texto, documentos, frases y cualquier dato en el que la **dirección** importe más que la **magnitud** (por ejemplo, para la búsqueda semántica o la clasificación de textos).

**Valor devuelto**

- Rango: -1 (opuesto) a 1 (idéntico).
- Cuanto mayor sea el valor devuelto, más parecidos son los vectores.

#### Ejemplo 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $similarity := $vector.cosineSimilarity($anotherVector)
```

#### Ejemplo 2

:::info

Este ejemplo utiliza la extensión [4D AIKit](../aikit/overview.md) para generar incrustaciones.

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

// Cálculo de vectores con 4D AIKit
var $result:=$clientAI.embeddings.create($prompt; $model)

// Creación de objetos 4D.vector
var $vector:=$result.vector

var $question:="I'm looking for John who lives in USA"

// Cálculo vectorial con componente 4D AIKit
var $questionVector:=$clientAI.embeddings.create($question; $model).vector

// cálculo de similitud
If ($vector.cosineSimilarity($questionVector)>0.9)
  ALERT("Interesting result")
End if

//resultado real: 0,7360136465949


```

## .dotSimilarity()

<!--REF #VectorClass.dotSimilarity().Syntax -->**.dotSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->

<!--REF #VectorClass.dotSimilarity().Params -->

| Parámetros | Tipo                      |                             | Descripción                |
| ---------- | ------------------------- | --------------------------- | -------------------------- |
| vector     | 4D.Vector | ->                          | Vector con el que comparar |
| Resultado  | Real                      | <- | Distancia entre vectores   |

<!-- END REF -->

#### Descripción

La función `.dotSimilarity()` <!-- REF #VectorClass.dotSimilarity().Summary -->calcula el producto punto del vector 4D actual y el que pasó en el parámetro *vector*<!-- END REF -->. Ambos vectores deben tener el mismo tamaño.

Esta métrica refleja tanto la **similitud** como la **magnitud**, y se utiliza generalmente en modelos en los que varían las normas vectoriales (magnitudes). Se recomienda para escenarios en los que las incrustaciones se han afinado teniendo en cuenta la magnitud (por ejemplo, motores de recomendación, puntuación de relevancia).

**Valor devuelto**

- Depende de las magnitudes y direcciones de los vectores
- Cuanto mayor sea el valor devuelto, más parecidos son los vectores.

#### Ejemplo

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $score := $vector.dotSimilarity($anotherVector)

```

#### Ejemplo 2

:::info

Este ejemplo utiliza la extensión [4D AIKit](../aikit/overview.md) para generar incrustaciones.

:::

```4d
var $model:="text-embedding-ada-002"
var $clientAI:=cs.AIKit.OpenAI.new(getAIKey())

$documents:=[{text: "How to bake a chocolate cake"; similarity: 0}; \
{text: "Best hiking trails in the Alps"; similarity: 0}; \
{text: "Tips for learning 4D programming"; similarity: 0}; \
{text: "Top 10 sci-fi movies of all time"; similarity: 0}]

$question:="4D coding tutorials"

// Cálculo de vectores con el componente AIKit 4D
$questionVector:=$clientAI.embeddings.create($question; $model).vector

For each ($document; $documents)
        // Cálculo de vectores con el componente AIKit 4D
    $vector:=$clientAI.embeddings.create($document.text; $model).vector
        // similitud
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

| Parámetros | Tipo                      |                             | Descripción                |
| ---------- | ------------------------- | --------------------------- | -------------------------- |
| vector     | 4D.Vector | ->                          | Vector con el que comparar |
| Resultado  | Real                      | <- | Distancia entre vectores   |

<!-- END REF -->

#### Descripción

La función `.euclideanDistance()` <!-- REF #VectorClass.euclideanDistance().Summary -->calcula la distancia euclídea entre el vector 4D actual y el que pasó en el parámetro *vector*<!-- END REF -->. Ambos vectores deben tener el mismo tamaño.

Esto mide la distancia de línea recta en el espacio vectorial. Se recomienda para incrustaciones de datos numéricos o estructurados, o cuando se utilizan modelos en los que la proximidad en el espacio bruto se correlaciona directamente con la similitud.

**Valor devuelto**

- valor devuelto >= 0
- Cuanto más bajo sea el valor devuelto, más parecidos son los vectores.

#### Ejemplo 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $distance := $vector.euclideanDistance($anotherVector)

```

#### Ejemplo 2

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

#### Descripción

La propiedad `.length` contiene <!-- REF #VectorClass.length.Summary -->el número de componentes del vector<!-- END REF -->.

## .toCollection()

<!--REF #VectorClass.toCollection().Syntax -->**.toCollection**() : Collection<!-- END REF -->

<!--REF #VectorClass.toCollection().Params -->

| Parámetros | Tipo       |                             | Descripción                                                            |
| ---------- | ---------- | --------------------------- | ---------------------------------------------------------------------- |
| Resultado  | Collection | <- | Colección de números reales que representan los componentes del vector |

<!-- END REF -->

La función `.toCollection()` <!-- REF #VectorClass.toCollection().Summary -->devuelve los componentes del vector como una colección de reales<!-- END REF -->.



---
id: VectorClass
title: Vector
---



The `Vector` class allows you to handle **vectors** and to execute distance and similarity calculations between them. This class is available from the `4D` class store.

In the world of AIs, a vector is a sequence of numbers that enables a machine to understand and manipulate complex data. For a detailed overview of the role of vectors with AIs, you can refer to [this page](https://aiforsocialgood.ca/blog/understanding-the-role-of-vectors-in-artificial-intelligence-a-comprehensive-guide).  




### Understanding the different vector computations 

The `4D.Vector` class proposes three types of vector computations. The following table summarizes the main characteristics of each one:

||cosineSimilarity|dotSimilarity|euclideanDistance|
|---|---|---|----|
|Definition|Compares the orientation of two texts represented as vectors. The more they point in the same direction, the closer they are.|Sum of products between each vector dimension. It's like a weighted compatibility score.|Actual distance between two vectors, as if measured with a ruler.|
|Simple analogy|Are we talking about the same subject?|Are you talking about the same subject insistently?|Are you really far away from what I'm saying?|
|Example|Imagine you're looking for movies to watch on a video on-demand streaming service. Cosine similarity is used to compare your tastes (for example, you like action movies with a bit of comedy) to the movie descriptions in their database. It doesn't matter whether you're a "small" fan (you watch 1 film a month) or a "big" fan (you watch 10 films a week), what matters is whether the films have similar characteristics to what you like (action + comedy). The streaming service uses cosine similarity to recommend films that "point in the same direction" as your preferences.|Think of a search engine. When you type "chocolate cake recipe", the algorithm compares your query to web pages. The dot product can be used not only to check whether a page is talking about chocolate cakes (a similar direction to your search), but also to give more weight to pages that are highly relevant (for example, a page with lots of detailed content about chocolate cakes will have a greater "length" and therefore a higher score). A page with just one sentence on the subject will have a lower score.|Imagine a dating application. The algorithm can use Euclidean distance to compare your profile (your interests, age, location, etc.) with those of other users. If your profiles are very similar (for example, you both like hiking, pop music, and you live 5 km apart), the Euclidean distance between your profiles will be low, and the app will suggest this person as a good "match". Here, all differences (however small) count, not just the general direction of your tastes.|

In any cases, it's a good idea to test the different vectors to determine which best suits your needs and data.

### Vector object

Vector objects are shared, immutable, and streamable.

||
|---|
|[<!-- INCLUDE #VectorClass.cosineSimilarity().Syntax -->](#cosinesimilarity)<br/><!-- INCLUDE #VectorClass.cosineSimilarity().Summary -->|
|[<!-- INCLUDE #VectorClass.dotSimilarity().Syntax -->](#dotsimilarity)<br/><!-- INCLUDE #VectorClass.dotSimilarity().Summary -->|
|[<!-- INCLUDE #VectorClass.euclideanDistance().Syntax -->](#euclideandistance)<br/><!-- INCLUDE #VectorClass.euclideanDistance().Summary --> |
|[<!-- INCLUDE #VectorClass.length.Syntax -->](#length)<br/><!-- INCLUDE #VectorClass.length.Summary -->|
|[<!-- INCLUDE #VectorClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #VectorClass.toCollection().Summary -->|



## 4D.Vector.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R10|Added
</details>

<!-- REF #4D.Vector.new().Syntax -->
**4D.Vector.new** ( *parameter* : Collection ) : 4D.Vector<!-- END REF -->

<!--REF #4D.Vector.new().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|parameter|Collection of reals|->|Collection of real numbers representing a vector|
|Result|4D.Vector|<-|New Vector object|
<!-- END REF -->


#### Description

The `4D.Vector.new()` function <!-- REF #4D.Vector.new().Summary -->creates and returns a new object of the `4D.Vector` type<!-- END REF -->.

In *parameter*, pass a collection of real numbers representing the vector to create. These values are provided by artifical intelligences and represent mathematically objects like words or data.  


#### Example

To create a vector:

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
```

You can access individual components or convert the entire vector back to a collection:

```4d
var $firstComponent := $vector[0]
var $collection := $vector.toCollection()
```


## .cosineSimilarity()


<!--REF #VectorClass.cosineSimilarity().Syntax -->**.cosineSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->


<!--REF #VectorClass.cosineSimilarity().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|vector|4D.Vector|->|Vector to compare with|
|Result|Real|<-|Distance between vectors|
<!-- END REF -->


#### Description

The `.cosineSimilarity()` function <!-- REF #VectorClass.cosineSimilarity().Summary -->calculates the cosine similarity between the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This metric measures the **angle between vectors** and is commonly used to determine semantic similarity between texts. It is recommended for text embeddings, documents, sentences, and any data where **direction** matters more than **magnitude** (e.g. for semantic search or text classification).

**Returned value**

- Range: -1 (opposite) to 1 (identical). 
- The higher the returned value is, more similar vectors are. 


#### Example 1

```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $similarity := $vector.cosineSimilarity($anotherVector)
```

#### Example 2

:::info

This example uses the [4D AIKit extension](../aikit/overview.md) to generate embeddings.

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

// Vector calculation with 4D AIKit
var $result:=$clientAI.embeddings.create($prompt; $model)

// 4D.vector object creation
var $vector:=$result.vector

var $question:="I'm looking for John who lives in USA"

// Vector calculation with 4D AIKit component
var $questionVector:=$clientAI.embeddings.create($question; $model).vector

// similarity calculation
If ($vector.cosineSimilarity($questionVector)>0.9)
  ALERT("Interesting result")
End if

//actual result: 0,7360136465949


```




## .dotSimilarity()


<!--REF #VectorClass.dotSimilarity().Syntax -->**.dotSimilarity**( *vector* : 4D.Vector ) : Real<!-- END REF -->


<!--REF #VectorClass.dotSimilarity().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|vector|4D.Vector|->|Vector to compare with|
|Result|Real|<-|Distance between vectors|
<!-- END REF -->


#### Description

The `.dotSimilarity()` function <!-- REF #VectorClass.dotSimilarity().Summary -->calculates the dot product of the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This metric reflects both **similarity** and **magnitude**, and is generally used in models where vector norms (magnitudes) vary. It is recommended for scenarios where embeddings have been fine-tuned with magnitude in mind (e.g., recommendation engines, scoring relevance).

**Returned value**

- Depends on vector magnitudes and directions 
- The higher the returned value is, more similar vectors are. 


#### Example


```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $score := $vector.dotSimilarity($anotherVector)

```

#### Example 2

:::info

This example uses the [4D AIKit extension](../aikit/overview.md) to generate embeddings.

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
|Parameter|Type||Description|
|---|---|---|---|
|vector|4D.Vector|->|Vector to compare with|
|Result|Real|<-|Distance between vectors|
<!-- END REF -->


#### Description

The `.euclideanDistance()` function <!-- REF #VectorClass.euclideanDistance().Summary -->calculates the Euclidean distance between the current 4D vector and the one you passed in the *vector* parameter<!-- END REF -->. Both vectors must have the same size.

This measures the straight-line distance in the vector space. It is recommended for numeric or structured data embeddings, or when using models where proximity in raw space directly correlates with similarity.


**Returned value**

- returned value >= 0
- The lower the returned value is, more similar vectors are. 


#### Example 1


```4d
var $vector := 4D.Vector.new([0.123; -0.456; 0.789]) 
var $anotherVector := 4D.Vector.new([0.598; -0.951; 0.789])
var $distance := $vector.euclideanDistance($anotherVector)

```

#### Example 2

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

<!-- END REF -->

## .toCollection()


<!--REF #VectorClass.toCollection().Syntax -->**.toCollection**() : Collection<!-- END REF -->


<!--REF #VectorClass.toCollection().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Collection|<-|Collection of real numbers representing the vector components|
<!-- END REF -->

The `.toCollection()` function <!-- REF #VectorClass.toCollection().Summary -->returns the vector components as a collection of reals<!-- END REF -->. 



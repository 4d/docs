---
id: propertiesScale
title: Scale
---

## Minimum

Minimum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|min|string / number |minimum:0 (for numeric data types)|


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) - [Stepper](indicators_overview.md#stepper)|


## Maximum

Maximum value of an indicator. For numeric steppers, this property represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|max|string / number |minimum:0 (for numeric data types)|


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) - [Stepper](indicators_overview.md#stepper)|

## Graduation step

Scale display measurement.	

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|graduationStep| integer|minimum:0|


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) |

## Step

Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|step| integer|minimum:1|


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) - [Stepper](indicators_overview.md#stepper) |


## Label Location

Specifies the location of an object's displayed text.

* None - no label is displayed
* Top - Displays labels to the left of or above an indicator
* Bottom - Displays labels to the right of or below an indicator


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|labelsPlacement| string|<li>"none"<li>"top"<li>"bottom"<li>"left"<li>"right"|


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) |


## Display graduation

Displays/Hides the graduations next to the labels.

#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|showGraduations|boolean |<li>"true"<li>"false"|
gra

#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Progress Bar](indicators_overview.md#progress-bar) - [Ruler](indicators_overview.md#ruler) |

## Barber shop




#### JSON Grammar

|Name|Data Type|Possible Values|
|:---:|:---:|---|
|| ||


#### Objects Supported

|Category|Link| 
|---|---|
|Indicator|[Barber shop](indicators_overview.md#barber-shop)|
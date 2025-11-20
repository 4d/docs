---
id: openaifilelistresult
title: OpenAIFileListResult
---

# OpenAIFileListResult

The `OpenAIFileListResult` class contains the result of listing files from the OpenAI API.

## Inherits

[OpenAIResult](OpenAIResult.md)

## Computed properties

| Property   | Type       | Description                                                                 |
|------------|------------|-----------------------------------------------------------------------------|
| `files`    | Collection | Returns a collection of [OpenAIFile](OpenAIFile.md) objects from the API response, or an empty collection if no files are found. |
| `first_id` | Text       | Returns the ID of the first file in the list, or an empty string if not available. |
| `last_id`  | Text       | Returns the ID of the last file in the list, or an empty string if not available. |
| `has_more` | Boolean    | Indicates if there are more files beyond this page. `True` if there are more files to fetch, `False` otherwise. |


## Example Usage

### Basic Usage

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.purpose:="assistants"
$params.limit:=50

var $result:=$client.files.list($params)
var $files:=$result.files

For each ($file; $files)
    // Process each OpenAIFile object
    // $file.filename -> "salesOverview.pdf"
    // $file.bytes -> 175
    // $file.purpose -> "assistants"
End for each
```

### Pagination Example

```4d
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100

var $result:=$client.files.list($params)
var $allFiles:=$allFiles.combine($result.files)

// Continue fetching if there are more files
While ($result.has_more)
    $params.after:=$result.last_id
    $result:=$client.files.list($params)
    $allFiles:=$allFiles.combine($result.files)
End while 

// $allFiles now contains all files from the organization
```

## See also

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFile](OpenAIFile.md)
- [OpenAIFileListParameters](OpenAIFileListParameters.md)
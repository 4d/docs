---
id: exporting-to-html-and-mime-html-formats
title: Exporting to HTML and MIME HTML formats
displayed_sidebar: docs
---

4D Write Pro documents can be exported to the HTML and MIME HTML formats using the [WP EXPORT DOCUMENT](../commands/wp-export-document) and [WP EXPORT VARIABLE](../commands/wp-export-variable) commands. Use these tables to check which 4D Write Pro attributes and features are exported to HTML and MIME HTML. The attributes/features are sorted alphabetically. For a detailed list of attributes, see [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md).

### Common attributes 

| **Attribute/Feature**                         | **Exported** | **Comment** |
| --------------------------------------------- | ------------ | ----------- |
| Background clip                               | yes          |             |
| Background color (for element, not character) | yes          |             |
| Background image                              | yes          |             |
| Background repeat                             | yes          |             |
| Background origin                             | yes          |             |
| Background position                           | yes          |             |
| Background width and height                   | yes          |             |
| Border color                                  | yes          |             |
| Border radius                                 | yes          |             |
| Border style                                  | yes          |             |
| Border width                                  | yes          |             |
| Element id                                    | yes          |             |
| Margin                                        | yes          |             |
| Padding                                       | yes          |             |
| Protected                                     | no           |             |
| Style sheet                                   | yes          |             |

### Characters 

| **Attribute/Feature**  | **Exported** | **Comment**                     |
| ---------------------- | ------------ | ------------------------------- |
| Background color       | yes          |                                 |
| Font and font styles   | yes          |                                 |
| Font size              | yes          |                                 |
| Strikethrough color    | no           |                                 |
| Strikethrough styles   | partially    | Only solid is exported          |
| Superscript, subscript | yes          |                                 |
| Text color             | yes          |                                 |
| Text shadow            | yes          |                                 |
| Text transform         | partially    | Small uppercase is not exported |
| Underline color        | no           |                                 |
| Underline styles       | partially    | Only solid is exported          |

#### Columns 

| **Attribute/Feature** | **Exported** | **Comment** |
| --------------------- | ------------ | ----------- |
| Column count          | no           |             |
| Column rule color     | no           |             |
| Column rule style     | no           |             |
| Column rule width     | no           |             |
| Column spacing        | no           |             |

### Document 

| **Attribute/Feature**                     | **Exported** | **Comment** |
| ----------------------------------------- | ------------ | ----------- |
| Break paragraphs in formulas | no           |                             |                                                                          
| Document (meta) information  | partially    | Only title and subject are exported | 
| Dpi                          | no           |                             |                                     
| Font default                 | no           |                             |                                                                          
| Header and footer autofit    | no           |                             |                                                                          
| Page margin                  | no           |                             |                                                                          
| Page orientation             | no           |                             |                                                                          
| Page width/height            | no           |                             |                                                                          
| Protection enabled           | no           |                             |                                                                          
| Tab decimal separator        | no           |                             |                                                                          
| User unit                    | no           |                             |                                                                          

### Images 
| **Attribute/Feature**            | **Exported** | **Comment** |
| -------------------------------- | ------------ | ----------- |
| Alternate text                   | yes          |             |           
| Anchor align                     | partially    | Only right, left, top or bottom |
| Anchor embedded                  | yes          |             |       
| Anchor origin                    | partially    | Only for the container box (borders of the web page)|
| Anchor to a single page          | no           |             |   
| Anchor to all pages              | no           |             |         
| Anchor to all sections of a page | no           |             |                      
| Background image (and related background attributes)| yes          |             |   
| Image display mode               | partially    | If an image has a background image, it is exported as scaled to fit. |
| Image URL                        | yes          |             |     
| Vertical align                   | yes          |             |                                                                      

### Text boxes 

| **Attribute/Feature**            | **Exported** | **Comment**          |
| -------------------------------- | ------------ | -------------------- |
| Anchor align                     | yes          |                      |                                        
| Anchor embedded                  | yes          | as div               |                                               
| Anchor offset                    | yes          |                      |                          
| Anchor origin                    | partially    | Only for the container box (borders of the web page) |
| Anchor to a single page          | no           |                      |  
| Anchor to all sections of a page | no           |                      |                    
| Vertical align                   | yes          |                      |                                                      

### Paragraphs 

| **Attribute/Feature**                | **Exported** |**Comment**|
| ------------------------------------ | ------------ | --------- |
| Absolute tab stops                   | no           |           |                                                                                             
| Column break after                   | yes          | Single column only (multiple columns are not supported) |
| Direction                            | yes          |           |                                                                                             
| Keep with next                       | yes          |           |                                                                                             
| Line height                          | yes          |           |                                                                                             
| List font                            | no           |           |                                                                                             
| List image                           | yes          |           |                                                                                             
| List image height                    | no           |           |                                                                                             
| List start number                    | yes          |           |
| List string format (custom format)   | no           |           |                                                                                             
| List style type                      | partially    | Hollow-square, diamond, and club are not exported, decimal-greek is the same as lower-greek |
| Min-height                           | yes          |           |                                                                                             
| Min-width                            | no           |           |                                                                                             
| New line style sheet                 | no           |           |                                                                                             
| Page break after                     | yes          |           |                                                                                             
| Page break inside                    | yes          |           |                                                                                             
| Section break after (continuous or not)| no         |           |                                                                                             
| Text align                           | yes          |           |                                                                                             
| Text indent                          | yes          |           |                                                                                             
| Vertical-align                       | yes          |           |                                                                                             
| Widow and orphan control             | no           |           |                                                                                             
| Width                                | yes          |           |                                                                                            

### Sections and page elements 

| **Attribute/Feature**            | **Exported** | **Comment** |
| -------------------------------- | ------------ | ----------- |
| First page sub-section           | no           |             |                                                                                               
| Headers and footers              | no           |             |                                                                                               
| Left and right page sub-sections | no           |             |                                                                                               
| Main sections                    | no           | Only document-level attributes are exported to the html body |
| Page margin                      | no           |             |                                                                                               
| Page orientation                 | no           |             |                                                                                               

### Tables 

| **Attribute/Feature**                     | **Exported** | **Comment** |
| ----------------------------------------- | ------------ | ----------- |
| Background image (and related attributes) | yes          |             |                                                                                          
| Column break after                        | yes          | Single column only (multiple columns are not supported) |
| Horizontal alignment                      | yes          |             |                                                                                          
| Page break after                          | yes          |             |                                                                                          
| Page break inside                         | yes          |             |                                                                                          
| Section break after                       | no           |             |                                                                                          
| Bottom carry-over rows                    | no           |             |                                                                                          

### Table cells 

| **Attribute/Feature**                     | **Exported** | **Comment** |
| ----------------------------------------- | ------------ | ----------- |
| Background image (and related attributes) | yes          |             |
| Height                                    | yes          |             |
| Vertical align                            | yes          |             |
| Width                                     | yes          |             |

### Table rows 

| **Attribute/Feature**                     | **Exported** | **Comment** |
| ----------------------------------------- | ------------ | ----------- |
| Background image (and related attributes) | yes          |             |                                                                                          
| Column break after                        | yes          | Single column only (multiple columns are not supported) |
| Height                                    | yes          |             |                                                                                          
| Page break after                          | yes          |             |                                                                                          

### Other features 

| **Attribute/Feature**        | **Exported** | **Comment** |
| ---------------------------- | ------------ | ----------- |
| 4D formulas                  | no           | Computed and freezed for export |
| 4D method links              | no           |             |                                                                  
| Bookmarks and bookmark links | yes          |             |                                                                  
| URL links                    | yes          |             |                                 
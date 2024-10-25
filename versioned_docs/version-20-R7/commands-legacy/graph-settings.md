---
id: graph-settings
title: GRAPH SETTINGS
slug: /commands/graph-settings
displayed_sidebar: docs
---

<!--REF #_command_.GRAPH SETTINGS.Syntax-->**GRAPH SETTINGS** ( *graphPicture* ; *xmin* ; *xmax* ; *ymin* ; *ymax* ; *xprop* ; *xgrid* ; *ygrid* ; *title* {; *title2* ; ... ; *titleN*} )<!-- END REF-->
<!--REF #_command_.GRAPH SETTINGS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| graphPicture | Picture | &#8594;  | Picture variable |
| xmin | Integer, Date, Time | &#8594;  | Minimum x-axis value for proportional graph (line or scatter plot only) |
| xmax | Integer, Date, Time | &#8594;  | Maximum x-axis value for proportional graph (line or scatter plot only) |
| ymin | Integer | &#8594;  | Minimum y-axis value |
| ymax | Integer | &#8594;  | Maximum y-axis value |
| xprop | Boolean | &#8594;  | TRUE for proportional x-axis; FALSE for normal x-axis (line or scatter plot only) |
| xgrid | Boolean | &#8594;  | TRUE for x-axis grid; FALSE for no x-axis grid (only if xprop is TRUE) |
| ygrid | Boolean | &#8594;  | TRUE for y-axis grid; FALSE for no y-axis grid |
| title | Text | &#8594;  | Title(s) for graph legend(s) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GRAPH SETTINGS.Summary-->GRAPH SETTINGS changes the graph settings for graph displayed in a form.<!-- END REF--> The graph must have already been defined using the [GRAPH](graph.md) command. GRAPH SETTINGS has no effect on a pie chart. This command must be called in the same process as the form.

**Note:** You must not call this command if the graph was generated using the [GRAPH](graph.md) command with the [Object](# "Data structured as a native 4D object") type *graphSettings* parameter. Refer to the description of the [GRAPH](graph.md) command for more information.

The *xmin*, *xmax*, *ymin*, and *ymax* parameters all set the minimum and maximum values for their respective axes of the graph. If the value of any pair of these parameters is a null value (0, ?00:00:00?, or !00/00/00!, depending on the data type), the default graph values will be used. The *xmin* and *xmax* parameters are only taken into account for proportional graphs (*xprop* is **True**).

The *xprop* parameter turns on proportional plotting for line graphs (type 4), area graphs (type 5) and scatter graphs (type 6). When TRUE, it will plot each point on the x-axis according to the point’s value, and then only if the values are numeric, time, or date.

The *xgrid* and *ygrid* parameters display or hide grid lines. A grid for the x-axis will be displayed only when the plot is a proportional scatter or line graph.

The *title* parameter(s) labels the legend.

#### Example 

See example for the [GRAPH](graph.md) command.

#### See also 

[GRAPH](graph.md)  
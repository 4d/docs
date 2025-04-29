---
id: onVpReady
title: On VP Ready
---

|Code|Can be called by|Definition|  
|---|---|---|
|9|[4D View Pro Area](FormObjects/viewProArea_overview.md)|The loading of the 4D View Pro area is complete|


## Description

This event is generated when the 4D View Pro area loading is complete. 

You need to use this event to write initialization code for the area. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the `On VP Ready` form event of the area. This form event is triggered once the area loading is complete. Testing this event makes you sure that the code will be executed in a valid context. An error is returned if a 4D View Pro command is called before the `On VP Ready` form event is generated.

> 4D View Pro areas are loaded asynchronously in 4D forms. It means that the standard [On load](onLoad.md) form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. `On VP Ready` is always generated after [On load](onLoad.md).
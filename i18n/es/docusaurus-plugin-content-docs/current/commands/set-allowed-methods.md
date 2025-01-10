---
id: set-allowed-methods
title: SET ALLOWED METHODS
slug: /commands/set-allowed-methods
displayed_sidebar: docs
---

<!--REF #_command_.SET ALLOWED METHODS.Syntax-->**SET ALLOWED METHODS** ( *methodsArray* )<!-- END REF-->

<!--REF #_command_.SET ALLOWED METHODS.Params-->

| Parámetros   | Tipo       |   | Descripción           |
| ------------ | ---------- | - | --------------------- |
| methodsArray | Text array | → | Array of method names |

<!-- END REF-->

#### Descripción

<!--REF #_command_.SET ALLOWED METHODS.Summary-->The **SET ALLOWED METHODS** command designates the project methods that can be entered via the application.<!-- END REF-->

4D includes a security mechanism that filters enterable project methods from the following contexts:

- The formula editor - allowed methods appear at the end of the list of default commands and can be used in formulas (see section *Description of formula editor*).
- The label editor - the allowed methods are listed in the **Apply** menu if they are also shared with the component (see section *Description of label editor*).
- Formulas inserted in styled text areas or 4D Write Pro documents through the [ST INSERT EXPRESSION](../commands-legacy/st-insert-expression.md) command - disallowed methods are automatically rejected.
- 4D View Pro documents - by default, if the [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) command has never been called during the session, 4D View Pro formulas only accept methods defined by **SET ALLOWED METHODS**. However, using [`VP SET ALLOWED METHODS`](../ViewPro/commands/vp-set-allowed-methods.md) is recommended. See [Declaring allowed method](../ViewPro/formulas.md#declaring-allowed-methods).

By default, if you do not use the **SET ALLOWED METHODS** command, no method is enterable (using an unauthorized method in an expression causes an error).

In the *methodsArray* parameter, pass the name of an array containing the list of methods to allow. The array must have been set previously.

You can use the wildcard character (@) in method names to define one or more authorized method groups.

If you would like the user to be able to call 4D commands that are unauthorized by default or plug-in commands, you must use specific methods that handle these commands.

**Note:** Formula filtering access can be disabled for all users or for the Designer and Administrator via [an option on the "Security" page of the Settings](../settings/security.md#options). If the "Disabled for all" option is checked, the **SET ALLOWED METHODS** command will have no effect.

:::warning

This command only filters the **input** of methods, not their **execution**. It does not control the execution of formulas created outside the application.

:::

#### Ejemplo

This example authorizes all methods starting with “formula” and the “Total\_general” method to be entered by the user in protected contexts:

```4d
 ARRAY TEXT(methodsArray;2)
 methodsArray{1}:="formula@"
 methodsArray{2}:="Total_general"
 SET ALLOWED METHODS(methodsArray)
```

#### Ver también

[EDIT FORMULA](../commands-legacy/edit-formula.md)\
[GET ALLOWED METHODS](../commands-legacy/get-allowed-methods.md)

#### Propiedades

|                |                                                                 |
| -------------- | --------------------------------------------------------------- |
| Command number | 805                                                             |
| Thread safe    | &amp;amp;amp;amp;amp;amp;amp;amp;amp;cross; |

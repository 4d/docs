---
id: class-object-fields
title: Class object fields
---

draft info:

Starting with 4D 20 R10, you can define a **class-typed object field** in the database structure.

- A **class object field** is a database field of type `Object` that is linked to a specific class.
- The field automatically supports code completion and syntax checks for the class's attributes and methods.
- This enhances developer experience when accessing `.attribute` or `.method()` in the editor.


- The code editor suggests and validates attributes based on the class definition.
- If the class name assigned in the field does not exist, errors or warnings are shown:
  - In the structure editor
  - In the compiler
  - At runtime (if assigned improperly)
- If the base is binary, the class selection option is not available.
- When using `DataClass.Attribute`, a `classID` must be provided to resolve the instance type.


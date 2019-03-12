---
id: overview
title: Overview
---

Developing a 4D application can be done in two different modes:

- **binary mode**: all design elements (methods, forms, structure...) are gathered in a single, compact binary file, the ".4db" file. This mode was the only available mode until 4D v18.
- **project mode**: all design elements are stored in separate, text-based, human-readable files. 
- 
The project mode provides an alternative way to develop in 4D using a text-based rather than binary-based mode. The 4D project mode combines the power of the 4D development platform with the versatility of lightweight, distributed work. 

Fully functional 4D applications are created from end-to-end via multiple files within a single 4D Project. These files contain everything from the structure of an application, to its code, and even the application’s settings and user preferences.
 
Because file formats in 4D Project Mode are text-based (JSON, XML, etc.), they are easy to read and understand by both new and experienced developers. Their compact size increases opportunities to work collaboratively by being easy to:

- Program generically
- Customize code
- Share files
- Create templates

The flexibility of developing applications in 4D Project Mode is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D Project files are ideal for defining modules and storing them in a source control repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as: 

- Versioning
- Revision Comparisons
- Rollbacks

4D Project Mode is a feature-rich, robust framework equivalent to 4D Binary Mode with only minor differences between the two such as the architecture, administration tools, and the approach to working in teams. Creating applications in 4D Project Mode, whether it’s interpreted or compiled, has no differences for end users. 
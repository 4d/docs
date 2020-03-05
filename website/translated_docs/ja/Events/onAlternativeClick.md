---
id: onAlternativeClick
title: On Alternative Click
---

<table>
  <tr>
    <th>
      Code
    </th>
    
    <th>
      Can be called by
    </th>
    
    <th>
      Definition
    </th>
  </tr>
  
  <tr>
    <td>
      38
    </td>
    
    <td>
      <a href="FormObjects/button_overview.md">Button</a> - <a href="FormObjects/listbox_overview.md">List Box</a> - <a href="FormObjects/listbox_overview.md#list-box-columns">List Box Column</a>
    </td>
    
    <td>
      <li>
        Buttons: The "arrow" area of a button is clicked<li>
          List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked</td> </tr> </tbody> </table> <h2>
            説明
          </h2>
          <h3>
            Buttons
          </h3>
          <p>
            Some button styles can be <a href="FormObjects/properties_TextAndPicture.md#with-pop-up-menu">linked to a pop-up menu</a> and display an triangle. Clicking on this triangle causes a selection pop-up to appear that provides a set of alternative actions in relation to the primary button action.
          </p>
          <p>
            4D allows you to manage this type of button using the <code>On Alternative Click</code> event. This event is generated when the user clicks on the triangle (as soon as the mouse button is held down):
          </p>
          <ul spaces="0" level="0" marker="-">
            <li level="0">
              If the pop-up menu is <strong>separated</strong>,the event is only generated when a click occurs on the portion of the button with the arrow.
            </li>
            <li level="0">
              If the pop-up menu is <strong>linked</strong>, the event is generated when a click occurs on any part of the button. Note that the <a href="onLongClick.md"><code>On Long Click</code></a> event cannot be generated with this type of button.
            </li>
          </ul>
          <p>
            <img src="assets/en/Events/clickevents.png" alt="" />
          </p>
          <h3>
            List box
          </h3>
          <p>
            This event is generated in columns of <a href="FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro">object array type list boxes</a>, when the user clicks on a widget ellipsis button ("alternateButton" attribute).
          </p>
          <p>
            <img src="assets/en/FormObjects/listbox_column_objectArray_alternateButton.png" alt="" />
          </p>
          <p>
            See the <a href="FormObjects/listbox_overview.md#alternatebutton">description of the "alternateButton" attribute</a>.
          </p>
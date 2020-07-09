---
id: formSize
title: Form Size
---

 
4D lets you set the size of both the form and the [window](properties_WindowSize.md). These properties are interdependent and your application interface results from their interaction.

Size options depend on the value of the **Size based on** option.

* * *

## Size based on

* **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor. Margin**](#hor-margin) and [**Vert. Margin**](#vert-margin) fields. 

<

p> You can choose this option when you want to use active objects placed in an offscreen area (*i.e.*, outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.

* **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

* **\
    
    <object name>
      </strong>: The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.</p></li> </ul> 
      
      <blockquote>
        <p>
          For output forms, only the <a href="#hor-margin"><strong>Hor. margin</strong></a> or <a href="width"><strong>Width</strong></a> fields are available.
        </p>
      </blockquote>
      
      <h4>
        JSON 文法
      </h4>
      
      <table>
        <tr>
          <th>
            名
          </th>
          
          <th>
            データタイプ
          </th>
          
          <th>
            とりうる値
          </th>
        </tr>
        
        <tr>
          <td>
            formSizeAnchor
          </td>
          
          <td>
            string
          </td>
          
          <td>
            Name of object to use to defined the size of the form
          </td>
        </tr>
      </table>
      
      <hr />
      
      <h2>
        Height
      </h2>
      
      <p>
        Height of the form (in pixels) when the <a href="#size-based-on">form size</a> is <strong>Set size</strong>.
      </p>
      
      <h4>
        JSON 文法
      </h4>
      
      <table>
        <tr>
          <th>
            名
          </th>
          
          <th>
            データタイプ
          </th>
          
          <th>
            とりうる値
          </th>
        </tr>
        
        <tr>
          <td>
            height
          </td>
          
          <td>
            number
          </td>
          
          <td>
            integer value
          </td>
        </tr>
      </table>
      
      <hr />
      
      <h2>
        Hor. Margin
      </h2>
      
      <p>
        Value to add (in pixels) to the right margin of the form when the <a href="#size-based-on">form size</a> is <strong>Automatic size</strong> or <strong>\
        
        <object name>
          </strong></p> 
          
          <p>
            This value also determines the right-hand margins of forms used in the Label editor.
          </p>
          
          <h4>
            JSON 文法
          </h4>
          
          <table>
            <tr>
              <th>
                名
              </th>
              
              <th>
                データタイプ
              </th>
              
              <th>
                とりうる値
              </th>
            </tr>
            
            <tr>
              <td>
                rightMargin
              </td>
              
              <td>
                number
              </td>
              
              <td>
                integer value
              </td>
            </tr>
          </table>
          
          <hr />
          
          <h2>
            Vert. Margin
          </h2>
          
          <p>
            Value to add (in pixels) to the bottom margin of the form when the <a href="#size-based-on">form size</a> is <strong>Automatic size</strong> or <strong>\
            
            <object name>
              </strong>.</p> 
              
              <p>
                This value also determines the top margins of forms used in the Label editor.
              </p>
              
              <h4>
                JSON 文法
              </h4>
              
              <table>
                <tr>
                  <th>
                    名
                  </th>
                  
                  <th>
                    データタイプ
                  </th>
                  
                  <th>
                    とりうる値
                  </th>
                </tr>
                
                <tr>
                  <td>
                    bottomMargin
                  </td>
                  
                  <td>
                    number
                  </td>
                  
                  <td>
                    integer value
                  </td>
                </tr>
              </table>
              
              <hr />
              
              <h2>
                幅
              </h2>
              
              <p>
                Width of the form (in pixels) when the <a href="#size-based-on">form size</a> is <strong>Set size</strong>.
              </p>
              
              <h4>
                JSON 文法
              </h4>
              
              <table>
                <tr>
                  <th>
                    名
                  </th>
                  
                  <th>
                    データタイプ
                  </th>
                  
                  <th>
                    とりうる値
                  </th>
                </tr>
                
                <tr>
                  <td>
                    width
                  </td>
                  
                  <td>
                    number
                  </td>
                  
                  <td>
                    integer value
                  </td>
                </tr>
              </table>
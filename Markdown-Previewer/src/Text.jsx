import Markdown from "react-markdown";
import { useState } from "react";
import { MouseEvent } from "react"


function Text(){

        const defaultText = `
  # Heading 1
  ## Heading 2

  [Link](https://www.freecodecamp.org/)

  \`inline code\`
  \`\`\`
  // Code block
  const greeting = 'Hello';
  console.log(greeting);
  \`\`\`

  - List item 1
  - List item 2

  > Blockquote

  ![Image](https://e1.pngegg.com/pngimages/586/862/png-clipart-ii-free-use-white-and-black-cat-illustration-thumbnail.png)
  
  **Bold text**;`

    const [text, newText] = useState(defaultText)

    function markdown(event){
        newText(event.nativeEvent.target.value)
    }

    return(
        <>
            <div class="mb-3">
                <label for="editor" class="form-label">Type in text for Markdown</label>
                <textarea class="form-control" id="editor" onChange={markdown}>{text}</textarea>
            </div>
            <div class='mb-3'>
                <label for="preview" class="form-label">Markdown Text</label>
                <div class='output' id='preview'><Markdown>{text}</Markdown></div>
            </div>
        </>
    )
}


export default Text

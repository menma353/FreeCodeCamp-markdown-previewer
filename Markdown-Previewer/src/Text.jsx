


function Text(){

        const defaultText = `
  # Heading 1
  ## Heading 2
  [Link](https://www.example.com)
  \`inline code\`
  \`\`\`
  // Code block
  const greeting = 'Hello';
  console.log(greeting);
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![Image](https://via.placeholder.com/150)
  **Bold text**
      ;`
    return(
        <>
            <textarea id='editor' rows="4" cols="50" >

            </textarea>
        </>
    )
}


export default Text
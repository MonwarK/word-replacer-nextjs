import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import { Editor, EditorState } from 'draft-js';

export default function Home() {
  const [replaceWord, setReplaceWord] = useState("")
  const [newWord, setNewWord] = useState("")
  const [textToSimplify, setTextToSimplify] = useState("")
  const [convertedText, setConvertedText] = useState("")

  const handleClick = () => {
    const paragraphArray = textToSimplify.split(" ")
    let paragraphArray2 = [];
    
    paragraphArray.map((item) => {
        if(item.toLowerCase().includes(replaceWord.toLowerCase())) {
            paragraphArray2.push(newWord)
        } else {
            paragraphArray2.push(item)
        }
    })

    console.log(paragraphArray2)
    setConvertedText(paragraphArray2.join(" "))
  }

  return (
    <div className="max-w-screen-md mx-auto bg-gray-100 w-full min-h-screen p-14">
      {/* Header */}

      {/* Ad */}

      {/* Replace Text */}
      <div>
        <div className="grid grid-cols-2 space-x-5">
          <div>
            <p>Replace Word</p>
            <input 
              className="py-1 px-2 outline-none bg-yellow-200 shadow-inner w-full" 
              type="text"
              onChange={(e) => setReplaceWord(e.target.value)}
            />
          </div>
          <div>
            <p>New Word</p>
            <input 
              className="py-1 px-2 outline-none bg-yellow-200 shadow-inner w-full" 
              type="text"
              onChange={(e) => setNewWord(e.target.value)}
            />
          </div>
        </div>

        <div className="my-5">
          <p>Enter text to simplify:</p>
          <textarea 
            rows="8" 
            className="bg-yellow-200 shadow-inner w-full outline-none p-2"
            onChange={(e) => setTextToSimplify(e.target.value)}  
          >
          </textarea>
        </div>

        <button onClick={handleClick} className="bg-gray-800 text-white py-2 px-7 rounded-lg">Convert</button>
      </div>

      {convertedText && (
        <div className="my-10">
          <h1 className="text-3xl font-bold">Your output</h1>
          <ReactMarkdown>{convertedText}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

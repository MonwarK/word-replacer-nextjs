import 'tailwindcss/tailwind.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-300">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

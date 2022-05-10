import { useEffect, useState } from 'react'
import './App.css'


type TItem = {
  title: string
  name: String
}

const gifts = [
  '1 triệu',
  '10 triệu',
  '100 triệu'
]

const title = ['posts', 'albums', 'comments']

function App() {

  const [status, setStatus] = useState(false);
  const [type, setType] = useState('posts');
  const [icon, setIcon] = useState<TItem[]>([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(item => setIcon(item))
  }, [type])

  return (
    <div className='App'>
      <button onClick={() => setStatus(!status)}>Toggle</button><br></br>
      {status && title.map(item => <button
        key={item}
        style={type === item ? { color: 'red' } : {}}
        onClick={() => setType(item)}
      >{item}</button>)}
      <ul>
        {icon.map((it, i) => <li key={i}>{it.title || it.name}</li>)}
      </ul>
    </div>
  )
}

export default App

import './App.css';
import { useState } from 'react';
import { useStore } from './store';
import Todos from './components/Todos';

function App() {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  
  const blog = useStore(store => store.blog)
  const postBlog = useStore(store => store.postBlog)
  const deleteTask = useStore(store => store.deleteTask)
  const count = useStore(store => store.count)
  const increase = useStore(store => store.increaseCount)
  const decrease = useStore(store => store.decreaseCount)
  const reset = useStore(store => store.resetCount)

  return (
    <div className="App">
      <Todos />
      <h3>{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>reset</button>
       <form>
         <label for="username">Title:</label>
         <input value={text} onChange={e => setText(e.target.value)} required></input>
  
         <label for="description">Description:</label>
         <textarea value={description} onChange={e => setDescription(e.target.value)} required></textarea>

         <button onClick={() => {
          postBlog(text, description);
          setText('');
          setDescription('')
       }}>Post</button>
       </form>
       
       <h1>My Blogs</h1>
       {blog.map(item => (
        <div key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button onClick={() => deleteTask(item.title)}>delete</button>
        </div>
       ))}
    </div>
  );
}

export default App;

import Card from './Card'
import data from './data.json'
import { v4 as uuidv4 } from 'uuid';
// import './App.css'


function App() {

  // let items = [];
  // for (let i = 0; i <data.length; i++) {
  //   items.push(<Card titleText={data[i].title} descText={data[i].desc}/>);
  // }

  // items = data.map((item) =>
  //   <Card titleText={item.title} descText={item.desc}/>
  // )
  // console.log(uuidv4());
  return (
    <>
      <div>
        <h1 className='headingStyle'>React App</h1>
        { data.map((item) => <Card key={uuidv4()} titleText={item.title} descText={item.desc}/>) }

      </div>

    </>
  )
}

export default App

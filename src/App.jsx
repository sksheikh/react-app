import Card from './Card'
import data from './data.json'
// import './App.css'


function App() {

  // let items = [];
  // for (let i = 0; i <data.length; i++) {
  //   items.push(<Card titleText={data[i].title} descText={data[i].desc}/>);
  // }

  // items = data.map((item) =>
  //   <Card titleText={item.title} descText={item.desc}/>
  // )
  // console.log(items);
  return (
    <>
      <div>
        <h1 className='headingStyle'>React App</h1>
        { data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc}/>) }

      </div>

    </>
  )
}

export default App

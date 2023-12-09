import Card from "./components/Card"

function App() {

  const cardTitle= 'Card Title';
  const cardDescription = 'Card Description';

  return (
    <>
    <Card title={cardTitle} description={cardDescription}/>
    </>
  )
}

export default App

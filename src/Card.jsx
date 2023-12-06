
const date = new Date().getFullYear();

function Card(props){
  const {titleText, descText} = props;
  // console.log(props);
  return  <div className='card'>
             <h2 className='cardTitle'>{titleText}</h2>
            <p className='cardDescription'>{descText}</p>
            <p className='cardFooter'>{date}</p>
          </div>
}


export default Card;



const title = 'Card Title';
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?';
const date = new Date().getFullYear();

function Card(){
  return  <div className='card'>
            <h2 className='cardTitle'>{title}</h2>
            <p className='cardDescription'>{description}</p>
            <p className='cardFooter'>{date}</p>
          </div>
}


export default Card;


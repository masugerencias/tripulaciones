import { Link } from 'react-router-dom';

import './CategoriaCard.css'

export const CategoriaCard = ({ _id, titulo, imagen, icono }) => {
  return (
    <Link to={_id} className='topicsLink'>
      <div className='topicsToLearn'>

        <div className='topics'>
          <img className='categoryCardImg' src={imagen} alt={titulo} />
          <div className='topicTitle'>
            <p className='category-Title'>{titulo}</p>
            <img className='iconosAprende' src={icono} alt='gestionOnline' />
          </div>

        </div>
      </div>
    </Link>
  );
};

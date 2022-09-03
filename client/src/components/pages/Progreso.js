import './Progreso.css'
import { Navigate, useNavigate } from 'react-router-dom';

export const Progreso = () => {

    const navigate = useNavigate();

    const weeklyOnClick = () => {
      navigate('/resultados2')
    }

    return (
        <div className='containerProgreso'>
            <div className='headerCompletadoProgreso'>
                <h2 className='progresoText'>Completado</h2>
            </div>

            <div className='weekCompleted'>
                <div>
                    <img className='imagenSemana' src='/images/semana.png' alt="semana" />
                </div>
            </div>
            <div className='textDiaConsecutivo'>
                <h3>¡6to día <br />consecutivo!</h3>
            </div>

            <div className='containerimagenSemana'>
                <img className='imagenSilueta' src='/images/completadoSemana.png' alt="semana" />
            </div>

            <h3 className='desbloqueado'>Has desbloqueado el Nivel 2 <br />en Navega Seguro</h3>

            <div className='containerBtn'>
                <button className='btnProgreso' onClick={weeklyOnClick} >Sigue <br />Aprendiendo</button>
            </div>



        </div>
    );
}


import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { FormExtra } from '../FormExtra';
import './PerfilPage.css';
export const PerfilPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>Perfil</h1>
      <hr />
      <div>
        <h2>
          {user?.nombre} {user?.apellidos}
        </h2>
        <p>
          <b>Email:</b> {user?.email}
        </p>
        <p>
          <b>Dirección:</b> {user?.direccion}
        </p>
        <p>
          <b>Teléfono:</b> {user?.telefono}
        </p>
      </div>

      <div className='form_extra'>
        <FormExtra />
      </div>
    </>
  );
};

import React, { useContext } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Context from '../context/Context';
import Button from './Button';
import Text from './Text';
import { deleteEmployee, getAllEmployees } from '../services/api';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
function ExcludeModal({ name, cpf, id }) {
  const { excludeModal,
    closeExcludeModal,
    setAllEmployees,
    setFilterEmployees,
  } = useContext(Context);

  const handleOnClick = async () => {
    await deleteEmployee(id);

    const data = await getAllEmployees();
    setAllEmployees(data);
    setFilterEmployees(data);

    return closeExcludeModal();
  };

  return (
    <Modal
      isOpen={ excludeModal }
      onRequestClose={ closeExcludeModal }
      style={ customStyles }
    >
      <Text text="Deseja excluir o funcionário abaixo?" />
      <Text text={ name } />
      <Text text={ cpf } />
      <Button onClick={ closeExcludeModal }>Cancelar</Button>
      <Button onClick={ handleOnClick }>Excluir</Button>
    </Modal>
  );
}

// ReactDOM.render(<ExcludeModal />, appElement);

export default ExcludeModal;

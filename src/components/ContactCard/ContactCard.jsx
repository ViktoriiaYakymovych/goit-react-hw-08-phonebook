import { useDispatch } from 'react-redux';
import { ListWrapper, Button } from './ContactCard.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListWrapper>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListWrapper>
  );
};

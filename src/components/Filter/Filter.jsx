import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/filter/filerSlice';
import { getFilter } from 'redux/contacts/contactsSelectors';
import { FilterContainer, Title } from './Filter.styled';

export const Filter = () => {
  const { changeFilter } = filterSlice.actions;

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const setFilterHandler = f => dispatch(changeFilter(f.toLowerCase()));

  return (
    <FilterContainer>
      <Title>Find contact by name</Title>
      <input
        name="filter"
        type="text"
        onChange={e => {
          setFilterHandler(e.currentTarget.value);
        }}
        value={filter}
      />
    </FilterContainer>
  );
};

import { useDispatch, useSelector } from 'react-redux';
import { filterSlice } from 'redux/filerSlice';
import { getFilter } from 'redux/selectors';
import { Title, FilterContainer } from './Filter.styled';

const Filter = () => {
  const { changeFilter } = filterSlice.actions;

  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const setFilterHandler = f => dispatch(changeFilter(f.toLowerCase()));

  return (
    <FilterContainer>
      <Title>Find contact by name:</Title>
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

export default Filter;

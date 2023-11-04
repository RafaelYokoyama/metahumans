import React from 'react';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/styles';

type PaginationProps = {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};
const useStyles = makeStyles({
  pagination: {
    '& .MuiPaginationItem-root': {
      color: '#fff',
    },
  },
});

function PaginationComponent({ count, page, onChange }: PaginationProps) {
  const classes = useStyles();

  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      color="primary"
      classes={{ ul: classes.pagination }}
    />
  );
}

export default PaginationComponent;

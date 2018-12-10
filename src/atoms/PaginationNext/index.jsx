import React from 'react';
import CommonLink from '../CommonLink';


const PaginationNext = props => (
  <CommonLink href={props.href} currentPage={props.currentPage}>next</CommonLink>
);

export default PaginationNext;

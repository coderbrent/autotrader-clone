import React, { forwardRef } from 'react';
import Link from 'next/link';
import { PaginationRenderItemParams } from '@material-ui/lab';
import { ParsedUrlQuery } from 'querystring';

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export const MaterialUiLink = forwardRef<HTMLAnchorElement, MaterialUiLinkProps>(
  ({ item, query, ...props }, ref) => (
    <Link
      shallow
      href={{
        pathname: '/cars',
        query: { ...query, page: item.page },
      }}
    >
      <a {...props} ref={ref}></a>
    </Link>
  )
);
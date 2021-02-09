import React from 'react';
import Link from 'next/link';
import { PaginationRenderItemParams } from '@material-ui/lab';
import { ParsedUrlQuery } from 'querystring';
import { QueryBuilder } from '@material-ui/icons';

export interface MaterialUiLinkProps {
  item: PaginationRenderItemParams;
  query: ParsedUrlQuery;
}

export function MaterialUiLink({ item, query, ...props }: MaterialUiLinkProps) {
  return (
    <Link
      href={{
        pathname: "/cars",
        query: { ...query, page: item.page },
      }}
    >
      <a {...props}></a>
    </Link>
  );
}
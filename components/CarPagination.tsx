import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { getAsString } from "../utils/getAsString";
import { MaterialUiLink } from "./MaterialUiLink";
import { useRouter } from "next/router";

export function CarPagination({ totalPages }: { totalPages: number }) {
  const { query } = useRouter();
  return (
    <Pagination
      page={parseInt(getAsString(query.page) || "1")}
      count={totalPages}
      renderItem={(item) => (
        <PaginationItem
          component={MaterialUiLink}
          query={query}
          item={item}
          {...item}
        />
      )}
    />)
}
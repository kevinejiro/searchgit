import classes from "./index.module.css";

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}
export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className={classes.pagination}>
      <div className={classes.paginationWrapper}>
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={[classes.pageItem, classes.sides].join(" ")}
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={`${classes["pageItem"]} ${
            classes[`${page === 1 && "active"}`]
          }`}
        >
          {1}
        </button>
        {page > 3 && <div className={classes.separator}>...</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className={classes.pageItem}
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={classes.pageItem}
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[classes.pageItem, classes.active].join(" ")}
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={classes.pageItem}
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className={classes.pageItem}
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className={classes.separator}>...</div>}
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={`${classes["pageItem"]} ${
            classes[`${page === totalPages && "active"}`]
          }`}
        >
          {totalPages}
        </button>
        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={[classes.pageItem, classes.sides].join(" ")}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
export const Pagination = PaginationComponent;

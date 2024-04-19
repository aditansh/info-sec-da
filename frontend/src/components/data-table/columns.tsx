"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { type Movie } from "@/types";

export const columns: ColumnDef<Movie>[] = [
  {
    id: "select",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          title="Sr. No."
          className="text-left text-sm font-semibold text-foreground"
          column={column}
        />
      );
    },
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium text-muted-foreground">
        {row.index + 1}
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "Title",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Title"
          className="text-left text-sm font-semibold text-foreground"
        />
      );
    },
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.title.length > 35 ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p>{row.original.title.substring(0, 35)}...</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{row.original.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p> {row.original.title} </p>
        )}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.title.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.title;
      const valueB = rowB.original.title;
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
    enableHiding: false,
  },
  {
    accessorKey: "Year",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Year"
        className="text-left text-sm font-semibold text-foreground"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        <p> {row.original.year} </p>
      </div>
    ),
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.year;
      const valueB = rowB.original.year;
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
  },
  {
    accessorKey: "Director",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Director"
        className="text-center text-sm font-semibold text-foreground"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.director}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.director.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.director;
      const valueB = rowB.original.director;

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
  },
  {
    accessorKey: "Genre",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Genre"
        className="text-center text-sm font-semibold text-foreground"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.genre}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.genre.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.genre;
      const valueB = rowB.original.genre;

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
  },
];

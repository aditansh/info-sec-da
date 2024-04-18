"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  phone_number: string;
}

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          title="Sr. No."
          className="text-foreground text-center text-sm font-semibold"
          column={column}
        />
      );
    },
    cell: ({ row }) => (
      <div className="text-muted-foreground whitespace-nowrap text-sm font-medium">
        {row.index + 1}
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "UserName",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="UserName"
          className="text-foreground text-left text-sm font-semibold"
        />
      );
    },
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.username.length > 35 ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p>{row.original.username.substring(0, 35)}...</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{row.original.username}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p> {row.original.username} </p>
        )}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.username.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.username;
      const valueB = rowB.original.username;
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
    accessorKey: "Email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Email"
        className="text-foreground text-left text-sm font-semibold"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap text-sm font-medium">
        {row.original.email.length > 35 ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p>{row.original.email.substring(0, 35)}...</p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{row.original.email}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <p> {row.original.email} </p>
        )}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.email.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.email;
      const valueB = rowB.original.email;
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
    accessorKey: "Phone Number",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Phone Number"
        className="text-foreground text-center text-sm font-semibold"
      />
    ),
    cell: ({ row }) => (
      <div className="text-muted-foreground whitespace-nowrap text-sm font-medium">
        {row.original.phone_number}
      </div>
    ),
    filterFn: (row, id, filterValue) => {
      const file = row.original.phone_number.toLowerCase();
      return file.includes(filterValue as string);
    },
    sortingFn: (rowA, rowB) => {
      const valueA = rowA.original.phone_number;
      const valueB = rowB.original.phone_number;

      if (valueA < valueB) {
        return -1;
      } else if (valueA > valueB) {
        return 1;
      }
      return 0;
    },
  },
];

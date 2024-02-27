"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FormElementInstance } from "@/interfaces/form-elements";
import { Button } from "../ui/button";
import { DatePickerWithRange } from "../date-range-picker";

interface DataTableProps<TData> {
  contentStr: string;
  data: TData[];
}

function mapColumn<TData, TValue>(contentStr: string) {
  const content: FormElementInstance[] = JSON.parse(contentStr);
  const columns = [];

  for (const instance of content) {
    const obj = instance.extraAttributes;
    const column: ColumnDef<TData, TValue> = { accessorKey: "", header: "" };

    column["accessorKey"] = instance.id;
    column["header"] = obj?.label;
    columns.push(column);
  }

  const modColumns = [
    ...columns,
    { accessorKey: "createdAt", header: "Submition Date" },
  ];
  return modColumns;
}

export function DataTable<TData, TValue>({
  data,
  contentStr,
}: DataTableProps<TData>) {
  const columns: ColumnDef<TData, TValue>[] = mapColumn<TData, TValue>(
    contentStr
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full">
      <div className="rounded-md border w-full overflow-x-auto">
        {/* scrollbar scrollbar-w-1 scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-sm */}
        {/* <DatePickerWithRange /> */}
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex justify-end items-center gap-2 p-4">
          <Button variant={"outline"} onClick={table.previousPage}>
            Prev
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              if (table.getCanNextPage()) {
                table.nextPage();
              }
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

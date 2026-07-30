"use client";

import { Pagination, Table } from "@heroui/react";
import { useMemo, useState } from "react";
import { ViewTableData } from "../../../util/view-tabledata";

const columns = [
  { name: "Product" },
  { name: "Images" },
  { name: "Status" },
  { name: "Videos" },
  { name: "Date" },
  { name: "Progress" },
];

const ROWS_PER_PAGE = 6;

const statusColors = {
  Active: "bg-green-100 text-green-700",
  Draft: "bg-gray-100 text-gray-600",
  Archived: "bg-red-100 text-red-700",
};

const generationColors = {
  "Not Generated": "bg-gray-100 text-gray-600",
  "Wait until current video": "bg-yellow-100 text-yellow-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
};

function Badge({ label, colorMap }) {
  const classes = colorMap[label] || "bg-gray-100 text-gray-600";
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
}

export function ViewProductTable() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ViewTableData.length / ROWS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;
    return ViewTableData.slice(start, start + ROWS_PER_PAGE);
  }, [page]);

  const start = (page - 1) * ROWS_PER_PAGE + 1;
  const end = Math.min(page * ROWS_PER_PAGE, ViewTableData.length);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Products table" className="min-w-150">
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column isRowHeader={column.id === "product"}>
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={paginatedItems}>
            {(item) => (
              <Table.Row>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      width={40}
                      height={40}
                      className="rounded-md object-cover"
                    />
                    <span className="font-medium">{item.title}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>{item.images}</Table.Cell>
                <Table.Cell>
                  <Badge label={item.status} colorMap={statusColors} />
                </Table.Cell>
                <Table.Cell>{item.videos}</Table.Cell>

                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>
                  <Badge
                    label={item.generationStatus}
                    colorMap={generationColors}
                  />
                  {/* {item.action ? (
                    <button
                      className="text-sm font-medium text-blue-600 hover:underline"
                      onClick={() => console.log(item.action, item.title)}
                    >
                      {item.action}
                    </button>
                  ) : (
                    <span className="text-gray-300">Action</span>
                  )} */}
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
      <Table.Footer>
        <Pagination size="sm">
          <Pagination.Summary>
            {start} to {end} of {ViewTableData.length} results
          </Pagination.Summary>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                onPress={() => setPage((p) => Math.max(1, p - 1))}
              >
                <Pagination.PreviousIcon />
                Prev
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}
                onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </Table>
  );
}

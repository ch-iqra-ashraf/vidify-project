"use client";

import { Chip, Spinner, Table } from "@heroui/react";
import { useCallback, useRef, useState } from "react";
import { allTableData } from "../../../util/table-data";

const statusColorMap = {
  Active: "success",
  Draft: "default",
  Inactive: "danger",
};

const generationStatusColorMap = {
  Completed: "success",
  "In Progress": "primary",
  "Not Generated": "default",
};

const ITEMS_PER_PAGE = 6;

const columns = [
  { id: "title", name: "Product" },
  { id: "images", name: "Images" },
  { id: "status", name: "Status" },
  { id: "stock", name: "Stock" },
  { id: "generationStatus", name: "Generation Status" },
];

export function AsyncLoading() {
  const [items, setItems] = useState(() =>
    allTableData.slice(0, ITEMS_PER_PAGE)
  );
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingRef = useRef(false);
  const hasMore = items.length < allTableData.length;

  const loadMore = useCallback(() => {
    if (!hasMore || isLoadingRef.current) return;
    isLoadingRef.current = true;
    setIsLoading(true);
    setTimeout(() => {
      setItems((prev) =>
        allTableData.slice(0, prev.length + ITEMS_PER_PAGE)
      );
      setIsLoading(false);
      requestAnimationFrame(() => {
        isLoadingRef.current = false;
      });
    }, 1500);
  }, [hasMore]);

  return (
    <Table>
      <Table.ScrollContainer className="h-auto overflow-y-auto">
        <Table.Content
          aria-label="Async loading table"
          className="w-full"
        >
          <Table.Header className="bg-surface-secondary">
            {columns.map((col) => (
              <Table.Column
                key={col.id}
                id={col.id}
                isRowHeader={col.id === "title"}
              >
                {col.name}
              </Table.Column>
            ))}
          </Table.Header>
          <Table.Body>
            <Table.Collection items={items}>
              {(product) => (
                <Table.Row>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image.src}
                        alt={product.image.alt}
                        className="h-10 w-10 rounded-md object-cover"
                      />
                      <span>{product.title}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{product.images} Images</Table.Cell>
                  <Table.Cell>
                    <Chip
                      color={statusColorMap[product.status]}
                      size="sm"
                      variant="soft"
                    >
                      {product.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className={
                        product.stock.startsWith("0")
                          ? "text-danger"
                          : undefined
                      }
                    >
                      {product.stock}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Chip
                      color={
                        generationStatusColorMap[product.generationStatus]
                      }
                      size="sm"
                      variant="soft"
                    >
                      {product.generationStatus}
                    </Chip>
                    {product.action && (
                      <button className="ml-2 text-sm text-primary underline">
                        {product.action}
                      </button>
                    )}
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Collection>
            {!!hasMore && (
              <Table.LoadMore
                isLoading={isLoading}
                scrollOffset={0}
                onLoadMore={loadMore}
              >
                <Table.LoadMoreContent>
                  <Spinner size="md" />
                </Table.LoadMoreContent>
              </Table.LoadMore>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

import { Tabs } from "@heroui/react";
import { ProductTable } from "./GenerateData";
import { ViewProductTable } from "./ViewData";


export function Basic() {
  return (
    <div className="flex flex-col justify-center self-center p-4 w-287.5 h-auto min-h-27.5 mt-2 opacity-100 border border-[#E0E0E0] rounded-lg bg-white">
      <Tabs className="w-full ">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id="overview" className="w-50">
              Generate AI Videos
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="analytics" className="w-50">
              View Al Videos
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>
        <Tabs.Panel className="pt-4" id="overview">
          <ProductTable />
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="analytics">
          <ViewProductTable />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

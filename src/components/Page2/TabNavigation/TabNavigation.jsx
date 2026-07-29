import {Tabs} from "@heroui/react";
import { AsyncLoading } from "./Table";

export function Basic() {
  return (
     <div className="flex flex-col justify-center self-center p-4 w-[952px] h-auto min-h-[110px] mt-4 opacity-100 border border-[#E0E0E0] rounded-lg bg-white">
    <Tabs className="w-full max-w-md">
      <Tabs.ListContainer>
        <Tabs.List aria-label="Options">
          <Tabs.Tab id="overview">
            Generate AI Videos
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab id="analytics">
            View Al Videos
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4" id="overview">
        <AsyncLoading />
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="analytics">
        <AsyncLoading />
      </Tabs.Panel>
    </Tabs>
    </div>
  );
}
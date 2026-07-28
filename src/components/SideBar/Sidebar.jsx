import React from "react";
import MenuItem from "./MenuItem";
import SideBarHeading from "./SideBarHeading";
import {
  AnalyticsIconSVG,
  ArrowIconSVG,
  ContentIconSVG,
  CustomersIconSVG,
  DiscountsIconSVG,
  FinancesIconSVG,
  HomeIconSVG,
  MarketingIconSVG,
  OnlineStoreIconSVG,
  OrderIconSVG,
  PointOfSaleIconSVG,
  ProductIconSVG,
  ShopIconSVG,
} from "../Icons/AlIcons";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-60 bg-[#EBEBEB] border-r border-gray-200 py-4">
      {/* Top section: Home, Orders, Products... */}
      <nav className="flex flex-col gap-1 px-3">
        <MenuItem name={"Home"} Icon={HomeIconSVG} />
        <MenuItem name={"Orders"} Icon={OrderIconSVG} />
        <MenuItem name={"Product"} Icon={ProductIconSVG} />
        <MenuItem name={"Customer"} Icon={CustomersIconSVG} />
        <MenuItem name={"Content"} Icon={ContentIconSVG} />
        <MenuItem name={"Finances"} Icon={FinancesIconSVG} />
        <MenuItem name={"Analytics"} Icon={AnalyticsIconSVG} />
        <MenuItem name={"Marketing"} Icon={MarketingIconSVG} />
        <MenuItem name={"Discounts"} Icon={DiscountsIconSVG} />
      </nav>

      <hr className="my-4 border-gray-200" />

      {/* Sales channels group */}
      <div className="flex flex-col gap-1 px-3">
        <SideBarHeading name={"Sales Channel"} Icon={ArrowIconSVG} />

        <MenuItem name={"Online Store"} Icon={OnlineStoreIconSVG} />
        <MenuItem name={"Point of Sale"} Icon={PointOfSaleIconSVG} />
        <MenuItem name={"Shop"} Icon={ShopIconSVG} />
      </div>

      {/* Apps group */}
      <div className="flex flex-col gap-1 px-3 mt-4">
        <SideBarHeading name={"Apps"} Icon={ArrowIconSVG} />

        <MenuItem name={"Vidify"} />
        <MenuItem name={"Generate Video"} />
        <MenuItem name={"Subscribe"} />
      </div>
    </div>
  );
};

export default Sidebar;

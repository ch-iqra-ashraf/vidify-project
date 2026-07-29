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
    <div className="flex flex-col sticky top-8 h-screen w-60 bg-[#EBEBEB] border-r border-gray-200 py-4">
      {/* Top section: Home, Orders, Products... */}
      <nav className="flex flex-col gap-1 px-3">
        <MenuItem name={"Home"} Icon={HomeIconSVG} to="/" />
        <MenuItem name={"Orders"} Icon={OrderIconSVG} to="/orders" />
        <MenuItem name={"Product"} Icon={ProductIconSVG} to="/products" />
        <MenuItem name={"Customer"} Icon={CustomersIconSVG} to="/customers" />
        <MenuItem name={"Content"} Icon={ContentIconSVG} to="/content" />
        <MenuItem name={"Finances"} Icon={FinancesIconSVG} to="/finances" />
        <MenuItem name={"Analytics"} Icon={AnalyticsIconSVG} to="/analytics" />
        <MenuItem name={"Marketing"} Icon={MarketingIconSVG} to="/marketing" />
        <MenuItem name={"Discounts"} Icon={DiscountsIconSVG} to="/discounts" />
      </nav>

      <hr className="my-4 border-gray-200" />

      {/* Sales channels group */}
      <div className="flex flex-col gap-1 px-3">
        <SideBarHeading name={"Sales Channel"} Icon={ArrowIconSVG} />

        <MenuItem name={"Online Store"} Icon={OnlineStoreIconSVG} to="/online-store" />
        <MenuItem name={"Point of Sale"} Icon={PointOfSaleIconSVG} to="/point-of-sale" />
        <MenuItem name={"Shop"} Icon={ShopIconSVG} to="/shop" />
      </div>

      {/* Apps group */}
      <div className="flex flex-col gap-1 px-3 mt-4">
        <SideBarHeading name={"Apps"} Icon={ArrowIconSVG} />

        <MenuItem name={"Vidify"} to="/apps/vidify" />

        <div className="flex flex-col gap-1 pl-4">
          <MenuItem
            name={"Generate Video"}
            to="/apps/vidify/generate-video"
            isSubItem
            showArrowWhenActive
          />
          <MenuItem
            name={"Subscription Plan"}
            to="/apps/vidify/subscription-plan"
            isSubItem
            showArrowWhenActive 
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

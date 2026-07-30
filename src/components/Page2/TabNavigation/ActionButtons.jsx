import { useState } from "react";
import { Button } from "@heroui/react";
import {
  DisabledEyeIconSVG,
  GenerateVideoIconSVG,
  EnabledEyeIconSVG,
  DisabledRegenerateIconSVG,
  EnabledRegenerateIconSVG,
} from "../../Icons/AlIcons";
import ViewModal from "../../ViewModal";

export const ActionIcons = ({ item, onGenerate, onRegenerate }) => {
  const [isOpen, setIsOpen] = useState(false);

  switch (item.generationStatus) {
    case "Not Generated":
      return (
        <>
          <Button isIconOnly variant="tertiary" disabled>
            <DisabledEyeIconSVG />
          </Button>
          <Button
            isIconOnly
            variant="tertiary"
            onClick={() => onGenerate(item)}
          >
            <GenerateVideoIconSVG />
          </Button>
        </>
      );

    case "In Progress":
      return (
        <>
          <Button isIconOnly variant="tertiary" disabled>
            <DisabledEyeIconSVG />
          </Button>
          <Button isIconOnly variant="tertiary" disabled>
            <DisabledRegenerateIconSVG />
          </Button>
        </>
      );

    case "Completed":
      return (
        <>
          <ViewModal isOpen={isOpen} setIsOpen={setIsOpen} item={item} />
          <Button
            isIconOnly
            variant="tertiary"
            onClick={() => setIsOpen(true)}
          >
            <EnabledEyeIconSVG />
          </Button>
          <Button
            isIconOnly
            variant="tertiary"
            onClick={() => onRegenerate(item)}
          >
            <EnabledRegenerateIconSVG />
          </Button>
        </>
      );

    default:
      return null;
  }
};
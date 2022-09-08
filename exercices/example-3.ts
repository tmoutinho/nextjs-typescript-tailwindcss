type Icons = "xs" | "md" | "lg";

type OmitedIcons = Omit<string, Icons>;

interface IconProps {
  iconSize: OmitedIcons;
}

export const Icon = (props: IconProps) => {
  return null;
};

export {};

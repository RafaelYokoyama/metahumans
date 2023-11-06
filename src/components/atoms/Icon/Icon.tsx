import * as lucideIcons from "lucide-react"
import { ComponentType } from "react"

export type IconName = keyof typeof lucideIcons;

export type IconProps = {
  color?: string
  size?: number
  className?: string
  style?: string
}

const Icon = ({ name, color, size = 16, className, style }: { name: IconName } & IconProps) => {
  const LucideIcon = lucideIcons[name] as ComponentType<IconProps>;

  return <LucideIcon color={color} size={size} className={className} style={style} />;
};


export default Icon

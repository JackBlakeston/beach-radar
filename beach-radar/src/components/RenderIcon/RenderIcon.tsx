import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../../../style/theme';
import { IconName } from "../../constants";

interface IRenderIconProps {
  iconName: IconName;
  iconColor?: string; // TODO should we replace colors with enums?
  iconSize?: number;
};

const RenderIcon = ({ iconName, iconColor = theme.COLOR_BLACK, iconSize = theme.ICON_SIZE_MEDIUM }: IRenderIconProps) => {

  let icon: JSX.Element = <></>;

  switch (iconName) {
    case IconName.RURAL:
      icon = <Foundation name={iconName} size={iconSize} color={iconColor} />
      break;
      case IconName.URBAN:
        icon = <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
      break;
      case IconName.SIZE:
        icon = <Ionicons name={iconName} size={iconSize} color={iconColor} />
        break;
      case IconName.TERRAIN:
        icon = <MaterialIcons name={iconName} size={iconSize} color={iconColor} />
        break;

    default:
      break;
  }

  return icon;
};

export default RenderIcon;
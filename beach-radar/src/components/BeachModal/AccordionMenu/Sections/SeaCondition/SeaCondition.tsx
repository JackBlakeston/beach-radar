import CustomText from "../../../../../../style/CustomText";
import { ISeaCondition } from "../../../../../interfaces";
import styles from './SeaCondition.styles';

interface IseaConditionProps {
  seaCondition?: ISeaCondition;
};

const SeaCondition = ({ seaCondition }: IseaConditionProps) => {
  return (
    seaCondition ?
      <CustomText>Sea condition</CustomText>
      :
      <CustomText>Failed to fetch sea condition</CustomText>
  );
};

export default SeaCondition;
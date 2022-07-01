import { IconName } from "../constants";
import { todoType } from "../interfaces";

const getIconName = (enumToSearch: todoType, keyToFind: string) => {
  const keys = Object.keys(enumToSearch);
  const foundKey = keys.find((key) => enumToSearch[key] === keyToFind);
  return IconName[foundKey as keyof typeof IconName]
};

export default getIconName;
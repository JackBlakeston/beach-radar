import { useState } from 'react';
import { View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import CustomText from '../../../../style/CustomText';
import { BeachViewCategory } from '../../../constants';
import { IAccordionSection, IBeach, todoType } from "../../../interfaces";
import MenuHeader from './MenuHeader/MenuHeader';
import styles from './AccordionMenu.styles';
import theme from '../../../../style/theme';

interface IAccordionMenuProps {
  beach: IBeach;
}

const AccordionMenu = ({ beach }: IAccordionMenuProps) => {

  const [activeSections, setActiveSections] = useState<number[]>([]);

  const updateSections = (newActiveSections: number[]) => {
    setActiveSections(newActiveSections);
  };

  const renderHeader = (section: IAccordionSection, index: number, isActive: boolean) => {
    return <MenuHeader title={section.title} isActive={isActive} />
  };

  const renderContent = (section: IAccordionSection) => {
    return section.content;
  };

  const MODAL_SECTIONS: IAccordionSection[] = [
    {
      title: BeachViewCategory.WEATHER,
      content: <View><CustomText>First content</CustomText></View>
    },
    {
      title: BeachViewCategory.SEA_CONDITION,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.AMENITIES,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.ACTIVITIES,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.FEATURES,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.ACCESSIBILITY,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.WILDLIFE,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.USER_RATINGS,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.USER_REVIEWS,
      content: <View><CustomText>Second content</CustomText></View>
    },
    {
      title: BeachViewCategory.LIVE_UPDATEDS,
      content: <View><CustomText>Second content</CustomText></View>
    },
  ];

  return (
    <Accordion
      containerStyle={styles.mainContainer}
      sectionContainerStyle={styles.sectionContainer}
      activeSections={activeSections}
      sections={MODAL_SECTIONS}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
      underlayColor={theme.COLOR_RIPPLE_LIGHT}
    />
  );
};

export default AccordionMenu;
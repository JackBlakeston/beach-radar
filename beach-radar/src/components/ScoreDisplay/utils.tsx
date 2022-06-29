import { FontAwesome } from '@expo/vector-icons';
import theme from '../../../style/theme';

import { StarTypes } from "../../constants";
import { TStar } from "../../interfaces";

export const displayFullStarRating = (score: number) => {
  let undisplayedStars = score;
  let stars: StarTypes[] = [];

  while (undisplayedStars > 0) {
    if (undisplayedStars > 0.75) {
      stars.push(StarTypes.FULL);
    } else if (undisplayedStars > 0.25 && undisplayedStars <= 0.75) {
      stars.push(StarTypes.HALF);
    } else if (undisplayedStars <= 0.25) {
      stars.push(StarTypes.EMPTY);
    }
    undisplayedStars--;
  }

  while (stars.length < 5) {
    stars.push(StarTypes.EMPTY);
  }

  const starIcons = stars.map((star, index) => {
    if (star === StarTypes.FULL) {
      return <FontAwesome name='star' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} key={index}/>;
    } else if (star === StarTypes.HALF) {
      return <FontAwesome name='star-half-o' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} key={index}/>;
    } else if (star=== StarTypes.EMPTY) {
      return <FontAwesome name='star-o' size={theme.ICON_SIZE_SMALL} color={theme.COLOR_PRIMARY} key={index}/>;
    }
  });

  return (
    starIcons
  );
};
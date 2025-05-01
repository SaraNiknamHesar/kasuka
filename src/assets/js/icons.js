// src/icons.js
import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandsIcons from '@fortawesome/free-brands-svg-icons';

// Helper to extract icon definitions
const extractIcons = (icons) =>
    Object.values(icons).filter((icon) => icon && icon.iconName);

// Add all free icons to the library
library.add(
    ...extractIcons(solidIcons),
    ...extractIcons(regularIcons),
    ...extractIcons(brandsIcons)
);

import {
  FaHome,
  FaOpencart,
  FaProductHunt,
  FaSlideshare,
  FaCommentDollar,
  FaComment,
  FaQuestionCircle,
  FaMoneyCheck,
  FaFoursquare,
  FaClipboardList,
  FaSlidersH,
  FaSignOutAlt
} from 'react-icons/fa';
import { pathNames } from '../config/pathNames';

export const getMainMenu = () => [
  {
    path: pathNames.homepage,
    label: 'Home',
    icon: FaHome,
  },
  {
    path: pathNames.orders,
    label: 'Orders',
    icon: FaOpencart,
  },
  {
    path: pathNames.products,
    label: 'Products',
    icon: FaProductHunt,
  },
  {
    path: pathNames.categories,
    label: 'Categories',
    icon: FaProductHunt,
  },

  {
    path: pathNames.analytics,
    label: 'Analytics',
    icon: FaSlideshare,
  }, {
    path: pathNames.payments,
    label: 'Payments',
    icon: FaCommentDollar,
  }, {
    path: pathNames.announcements,
    label: 'Announcements',
    icon: FaComment,
  }, {
    path: pathNames.support,
    label: 'Support',
    icon: FaQuestionCircle,
  }, {
    path: pathNames.priceRecommendations,
    label: 'Price Recommendations',
    icon: FaMoneyCheck,
  }, {
    path: pathNames.qualityDashboard,
    label: 'QualityDashboard',
    icon: FaFoursquare,
  }, {
    path: pathNames.notices,
    label: 'Notices',
    icon: FaClipboardList,
  }, {
    path: pathNames.settings,
    label: 'Settings',
    icon: FaSlidersH,
  },
];

export const userMenu = [];

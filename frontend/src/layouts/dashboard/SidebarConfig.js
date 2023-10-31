// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard
      },
      {
        title: 'hospital',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.banking,
        children: [
          { title: 'public hospital', path: PATH_DASHBOARD.user.profile },
          { title: 'private hospital', path: PATH_DASHBOARD.user.cards }
        ]
      },
      {
        title: 'department',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.banking,
        children: [
          { title: 'surgical department', path: PATH_DASHBOARD.user.profile },
          { title: 'emergency department', path: PATH_DASHBOARD.user.cards },
          { title: 'pediatrics', path: PATH_DASHBOARD.user.list },
          { title: 'radiology', path: PATH_DASHBOARD.user.newUser },
          { title: 'cardiology', path: PATH_DASHBOARD.user.editById },
          { title: 'neurology', path: PATH_DASHBOARD.user.editById },
          { title: 'orthopedics', path: PATH_DASHBOARD.user.account }
        ]
      },
      {
        title: 'medical Staff',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'doctor', path: PATH_DASHBOARD.user.profile },
          { title: 'general practitioner', path: PATH_DASHBOARD.user.cards },
          { title: 'pediatrician', path: PATH_DASHBOARD.user.list }
        ]
      },
      {
        title: 'patient',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'inpatient', path: PATH_DASHBOARD.user.profile },
          { title: 'outpatient', path: PATH_DASHBOARD.user.cards }
        ]
      },
      {
        title: 'pharmacy',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.cart,
        children: [
          { title: 'medication', path: PATH_DASHBOARD.user.profile },
          { title: 'in-hospital pharmacy', path: PATH_DASHBOARD.user.cards },
          { title: 'outpatient pharmacy', path: PATH_DASHBOARD.user.list }
        ]
      },
      {
        title: 'appointments',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.calendar,
        children: [
          { title: 'regular checkup', path: PATH_DASHBOARD.user.profile },
          { title: 'follow up', path: PATH_DASHBOARD.user.cards },
          { title: 'emergency visit', path: PATH_DASHBOARD.user.list }
        ]
      },
      {
        title: 'medical Equipment',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.ecommerce,
        children: [
          { title: 'imaging equipment', path: PATH_DASHBOARD.user.profile },
          { title: 'surgical equipment', path: PATH_DASHBOARD.user.cards }
        ]
      },
      {
        title: 'medical records',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.kanban,
        children: [
          { title: 'physical record', path: PATH_DASHBOARD.user.profile },
          { title: 'digital record', path: PATH_DASHBOARD.user.cards }
        ]
      }
    ]
  }

  // APP
  // ----------------------------------------------------------------------
];

export default sidebarConfig;

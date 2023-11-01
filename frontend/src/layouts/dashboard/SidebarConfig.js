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
        path: PATH_DASHBOARD.hospital,
        icon: ICONS.banking,
        children: [
          { title: 'public hospital', path: PATH_DASHBOARD.hospital },
          { title: 'private hospital', path: PATH_DASHBOARD.hospital }
        ]
      },
      {
        title: 'department',
        path: PATH_DASHBOARD.department,
        icon: ICONS.banking,
        children: [
          { title: 'surgical department', path: PATH_DASHBOARD.department },
          { title: 'emergency department', path: PATH_DASHBOARD.department },
          { title: 'pediatrics', path: PATH_DASHBOARD.department },
          { title: 'radiology', path: PATH_DASHBOARD.department },
          { title: 'cardiology', path: PATH_DASHBOARD.department },
          { title: 'neurology', path: PATH_DASHBOARD.department },
          { title: 'orthopedics', path: PATH_DASHBOARD.department }
        ]
      },
      {
        title: 'medical Staff',
        path: PATH_DASHBOARD.medicalStaff.root,
        icon: ICONS.user,
        children: [
          { title: 'doctor', path: PATH_DASHBOARD.medicalStaff.doctor },
          { title: 'nurse', path: PATH_DASHBOARD.medicalStaff.nurse },
          { title: 'technician', path: PATH_DASHBOARD.medicalStaff.technician }
        ]
      },
      {
        title: 'patient',
        path: PATH_DASHBOARD.patient,
        icon: ICONS.user
      },
      {
        title: 'pharmacy',
        path: PATH_DASHBOARD.pharmacy,
        icon: ICONS.cart,
        children: [
          { title: 'medication', path: PATH_DASHBOARD.pharmacy },
          { title: 'in-hospital pharmacy', path: PATH_DASHBOARD.pharmacy },
          { title: 'outpatient pharmacy', path: PATH_DASHBOARD.pharmacy }
        ]
      },
      {
        title: 'appointments',
        path: PATH_DASHBOARD.appointments,
        icon: ICONS.calendar,
        children: [
          { title: 'regular checkup', path: PATH_DASHBOARD.appointments },
          { title: 'follow up', path: PATH_DASHBOARD.appointments },
          { title: 'emergency visit', path: PATH_DASHBOARD.appointments }
        ]
      },
      {
        title: 'medical Equipment',
        path: PATH_DASHBOARD.medicalEquipment,
        icon: ICONS.ecommerce,
        children: [
          { title: 'imaging equipment', path: PATH_DASHBOARD.medicalEquipment },
          { title: 'surgical equipment', path: PATH_DASHBOARD.medicalEquipment }
        ]
      },
      {
        title: 'medical records',
        path: PATH_DASHBOARD.medicalRecords,
        icon: ICONS.kanban,
        children: [
          { title: 'physical record', path: PATH_DASHBOARD.medicalRecords },
          { title: 'digital record', path: PATH_DASHBOARD.medicalRecords }
        ]
      }
    ]
  }

  // APP
  // ----------------------------------------------------------------------
];

export default sidebarConfig;

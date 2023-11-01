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
        path: PATH_DASHBOARD.department.root,
        icon: ICONS.banking,
        children: [
          { title: 'surgical department', path: PATH_DASHBOARD.department.surgical },
          { title: 'emergency department', path: PATH_DASHBOARD.department.emergency },
          { title: 'pediatrics', path: PATH_DASHBOARD.department.pediatrics },
          { title: 'radiology', path: PATH_DASHBOARD.department.radiology },
          { title: 'cardiology', path: PATH_DASHBOARD.department.cardiology },
          { title: 'neurology', path: PATH_DASHBOARD.department.neurology },
          { title: 'orthopedics', path: PATH_DASHBOARD.department.orthopedics }
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
        path: PATH_DASHBOARD.pharmacy.root,
        icon: ICONS.cart,
        children: [
          { title: 'All', path: PATH_DASHBOARD.pharmacy.root },
          { title: 'in-hospital pharmacy', path: PATH_DASHBOARD.pharmacy.inHospital },
          { title: 'outpatient pharmacy', path: PATH_DASHBOARD.pharmacy.outpatient }
        ]
      },
      {
        title: 'appointments',
        path: PATH_DASHBOARD.appointments.root,
        icon: ICONS.calendar,
        children: [
          { title: 'regular checkup', path: PATH_DASHBOARD.appointments.regularCheckup },
          { title: 'follow up', path: PATH_DASHBOARD.appointments.followUp },
          { title: 'emergency visit', path: PATH_DASHBOARD.appointments.emergencyVisit }
        ]
      },
      {
        title: 'medical Equipment',
        path: PATH_DASHBOARD.medicalEquipment.root,
        icon: ICONS.ecommerce,
        children: [
          { title: 'All', path: PATH_DASHBOARD.medicalEquipment.root },
          { title: 'imaging equipment', path: PATH_DASHBOARD.medicalEquipment.imagingEquip },
          { title: 'surgical equipment', path: PATH_DASHBOARD.medicalEquipment.surgicalEquip }
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

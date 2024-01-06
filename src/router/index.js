import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import Home from "../views/Home/Home.vue";
import Info from '../views/info/Info.vue';
import Doctor from '../views/info/doctor/Doctor.vue';
import Combo from '../views/info/combo/Combo.vue';
import ServiceExam from '../views/info/serviceExam/ServiceExam.vue';
import Revenue from '../views/revenue/Revenue.vue';
import Appointment from '../views/appointment/Appointment.vue';
import Customer from '../views/customer/Customer.vue';
import Staff from '../views/staff/Staff.vue';
import Transaction from '../views/transaction/Transaction.vue';
import Rating from '../views/rating/Rating.vue';
import AdminInfo  from '../views/settingAdmin/adminInfo/AdminInfo.vue';
import ChangePassword from '../views/settingAdmin/changePassword/ChangePassword.vue';
import SettingAdmin from '@/views/settingAdmin/SettingAdmin.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quan-ly-lich-kham',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/quan-ly-thong-tin',
      name: 'Info',
      component: Info,
      children: [
        {
          path: 'quan-ly-bac-si',
          name: 'Doctor',
          component: Doctor,
        },
        {
          path: 'quan-ly-dich-vu',
          name: 'ServiceExam',
          component: ServiceExam,
        },
        {
          path: 'quan-ly-uu-dai',
          name: 'Combo',
          component: Combo,
        }
      ]
    },
    {
      path: '/quan-ly-customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/quan-ly-staff',
      name: 'Staff',
      component: Staff
    },
    {
      path: '/quan-ly-giao-dich',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/quan-ly-du-lieu-danh-gia',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/quan-ly-doanh-thu',
      name: 'Revenue',
      component: Revenue
    },
    {
      path: '/cai-dat',
      name: 'SettingAdmin',
      component: SettingAdmin,
      children: [
        {
          path: 'thong-tin-ca-nhan',
          name: 'AdminInfo',
          component: AdminInfo,
        },
        {
          path: 'doi-mat-khau',
          name: 'ChangePassword',
          component: ChangePassword,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

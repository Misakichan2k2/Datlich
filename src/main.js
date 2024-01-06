import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App);

import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import ScrollPanel from 'primevue/scrollpanel';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
// from here 18/12/2023
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Image from 'primevue/image';
import Dropdown from 'primevue/dropdown';
import Rating from 'primevue/rating';
import InlineMessage from 'primevue/inlinemessage';
import Fieldset from 'primevue/fieldset';
import Chart from 'primevue/chart';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

app.component("Button", Button);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('ScrollPanel',ScrollPanel);
app.component('Carousel',Carousel);
app.component('Tag',Tag);
app.component('RadioButton', RadioButton);
app.component('Calendar', Calendar);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Textarea', Textarea);
app.component('FileUpload', FileUpload);
app.component('Toast', Toast);
app.component('Image', Image);
app.component('Dropdown', Dropdown);
app.component('Rating', Rating);
app.component('InlineMessage', InlineMessage);
app.component('Fieldset', Fieldset);
app.component('Chart', Chart);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);

app.directive('tooltip', Tooltip);

app.use(ToastService);
app.use(createPinia());
app.use(router);
app.use(PrimeVue);

app.mount('#app');

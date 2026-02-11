const programs = [
  'Community Behavioral Health',
  'Youth Development',
  'Community Economic Development',
  'Cultural Arts',
  'Public Health',
  'Public Safety'
];

const events = [
  {
    id: 'gala-2025',
    date: '2025-09-13',
    name: 'Mattie’s Masquerade Gala',
    location: 'The View at Briarcliff, Kansas City',
    time: '6:00 PM',
    description: 'A fundraising gala supporting Mattie Rhodes Center programs.',
    needsAttendanceRegistration: true,
    needsVolunteerRegistration: true
  },
  {
    id: 'dotd-2025-open',
    date: '2025-10-03',
    name: '2025 Día de los Muertos Opening Celebration',
    location: 'MRC Cultural Center, 1701 Jarboe, KCMO 64108',
    time: '6:00 PM',
    description: 'Community opening celebration with cultural arts and family activities.',
    needsAttendanceRegistration: true,
    needsVolunteerRegistration: true
  },
  {
    id: 'senior-focus-2025',
    date: '2025-10-10',
    name: 'Senior Health Focus Group',
    location: 'Mattie Rhodes Center - Community Room',
    time: '11:00 AM',
    description: 'Health and wellness discussion to shape future senior services.',
    needsAttendanceRegistration: true,
    needsVolunteerRegistration: false
  },
  {
    id: 'youth-night-2025',
    date: '2025-11-12',
    name: 'Youth Development Family Night',
    location: 'Mattie Rhodes Youth Space',
    time: '5:30 PM',
    description: 'Youth enrichment night with educational activities for families.',
    needsAttendanceRegistration: true,
    needsVolunteerRegistration: true
  },
  {
    id: 'winter-resource-2025',
    date: '2025-12-07',
    name: 'Winter Resource Fair',
    location: 'Main Campus Community Hall',
    time: '10:00 AM',
    description: 'Community resource navigation and service provider connections.',
    needsAttendanceRegistration: false,
    needsVolunteerRegistration: true
  }
];

const translations = {
  en: {
    pageLanguage: 'en',
    authTitle: 'Welcome to the Mattie Rhodes Community Hub',
    authSubtitle: 'Please sign in with your registered email and password, or create a new account to continue.',
    signIn: 'Sign In',
    createAccount: 'Create Account',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    signOut: 'Sign Out',
    appTitle: 'Community Hub',
    appSubtitle: 'Programs and support that strengthen social cohesion, economic stability, and access to education, healthcare, and affordable housing.',
    aboutTitle: 'How Mattie Rhodes Center Helps',
    aboutCopy: 'We envision a vibrant, connected community in which individuals and families are healthy, safe, and equipped to thrive.',
    contactNote: 'Administrative Offices: 148 N. Topping Ave., Kansas City, MO 64123 · 816-471-2536',
    eventsTitle: 'Interactive Events Calendar',
    eventsSubtitle: 'Browse months ahead, click a date, then click an event to register or volunteer when available.',
    selectDate: 'Select a date',
    registerToAttend: 'Register to Attend',
    notes: 'Notes',
    notesPlaceholder: 'Any accessibility or support needs?',
    attendSubmit: 'Submit Attendance Registration',
    volunteerForEvent: 'Volunteer for this Event',
    volunteerInterest: 'Volunteer Interest',
    volunteerInterestPlaceholder: 'Set-up, check-in, youth activities, etc.',
    volunteerEventSubmit: 'Submit Volunteer Registration',
    noRegistrationNeeded: 'No registration needed for this event.',
    noEventsDate: 'No events currently listed for this date.',
    generalVolunteerTitle: 'General Volunteer Sign-Up',
    generalVolunteerSubtitle: 'Get involved in youth, arts, health, and community support programs.',
    programInterest: 'Program Interest',
    selectOne: 'Select one',
    availability: 'Availability',
    availabilityPlaceholder: 'Weekdays, evenings, Saturdays, etc.',
    submitVolunteerRequest: 'Submit Volunteer Request',
    portalTitle: 'Client & Provider Portal (Demo)',
    portalSubtitle: 'Message service providers and track your appointments for behavioral health, public health, and other support services.',
    sendMessage: 'Send Message',
    providerTeamName: 'Provider or Team Name',
    message: 'Message',
    sendMessageBtn: 'Send Message',
    manageAppointments: 'Manage Appointments',
    serviceArea: 'Service Area',
    selectServiceArea: 'Select a service area',
    appointmentDate: 'Appointment Date',
    appointmentTime: 'Appointment Time',
    addAppointment: 'Add Appointment',
    authNotFound: 'Account not found. Please create an account before accessing the app.',
    authEmailExists: 'That email is already registered. Please sign in.',
    welcomeAs: 'Signed in as',
    attendanceSubmitted: 'Attendance registration submitted successfully.',
    volunteerSubmitted: 'Volunteer registration submitted successfully.',
    volunteerThanks: 'Thank you for supporting Mattie Rhodes Center. We will contact you soon.',
    messageSent: 'Message sent.',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    locale: 'en-US'
  },
  es: {
    pageLanguage: 'es',
    authTitle: 'Bienvenido al Centro Comunitario de Mattie Rhodes',
    authSubtitle: 'Inicie sesión con su correo y contraseña registrados, o cree una cuenta para continuar.',
    signIn: 'Iniciar sesión',
    createAccount: 'Crear cuenta',
    email: 'Correo electrónico',
    password: 'Contraseña',
    fullName: 'Nombre completo',
    signOut: 'Cerrar sesión',
    appTitle: 'Centro Comunitario',
    appSubtitle: 'Programas y apoyo que fortalecen la cohesión social, la estabilidad económica y el acceso a educación, salud y vivienda asequible.',
    aboutTitle: 'Cómo ayuda el Centro Mattie Rhodes',
    aboutCopy: 'Visualizamos una comunidad vibrante y conectada donde las personas y familias estén sanas, seguras y listas para prosperar.',
    contactNote: 'Oficinas Administrativas: 148 N. Topping Ave., Kansas City, MO 64123 · 816-471-2536',
    eventsTitle: 'Calendario interactivo de eventos',
    eventsSubtitle: 'Navegue meses futuros, haga clic en una fecha y luego en un evento para registrarse o ser voluntario cuando esté disponible.',
    selectDate: 'Seleccione una fecha',
    registerToAttend: 'Registrarse para asistir',
    notes: 'Notas',
    notesPlaceholder: '¿Necesidades de accesibilidad o apoyo?',
    attendSubmit: 'Enviar registro de asistencia',
    volunteerForEvent: 'Ser voluntario para este evento',
    volunteerInterest: 'Interés de voluntariado',
    volunteerInterestPlaceholder: 'Montaje, registro, actividades juveniles, etc.',
    volunteerEventSubmit: 'Enviar registro de voluntariado',
    noRegistrationNeeded: 'Este evento no requiere registro.',
    noEventsDate: 'No hay eventos programados para esta fecha.',
    generalVolunteerTitle: 'Registro general de voluntarios',
    generalVolunteerSubtitle: 'Participe en programas juveniles, artes, salud y apoyo comunitario.',
    programInterest: 'Interés de programa',
    selectOne: 'Seleccione una opción',
    availability: 'Disponibilidad',
    availabilityPlaceholder: 'Días entre semana, noches, sábados, etc.',
    submitVolunteerRequest: 'Enviar solicitud de voluntariado',
    portalTitle: 'Portal de clientes y proveedores (Demo)',
    portalSubtitle: 'Envíe mensajes a proveedores y administre citas para salud conductual, salud pública y otros servicios.',
    sendMessage: 'Enviar mensaje',
    providerTeamName: 'Proveedor o nombre del equipo',
    message: 'Mensaje',
    sendMessageBtn: 'Enviar mensaje',
    manageAppointments: 'Administrar citas',
    serviceArea: 'Área de servicio',
    selectServiceArea: 'Seleccione un área de servicio',
    appointmentDate: 'Fecha de cita',
    appointmentTime: 'Hora de cita',
    addAppointment: 'Agregar cita',
    authNotFound: 'No encontramos la cuenta. Cree una cuenta antes de acceder a la aplicación.',
    authEmailExists: 'Ese correo ya está registrado. Inicie sesión.',
    welcomeAs: 'Sesión iniciada como',
    attendanceSubmitted: 'Registro de asistencia enviado correctamente.',
    volunteerSubmitted: 'Registro de voluntariado enviado correctamente.',
    volunteerThanks: 'Gracias por apoyar al Centro Mattie Rhodes. Nos comunicaremos pronto.',
    messageSent: 'Mensaje enviado.',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    locale: 'es-US'
  }
};

const storageKeys = {
  users: 'mattie-rhodes-users',
  currentUser: 'mattie-rhodes-current-user',
  messages: 'mattie-rhodes-messages',
  appointments: 'mattie-rhodes-appointments',
  eventAttendances: 'mattie-rhodes-event-attendances',
  eventVolunteers: 'mattie-rhodes-event-volunteers'
};

let currentLanguage = 'en';
let selectedDateIso = '';
let selectedEvent = null;
let currentUser = null;
const calendarMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

const authScreen = document.getElementById('auth-screen');
const appRoot = document.getElementById('app-root');
const authMessage = document.getElementById('auth-message');
const signinForm = document.getElementById('signin-form');
const registerForm = document.getElementById('register-form');
const showSigninButton = document.getElementById('show-signin');
const showRegisterButton = document.getElementById('show-register');
const welcomeUser = document.getElementById('welcome-user');
const signoutButton = document.getElementById('signout-button');

const langEnButton = document.getElementById('lang-en');
const langEsButton = document.getElementById('lang-es');

const programList = document.getElementById('program-list');
const volunteerForm = document.getElementById('volunteer-form');
const volunteerMessage = document.getElementById('volunteer-message');
const messageForm = document.getElementById('message-form');
const messageStatus = document.getElementById('message-status');
const messageList = document.getElementById('message-list');
const appointmentForm = document.getElementById('appointment-form');
const appointmentList = document.getElementById('appointment-list');

const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const calendarMonthLabel = document.getElementById('calendar-month-label');
const calendarWeekdays = document.getElementById('calendar-weekdays');
const calendarGrid = document.getElementById('calendar-grid');
const selectedDateHeading = document.getElementById('selected-date-heading');
const eventList = document.getElementById('event-list');
const eventActionPanel = document.getElementById('event-action-panel');
const eventTitle = document.getElementById('event-title');
const eventMeta = document.getElementById('event-meta');
const eventDescription = document.getElementById('event-description');
const eventActionMessage = document.getElementById('event-action-message');
const attendForm = document.getElementById('attend-form');
const eventVolunteerForm = document.getElementById('event-volunteer-form');

const i18nElements = {
  authTitle: 'auth-title', authSubtitle: 'auth-subtitle', signIn: 'show-signin', createAccount: 'show-register',
  email: 'signin-email-label', password: 'signin-password-label', fullName: 'register-name-label',
  signOut: 'signout-button', appTitle: 'app-title', appSubtitle: 'app-subtitle',
  aboutTitle: 'about-title', aboutCopy: 'about-copy', contactNote: 'contact-note',
  eventsTitle: 'events-title', eventsSubtitle: 'events-subtitle', registerToAttend: 'attend-form-title',
  notes: 'attend-notes-label', attendSubmit: 'attend-submit', volunteerForEvent: 'event-volunteer-title',
  volunteerInterest: 'event-volunteer-interest-label', volunteerEventSubmit: 'event-volunteer-submit',
  generalVolunteerTitle: 'general-volunteer-title', generalVolunteerSubtitle: 'general-volunteer-subtitle',
  programInterest: 'volunteer-interest-label', availability: 'volunteer-availability-label',
  submitVolunteerRequest: 'volunteer-submit', portalTitle: 'portal-title', portalSubtitle: 'portal-subtitle',
  sendMessage: 'message-title', providerTeamName: 'message-provider-label', message: 'message-body-label',
  sendMessageBtn: 'message-submit', manageAppointments: 'appointments-title', serviceArea: 'appointment-provider-label',
  appointmentDate: 'appointment-date-label', appointmentTime: 'appointment-time-label', addAppointment: 'appointment-submit',
  fullNameAttend: 'attend-name-label', emailAttend: 'attend-email-label',
  fullNameEventVolunteer: 'event-volunteer-name-label', emailEventVolunteer: 'event-volunteer-email-label',
  fullNameVolunteer: 'volunteer-name-label', emailVolunteer: 'volunteer-email-label',
  emailRegister: 'register-email-label', passwordRegister: 'register-password-label',
  signInSubmit: 'signin-submit', createAccountSubmit: 'register-submit'
};

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function loadList(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setAuthMessage(text, isError = false) {
  authMessage.textContent = text;
  authMessage.classList.toggle('error', isError);
}

function updateWelcome() {
  if (currentUser) {
    welcomeUser.textContent = `${t('welcomeAs')} ${currentUser.name || currentUser.email}`;
  }
}

function applyTranslations() {
  document.documentElement.lang = translations[currentLanguage].pageLanguage;

  for (const [key, id] of Object.entries(i18nElements)) {
    const el = document.getElementById(id);
    if (!el) continue;
    const value = t(key);
    if (id.endsWith('-label')) {
      const input = el.querySelector('input, select, textarea');
      el.childNodes[0].textContent = `${value}\n            `;
      if (input) el.appendChild(input);
    } else {
      el.textContent = value;
    }
  }

  document.getElementById('attend-notes-input').placeholder = t('notesPlaceholder');
  document.getElementById('event-volunteer-interest-input').placeholder = t('volunteerInterestPlaceholder');
  document.getElementById('volunteer-availability-input').placeholder = t('availabilityPlaceholder');

  const volunteerInterestSelect = volunteerForm.querySelector('select[name="interest"]');
  volunteerInterestSelect.options[0].text = t('selectOne');

  const appointmentSelect = appointmentForm.querySelector('select[name="provider"]');
  appointmentSelect.options[0].text = t('selectServiceArea');

  langEnButton.classList.toggle('active', currentLanguage === 'en');
  langEsButton.classList.toggle('active', currentLanguage === 'es');

  renderCalendarWeekdays();
  renderCalendar();
  renderEventsForSelectedDate();
  updateWelcome();
}

function showApp(user) {
  currentUser = user;
  authScreen.classList.add('hidden');
  appRoot.classList.remove('hidden');
  updateWelcome();
}

function showAuth() {
  currentUser = null;
  appRoot.classList.add('hidden');
  authScreen.classList.remove('hidden');
  setAuthMessage('');
}

function renderPrograms() {
  programList.innerHTML = '';
  for (const program of programs) {
    const chip = document.createElement('li');
    chip.textContent = program;
    programList.appendChild(chip);
  }
}

function renderMessages() {
  const messages = loadList(storageKeys.messages);
  messageList.innerHTML = '';
  for (const item of messages) {
    const entry = document.createElement('li');
    entry.textContent = `${item.provider}: ${item.message}`;
    messageList.appendChild(entry);
  }
}

function renderAppointments() {
  const appointments = loadList(storageKeys.appointments);
  appointmentList.innerHTML = '';
  for (const item of appointments) {
    const entry = document.createElement('li');
    entry.textContent = `${item.date} at ${item.time} with ${item.provider}`;
    appointmentList.appendChild(entry);
  }
}

function setAuthMode(mode) {
  const isSignin = mode === 'signin';
  signinForm.classList.toggle('hidden', !isSignin);
  registerForm.classList.toggle('hidden', isSignin);
  showSigninButton.classList.toggle('active', isSignin);
  showRegisterButton.classList.toggle('active', !isSignin);
  showSigninButton.setAttribute('aria-selected', String(isSignin));
  showRegisterButton.setAttribute('aria-selected', String(!isSignin));
  setAuthMessage('');
}

function formatMonthLabel(year, monthIndex) {
  return new Date(year, monthIndex, 1).toLocaleDateString(translations[currentLanguage].locale, { month: 'long', year: 'numeric' });
}

function isoFromParts(year, monthIndex, day) {
  const date = new Date(year, monthIndex, day);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function eventsForDate(dateIso) {
  return events.filter((event) => event.date === dateIso);
}

function renderCalendarWeekdays() {
  calendarWeekdays.innerHTML = '';
  for (const dayName of t('weekdays')) {
    const span = document.createElement('span');
    span.textContent = dayName;
    calendarWeekdays.appendChild(span);
  }
}

function renderCalendar() {
  const year = calendarMonth.getFullYear();
  const monthIndex = calendarMonth.getMonth();
  calendarMonthLabel.textContent = formatMonthLabel(year, monthIndex);

  calendarGrid.innerHTML = '';
  const firstOfMonth = new Date(year, monthIndex, 1);
  const startDay = firstOfMonth.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate();

  for (let i = 0; i < 42; i += 1) {
    const dayButton = document.createElement('button');
    dayButton.type = 'button';
    dayButton.className = 'calendar-day';

    let day;
    let cellMonthIndex = monthIndex;
    let cellYear = year;

    if (i < startDay) {
      day = daysInPrevMonth - startDay + i + 1;
      cellMonthIndex = monthIndex - 1;
      if (cellMonthIndex < 0) { cellMonthIndex = 11; cellYear -= 1; }
      dayButton.classList.add('outside');
    } else if (i >= startDay + daysInMonth) {
      day = i - (startDay + daysInMonth) + 1;
      cellMonthIndex = monthIndex + 1;
      if (cellMonthIndex > 11) { cellMonthIndex = 0; cellYear += 1; }
      dayButton.classList.add('outside');
    } else {
      day = i - startDay + 1;
    }

    const dateIso = isoFromParts(cellYear, cellMonthIndex, day);
    const dayEvents = eventsForDate(dateIso);
    const today = new Date();
    const todayIso = isoFromParts(today.getFullYear(), today.getMonth(), today.getDate());

    dayButton.dataset.date = dateIso;
    dayButton.innerHTML = `<span>${day}</span>${dayEvents.length ? '<span class="dot"></span>' : ''}`;

    if (dateIso === todayIso) dayButton.classList.add('today');
    if (dateIso === selectedDateIso) dayButton.classList.add('selected');

    dayButton.addEventListener('click', () => {
      selectedDateIso = dateIso;
      renderCalendar();
      renderEventsForSelectedDate();
    });

    calendarGrid.appendChild(dayButton);
  }
}

function showEventActions(event) {
  selectedEvent = event;
  eventActionPanel.classList.remove('hidden');
  eventActionMessage.textContent = '';

  eventTitle.textContent = event.name;
  eventMeta.textContent = `${event.date} • ${event.time} • ${event.location}`;
  eventDescription.textContent = event.description;

  attendForm.classList.toggle('hidden', !event.needsAttendanceRegistration);
  eventVolunteerForm.classList.toggle('hidden', !event.needsVolunteerRegistration);

  if (!event.needsAttendanceRegistration && !event.needsVolunteerRegistration) {
    eventActionMessage.textContent = t('noRegistrationNeeded');
  }
}

function renderEventsForSelectedDate() {
  eventList.innerHTML = '';
  eventActionPanel.classList.add('hidden');

  if (!selectedDateIso) {
    selectedDateHeading.textContent = t('selectDate');
    return;
  }

  const selectedDateObj = new Date(`${selectedDateIso}T00:00:00`);
  selectedDateHeading.textContent = selectedDateObj.toLocaleDateString(translations[currentLanguage].locale, {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });

  const dayEvents = eventsForDate(selectedDateIso);
  if (!dayEvents.length) {
    const item = document.createElement('li');
    item.textContent = t('noEventsDate');
    eventList.appendChild(item);
    return;
  }

  for (const event of dayEvents) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${event.time} — ${event.name}`;
    button.addEventListener('click', () => showEventActions(event));
    item.appendChild(button);
    eventList.appendChild(item);
  }
}

langEnButton.addEventListener('click', () => {
  currentLanguage = 'en';
  applyTranslations();
});

langEsButton.addEventListener('click', () => {
  currentLanguage = 'es';
  applyTranslations();
});

showSigninButton.addEventListener('click', () => setAuthMode('signin'));
showRegisterButton.addEventListener('click', () => setAuthMode('register'));

signinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(signinForm);
  const email = String(formData.get('email')).trim().toLowerCase();
  const password = String(formData.get('password'));
  const users = loadList(storageKeys.users);
  const user = users.find((entry) => entry.email === email && entry.password === password);

  if (!user) {
    setAuthMessage(t('authNotFound'), true);
    setAuthMode('register');
    registerForm.elements.email.value = email;
    return;
  }

  localStorage.setItem(storageKeys.currentUser, JSON.stringify(user));
  signinForm.reset();
  showApp(user);
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(registerForm);
  const name = String(formData.get('name')).trim();
  const email = String(formData.get('email')).trim().toLowerCase();
  const password = String(formData.get('password'));

  const users = loadList(storageKeys.users);
  if (users.some((entry) => entry.email === email)) {
    setAuthMessage(t('authEmailExists'), true);
    setAuthMode('signin');
    signinForm.elements.email.value = email;
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);
  saveList(storageKeys.users, users);
  localStorage.setItem(storageKeys.currentUser, JSON.stringify(newUser));

  registerForm.reset();
  showApp(newUser);
});

signoutButton.addEventListener('click', () => {
  localStorage.removeItem(storageKeys.currentUser);
  showAuth();
  setAuthMode('signin');
});

prevMonthButton.addEventListener('click', () => {
  calendarMonth.setMonth(calendarMonth.getMonth() - 1);
  renderCalendar();
  renderEventsForSelectedDate();
});

nextMonthButton.addEventListener('click', () => {
  calendarMonth.setMonth(calendarMonth.getMonth() + 1);
  renderCalendar();
  renderEventsForSelectedDate();
});

attendForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!selectedEvent) return;

  const formData = new FormData(attendForm);
  const records = loadList(storageKeys.eventAttendances);
  records.push({
    eventId: selectedEvent.id,
    eventName: selectedEvent.name,
    date: selectedEvent.date,
    name: formData.get('name'),
    email: formData.get('email'),
    notes: formData.get('notes')
  });
  saveList(storageKeys.eventAttendances, records);
  attendForm.reset();
  eventActionMessage.textContent = t('attendanceSubmitted');
});

eventVolunteerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!selectedEvent) return;

  const formData = new FormData(eventVolunteerForm);
  const records = loadList(storageKeys.eventVolunteers);
  records.push({
    eventId: selectedEvent.id,
    eventName: selectedEvent.name,
    date: selectedEvent.date,
    name: formData.get('name'),
    email: formData.get('email'),
    interest: formData.get('interest')
  });
  saveList(storageKeys.eventVolunteers, records);
  eventVolunteerForm.reset();
  eventActionMessage.textContent = t('volunteerSubmitted');
});

volunteerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  volunteerMessage.textContent = t('volunteerThanks');
  volunteerForm.reset();
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(messageForm);
  const payload = { provider: formData.get('provider'), message: formData.get('message') };

  const messages = loadList(storageKeys.messages);
  messages.push(payload);
  saveList(storageKeys.messages, messages);

  messageStatus.textContent = t('messageSent');
  messageForm.reset();
  renderMessages();
});

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(appointmentForm);
  const payload = { provider: formData.get('provider'), date: formData.get('date'), time: formData.get('time') };

  const appointments = loadList(storageKeys.appointments);
  appointments.push(payload);
  appointments.sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  saveList(storageKeys.appointments, appointments);

  appointmentForm.reset();
  renderAppointments();
});

renderPrograms();
renderMessages();
renderAppointments();

selectedDateIso = isoFromParts(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
applyTranslations();

const currentUserRaw = localStorage.getItem(storageKeys.currentUser);
if (currentUserRaw) {
  showApp(JSON.parse(currentUserRaw));
} else {
  showAuth();
  setAuthMode('signin');
}

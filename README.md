# Mattie Rhodes Center Community Hub (Prototype)

This lightweight prototype is updated to align with information shown on
[mattierhodes.org](https://mattierhodes.org/) and includes the requested core features:

- Opening screen with sign in / create account flow before app access
- Interactive month-view calendar with forward/back month navigation
- Top toggle to switch interface language between English and Spanish
- Event detail panel with per-event attendance/volunteer registration when required
- Volunteer sign-up form
- Client/provider portal for messaging and appointment tracking
- Header updated with Mattie Rhodes logo and brand-inspired orange palette
- Website-inspired visual refresh with richer gradients, texture, and elevated card styling

## Run locally

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>.

## Included Mattie Rhodes context in this prototype

- Program areas shown on the homepage: Community Behavioral Health, Youth Development,
  Community Economic Development, Cultural Arts, Public Health, and Public Safety.
- Events populated with public examples such as Mattie’s Masquerade Gala and
  Día de los Muertos opening celebration.
- Administrative office contact included: 148 N. Topping Ave., Kansas City, MO 64123.

## Notes

- This demo stores accounts, current session, messages, and appointments in browser `localStorage`.
- For production, connect forms to a secure backend with authentication,
  role-based access, encrypted messaging, and proper password hashing.

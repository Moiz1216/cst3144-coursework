# CST3144 After School Lessons – Vue.js App

Front-end for the CST3144 coursework, built with **Vue.js 3** (Options API) and
Font Awesome icons. All data comes from the Express.js API using `fetch` promises.

## Links
- **[Vue.js App] GitHub repository:** https://github.com/Moiz1216/cst3144-coursework
- **[Vue.js App] GitHub Pages:** https://moiz1216.github.io/cst3144-coursework/
- **[Express.js App] GitHub repository:** _add link_
- **[Express.js App] render.com – all lessons:** _add link_ (e.g. `https://M00XXXXXX-after-school.onrender.com/lessons`)

## Features
- 10 lessons displayed with `v-for` (subject, location, price, spaces, image, icon, teacher)
- Sort by subject, location, price or spaces – ascending or descending
- Add to cart (disabled when no spaces are left), cart page with remove buttons and total
- Checkout on the cart page – name (letters only) and phone (numbers only) checked with regular expressions
- `fetch` calls:
  - `GET /lessons` – load all lessons
  - `POST /orders` – save the order
  - `PUT /lessons/:id` – set the new number of spaces after an order
  - `GET /search?q=` – search done on the server (challenge)
  - `GET /teachers` and `GET /teachers/:id/lessons` – view lessons by teacher (challenge)

## Files
| File | What it does |
|---|---|
| `index.html` | The Vue app: HTML template + Vue code |
| `style.css` | Page styling |

## Running locally
Start the Express.js server on `http://localhost:3000`, then open `index.html`
with Live Server. When the page is opened locally it uses the local server,
otherwise it uses the render.com server (see `API_URL` in `index.html`).

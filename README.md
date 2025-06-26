# 📝 Task Management System

מערכת ניהול משימות בסיסית שנבנתה במסגרת קורס "חדשנות טכנולוגית".

---

## 🚀 תכונות

- ✅ הוספת משימות
- ✏️ עריכת משימות
- 🗑️ מחיקת משימות
- ✔️ סימון משימות כהושלמו

---

## 🧰 טכנולוגיות

- React + TypeScript
- TailwindCSS
- Docker
- Firebase Hosting
- GitHub Actions (CI/CD)
- Vite

---
---
## 🛠️ הוראות התקנה והרצה

### התקנה מקומית:
```bash
git clone https://github.com/ChaniBenYair/task-manager.git
cd task-manager
npm install
npm run dev
bash```
---
### הרצה עם Docker:
```bash
docker build -t task-manager .
docker run -d -p 3000:80 task-manager
גישה דרך הדפדפן: http://localhost:3000

☁️ פריסה בענן - Firebase
המערכת נפרסה על Firebase באמצעות CI/CD מ-GitHub.

🔗 קישור לאתר:
https://first-fortress-464021-m6.web.app

🔄 תהליך CI/CD
⚙️ נוצרו שני קבצי Workflow:

firebase-hosting-pull-request.yml – לבניית Preview אוטומטית לכל PR.

firebase-hosting-merge.yml – לפריסה אוטומטית לאחר מיזוג ל־main.

🛡️ נוספו סודות (Secrets) בגיטהאב לשם גישה מאובטחת ל־Firebase.

🖼️ צילומי מסך

![צילום מסך מערכת](https://github.com/user-attachments/assets/b73c7f0b-d77f-44e0-bb20-e23fb417046d)



📁 מבנה תיקיות
task-manager/
├── app/
│   └── page.tsx
├── public/
├── .github/
│   └── workflows/
│       ├── firebase-hosting-pull-request.yml
│       └── firebase-hosting-merge.yml
├── firebase.json
├── .firebaserc
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md

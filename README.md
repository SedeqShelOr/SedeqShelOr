import { Card } from "./Card";

export default function Home() { return ( <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4"> <Card
title="גלגל המסרים"
description="פענוח מספרים עוקבים כמו 14:14 עם משמעות, פעולה נדרשת ותדר החיים."
button="פתח גלגל"
/> <Card
title="עצת השם תקום"
description="מסר קבלי אישי המבוסס על נתונים מספריים וכתבי סוד."
button="קרא עצה"
/> <Card
title="יד אל יד"
description="שלח/י הודעה אנונימית וקבל/י מענה אישי שקט, עם אפשרות לרמת דחיפות."
button="הבע כאבך"
/> <Card
title="המרת תדרים"
description="שירות לתרגום רגשי והבנת שפתו של אדם אחר. שימושי במיוחד בזוגיות ובתקשורת."
button="התחל המרה"
/> <Card
title="פאזל תקשורתי"
description="כלי לפתרון סיטואציות לא פתורות: איך לקרוא את מה שלא נאמר."
button="פרק את הפאזל"
/> <Card
title="יומן ליווי נשמות"
description="מקום לתיעוד תהליכים פנימיים עם נשמות שפגשת. מרחב אמיתי של שיתוף וצמיחה."
button="קרא/י יומן"
/> <Card
title="פרקים מתוך הדרך"
description="תוכן מתעדכן של פרקים חיים, תובנות, וסיפורים מתוך המסע שלך."
button="קרא פרקים"
/> <Card
title="גרפולוגיה"
description="שלח כתב יד וקבל פענוח רגשי מעמיק. ניתוח מקצועי ואותנטי."
button="פענח כתב"
/> <Card
title="קריאה בכף יד"
description="שירות ייחודי לקריאת כף יד על פי מסורת קבלית עתיקה."
button="קרא כף יד"
/> </main> ); }


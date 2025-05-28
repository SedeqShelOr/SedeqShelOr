export default function Page() { return ( <main className="flex min-h-screen flex-col items-center justify-center p-4"> <div className="max-w-xl text-center space-y-4"> <h1 className="text-4xl font-bold">סדק של אור</h1> <p className="text-lg">ברוכים הבאים למרחב של אמת, הקשבה ושיח פנימי.</p> <p className="text-base">כאן אף אחד לא מתוקן – אבל מישהו סוף סוף רואה אותך.</p> <div className="bg-white shadow-md p-4 rounded-xl"> <h2 className="text-xl font-semibold">יד אל יד – לא טופס, אלא מגע</h2> <p className="mt-2">אם אתה מרגיש שקוף, אבוד, או פשוט רוצה שמישהו יקשיב – כתוב לי. לא כדי לתקן אותך. כדי ללכת איתך.</p> </div> </div> </main> ); }
export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <Card
        title="גלגל המסרים"
        description="מסרים לפי מספרים עוקבים (14:14 וכד'), פעולה נדרשת ותדר יומי."
        button="פתח גלגל"
      />
      <Card
        title="עצת השם תקום"
        description="כלי לקריאה קבלית לפי שם ותאריך לידה, כולל תיקון אישי ותשובה לשאלה."
        button="קרא עצה"
      />
      <Card
        title="יד אל יד"
        description="חלון לפנייה אישית לאדם אמיתי, שלא יתקן אותך – אלא יראה אותך."
        button="הבע כאבך"
      />
      <Card
        title="המרת תדרים"
        description="כלי להתאמת שפה רגשית בין אנשים – מעין מתרגם של רגש למילים."
        button="זהה תדר"
      />
      <Card
        title="פאזל תקשורתי"
        description="שיטה חדשנית לחיבור בין שברי שיח או תקשורת בין־אישית מבולבלת."
        button="חבר פאזל"
      />
      <Card
        title="יומן של ליווי נשמות"
        description="רגעים מהחיים של אנשים 'שקופים' שנגעו בלב, וסיפורם סופר מחדש."
        button="קרא יומן"
      />
      <Card
        title="פרקים מתוך הדרך"
        description="תוכן מתעדכן של פרקים, תובנות, וסיפורים מתוך המסע שלך."
        button="קרא פרקים"
      />
      <Card
        title="גרפולוגיה"
        description="שלח כתב יד וקבל ניתוח רגשי מעמיק. ניתוח מקצועי ואותנטי."
        button="פענח כתב"
      />
      <Card
        title="קריאה בכף יד"
        description="שירות ייחודי לקריאת־כף יד לפי מסורת קבלית עתיקה."
        button="קרא כף יד"
      />
    </main>
  );
}

function Card({ title, description, button }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        {button}
      </button>
    </div>
  );
}


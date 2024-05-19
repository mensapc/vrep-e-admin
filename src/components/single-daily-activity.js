import { timeDateFormat } from '../lib/momentFormat';

export default function SingleDailyActivity({ activity }) {
  return (
    <>
      <article className="single-activity">
        <p className="date">{timeDateFormat(activity.created_at)}</p>
        <p>{activity.message}</p>
      </article>
    </>
  );
}


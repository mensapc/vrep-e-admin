import divider from '../assets/divider.png';
import dividerIcon from '../assets/divider-icon.png';
import SingleDailyActivity from './single-daily-activity';
export default function DailyActivity(props) {
  return (
    <>
      <article className="daily-activity-section">
        <h2>{props.day}</h2>
        <article className="daily-activity">
          {props.data.map((activity) => (
            <div className="divider-container" key={activity._id}>
              <div className="divider-bar">
                <img src={dividerIcon} alt="A circle" className="divider-circle two" />
                <img src={divider} alt="A horizontal line-like rectangle" />
                <img src={dividerIcon} alt="A circle" className="divider-circle one" />
              </div>
              <div className="text">
                <SingleDailyActivity activity={activity} />
              </div>
            </div>
          ))}
        </article>
      </article>
    </>
  );
}


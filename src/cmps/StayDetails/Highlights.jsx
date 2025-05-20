import { FiKey, FiCalendar }   from 'react-icons/fi';
import { RiLandscapeLine }      from 'react-icons/ri';

const defaultHighlights = [
  { id: 1, Icon: FiKey,            title: 'Self check-in',                 subtitle: 'Check yourself in with the lockbox.' },
  { id: 2, Icon: RiLandscapeLine,  title: 'Beach and bay views',           subtitle: 'Guests say the views are lovely.' },
  { id: 3, Icon: FiCalendar,       title: 'Free cancellation for 48 hours',subtitle: 'Get a full refund if you change your mind.' },
];

export function Highlights({ items = defaultHighlights }) {
  return (
    <ul className="highlights-list">
      {items.map(({ id, Icon, title, subtitle }) => (
        <li key={id} className="highlight-row">
          <Icon className="hl-icon" size={28} aria-hidden />
          <div className="hl-text">
            <h4 className="hl-title">{title}</h4>
            <p  className="hl-sub">{subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
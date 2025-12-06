import { Link } from 'react-router-dom';

const Nav = ({legalSets, banList, format, legalSetsLink, banListLink, formatLink, styleState, handleClick}) => {
    return (
        <nav className='Nav' style={{ display: styleState }}>
            <ul className='Nav-list' onClick={handleClick} >
                <li> <Link to={legalSetsLink}>{legalSets}</Link></li>
                <li> <Link to={banListLink}>{banList}</Link></li>
                <li> <a href={formatLink} target='_blank' rel='noopener noreferrer' onMouseUp={e => {e.currentTarget.blur(); }}>{format}</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
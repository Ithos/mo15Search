import { createContext, useState } from 'react';
import useWindowSize from "../Hooks/WindowSize";
import useMousePosition from '../Hooks/MousePosition';
import TrackScroll from '../Hooks/TrackScroll';
import banlist from './Banlist.json';
import setlist from './Setlist.json';
import typeLists from './TypeLists.json';

export const DataContext = createContext();

const APP_TITLE = "MO15 Search"
const LEGAL_SETS = "Legal Sets"
const BAN_LIST = "Ban List"
const FORMAT = "Format"
const HOME_LINK = "/mo15Search"
const LEGAL_SETS_LINK = "/mo15Search/legalSets"
const BAN_LIST_LINK = "/mo15Search/banList"
const FORMAT_LINK = "https://www.2015modern.com/"
const CARD_WIDTH = 223;
const CARD_HEIGHT = 310;

const SMALL_SCREEN_WIDTH = 1112;
const NARROW_SCREEN_WIDTH = 1500;

const BANLIST = banlist.banlist;
const SETLIST = setlist.setlist;

const CARD_TYPES = typeLists.typeLists.cardTypes;
const SUPERTYPES = typeLists.typeLists.supertypes;
const CREATURE_TYPES = typeLists.typeLists.creatureTypes;
const ARTIFACT_TYPES = typeLists.typeLists.artifactTypes;
const ENCHANTMENT_TYPES = typeLists.typeLists.enchantmentTypes;
const LAND_TYPES = typeLists.typeLists.landTypes;
const SPELL_TYPES = typeLists.typeLists.spellTypes;
const PLANESWALKER_TYPES = typeLists.typeLists.planeswalkerTypes;

export const DataProvider = ({ children }) => {
    const [menuState, setMenuState] = useState('none');
    const { width, height } = useWindowSize();
    const mousePosition = useMousePosition();
    const scrollPosition = TrackScroll();

    const tipPosition = ( (mousePosition.y + CARD_HEIGHT < height && mousePosition.x + CARD_WIDTH < width) && { top: mousePosition.y, left: mousePosition.x } ) ||
                        ( (mousePosition.y + CARD_HEIGHT < height && mousePosition.x + CARD_WIDTH >= width) && { top: mousePosition.y, left: mousePosition.x - CARD_WIDTH } ) ||
                        ( (mousePosition.y + CARD_HEIGHT >= height && mousePosition.x + CARD_WIDTH < width) && { top: mousePosition.y - CARD_HEIGHT, left: mousePosition.x } ) ||
                        ( (mousePosition.y + CARD_HEIGHT >= height && mousePosition.x + CARD_WIDTH >= width) && { top: mousePosition.y - CARD_HEIGHT, left: mousePosition.x - CARD_WIDTH } );

    return (
        <DataContext.Provider value={{ APP_TITLE, LEGAL_SETS, BAN_LIST, FORMAT, HOME_LINK, LEGAL_SETS_LINK, BAN_LIST_LINK, FORMAT_LINK,
                                        SMALL_SCREEN_WIDTH, CARD_WIDTH, CARD_HEIGHT, width, height, menuState, setMenuState, 
                                        mousePosition, tipPosition, scrollPosition, SETLIST, BANLIST, 
                                        CARD_TYPES, SUPERTYPES, CREATURE_TYPES, ARTIFACT_TYPES, ENCHANTMENT_TYPES, 
                                        LAND_TYPES, SPELL_TYPES, PLANESWALKER_TYPES, NARROW_SCREEN_WIDTH }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
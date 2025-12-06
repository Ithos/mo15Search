import DataContext from "./Context/DataContext";
import { useContext } from "react";
import {Route, Routes } from 'react-router-dom';
import Cards from "./Components/Cards";
import LegalSets from "./Components/LegalSets";
import BanList from "./Components/Banlist";
import Layout from "./Components/Layout";
import NotFound from './Components/NotFound';

function App() {
  const dataContext = useContext(DataContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Layout dataContext={dataContext} />} >
          <Route path={dataContext.HOME_LINK} index element={
                <Cards 
                scrollPosition={dataContext.scrollPosition} 
                bannedCards={dataContext.BANLIST} 
                setlist={dataContext.SETLIST}
                cardTypes={dataContext.CARD_TYPES}
                supertypes={dataContext.SUPERTYPES}
                creatureTypes={dataContext.CREATURE_TYPES}
                artifactTypes={dataContext.ARTIFACT_TYPES}
                enchantmentTypes={dataContext.ENCHANTMENT_TYPES}
                landTypes={dataContext.LAND_TYPES}
                spellTypes={dataContext.SPELL_TYPES}
                planeswalkerTypes={dataContext.PLANESWALKER_TYPES}
              />
            } 
          />
          <Route path={dataContext.LEGAL_SETS_LINK} element={
              <LegalSets 
                setlist={dataContext.LEGAL_SETS}
                setlistData={dataContext.SETLIST}
              />
            } 
          />
          <Route path={dataContext.BAN_LIST_LINK} element={
              <BanList 
                bannedCards={dataContext.BAN_LIST} 
                width={dataContext.width} 
                smallScreenWidth={dataContext.SMALL_SCREEN_WIDTH}
                tipPosition={dataContext.tipPosition}
                banlistData={dataContext.BANLIST}
              />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

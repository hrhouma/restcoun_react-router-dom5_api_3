import { BrowserRouter, Route, Switch, Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Accueil from './composants/Accueil';
import Page404 from './composants/Page404';
import Recherche from './composants/Recherche';
import Pays from './composants/Pays';
import { Menu } from 'semantic-ui-react';


function App() {
    return (

    <React.Fragment>
        <BrowserRouter>
            <header>
                <h2>Menu </h2>
                <Menu>
                    <Menu.Item> <NavLink to='/' activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }} exact> Accueil </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/recherche' activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }}> Barre de Recherche </NavLink></Menu.Item>
                    <Menu.Item> <NavLink to='/pays' activeClassName="lien-actif" activeStyle={{ color: "red", fontWeight: "bold" }}> PAYS </NavLink></Menu.Item>
                </Menu>
            </header>
           
         
            <Switch>


                <Route path="/" component={Accueil} exact />
                <Route path="/recherche" component={Recherche} />
                <Route path="/pays/:codePays" component={Pays} />
                <Route path="*" component={Page404} />


            </Switch>
        </BrowserRouter>
    </React.Fragment>
    );
}
export default App;

import React, { Component } from 'react';
import Clock from './Clock';
import Toggle from './Toggle';
import LogginButton from './LogginButton';
import LoginControl from './LoginControl';
import Page from './Page';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import FlavorForm from './FlavorForm';
import SignUpDialog from './SignUpDialog';
import NameFormUncontrolled from './NameFormUncontrolled';

class App extends Component {
  render() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
            <Toggle />
            <LogginButton />
            <LoginControl />
            <Page />
            <NameForm />
            <EssayForm />
            <FlavorForm />
            <Reservation />
            <Calculator />
            <SignUpDialog />
            <NameFormUncontrolled />
        </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// function getGreeting(user) {
//     if (user) {
//         return <div><h1>Hello, {formatName(user)}! </h1></div>
//     } else {
//         return <h1>Hello, Stranger!</h1>;
//     }
// }
//
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez',
// };
//
// const value = {
//     type: 'h3',
//     props: {
//         className: 'author',
//         children: 'Ivan Sakhman'
//     }
// };

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.firstName || 'Anonymous'}</h1>;
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            posts: [],
            comments: []
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                {/*{getGreeting(user)}*/}
                <Welcome name="Ivan"/>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('THe link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}

class LogginButton extends React.Component {
    handleClick = () => {
        console.log('this is:', this);
    };

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Loggin
            </button>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            LOGIN :)
        </button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            LOGOUT :(
        </button>
    )
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
            <Toggle />
            {ActionLink()}
            <LogginButton />
            <Greeting isLoggedIn={false} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//              src={props.user.avatarUrl}
//              alt={props.user.name}/>
//     )
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.author} />
//             <div className="UserInfo-name">
//                 {props.author.name}
//             </div>
//         </div>
//     )
// }

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara"/>
//             <Welcome name="Cahal"/>
//             <Welcome name="Edite"/>
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
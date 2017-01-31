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

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClicl={this.handleLoginClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <hi>Hi, Man!</hi>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Re: REact', 'Re:Re: React'];

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number}/>
    );

    return (
        <ul>{listItems}</ul>
    )
}

const numbers = [1, 2, 3, 4, 5];

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'How are you', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You cn install React from npm.'},
];

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        if (this.state.value) {
            alert('A name was submitted: ' + this.state.value);
        } else {
            alert('A name was submitted: Anonymous');
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ladel>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </ladel>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix Flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="apple">Apple</option>
                        <option value="orange">Orange</option>
                        <option value="lemon">Lemon</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}
                    />
                </label>
            </form>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }

    return <p>The water not boil.</p>
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={value}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange(value) {
        this.setState({scale: 'c', value});
    }

    handleFahrenheitChange(value) {
        this.setState({scale: 'f', value});
    }

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    value={celsius}
                    onChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    value={fahrenheit}
                    onChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    )
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog
                title="Mars Exploration Program"
                message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}`);
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return <tr><th colSpan="2">{this.props.category}</th></tr>;
    }
}

class ProductRow extends React.Component {
    render() {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}>
                {this.props.product.name}
            </span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) == -1 || (!product.stocked && this.props.inStockOnly)) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserInput(
            this.filterTextInput.value,
            this.inStockOnlyInput.checked
        );
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref={(input) => this.filterTextInput = input}
                    onChange={this.handleChange}/>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref={(input) => this.inStockOnlyInput = input}
                        onChange={this.handleChange}/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };

        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput} />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
//
// function CustomTextInput(props) {
//     let textInput = null;
//
//     function handleClick() {
//         textInput.focus();
//     }
//     return (
//         <div>
//             <input
//                 type="text"
//                 ref={(input) => { textInput = input; }} />
//             <input
//                 type="button"
//                 value="Focus the text input"
//                 onClick={handleClick} />
//         </div>
//     );
// }
//
// class AutoFocusTextInput extends React.Component {
//     componentDidMount() {
//         this.textInput.focus();
//     }
//
//     render() {
//         return (
//             <CustomTextInput
//             ref={(input) => { this.textInput = input; }} />
//         );
//     }
// }

class NameFormUncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        defaultValue="Bob"
                        type="text"
                        ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
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
            <LoginControl />
            <Mailbox unreadMessages={messages} />
            <Page />
            <NumberList numbers={numbers} />
            <Blog posts={posts} />
            <NameForm />
            <EssayForm />
            <FlavorForm />
            <Reservation />
            <Calculator />
            <SignUpDialog />
            <FilterableProductTable products={PRODUCTS} />
            {/*<AutoFocusTextInput />*/}
            <NameFormUncontrolled />
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
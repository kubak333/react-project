import Button from "./Button";

function App () {
    return <div>
        <div><Button success rounded outline>Click me!</Button></div>
        <div><Button danger outline>Buy now!</Button></div>
        <div><Button warning>See deals!</Button></div>
        <div><Button secondary outline>Hide Ads!</Button></div>
        <div><Button primary rounded>Contact us!</Button></div>
        
    </div>;
}

export default App;


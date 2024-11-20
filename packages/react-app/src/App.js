import React from "react";
import { Button } from "shared-components";
import { addNumbers } from "shared-utils";

const App = () => {
    const handleClick = () => alert(`2 + 3 = ${addNumbers(2, 3)}`);

    return (
        <div>
            <h1>React App with Lerna</h1>
            <Button label="Click Me" onClick={handleClick} />
        </div>
    );
};

export default App;

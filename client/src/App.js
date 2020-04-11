import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from "@drizzle/store";
import Greeter from './artifacts/Greeter.json';
import { newContextComponents } from "@drizzle/react-components";
const { AccountData, ContractData, ContractForm } = newContextComponents;

const drizzleOptions = {
    contracts: [
        Greeter,
    ],
    events: {
        Greeting: ["GreetingSet"],
    },
}

const drizzle = new Drizzle(drizzleOptions);


function App() {
    return (
        <DrizzleContext.Provider drizzle={drizzle} className="App">
            <DrizzleContext.Consumer>
                {drizzleContext => {
                    const {drizzle, drizzleState, initialized} = drizzleContext;

                    if(!initialized) {
                        return "Loading...";
                    }

                    return (
                        <div className="drizzle">
                            Current Account:
                            <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={0} units="ether" precision={2} />
                                Current Greeting:
                                <br/>
                                <br/>
                            <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="Greeter" method="greeting"/>
                                <br/>
                                <br/>
                            Update Greeting:
                                <br/>
                                <br/>
                            <ContractForm drizzle={drizzle} drizzleState={drizzleState} contract="Greeter" method="set"/>
                        </div>
                    )
                }}
            </DrizzleContext.Consumer>
        </DrizzleContext.Provider>
    );
}

export default App;

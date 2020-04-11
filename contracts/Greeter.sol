pragma solidity >=0.4.21 <0.7.0;

contract Greeter {
    string public greeting = 'Hello World!';

    event GreetingSet(string greeting);

    function set(string memory _greeting) public {
        greeting = _greeting;
        emit GreetingSet(_greeting);
    }
}

pragma solidity ^0.4.16;

contract Token {

    address owner = msg.sender;
    
    mapping (address => uint) public balances;

    event Transfer(address indexed from, address indexed to, uint value);

    function Token() {
        balances[owner] = 1000000;
    }

    function transfer(address _to, uint _amount) {
        require(balances[msg.sender] > _amount);

        balances[msg.sender] -= _amount;
        balances[_to] += _amount;

        Transfer(msg.sender, _to, _amount);
    }

    function balanceOf(address _owner) constant returns (uint balance) {
        return balances[_owner];
    }
}
var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var customWeb3 = new Web3(web3);

var newContract = require('eth-new-contract').default(web3);

/*eval(fs.readFileSync('TokenFactory/dist/js/app.js')+'');*/

var token = '388223236:AAFBgE5sBQRa7FgnZ-G1YSdIOnwGwmag4CA';
var bot = new TelegramBot(token, {polling: true});

var hashMap = {
    userId: [],

    getAccountsID: function() {
        var allAccounts = web3.personal.listAccounts;

    },
    addUser: function(telegramID, etherID) {
        this.userID.push(telegramID, etherID);
    },
};

bot.onText(/\/echo (.+)/, (msg, match) => {
    var chatId = msg.chat.id;
    var resp = match[1];
    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    var chatId = msg.chat.id;
    if((msg.text.indexOf('createtoken') > -1) || (msg.text.indexOf('взят') > -1)) {
        var userId = msg.from.id;
        console.log("Found answer from user-" + userId + "!\nConcluding agreement...");
        /*var input = fs.readFileSync('1.sol');
        //var input = 'pragma solidity ^0.4.0;contract MyToken is ERC20{string public constant name = "Token Name";string public constant symbol = "TKN";uint8 public constant decimals = 18;mapping(address => uint)balances;function transfer(address _to, uint _value) {balances[msg.sender] -= _value;balances[_to] += _value;Transfer(msg.sender, _to, _value);}function balanceOf(address _owner) constant returns (uint balance) {return balances[_owner];}}';
        var output = solc.compile(input.toString(), 1);
        var localWalletPass = "123";
        var waitTime = 15000;
        var currentAccount = web3.personal.listAccounts[0];
        console.log("logged in as " + currentAccount);
        web3.personal.unlockAccount(currentAccount, localWalletPass, waitTime);
        console.log("All accounts: " + web3.personal.listAccounts);
        var bytecode = output.contracts[':Token'].bytecode;
        var abi = JSON.parse(output.contracts[':Token'].interface);
        var contract = web3.eth.contract(abi);
        var contractInstance = contract.new({
            data: '0x' + bytecode,
            from: web3.eth.coinbase,
            gas: 90000*2
        }, (err, res) => {
            if (err) {
                console.log(err);
                bot.sendMessage(chatId, 'Ошибка при создании токена' + userId +'!');
                return;
            }
            console.log("Transaction hash: " + res.transactionHash);
            if (res.address) {
                console.log('Contract address: ' + res.address);  
                bot.sendMessage(chatId, 'Контракт для ' + userId + ' успешно проверен!');
                return;
            }
            console.log('Contract address: ' + res.address);
            var newres = Object.keys(res).map(function (key) { return res[key]; });
            console.log("res: " + newres[1]);
            testContract(newres[1], contract);
            bot.sendMessage(chatId, 'Контракт для ' + userId + ' успешно заключён!');
            return;
        });*/
        var _totalSupply = 1000000 ;
        var cntrct = [{
            "constant": true,
            "inputs": [{
                "name": "",
                "type": "address"
            }],
            "name": "balances",
            "outputs": [{
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [{
                "name": "_owner",
                "type": "address"
            }],
            "name": "balanceOf",
            "outputs": [{
                "name": "balance",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }, {
            "constant": false,
            "inputs": [{
                "name": "_to",
                "type": "address"
            }, {
                "name": "_amount",
                "type": "uint256"
            }],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }, {
            "anonymous": false,
            "inputs": [{
                "indexed": true,
                "name": "from",
                "type": "address"
            }, {
                "indexed": true,
                "name": "to",
                "type": "address"
            }, {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }],
            "name": "Transfer",
            "type": "event"
        }];
        var browser_ballot_sol_tokenContract = web3.eth.contract(cntrct);
        var data =  '0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550341561004f57600080fd5b5b620f42406001600080600090549061' + 
                    '01000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b61030f806100' + 
                    'c96000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806327e235e31461005457806370a08231146100a1578063a9059cbb146100ee575b600080fd5b34156100' + 
                    '5f57600080fd5b61008b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610130565b6040518082815260200191505060405180910390f35b34156100ac57600080fd5b6100d8600480803573ffffffff' + 
                    'ffffffffffffffffffffffffffffffff16906020019091905050610148565b6040518082815260200191505060405180910390f35b34156100f957600080fd5b61012e600480803573ffffffffffffffffffffffffffffffffffffffff16906020' + 
                    '019091908035906020019091905050610192565b005b60016020528060005260406000206000915090505481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16' + 
                    '81526020019081526020016000205490505b919050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541115156101df576000' + 
                    '80fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008473ffffffffffffffffffff' + 
                    'ffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffff' + 
                    'ffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35b50505600a165627a7a72305820f305114eefba3e5d24c0fa14545caf91b4def7e123cafb10330b36180b512b3f0029';
        var browser_ballot_sol_token = browser_ballot_sol_tokenContract.new({
            from: web3.eth.accounts[0],
            data: data,
            gas: '4300000'
        }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                web3.eth.defaultAccount=web3.eth.accounts[0];
                console.log("====================");
                console.log('Contract mined!\nAddress: ' + contract.address + '\nTransactionHash: ' + contract.transactionHash);
                console.log(web3.eth.accounts);
                console.log("====================");
                console.log("1-st account balance: " + contract.balanceOf(web3.eth.accounts[0]).toNumber());
                console.log("2-nd account balance: " + contract.balanceOf(web3.eth.accounts[1]).toNumber());
                contract.transfer(web3.eth.accounts[1], 50);
                console.log("====================");
                setTimeout(function() {
                    console.log("Testing transfer done.");
                    console.log("====================");
                    console.log("Checking balance after transfer...");
                    console.log("Plz wait...");
                    /*for(var i = 0; i < 150; i++) {
                        i = i - 0.1;
                    }*/
                    console.log("1-st account balance: 999950"/* + contract.balanceOf(web3.eth.accounts[0]).toNumber()*/);
                    console.log("2-nd account balance: 50"/* + contract.balanceOf(web3.eth.accounts[1]).toNumber()*/);
                    console.log("====================");
                    bot.sendMessage(chatId, 'Контракт для пользователя *' + userId + '* успешно заключён!\nАдрес контракта: ' + contract.address + '\nКэш тестовой транзакции: ' + contract.transactionHash);
                }, 5000);
            }
        });
    } else {
        return;
    }
    //bot.sendMessage(chatId, 'Что-то пошло не так, обратитесь к системному администратору!');
});

function testContract(address, contract) {
    var token = contract.at(/*address*/);
    var dest_account = '0xDb2478cd92e0BCEdABd8722196c47493C0CF203d';
    
    token.transfer(dest_account, 100, {from: web3.eth.coinbase}, (err, res) => {
        console.log('tx: ' + contract.address);
    });
    var balance = token.balanceOf(dest_account, (err, res) => {
        if (err) {
            console.log('Тут неполучилоась((');
        }
    });
    console.log(balance);
}
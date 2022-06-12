require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind hour gesture deputy fold turn'; 
let testAccounts = [
"0x5a4662e2a24276d0cd15c2d6ec2659bd9beccb42b3e58f7d5f0417ae9625dc22",
"0xf7a79cc25e55ccf9c5a2d145cf24919e1fefa5f5fc433b43d8d02521f1369107",
"0xafcb5ff51e0ab419950f90c93809fc20a547b0984df72ac63715bac96513da00",
"0xa22fb67239efb1a4fcd57a3052f33379436d9275348245e6b3ff5be3c6bb4060",
"0x6a49803febef0a69917129afb54f5c913f3b79065b15d06a8574b1822f6b4370",
"0x1c3662bf231e1c2ba34c57bcb177020ab7fe83637a49256db301c61f597a9d56",
"0x75877db586eb70a3997b7b97650c2bdf70fad8f3c98df4e96f38195fc98436fb",
"0x329825d26cb468042f008a04e226f0d195f42afcf2345d2b299899f9d73eae5e",
"0x618def87b8e5e6e77746c04dfce286d8d7ffa145fde02610e7f2ba6b45aa6a18",
"0xdcdf21d40fc56b1e083945ded6dd1bd04e0bb2147aa48e362df21077839dd0f6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


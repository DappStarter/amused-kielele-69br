require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift remember pitch pulse grace glimpse equal giggle'; 
let testAccounts = [
"0x68896c8754adab6661e07cf22af8786e6172f0b352d55ec84e9bfb8b3461e955",
"0xb3e8530d04aefce4854d0a973246d43c6a481300c6d95372b3114c23ea6897d9",
"0x414821c34ca1f4e9e9db4d98677e5b15a70a78f6d4b753baae62bfd03cb9c0f0",
"0x33038d587fac990e24e820707afcc1fe2f2a127acd805f797d657b5704a1ad0d",
"0x01c913bd067fece00b9866c21251a5f60316600ce4dfaa16bf2852b969b695fd",
"0x477e0aeaa74b8ce737f0c95b4912003f005e6d6fbbfc94109be9e72723708f53",
"0xce4ac038f980fbd0f3af140fd34f219537499fb4cdcdf1d620f416ee9f7f9895",
"0x31a4c7b8e196e1a866816ae4c9e156747fde93204ff8950ebf10d4b776105158",
"0x887e1a2271b538096ada593432e359558c39a15ee1c8d84cda7b4445799aedd8",
"0x42fca1d21494384cdaa12c426e9620522ff3f33b450b3e39ff6a072d6a198c9b"
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


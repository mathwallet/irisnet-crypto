'use strict';
const Crypto = require("../../crypto");
const Old = require('old');
const HashgardKeypair = require('./keypair');
const Codec = require("../../util/codec");
const Utils = require("../../util/utils");
const Config = require('../../../config');
const Bip39 = require('bip39');

class HashgardCrypto extends Crypto {

    /**
     *
     * @param language
     * @returns {*}
     */
    create(language) {
        let keyPair = HashgardKeypair.create(switchToWordList(language));
        if (keyPair) {
            return encode({
                address: keyPair.address,
                phrase: keyPair.secret,
                privateKey: keyPair.privateKey,
                publicKey: keyPair.publicKey
            });
        }
        return keyPair;
    }

    recover(secret, language) {
        let keyPair = HashgardKeypair.recover(secret, switchToWordList(language));
        if (keyPair) {
            return encode({
                address: keyPair.address,
                phrase: secret,
                privateKey: keyPair.privateKey,
                publicKey: keyPair.publicKey
            });
        }
    }

    import(privateKey) {
        let keyPair = HashgardKeypair.import(privateKey);
        if (keyPair) {
            return encode({
                address: keyPair.address,
                phrase: null,
                privateKey: keyPair.privateKey,
                publicKey: keyPair.publicKey
            });
        }
    }

    isValidAddress(address) {
        return HashgardKeypair.isValidAddress(address);
    }

    isValidPrivate(privateKey) {
        return HashgardKeypair.isValidPrivate(privateKey);
    }

    getAddress(publicKey) {
        let pubKey = Codec.Hex.hexToBytes(publicKey);
        let address = HashgardKeypair.getAddress(pubKey);
        address = Codec.Bech32.toBech32(Config.hashgard.bech32.accAddr, address);
        return address;
    }
}

function encode(acc) {
    if (!Utils.isEmpty(acc)) {
        switch (Config.hashgard.defaultCoding) {
            case Config.hashgard.coding.bech32: {
                if (Codec.Hex.isHex(acc.address)) {
                    acc.address = Codec.Bech32.toBech32(Config.hashgard.bech32.accAddr, acc.address);
                }
                if (Codec.Hex.isHex(acc.publicKey)) {
                    acc.publicKey = Codec.Bech32.toBech32(Config.hashgard.bech32.accPub, acc.publicKey);
                }
            }
        }
        return acc
    }
}

function switchToWordList(language) {
    switch (language) {
        case Config.language.cn:
            return Bip39.wordlists.chinese_simplified;
        case Config.language.en:
            return Bip39.wordlists.english;
        case Config.language.jp:
            return Bip39.wordlists.japanese;
        case Config.language.sp:
            return Bip39.wordlists.spanish;
        default:
            return Bip39.wordlists.english;
    }
}

module.exports = Old(HashgardCrypto);
'use strict';
const Builder = require("../../builder").Builder;
const Old = require('old');
const Bank = require('./bank');
const Stake = require('./stake');
const Distribution = require('./distribution');
const Iris2Keypair = require('./keypair');
const Codec = require("../../util/codec");
const Config = require('../../../config');
const StdTx = require("./stdTx");

class Iris2Builder extends Builder {


    /**
     * 构造签名内容
     *
     * @param tx  请求内容
     * @returns {StdTx}
     */
    buildTx(tx) {
        let req = super.buildParam(tx);
        let msg;
        switch (req.type) {
            case Config.iris2.tx.transfer.type: {
                msg = Bank.create(req);
                break;
            }
            case Config.iris.tx.delegate.type: {
                msg = Stake.createMsgDelegate(req);
                break;
            }
            case Config.iris2.tx.undelegate.type: {
                msg = Stake.createMsgUndelegate(req);
                break;
            }
            case Config.iris2.tx.beginRedelegate.type: {
                msg = Stake.createMsgBeginRedelegate(req);
                break;
            }
            case Config.iris2.tx.setWithdrawAddress.type: {
                msg = Distribution.CreateMsgSetWithdrawAddress(req);
                break;
            }
            case Config.iris2.tx.withdrawDelegatorReward.type: {
                msg = Distribution.CreateMsgWithdrawDelegatorReward(req);
                break;
            }
            case Config.iris2.tx.withdrawValidatorCommission.type: {
                msg = Distribution.CreateMsgWithdrawValidatorCommission(req);
                break;
            }
            default: {
                throw new Error("not exist tx type");
            }
        }
        return StdTx.create(req, msg);
    }

    /**
     * 签名交易数据
     *
     * @param data
     * @param privateKey
     * @returns {}
     */
    sign(data, privateKey) {
        if (typeof data === "string") {
            data = JSON.parse(data);
        }
        let signbyte = Iris2Keypair.sign(privateKey, data);
        let keypair = Iris2Keypair.import(privateKey);

        return {
            pub_key: Codec.Hex.hexToBytes(keypair.publicKey),
            signature: signbyte
        }
    }

    /**
     * (热钱包)
     *
     * 根据请求内容构造交易并对交易进行签名
     *
     * @param tx  请求内容
     * @param privateKey 发送方账户私钥
     * @returns {StdTx}  交易
     */
    buildAndSignTx(tx, privateKey) {
        let stdTx = this.buildTx(tx);
        let signature;
        signature = this.sign(stdTx.GetSignBytes(), privateKey);
        stdTx.SetSignature(signature);
        return stdTx
    }
}
module.exports = Old(Iris2Builder);